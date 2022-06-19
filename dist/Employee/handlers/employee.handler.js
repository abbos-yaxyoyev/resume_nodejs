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
        const employee = await employee_service_1.employeeService.getPaging(data);
        return reply.success(employee);
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
        const { _id, fullName, password, createdAt } = await employee_service_1.employeeService.findByPasswordError(data.password);
        if (!fullName)
            throw exception_1.EmployeeException.NotFound(data.password);
        if ((0, md5_1.default)(data.password) != password)
            throw exception_1.EmployeeException.InvalidPassword();
        const token = await (0, authPlugin_1.jwtSign)(request, { _id });
        return reply.success({
            token,
            employee: { _id, fullName, createdAt }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW1wbG95ZWUuaGFuZGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9FbXBsb3llZS9oYW5kbGVycy9lbXBsb3llZS5oYW5kbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxzREFBc0I7QUFDdEIsd0RBQXFEO0FBQ3JELHlFQUE4RTtBQUM5RSwrREFBeUQ7QUFDekQscUZBQWlGO0FBQ2pGLGtGQUE4RTtBQUM5RSwrRkFBNkg7QUFDN0gsK0RBQThEO0FBRTlELGdDQUFnQztBQUN6QixLQUFLLFVBQVUscUJBQXFCLENBQUMsT0FBTyxFQUFFLEtBQUs7SUFDeEQsSUFBSTtRQUVGLE1BQU0sMEJBQVcsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsYUFBSyxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBRXpFLE1BQU0sSUFBSSxHQUFHLE1BQU0sSUFBQSxxQkFBVSxFQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsMEJBQVcsRUFBRSxDQUFDLCtCQUFnQixDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFFcEYsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFBLGFBQUcsRUFBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUE7UUFFbEMsTUFBTSxFQUFFLEdBQUcsRUFBRSxHQUFHLE1BQU0sa0NBQWUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFbkQsT0FBTyxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0tBRTNCO0lBQUMsT0FBTyxDQUFDLEVBQUU7UUFDVixJQUFJLENBQUMsWUFBWSw2QkFBaUIsRUFBRTtZQUNsQyxNQUFNLENBQUMsQ0FBQztTQUNUO2FBQU07WUFDTCxNQUFNLDZCQUFpQixDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUN6QztLQUNGO0FBQ0gsQ0FBQztBQXBCRCxzREFvQkM7QUFHRCxpQkFBaUI7QUFDVixLQUFLLFVBQVUscUJBQXFCLENBQUMsT0FBTyxFQUFFLEtBQUs7SUFDeEQsSUFBSTtRQUNGLE1BQU0sMEJBQVcsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsYUFBSyxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBRXpFLE1BQU0sSUFBSSxHQUFHLE1BQU0sSUFBQSxxQkFBVSxFQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsMEJBQVcsRUFBRSxDQUFDLCtCQUFnQixDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFFcEYsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2pCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBQSxhQUFHLEVBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFBO1NBQ25DO1FBRUQsTUFBTSxLQUFLLEdBQUcsTUFBTSxrQ0FBZSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUksRUFBRSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1FBRTdFLE9BQU8sS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7S0FFakM7SUFBQyxPQUFPLENBQUMsRUFBRTtRQUNWLElBQUksQ0FBQyxZQUFZLDZCQUFpQixFQUFFO1lBQ2xDLE1BQU0sQ0FBQyxDQUFDO1NBQ1Q7YUFBTTtZQUNMLE1BQU0sNkJBQWlCLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3pDO0tBQ0Y7QUFDSCxDQUFDO0FBckJELHNEQXFCQztBQUVELGlCQUFpQjtBQUNWLEtBQUssVUFBVSw0QkFBNEIsQ0FBQyxPQUFPLEVBQUUsS0FBSztJQUMvRCxJQUFJO1FBQ0YsTUFBTSwwQkFBVyxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxhQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7UUFFbEUsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLENBQUE7UUFFL0MsTUFBTSxJQUFJLEdBQUcsTUFBTSxJQUFBLHFCQUFVLEVBQUMsT0FBTyxDQUFDLElBQUksRUFBRSwwQkFBVyxFQUFFLENBQUMsK0JBQWdCLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUVwRixJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDakIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFBLGFBQUcsRUFBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUE7U0FDbkM7UUFFRCxNQUFNLFFBQVEsR0FBRyxNQUFNLGtDQUFlLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7UUFFaEYsT0FBTyxLQUFLLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQztLQUVwQztJQUFDLE9BQU8sQ0FBQyxFQUFFO1FBQ1YsSUFBSSxDQUFDLFlBQVksNkJBQWlCLEVBQUU7WUFDbEMsTUFBTSxDQUFDLENBQUM7U0FDVDthQUFNO1lBQ0wsTUFBTSw2QkFBaUIsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDekM7S0FDRjtBQUNILENBQUM7QUF2QkQsb0VBdUJDO0FBRU0sS0FBSyxVQUFVLHdCQUF3QixDQUFDLE9BQU8sRUFBRSxLQUFLO0lBQzNELElBQUk7UUFDRixNQUFNLDBCQUFXLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLGFBQUssQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUV6RSxNQUFNLElBQUksR0FBRyxNQUFNLElBQUEscUJBQVUsRUFBQyxPQUFPLENBQUMsTUFBTSxFQUFFLDBCQUFXLEVBQUUsQ0FBQywrQkFBZ0IsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBRXRGLE1BQU0sa0NBQWUsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztRQUUvRCxPQUFPLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0tBQ2hDO0lBQUMsT0FBTyxDQUFDLEVBQUU7UUFDVixJQUFJLENBQUMsWUFBWSw2QkFBaUIsRUFBRTtZQUNsQyxNQUFNLENBQUMsQ0FBQztTQUNUO2FBQU07WUFDTCxNQUFNLDZCQUFpQixDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUN6QztLQUNGO0FBQ0gsQ0FBQztBQWhCRCw0REFnQkM7QUFHRCwyQkFBMkI7QUFDcEIsS0FBSyxVQUFVLHdCQUF3QixDQUFDLE9BQU8sRUFBRSxLQUFLO0lBQzNELElBQUk7UUFDRixNQUFNLDBCQUFXLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLGFBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUVsRSxNQUFNLElBQUksR0FBRyxNQUFNLElBQUEscUJBQVUsRUFBQyxPQUFPLENBQUMsS0FBSyxFQUFFLDZCQUFjLEVBQUUsQ0FBQywrQkFBZ0IsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO1FBRTVGLE1BQU0sUUFBUSxHQUFHLE1BQU0sa0NBQWUsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFdkQsT0FBTyxLQUFLLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0tBRWhDO0lBQUMsT0FBTyxDQUFDLEVBQUU7UUFDVixJQUFJLENBQUMsWUFBWSw2QkFBaUIsRUFBRTtZQUNsQyxNQUFNLENBQUMsQ0FBQztTQUNUO2FBQU07WUFDTCxNQUFNLDZCQUFpQixDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUN6QztLQUNGO0FBQ0gsQ0FBQztBQWpCRCw0REFpQkM7QUFHTSxLQUFLLFVBQVUscUJBQXFCLENBQUMsT0FBTyxFQUFFLEtBQUs7SUFFeEQsSUFBSTtRQUNGLE1BQU0sMEJBQVcsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsYUFBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBRWxFLE1BQU0sSUFBSSxHQUFHLE1BQU0sSUFBQSxxQkFBVSxFQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsMEJBQVcsRUFBRSxDQUFDLCtCQUFnQixDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7UUFFekYsTUFBTSxLQUFLLEdBQUcsTUFBTSxrQ0FBZSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFFOUQsT0FBTyxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBRTdCO0lBQUMsT0FBTyxDQUFDLEVBQUU7UUFDVixJQUFJLENBQUMsWUFBWSw2QkFBaUIsRUFBRTtZQUNsQyxNQUFNLENBQUMsQ0FBQztTQUNUO2FBQU07WUFDTCxNQUFNLDZCQUFpQixDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUN6QztLQUNGO0FBQ0gsQ0FBQztBQWxCRCxzREFrQkM7QUFHRCxnQ0FBZ0M7QUFDekIsS0FBSyxVQUFVLHlCQUF5QixDQUFDLE9BQU8sRUFBRSxLQUFLO0lBQzVELElBQUk7UUFFRixNQUFNLEtBQUssR0FBRyxNQUFNLGtDQUFlLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7UUFFbEYsT0FBTyxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBRTdCO0lBQUMsT0FBTyxDQUFDLEVBQUU7UUFDVixJQUFJLENBQUMsWUFBWSw2QkFBaUIsRUFBRTtZQUNsQyxNQUFNLENBQUMsQ0FBQztTQUNUO2FBQU07WUFDTCxNQUFNLDZCQUFpQixDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUN6QztLQUNGO0FBQ0gsQ0FBQztBQWRELDhEQWNDO0FBRU0sS0FBSyxVQUFVLGFBQWEsQ0FBQyxPQUFPLEVBQUUsS0FBSztJQUNoRCxJQUFJO1FBQ0YsTUFBTSxJQUFJLEdBQUcsTUFBTSxJQUFBLHFCQUFVLEVBQUMsT0FBTyxDQUFDLElBQUksRUFBRSwwQkFBVyxFQUFFLENBQUMsK0JBQWdCLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUVuRixNQUFNLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLEdBQUcsTUFBTSxrQ0FBZSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUV4RyxJQUFJLENBQUMsUUFBUTtZQUFFLE1BQU0sNkJBQWlCLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUUvRCxJQUFJLElBQUEsYUFBRyxFQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxRQUFRO1lBQUUsTUFBTSw2QkFBaUIsQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUU5RSxNQUFNLEtBQUssR0FBRyxNQUFNLElBQUEsb0JBQU8sRUFBQyxPQUFPLEVBQUUsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDO1FBRTlDLE9BQU8sS0FBSyxDQUFDLE9BQU8sQ0FBQztZQUNuQixLQUFLO1lBQ0wsUUFBUSxFQUFFLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUU7U0FDdkMsQ0FBQyxDQUFDO0tBQ0o7SUFBQyxPQUFPLENBQUMsRUFBRTtRQUNWLElBQUksQ0FBQyxZQUFZLDZCQUFpQixFQUFFO1lBQ2xDLE1BQU0sQ0FBQyxDQUFDO1NBQ1Q7YUFBTTtZQUNMLE1BQU0sNkJBQWlCLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3pDO0tBQ0Y7QUFDSCxDQUFDO0FBdkJELHNDQXVCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtZDUgZnJvbSAnbWQ1JztcclxuaW1wb3J0IHsgUm9sZXMgfSBmcm9tICcuLi8uLi9jb21tb24vY29uc3RhbnRzL3JvbGVzJztcclxuaW1wb3J0IHsgRW1wbG95ZWVFeGNlcHRpb24gfSBmcm9tICcuLi8uLi9jb21tb24vZGIvbW9kZWxzL2VtcGxveWVlL2V4Y2VwdGlvbic7XHJcbmltcG9ydCB7IGp3dFNpZ24gfSBmcm9tICcuLi8uLi9jb21tb24vcGx1Z2luL2F1dGhQbHVnaW4nO1xyXG5pbXBvcnQgeyBlbXBsb3llZVNlcnZpY2UgfSBmcm9tICcuLi8uLi9jb21tb24vc2VydmljZS9lbXBsb3llZS9lbXBsb3llZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgcm9sZVNlcnZpY2UgfSBmcm9tICcuLi8uLi9jb21tb24vc2VydmljZS9lbXBsb3llZS9yb2xlL3JvbGUuc2VydmljZSc7XHJcbmltcG9ydCB7IEVtcGxveWVlRHRvLCBFbXBsb3llZUR0b0dyb3VwLCBFbXBsb3llZUdldER0byB9IGZyb20gJy4uLy4uL2NvbW1vbi92YWxpZGF0aW9uL2R0by9jb21tb25Vc2VyL2VtcGxveWVlL2VtcGxveWVlLmR0byc7XHJcbmltcG9ydCB7IHZhbGlkYXRlSXQgfSBmcm9tICcuLi8uLi9jb21tb24vdmFsaWRhdGlvbi92YWxpZGF0ZSc7XHJcblxyXG4vLyEgY3JlYXRlIGVtcGxveWVlIGJ5IG1vZGVyYXRvclxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlRW1wbG95ZWVIYW5kbGVyKHJlcXVlc3QsIHJlcGx5KSB7XHJcbiAgdHJ5IHtcclxuXHJcbiAgICBhd2FpdCByb2xlU2VydmljZS5oYXNBY2Nlc3MocmVxdWVzdC5hZG1pbi5yb2xlSWQsIFJvbGVzLkVNUExPWUVFX0NSRUFURSk7XHJcblxyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHZhbGlkYXRlSXQocmVxdWVzdC5ib2R5LCBFbXBsb3llZUR0bywgW0VtcGxveWVlRHRvR3JvdXAuQ1JFQVRFXSk7XHJcblxyXG4gICAgZGF0YS5wYXNzd29yZCA9IG1kNShkYXRhLnBhc3N3b3JkKVxyXG5cclxuICAgIGNvbnN0IHsgX2lkIH0gPSBhd2FpdCBlbXBsb3llZVNlcnZpY2UuY3JlYXRlKGRhdGEpO1xyXG5cclxuICAgIHJldHVybiByZXBseS5zdWNjZXNzKF9pZCk7XHJcblxyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIGlmIChlIGluc3RhbmNlb2YgRW1wbG95ZWVFeGNlcHRpb24pIHtcclxuICAgICAgdGhyb3cgZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRocm93IEVtcGxveWVlRXhjZXB0aW9uLlVua25vd25FcnJvcihlKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcblxyXG4vLyEgdXBkYXRlcyBhZG1pblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlRW1wbG95ZWVIYW5kbGVyKHJlcXVlc3QsIHJlcGx5KSB7XHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IHJvbGVTZXJ2aWNlLmhhc0FjY2VzcyhyZXF1ZXN0LmFkbWluLnJvbGVJZCwgUm9sZXMuRU1QTE9ZRUVfVVBEQVRFKTtcclxuXHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgdmFsaWRhdGVJdChyZXF1ZXN0LmJvZHksIEVtcGxveWVlRHRvLCBbRW1wbG95ZWVEdG9Hcm91cC5VUERBVEVdKTtcclxuXHJcbiAgICBpZiAoZGF0YS5wYXNzd29yZCkge1xyXG4gICAgICBkYXRhLnBhc3N3b3JkID0gbWQ1KGRhdGEucGFzc3dvcmQpXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgYWRtaW4gPSBhd2FpdCBlbXBsb3llZVNlcnZpY2UudXBkYXRlT25lKGRhdGEuX2lkLCBkYXRhLCB7IG5ldzogdHJ1ZSB9KTtcclxuXHJcbiAgICByZXR1cm4gcmVwbHkuc3VjY2VzcyhhZG1pbi5faWQpO1xyXG5cclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICBpZiAoZSBpbnN0YW5jZW9mIEVtcGxveWVlRXhjZXB0aW9uKSB7XHJcbiAgICAgIHRocm93IGU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aHJvdyBFbXBsb3llZUV4Y2VwdGlvbi5Vbmtub3duRXJyb3IoZSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vLyEgdXBkYXRlcyBhZG1pblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlRW1wbG95ZWVQcm9maWxlSGFuZGxlcihyZXF1ZXN0LCByZXBseSkge1xyXG4gIHRyeSB7XHJcbiAgICBhd2FpdCByb2xlU2VydmljZS5oYXNBY2Nlc3MocmVxdWVzdC5hZG1pbi5yb2xlSWQsIFJvbGVzLkVNUExPWUVFKTtcclxuXHJcbiAgICByZXF1ZXN0LmJvZHkuX2lkID0gcmVxdWVzdC5hZG1pbi5faWQudG9TdHJpbmcoKVxyXG5cclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCB2YWxpZGF0ZUl0KHJlcXVlc3QuYm9keSwgRW1wbG95ZWVEdG8sIFtFbXBsb3llZUR0b0dyb3VwLlVQREFURV0pO1xyXG5cclxuICAgIGlmIChkYXRhLnBhc3N3b3JkKSB7XHJcbiAgICAgIGRhdGEucGFzc3dvcmQgPSBtZDUoZGF0YS5wYXNzd29yZClcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBlbXBsb3llZSA9IGF3YWl0IGVtcGxveWVlU2VydmljZS51cGRhdGVPbmUoZGF0YS5faWQsIGRhdGEsIHsgbmV3OiB0cnVlIH0pO1xyXG5cclxuICAgIHJldHVybiByZXBseS5zdWNjZXNzKGVtcGxveWVlLl9pZCk7XHJcblxyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIGlmIChlIGluc3RhbmNlb2YgRW1wbG95ZWVFeGNlcHRpb24pIHtcclxuICAgICAgdGhyb3cgZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRocm93IEVtcGxveWVlRXhjZXB0aW9uLlVua25vd25FcnJvcihlKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVPbmVFbXBsb3llZUhhbmRsZXIocmVxdWVzdCwgcmVwbHkpIHtcclxuICB0cnkge1xyXG4gICAgYXdhaXQgcm9sZVNlcnZpY2UuaGFzQWNjZXNzKHJlcXVlc3QuYWRtaW4ucm9sZUlkLCBSb2xlcy5FTVBMT1lFRV9ERUxFVEUpO1xyXG5cclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCB2YWxpZGF0ZUl0KHJlcXVlc3QucGFyYW1zLCBFbXBsb3llZUR0bywgW0VtcGxveWVlRHRvR3JvdXAuREVMRVRFXSk7XHJcblxyXG4gICAgYXdhaXQgZW1wbG95ZWVTZXJ2aWNlLnVwZGF0ZU9uZShkYXRhLl9pZCwgZGF0YSwgeyBuZXc6IHRydWUgfSk7XHJcblxyXG4gICAgcmV0dXJuIHJlcGx5LnN1Y2Nlc3MoZGF0YS5faWQpO1xyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIGlmIChlIGluc3RhbmNlb2YgRW1wbG95ZWVFeGNlcHRpb24pIHtcclxuICAgICAgdGhyb3cgZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRocm93IEVtcGxveWVlRXhjZXB0aW9uLlVua25vd25FcnJvcihlKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcblxyXG4vLyEgZ2V0IGVtcGxveWVlcyBieSBwYWdpbmdcclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFBhZ2luZ0VtcGxveWVlSGFuZGxlcihyZXF1ZXN0LCByZXBseSkge1xyXG4gIHRyeSB7XHJcbiAgICBhd2FpdCByb2xlU2VydmljZS5oYXNBY2Nlc3MocmVxdWVzdC5hZG1pbi5yb2xlSWQsIFJvbGVzLkVNUExPWUVFKTtcclxuXHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgdmFsaWRhdGVJdChyZXF1ZXN0LnF1ZXJ5LCBFbXBsb3llZUdldER0bywgW0VtcGxveWVlRHRvR3JvdXAuUEFHRU5BVElPTl0pO1xyXG5cclxuICAgIGNvbnN0IGVtcGxveWVlID0gYXdhaXQgZW1wbG95ZWVTZXJ2aWNlLmdldFBhZ2luZyhkYXRhKTtcclxuXHJcbiAgICByZXR1cm4gcmVwbHkuc3VjY2VzcyhlbXBsb3llZSk7XHJcblxyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIGlmIChlIGluc3RhbmNlb2YgRW1wbG95ZWVFeGNlcHRpb24pIHtcclxuICAgICAgdGhyb3cgZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRocm93IEVtcGxveWVlRXhjZXB0aW9uLlVua25vd25FcnJvcihlKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0T25lRW1wbG95ZWVIYW5kbGVyKHJlcXVlc3QsIHJlcGx5KSB7XHJcblxyXG4gIHRyeSB7XHJcbiAgICBhd2FpdCByb2xlU2VydmljZS5oYXNBY2Nlc3MocmVxdWVzdC5hZG1pbi5yb2xlSWQsIFJvbGVzLkVNUExPWUVFKTtcclxuXHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgdmFsaWRhdGVJdChyZXF1ZXN0LnBhcmFtcywgRW1wbG95ZWVEdG8sIFtFbXBsb3llZUR0b0dyb3VwLkdFVF9CWV9JRF0pO1xyXG5cclxuICAgIGNvbnN0IGFkbWluID0gYXdhaXQgZW1wbG95ZWVTZXJ2aWNlLmdldEVtcGxveWVlRnVsbChkYXRhLl9pZCk7XHJcblxyXG4gICAgcmV0dXJuIHJlcGx5LnN1Y2Nlc3MoYWRtaW4pO1xyXG5cclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICBpZiAoZSBpbnN0YW5jZW9mIEVtcGxveWVlRXhjZXB0aW9uKSB7XHJcbiAgICAgIHRocm93IGU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aHJvdyBFbXBsb3llZUV4Y2VwdGlvbi5Vbmtub3duRXJyb3IoZSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5cclxuLy8hIGdldCBmdWxsIHByb2ZpbGUgYnkgeW91cnNlbGZcclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEVtcGxveWVlUHJvZmlsZUhhbmRsZXIocmVxdWVzdCwgcmVwbHkpIHtcclxuICB0cnkge1xyXG5cclxuICAgIGNvbnN0IGFkbWluID0gYXdhaXQgZW1wbG95ZWVTZXJ2aWNlLmdldEVtcGxveWVlRnVsbChyZXF1ZXN0LmFkbWluLl9pZC50b1N0cmluZygpKTtcclxuXHJcbiAgICByZXR1cm4gcmVwbHkuc3VjY2VzcyhhZG1pbik7XHJcblxyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIGlmIChlIGluc3RhbmNlb2YgRW1wbG95ZWVFeGNlcHRpb24pIHtcclxuICAgICAgdGhyb3cgZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRocm93IEVtcGxveWVlRXhjZXB0aW9uLlVua25vd25FcnJvcihlKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzaWduSW5IYW5kbGVyKHJlcXVlc3QsIHJlcGx5KSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCB2YWxpZGF0ZUl0KHJlcXVlc3QuYm9keSwgRW1wbG95ZWVEdG8sIFtFbXBsb3llZUR0b0dyb3VwLkxPR0lOXSk7XHJcblxyXG4gICAgY29uc3QgeyBfaWQsIGZ1bGxOYW1lLCBwYXNzd29yZCwgY3JlYXRlZEF0IH0gPSBhd2FpdCBlbXBsb3llZVNlcnZpY2UuZmluZEJ5UGFzc3dvcmRFcnJvcihkYXRhLnBhc3N3b3JkKTtcclxuXHJcbiAgICBpZiAoIWZ1bGxOYW1lKSB0aHJvdyBFbXBsb3llZUV4Y2VwdGlvbi5Ob3RGb3VuZChkYXRhLnBhc3N3b3JkKTtcclxuXHJcbiAgICBpZiAobWQ1KGRhdGEucGFzc3dvcmQpICE9IHBhc3N3b3JkKSB0aHJvdyBFbXBsb3llZUV4Y2VwdGlvbi5JbnZhbGlkUGFzc3dvcmQoKTtcclxuXHJcbiAgICBjb25zdCB0b2tlbiA9IGF3YWl0IGp3dFNpZ24ocmVxdWVzdCwgeyBfaWQgfSk7XHJcblxyXG4gICAgcmV0dXJuIHJlcGx5LnN1Y2Nlc3Moe1xyXG4gICAgICB0b2tlbixcclxuICAgICAgZW1wbG95ZWU6IHsgX2lkLCBmdWxsTmFtZSwgY3JlYXRlZEF0IH1cclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIGlmIChlIGluc3RhbmNlb2YgRW1wbG95ZWVFeGNlcHRpb24pIHtcclxuICAgICAgdGhyb3cgZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRocm93IEVtcGxveWVlRXhjZXB0aW9uLlVua25vd25FcnJvcihlKTtcclxuICAgIH1cclxuICB9XHJcbn0iXX0=