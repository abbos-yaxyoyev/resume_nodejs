"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.roleRoutes = void 0;
const config_1 = require("../../../common/config");
const role_handler_1 = require("../../handlers/role/role.handler");
const authenticate_1 = require("../../middleware/authenticate");
exports.roleRoutes = [
    {
        method: 'POST',
        url: `${config_1.API.admin_api}/role`,
        preValidation: [authenticate_1.authEmployee],
        handler: role_handler_1.createRoleHandler,
    },
    {
        method: 'GET',
        url: `${config_1.API.admin_api}/role/:_id`,
        preValidation: [authenticate_1.authEmployee],
        handler: role_handler_1.getOneRoledHandler,
    },
    {
        method: 'PUT',
        url: `${config_1.API.admin_api}/role`,
        preValidation: [authenticate_1.authEmployee],
        handler: role_handler_1.updateRoleHandler,
    },
    {
        method: 'GET',
        url: `${config_1.API.admin_api}/role`,
        preValidation: [authenticate_1.authEmployee],
        handler: role_handler_1.getPagingRoleHandler,
    },
    // {
    //   method: 'DELETE',
    //   url: `${API.admin_api}/role/:_id`,
    //   preValidation: [authEmployee],
    //   handler: deleteOneRoleHandler,
    // },
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL0VtcGxveWVlL3JvdXRlcy9yb2xlL3JvdXRlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxtREFBNkM7QUFDN0MsbUVBRTBDO0FBQzFDLGdFQUE2RDtBQUVoRCxRQUFBLFVBQVUsR0FBRztJQUN4QjtRQUNFLE1BQU0sRUFBRSxNQUFNO1FBQ2QsR0FBRyxFQUFFLEdBQUcsWUFBRyxDQUFDLFNBQVMsT0FBTztRQUM1QixhQUFhLEVBQUUsQ0FBQywyQkFBWSxDQUFDO1FBQzdCLE9BQU8sRUFBRSxnQ0FBaUI7S0FDM0I7SUFDRDtRQUNFLE1BQU0sRUFBRSxLQUFLO1FBQ2IsR0FBRyxFQUFFLEdBQUcsWUFBRyxDQUFDLFNBQVMsWUFBWTtRQUNqQyxhQUFhLEVBQUUsQ0FBQywyQkFBWSxDQUFDO1FBQzdCLE9BQU8sRUFBRSxpQ0FBa0I7S0FDNUI7SUFDRDtRQUNFLE1BQU0sRUFBRSxLQUFLO1FBQ2IsR0FBRyxFQUFFLEdBQUcsWUFBRyxDQUFDLFNBQVMsT0FBTztRQUM1QixhQUFhLEVBQUUsQ0FBQywyQkFBWSxDQUFDO1FBQzdCLE9BQU8sRUFBRSxnQ0FBaUI7S0FDM0I7SUFDRDtRQUNFLE1BQU0sRUFBRSxLQUFLO1FBQ2IsR0FBRyxFQUFFLEdBQUcsWUFBRyxDQUFDLFNBQVMsT0FBTztRQUM1QixhQUFhLEVBQUUsQ0FBQywyQkFBWSxDQUFDO1FBQzdCLE9BQU8sRUFBRSxtQ0FBb0I7S0FDOUI7SUFDRCxJQUFJO0lBQ0osc0JBQXNCO0lBQ3RCLHVDQUF1QztJQUN2QyxtQ0FBbUM7SUFDbkMsbUNBQW1DO0lBQ25DLEtBQUs7Q0FDTixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQVBJIH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL2NvbmZpZyc7XHJcbmltcG9ydCB7XHJcbiAgY3JlYXRlUm9sZUhhbmRsZXIsIGdldE9uZVJvbGVkSGFuZGxlciwgZ2V0UGFnaW5nUm9sZUhhbmRsZXIsIHVwZGF0ZVJvbGVIYW5kbGVyXHJcbn0gZnJvbSAnLi4vLi4vaGFuZGxlcnMvcm9sZS9yb2xlLmhhbmRsZXInO1xyXG5pbXBvcnQgeyBhdXRoRW1wbG95ZWUgfSBmcm9tICcuLi8uLi9taWRkbGV3YXJlL2F1dGhlbnRpY2F0ZSc7XHJcblxyXG5leHBvcnQgY29uc3Qgcm9sZVJvdXRlcyA9IFtcclxuICB7XHJcbiAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgIHVybDogYCR7QVBJLmFkbWluX2FwaX0vcm9sZWAsXHJcbiAgICBwcmVWYWxpZGF0aW9uOiBbYXV0aEVtcGxveWVlXSxcclxuICAgIGhhbmRsZXI6IGNyZWF0ZVJvbGVIYW5kbGVyLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbWV0aG9kOiAnR0VUJyxcclxuICAgIHVybDogYCR7QVBJLmFkbWluX2FwaX0vcm9sZS86X2lkYCxcclxuICAgIHByZVZhbGlkYXRpb246IFthdXRoRW1wbG95ZWVdLFxyXG4gICAgaGFuZGxlcjogZ2V0T25lUm9sZWRIYW5kbGVyLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbWV0aG9kOiAnUFVUJyxcclxuICAgIHVybDogYCR7QVBJLmFkbWluX2FwaX0vcm9sZWAsXHJcbiAgICBwcmVWYWxpZGF0aW9uOiBbYXV0aEVtcGxveWVlXSxcclxuICAgIGhhbmRsZXI6IHVwZGF0ZVJvbGVIYW5kbGVyLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbWV0aG9kOiAnR0VUJyxcclxuICAgIHVybDogYCR7QVBJLmFkbWluX2FwaX0vcm9sZWAsXHJcbiAgICBwcmVWYWxpZGF0aW9uOiBbYXV0aEVtcGxveWVlXSxcclxuICAgIGhhbmRsZXI6IGdldFBhZ2luZ1JvbGVIYW5kbGVyLFxyXG4gIH0sXHJcbiAgLy8ge1xyXG4gIC8vICAgbWV0aG9kOiAnREVMRVRFJyxcclxuICAvLyAgIHVybDogYCR7QVBJLmFkbWluX2FwaX0vcm9sZS86X2lkYCxcclxuICAvLyAgIHByZVZhbGlkYXRpb246IFthdXRoRW1wbG95ZWVdLFxyXG4gIC8vICAgaGFuZGxlcjogZGVsZXRlT25lUm9sZUhhbmRsZXIsXHJcbiAgLy8gfSxcclxuXTtcclxuIl19