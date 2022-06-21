"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoryService = void 0;
const mongoose_1 = require("mongoose");
const collections_1 = require("../../constants/collections");
const exception_1 = require("../../db/models/category/exception");
const models_1 = require("../../db/models/category/models");
const common_service_1 = require("../common.service");
class CategoryService extends common_service_1.CommonServices {
    constructor(model) {
        super(model, exception_1.CategoryException);
    }
    async findByIdError(id) {
        const Category = await this.findById(id);
        if (!Category)
            throw exception_1.CategoryException.NotFound(id);
        return Category;
    }
    async getPaging(dto) {
        try {
            let query = {
                isDeleted: false,
                name: {
                    $options: 'ig',
                    $regex: dto.search,
                }
            };
            if (!dto.sortBy) {
                dto.sortBy = 'createdAt';
            }
            const $lookupBooks = {
                $lookup: {
                    from: collections_1.COLLECTIONS.BOOK,
                    let: {
                        categoryId: '$_id',
                    },
                    pipeline: [
                        {
                            $match: {
                                isDeleted: false,
                                $expr: {
                                    $eq: ['$categoryId', '$$categoryId'],
                                },
                            },
                        },
                        {
                            $lookup: {
                                from: collections_1.COLLECTIONS.AUTHOR,
                                foreignField: '_id',
                                localField: 'authorId',
                                as: 'author',
                            },
                        },
                        {
                            $unwind: {
                                path: '$author',
                                preserveNullAndEmptyArrays: true,
                            },
                        },
                        {
                            $project: {
                                _id: 1,
                                name: 1,
                                imgUrl: 1,
                                ebookUrl: 1,
                                description: 1,
                                author: {
                                    fullName: 1,
                                    imgUrl: 1,
                                }
                            },
                        },
                    ],
                    as: 'books',
                },
            };
            const $projection = {
                $project: {
                    _id: 1,
                    name: 1,
                    imgUrl: 1,
                    books: 1
                },
            };
            const $pipeline = [
                $lookupBooks,
                $projection
            ];
            if (!dto.limit) {
                dto.limit = await this.count(query);
            }
            if (!dto.page)
                dto.page = 1;
            return await this.findPaging(query, dto, $pipeline);
        }
        catch (error) {
            throw exception_1.CategoryException.UnknownError(error);
        }
    }
    async getCategoryFull(id) {
        try {
            const $match = {
                $match: {
                    isDeleted: false,
                    _id: new mongoose_1.Types.ObjectId(id),
                },
            };
            const $lookupBooks = {
                $lookup: {
                    from: collections_1.COLLECTIONS.BOOK,
                    let: {
                        categoryId: '$_id',
                    },
                    pipeline: [
                        {
                            $match: {
                                isDeleted: false,
                                $expr: {
                                    $eq: ['$categoryId', '$$categoryId'],
                                },
                            },
                        },
                        {
                            $lookup: {
                                from: collections_1.COLLECTIONS.AUTHOR,
                                foreignField: '_id',
                                localField: 'authorId',
                                as: 'author',
                            },
                        },
                        {
                            $unwind: {
                                path: '$author',
                                preserveNullAndEmptyArrays: true,
                            },
                        },
                        {
                            $project: {
                                _id: 1,
                                name: 1,
                                imgUrl: 1,
                                ebookUrl: 1,
                                description: 1,
                                author: {
                                    fullName: 1,
                                    imgUrl: 1,
                                }
                            },
                        },
                    ],
                    as: 'books',
                },
            };
            const $projection = {
                $project: {
                    _id: 1,
                    name: 1,
                    imgUrl: 1,
                    books: 1
                },
            };
            const $pipline = [
                $match,
                $lookupBooks,
                $projection
            ];
            const data = await this.aggregate($pipline);
            const category = data.shift();
            if (!category)
                throw exception_1.CategoryException.NotFound();
            return category;
        }
        catch (e) {
            if (e instanceof exception_1.CategoryException) {
                throw e;
            }
            else {
                throw exception_1.CategoryException.UnknownError(e);
            }
        }
    }
    async checkGenreId(id) {
        try {
            const $matchGenre = {
                $match: {
                    isDeleted: false,
                    _id: new mongoose_1.Types.ObjectId(id),
                },
            };
            const $lookupBook = {
                $lookup: {
                    from: collections_1.COLLECTIONS.BOOK,
                    foreignField: 'categoryId',
                    localField: '_id',
                    as: 'books',
                },
            };
            const $unwindBook = {
                $unwind: {
                    path: '$books',
                    preserveNullAndEmptyArrays: false,
                },
            };
            const $replaceRoot = {
                $replaceRoot: {
                    newRoot: '$books',
                },
            };
            const $matchBook = {
                $match: {
                    isDeleted: false,
                    genreId: new mongoose_1.Types.ObjectId(id),
                },
            };
            const $pipline = [$matchGenre, $lookupBook, $unwindBook, $replaceRoot, $matchBook];
            let data = await this.aggregate($pipline);
            const category = data.shift();
            if (category)
                throw exception_1.CategoryException.CanNotDeleteCategory(id);
            return category;
        }
        catch (e) {
            if (e instanceof exception_1.CategoryException) {
                throw e;
            }
            else {
                throw exception_1.CategoryException.UnknownError(e);
            }
        }
    }
}
exports.categoryService = new CategoryService(models_1.CategoryModel);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2F0ZWdvcnkuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21tb24vc2VydmljZS9jYXRlZ29yeS9jYXRlZ29yeS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUNBLHVDQUFpQztBQUNqQyw2REFBMEQ7QUFDMUQsa0VBQXVFO0FBQ3ZFLDREQUEwRTtBQUUxRSxzREFBbUQ7QUFFbkQsTUFBTSxlQUFnQixTQUFRLCtCQUF3QjtJQUNwRCxZQUFZLEtBQTBCO1FBQ3BDLEtBQUssQ0FBQyxLQUFLLEVBQUUsNkJBQWlCLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBQ00sS0FBSyxDQUFDLGFBQWEsQ0FBQyxFQUFFO1FBQzNCLE1BQU0sUUFBUSxHQUFHLE1BQU0sSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUN6QyxJQUFJLENBQUMsUUFBUTtZQUFFLE1BQU0sNkJBQWlCLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3BELE9BQU8sUUFBUSxDQUFDO0lBQ2xCLENBQUM7SUFFTSxLQUFLLENBQUMsU0FBUyxDQUFDLEdBQW1CO1FBQ3hDLElBQUk7WUFDRixJQUFJLEtBQUssR0FBRztnQkFDVixTQUFTLEVBQUUsS0FBSztnQkFDaEIsSUFBSSxFQUFFO29CQUNKLFFBQVEsRUFBRSxJQUFJO29CQUNkLE1BQU0sRUFBRSxHQUFHLENBQUMsTUFBTTtpQkFDbkI7YUFDRixDQUFBO1lBRUQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUU7Z0JBQ2YsR0FBRyxDQUFDLE1BQU0sR0FBRyxXQUFXLENBQUM7YUFDMUI7WUFFRCxNQUFNLFlBQVksR0FBRztnQkFDbkIsT0FBTyxFQUFFO29CQUNQLElBQUksRUFBRSx5QkFBVyxDQUFDLElBQUk7b0JBQ3RCLEdBQUcsRUFBRTt3QkFDSCxVQUFVLEVBQUUsTUFBTTtxQkFDbkI7b0JBQ0QsUUFBUSxFQUFFO3dCQUNSOzRCQUNFLE1BQU0sRUFBRTtnQ0FDTixTQUFTLEVBQUUsS0FBSztnQ0FDaEIsS0FBSyxFQUFFO29DQUNMLEdBQUcsRUFBRSxDQUFDLGFBQWEsRUFBRSxjQUFjLENBQUM7aUNBQ3JDOzZCQUNGO3lCQUNGO3dCQUNEOzRCQUNFLE9BQU8sRUFBRTtnQ0FDUCxJQUFJLEVBQUUseUJBQVcsQ0FBQyxNQUFNO2dDQUN4QixZQUFZLEVBQUUsS0FBSztnQ0FDbkIsVUFBVSxFQUFFLFVBQVU7Z0NBQ3RCLEVBQUUsRUFBRSxRQUFROzZCQUNiO3lCQUNGO3dCQUNEOzRCQUNFLE9BQU8sRUFBRTtnQ0FDUCxJQUFJLEVBQUUsU0FBUztnQ0FDZiwwQkFBMEIsRUFBRSxJQUFJOzZCQUNqQzt5QkFDRjt3QkFDRDs0QkFDRSxRQUFRLEVBQUU7Z0NBQ1IsR0FBRyxFQUFFLENBQUM7Z0NBQ04sSUFBSSxFQUFFLENBQUM7Z0NBQ1AsTUFBTSxFQUFFLENBQUM7Z0NBQ1QsUUFBUSxFQUFFLENBQUM7Z0NBQ1gsV0FBVyxFQUFFLENBQUM7Z0NBQ2QsTUFBTSxFQUFFO29DQUNOLFFBQVEsRUFBRSxDQUFDO29DQUNYLE1BQU0sRUFBRSxDQUFDO2lDQUNWOzZCQUNGO3lCQUNGO3FCQUNGO29CQUNELEVBQUUsRUFBRSxPQUFPO2lCQUNaO2FBQ0YsQ0FBQztZQUVGLE1BQU0sV0FBVyxHQUFHO2dCQUNsQixRQUFRLEVBQUU7b0JBQ1IsR0FBRyxFQUFFLENBQUM7b0JBQ04sSUFBSSxFQUFFLENBQUM7b0JBQ1AsTUFBTSxFQUFFLENBQUM7b0JBQ1QsS0FBSyxFQUFFLENBQUM7aUJBQ1Q7YUFDRixDQUFDO1lBRUYsTUFBTSxTQUFTLEdBQUc7Z0JBQ2hCLFlBQVk7Z0JBQ1osV0FBVzthQUNaLENBQUE7WUFFRCxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRTtnQkFDZCxHQUFHLENBQUMsS0FBSyxHQUFHLE1BQU0sSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUNyQztZQUVELElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSTtnQkFBRSxHQUFHLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQztZQUU1QixPQUFPLE1BQU0sSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLEVBQUUsR0FBRyxFQUFFLFNBQVMsQ0FBQyxDQUFDO1NBQ3JEO1FBQUMsT0FBTyxLQUFLLEVBQUU7WUFDZCxNQUFNLDZCQUFpQixDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUM3QztJQUNILENBQUM7SUFFTSxLQUFLLENBQUMsZUFBZSxDQUFJLEVBQVU7UUFDeEMsSUFBSTtZQUNGLE1BQU0sTUFBTSxHQUFHO2dCQUNiLE1BQU0sRUFBRTtvQkFDTixTQUFTLEVBQUUsS0FBSztvQkFDaEIsR0FBRyxFQUFFLElBQUksZ0JBQUssQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDO2lCQUM1QjthQUNGLENBQUM7WUFFRixNQUFNLFlBQVksR0FBRztnQkFDbkIsT0FBTyxFQUFFO29CQUNQLElBQUksRUFBRSx5QkFBVyxDQUFDLElBQUk7b0JBQ3RCLEdBQUcsRUFBRTt3QkFDSCxVQUFVLEVBQUUsTUFBTTtxQkFDbkI7b0JBQ0QsUUFBUSxFQUFFO3dCQUNSOzRCQUNFLE1BQU0sRUFBRTtnQ0FDTixTQUFTLEVBQUUsS0FBSztnQ0FDaEIsS0FBSyxFQUFFO29DQUNMLEdBQUcsRUFBRSxDQUFDLGFBQWEsRUFBRSxjQUFjLENBQUM7aUNBQ3JDOzZCQUNGO3lCQUNGO3dCQUNEOzRCQUNFLE9BQU8sRUFBRTtnQ0FDUCxJQUFJLEVBQUUseUJBQVcsQ0FBQyxNQUFNO2dDQUN4QixZQUFZLEVBQUUsS0FBSztnQ0FDbkIsVUFBVSxFQUFFLFVBQVU7Z0NBQ3RCLEVBQUUsRUFBRSxRQUFROzZCQUNiO3lCQUNGO3dCQUNEOzRCQUNFLE9BQU8sRUFBRTtnQ0FDUCxJQUFJLEVBQUUsU0FBUztnQ0FDZiwwQkFBMEIsRUFBRSxJQUFJOzZCQUNqQzt5QkFDRjt3QkFDRDs0QkFDRSxRQUFRLEVBQUU7Z0NBQ1IsR0FBRyxFQUFFLENBQUM7Z0NBQ04sSUFBSSxFQUFFLENBQUM7Z0NBQ1AsTUFBTSxFQUFFLENBQUM7Z0NBQ1QsUUFBUSxFQUFFLENBQUM7Z0NBQ1gsV0FBVyxFQUFFLENBQUM7Z0NBQ2QsTUFBTSxFQUFFO29DQUNOLFFBQVEsRUFBRSxDQUFDO29DQUNYLE1BQU0sRUFBRSxDQUFDO2lDQUNWOzZCQUNGO3lCQUNGO3FCQUNGO29CQUNELEVBQUUsRUFBRSxPQUFPO2lCQUNaO2FBQ0YsQ0FBQztZQUVGLE1BQU0sV0FBVyxHQUFHO2dCQUNsQixRQUFRLEVBQUU7b0JBQ1IsR0FBRyxFQUFFLENBQUM7b0JBQ04sSUFBSSxFQUFFLENBQUM7b0JBQ1AsTUFBTSxFQUFFLENBQUM7b0JBQ1QsS0FBSyxFQUFFLENBQUM7aUJBQ1Q7YUFDRixDQUFDO1lBRUYsTUFBTSxRQUFRLEdBQUc7Z0JBQ2YsTUFBTTtnQkFDTixZQUFZO2dCQUNaLFdBQVc7YUFDWixDQUFDO1lBRUYsTUFBTSxJQUFJLEdBQUcsTUFBTSxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQzVDLE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUM5QixJQUFJLENBQUMsUUFBUTtnQkFBRSxNQUFNLDZCQUFpQixDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQ2xELE9BQU8sUUFBUSxDQUFDO1NBQ2pCO1FBQUMsT0FBTyxDQUFDLEVBQUU7WUFDVixJQUFJLENBQUMsWUFBWSw2QkFBaUIsRUFBRTtnQkFDbEMsTUFBTSxDQUFDLENBQUM7YUFDVDtpQkFBTTtnQkFDTCxNQUFNLDZCQUFpQixDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUN6QztTQUNGO0lBQ0gsQ0FBQztJQUVNLEtBQUssQ0FBQyxZQUFZLENBQUksRUFBVTtRQUNyQyxJQUFJO1lBQ0YsTUFBTSxXQUFXLEdBQUc7Z0JBQ2xCLE1BQU0sRUFBRTtvQkFDTixTQUFTLEVBQUUsS0FBSztvQkFDaEIsR0FBRyxFQUFFLElBQUksZ0JBQUssQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDO2lCQUM1QjthQUNGLENBQUM7WUFFRixNQUFNLFdBQVcsR0FBRztnQkFDbEIsT0FBTyxFQUFFO29CQUNQLElBQUksRUFBRSx5QkFBVyxDQUFDLElBQUk7b0JBQ3RCLFlBQVksRUFBRSxZQUFZO29CQUMxQixVQUFVLEVBQUUsS0FBSztvQkFDakIsRUFBRSxFQUFFLE9BQU87aUJBQ1o7YUFDRixDQUFDO1lBRUYsTUFBTSxXQUFXLEdBQUc7Z0JBQ2xCLE9BQU8sRUFBRTtvQkFDUCxJQUFJLEVBQUUsUUFBUTtvQkFDZCwwQkFBMEIsRUFBRSxLQUFLO2lCQUNsQzthQUNGLENBQUM7WUFFRixNQUFNLFlBQVksR0FBRztnQkFDbkIsWUFBWSxFQUFFO29CQUNaLE9BQU8sRUFBRSxRQUFRO2lCQUNsQjthQUNGLENBQUM7WUFFRixNQUFNLFVBQVUsR0FBRztnQkFDakIsTUFBTSxFQUFFO29CQUNOLFNBQVMsRUFBRSxLQUFLO29CQUNoQixPQUFPLEVBQUUsSUFBSSxnQkFBSyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUM7aUJBQ2hDO2FBQ0YsQ0FBQztZQUVGLE1BQU0sUUFBUSxHQUFHLENBQUMsV0FBVyxFQUFFLFdBQVcsRUFBRSxXQUFXLEVBQUUsWUFBWSxFQUFFLFVBQVUsQ0FBQyxDQUFDO1lBRW5GLElBQUksSUFBSSxHQUFHLE1BQU0sSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUUxQyxNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDOUIsSUFBSSxRQUFRO2dCQUFFLE1BQU0sNkJBQWlCLENBQUMsb0JBQW9CLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDL0QsT0FBTyxRQUFRLENBQUM7U0FDakI7UUFBQyxPQUFPLENBQUMsRUFBRTtZQUNWLElBQUksQ0FBQyxZQUFZLDZCQUFpQixFQUFFO2dCQUNsQyxNQUFNLENBQUMsQ0FBQzthQUNUO2lCQUFNO2dCQUNMLE1BQU0sNkJBQWlCLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ3pDO1NBQ0Y7SUFDSCxDQUFDO0NBQ0Y7QUFFWSxRQUFBLGVBQWUsR0FBRyxJQUFJLGVBQWUsQ0FBQyxzQkFBYSxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb2RlbFR5cGUgfSBmcm9tICdAdHlwZWdvb3NlL3R5cGVnb29zZS9saWIvdHlwZXMnO1xyXG5pbXBvcnQgeyBUeXBlcyB9IGZyb20gJ21vbmdvb3NlJztcclxuaW1wb3J0IHsgQ09MTEVDVElPTlMgfSBmcm9tICcuLi8uLi9jb25zdGFudHMvY29sbGVjdGlvbnMnO1xyXG5pbXBvcnQgeyBDYXRlZ29yeUV4Y2VwdGlvbiB9IGZyb20gJy4uLy4uL2RiL21vZGVscy9jYXRlZ29yeS9leGNlcHRpb24nO1xyXG5pbXBvcnQgeyBDYXRlZ29yeSwgQ2F0ZWdvcnlNb2RlbCB9IGZyb20gJy4uLy4uL2RiL21vZGVscy9jYXRlZ29yeS9tb2RlbHMnO1xyXG5pbXBvcnQgeyBDYXRlZ29yeUdldER0byB9IGZyb20gJy4uLy4uL3ZhbGlkYXRpb24vZHRvL2NhdGVnb3J5LmR0byc7XHJcbmltcG9ydCB7IENvbW1vblNlcnZpY2VzIH0gZnJvbSAnLi4vY29tbW9uLnNlcnZpY2UnO1xyXG5cclxuY2xhc3MgQ2F0ZWdvcnlTZXJ2aWNlIGV4dGVuZHMgQ29tbW9uU2VydmljZXM8Q2F0ZWdvcnk+IHtcclxuICBjb25zdHJ1Y3Rvcihtb2RlbDogTW9kZWxUeXBlPENhdGVnb3J5Pikge1xyXG4gICAgc3VwZXIobW9kZWwsIENhdGVnb3J5RXhjZXB0aW9uKTtcclxuICB9XHJcbiAgcHVibGljIGFzeW5jIGZpbmRCeUlkRXJyb3IoaWQpIHtcclxuICAgIGNvbnN0IENhdGVnb3J5ID0gYXdhaXQgdGhpcy5maW5kQnlJZChpZCk7XHJcbiAgICBpZiAoIUNhdGVnb3J5KSB0aHJvdyBDYXRlZ29yeUV4Y2VwdGlvbi5Ob3RGb3VuZChpZCk7XHJcbiAgICByZXR1cm4gQ2F0ZWdvcnk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgYXN5bmMgZ2V0UGFnaW5nKGR0bzogQ2F0ZWdvcnlHZXREdG8pIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGxldCBxdWVyeSA9IHtcclxuICAgICAgICBpc0RlbGV0ZWQ6IGZhbHNlLFxyXG4gICAgICAgIG5hbWU6IHtcclxuICAgICAgICAgICRvcHRpb25zOiAnaWcnLFxyXG4gICAgICAgICAgJHJlZ2V4OiBkdG8uc2VhcmNoLFxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKCFkdG8uc29ydEJ5KSB7XHJcbiAgICAgICAgZHRvLnNvcnRCeSA9ICdjcmVhdGVkQXQnO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zdCAkbG9va3VwQm9va3MgPSB7XHJcbiAgICAgICAgJGxvb2t1cDoge1xyXG4gICAgICAgICAgZnJvbTogQ09MTEVDVElPTlMuQk9PSyxcclxuICAgICAgICAgIGxldDoge1xyXG4gICAgICAgICAgICBjYXRlZ29yeUlkOiAnJF9pZCcsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgcGlwZWxpbmU6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICRtYXRjaDoge1xyXG4gICAgICAgICAgICAgICAgaXNEZWxldGVkOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICRleHByOiB7XHJcbiAgICAgICAgICAgICAgICAgICRlcTogWyckY2F0ZWdvcnlJZCcsICckJGNhdGVnb3J5SWQnXSxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICRsb29rdXA6IHtcclxuICAgICAgICAgICAgICAgIGZyb206IENPTExFQ1RJT05TLkFVVEhPUixcclxuICAgICAgICAgICAgICAgIGZvcmVpZ25GaWVsZDogJ19pZCcsXHJcbiAgICAgICAgICAgICAgICBsb2NhbEZpZWxkOiAnYXV0aG9ySWQnLFxyXG4gICAgICAgICAgICAgICAgYXM6ICdhdXRob3InLFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAkdW53aW5kOiB7XHJcbiAgICAgICAgICAgICAgICBwYXRoOiAnJGF1dGhvcicsXHJcbiAgICAgICAgICAgICAgICBwcmVzZXJ2ZU51bGxBbmRFbXB0eUFycmF5czogdHJ1ZSxcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgJHByb2plY3Q6IHtcclxuICAgICAgICAgICAgICAgIF9pZDogMSxcclxuICAgICAgICAgICAgICAgIG5hbWU6IDEsXHJcbiAgICAgICAgICAgICAgICBpbWdVcmw6IDEsXHJcbiAgICAgICAgICAgICAgICBlYm9va1VybDogMSxcclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAxLFxyXG4gICAgICAgICAgICAgICAgYXV0aG9yOiB7XHJcbiAgICAgICAgICAgICAgICAgIGZ1bGxOYW1lOiAxLFxyXG4gICAgICAgICAgICAgICAgICBpbWdVcmw6IDEsXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIF0sXHJcbiAgICAgICAgICBhczogJ2Jvb2tzJyxcclxuICAgICAgICB9LFxyXG4gICAgICB9O1xyXG5cclxuICAgICAgY29uc3QgJHByb2plY3Rpb24gPSB7XHJcbiAgICAgICAgJHByb2plY3Q6IHtcclxuICAgICAgICAgIF9pZDogMSxcclxuICAgICAgICAgIG5hbWU6IDEsXHJcbiAgICAgICAgICBpbWdVcmw6IDEsXHJcbiAgICAgICAgICBib29rczogMVxyXG4gICAgICAgIH0sXHJcbiAgICAgIH07XHJcblxyXG4gICAgICBjb25zdCAkcGlwZWxpbmUgPSBbXHJcbiAgICAgICAgJGxvb2t1cEJvb2tzLFxyXG4gICAgICAgICRwcm9qZWN0aW9uXHJcbiAgICAgIF1cclxuXHJcbiAgICAgIGlmICghZHRvLmxpbWl0KSB7XHJcbiAgICAgICAgZHRvLmxpbWl0ID0gYXdhaXQgdGhpcy5jb3VudChxdWVyeSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICghZHRvLnBhZ2UpIGR0by5wYWdlID0gMTtcclxuXHJcbiAgICAgIHJldHVybiBhd2FpdCB0aGlzLmZpbmRQYWdpbmcocXVlcnksIGR0bywgJHBpcGVsaW5lKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIHRocm93IENhdGVnb3J5RXhjZXB0aW9uLlVua25vd25FcnJvcihlcnJvcik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgYXN5bmMgZ2V0Q2F0ZWdvcnlGdWxsPFQ+KGlkOiBzdHJpbmcsKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCAkbWF0Y2ggPSB7XHJcbiAgICAgICAgJG1hdGNoOiB7XHJcbiAgICAgICAgICBpc0RlbGV0ZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgX2lkOiBuZXcgVHlwZXMuT2JqZWN0SWQoaWQpLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH07XHJcblxyXG4gICAgICBjb25zdCAkbG9va3VwQm9va3MgPSB7XHJcbiAgICAgICAgJGxvb2t1cDoge1xyXG4gICAgICAgICAgZnJvbTogQ09MTEVDVElPTlMuQk9PSyxcclxuICAgICAgICAgIGxldDoge1xyXG4gICAgICAgICAgICBjYXRlZ29yeUlkOiAnJF9pZCcsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgcGlwZWxpbmU6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICRtYXRjaDoge1xyXG4gICAgICAgICAgICAgICAgaXNEZWxldGVkOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICRleHByOiB7XHJcbiAgICAgICAgICAgICAgICAgICRlcTogWyckY2F0ZWdvcnlJZCcsICckJGNhdGVnb3J5SWQnXSxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICRsb29rdXA6IHtcclxuICAgICAgICAgICAgICAgIGZyb206IENPTExFQ1RJT05TLkFVVEhPUixcclxuICAgICAgICAgICAgICAgIGZvcmVpZ25GaWVsZDogJ19pZCcsXHJcbiAgICAgICAgICAgICAgICBsb2NhbEZpZWxkOiAnYXV0aG9ySWQnLFxyXG4gICAgICAgICAgICAgICAgYXM6ICdhdXRob3InLFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAkdW53aW5kOiB7XHJcbiAgICAgICAgICAgICAgICBwYXRoOiAnJGF1dGhvcicsXHJcbiAgICAgICAgICAgICAgICBwcmVzZXJ2ZU51bGxBbmRFbXB0eUFycmF5czogdHJ1ZSxcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgJHByb2plY3Q6IHtcclxuICAgICAgICAgICAgICAgIF9pZDogMSxcclxuICAgICAgICAgICAgICAgIG5hbWU6IDEsXHJcbiAgICAgICAgICAgICAgICBpbWdVcmw6IDEsXHJcbiAgICAgICAgICAgICAgICBlYm9va1VybDogMSxcclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAxLFxyXG4gICAgICAgICAgICAgICAgYXV0aG9yOiB7XHJcbiAgICAgICAgICAgICAgICAgIGZ1bGxOYW1lOiAxLFxyXG4gICAgICAgICAgICAgICAgICBpbWdVcmw6IDEsXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIF0sXHJcbiAgICAgICAgICBhczogJ2Jvb2tzJyxcclxuICAgICAgICB9LFxyXG4gICAgICB9O1xyXG5cclxuICAgICAgY29uc3QgJHByb2plY3Rpb24gPSB7XHJcbiAgICAgICAgJHByb2plY3Q6IHtcclxuICAgICAgICAgIF9pZDogMSxcclxuICAgICAgICAgIG5hbWU6IDEsXHJcbiAgICAgICAgICBpbWdVcmw6IDEsXHJcbiAgICAgICAgICBib29rczogMVxyXG4gICAgICAgIH0sXHJcbiAgICAgIH07XHJcblxyXG4gICAgICBjb25zdCAkcGlwbGluZSA9IFtcclxuICAgICAgICAkbWF0Y2gsXHJcbiAgICAgICAgJGxvb2t1cEJvb2tzLFxyXG4gICAgICAgICRwcm9qZWN0aW9uXHJcbiAgICAgIF07XHJcblxyXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgdGhpcy5hZ2dyZWdhdGUoJHBpcGxpbmUpO1xyXG4gICAgICBjb25zdCBjYXRlZ29yeSA9IGRhdGEuc2hpZnQoKTtcclxuICAgICAgaWYgKCFjYXRlZ29yeSkgdGhyb3cgQ2F0ZWdvcnlFeGNlcHRpb24uTm90Rm91bmQoKTtcclxuICAgICAgcmV0dXJuIGNhdGVnb3J5O1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICBpZiAoZSBpbnN0YW5jZW9mIENhdGVnb3J5RXhjZXB0aW9uKSB7XHJcbiAgICAgICAgdGhyb3cgZTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aHJvdyBDYXRlZ29yeUV4Y2VwdGlvbi5Vbmtub3duRXJyb3IoZSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBhc3luYyBjaGVja0dlbnJlSWQ8VD4oaWQ6IHN0cmluZykge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgJG1hdGNoR2VucmUgPSB7XHJcbiAgICAgICAgJG1hdGNoOiB7XHJcbiAgICAgICAgICBpc0RlbGV0ZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgX2lkOiBuZXcgVHlwZXMuT2JqZWN0SWQoaWQpLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH07XHJcblxyXG4gICAgICBjb25zdCAkbG9va3VwQm9vayA9IHtcclxuICAgICAgICAkbG9va3VwOiB7XHJcbiAgICAgICAgICBmcm9tOiBDT0xMRUNUSU9OUy5CT09LLFxyXG4gICAgICAgICAgZm9yZWlnbkZpZWxkOiAnY2F0ZWdvcnlJZCcsXHJcbiAgICAgICAgICBsb2NhbEZpZWxkOiAnX2lkJyxcclxuICAgICAgICAgIGFzOiAnYm9va3MnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH07XHJcblxyXG4gICAgICBjb25zdCAkdW53aW5kQm9vayA9IHtcclxuICAgICAgICAkdW53aW5kOiB7XHJcbiAgICAgICAgICBwYXRoOiAnJGJvb2tzJyxcclxuICAgICAgICAgIHByZXNlcnZlTnVsbEFuZEVtcHR5QXJyYXlzOiBmYWxzZSxcclxuICAgICAgICB9LFxyXG4gICAgICB9O1xyXG5cclxuICAgICAgY29uc3QgJHJlcGxhY2VSb290ID0ge1xyXG4gICAgICAgICRyZXBsYWNlUm9vdDoge1xyXG4gICAgICAgICAgbmV3Um9vdDogJyRib29rcycsXHJcbiAgICAgICAgfSxcclxuICAgICAgfTtcclxuXHJcbiAgICAgIGNvbnN0ICRtYXRjaEJvb2sgPSB7XHJcbiAgICAgICAgJG1hdGNoOiB7XHJcbiAgICAgICAgICBpc0RlbGV0ZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgZ2VucmVJZDogbmV3IFR5cGVzLk9iamVjdElkKGlkKSxcclxuICAgICAgICB9LFxyXG4gICAgICB9O1xyXG5cclxuICAgICAgY29uc3QgJHBpcGxpbmUgPSBbJG1hdGNoR2VucmUsICRsb29rdXBCb29rLCAkdW53aW5kQm9vaywgJHJlcGxhY2VSb290LCAkbWF0Y2hCb29rXTtcclxuXHJcbiAgICAgIGxldCBkYXRhID0gYXdhaXQgdGhpcy5hZ2dyZWdhdGUoJHBpcGxpbmUpO1xyXG5cclxuICAgICAgY29uc3QgY2F0ZWdvcnkgPSBkYXRhLnNoaWZ0KCk7XHJcbiAgICAgIGlmIChjYXRlZ29yeSkgdGhyb3cgQ2F0ZWdvcnlFeGNlcHRpb24uQ2FuTm90RGVsZXRlQ2F0ZWdvcnkoaWQpO1xyXG4gICAgICByZXR1cm4gY2F0ZWdvcnk7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIGlmIChlIGluc3RhbmNlb2YgQ2F0ZWdvcnlFeGNlcHRpb24pIHtcclxuICAgICAgICB0aHJvdyBlO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRocm93IENhdGVnb3J5RXhjZXB0aW9uLlVua25vd25FcnJvcihlKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGNhdGVnb3J5U2VydmljZSA9IG5ldyBDYXRlZ29yeVNlcnZpY2UoQ2F0ZWdvcnlNb2RlbCk7XHJcbiJdfQ==