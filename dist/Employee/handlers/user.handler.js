"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPagingUserHandler = void 0;
const roles_1 = require("../../common/constants/roles");
const exception_1 = require("../../common/db/models/user/exception");
const role_service_1 = require("../../common/service/employee/role/role.service");
const user_service_1 = require("../../common/service/user/user.service");
const user_dto_1 = require("../../common/validation/dto/commonUser/user/user.dto");
const validate_1 = require("../../common/validation/validate");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5oYW5kbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL0VtcGxveWVlL2hhbmRsZXJzL3VzZXIuaGFuZGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSx3REFBcUQ7QUFDckQscUVBQXNFO0FBQ3RFLGtGQUE4RTtBQUM5RSx5RUFBcUU7QUFDckUsbUZBQWdHO0FBQ2hHLCtEQUE4RDtBQUd2RCxLQUFLLFVBQVUsb0JBQW9CLENBQUMsT0FBTyxFQUFFLEtBQUs7SUFDdkQsSUFBSTtRQUNGLE1BQU0sMEJBQVcsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsYUFBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBRWxFLE1BQU0sSUFBSSxHQUFHLE1BQU0sSUFBQSxxQkFBVSxFQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUscUJBQVUsRUFBRSxDQUFDLHVCQUFZLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztRQUVwRixNQUFNLEtBQUssR0FBRyxNQUFNLDBCQUFXLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRWhELE9BQU8sS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUU3QjtJQUFDLE9BQU8sQ0FBQyxFQUFFO1FBQ1YsSUFBSSxDQUFDLFlBQVkseUJBQWEsRUFBRTtZQUM5QixNQUFNLENBQUMsQ0FBQztTQUNUO2FBQU07WUFDTCxNQUFNLHlCQUFhLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3JDO0tBQ0Y7QUFDSCxDQUFDO0FBakJELG9EQWlCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJvbGVzIH0gZnJvbSAnLi4vLi4vY29tbW9uL2NvbnN0YW50cy9yb2xlcyc7XHJcbmltcG9ydCB7IFVzZXJFeGNlcHRpb24gfSBmcm9tICcuLi8uLi9jb21tb24vZGIvbW9kZWxzL3VzZXIvZXhjZXB0aW9uJztcclxuaW1wb3J0IHsgcm9sZVNlcnZpY2UgfSBmcm9tICcuLi8uLi9jb21tb24vc2VydmljZS9lbXBsb3llZS9yb2xlL3JvbGUuc2VydmljZSc7XHJcbmltcG9ydCB7IHVzZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vY29tbW9uL3NlcnZpY2UvdXNlci91c2VyLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBVc2VyRHRvR3JvdXAsIFVzZXJHZXREdG8gfSBmcm9tICcuLi8uLi9jb21tb24vdmFsaWRhdGlvbi9kdG8vY29tbW9uVXNlci91c2VyL3VzZXIuZHRvJztcclxuaW1wb3J0IHsgdmFsaWRhdGVJdCB9IGZyb20gJy4uLy4uL2NvbW1vbi92YWxpZGF0aW9uL3ZhbGlkYXRlJztcclxuXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0UGFnaW5nVXNlckhhbmRsZXIocmVxdWVzdCwgcmVwbHkpIHtcclxuICB0cnkge1xyXG4gICAgYXdhaXQgcm9sZVNlcnZpY2UuaGFzQWNjZXNzKHJlcXVlc3QuYWRtaW4ucm9sZUlkLCBSb2xlcy5FTVBMT1lFRSk7XHJcblxyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHZhbGlkYXRlSXQocmVxdWVzdC5xdWVyeSwgVXNlckdldER0bywgW1VzZXJEdG9Hcm91cC5QQUdFTkFUSU9OXSk7XHJcblxyXG4gICAgY29uc3QgdXNlcnMgPSBhd2FpdCB1c2VyU2VydmljZS5nZXRQYWdpbmcoZGF0YSk7XHJcblxyXG4gICAgcmV0dXJuIHJlcGx5LnN1Y2Nlc3ModXNlcnMpO1xyXG5cclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICBpZiAoZSBpbnN0YW5jZW9mIFVzZXJFeGNlcHRpb24pIHtcclxuICAgICAgdGhyb3cgZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRocm93IFVzZXJFeGNlcHRpb24uVW5rbm93bkVycm9yKGUpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=