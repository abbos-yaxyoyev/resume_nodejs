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
            let { search, authorId, categoryId, } = dto;
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
            if (categoryId) {
                query['categoryId'] = categoryId;
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
                    preserveNullAndEmptyArrays: true,
                },
            };
            const $projection = {
                $project: {
                    _id: 1,
                    name: 1,
                    author: {
                        _id: 1,
                        imgUrl: 1,
                        fullName: 1
                    },
                    imgUrl: 1,
                    ebookUrl: 1,
                    description: 1,
                },
            };
            const $pipeline = [
                $lookupAuthor,
                $unwindAuthor,
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
                    ebookUrl: 1,
                    description: 1,
                    author: {
                        _id: 1,
                        imgUrl: 1,
                        fullName: 1
                    },
                },
            };
            const $pipeline = [
                $match,
                $lookupAuthor,
                $unwindAuthor,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9vay5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2NvbW1vbi9zZXJ2aWNlL2Jvb2svYm9vay5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUNBLHVDQUFpQztBQUNqQyw2REFBMEQ7QUFDMUQsZ0VBQWdFO0FBQ2hFLHdEQUFnRTtBQUVoRSxzREFBbUQ7QUFFbkQsTUFBTSxXQUFZLFNBQVEsK0JBQXFCO0lBQzdDLFlBQVksS0FBdUI7UUFDakMsS0FBSyxDQUFDLEtBQUssRUFBRSwwQkFBYSxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQUNNLEtBQUssQ0FBQyxhQUFhLENBQUMsRUFBRTtRQUMzQixNQUFNLElBQUksR0FBRyxNQUFNLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDckMsSUFBSSxDQUFDLElBQUk7WUFBRSxNQUFNLDBCQUFhLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQzVDLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVNLEtBQUssQ0FBQyxTQUFTLENBQUksR0FBZTtRQUN2QyxJQUFJO1lBRUYsSUFBSSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsVUFBVSxHQUFHLEdBQUcsR0FBRyxDQUFDO1lBRTVDLE1BQU0sS0FBSyxHQUFRO2dCQUNqQixTQUFTLEVBQUUsS0FBSzthQUNqQixDQUFDO1lBRUYsSUFBSSxNQUFNLEVBQUU7Z0JBQ1YsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHO29CQUNmLFdBQVcsRUFBRTt3QkFDWCxLQUFLLEVBQUUsT0FBTzt3QkFDZCxPQUFPLEVBQUUsR0FBRzt3QkFDWixLQUFLLEVBQUUsTUFBTTtxQkFDZDtpQkFDRixDQUFDO2FBQ0g7WUFFRCxJQUFJLFFBQVEsRUFBRTtnQkFDWixLQUFLLENBQUMsVUFBVSxDQUFDLEdBQUcsUUFBUSxDQUFDO2FBQzlCO1lBRUQsSUFBSSxVQUFVLEVBQUU7Z0JBQ2QsS0FB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Q1Q7aUJBQU07Z0JBQ0wsTUFBTSwwQkFBYSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUNyQztTQUNGO0lBQ0gsQ0FBQztDQUVGO0FBRVksUUFBQSxXQUFXLEdBQUcsSUFBSSxXQUFXLENBQUMsbUJBQVUsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9kZWxUeXBlIH0gZnJvbSAnQHR5cGVnb29zZS90eXBlZ29vc2UvbGliL3R5cGVzJztcclxuaW1wb3J0IHsgVHlwZXMgfSBmcm9tICdtb25nb29zZSc7XHJcbmltcG9ydCB7IENPTExFQ1RJT05TIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzL2NvbGxlY3Rpb25zJztcclxuaW1wb3J0IHsgQm9va0V4Y2VwdGlvbiB9IGZyb20gJy4uLy4uL2RiL21vZGVscy9ib29rL2V4Y2VwdGlvbnMnO1xyXG5pbXBvcnQgeyBCb29rcywgQm9va3NNb2RlbCB9IGZyb20gJy4uLy4uL2RiL21vZGVscy9ib29rL21vZGVscyc7XHJcbmltcG9ydCB7IEJvb2tHZXREdG8gfSBmcm9tICcuLi8uLi92YWxpZGF0aW9uL2R0by9ib29rL2Jvb2suZHRvJztcclxuaW1wb3J0IHsgQ29tbW9uU2VydmljZXMgfSBmcm9tICcuLi9jb21tb24uc2VydmljZSc7XHJcblxyXG5jbGFzcyBCb29rU2VydmljZSBleHRlbmRzIENvbW1vblNlcnZpY2VzPEJvb2tzPiB7XHJcbiAgY29uc3RydWN0b3IobW9kZWw6IE1vZGVsVHlwZTxCb29rcz4pIHtcclxuICAgIHN1cGVyKG1vZGVsLCBCb29rRXhjZXB0aW9uKTtcclxuICB9XHJcbiAgcHVibGljIGFzeW5jIGZpbmRCeUlkRXJyb3IoaWQpIHtcclxuICAgIGNvbnN0IGJvb2sgPSBhd2FpdCB0aGlzLmZpbmRCeUlkKGlkKTtcclxuICAgIGlmICghYm9vaykgdGhyb3cgQm9va0V4Y2VwdGlvbi5Ob3RGb3VuZChpZCk7XHJcbiAgICByZXR1cm4gYm9vaztcclxuICB9XHJcblxyXG4gIHB1YmxpYyBhc3luYyBnZXRQYWdpbmc8VD4oZHRvOiBCb29rR2V0RHRvKSB7XHJcbiAgICB0cnkge1xyXG5cclxuICAgICAgbGV0IHsgc2VhcmNoLCBhdXRob3JJZCwgY2F0ZWdvcnlJZCwgfSA9IGR0bztcclxuXHJcbiAgICAgIGNvbnN0IHF1ZXJ5OiBhbnkgPSB7XHJcbiAgICAgICAgaXNEZWxldGVkOiBmYWxzZSxcclxuICAgICAgfTtcclxuXHJcbiAgICAgIGlmIChzZWFyY2gpIHtcclxuICAgICAgICBxdWVyeVsnJGV4cHInXSA9IHtcclxuICAgICAgICAgICRyZWdleE1hdGNoOiB7XHJcbiAgICAgICAgICAgIGlucHV0OiAnJG5hbWUnLFxyXG4gICAgICAgICAgICBvcHRpb25zOiAnaScsXHJcbiAgICAgICAgICAgIHJlZ2V4OiBzZWFyY2gsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH07XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChhdXRob3JJZCkge1xyXG4gICAgICAgIHF1ZXJ5WydhdXRob3JJZCddID0gYXV0aG9ySWQ7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChjYXRlZ29yeUlkKSB7XHJcbiAgICAgICAgcXVlcnlbJ2NhdGVnb3J5SWQnXSA9IGNhdGVnb3J5SWQ7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnN0ICRsb29rdXBBdXRob3IgPSB7XHJcbiAgICAgICAgJGxvb2t1cDoge1xyXG4gICAgICAgICAgZnJvbTogQ09MTEVDVElPTlMuQVVUSE9SLFxyXG4gICAgICAgICAgZm9yZWlnbkZpZWxkOiAnX2lkJyxcclxuICAgICAgICAgIGxvY2FsRmllbGQ6ICdhdXRob3JJZCcsXHJcbiAgICAgICAgICBhczogJ2F1dGhvcicsXHJcbiAgICAgICAgfSxcclxuICAgICAgfTtcclxuXHJcbiAgICAgIGNvbnN0ICR1bndpbmRBdXRob3IgPSB7XHJcbiAgICAgICAgJHVud2luZDoge1xyXG4gICAgICAgICAgcGF0aDogJyRhdXRob3InLFxyXG4gICAgICAgICAgcHJlc2VydmVOdWxsQW5kRW1wdHlBcnJheXM6IHRydWUsXHJcbiAgICAgICAgfSxcclxuICAgICAgfTtcclxuXHJcbiAgICAgIGNvbnN0ICRwcm9qZWN0aW9uID0ge1xyXG4gICAgICAgICRwcm9qZWN0OiB7XHJcbiAgICAgICAgICBfaWQ6IDEsXHJcbiAgICAgICAgICBuYW1lOiAxLFxyXG4gICAgICAgICAgYXV0aG9yOiB7XHJcbiAgICAgICAgICAgIF9pZDogMSxcclxuICAgICAgICAgICAgaW1nVXJsOiAxLFxyXG4gICAgICAgICAgICBmdWxsTmFtZTogMVxyXG4gICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICBpbWdVcmw6IDEsXHJcbiAgICAgICAgICBlYm9va1VybDogMSxcclxuICAgICAgICAgIGRlc2NyaXB0aW9uOiAxLFxyXG5cclxuICAgICAgICB9LFxyXG4gICAgICB9O1xyXG5cclxuICAgICAgY29uc3QgJHBpcGVsaW5lID0gW1xyXG4gICAgICAgICRsb29rdXBBdXRob3IsXHJcbiAgICAgICAgJHVud2luZEF1dGhvcixcclxuICAgICAgICAkcHJvamVjdGlvbixcclxuICAgICAgXTtcclxuXHJcbiAgICAgIHJldHVybiBhd2FpdCB0aGlzLmZpbmRQYWdpbmcocXVlcnksIGR0bywgJHBpcGVsaW5lKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIHRocm93IEJvb2tFeGNlcHRpb24uVW5rbm93bkVycm9yKGVycm9yKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBhc3luYyBnZXRPbmVCb29rKGlkOiBzdHJpbmcpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0ICRtYXRjaCA9IHtcclxuICAgICAgICAkbWF0Y2g6IHtcclxuICAgICAgICAgIGlzRGVsZXRlZDogZmFsc2UsXHJcbiAgICAgICAgICBfaWQ6IG5ldyBUeXBlcy5PYmplY3RJZChpZCksXHJcbiAgICAgICAgfSxcclxuICAgICAgfTtcclxuXHJcbiAgICAgIGNvbnN0ICRsb29rdXBBdXRob3IgPSB7XHJcbiAgICAgICAgJGxvb2t1cDoge1xyXG4gICAgICAgICAgZnJvbTogQ09MTEVDVElPTlMuQVVUSE9SLFxyXG4gICAgICAgICAgZm9yZWlnbkZpZWxkOiAnX2lkJyxcclxuICAgICAgICAgIGxvY2FsRmllbGQ6ICdhdXRob3JJZCcsXHJcbiAgICAgICAgICBhczogJ2F1dGhvcicsXHJcbiAgICAgICAgfSxcclxuICAgICAgfTtcclxuXHJcbiAgICAgIGNvbnN0ICR1bndpbmRBdXRob3IgPSB7XHJcbiAgICAgICAgJHVud2luZDoge1xyXG4gICAgICAgICAgcGF0aDogJyRhdXRob3InLFxyXG4gICAgICAgICAgcHJlc2VydmVOdWxsQW5kRW1wdHlBcnJheXM6IHRydWUsXHJcbiAgICAgICAgfSxcclxuICAgICAgfTtcclxuXHJcbiAgICAgIGNvbnN0ICRwcm9qZWN0aW9uID0ge1xyXG4gICAgICAgICRwcm9qZWN0OiB7XHJcbiAgICAgICAgICBfaWQ6IDEsXHJcbiAgICAgICAgICBuYW1lOiAxLFxyXG4gICAgICAgICAgaW1nVXJsOiAxLFxyXG4gICAgICAgICAgZWJvb2tVcmw6IDEsXHJcbiAgICAgICAgICBkZXNjcmlwdGlvbjogMSxcclxuXHJcbiAgICAgICAgICBhdXRob3I6IHtcclxuICAgICAgICAgICAgX2lkOiAxLFxyXG4gICAgICAgICAgICBpbWdVcmw6IDEsXHJcbiAgICAgICAgICAgIGZ1bGxOYW1lOiAxXHJcbiAgICAgICAgICB9LFxyXG5cclxuICAgICAgICB9LFxyXG4gICAgICB9O1xyXG5cclxuICAgICAgY29uc3QgJHBpcGVsaW5lID0gW1xyXG4gICAgICAgICRtYXRjaCxcclxuICAgICAgICAkbG9va3VwQXV0aG9yLFxyXG4gICAgICAgICR1bndpbmRBdXRob3IsXHJcbiAgICAgICAgJHByb2plY3Rpb24sXHJcbiAgICAgIF07XHJcblxyXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgdGhpcy5hZ2dyZWdhdGUoJHBpcGVsaW5lKTtcclxuICAgICAgaWYgKCFkYXRhWzBdKSB0aHJvdyBCb29rRXhjZXB0aW9uLk5vdEZvdW5kKGlkKTtcclxuICAgICAgcmV0dXJuIGRhdGFbMF07XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiZXJyb3IgYm9vayBnZXQgYnkgaWQgc2VydmljZTogXCIsIGUpO1xyXG4gICAgICBpZiAoZSBpbnN0YW5jZW9mIEJvb2tFeGNlcHRpb24pIHtcclxuICAgICAgICB0aHJvdyBlO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRocm93IEJvb2tFeGNlcHRpb24uVW5rbm93bkVycm9yKGUpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGJvb2tTZXJ2aWNlID0gbmV3IEJvb2tTZXJ2aWNlKEJvb2tzTW9kZWwpO1xyXG4iXX0=