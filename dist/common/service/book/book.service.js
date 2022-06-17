"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bookService = void 0;
const mongoose_1 = require("mongoose");
const collections_1 = require("../../constants/collections");
const exceptions_1 = require("../../db/models/book/exceptions");
const models_1 = require("../../db/models/book/models");
const common_service_1 = require("../common.service");
class BookService extends common_service_1.CommonServices {
    constructor(model) {
        super(model, exceptions_1.BookException);
    }
    async findByIdError(id) {
        const book = await this.findById(id);
        if (!book)
            throw exceptions_1.BookException.NotFound(id);
        return book;
    }
    async getPaging(dto) {
        try {
            let { search, authorId, genreId, } = dto;
            const query = {
                isDeleted: false,
            };
            if (search) {
                query['$expr'] = {
                    $regexMatch: {
                        input: '$name',
                        options: 'i',
                        regex: search,
                    },
                };
            }
            if (authorId) {
                query['authorId'] = authorId;
            }
            if (genreId) {
                query['genreIds'] = {
                    $elemMatch: { $in: genreId }
                };
            }
            const $lookupAuthor = {
                $lookup: {
                    from: collections_1.COLLECTIONS.AUTHOR,
                    foreignField: '_id',
                    localField: 'authorId',
                    as: 'author',
                },
            };
            const $unwindAuthor = {
                $unwind: {
                    path: '$author',
                    preserveNullAndEmptyArrays: false,
                },
            };
            const $lookupGenre = {
                $lookup: {
                    from: collections_1.COLLECTIONS.GENRE,
                    let: {
                        genreIds: '$genreIds',
                    },
                    pipeline: [
                        {
                            $match: {
                                isDeleted: false,
                                $expr: {
                                    $in: ['$_id', '$$genreIds'],
                                },
                            },
                        },
                        {
                            $project: {
                                _id: 1,
                                name: 1,
                                imgUrl: 1,
                            },
                        },
                    ],
                    as: 'genre',
                },
            };
            const $projection = {
                $project: {
                    _id: 1,
                    name: 1,
                    description: 1,
                    author: {
                        _id: 1,
                        imgUrl: 1,
                        fullName: 1,
                        dateOfbirth: 1,
                        dateOfdeath: 1,
                    },
                    genre: 1,
                    imgUrl: 1,
                },
            };
            const $pipeline = [
                $lookupAuthor,
                $unwindAuthor,
                $lookupGenre,
                $projection,
            ];
            return await this.findPaging(query, dto, $pipeline);
        }
        catch (error) {
            throw exceptions_1.BookException.UnknownError(error);
        }
    }
    async getOneBook(id) {
        try {
            const $match = {
                $match: {
                    isDeleted: false,
                    _id: new mongoose_1.Types.ObjectId(id),
                },
            };
            const $lookupGenre = {
                $lookup: {
                    from: collections_1.COLLECTIONS.GENRE,
                    let: {
                        genreIds: '$genreIds',
                    },
                    pipeline: [
                        {
                            $match: {
                                isDeleted: false,
                                $expr: {
                                    $in: ['$_id', '$$genreIds']
                                }
                            },
                        },
                        {
                            $project: {
                                _id: 1,
                                name: 1,
                                imgUrl: 1,
                            },
                        },
                    ],
                    as: 'genre',
                },
            };
            const $lookupAuthor = {
                $lookup: {
                    from: collections_1.COLLECTIONS.AUTHOR,
                    foreignField: '_id',
                    localField: 'authorId',
                    as: 'author',
                },
            };
            const $unwindAuthor = {
                $unwind: {
                    path: '$author',
                    preserveNullAndEmptyArrays: true,
                },
            };
            const $projection = {
                $project: {
                    _id: 1,
                    name: 1,
                    imgUrl: 1,
                    description: 1,
                    author: {
                        _id: 1,
                        imgUrl: 1,
                        fullName: 1,
                        dateOfbirth: 1,
                        dateOfdeath: 1,
                    },
                    genre: 1,
                },
            };
            const $pipeline = [
                $match,
                $lookupAuthor,
                $unwindAuthor,
                $lookupGenre,
                $projection,
            ];
            const data = await this.aggregate($pipeline);
            if (!data[0])
                throw exceptions_1.BookException.NotFound(id);
            return data[0];
        }
        catch (e) {
            console.log("error book get by id service: ", e);
            if (e instanceof exceptions_1.BookException) {
                throw e;
            }
            else {
                throw exceptions_1.BookException.UnknownError(e);
            }
        }
    }
}
exports.bookService = new BookService(models_1.BooksModel);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9vay5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2NvbW1vbi9zZXJ2aWNlL2Jvb2svYm9vay5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUNBLHVDQUFpQztBQUNqQyw2REFBMEQ7QUFDMUQsZ0VBQWdFO0FBQ2hFLHdEQUFnRTtBQUVoRSxzREFBbUQ7QUFFbkQsTUFBTSxXQUFZLFNBQVEsK0JBQXFCO0lBQzdDLFlBQVksS0FBdUI7UUFDakMsS0FBSyxDQUFDLEtBQUssRUFBRSwwQkFBYSxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQUNNLEtBQUssQ0FBQyxhQUFhLENBQUMsRUFBRTtRQUMzQixNQUFNLElBQUksR0FBRyxNQUFNLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDckMsSUFBSSxDQUFDLElBQUk7WUFBRSxNQUFNLDBCQUFhLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQzVDLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVNLEtBQUssQ0FBQyxTQUFTLENBQUksR0FBZTtRQUN2QyxJQUFJO1lBRUYsSUFBSSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsT0FBTyxHQUFHLEdBQUcsR0FBRyxDQUFDO1lBRXpDLE1BQU0sS0FBSyxHQUFRO2dCQUNqQixTQUFTLEVBQUUsS0FBSzthQUNqQixDQUFDO1lBRUYsSUFBSSxNQUFNLEVBQUU7Z0JBQ1YsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHO29CQUNmLFdBQVcsRUFBRTt3QkFDWCxLQUFLLEVBQUUsT0FBTzt3QkFDZCxPQUFPLEVBQUUsR0FBRzt3QkFDWixLQUFLLEVBQUUsTUFBTTtxQkFDZDtpQkFDRixDQUFDO2FBQ0g7WUFFRCxJQUFJLFFBQVEsRUFBRTtnQkFDWixLQUFLLENBQUMsVUFBVSxDQUFDLEdBQUcsUUFBUSxDQUFDO2FBQzlCO1lBRUQsSUFBSSxPQUFPLEVBQUU7Z0JBQ1gsS0FB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RUFBRTtnQkFDOUIsTUFBTSxDQUFDLENBQUM7YUFDVDtpQkFBTTtnQkFDTCxNQUFNLDBCQUFhLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ3JDO1NBQ0Y7SUFDSCxDQUFDO0NBRUY7QUFFWSxRQUFBLFdBQVcsR0FBRyxJQUFJLFdBQVcsQ0FBQyxtQkFBVSxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb2RlbFR5cGUgfSBmcm9tICdAdHlwZWdvb3NlL3R5cGVnb29zZS9saWIvdHlwZXMnO1xyXG5pbXBvcnQgeyBUeXBlcyB9IGZyb20gJ21vbmdvb3NlJztcclxuaW1wb3J0IHsgQ09MTEVDVElPTlMgfSBmcm9tICcuLi8uLi9jb25zdGFudHMvY29sbGVjdGlvbnMnO1xyXG5pbXBvcnQgeyBCb29rRXhjZXB0aW9uIH0gZnJvbSAnLi4vLi4vZGIvbW9kZWxzL2Jvb2svZXhjZXB0aW9ucyc7XHJcbmltcG9ydCB7IEJvb2tzLCBCb29rc01vZGVsIH0gZnJvbSAnLi4vLi4vZGIvbW9kZWxzL2Jvb2svbW9kZWxzJztcclxuaW1wb3J0IHsgQm9va0dldER0byB9IGZyb20gJy4uLy4uL3ZhbGlkYXRpb24vZHRvL2Jvb2svYm9vay5kdG8nO1xyXG5pbXBvcnQgeyBDb21tb25TZXJ2aWNlcyB9IGZyb20gJy4uL2NvbW1vbi5zZXJ2aWNlJztcclxuXHJcbmNsYXNzIEJvb2tTZXJ2aWNlIGV4dGVuZHMgQ29tbW9uU2VydmljZXM8Qm9va3M+IHtcclxuICBjb25zdHJ1Y3Rvcihtb2RlbDogTW9kZWxUeXBlPEJvb2tzPikge1xyXG4gICAgc3VwZXIobW9kZWwsIEJvb2tFeGNlcHRpb24pO1xyXG4gIH1cclxuICBwdWJsaWMgYXN5bmMgZmluZEJ5SWRFcnJvcihpZCkge1xyXG4gICAgY29uc3QgYm9vayA9IGF3YWl0IHRoaXMuZmluZEJ5SWQoaWQpO1xyXG4gICAgaWYgKCFib29rKSB0aHJvdyBCb29rRXhjZXB0aW9uLk5vdEZvdW5kKGlkKTtcclxuICAgIHJldHVybiBib29rO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGFzeW5jIGdldFBhZ2luZzxUPihkdG86IEJvb2tHZXREdG8pIHtcclxuICAgIHRyeSB7XHJcblxyXG4gICAgICBsZXQgeyBzZWFyY2gsIGF1dGhvcklkLCBnZW5yZUlkLCB9ID0gZHRvO1xyXG5cclxuICAgICAgY29uc3QgcXVlcnk6IGFueSA9IHtcclxuICAgICAgICBpc0RlbGV0ZWQ6IGZhbHNlLFxyXG4gICAgICB9O1xyXG5cclxuICAgICAgaWYgKHNlYXJjaCkge1xyXG4gICAgICAgIHF1ZXJ5WyckZXhwciddID0ge1xyXG4gICAgICAgICAgJHJlZ2V4TWF0Y2g6IHtcclxuICAgICAgICAgICAgaW5wdXQ6ICckbmFtZScsXHJcbiAgICAgICAgICAgIG9wdGlvbnM6ICdpJyxcclxuICAgICAgICAgICAgcmVnZXg6IHNlYXJjaCxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKGF1dGhvcklkKSB7XHJcbiAgICAgICAgcXVlcnlbJ2F1dGhvcklkJ10gPSBhdXRob3JJZDtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKGdlbnJlSWQpIHtcclxuICAgICAgICBxdWVyeVsnZ2VucmVJZHMnXSA9IHtcclxuICAgICAgICAgICRlbGVtTWF0Y2g6IHsgJGluOiBnZW5yZUlkIH1cclxuICAgICAgICB9O1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zdCAkbG9va3VwQXV0aG9yID0ge1xyXG4gICAgICAgICRsb29rdXA6IHtcclxuICAgICAgICAgIGZyb206IENPTExFQ1RJT05TLkFVVEhPUixcclxuICAgICAgICAgIGZvcmVpZ25GaWVsZDogJ19pZCcsXHJcbiAgICAgICAgICBsb2NhbEZpZWxkOiAnYXV0aG9ySWQnLFxyXG4gICAgICAgICAgYXM6ICdhdXRob3InLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH07XHJcblxyXG4gICAgICBjb25zdCAkdW53aW5kQXV0aG9yID0ge1xyXG4gICAgICAgICR1bndpbmQ6IHtcclxuICAgICAgICAgIHBhdGg6ICckYXV0aG9yJyxcclxuICAgICAgICAgIHByZXNlcnZlTnVsbEFuZEVtcHR5QXJyYXlzOiBmYWxzZSxcclxuICAgICAgICB9LFxyXG4gICAgICB9O1xyXG5cclxuICAgICAgY29uc3QgJGxvb2t1cEdlbnJlID0ge1xyXG4gICAgICAgICRsb29rdXA6IHtcclxuICAgICAgICAgIGZyb206IENPTExFQ1RJT05TLkdFTlJFLFxyXG4gICAgICAgICAgbGV0OiB7XHJcbiAgICAgICAgICAgIGdlbnJlSWRzOiAnJGdlbnJlSWRzJyxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBwaXBlbGluZTogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgJG1hdGNoOiB7XHJcbiAgICAgICAgICAgICAgICBpc0RlbGV0ZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgJGV4cHI6IHtcclxuICAgICAgICAgICAgICAgICAgJGluOiBbJyRfaWQnLCAnJCRnZW5yZUlkcyddLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgJHByb2plY3Q6IHtcclxuICAgICAgICAgICAgICAgIF9pZDogMSxcclxuICAgICAgICAgICAgICAgIG5hbWU6IDEsXHJcbiAgICAgICAgICAgICAgICBpbWdVcmw6IDEsXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIF0sXHJcbiAgICAgICAgICBhczogJ2dlbnJlJyxcclxuICAgICAgICB9LFxyXG4gICAgICB9O1xyXG5cclxuICAgICAgY29uc3QgJHByb2plY3Rpb24gPSB7XHJcbiAgICAgICAgJHByb2plY3Q6IHtcclxuICAgICAgICAgIF9pZDogMSxcclxuICAgICAgICAgIG5hbWU6IDEsXHJcbiAgICAgICAgICBkZXNjcmlwdGlvbjogMSxcclxuXHJcbiAgICAgICAgICBhdXRob3I6IHtcclxuICAgICAgICAgICAgX2lkOiAxLFxyXG4gICAgICAgICAgICBpbWdVcmw6IDEsXHJcbiAgICAgICAgICAgIGZ1bGxOYW1lOiAxLFxyXG4gICAgICAgICAgICBkYXRlT2ZiaXJ0aDogMSxcclxuICAgICAgICAgICAgZGF0ZU9mZGVhdGg6IDEsXHJcbiAgICAgICAgICB9LFxyXG5cclxuICAgICAgICAgIGdlbnJlOiAxLFxyXG4gICAgICAgICAgaW1nVXJsOiAxLFxyXG5cclxuICAgICAgICB9LFxyXG4gICAgICB9O1xyXG5cclxuICAgICAgY29uc3QgJHBpcGVsaW5lID0gW1xyXG4gICAgICAgICRsb29rdXBBdXRob3IsXHJcbiAgICAgICAgJHVud2luZEF1dGhvcixcclxuICAgICAgICAkbG9va3VwR2VucmUsXHJcbiAgICAgICAgJHByb2plY3Rpb24sXHJcbiAgICAgIF07XHJcblxyXG4gICAgICByZXR1cm4gYXdhaXQgdGhpcy5maW5kUGFnaW5nKHF1ZXJ5LCBkdG8sICRwaXBlbGluZSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICB0aHJvdyBCb29rRXhjZXB0aW9uLlVua25vd25FcnJvcihlcnJvcik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgYXN5bmMgZ2V0T25lQm9vayhpZDogc3RyaW5nKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCAkbWF0Y2ggPSB7XHJcbiAgICAgICAgJG1hdGNoOiB7XHJcbiAgICAgICAgICBpc0RlbGV0ZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgX2lkOiBuZXcgVHlwZXMuT2JqZWN0SWQoaWQpLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH07XHJcblxyXG4gICAgICBjb25zdCAkbG9va3VwR2VucmUgPSB7XHJcbiAgICAgICAgJGxvb2t1cDoge1xyXG4gICAgICAgICAgZnJvbTogQ09MTEVDVElPTlMuR0VOUkUsXHJcbiAgICAgICAgICBsZXQ6IHtcclxuICAgICAgICAgICAgZ2VucmVJZHM6ICckZ2VucmVJZHMnLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHBpcGVsaW5lOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAkbWF0Y2g6IHtcclxuICAgICAgICAgICAgICAgIGlzRGVsZXRlZDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAkZXhwcjoge1xyXG4gICAgICAgICAgICAgICAgICAkaW46IFsnJF9pZCcsICckJGdlbnJlSWRzJ11cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgJHByb2plY3Q6IHtcclxuICAgICAgICAgICAgICAgIF9pZDogMSxcclxuICAgICAgICAgICAgICAgIG5hbWU6IDEsXHJcbiAgICAgICAgICAgICAgICBpbWdVcmw6IDEsXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIF0sXHJcbiAgICAgICAgICBhczogJ2dlbnJlJyxcclxuICAgICAgICB9LFxyXG4gICAgICB9O1xyXG5cclxuICAgICAgY29uc3QgJGxvb2t1cEF1dGhvciA9IHtcclxuICAgICAgICAkbG9va3VwOiB7XHJcbiAgICAgICAgICBmcm9tOiBDT0xMRUNUSU9OUy5BVVRIT1IsXHJcbiAgICAgICAgICBmb3JlaWduRmllbGQ6ICdfaWQnLFxyXG4gICAgICAgICAgbG9jYWxGaWVsZDogJ2F1dGhvcklkJyxcclxuICAgICAgICAgIGFzOiAnYXV0aG9yJyxcclxuICAgICAgICB9LFxyXG4gICAgICB9O1xyXG5cclxuICAgICAgY29uc3QgJHVud2luZEF1dGhvciA9IHtcclxuICAgICAgICAkdW53aW5kOiB7XHJcbiAgICAgICAgICBwYXRoOiAnJGF1dGhvcicsXHJcbiAgICAgICAgICBwcmVzZXJ2ZU51bGxBbmRFbXB0eUFycmF5czogdHJ1ZSxcclxuICAgICAgICB9LFxyXG4gICAgICB9O1xyXG5cclxuICAgICAgY29uc3QgJHByb2plY3Rpb24gPSB7XHJcbiAgICAgICAgJHByb2plY3Q6IHtcclxuICAgICAgICAgIF9pZDogMSxcclxuICAgICAgICAgIG5hbWU6IDEsXHJcbiAgICAgICAgICBpbWdVcmw6IDEsXHJcbiAgICAgICAgICBkZXNjcmlwdGlvbjogMSxcclxuXHJcbiAgICAgICAgICBhdXRob3I6IHtcclxuICAgICAgICAgICAgX2lkOiAxLFxyXG4gICAgICAgICAgICBpbWdVcmw6IDEsXHJcbiAgICAgICAgICAgIGZ1bGxOYW1lOiAxLFxyXG4gICAgICAgICAgICBkYXRlT2ZiaXJ0aDogMSxcclxuICAgICAgICAgICAgZGF0ZU9mZGVhdGg6IDEsXHJcbiAgICAgICAgICB9LFxyXG5cclxuICAgICAgICAgIGdlbnJlOiAxLFxyXG5cclxuICAgICAgICB9LFxyXG4gICAgICB9O1xyXG5cclxuICAgICAgY29uc3QgJHBpcGVsaW5lID0gW1xyXG4gICAgICAgICRtYXRjaCxcclxuICAgICAgICAkbG9va3VwQXV0aG9yLFxyXG4gICAgICAgICR1bndpbmRBdXRob3IsXHJcbiAgICAgICAgJGxvb2t1cEdlbnJlLFxyXG4gICAgICAgICRwcm9qZWN0aW9uLFxyXG4gICAgICBdO1xyXG5cclxuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHRoaXMuYWdncmVnYXRlKCRwaXBlbGluZSk7XHJcbiAgICAgIGlmICghZGF0YVswXSkgdGhyb3cgQm9va0V4Y2VwdGlvbi5Ob3RGb3VuZChpZCk7XHJcbiAgICAgIHJldHVybiBkYXRhWzBdO1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICBjb25zb2xlLmxvZyhcImVycm9yIGJvb2sgZ2V0IGJ5IGlkIHNlcnZpY2U6IFwiLCBlKTtcclxuICAgICAgaWYgKGUgaW5zdGFuY2VvZiBCb29rRXhjZXB0aW9uKSB7XHJcbiAgICAgICAgdGhyb3cgZTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aHJvdyBCb29rRXhjZXB0aW9uLlVua25vd25FcnJvcihlKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBib29rU2VydmljZSA9IG5ldyBCb29rU2VydmljZShCb29rc01vZGVsKTtcclxuIl19