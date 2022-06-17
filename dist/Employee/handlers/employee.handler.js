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
const employee_dto_2 = require("./../../common/validation/dto/commonUser/employee/employee.dto");
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
        const data = await (0, validate_1.validateIt)(request.query, employee_dto_2.EmployeeGetDto, [employee_dto_1.EmployeeDtoGroup.PAGENATION]);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW1wbG95ZWUuaGFuZGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9FbXBsb3llZS9oYW5kbGVycy9lbXBsb3llZS5oYW5kbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxzREFBc0I7QUFDdEIsd0RBQXFEO0FBQ3JELHlFQUE4RTtBQUM5RSwrREFBeUQ7QUFDekQscUZBQWlGO0FBQ2pGLGtGQUE4RTtBQUM5RSwrRkFBNkc7QUFDN0csK0RBQThEO0FBQzlELGlHQUFnRztBQUVoRyxnQ0FBZ0M7QUFDekIsS0FBSyxVQUFVLHFCQUFxQixDQUFDLE9BQU8sRUFBRSxLQUFLO0lBQ3hELElBQUk7UUFFRixNQUFNLDBCQUFXLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLGFBQUssQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUV6RSxNQUFNLElBQUksR0FBRyxNQUFNLElBQUEscUJBQVUsRUFBQyxPQUFPLENBQUMsSUFBSSxFQUFFLDBCQUFXLEVBQUUsQ0FBQywrQkFBZ0IsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBRXBGLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBQSxhQUFHLEVBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFBO1FBRWxDLE1BQU0sRUFBRSxHQUFHLEVBQUUsR0FBRyxNQUFNLGtDQUFlLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRW5ELE9BQU8sS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztLQUUzQjtJQUFDLE9BQU8sQ0FBQyxFQUFFO1FBQ1YsSUFBSSxDQUFDLFlBQVksNkJBQWlCLEVBQUU7WUFDbEMsTUFBTSxDQUFDLENBQUM7U0FDVDthQUFNO1lBQ0wsTUFBTSw2QkFBaUIsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDekM7S0FDRjtBQUNILENBQUM7QUFwQkQsc0RBb0JDO0FBR0QsaUJBQWlCO0FBQ1Ys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QUUsMEJBQVcsRUFBRSxDQUFDLCtCQUFnQixDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFFbkYsTUFBTSxLQUFLLEdBQUcsTUFBTSxrQ0FBZSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7UUFFbEUsSUFBSSxDQUFDLEtBQUs7WUFBRSxNQUFNLDZCQUFpQixDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7UUFFL0QsSUFBSSxJQUFBLGFBQUcsRUFBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksS0FBSyxDQUFDLFFBQVE7WUFBRSxNQUFNLDZCQUFpQixDQUFDLGVBQWUsRUFBRSxDQUFDO1FBRXBGLE1BQU0sS0FBSyxHQUFHLE1BQU0sSUFBQSxvQkFBTyxFQUFDLE9BQU8sRUFBRSxFQUFFLEdBQUcsRUFBRSxLQUFLLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQztRQUV6RCxPQUFPLEtBQUssQ0FBQyxPQUFPLENBQUM7WUFDbkIsS0FBSztZQUNMLEtBQUs7U0FDTixDQUFDLENBQUM7S0FDSjtJQUFDLE9BQU8sQ0FBQyxFQUFFO1FBQ1YsSUFBSSxDQUFDLFlBQVksNkJBQWlCLEVBQUU7WUFDbEMsTUFBTSxDQUFDLENBQUM7U0FDVDthQUFNO1lBQ0wsTUFBTSw2QkFBaUIsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDekM7S0FDRjtBQUNILENBQUM7QUF2QkQsc0NBdUJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1kNSBmcm9tICdtZDUnO1xyXG5pbXBvcnQgeyBSb2xlcyB9IGZyb20gJy4uLy4uL2NvbW1vbi9jb25zdGFudHMvcm9sZXMnO1xyXG5pbXBvcnQgeyBFbXBsb3llZUV4Y2VwdGlvbiB9IGZyb20gJy4uLy4uL2NvbW1vbi9kYi9tb2RlbHMvZW1wbG95ZWUvZXhjZXB0aW9uJztcclxuaW1wb3J0IHsgand0U2lnbiB9IGZyb20gJy4uLy4uL2NvbW1vbi9wbHVnaW4vYXV0aFBsdWdpbic7XHJcbmltcG9ydCB7IGVtcGxveWVlU2VydmljZSB9IGZyb20gJy4uLy4uL2NvbW1vbi9zZXJ2aWNlL2VtcGxveWVlL2VtcGxveWVlLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyByb2xlU2VydmljZSB9IGZyb20gJy4uLy4uL2NvbW1vbi9zZXJ2aWNlL2VtcGxveWVlL3JvbGUvcm9sZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgRW1wbG95ZWVEdG8sIEVtcGxveWVlRHRvR3JvdXAgfSBmcm9tICcuLi8uLi9jb21tb24vdmFsaWRhdGlvbi9kdG8vY29tbW9uVXNlci9lbXBsb3llZS9lbXBsb3llZS5kdG8nO1xyXG5pbXBvcnQgeyB2YWxpZGF0ZUl0IH0gZnJvbSAnLi4vLi4vY29tbW9uL3ZhbGlkYXRpb24vdmFsaWRhdGUnO1xyXG5pbXBvcnQgeyBFbXBsb3llZUdldER0byB9IGZyb20gJy4vLi4vLi4vY29tbW9uL3ZhbGlkYXRpb24vZHRvL2NvbW1vblVzZXIvZW1wbG95ZWUvZW1wbG95ZWUuZHRvJztcclxuXHJcbi8vISBjcmVhdGUgZW1wbG95ZWUgYnkgbW9kZXJhdG9yXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVFbXBsb3llZUhhbmRsZXIocmVxdWVzdCwgcmVwbHkpIHtcclxuICB0cnkge1xyXG5cclxuICAgIGF3YWl0IHJvbGVTZXJ2aWNlLmhhc0FjY2VzcyhyZXF1ZXN0LmFkbWluLnJvbGVJZCwgUm9sZXMuRU1QTE9ZRUVfQ1JFQVRFKTtcclxuXHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgdmFsaWRhdGVJdChyZXF1ZXN0LmJvZHksIEVtcGxveWVlRHRvLCBbRW1wbG95ZWVEdG9Hcm91cC5DUkVBVEVdKTtcclxuXHJcbiAgICBkYXRhLnBhc3N3b3JkID0gbWQ1KGRhdGEucGFzc3dvcmQpXHJcblxyXG4gICAgY29uc3QgeyBfaWQgfSA9IGF3YWl0IGVtcGxveWVlU2VydmljZS5jcmVhdGUoZGF0YSk7XHJcblxyXG4gICAgcmV0dXJuIHJlcGx5LnN1Y2Nlc3MoX2lkKTtcclxuXHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgaWYgKGUgaW5zdGFuY2VvZiBFbXBsb3llZUV4Y2VwdGlvbikge1xyXG4gICAgICB0aHJvdyBlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhyb3cgRW1wbG95ZWVFeGNlcHRpb24uVW5rbm93bkVycm9yKGUpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuXHJcbi8vISB1cGRhdGVzIGFkbWluXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVFbXBsb3llZUhhbmRsZXIocmVxdWVzdCwgcmVwbHkpIHtcclxuICB0cnkge1xyXG4gICAgYXdhaXQgcm9sZVNlcnZpY2UuaGFzQWNjZXNzKHJlcXVlc3QuYWRtaW4ucm9sZUlkLCBSb2xlcy5FTVBMT1lFRV9VUERBVEUpO1xyXG5cclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCB2YWxpZGF0ZUl0KHJlcXVlc3QuYm9keSwgRW1wbG95ZWVEdG8sIFtFbXBsb3llZUR0b0dyb3VwLlVQREFURV0pO1xyXG5cclxuICAgIGlmIChkYXRhLnBhc3N3b3JkKSB7XHJcbiAgICAgIGRhdGEucGFzc3dvcmQgPSBtZDUoZGF0YS5wYXNzd29yZClcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBhZG1pbiA9IGF3YWl0IGVtcGxveWVlU2VydmljZS51cGRhdGVPbmUoZGF0YS5faWQsIGRhdGEsIHsgbmV3OiB0cnVlIH0pO1xyXG5cclxuICAgIHJldHVybiByZXBseS5zdWNjZXNzKGFkbWluLl9pZCk7XHJcblxyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIGlmIChlIGluc3RhbmNlb2YgRW1wbG95ZWVFeGNlcHRpb24pIHtcclxuICAgICAgdGhyb3cgZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRocm93IEVtcGxveWVlRXhjZXB0aW9uLlVua25vd25FcnJvcihlKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8vISB1cGRhdGVzIGFkbWluXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVFbXBsb3llZVByb2ZpbGVIYW5kbGVyKHJlcXVlc3QsIHJlcGx5KSB7XHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IHJvbGVTZXJ2aWNlLmhhc0FjY2VzcyhyZXF1ZXN0LmFkbWluLnJvbGVJZCwgUm9sZXMuRU1QTE9ZRUUpO1xyXG5cclxuICAgIHJlcXVlc3QuYm9keS5faWQgPSByZXF1ZXN0LmFkbWluLl9pZC50b1N0cmluZygpXHJcblxyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHZhbGlkYXRlSXQocmVxdWVzdC5ib2R5LCBFbXBsb3llZUR0bywgW0VtcGxveWVlRHRvR3JvdXAuVVBEQVRFXSk7XHJcblxyXG4gICAgaWYgKGRhdGEucGFzc3dvcmQpIHtcclxuICAgICAgZGF0YS5wYXNzd29yZCA9IG1kNShkYXRhLnBhc3N3b3JkKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGVtcGxveWVlID0gYXdhaXQgZW1wbG95ZWVTZXJ2aWNlLnVwZGF0ZU9uZShkYXRhLl9pZCwgZGF0YSwgeyBuZXc6IHRydWUgfSk7XHJcblxyXG4gICAgcmV0dXJuIHJlcGx5LnN1Y2Nlc3MoZW1wbG95ZWUuX2lkKTtcclxuXHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgaWYgKGUgaW5zdGFuY2VvZiBFbXBsb3llZUV4Y2VwdGlvbikge1xyXG4gICAgICB0aHJvdyBlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhyb3cgRW1wbG95ZWVFeGNlcHRpb24uVW5rbm93bkVycm9yKGUpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZU9uZUVtcGxveWVlSGFuZGxlcihyZXF1ZXN0LCByZXBseSkge1xyXG4gIHRyeSB7XHJcbiAgICBhd2FpdCByb2xlU2VydmljZS5oYXNBY2Nlc3MocmVxdWVzdC5hZG1pbi5yb2xlSWQsIFJvbGVzLkVNUExPWUVFX0RFTEVURSk7XHJcblxyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHZhbGlkYXRlSXQocmVxdWVzdC5wYXJhbXMsIEVtcGxveWVlRHRvLCBbRW1wbG95ZWVEdG9Hcm91cC5ERUxFVEVdKTtcclxuXHJcbiAgICBhd2FpdCBlbXBsb3llZVNlcnZpY2UudXBkYXRlT25lKGRhdGEuX2lkLCBkYXRhLCB7IG5ldzogdHJ1ZSB9KTtcclxuXHJcbiAgICByZXR1cm4gcmVwbHkuc3VjY2VzcyhkYXRhLl9pZCk7XHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgaWYgKGUgaW5zdGFuY2VvZiBFbXBsb3llZUV4Y2VwdGlvbikge1xyXG4gICAgICB0aHJvdyBlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhyb3cgRW1wbG95ZWVFeGNlcHRpb24uVW5rbm93bkVycm9yKGUpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuXHJcbi8vISBnZXQgZW1wbG95ZWVzIGJ5IHBhZ2luZ1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0UGFnaW5nRW1wbG95ZWVIYW5kbGVyKHJlcXVlc3QsIHJlcGx5KSB7XHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IHJvbGVTZXJ2aWNlLmhhc0FjY2VzcyhyZXF1ZXN0LmFkbWluLnJvbGVJZCwgUm9sZXMuRU1QTE9ZRUUpO1xyXG5cclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCB2YWxpZGF0ZUl0KHJlcXVlc3QucXVlcnksIEVtcGxveWVlR2V0RHRvLCBbRW1wbG95ZWVEdG9Hcm91cC5QQUdFTkFUSU9OXSk7XHJcblxyXG4gICAgY29uc3QgYWRtaW5zID0gYXdhaXQgZW1wbG95ZWVTZXJ2aWNlLmdldFBhZ2luZyhkYXRhKTtcclxuXHJcbiAgICByZXR1cm4gcmVwbHkuc3VjY2VzcyhhZG1pbnMpO1xyXG5cclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICBpZiAoZSBpbnN0YW5jZW9mIEVtcGxveWVlRXhjZXB0aW9uKSB7XHJcbiAgICAgIHRocm93IGU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aHJvdyBFbXBsb3llZUV4Y2VwdGlvbi5Vbmtub3duRXJyb3IoZSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldE9uZUVtcGxveWVlSGFuZGxlcihyZXF1ZXN0LCByZXBseSkge1xyXG5cclxuICB0cnkge1xyXG4gICAgYXdhaXQgcm9sZVNlcnZpY2UuaGFzQWNjZXNzKHJlcXVlc3QuYWRtaW4ucm9sZUlkLCBSb2xlcy5FTVBMT1lFRSk7XHJcblxyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHZhbGlkYXRlSXQocmVxdWVzdC5wYXJhbXMsIEVtcGxveWVlRHRvLCBbRW1wbG95ZWVEdG9Hcm91cC5HRVRfQllfSURdKTtcclxuXHJcbiAgICBjb25zdCBhZG1pbiA9IGF3YWl0IGVtcGxveWVlU2VydmljZS5nZXRFbXBsb3llZUZ1bGwoZGF0YS5faWQpO1xyXG5cclxuICAgIHJldHVybiByZXBseS5zdWNjZXNzKGFkbWluKTtcclxuXHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgaWYgKGUgaW5zdGFuY2VvZiBFbXBsb3llZUV4Y2VwdGlvbikge1xyXG4gICAgICB0aHJvdyBlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhyb3cgRW1wbG95ZWVFeGNlcHRpb24uVW5rbm93bkVycm9yKGUpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuXHJcbi8vISBnZXQgZnVsbCBwcm9maWxlIGJ5IHlvdXJzZWxmXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRFbXBsb3llZVByb2ZpbGVIYW5kbGVyKHJlcXVlc3QsIHJlcGx5KSB7XHJcbiAgdHJ5IHtcclxuXHJcbiAgICBjb25zdCBhZG1pbiA9IGF3YWl0IGVtcGxveWVlU2VydmljZS5nZXRFbXBsb3llZUZ1bGwocmVxdWVzdC5hZG1pbi5faWQudG9TdHJpbmcoKSk7XHJcblxyXG4gICAgcmV0dXJuIHJlcGx5LnN1Y2Nlc3MoYWRtaW4pO1xyXG5cclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICBpZiAoZSBpbnN0YW5jZW9mIEVtcGxveWVlRXhjZXB0aW9uKSB7XHJcbiAgICAgIHRocm93IGU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aHJvdyBFbXBsb3llZUV4Y2VwdGlvbi5Vbmtub3duRXJyb3IoZSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc2lnbkluSGFuZGxlcihyZXF1ZXN0LCByZXBseSkge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgdmFsaWRhdGVJdChyZXF1ZXN0LmJvZHksIEVtcGxveWVlRHRvLCBbRW1wbG95ZWVEdG9Hcm91cC5MT0dJTl0pO1xyXG5cclxuICAgIGNvbnN0IGFkbWluID0gYXdhaXQgZW1wbG95ZWVTZXJ2aWNlLmZpbmRCeVBob25lKGRhdGEucGhvbmVOdW1iZXIpO1xyXG5cclxuICAgIGlmICghYWRtaW4pIHRocm93IEVtcGxveWVlRXhjZXB0aW9uLk5vdEZvdW5kKGRhdGEucGhvbmVOdW1iZXIpO1xyXG5cclxuICAgIGlmIChtZDUoZGF0YS5wYXNzd29yZCkgIT0gYWRtaW4ucGFzc3dvcmQpIHRocm93IEVtcGxveWVlRXhjZXB0aW9uLkludmFsaWRQYXNzd29yZCgpO1xyXG5cclxuICAgIGNvbnN0IHRva2VuID0gYXdhaXQgand0U2lnbihyZXF1ZXN0LCB7IF9pZDogYWRtaW4uX2lkIH0pO1xyXG5cclxuICAgIHJldHVybiByZXBseS5zdWNjZXNzKHtcclxuICAgICAgdG9rZW4sXHJcbiAgICAgIGFkbWluXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICBpZiAoZSBpbnN0YW5jZW9mIEVtcGxveWVlRXhjZXB0aW9uKSB7XHJcbiAgICAgIHRocm93IGU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aHJvdyBFbXBsb3llZUV4Y2VwdGlvbi5Vbmtub3duRXJyb3IoZSk7XHJcbiAgICB9XHJcbiAgfVxyXG59Il19