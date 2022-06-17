"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteOneAuthorHandler = exports.getPagingAuthorHandler = exports.getOneAuthorHandler = exports.updateAuthorHandler = exports.createAuthorHandler = void 0;
const mongoose_1 = require("mongoose");
const roles_1 = require("../../../common/constants/roles");
const exception_1 = require("../../../common/db/models/author/exception");
const author_service_1 = require("../../../common/service/author/author.service");
const role_service_1 = require("../../../common/service/employee/role/role.service");
const author_dto_1 = require("../../../common/validation/dto/book/author.dto");
const validate_1 = require("../../../common/validation/validate");
async function createAuthorHandler(request, reply) {
    try {
        await role_service_1.roleService.hasAccess(request.admin.roleId, roles_1.Roles.AUTHOR_CREATE);
        const data = await (0, validate_1.validateIt)(request.body, author_dto_1.AuthorDto, [author_dto_1.AuthorDtoGroup.CREATE]);
        const author = await author_service_1.authorService.create(data);
        return reply.success(author._id);
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
exports.createAuthorHandler = createAuthorHandler;
async function updateAuthorHandler(request, reply) {
    try {
        await role_service_1.roleService.hasAccess(request.admin.roleId, roles_1.Roles.AUTHOR_UPDATE);
        const data = await (0, validate_1.validateIt)(request.body, author_dto_1.AuthorDto, [author_dto_1.AuthorDtoGroup.UPDATE]);
        const author = await author_service_1.authorService.updateOne(data._id, data, { new: true });
        return reply.success(author._id);
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
exports.updateAuthorHandler = updateAuthorHandler;
async function getOneAuthorHandler(request, reply) {
    try {
        await role_service_1.roleService.hasAccess(request.admin.roleId, roles_1.Roles.AUTHOR);
        const data = await (0, validate_1.validateIt)(request.params, author_dto_1.AuthorDto, [author_dto_1.AuthorDtoGroup.GET_BY_ID]);
        const author = await author_service_1.authorService.getByIdFull(data._id);
        return reply.success(author);
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
exports.getOneAuthorHandler = getOneAuthorHandler;
async function getPagingAuthorHandler(request, reply) {
    try {
        await role_service_1.roleService.hasAccess(request.admin.roleId, roles_1.Roles.AUTHOR);
        const data = await (0, validate_1.validateIt)(request.query, author_dto_1.AuthorGetDto, [author_dto_1.AuthorDtoGroup.PAGENATION]);
        const author = await author_service_1.authorService.getPaging(data);
        return reply.success(author);
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
async function deleteOneAuthorHandler(request, reply) {
    try {
        await role_service_1.roleService.hasAccess(request.admin.roleId, roles_1.Roles.AUTHOR_DELETE);
        const data = await (0, validate_1.validateIt)(request.params, author_dto_1.AuthorDto, [author_dto_1.AuthorDtoGroup.DELETE]);
        const query = {
            isDeleted: false,
            _id: new mongoose_1.Types.ObjectId(data._id),
        };
        await author_service_1.authorService.checkAuthorId(data._id);
        const author = await author_service_1.authorService.updateOneByQuery(query, { ...request.body, isDeleted: true, deletedAt: Date.now() }, { new: true });
        return reply.success(author._id);
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
exports.deleteOneAuthorHandler = deleteOneAuthorHandler;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aG9yLmhhbmRsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvRW1wbG95ZWUvaGFuZGxlcnMvYXV0aG9yL2F1dGhvci5oYW5kbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHVDQUFpQztBQUNqQywyREFBd0Q7QUFDeEQsMEVBQTZFO0FBQzdFLGtGQUE4RTtBQUM5RSxxRkFBaUY7QUFDakYsK0VBQXlHO0FBQ3pHLGtFQUFpRTtBQUUxRCxLQUFLLFVBQVUsbUJBQW1CLENBQUMsT0FBTyxFQUFFLEtBQUs7SUFDdEQsSUFBSTtRQUNGLE1BQU0sMEJBQVcsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsYUFBSyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ3ZFLE1BQU0sSUFBSSxHQUFHLE1BQU0sSUFBQSxxQkFBVSxFQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsc0JBQVMsRUFBRSxDQUFDLDJCQUFjLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUNoRixNQUFNLE1BQU0sR0FBRyxNQUFNLDhCQUFhLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2hELE9BQU8sS0FBSyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7S0FDbEM7SUFBQyxPQUFPLENBQUMsRUFBRTtRQUNWLElBQUksQ0FBQyxZQUFZLDJCQUFlLEVBQUU7WUFDaEMsTUFBTSxDQUFDLENBQUM7U0FDVDthQUFNO1lBQ0wsTUFBTSwyQkFBZSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUN2QztLQUNGO0FBQ0gsQ0FBQztBQWJELGtEQWFDO0FBRU0sS0FBSyxVQUFVLG1CQUFtQixDQUFDLE9BQU8sRUFBRSxLQUFLO0lBQ3RELElBQUk7UUFDRixNQUFNLDBCQUFXLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLGFBQUssQ0FB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QUFFLEtBQUs7WUFDaEIsR0FBRyxFQUFFLElBQUksZ0JBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQztTQUNsQyxDQUFDO1FBRUYsTUFBTSw4QkFBYSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFFNUMsTUFBTSxNQUFNLEdBQUcsTUFBTSw4QkFBYSxDQUFDLGdCQUFnQixDQUNqRCxLQUFLLEVBQ0wsRUFBRSxHQUFHLE9BQU8sQ0FBQyxJQUFJLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRSxFQUFFLEVBQzNELEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxDQUNkLENBQUM7UUFDRixPQUFPLEtBQUssQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0tBQ2xDO0lBQUMsT0FBTyxDQUFDLEVBQUU7UUFDVixJQUFJLENBQUMsWUFBWSwyQkFBZSxFQUFFO1lBQ2hDLE1BQU0sQ0FBQyxDQUFDO1NBQ1Q7YUFBTTtZQUNMLE1BQU0sMkJBQWUsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDdkM7S0FDRjtBQUNILENBQUM7QUExQkQsd0RBMEJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVHlwZXMgfSBmcm9tICdtb25nb29zZSc7XHJcbmltcG9ydCB7IFJvbGVzIH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL2NvbnN0YW50cy9yb2xlcyc7XHJcbmltcG9ydCB7IEF1dGhvckV4Y2VwdGlvbiB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9kYi9tb2RlbHMvYXV0aG9yL2V4Y2VwdGlvbic7XHJcbmltcG9ydCB7IGF1dGhvclNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vc2VydmljZS9hdXRob3IvYXV0aG9yLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyByb2xlU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9zZXJ2aWNlL2VtcGxveWVlL3JvbGUvcm9sZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQXV0aG9yRHRvLCBBdXRob3JEdG9Hcm91cCwgQXV0aG9yR2V0RHRvIH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL3ZhbGlkYXRpb24vZHRvL2Jvb2svYXV0aG9yLmR0byc7XHJcbmltcG9ydCB7IHZhbGlkYXRlSXQgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vdmFsaWRhdGlvbi92YWxpZGF0ZSc7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlQXV0aG9ySGFuZGxlcihyZXF1ZXN0LCByZXBseSkge1xyXG4gIHRyeSB7XHJcbiAgICBhd2FpdCByb2xlU2VydmljZS5oYXNBY2Nlc3MocmVxdWVzdC5hZG1pbi5yb2xlSWQsIFJvbGVzLkFVVEhPUl9DUkVBVEUpO1xyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHZhbGlkYXRlSXQocmVxdWVzdC5ib2R5LCBBdXRob3JEdG8sIFtBdXRob3JEdG9Hcm91cC5DUkVBVEVdKTtcclxuICAgIGNvbnN0IGF1dGhvciA9IGF3YWl0IGF1dGhvclNlcnZpY2UuY3JlYXRlKGRhdGEpO1xyXG4gICAgcmV0dXJuIHJlcGx5LnN1Y2Nlc3MoYXV0aG9yLl9pZCk7XHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgaWYgKGUgaW5zdGFuY2VvZiBBdXRob3JFeGNlcHRpb24pIHtcclxuICAgICAgdGhyb3cgZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRocm93IEF1dGhvckV4Y2VwdGlvbi5Vbmtub3duRXJyb3IoZSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlQXV0aG9ySGFuZGxlcihyZXF1ZXN0LCByZXBseSkge1xyXG4gIHRyeSB7XHJcbiAgICBhd2FpdCByb2xlU2VydmljZS5oYXNBY2Nlc3MocmVxdWVzdC5hZG1pbi5yb2xlSWQsIFJvbGVzLkFVVEhPUl9VUERBVEUpO1xyXG5cclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCB2YWxpZGF0ZUl0KHJlcXVlc3QuYm9keSwgQXV0aG9yRHRvLCBbQXV0aG9yRHRvR3JvdXAuVVBEQVRFXSk7XHJcblxyXG4gICAgY29uc3QgYXV0aG9yID0gYXdhaXQgYXV0aG9yU2VydmljZS51cGRhdGVPbmUoZGF0YS5faWQsIGRhdGEsIHsgbmV3OiB0cnVlIH0pO1xyXG5cclxuICAgIHJldHVybiByZXBseS5zdWNjZXNzKGF1dGhvci5faWQpO1xyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIGlmIChlIGluc3RhbmNlb2YgQXV0aG9yRXhjZXB0aW9uKSB7XHJcbiAgICAgIHRocm93IGU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aHJvdyBBdXRob3JFeGNlcHRpb24uVW5rbm93bkVycm9yKGUpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldE9uZUF1dGhvckhhbmRsZXIocmVxdWVzdCwgcmVwbHkpIHtcclxuICB0cnkge1xyXG4gICAgYXdhaXQgcm9sZVNlcnZpY2UuaGFzQWNjZXNzKHJlcXVlc3QuYWRtaW4ucm9sZUlkLCBSb2xlcy5BVVRIT1IpO1xyXG5cclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCB2YWxpZGF0ZUl0KHJlcXVlc3QucGFyYW1zLCBBdXRob3JEdG8sIFtBdXRob3JEdG9Hcm91cC5HRVRfQllfSURdKTtcclxuXHJcbiAgICBjb25zdCBhdXRob3IgPSBhd2FpdCBhdXRob3JTZXJ2aWNlLmdldEJ5SWRGdWxsKGRhdGEuX2lkKTtcclxuXHJcbiAgICByZXR1cm4gcmVwbHkuc3VjY2VzcyhhdXRob3IpO1xyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIGlmIChlIGluc3RhbmNlb2YgQXV0aG9yRXhjZXB0aW9uKSB7XHJcbiAgICAgIHRocm93IGU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aHJvdyBBdXRob3JFeGNlcHRpb24uVW5rbm93bkVycm9yKGUpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFBhZ2luZ0F1dGhvckhhbmRsZXIocmVxdWVzdCwgcmVwbHkpIHtcclxuICB0cnkge1xyXG4gICAgYXdhaXQgcm9sZVNlcnZpY2UuaGFzQWNjZXNzKHJlcXVlc3QuYWRtaW4ucm9sZUlkLCBSb2xlcy5BVVRIT1IpO1xyXG5cclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCB2YWxpZGF0ZUl0KHJlcXVlc3QucXVlcnksIEF1dGhvckdldER0bywgW0F1dGhvckR0b0dyb3VwLlBBR0VOQVRJT05dKTtcclxuXHJcbiAgICBjb25zdCBhdXRob3IgPSBhd2FpdCBhdXRob3JTZXJ2aWNlLmdldFBhZ2luZyhkYXRhKTtcclxuXHJcbiAgICByZXR1cm4gcmVwbHkuc3VjY2VzcyhhdXRob3IpO1xyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIGlmIChlIGluc3RhbmNlb2YgQXV0aG9yRXhjZXB0aW9uKSB7XHJcbiAgICAgIHRocm93IGU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aHJvdyBBdXRob3JFeGNlcHRpb24uVW5rbm93bkVycm9yKGUpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZU9uZUF1dGhvckhhbmRsZXIocmVxdWVzdCwgcmVwbHkpIHtcclxuICB0cnkge1xyXG4gICAgYXdhaXQgcm9sZVNlcnZpY2UuaGFzQWNjZXNzKHJlcXVlc3QuYWRtaW4ucm9sZUlkLCBSb2xlcy5BVVRIT1JfREVMRVRFKTtcclxuXHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgdmFsaWRhdGVJdChyZXF1ZXN0LnBhcmFtcywgQXV0aG9yRHRvLCBbQXV0aG9yRHRvR3JvdXAuREVMRVRFXSk7XHJcblxyXG4gICAgY29uc3QgcXVlcnkgPSB7XHJcbiAgICAgIGlzRGVsZXRlZDogZmFsc2UsXHJcbiAgICAgIF9pZDogbmV3IFR5cGVzLk9iamVjdElkKGRhdGEuX2lkKSxcclxuICAgIH07XHJcblxyXG4gICAgYXdhaXQgYXV0aG9yU2VydmljZS5jaGVja0F1dGhvcklkKGRhdGEuX2lkKTtcclxuXHJcbiAgICBjb25zdCBhdXRob3IgPSBhd2FpdCBhdXRob3JTZXJ2aWNlLnVwZGF0ZU9uZUJ5UXVlcnkoXHJcbiAgICAgIHF1ZXJ5LFxyXG4gICAgICB7IC4uLnJlcXVlc3QuYm9keSwgaXNEZWxldGVkOiB0cnVlLCBkZWxldGVkQXQ6IERhdGUubm93KCkgfSxcclxuICAgICAgeyBuZXc6IHRydWUgfSxcclxuICAgICk7XHJcbiAgICByZXR1cm4gcmVwbHkuc3VjY2VzcyhhdXRob3IuX2lkKTtcclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICBpZiAoZSBpbnN0YW5jZW9mIEF1dGhvckV4Y2VwdGlvbikge1xyXG4gICAgICB0aHJvdyBlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhyb3cgQXV0aG9yRXhjZXB0aW9uLlVua25vd25FcnJvcihlKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19