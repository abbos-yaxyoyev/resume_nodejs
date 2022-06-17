"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPagingBookHandler = exports.getOneBookHandler = void 0;
const exceptions_1 = require("../../../common/db/models/book/exceptions");
const book_service_1 = require("../../../common/service/book/book.service");
const book_dto_1 = require("../../../common/validation/dto/book/book.dto");
const validate_1 = require("../../../common/validation/validate");
async function getOneBookHandler(request, reply) {
    try {
        const data = await (0, validate_1.validateIt)(request.params, book_dto_1.BookDto, [book_dto_1.BookDtoGroup.GET_BY_ID]);
        const book = await book_service_1.bookService.getOneBook(data._id);
        return reply.success(book);
    }
    catch (e) {
        if (e instanceof exceptions_1.BookException) {
            throw e;
        }
        else {
            throw exceptions_1.BookException.UnknownError(e);
        }
    }
}
exports.getOneBookHandler = getOneBookHandler;
async function getPagingBookHandler(request, reply) {
    try {
        const data = await (0, validate_1.validateIt)(request.query, book_dto_1.BookGetDto, [book_dto_1.BookDtoGroup.PAGENATION]);
        let books = await book_service_1.bookService.getPaging(data);
        return reply.success(books);
    }
    catch (e) {
        if (e instanceof exceptions_1.BookException) {
            throw e;
        }
        else {
            throw exceptions_1.BookException.UnknownError(e);
        }
    }
}
exports.getPagingBookHandler = getPagingBookHandler;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9vay5oYW5kbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL3VzZXIvaGFuZGxlcnMvYm9vay9ib29rLmhhbmRsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsMEVBQTBFO0FBQzFFLDRFQUF3RTtBQUN4RSwyRUFBaUc7QUFDakcsa0VBQWlFO0FBRTFELEtBQUssVUFBVSxpQkFBaUIsQ0FBQyxPQUFPLEVBQUUsS0FBSztJQUNwRCxJQUFJO1FBQ0YsTUFBTSxJQUFJLEdBQUcsTUFBTSxJQUFBLHFCQUFVLEVBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxrQkFBTyxFQUFFLENBQUMsdUJBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1FBRWpGLE1BQU0sSUFBSSxHQUFHLE1BQU0sMEJBQVcsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBRXBELE9BQU8sS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUM1QjtJQUFDLE9BQU8sQ0FBQyxFQUFFO1FBQ1YsSUFBSSxDQUFDLFlBQVksMEJBQWEsRUFBRTtZQUM5QixNQUFNLENBQUMsQ0FBQztTQUNUO2FBQU07WUFDTCxNQUFNLDBCQUFhLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3JDO0tBQ0Y7QUFFSCxDQUFDO0FBZkQsOENBZUM7QUFFTSxLQUFLLFVBQVUsb0JBQW9CLENBQUMsT0FBTyxFQUFFLEtBQUs7SUFFdkQsSUFBSTtRQUVGLE1BQU0sSUFBSSxHQUFHLE1BQU0sSUFBQSxxQkFBVSxFQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUscUJBQVUsRUFBRSxDQUFDLHVCQUFZLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztRQUVwRixJQUFJLEtBQUssR0FBRyxNQUFNLDBCQUFXLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRTlDLE9BQU8sS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUU3QjtJQUFDLE9BQU8sQ0FBQyxFQUFFO1FBQ1YsSUFBSSxDQUFDLFlBQVksMEJBQWEsRUFBRTtZQUM5QixNQUFNLENBQUMsQ0FBQztTQUNUO2FBQU07WUFDTCxNQUFNLDBCQUFhLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3JDO0tBQ0Y7QUFFSCxDQUFDO0FBbEJELG9EQWtCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJvb2tFeGNlcHRpb24gfSBmcm9tICcuLi8uLi8uLi9jb21tb24vZGIvbW9kZWxzL2Jvb2svZXhjZXB0aW9ucyc7XHJcbmltcG9ydCB7IGJvb2tTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL3NlcnZpY2UvYm9vay9ib29rLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBCb29rRHRvLCBCb29rRHRvR3JvdXAsIEJvb2tHZXREdG8gfSBmcm9tICcuLi8uLi8uLi9jb21tb24vdmFsaWRhdGlvbi9kdG8vYm9vay9ib29rLmR0byc7XHJcbmltcG9ydCB7IHZhbGlkYXRlSXQgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vdmFsaWRhdGlvbi92YWxpZGF0ZSc7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0T25lQm9va0hhbmRsZXIocmVxdWVzdCwgcmVwbHkpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHZhbGlkYXRlSXQocmVxdWVzdC5wYXJhbXMsIEJvb2tEdG8sIFtCb29rRHRvR3JvdXAuR0VUX0JZX0lEXSk7XHJcblxyXG4gICAgY29uc3QgYm9vayA9IGF3YWl0IGJvb2tTZXJ2aWNlLmdldE9uZUJvb2soZGF0YS5faWQpO1xyXG5cclxuICAgIHJldHVybiByZXBseS5zdWNjZXNzKGJvb2spO1xyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIGlmIChlIGluc3RhbmNlb2YgQm9va0V4Y2VwdGlvbikge1xyXG4gICAgICB0aHJvdyBlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhyb3cgQm9va0V4Y2VwdGlvbi5Vbmtub3duRXJyb3IoZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFBhZ2luZ0Jvb2tIYW5kbGVyKHJlcXVlc3QsIHJlcGx5KSB7XHJcblxyXG4gIHRyeSB7XHJcblxyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHZhbGlkYXRlSXQocmVxdWVzdC5xdWVyeSwgQm9va0dldER0bywgW0Jvb2tEdG9Hcm91cC5QQUdFTkFUSU9OXSk7XHJcblxyXG4gICAgbGV0IGJvb2tzID0gYXdhaXQgYm9va1NlcnZpY2UuZ2V0UGFnaW5nKGRhdGEpO1xyXG5cclxuICAgIHJldHVybiByZXBseS5zdWNjZXNzKGJvb2tzKTtcclxuXHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgaWYgKGUgaW5zdGFuY2VvZiBCb29rRXhjZXB0aW9uKSB7XHJcbiAgICAgIHRocm93IGU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aHJvdyBCb29rRXhjZXB0aW9uLlVua25vd25FcnJvcihlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG59XHJcbiJdfQ==