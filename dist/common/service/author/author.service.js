"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authorService = void 0;
const mongoose_1 = require("mongoose");
const collections_1 = require("../../constants/collections");
const exception_1 = require("../../db/models/author/exception");
const models_1 = require("../../db/models/author/models");
const common_service_1 = require("../common.service");
class AuthorService extends common_service_1.CommonServices {
    constructor(model) {
        super(model);
    }
    async findByIdError(id) {
        const author = await this.findById(id);
        if (!author)
            throw exception_1.AuthorException.NotFound(id);
        return author;
    }
    async getPaging(dto) {
        try {
            let query = {
                isDeleted: false
            };
            if (dto.search) {
                query = {
                    isDeleted: false,
                    fullName: {
                        $options: 'ig',
                        $regex: dto.search,
                    },
                };
            }
            const $lookupBook = {
                $lookup: {
                    from: collections_1.COLLECTIONS.BOOK,
                    let: {
                        authorId: '$authorId',
                    },
                    pipeline: [
                        {
                            $match: {
                                isDeleted: false,
                                isAvailable: true,
                                $expr: {
                                    $eq: ['$authorId', '$$authorId']
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
                    imgUrl: 1,
                    fullName: 1,
                    bookCount: {
                        $size: "$books"
                    }
                },
            };
            const $pipline = [$lookupBook, $projection];
            if (!dto.limit)
                dto.limit = await this.count(query);
            return await this.findPaging(query, dto, $pipline);
        }
        catch (error) {
            throw exception_1.AuthorException.UnknownError(error);
        }
    }
    async getByIdFull(id) {
        try {
            const $match = {
                $match: {
                    isDeleted: false,
                    _id: new mongoose_1.Types.ObjectId(id),
                },
            };
            const $projection = {
                $project: {
                    _id: 1,
                    imgUrl: 1,
                    fullName: 1
                },
            };
            const $pipeline = [$match, $projection];
            const data = await this.aggregate($pipeline);
            if (!data || !data[0])
                throw exception_1.AuthorException.NotFound(id);
            return data[0];
        }
        catch (e) {
            if (e instanceof exception_1.AuthorException) {
                throw e;
            }
            else {
                throw exception_1.AuthorException.UnknownError(e);
            }
        }
    }
    async checkAuthorId(id) {
        try {
            const $pipeline = [
                {
                    $match: {
                        _id: new mongoose_1.Types.ObjectId(id),
                    },
                },
                {
                    $lookup: {
                        from: collections_1.COLLECTIONS.BOOK,
                        localField: '_id',
                        foreignField: 'authorId',
                        as: 'book',
                    },
                },
                {
                    $unwind: {
                        path: '$book',
                        preserveNullAndEmptyArrays: false,
                    },
                },
                {
                    $match: {
                        'book.isDeleted': false,
                    },
                },
                {
                    $project: {
                        deletedAt: 0,
                        isDeleted: 0,
                        __v: 0,
                    },
                },
            ];
            const data = await this.aggregate($pipeline);
            if (data[0])
                throw exception_1.AuthorException.DeletedAuthor(id);
            return data;
        }
        catch (e) {
            if (e instanceof exception_1.AuthorException) {
                throw e;
            }
            else {
                throw exception_1.AuthorException.UnknownError(e);
            }
        }
    }
}
exports.authorService = new AuthorService(models_1.AuthorModel);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aG9yLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvY29tbW9uL3NlcnZpY2UvYXV0aG9yL2F1dGhvci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUNBLHVDQUFpQztBQUNqQyw2REFBMEQ7QUFDMUQsZ0VBQW1FO0FBQ25FLDBEQUFvRTtBQUVwRSxzREFBbUQ7QUFFbkQsTUFBTSxhQUFjLFNBQVEsK0JBQXNCO0lBQ2hELFlBQVksS0FBd0I7UUFDbEMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2YsQ0FBQztJQUNNLEtBQUssQ0FBQyxhQUFhLENBQUMsRUFBRTtRQUMzQixNQUFNLE1BQU0sR0FBRyxNQUFNLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDdkMsSUFBSSxDQUFDLE1BQU07WUFBRSxNQUFNLDJCQUFlLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ2hELE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7SUFFTSxLQUFLLENBQUMsU0FBUyxDQUFJLEdBQWlCO1FBQ3pDLElBQUk7WUFDRixJQUFJLEtBQUssR0FBUTtnQkFDZixTQUFTLEVBQUUsS0FBSzthQUNqQixDQUFDO1lBRUYsSUFBSSxHQUFHLENBQUMsTUFBTSxFQUFFO2dCQUNkLEtBQUssR0FBRztvQkFDTixTQUFTLEVBQUUsS0FBSztvQkFDaEIsUUFBUSxFQUFFO3dCQUNSLFFBQVEsRUFBRSxJQUFJO3dCQUNkLE1BQU0sRUFBRSxHQUFHLENBQUMsTUFBTTtxQkFDbkI7aUJBQ0YsQ0FBQzthQUNIO1lBRUQsTUFBTSxXQUFXLEdBQUc7Z0JBQ2xCLE9BQU8sRUFBRTtvQkFDUCxJQUFJLEVBQUUseUJBQVcsQ0FBQyxJQUFJO29CQUN0QixHQUFHLEVBQUU7d0JBQ0gsUUFBUSxFQUFFLFdBQVc7cUJBQ3RCO29CQUNELFFBQVEsRUFBRTt3QkFDUjs0QkFDRSxNQUFNLEVBQUU7Z0NB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LEdBQUcsRUFBRSxDQUFDO3FCQUNQO2lCQUNGO2FBQ0YsQ0FBQztZQUVGLE1BQU0sSUFBSSxHQUFHLE1BQU0sSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUM3QyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUM7Z0JBQUUsTUFBTSwyQkFBZSxDQUFDLGFBQWEsQ0FBQyxFQUFFLENBQUMsQ0FBQTtZQUNwRCxPQUFPLElBQUksQ0FBQztTQUNiO1FBQUMsT0FBTyxDQUFDLEVBQUU7WUFDVixJQUFJLENBQUMsWUFBWSwyQkFBZSxFQUFFO2dCQUNoQyxNQUFNLENBQUMsQ0FBQzthQUNUO2lCQUFNO2dCQUNMLE1BQU0sMkJBQWUsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDdkM7U0FDRjtJQUNILENBQUM7Q0FDRjtBQUVZLFFBQUEsYUFBYSxHQUFHLElBQUksYUFBYSxDQUFDLG9CQUFXLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vZGVsVHlwZSB9IGZyb20gJ0B0eXBlZ29vc2UvdHlwZWdvb3NlL2xpYi90eXBlcyc7XHJcbmltcG9ydCB7IFR5cGVzIH0gZnJvbSAnbW9uZ29vc2UnO1xyXG5pbXBvcnQgeyBDT0xMRUNUSU9OUyB9IGZyb20gJy4uLy4uL2NvbnN0YW50cy9jb2xsZWN0aW9ucyc7XHJcbmltcG9ydCB7IEF1dGhvckV4Y2VwdGlvbiB9IGZyb20gJy4uLy4uL2RiL21vZGVscy9hdXRob3IvZXhjZXB0aW9uJztcclxuaW1wb3J0IHsgQXV0aG9yLCBBdXRob3JNb2RlbCB9IGZyb20gJy4uLy4uL2RiL21vZGVscy9hdXRob3IvbW9kZWxzJztcclxuaW1wb3J0IHsgQXV0aG9yR2V0RHRvIH0gZnJvbSAnLi4vLi4vdmFsaWRhdGlvbi9kdG8vYm9vay9hdXRob3IuZHRvJztcclxuaW1wb3J0IHsgQ29tbW9uU2VydmljZXMgfSBmcm9tICcuLi9jb21tb24uc2VydmljZSc7XHJcblxyXG5jbGFzcyBBdXRob3JTZXJ2aWNlIGV4dGVuZHMgQ29tbW9uU2VydmljZXM8QXV0aG9yPiB7XHJcbiAgY29uc3RydWN0b3IobW9kZWw6IE1vZGVsVHlwZTxBdXRob3I+KSB7XHJcbiAgICBzdXBlcihtb2RlbCk7XHJcbiAgfVxyXG4gIHB1YmxpYyBhc3luYyBmaW5kQnlJZEVycm9yKGlkKSB7XHJcbiAgICBjb25zdCBhdXRob3IgPSBhd2FpdCB0aGlzLmZpbmRCeUlkKGlkKTtcclxuICAgIGlmICghYXV0aG9yKSB0aHJvdyBBdXRob3JFeGNlcHRpb24uTm90Rm91bmQoaWQpO1xyXG4gICAgcmV0dXJuIGF1dGhvcjtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBhc3luYyBnZXRQYWdpbmc8VD4oZHRvOiBBdXRob3JHZXREdG8pIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGxldCBxdWVyeTogYW55ID0ge1xyXG4gICAgICAgIGlzRGVsZXRlZDogZmFsc2VcclxuICAgICAgfTtcclxuXHJcbiAgICAgIGlmIChkdG8uc2VhcmNoKSB7XHJcbiAgICAgICAgcXVlcnkgPSB7XHJcbiAgICAgICAgICBpc0RlbGV0ZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgZnVsbE5hbWU6IHtcclxuICAgICAgICAgICAgJG9wdGlvbnM6ICdpZycsXHJcbiAgICAgICAgICAgICRyZWdleDogZHRvLnNlYXJjaCxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfTtcclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc3QgJGxvb2t1cEJvb2sgPSB7XHJcbiAgICAgICAgJGxvb2t1cDoge1xyXG4gICAgICAgICAgZnJvbTogQ09MTEVDVElPTlMuQk9PSyxcclxuICAgICAgICAgIGxldDoge1xyXG4gICAgICAgICAgICBhdXRob3JJZDogJyRhdXRob3JJZCcsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgcGlwZWxpbmU6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICRtYXRjaDoge1xyXG4gICAgICAgICAgICAgICAgaXNEZWxldGVkOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGlzQXZhaWxhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgJGV4cHI6IHtcclxuICAgICAgICAgICAgICAgICAgJGVxOiBbJyRhdXRob3JJZCcsICckJGF1dGhvcklkJ11cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgXSxcclxuICAgICAgICAgIGFzOiAnYm9va3MnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH07XHJcblxyXG4gICAgICBjb25zdCAkcHJvamVjdGlvbiA9IHtcclxuICAgICAgICAkcHJvamVjdDoge1xyXG4gICAgICAgICAgX2lkOiAxLFxyXG4gICAgICAgICAgaW1nVXJsOiAxLFxyXG4gICAgICAgICAgZnVsbE5hbWU6IDEsXHJcblxyXG4gICAgICAgICAgYm9va0NvdW50OiB7XHJcbiAgICAgICAgICAgICRzaXplOiBcIiRib29rc1wiXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgfTtcclxuXHJcbiAgICAgIGNvbnN0ICRwaXBsaW5lID0gWyRsb29rdXBCb29rLCAkcHJvamVjdGlvbl07XHJcblxyXG4gICAgICBpZiAoIWR0by5saW1pdCkgZHRvLmxpbWl0ID0gYXdhaXQgdGhpcy5jb3VudChxdWVyeSlcclxuXHJcbiAgICAgIHJldHVybiBhd2FpdCB0aGlzLmZpbmRQYWdpbmcocXVlcnksIGR0bywgJHBpcGxpbmUpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgdGhyb3cgQXV0aG9yRXhjZXB0aW9uLlVua25vd25FcnJvcihlcnJvcik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgYXN5bmMgZ2V0QnlJZEZ1bGw8VD4oaWQ6IHN0cmluZykge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgJG1hdGNoID0ge1xyXG4gICAgICAgICRtYXRjaDoge1xyXG4gICAgICAgICAgaXNEZWxldGVkOiBmYWxzZSxcclxuICAgICAgICAgIF9pZDogbmV3IFR5cGVzLk9iamVjdElkKGlkKSxcclxuICAgICAgICB9LFxyXG4gICAgICB9O1xyXG5cclxuICAgICAgY29uc3QgJHByb2plY3Rpb24gPSB7XHJcbiAgICAgICAgJHByb2plY3Q6IHtcclxuICAgICAgICAgIF9pZDogMSxcclxuICAgICAgICAgIGltZ1VybDogMSxcclxuICAgICAgICAgIGZ1bGxOYW1lOiAxXHJcbiAgICAgICAgfSxcclxuICAgICAgfTtcclxuXHJcbiAgICAgIGNvbnN0ICRwaXBlbGluZSA9IFskbWF0Y2gsICRwcm9qZWN0aW9uXTtcclxuXHJcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCB0aGlzLmFnZ3JlZ2F0ZSgkcGlwZWxpbmUpO1xyXG4gICAgICBpZiAoIWRhdGEgfHwgIWRhdGFbMF0pIHRocm93IEF1dGhvckV4Y2VwdGlvbi5Ob3RGb3VuZChpZClcclxuICAgICAgcmV0dXJuIGRhdGFbMF07XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIGlmIChlIGluc3RhbmNlb2YgQXV0aG9yRXhjZXB0aW9uKSB7XHJcbiAgICAgICAgdGhyb3cgZTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aHJvdyBBdXRob3JFeGNlcHRpb24uVW5rbm93bkVycm9yKGUpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgYXN5bmMgY2hlY2tBdXRob3JJZDxUPihpZDogc3RyaW5nKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCAkcGlwZWxpbmUgPSBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgJG1hdGNoOiB7XHJcbiAgICAgICAgICAgIF9pZDogbmV3IFR5cGVzLk9iamVjdElkKGlkKSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAkbG9va3VwOiB7XHJcbiAgICAgICAgICAgIGZyb206IENPTExFQ1RJT05TLkJPT0ssXHJcbiAgICAgICAgICAgIGxvY2FsRmllbGQ6ICdfaWQnLFxyXG4gICAgICAgICAgICBmb3JlaWduRmllbGQ6ICdhdXRob3JJZCcsXHJcbiAgICAgICAgICAgIGFzOiAnYm9vaycsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgJHVud2luZDoge1xyXG4gICAgICAgICAgICBwYXRoOiAnJGJvb2snLFxyXG4gICAgICAgICAgICBwcmVzZXJ2ZU51bGxBbmRFbXB0eUFycmF5czogZmFsc2UsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgJG1hdGNoOiB7XHJcbiAgICAgICAgICAgICdib29rLmlzRGVsZXRlZCc6IGZhbHNlLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICRwcm9qZWN0OiB7XHJcbiAgICAgICAgICAgIGRlbGV0ZWRBdDogMCxcclxuICAgICAgICAgICAgaXNEZWxldGVkOiAwLFxyXG4gICAgICAgICAgICBfX3Y6IDAsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgIF07XHJcblxyXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgdGhpcy5hZ2dyZWdhdGUoJHBpcGVsaW5lKTtcclxuICAgICAgaWYgKGRhdGFbMF0pIHRocm93IEF1dGhvckV4Y2VwdGlvbi5EZWxldGVkQXV0aG9yKGlkKVxyXG4gICAgICByZXR1cm4gZGF0YTtcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgaWYgKGUgaW5zdGFuY2VvZiBBdXRob3JFeGNlcHRpb24pIHtcclxuICAgICAgICB0aHJvdyBlO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRocm93IEF1dGhvckV4Y2VwdGlvbi5Vbmtub3duRXJyb3IoZSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBhdXRob3JTZXJ2aWNlID0gbmV3IEF1dGhvclNlcnZpY2UoQXV0aG9yTW9kZWwpO1xyXG4iXX0=