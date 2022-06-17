"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteOneGenreHandler = exports.getPagingGenresHandler = exports.getOneGenreHandler = exports.updateGenreHandler = exports.createGenreHandler = void 0;
const roles_1 = require("../../../common/constants/roles");
const exception_1 = require("../../../common/db/models/genre/exception");
const role_service_1 = require("../../../common/service/employee/role/role.service");
const genre_service_1 = require("../../../common/service/genre/genre.service");
const genre_dto_1 = require("../../../common/validation/dto/genre.dto");
const validate_1 = require("../../../common/validation/validate");
async function createGenreHandler(request, reply) {
    try {
        await role_service_1.roleService.hasAccess(request.admin.roleId, roles_1.Roles.GENRE_CREATE);
        const data = await (0, validate_1.validateIt)(request.body, genre_dto_1.GenreDto, [genre_dto_1.GenreDtoGroup.CREATE]);
        const genre = await genre_service_1.genreService.create(data);
        return reply.success(genre._id);
    }
    catch (e) {
        if (e instanceof exception_1.GenreException) {
            throw e;
        }
        else {
            throw exception_1.GenreException.UnknownError(e);
        }
    }
}
exports.createGenreHandler = createGenreHandler;
async function updateGenreHandler(request, reply) {
    try {
        await role_service_1.roleService.hasAccess(request.admin.roleId, roles_1.Roles.GENRE_UPDATE);
        const data = await (0, validate_1.validateIt)(request.body, genre_dto_1.GenreDto, [genre_dto_1.GenreDtoGroup.UPDATE]);
        const genre = await genre_service_1.genreService.updateOne(data._id, data, { new: true });
        return reply.success(genre._id);
    }
    catch (e) {
        if (e instanceof exception_1.GenreException) {
            throw e;
        }
        else {
            throw exception_1.GenreException.UnknownError(e);
        }
    }
}
exports.updateGenreHandler = updateGenreHandler;
async function getOneGenreHandler(request, reply) {
    try {
        await role_service_1.roleService.hasAccess(request.admin.roleId, roles_1.Roles.GENRE);
        const data = await (0, validate_1.validateIt)(request.params, genre_dto_1.GenreDto, [genre_dto_1.GenreDtoGroup.GET_BY_ID]);
        const genre = await genre_service_1.genreService.getGenereFull(data._id);
        return reply.success(genre);
    }
    catch (e) {
        if (e instanceof exception_1.GenreException) {
            throw e;
        }
        else {
            throw exception_1.GenreException.UnknownError(e);
        }
    }
}
exports.getOneGenreHandler = getOneGenreHandler;
async function getPagingGenresHandler(request, reply) {
    try {
        await role_service_1.roleService.hasAccess(request.admin.roleId, roles_1.Roles.GENRE);
        const data = await (0, validate_1.validateIt)(request.query, genre_dto_1.GenreGetDto, [genre_dto_1.GenreDtoGroup.PAGENATION]);
        const genres = await genre_service_1.genreService.getPaging(data);
        return reply.success(genres);
    }
    catch (e) {
        if (e instanceof exception_1.GenreException) {
            throw e;
        }
        else {
            throw exception_1.GenreException.UnknownError(e);
        }
    }
}
exports.getPagingGenresHandler = getPagingGenresHandler;
async function deleteOneGenreHandler(request, reply) {
    try {
        await role_service_1.roleService.hasAccess(request.admin.roleId, roles_1.Roles.GENRE_DELETE);
        const data = await (0, validate_1.validateIt)(request.params, genre_dto_1.GenreDto, [genre_dto_1.GenreDtoGroup.DELETE]);
        await genre_service_1.genreService.checkGenreId(data._id);
        await genre_service_1.genreService.markAsDeleted(data._id);
        return reply.success(data._id);
    }
    catch (e) {
        if (e instanceof exception_1.GenreException) {
            throw e;
        }
        else {
            throw exception_1.GenreException.UnknownError(e);
        }
    }
}
exports.deleteOneGenreHandler = deleteOneGenreHandler;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VucmUuaGFuZGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9FbXBsb3llZS9oYW5kbGVycy9nZW5yZS9nZW5yZS5oYW5kbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDJEQUF3RDtBQUN4RCx5RUFBMkU7QUFDM0UscUZBQWlGO0FBQ2pGLCtFQUEyRTtBQUMzRSx3RUFBZ0c7QUFDaEcsa0VBQWlFO0FBRTFELEtBQUssVUFBVSxrQkFBa0IsQ0FBQyxPQUFPLEVBQUUsS0FBSztJQUNyRCxJQUFJO1FBQ0YsTUFBTSwwQkFBVyxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxhQUFLLENBQUMsWUFBWSxDQUFDLENBQUM7UUFFdEUsTUFBTSxJQUFJLEdBQUcsTUFBTSxJQUFBLHFCQUFVLEVBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxvQkFBUSxFQUFFLENBQUMseUJBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBRTlFLE1BQU0sS0FBSyxHQUFHLE1BQU0sNEJBQVksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFOUMsT0FBTyxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztLQUNqQztJQUFDLE9BQU8sQ0FBQyxFQUFFO1FBQ1YsSUFBSSxDQUFDLFlBQVksMEJBQWMsRUFBRTtZQUMvQixNQUFNLENBQUMsQ0FBQztTQUNUO2FBQU07WUFDTCxNQUFNLDBCQUFjLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3RDO0tBQ0Y7QUFDSCxDQUFDO0FBaEJELGdEQWdCQztBQUVNLEtBQUssVUFBVSxrQkFBa0IsQ0FBQyxPQUFPLEVBQUUsS0FBSztJQUNyRCxJQUFJO1FBQ0YsTUFBTSwwQkFBVyxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxhQUFLLENBQUMsWUFBWSxDQUFDLENB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LENBQUMsQ0FBQztRQUUxQyxNQUFNLDRCQUFZLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQTtRQUUxQyxPQUFPLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0tBRWhDO0lBQUMsT0FBTyxDQUFDLEVBQUU7UUFDVixJQUFJLENBQUMsWUFBWSwwQkFBYyxFQUFFO1lBQy9CLE1BQU0sQ0FBQyxDQUFDO1NBQ1Q7YUFBTTtZQUNMLE1BQU0sMEJBQWMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDdEM7S0FDRjtBQUNILENBQUM7QUFuQkQsc0RBbUJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUm9sZXMgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vY29uc3RhbnRzL3JvbGVzJztcclxuaW1wb3J0IHsgR2VucmVFeGNlcHRpb24gfSBmcm9tICcuLi8uLi8uLi9jb21tb24vZGIvbW9kZWxzL2dlbnJlL2V4Y2VwdGlvbic7XHJcbmltcG9ydCB7IHJvbGVTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL3NlcnZpY2UvZW1wbG95ZWUvcm9sZS9yb2xlLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBnZW5yZVNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vc2VydmljZS9nZW5yZS9nZW5yZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgR2VucmVEdG8sIEdlbnJlRHRvR3JvdXAsIEdlbnJlR2V0RHRvIH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL3ZhbGlkYXRpb24vZHRvL2dlbnJlLmR0byc7XHJcbmltcG9ydCB7IHZhbGlkYXRlSXQgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vdmFsaWRhdGlvbi92YWxpZGF0ZSc7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlR2VucmVIYW5kbGVyKHJlcXVlc3QsIHJlcGx5KSB7XHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IHJvbGVTZXJ2aWNlLmhhc0FjY2VzcyhyZXF1ZXN0LmFkbWluLnJvbGVJZCwgUm9sZXMuR0VOUkVfQ1JFQVRFKTtcclxuXHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgdmFsaWRhdGVJdChyZXF1ZXN0LmJvZHksIEdlbnJlRHRvLCBbR2VucmVEdG9Hcm91cC5DUkVBVEVdKTtcclxuXHJcbiAgICBjb25zdCBnZW5yZSA9IGF3YWl0IGdlbnJlU2VydmljZS5jcmVhdGUoZGF0YSk7XHJcblxyXG4gICAgcmV0dXJuIHJlcGx5LnN1Y2Nlc3MoZ2VucmUuX2lkKTtcclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICBpZiAoZSBpbnN0YW5jZW9mIEdlbnJlRXhjZXB0aW9uKSB7XHJcbiAgICAgIHRocm93IGU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aHJvdyBHZW5yZUV4Y2VwdGlvbi5Vbmtub3duRXJyb3IoZSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlR2VucmVIYW5kbGVyKHJlcXVlc3QsIHJlcGx5KSB7XHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IHJvbGVTZXJ2aWNlLmhhc0FjY2VzcyhyZXF1ZXN0LmFkbWluLnJvbGVJZCwgUm9sZXMuR0VOUkVfVVBEQVRFKTtcclxuXHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgdmFsaWRhdGVJdChyZXF1ZXN0LmJvZHksIEdlbnJlRHRvLCBbR2VucmVEdG9Hcm91cC5VUERBVEVdKTtcclxuXHJcbiAgICBjb25zdCBnZW5yZSA9IGF3YWl0IGdlbnJlU2VydmljZS51cGRhdGVPbmUoZGF0YS5faWQsIGRhdGEsIHsgbmV3OiB0cnVlIH0pO1xyXG5cclxuICAgIHJldHVybiByZXBseS5zdWNjZXNzKGdlbnJlLl9pZCk7XHJcblxyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIGlmIChlIGluc3RhbmNlb2YgR2VucmVFeGNlcHRpb24pIHtcclxuICAgICAgdGhyb3cgZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRocm93IEdlbnJlRXhjZXB0aW9uLlVua25vd25FcnJvcihlKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRPbmVHZW5yZUhhbmRsZXIocmVxdWVzdCwgcmVwbHkpIHtcclxuICB0cnkge1xyXG4gICAgYXdhaXQgcm9sZVNlcnZpY2UuaGFzQWNjZXNzKHJlcXVlc3QuYWRtaW4ucm9sZUlkLCBSb2xlcy5HRU5SRSk7XHJcblxyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHZhbGlkYXRlSXQocmVxdWVzdC5wYXJhbXMsIEdlbnJlRHRvLCBbR2VucmVEdG9Hcm91cC5HRVRfQllfSURdKTtcclxuXHJcbiAgICBjb25zdCBnZW5yZSA9IGF3YWl0IGdlbnJlU2VydmljZS5nZXRHZW5lcmVGdWxsKGRhdGEuX2lkKTtcclxuXHJcbiAgICByZXR1cm4gcmVwbHkuc3VjY2VzcyhnZW5yZSk7XHJcblxyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIGlmIChlIGluc3RhbmNlb2YgR2VucmVFeGNlcHRpb24pIHtcclxuICAgICAgdGhyb3cgZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRocm93IEdlbnJlRXhjZXB0aW9uLlVua25vd25FcnJvcihlKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRQYWdpbmdHZW5yZXNIYW5kbGVyKHJlcXVlc3QsIHJlcGx5KSB7XHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IHJvbGVTZXJ2aWNlLmhhc0FjY2VzcyhyZXF1ZXN0LmFkbWluLnJvbGVJZCwgUm9sZXMuR0VOUkUpO1xyXG5cclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCB2YWxpZGF0ZUl0KHJlcXVlc3QucXVlcnksIEdlbnJlR2V0RHRvLCBbR2VucmVEdG9Hcm91cC5QQUdFTkFUSU9OXSk7XHJcblxyXG4gICAgY29uc3QgZ2VucmVzID0gYXdhaXQgZ2VucmVTZXJ2aWNlLmdldFBhZ2luZyhkYXRhKTtcclxuXHJcbiAgICByZXR1cm4gcmVwbHkuc3VjY2VzcyhnZW5yZXMpO1xyXG5cclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICBpZiAoZSBpbnN0YW5jZW9mIEdlbnJlRXhjZXB0aW9uKSB7XHJcbiAgICAgIHRocm93IGU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aHJvdyBHZW5yZUV4Y2VwdGlvbi5Vbmtub3duRXJyb3IoZSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlT25lR2VucmVIYW5kbGVyKHJlcXVlc3QsIHJlcGx5KSB7XHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IHJvbGVTZXJ2aWNlLmhhc0FjY2VzcyhyZXF1ZXN0LmFkbWluLnJvbGVJZCwgUm9sZXMuR0VOUkVfREVMRVRFKTtcclxuXHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgdmFsaWRhdGVJdChyZXF1ZXN0LnBhcmFtcywgR2VucmVEdG8sIFtHZW5yZUR0b0dyb3VwLkRFTEVURV0pO1xyXG5cclxuICAgIGF3YWl0IGdlbnJlU2VydmljZS5jaGVja0dlbnJlSWQoZGF0YS5faWQpO1xyXG5cclxuICAgIGF3YWl0IGdlbnJlU2VydmljZS5tYXJrQXNEZWxldGVkKGRhdGEuX2lkKVxyXG5cclxuICAgIHJldHVybiByZXBseS5zdWNjZXNzKGRhdGEuX2lkKTtcclxuXHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgaWYgKGUgaW5zdGFuY2VvZiBHZW5yZUV4Y2VwdGlvbikge1xyXG4gICAgICB0aHJvdyBlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhyb3cgR2VucmVFeGNlcHRpb24uVW5rbm93bkVycm9yKGUpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=