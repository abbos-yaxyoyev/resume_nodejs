"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPagingRoleHandler = exports.deleteOneRoleHandler = exports.updateRoleHandler = exports.getOneRoledHandler = exports.createRoleHandler = void 0;
const roles_1 = require("../../../common/constants/roles");
const exceptions_1 = require("../../../common/db/models/employee/role/exceptions");
const role_service_1 = require("../../../common/service/employee/role/role.service");
const role_dto_1 = require("../../../common/validation/dto/commonUser/employee/role/role.dto");
const validate_1 = require("../../../common/validation/validate");
async function createRoleHandler(request, reply) {
    try {
        await role_service_1.roleService.hasAccess(request.admin.roleId.toString(), roles_1.Roles.ROLE_CREATE);
        const data = await (0, validate_1.validateIt)(request.body, role_dto_1.RoleDto, [role_dto_1.RoleDtoGroup.CREATE]);
        let role = await role_service_1.roleService.create(data);
        return reply.success(role._id);
    }
    catch (e) {
        if (e instanceof exceptions_1.RoleException) {
            throw e;
        }
        else {
            throw exceptions_1.RoleException.UnknownError(e);
        }
    }
}
exports.createRoleHandler = createRoleHandler;
async function getOneRoledHandler(request, reply) {
    try {
        await role_service_1.roleService.hasAccess(request.admin.roleId, roles_1.Roles.ROLE);
        const data = await (0, validate_1.validateIt)(request.params, role_dto_1.RoleDto, [role_dto_1.RoleDtoGroup.GET_BY_ID]);
        let role = await role_service_1.roleService.findByIdError(data._id);
        return reply.success(role);
    }
    catch (e) {
        if (e instanceof exceptions_1.RoleException) {
            throw e;
        }
        else {
            throw exceptions_1.RoleException.UnknownError(e);
        }
    }
}
exports.getOneRoledHandler = getOneRoledHandler;
async function updateRoleHandler(request, reply) {
    try {
        await role_service_1.roleService.hasAccess(request.admin.roleId, roles_1.Roles.ROLE_UPDATE);
        const data = await (0, validate_1.validateIt)(request.body, role_dto_1.RoleDto, [role_dto_1.RoleDtoGroup.UPDATE]);
        await role_service_1.roleService.updateOne(data._id, data, { new: true });
        return reply.success(data._id);
    }
    catch (e) {
        if (e instanceof exceptions_1.RoleException) {
            throw e;
        }
        else {
            throw exceptions_1.RoleException.UnknownError(e);
        }
    }
}
exports.updateRoleHandler = updateRoleHandler;
async function deleteOneRoleHandler(request, reply) {
    try {
        await role_service_1.roleService.hasAccess(request.admin.roleId, roles_1.Roles.ROLE_DELETE);
        const data = await (0, validate_1.validateIt)(request.params, role_dto_1.RoleDto, [role_dto_1.RoleDtoGroup.DELETE]);
        await role_service_1.roleService.checkEmployeeRole(data._id);
        const role = await role_service_1.roleService.updateOneByQuery({ _id: data._id, }, { isDeleted: true });
        return reply.success(role._id);
    }
    catch (e) {
        if (e instanceof exceptions_1.RoleException) {
            throw e;
        }
        else {
            throw exceptions_1.RoleException.UnknownError(e);
        }
    }
}
exports.deleteOneRoleHandler = deleteOneRoleHandler;
async function getPagingRoleHandler(request, reply) {
    try {
        await role_service_1.roleService.hasAccess(request.admin.roleId, roles_1.Roles.ROLE);
        const data = await (0, validate_1.validateIt)(request.query, role_dto_1.RoleGetDto, [role_dto_1.RoleDtoGroup.PAGENATION]);
        const role = await role_service_1.roleService.getPaging(data);
        return reply.success(role);
    }
    catch (e) {
        if (e instanceof exceptions_1.RoleException) {
            throw e;
        }
        else {
            throw exceptions_1.RoleException.UnknownError(e);
        }
    }
}
exports.getPagingRoleHandler = getPagingRoleHandler;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm9sZS5oYW5kbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2VtcGxveWVlL2hhbmRsZXJzL3JvbGUvcm9sZS5oYW5kbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDJEQUF3RDtBQUN4RCxtRkFBbUY7QUFDbkYscUZBQWlGO0FBQ2pGLCtGQUFxSDtBQUNySCxrRUFBaUU7QUFFMUQsS0FBSyxVQUFVLGlCQUFpQixDQUFDLE9BQU8sRUFBRSxLQUFLO0lBQ3BELElBQUk7UUFDRixNQUFNLDBCQUFXLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxFQUFFLGFBQUssQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUVoRixNQUFNLElBQUksR0FBRyxNQUFNLElBQUEscUJBQVUsRUFBQyxPQUFPLENBQUMsSUFBSSxFQUFFLGtCQUFPLEVBQUUsQ0FBQyx1QkFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFFNUUsSUFBSSxJQUFJLEdBQUcsTUFBTSwwQkFBVyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUUxQyxPQUFPLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0tBRWhDO0lBQUMsT0FBTyxDQUFDLEVBQUU7UUFDVixJQUFJLENBQUMsWUFBWSwwQkFBYSxFQUFFO1lBQzlCLE1BQU0sQ0FBQyxDQUFDO1NBQ1Q7YUFBTTtZQUNMLE1BQU0sMEJBQWEsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDckM7S0FDRjtBQUNILENBQUM7QUFqQkQsOENBaUJDO0FBRU0sS0FBSyxVQUFVLGtCQUFrQixDQUFDLE9BQU8sRUFBRSxLQUFLO0lBQ3JELElBQUk7UUFDRixNQUFNLDBCQUFXLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLGFBQUssQ0FBQyxJQUFJLENBQUMsQ0FB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QyxPQUFPLENBQUMsS0FBSyxFQUFFLHFCQUFVLEVBQUUsQ0FBQyx1QkFBWSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7UUFFcEYsTUFBTSxJQUFJLEdBQUcsTUFBTSwwQkFBVyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUUvQyxPQUFPLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7S0FFNUI7SUFBQyxPQUFPLENBQUMsRUFBRTtRQUNWLElBQUksQ0FBQyxZQUFZLDBCQUFhLEVBQUU7WUFDOUIsTUFBTSxDQUFDLENBQUM7U0FDVDthQUFNO1lBQ0wsTUFBTSwwQkFBYSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNyQztLQUNGO0FBQ0gsQ0FBQztBQWpCRCxvREFpQkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSb2xlcyB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9jb25zdGFudHMvcm9sZXMnO1xyXG5pbXBvcnQgeyBSb2xlRXhjZXB0aW9uIH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL2RiL21vZGVscy9lbXBsb3llZS9yb2xlL2V4Y2VwdGlvbnMnO1xyXG5pbXBvcnQgeyByb2xlU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9zZXJ2aWNlL2VtcGxveWVlL3JvbGUvcm9sZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgUm9sZUR0bywgUm9sZUR0b0dyb3VwLCBSb2xlR2V0RHRvIH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL3ZhbGlkYXRpb24vZHRvL2NvbW1vblVzZXIvZW1wbG95ZWUvcm9sZS9yb2xlLmR0byc7XHJcbmltcG9ydCB7IHZhbGlkYXRlSXQgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vdmFsaWRhdGlvbi92YWxpZGF0ZSc7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlUm9sZUhhbmRsZXIocmVxdWVzdCwgcmVwbHkpIHtcclxuICB0cnkge1xyXG4gICAgYXdhaXQgcm9sZVNlcnZpY2UuaGFzQWNjZXNzKHJlcXVlc3QuYWRtaW4ucm9sZUlkLnRvU3RyaW5nKCksIFJvbGVzLlJPTEVfQ1JFQVRFKTtcclxuXHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgdmFsaWRhdGVJdChyZXF1ZXN0LmJvZHksIFJvbGVEdG8sIFtSb2xlRHRvR3JvdXAuQ1JFQVRFXSk7XHJcblxyXG4gICAgbGV0IHJvbGUgPSBhd2FpdCByb2xlU2VydmljZS5jcmVhdGUoZGF0YSk7XHJcblxyXG4gICAgcmV0dXJuIHJlcGx5LnN1Y2Nlc3Mocm9sZS5faWQpO1xyXG5cclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICBpZiAoZSBpbnN0YW5jZW9mIFJvbGVFeGNlcHRpb24pIHtcclxuICAgICAgdGhyb3cgZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRocm93IFJvbGVFeGNlcHRpb24uVW5rbm93bkVycm9yKGUpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldE9uZVJvbGVkSGFuZGxlcihyZXF1ZXN0LCByZXBseSkge1xyXG4gIHRyeSB7XHJcbiAgICBhd2FpdCByb2xlU2VydmljZS5oYXNBY2Nlc3MocmVxdWVzdC5hZG1pbi5yb2xlSWQsIFJvbGVzLlJPTEUpO1xyXG5cclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCB2YWxpZGF0ZUl0KHJlcXVlc3QucGFyYW1zLCBSb2xlRHRvLCBbUm9sZUR0b0dyb3VwLkdFVF9CWV9JRF0pO1xyXG5cclxuICAgIGxldCByb2xlID0gYXdhaXQgcm9sZVNlcnZpY2UuZmluZEJ5SWRFcnJvcihkYXRhLl9pZCk7XHJcblxyXG4gICAgcmV0dXJuIHJlcGx5LnN1Y2Nlc3Mocm9sZSk7XHJcblxyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIGlmIChlIGluc3RhbmNlb2YgUm9sZUV4Y2VwdGlvbikge1xyXG4gICAgICB0aHJvdyBlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhyb3cgUm9sZUV4Y2VwdGlvbi5Vbmtub3duRXJyb3IoZSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlUm9sZUhhbmRsZXIocmVxdWVzdCwgcmVwbHkpIHtcclxuICB0cnkge1xyXG4gICAgYXdhaXQgcm9sZVNlcnZpY2UuaGFzQWNjZXNzKHJlcXVlc3QuYWRtaW4ucm9sZUlkLCBSb2xlcy5ST0xFX1VQREFURSk7XHJcblxyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHZhbGlkYXRlSXQocmVxdWVzdC5ib2R5LCBSb2xlRHRvLCBbUm9sZUR0b0dyb3VwLlVQREFURV0pO1xyXG5cclxuICAgIGF3YWl0IHJvbGVTZXJ2aWNlLnVwZGF0ZU9uZShkYXRhLl9pZCwgZGF0YSwgeyBuZXc6IHRydWUgfSk7XHJcblxyXG4gICAgcmV0dXJuIHJlcGx5LnN1Y2Nlc3MoZGF0YS5faWQpO1xyXG5cclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICBpZiAoZSBpbnN0YW5jZW9mIFJvbGVFeGNlcHRpb24pIHtcclxuICAgICAgdGhyb3cgZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRocm93IFJvbGVFeGNlcHRpb24uVW5rbm93bkVycm9yKGUpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZU9uZVJvbGVIYW5kbGVyKHJlcXVlc3QsIHJlcGx5KSB7XHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IHJvbGVTZXJ2aWNlLmhhc0FjY2VzcyhyZXF1ZXN0LmFkbWluLnJvbGVJZCwgUm9sZXMuUk9MRV9ERUxFVEUpO1xyXG5cclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCB2YWxpZGF0ZUl0KHJlcXVlc3QucGFyYW1zLCBSb2xlRHRvLCBbUm9sZUR0b0dyb3VwLkRFTEVURV0pO1xyXG5cclxuICAgIGF3YWl0IHJvbGVTZXJ2aWNlLmNoZWNrRW1wbG95ZWVSb2xlKGRhdGEuX2lkKTtcclxuXHJcbiAgICBjb25zdCByb2xlID0gYXdhaXQgcm9sZVNlcnZpY2UudXBkYXRlT25lQnlRdWVyeSh7IF9pZDogZGF0YS5faWQsIH0sIHsgaXNEZWxldGVkOiB0cnVlIH0pXHJcblxyXG4gICAgcmV0dXJuIHJlcGx5LnN1Y2Nlc3Mocm9sZS5faWQpO1xyXG5cclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICBpZiAoZSBpbnN0YW5jZW9mIFJvbGVFeGNlcHRpb24pIHtcclxuICAgICAgdGhyb3cgZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRocm93IFJvbGVFeGNlcHRpb24uVW5rbm93bkVycm9yKGUpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFBhZ2luZ1JvbGVIYW5kbGVyKHJlcXVlc3QsIHJlcGx5KSB7XHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IHJvbGVTZXJ2aWNlLmhhc0FjY2VzcyhyZXF1ZXN0LmFkbWluLnJvbGVJZCwgUm9sZXMuUk9MRSk7XHJcblxyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHZhbGlkYXRlSXQocmVxdWVzdC5xdWVyeSwgUm9sZUdldER0bywgW1JvbGVEdG9Hcm91cC5QQUdFTkFUSU9OXSk7XHJcblxyXG4gICAgY29uc3Qgcm9sZSA9IGF3YWl0IHJvbGVTZXJ2aWNlLmdldFBhZ2luZyhkYXRhKTtcclxuXHJcbiAgICByZXR1cm4gcmVwbHkuc3VjY2Vzcyhyb2xlKTtcclxuXHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgaWYgKGUgaW5zdGFuY2VvZiBSb2xlRXhjZXB0aW9uKSB7XHJcbiAgICAgIHRocm93IGU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aHJvdyBSb2xlRXhjZXB0aW9uLlVua25vd25FcnJvcihlKTtcclxuICAgIH1cclxuICB9XHJcbn0iXX0=