"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPagingUserHandler = void 0;
const roles_1 = require("../../common/constants/roles");
const role_service_1 = require("../../common/service/employee/role/role.service");
const user_service_1 = require("../../common/service/user/user.service");
const user_dto_1 = require("../../common/validation/dto/commonUser/user/user.dto");
const validate_1 = require("../../common/validation/validate");
const exception_1 = require("./../../common/db/models/user/exception");
async function getPagingUserHandler(request, reply) {
    try {
        await role_service_1.roleService.hasAccess(request.admin.roleId, roles_1.Roles.EMPLOYEE);
        const data = await (0, validate_1.validateIt)(request.query, user_dto_1.UserGetDto, [user_dto_1.UserDtoGroup.PAGENATION]);
        const users = await user_service_1.userService.getPaging(data);
        return reply.success(users);
    }
    catch (e) {
        if (e instanceof exception_1.UserException) {
            throw e;
        }
        else {
            throw exception_1.UserException.UnknownError(e);
        }
    }
}
exports.getPagingUserHandler = getPagingUserHandler;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5oYW5kbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL0VtcGxveWVlL2hhbmRsZXJzL3VzZXIuaGFuZGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSx3REFBcUQ7QUFDckQsa0ZBQThFO0FBQzlFLHlFQUFxRTtBQUNyRSxtRkFBZ0c7QUFDaEcsK0RBQThEO0FBQzlELHVFQUF3RTtBQUdqRSxLQUFLLFVBQVUsb0JBQW9CLENBQUMsT0FBTyxFQUFFLEtBQUs7SUFDdkQsSUFBSTtRQUNGLE1BQU0sMEJBQVcsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsYUFBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBRWxFLE1BQU0sSUFBSSxHQUFHLE1BQU0sSUFBQSxxQkFBVSxFQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUscUJBQVUsRUFBRSxDQUFDLHVCQUFZLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztRQUVwRixNQUFNLEtBQUssR0FBRyxNQUFNLDBCQUFXLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRWhELE9BQU8sS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUU3QjtJQUFDLE9BQU8sQ0FBQyxFQUFFO1FBQ1YsSUFBSSxDQUFDLFlBQVkseUJBQWEsRUFBRTtZQUM5QixNQUFNLENBQUMsQ0FBQztTQUNUO2FBQU07WUFDTCxNQUFNLHlCQUFhLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3JDO0tBQ0Y7QUFDSCxDQUFDO0FBakJELG9EQWlCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJvbGVzIH0gZnJvbSAnLi4vLi4vY29tbW9uL2NvbnN0YW50cy9yb2xlcyc7XHJcbmltcG9ydCB7IHJvbGVTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vY29tbW9uL3NlcnZpY2UvZW1wbG95ZWUvcm9sZS9yb2xlLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyB1c2VyU2VydmljZSB9IGZyb20gJy4uLy4uL2NvbW1vbi9zZXJ2aWNlL3VzZXIvdXNlci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgVXNlckR0b0dyb3VwLCBVc2VyR2V0RHRvIH0gZnJvbSAnLi4vLi4vY29tbW9uL3ZhbGlkYXRpb24vZHRvL2NvbW1vblVzZXIvdXNlci91c2VyLmR0byc7XHJcbmltcG9ydCB7IHZhbGlkYXRlSXQgfSBmcm9tICcuLi8uLi9jb21tb24vdmFsaWRhdGlvbi92YWxpZGF0ZSc7XHJcbmltcG9ydCB7IFVzZXJFeGNlcHRpb24gfSBmcm9tICcuLy4uLy4uL2NvbW1vbi9kYi9tb2RlbHMvdXNlci9leGNlcHRpb24nO1xyXG5cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRQYWdpbmdVc2VySGFuZGxlcihyZXF1ZXN0LCByZXBseSkge1xyXG4gIHRyeSB7XHJcbiAgICBhd2FpdCByb2xlU2VydmljZS5oYXNBY2Nlc3MocmVxdWVzdC5hZG1pbi5yb2xlSWQsIFJvbGVzLkVNUExPWUVFKTtcclxuXHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgdmFsaWRhdGVJdChyZXF1ZXN0LnF1ZXJ5LCBVc2VyR2V0RHRvLCBbVXNlckR0b0dyb3VwLlBBR0VOQVRJT05dKTtcclxuXHJcbiAgICBjb25zdCB1c2VycyA9IGF3YWl0IHVzZXJTZXJ2aWNlLmdldFBhZ2luZyhkYXRhKTtcclxuXHJcbiAgICByZXR1cm4gcmVwbHkuc3VjY2Vzcyh1c2Vycyk7XHJcblxyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIGlmIChlIGluc3RhbmNlb2YgVXNlckV4Y2VwdGlvbikge1xyXG4gICAgICB0aHJvdyBlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhyb3cgVXNlckV4Y2VwdGlvbi5Vbmtub3duRXJyb3IoZSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==