"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.signInHandler = exports.getEmployeeProfileHandler = exports.getOneEmployeeHandler = exports.getPagingEmployeeHandler = exports.deleteOneEmployeeHandler = exports.updateEmployeeProfileHandler = exports.updateEmployeeHandler = exports.createEmployeeHandler = void 0;
const tslib_1 = require("tslib");
const md5_1 = tslib_1.__importDefault(require("md5"));
const roles_1 = require("../../common/constants/roles");
const exception_1 = require("../../common/db/models/employee/exception");
const authPlugin_1 = require("../../common/plugin/authPlugin");
const employee_service_1 = require("../../common/service/employee/employee.service");
const role_service_1 = require("../../common/service/employee/role/role.service");
const employee_dto_1 = require("../../common/validation/dto/commonUser/employee/employee.dto");
const validate_1 = require("../../common/validation/validate");
//! create employee by moderator
async function createEmployeeHandler(request, reply) {
    try {
        await role_service_1.roleService.hasAccess(request.admin.roleId, roles_1.Roles.EMPLOYEE_CREATE);
        const data = await (0, validate_1.validateIt)(request.body, employee_dto_1.EmployeeDto, [employee_dto_1.EmployeeDtoGroup.CREATE]);
        data.password = (0, md5_1.default)(data.password);
        const { _id } = await employee_service_1.employeeService.create(data);
        return reply.success(_id);
    }
    catch (e) {
        if (e instanceof exception_1.EmployeeException) {
            throw e;
        }
        else {
            throw exception_1.EmployeeException.UnknownError(e);
        }
    }
}
exports.createEmployeeHandler = createEmployeeHandler;
//! updates admin
async function updateEmployeeHandler(request, reply) {
    try {
        await role_service_1.roleService.hasAccess(request.admin.roleId, roles_1.Roles.EMPLOYEE_UPDATE);
        const data = await (0, validate_1.validateIt)(request.body, employee_dto_1.EmployeeDto, [employee_dto_1.EmployeeDtoGroup.UPDATE]);
        if (data.password) {
            data.password = (0, md5_1.default)(data.password);
        }
        const admin = await employee_service_1.employeeService.updateOne(data._id, data, { new: true });
        return reply.success(admin._id);
    }
    catch (e) {
        if (e instanceof exception_1.EmployeeException) {
            throw e;
        }
        else {
            throw exception_1.EmployeeException.UnknownError(e);
        }
    }
}
exports.updateEmployeeHandler = updateEmployeeHandler;
//! updates admin
async function updateEmployeeProfileHandler(request, reply) {
    try {
        await role_service_1.roleService.hasAccess(request.admin.roleId, roles_1.Roles.EMPLOYEE);
        request.body._id = request.admin._id.toString();
        const data = await (0, validate_1.validateIt)(request.body, employee_dto_1.EmployeeDto, [employee_dto_1.EmployeeDtoGroup.UPDATE]);
        if (data.password) {
            data.password = (0, md5_1.default)(data.password);
        }
        const employee = await employee_service_1.employeeService.updateOne(data._id, data, { new: true });
        return reply.success(employee._id);
    }
    catch (e) {
        if (e instanceof exception_1.EmployeeException) {
            throw e;
        }
        else {
            throw exception_1.EmployeeException.UnknownError(e);
        }
    }
}
exports.updateEmployeeProfileHandler = updateEmployeeProfileHandler;
async function deleteOneEmployeeHandler(request, reply) {
    try {
        await role_service_1.roleService.hasAccess(request.admin.roleId, roles_1.Roles.EMPLOYEE_DELETE);
        const data = await (0, validate_1.validateIt)(request.params, employee_dto_1.EmployeeDto, [employee_dto_1.EmployeeDtoGroup.DELETE]);
        await employee_service_1.employeeService.updateOne(data._id, data, { new: true });
        return reply.success(data._id);
    }
    catch (e) {
        if (e instanceof exception_1.EmployeeException) {
            throw e;
        }
        else {
            throw exception_1.EmployeeException.UnknownError(e);
        }
    }
}
exports.deleteOneEmployeeHandler = deleteOneEmployeeHandler;
//! get employees by paging
async function getPagingEmployeeHandler(request, reply) {
    try {
        await role_service_1.roleService.hasAccess(request.admin.roleId, roles_1.Roles.EMPLOYEE);
        const data = await (0, validate_1.validateIt)(request.query, employee_dto_1.EmployeeGetDto, [employee_dto_1.EmployeeDtoGroup.PAGENATION]);
        const admins = await employee_service_1.employeeService.getPaging(data);
        return reply.success(admins);
    }
    catch (e) {
        if (e instanceof exception_1.EmployeeException) {
            throw e;
        }
        else {
            throw exception_1.EmployeeException.UnknownError(e);
        }
    }
}
exports.getPagingEmployeeHandler = getPagingEmployeeHandler;
async function getOneEmployeeHandler(request, reply) {
    try {
        await role_service_1.roleService.hasAccess(request.admin.roleId, roles_1.Roles.EMPLOYEE);
        const data = await (0, validate_1.validateIt)(request.params, employee_dto_1.EmployeeDto, [employee_dto_1.EmployeeDtoGroup.GET_BY_ID]);
        const admin = await employee_service_1.employeeService.getEmployeeFull(data._id);
        return reply.success(admin);
    }
    catch (e) {
        if (e instanceof exception_1.EmployeeException) {
            throw e;
        }
        else {
            throw exception_1.EmployeeException.UnknownError(e);
        }
    }
}
exports.getOneEmployeeHandler = getOneEmployeeHandler;
//! get full profile by yourself
async function getEmployeeProfileHandler(request, reply) {
    try {
        const admin = await employee_service_1.employeeService.getEmployeeFull(request.admin._id.toString());
        return reply.success(admin);
    }
    catch (e) {
        if (e instanceof exception_1.EmployeeException) {
            throw e;
        }
        else {
            throw exception_1.EmployeeException.UnknownError(e);
        }
    }
}
exports.getEmployeeProfileHandler = getEmployeeProfileHandler;
async function signInHandler(request, reply) {
    try {
        const data = await (0, validate_1.validateIt)(request.body, employee_dto_1.EmployeeDto, [employee_dto_1.EmployeeDtoGroup.LOGIN]);
        const admin = await employee_service_1.employeeService.findByPhone(data.phoneNumber);
        if (!admin)
            throw exception_1.EmployeeException.NotFound(data.phoneNumber);
        if ((0, md5_1.default)(data.password) != admin.password)
            throw exception_1.EmployeeException.InvalidPassword();
        const token = await (0, authPlugin_1.jwtSign)(request, { _id: admin._id });
        return reply.success({
            token,
            admin
        });
    }
    catch (e) {
        if (e instanceof exception_1.EmployeeException) {
            throw e;
        }
        else {
            throw exception_1.EmployeeException.UnknownError(e);
        }
    }
}
exports.signInHandler = signInHandler;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW1wbG95ZWUuaGFuZGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbXBsb3llZS9oYW5kbGVycy9lbXBsb3llZS5oYW5kbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxzREFBc0I7QUFDdEIsd0RBQXFEO0FBQ3JELHlFQUE4RTtBQUM5RSwrREFBeUQ7QUFDekQscUZBQWlGO0FBQ2pGLGtGQUE4RTtBQUM5RSwrRkFBNkg7QUFDN0gsK0RBQThEO0FBRTlELGdDQUFnQztBQUN6QixLQUFLLFVBQVUscUJBQXFCLENBQUMsT0FBTyxFQUFFLEtBQUs7SUFDeEQsSUFBSTtRQUVGLE1BQU0sMEJBQVcsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsYUFBSyxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBRXpFLE1BQU0sSUFBSSxHQUFHLE1BQU0sSUFBQSxxQkFBVSxFQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsMEJBQVcsRUFBRSxDQUFDLCtCQUFnQixDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFFcEYsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFBLGFBQUcsRUFBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUE7UUFFbEMsTUFBTSxFQUFFLEdBQUcsRUFBRSxHQUFHLE1BQU0sa0NBQWUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFbkQsT0FBTyxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0tBRTNCO0lBQUMsT0FBTyxDQUFDLEVBQUU7UUFDVixJQUFJLENBQUMsWUFBWSw2QkFBaUIsRUFBRTtZQUNsQyxNQUFNLENBQUMsQ0FBQztTQUNUO2FBQU07WUFDTCxNQUFNLDZCQUFpQixDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUN6QztLQUNGO0FBQ0gsQ0FBQztBQXBCRCxzREFvQkM7QUFHRCxpQkFBaUI7QUFDVixLQUFLLFVBQVUscUJB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LENBQUMsK0JBQWdCLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUVuRixNQUFNLEtBQUssR0FBRyxNQUFNLGtDQUFlLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUVsRSxJQUFJLENBQUMsS0FBSztZQUFFLE1BQU0sNkJBQWlCLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUUvRCxJQUFJLElBQUEsYUFBRyxFQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxLQUFLLENBQUMsUUFBUTtZQUFFLE1BQU0sNkJBQWlCLENBQUMsZUFBZSxFQUFFLENBQUM7UUFFcEYsTUFBTSxLQUFLLEdBQUcsTUFBTSxJQUFBLG9CQUFPLEVBQUMsT0FBTyxFQUFFLEVBQUUsR0FBRyxFQUFFLEtBQUssQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDO1FBRXpELE9BQU8sS0FBSyxDQUFDLE9BQU8sQ0FBQztZQUNuQixLQUFLO1lBQ0wsS0FBSztTQUNOLENBQUMsQ0FBQztLQUNKO0lBQUMsT0FBTyxDQUFDLEVBQUU7UUFDVixJQUFJLENBQUMsWUFBWSw2QkFBaUIsRUFBRTtZQUNsQyxNQUFNLENBQUMsQ0FBQztTQUNUO2FBQU07WUFDTCxNQUFNLDZCQUFpQixDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUN6QztLQUNGO0FBQ0gsQ0FBQztBQXZCRCxzQ0F1QkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbWQ1IGZyb20gJ21kNSc7XHJcbmltcG9ydCB7IFJvbGVzIH0gZnJvbSAnLi4vLi4vY29tbW9uL2NvbnN0YW50cy9yb2xlcyc7XHJcbmltcG9ydCB7IEVtcGxveWVlRXhjZXB0aW9uIH0gZnJvbSAnLi4vLi4vY29tbW9uL2RiL21vZGVscy9lbXBsb3llZS9leGNlcHRpb24nO1xyXG5pbXBvcnQgeyBqd3RTaWduIH0gZnJvbSAnLi4vLi4vY29tbW9uL3BsdWdpbi9hdXRoUGx1Z2luJztcclxuaW1wb3J0IHsgZW1wbG95ZWVTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vY29tbW9uL3NlcnZpY2UvZW1wbG95ZWUvZW1wbG95ZWUuc2VydmljZSc7XHJcbmltcG9ydCB7IHJvbGVTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vY29tbW9uL3NlcnZpY2UvZW1wbG95ZWUvcm9sZS9yb2xlLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBFbXBsb3llZUR0bywgRW1wbG95ZWVEdG9Hcm91cCwgRW1wbG95ZWVHZXREdG8gfSBmcm9tICcuLi8uLi9jb21tb24vdmFsaWRhdGlvbi9kdG8vY29tbW9uVXNlci9lbXBsb3llZS9lbXBsb3llZS5kdG8nO1xyXG5pbXBvcnQgeyB2YWxpZGF0ZUl0IH0gZnJvbSAnLi4vLi4vY29tbW9uL3ZhbGlkYXRpb24vdmFsaWRhdGUnO1xyXG5cclxuLy8hIGNyZWF0ZSBlbXBsb3llZSBieSBtb2RlcmF0b3JcclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUVtcGxveWVlSGFuZGxlcihyZXF1ZXN0LCByZXBseSkge1xyXG4gIHRyeSB7XHJcblxyXG4gICAgYXdhaXQgcm9sZVNlcnZpY2UuaGFzQWNjZXNzKHJlcXVlc3QuYWRtaW4ucm9sZUlkLCBSb2xlcy5FTVBMT1lFRV9DUkVBVEUpO1xyXG5cclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCB2YWxpZGF0ZUl0KHJlcXVlc3QuYm9keSwgRW1wbG95ZWVEdG8sIFtFbXBsb3llZUR0b0dyb3VwLkNSRUFURV0pO1xyXG5cclxuICAgIGRhdGEucGFzc3dvcmQgPSBtZDUoZGF0YS5wYXNzd29yZClcclxuXHJcbiAgICBjb25zdCB7IF9pZCB9ID0gYXdhaXQgZW1wbG95ZWVTZXJ2aWNlLmNyZWF0ZShkYXRhKTtcclxuXHJcbiAgICByZXR1cm4gcmVwbHkuc3VjY2VzcyhfaWQpO1xyXG5cclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICBpZiAoZSBpbnN0YW5jZW9mIEVtcGxveWVlRXhjZXB0aW9uKSB7XHJcbiAgICAgIHRocm93IGU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aHJvdyBFbXBsb3llZUV4Y2VwdGlvbi5Vbmtub3duRXJyb3IoZSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5cclxuLy8hIHVwZGF0ZXMgYWRtaW5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZUVtcGxveWVlSGFuZGxlcihyZXF1ZXN0LCByZXBseSkge1xyXG4gIHRyeSB7XHJcbiAgICBhd2FpdCByb2xlU2VydmljZS5oYXNBY2Nlc3MocmVxdWVzdC5hZG1pbi5yb2xlSWQsIFJvbGVzLkVNUExPWUVFX1VQREFURSk7XHJcblxyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHZhbGlkYXRlSXQocmVxdWVzdC5ib2R5LCBFbXBsb3llZUR0bywgW0VtcGxveWVlRHRvR3JvdXAuVVBEQVRFXSk7XHJcblxyXG4gICAgaWYgKGRhdGEucGFzc3dvcmQpIHtcclxuICAgICAgZGF0YS5wYXNzd29yZCA9IG1kNShkYXRhLnBhc3N3b3JkKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGFkbWluID0gYXdhaXQgZW1wbG95ZWVTZXJ2aWNlLnVwZGF0ZU9uZShkYXRhLl9pZCwgZGF0YSwgeyBuZXc6IHRydWUgfSk7XHJcblxyXG4gICAgcmV0dXJuIHJlcGx5LnN1Y2Nlc3MoYWRtaW4uX2lkKTtcclxuXHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgaWYgKGUgaW5zdGFuY2VvZiBFbXBsb3llZUV4Y2VwdGlvbikge1xyXG4gICAgICB0aHJvdyBlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhyb3cgRW1wbG95ZWVFeGNlcHRpb24uVW5rbm93bkVycm9yKGUpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLy8hIHVwZGF0ZXMgYWRtaW5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZUVtcGxveWVlUHJvZmlsZUhhbmRsZXIocmVxdWVzdCwgcmVwbHkpIHtcclxuICB0cnkge1xyXG4gICAgYXdhaXQgcm9sZVNlcnZpY2UuaGFzQWNjZXNzKHJlcXVlc3QuYWRtaW4ucm9sZUlkLCBSb2xlcy5FTVBMT1lFRSk7XHJcblxyXG4gICAgcmVxdWVzdC5ib2R5Ll9pZCA9IHJlcXVlc3QuYWRtaW4uX2lkLnRvU3RyaW5nKClcclxuXHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgdmFsaWRhdGVJdChyZXF1ZXN0LmJvZHksIEVtcGxveWVlRHRvLCBbRW1wbG95ZWVEdG9Hcm91cC5VUERBVEVdKTtcclxuXHJcbiAgICBpZiAoZGF0YS5wYXNzd29yZCkge1xyXG4gICAgICBkYXRhLnBhc3N3b3JkID0gbWQ1KGRhdGEucGFzc3dvcmQpXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZW1wbG95ZWUgPSBhd2FpdCBlbXBsb3llZVNlcnZpY2UudXBkYXRlT25lKGRhdGEuX2lkLCBkYXRhLCB7IG5ldzogdHJ1ZSB9KTtcclxuXHJcbiAgICByZXR1cm4gcmVwbHkuc3VjY2VzcyhlbXBsb3llZS5faWQpO1xyXG5cclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICBpZiAoZSBpbnN0YW5jZW9mIEVtcGxveWVlRXhjZXB0aW9uKSB7XHJcbiAgICAgIHRocm93IGU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aHJvdyBFbXBsb3llZUV4Y2VwdGlvbi5Vbmtub3duRXJyb3IoZSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlT25lRW1wbG95ZWVIYW5kbGVyKHJlcXVlc3QsIHJlcGx5KSB7XHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IHJvbGVTZXJ2aWNlLmhhc0FjY2VzcyhyZXF1ZXN0LmFkbWluLnJvbGVJZCwgUm9sZXMuRU1QTE9ZRUVfREVMRVRFKTtcclxuXHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgdmFsaWRhdGVJdChyZXF1ZXN0LnBhcmFtcywgRW1wbG95ZWVEdG8sIFtFbXBsb3llZUR0b0dyb3VwLkRFTEVURV0pO1xyXG5cclxuICAgIGF3YWl0IGVtcGxveWVlU2VydmljZS51cGRhdGVPbmUoZGF0YS5faWQsIGRhdGEsIHsgbmV3OiB0cnVlIH0pO1xyXG5cclxuICAgIHJldHVybiByZXBseS5zdWNjZXNzKGRhdGEuX2lkKTtcclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICBpZiAoZSBpbnN0YW5jZW9mIEVtcGxveWVlRXhjZXB0aW9uKSB7XHJcbiAgICAgIHRocm93IGU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aHJvdyBFbXBsb3llZUV4Y2VwdGlvbi5Vbmtub3duRXJyb3IoZSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5cclxuLy8hIGdldCBlbXBsb3llZXMgYnkgcGFnaW5nXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRQYWdpbmdFbXBsb3llZUhhbmRsZXIocmVxdWVzdCwgcmVwbHkpIHtcclxuICB0cnkge1xyXG4gICAgYXdhaXQgcm9sZVNlcnZpY2UuaGFzQWNjZXNzKHJlcXVlc3QuYWRtaW4ucm9sZUlkLCBSb2xlcy5FTVBMT1lFRSk7XHJcblxyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHZhbGlkYXRlSXQocmVxdWVzdC5xdWVyeSwgRW1wbG95ZWVHZXREdG8sIFtFbXBsb3llZUR0b0dyb3VwLlBBR0VOQVRJT05dKTtcclxuXHJcbiAgICBjb25zdCBhZG1pbnMgPSBhd2FpdCBlbXBsb3llZVNlcnZpY2UuZ2V0UGFnaW5nKGRhdGEpO1xyXG5cclxuICAgIHJldHVybiByZXBseS5zdWNjZXNzKGFkbWlucyk7XHJcblxyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIGlmIChlIGluc3RhbmNlb2YgRW1wbG95ZWVFeGNlcHRpb24pIHtcclxuICAgICAgdGhyb3cgZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRocm93IEVtcGxveWVlRXhjZXB0aW9uLlVua25vd25FcnJvcihlKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0T25lRW1wbG95ZWVIYW5kbGVyKHJlcXVlc3QsIHJlcGx5KSB7XHJcblxyXG4gIHRyeSB7XHJcbiAgICBhd2FpdCByb2xlU2VydmljZS5oYXNBY2Nlc3MocmVxdWVzdC5hZG1pbi5yb2xlSWQsIFJvbGVzLkVNUExPWUVFKTtcclxuXHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgdmFsaWRhdGVJdChyZXF1ZXN0LnBhcmFtcywgRW1wbG95ZWVEdG8sIFtFbXBsb3llZUR0b0dyb3VwLkdFVF9CWV9JRF0pO1xyXG5cclxuICAgIGNvbnN0IGFkbWluID0gYXdhaXQgZW1wbG95ZWVTZXJ2aWNlLmdldEVtcGxveWVlRnVsbChkYXRhLl9pZCk7XHJcblxyXG4gICAgcmV0dXJuIHJlcGx5LnN1Y2Nlc3MoYWRtaW4pO1xyXG5cclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICBpZiAoZSBpbnN0YW5jZW9mIEVtcGxveWVlRXhjZXB0aW9uKSB7XHJcbiAgICAgIHRocm93IGU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aHJvdyBFbXBsb3llZUV4Y2VwdGlvbi5Vbmtub3duRXJyb3IoZSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5cclxuLy8hIGdldCBmdWxsIHByb2ZpbGUgYnkgeW91cnNlbGZcclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEVtcGxveWVlUHJvZmlsZUhhbmRsZXIocmVxdWVzdCwgcmVwbHkpIHtcclxuICB0cnkge1xyXG5cclxuICAgIGNvbnN0IGFkbWluID0gYXdhaXQgZW1wbG95ZWVTZXJ2aWNlLmdldEVtcGxveWVlRnVsbChyZXF1ZXN0LmFkbWluLl9pZC50b1N0cmluZygpKTtcclxuXHJcbiAgICByZXR1cm4gcmVwbHkuc3VjY2VzcyhhZG1pbik7XHJcblxyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIGlmIChlIGluc3RhbmNlb2YgRW1wbG95ZWVFeGNlcHRpb24pIHtcclxuICAgICAgdGhyb3cgZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRocm93IEVtcGxveWVlRXhjZXB0aW9uLlVua25vd25FcnJvcihlKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzaWduSW5IYW5kbGVyKHJlcXVlc3QsIHJlcGx5KSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCB2YWxpZGF0ZUl0KHJlcXVlc3QuYm9keSwgRW1wbG95ZWVEdG8sIFtFbXBsb3llZUR0b0dyb3VwLkxPR0lOXSk7XHJcblxyXG4gICAgY29uc3QgYWRtaW4gPSBhd2FpdCBlbXBsb3llZVNlcnZpY2UuZmluZEJ5UGhvbmUoZGF0YS5waG9uZU51bWJlcik7XHJcblxyXG4gICAgaWYgKCFhZG1pbikgdGhyb3cgRW1wbG95ZWVFeGNlcHRpb24uTm90Rm91bmQoZGF0YS5waG9uZU51bWJlcik7XHJcblxyXG4gICAgaWYgKG1kNShkYXRhLnBhc3N3b3JkKSAhPSBhZG1pbi5wYXNzd29yZCkgdGhyb3cgRW1wbG95ZWVFeGNlcHRpb24uSW52YWxpZFBhc3N3b3JkKCk7XHJcblxyXG4gICAgY29uc3QgdG9rZW4gPSBhd2FpdCBqd3RTaWduKHJlcXVlc3QsIHsgX2lkOiBhZG1pbi5faWQgfSk7XHJcblxyXG4gICAgcmV0dXJuIHJlcGx5LnN1Y2Nlc3Moe1xyXG4gICAgICB0b2tlbixcclxuICAgICAgYWRtaW5cclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIGlmIChlIGluc3RhbmNlb2YgRW1wbG95ZWVFeGNlcHRpb24pIHtcclxuICAgICAgdGhyb3cgZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRocm93IEVtcGxveWVlRXhjZXB0aW9uLlVua25vd25FcnJvcihlKTtcclxuICAgIH1cclxuICB9XHJcbn0iXX0=