"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteOneCategoryHandler = exports.getPagingGenresHandler = exports.getOneCategoryHandler = exports.updateCategoryHandler = exports.createCategoryHandler = void 0;
const roles_1 = require("../../../common/constants/roles");
const exception_1 = require("../../../common/db/models/category/exception");
const category_service_1 = require("../../../common/service/category/category.service");
const role_service_1 = require("../../../common/service/employee/role/role.service");
const category_dto_1 = require("../../../common/validation/dto/category.dto");
const validate_1 = require("../../../common/validation/validate");
async function createCategoryHandler(request, reply) {
    try {
        await role_service_1.roleService.hasAccess(request.admin.roleId, roles_1.Roles.GENRE_CREATE);
        const data = await (0, validate_1.validateIt)(request.body, category_dto_1.CategoryDto, [category_dto_1.CategoryDtoGroup.CREATE]);
        const genre = await category_service_1.categoryService.create(data);
        return reply.success(genre._id);
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
exports.createCategoryHandler = createCategoryHandler;
async function updateCategoryHandler(request, reply) {
    try {
        await role_service_1.roleService.hasAccess(request.admin.roleId, roles_1.Roles.GENRE_UPDATE);
        const data = await (0, validate_1.validateIt)(request.body, category_dto_1.CategoryDto, [category_dto_1.CategoryDtoGroup.UPDATE]);
        const genre = await category_service_1.categoryService.updateOne(data._id, data, { new: true });
        return reply.success(genre._id);
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
exports.updateCategoryHandler = updateCategoryHandler;
async function getOneCategoryHandler(request, reply) {
    try {
        await role_service_1.roleService.hasAccess(request.admin.roleId, roles_1.Roles.GENRE);
        const data = await (0, validate_1.validateIt)(request.params, category_dto_1.CategoryDto, [category_dto_1.CategoryDtoGroup.GET_BY_ID]);
        const genre = await category_service_1.categoryService.getCategoryFull(data._id);
        return reply.success(genre);
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
exports.getOneCategoryHandler = getOneCategoryHandler;
async function getPagingGenresHandler(request, reply) {
    try {
        await role_service_1.roleService.hasAccess(request.admin.roleId, roles_1.Roles.GENRE);
        const data = await (0, validate_1.validateIt)(request.query, category_dto_1.CategoryGetDto, [category_dto_1.CategoryDtoGroup.PAGENATION]);
        const genres = await category_service_1.categoryService.getPaging(data);
        return reply.success(genres);
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
exports.getPagingGenresHandler = getPagingGenresHandler;
async function deleteOneCategoryHandler(request, reply) {
    try {
        await role_service_1.roleService.hasAccess(request.admin.roleId, roles_1.Roles.GENRE_DELETE);
        const data = await (0, validate_1.validateIt)(request.params, category_dto_1.CategoryDto, [category_dto_1.CategoryDtoGroup.DELETE]);
        await category_service_1.categoryService.checkGenreId(data._id);
        await category_service_1.categoryService.markAsDeleted(data._id);
        return reply.success(data._id);
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
exports.deleteOneCategoryHandler = deleteOneCategoryHandler;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2F0ZWdvcnkuaGFuZGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9FbXBsb3llZS9oYW5kbGVycy9jYXRlZ29yeS9jYXRlZ29yeS5oYW5kbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDJEQUF3RDtBQUN4RCw0RUFBaUY7QUFDakYsd0ZBQW9GO0FBQ3BGLHFGQUFpRjtBQUNqRiw4RUFBNEc7QUFDNUcsa0VBQWlFO0FBRTFELEtBQUssVUFBVSxxQkFBcUIsQ0FBQyxPQUFPLEVBQUUsS0FBSztJQUN4RCxJQUFJO1FBQ0YsTUFBTSwwQkFBVyxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxhQUFLLENBQUMsWUFBWSxDQUFDLENBQUM7UUFFdEUsTUFBTSxJQUFJLEdBQUcsTUFBTSxJQUFBLHFCQUFVLEVBQUMsT0FBTyxDQUFDLElBQUksRUFBRSwwQkFBVyxFQUFFLENBQUMsK0JBQWdCLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUVwRixNQUFNLEtBQUssR0FBRyxNQUFNLGtDQUFlLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRWpELE9BQU8sS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7S0FDakM7SUFBQyxPQUFPLENBQUMsRUFBRTtRQUNWLElBQUksQ0FBQyxZQUFZLDZCQUFpQixFQUFFO1lBQ2xDLE1BQU0sQ0FBQyxDQUFDO1NBQ1Q7YUFBTTtZQUNMLE1BQU0sNkJBQWlCLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3pDO0tBQ0Y7QUFDSCxDQUFDO0FBaEJELHNEQWdCQztBQUVNLEtBQUssVUFBVSxxQkFBcUIsQ0FBQyxPQUFPLEVBQUUsS0FBSztJQUN4RCxJQUFJO1FBQ0YsTUFBTSwwQkFBVyxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxhQUFLLENBQUMs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QVksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFFN0MsTUFBTSxrQ0FBZSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUE7UUFFN0MsT0FBTyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztLQUVoQztJQUFDLE9BQU8sQ0FBQyxFQUFFO1FBQ1YsSUFBSSxDQUFDLFlBQVksNkJBQWlCLEVBQUU7WUFDbEMsTUFBTSxDQUFDLENBQUM7U0FDVDthQUFNO1lBQ0wsTUFBTSw2QkFBaUIsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDekM7S0FDRjtBQUNILENBQUM7QUFuQkQsNERBbUJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUm9sZXMgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vY29uc3RhbnRzL3JvbGVzJztcclxuaW1wb3J0IHsgQ2F0ZWdvcnlFeGNlcHRpb24gfSBmcm9tICcuLi8uLi8uLi9jb21tb24vZGIvbW9kZWxzL2NhdGVnb3J5L2V4Y2VwdGlvbic7XHJcbmltcG9ydCB7IGNhdGVnb3J5U2VydmljZSB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9zZXJ2aWNlL2NhdGVnb3J5L2NhdGVnb3J5LnNlcnZpY2UnO1xyXG5pbXBvcnQgeyByb2xlU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9zZXJ2aWNlL2VtcGxveWVlL3JvbGUvcm9sZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQ2F0ZWdvcnlEdG8sIENhdGVnb3J5RHRvR3JvdXAsIENhdGVnb3J5R2V0RHRvIH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL3ZhbGlkYXRpb24vZHRvL2NhdGVnb3J5LmR0byc7XHJcbmltcG9ydCB7IHZhbGlkYXRlSXQgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vdmFsaWRhdGlvbi92YWxpZGF0ZSc7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlQ2F0ZWdvcnlIYW5kbGVyKHJlcXVlc3QsIHJlcGx5KSB7XHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IHJvbGVTZXJ2aWNlLmhhc0FjY2VzcyhyZXF1ZXN0LmFkbWluLnJvbGVJZCwgUm9sZXMuR0VOUkVfQ1JFQVRFKTtcclxuXHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgdmFsaWRhdGVJdChyZXF1ZXN0LmJvZHksIENhdGVnb3J5RHRvLCBbQ2F0ZWdvcnlEdG9Hcm91cC5DUkVBVEVdKTtcclxuXHJcbiAgICBjb25zdCBnZW5yZSA9IGF3YWl0IGNhdGVnb3J5U2VydmljZS5jcmVhdGUoZGF0YSk7XHJcblxyXG4gICAgcmV0dXJuIHJlcGx5LnN1Y2Nlc3MoZ2VucmUuX2lkKTtcclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICBpZiAoZSBpbnN0YW5jZW9mIENhdGVnb3J5RXhjZXB0aW9uKSB7XHJcbiAgICAgIHRocm93IGU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aHJvdyBDYXRlZ29yeUV4Y2VwdGlvbi5Vbmtub3duRXJyb3IoZSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlQ2F0ZWdvcnlIYW5kbGVyKHJlcXVlc3QsIHJlcGx5KSB7XHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IHJvbGVTZXJ2aWNlLmhhc0FjY2VzcyhyZXF1ZXN0LmFkbWluLnJvbGVJZCwgUm9sZXMuR0VOUkVfVVBEQVRFKTtcclxuXHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgdmFsaWRhdGVJdChyZXF1ZXN0LmJvZHksIENhdGVnb3J5RHRvLCBbQ2F0ZWdvcnlEdG9Hcm91cC5VUERBVEVdKTtcclxuXHJcbiAgICBjb25zdCBnZW5yZSA9IGF3YWl0IGNhdGVnb3J5U2VydmljZS51cGRhdGVPbmUoZGF0YS5faWQsIGRhdGEsIHsgbmV3OiB0cnVlIH0pO1xyXG5cclxuICAgIHJldHVybiByZXBseS5zdWNjZXNzKGdlbnJlLl9pZCk7XHJcblxyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIGlmIChlIGluc3RhbmNlb2YgQ2F0ZWdvcnlFeGNlcHRpb24pIHtcclxuICAgICAgdGhyb3cgZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRocm93IENhdGVnb3J5RXhjZXB0aW9uLlVua25vd25FcnJvcihlKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRPbmVDYXRlZ29yeUhhbmRsZXIocmVxdWVzdCwgcmVwbHkpIHtcclxuICB0cnkge1xyXG4gICAgYXdhaXQgcm9sZVNlcnZpY2UuaGFzQWNjZXNzKHJlcXVlc3QuYWRtaW4ucm9sZUlkLCBSb2xlcy5HRU5SRSk7XHJcblxyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHZhbGlkYXRlSXQocmVxdWVzdC5wYXJhbXMsIENhdGVnb3J5RHRvLCBbQ2F0ZWdvcnlEdG9Hcm91cC5HRVRfQllfSURdKTtcclxuXHJcbiAgICBjb25zdCBnZW5yZSA9IGF3YWl0IGNhdGVnb3J5U2VydmljZS5nZXRDYXRlZ29yeUZ1bGwoZGF0YS5faWQpO1xyXG5cclxuICAgIHJldHVybiByZXBseS5zdWNjZXNzKGdlbnJlKTtcclxuXHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgaWYgKGUgaW5zdGFuY2VvZiBDYXRlZ29yeUV4Y2VwdGlvbikge1xyXG4gICAgICB0aHJvdyBlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhyb3cgQ2F0ZWdvcnlFeGNlcHRpb24uVW5rbm93bkVycm9yKGUpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFBhZ2luZ0dlbnJlc0hhbmRsZXIocmVxdWVzdCwgcmVwbHkpIHtcclxuICB0cnkge1xyXG4gICAgYXdhaXQgcm9sZVNlcnZpY2UuaGFzQWNjZXNzKHJlcXVlc3QuYWRtaW4ucm9sZUlkLCBSb2xlcy5HRU5SRSk7XHJcblxyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHZhbGlkYXRlSXQocmVxdWVzdC5xdWVyeSwgQ2F0ZWdvcnlHZXREdG8sIFtDYXRlZ29yeUR0b0dyb3VwLlBBR0VOQVRJT05dKTtcclxuXHJcbiAgICBjb25zdCBnZW5yZXMgPSBhd2FpdCBjYXRlZ29yeVNlcnZpY2UuZ2V0UGFnaW5nKGRhdGEpO1xyXG5cclxuICAgIHJldHVybiByZXBseS5zdWNjZXNzKGdlbnJlcyk7XHJcblxyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIGlmIChlIGluc3RhbmNlb2YgQ2F0ZWdvcnlFeGNlcHRpb24pIHtcclxuICAgICAgdGhyb3cgZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRocm93IENhdGVnb3J5RXhjZXB0aW9uLlVua25vd25FcnJvcihlKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVPbmVDYXRlZ29yeUhhbmRsZXIocmVxdWVzdCwgcmVwbHkpIHtcclxuICB0cnkge1xyXG4gICAgYXdhaXQgcm9sZVNlcnZpY2UuaGFzQWNjZXNzKHJlcXVlc3QuYWRtaW4ucm9sZUlkLCBSb2xlcy5HRU5SRV9ERUxFVEUpO1xyXG5cclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCB2YWxpZGF0ZUl0KHJlcXVlc3QucGFyYW1zLCBDYXRlZ29yeUR0bywgW0NhdGVnb3J5RHRvR3JvdXAuREVMRVRFXSk7XHJcblxyXG4gICAgYXdhaXQgY2F0ZWdvcnlTZXJ2aWNlLmNoZWNrR2VucmVJZChkYXRhLl9pZCk7XHJcblxyXG4gICAgYXdhaXQgY2F0ZWdvcnlTZXJ2aWNlLm1hcmtBc0RlbGV0ZWQoZGF0YS5faWQpXHJcblxyXG4gICAgcmV0dXJuIHJlcGx5LnN1Y2Nlc3MoZGF0YS5faWQpO1xyXG5cclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICBpZiAoZSBpbnN0YW5jZW9mIENhdGVnb3J5RXhjZXB0aW9uKSB7XHJcbiAgICAgIHRocm93IGU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aHJvdyBDYXRlZ29yeUV4Y2VwdGlvbi5Vbmtub3duRXJyb3IoZSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==