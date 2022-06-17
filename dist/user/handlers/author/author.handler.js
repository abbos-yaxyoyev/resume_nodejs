"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPagingAuthorHandler = void 0;
const exception_1 = require("../../../common/db/models/author/exception");
const author_service_1 = require("../../../common/service/author/author.service");
const author_dto_1 = require("../../../common/validation/dto/book/author.dto");
const validate_1 = require("../../../common/validation/validate");
async function getPagingAuthorHandler(request, reply) {
    try {
        const data = await (0, validate_1.validateIt)(request.query, author_dto_1.AuthorGetDto, [author_dto_1.AuthorDtoGroup.PAGENATION]);
        const authors = await author_service_1.authorService.getPaging(data);
        return reply.success(authors);
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
exports.getPagingAuthorHandler = getPagingAuthorHandler;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aG9yLmhhbmRsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvdXNlci9oYW5kbGVycy9hdXRob3IvYXV0aG9yLmhhbmRsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsMEVBQTZFO0FBQzdFLGtGQUE4RTtBQUM5RSwrRUFBOEY7QUFDOUYsa0VBQWlFO0FBRTFELEtBQUssVUFBVSxzQkFBc0IsQ0FBQyxPQUFPLEVBQUUsS0FBSztJQUN6RCxJQUFJO1FBRUYsTUFBTSxJQUFJLEdBQUcsTUFBTSxJQUFBLHFCQUFVLEVBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSx5QkFBWSxFQUFFLENBQUMsMkJBQWMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO1FBRXhGLE1BQU0sT0FBTyxHQUFHLE1BQU0sOEJBQWEsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFcEQsT0FBTyxLQUFLLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0tBRS9CO0lBQUMsT0FBTyxDQUFDLEVBQUU7UUFDVixJQUFJLENBQUMsWUFBWSwyQkFBZSxFQUFFO1lBQ2hDLE1BQU0sQ0FBQyxDQUFDO1NBQ1Q7YUFBTTtZQUNMLE1BQU0sMkJBQWUsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDdkM7S0FDRjtBQUNILENBQUM7QUFoQkQsd0RBZ0JDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXV0aG9yRXhjZXB0aW9uIH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL2RiL21vZGVscy9hdXRob3IvZXhjZXB0aW9uJztcclxuaW1wb3J0IHsgYXV0aG9yU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9zZXJ2aWNlL2F1dGhvci9hdXRob3Iuc2VydmljZSc7XHJcbmltcG9ydCB7IEF1dGhvckR0b0dyb3VwLCBBdXRob3JHZXREdG8gfSBmcm9tICcuLi8uLi8uLi9jb21tb24vdmFsaWRhdGlvbi9kdG8vYm9vay9hdXRob3IuZHRvJztcclxuaW1wb3J0IHsgdmFsaWRhdGVJdCB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi92YWxpZGF0aW9uL3ZhbGlkYXRlJztcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRQYWdpbmdBdXRob3JIYW5kbGVyKHJlcXVlc3QsIHJlcGx5KSB7XHJcbiAgdHJ5IHtcclxuXHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgdmFsaWRhdGVJdChyZXF1ZXN0LnF1ZXJ5LCBBdXRob3JHZXREdG8sIFtBdXRob3JEdG9Hcm91cC5QQUdFTkFUSU9OXSk7XHJcblxyXG4gICAgY29uc3QgYXV0aG9ycyA9IGF3YWl0IGF1dGhvclNlcnZpY2UuZ2V0UGFnaW5nKGRhdGEpO1xyXG5cclxuICAgIHJldHVybiByZXBseS5zdWNjZXNzKGF1dGhvcnMpO1xyXG5cclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICBpZiAoZSBpbnN0YW5jZW9mIEF1dGhvckV4Y2VwdGlvbikge1xyXG4gICAgICB0aHJvdyBlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhyb3cgQXV0aG9yRXhjZXB0aW9uLlVua25vd25FcnJvcihlKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbiJdfQ==