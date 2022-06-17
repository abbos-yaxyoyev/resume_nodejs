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
    {
        method: 'DELETE',
        url: `${config_1.API.admin_api}/role/:_id`,
        preValidation: [authenticate_1.authEmployee],
        handler: role_handler_1.deleteOneRoleHandler,
    },
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2VtcGxveWVlL3JvdXRlcy9yb2xlL3JvdXRlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxtREFBNkM7QUFDN0MsbUVBRTBDO0FBQzFDLGdFQUE2RDtBQUVoRCxRQUFBLFVBQVUsR0FBRztJQUN4QjtRQUNFLE1BQU0sRUFBRSxNQUFNO1FBQ2QsR0FBRyxFQUFFLEdBQUcsWUFBRyxDQUFDLFNBQVMsT0FBTztRQUM1QixhQUFhLEVBQUUsQ0FBQywyQkFBWSxDQUFDO1FBQzdCLE9BQU8sRUFBRSxnQ0FBaUI7S0FDM0I7SUFDRDtRQUNFLE1BQU0sRUFBRSxLQUFLO1FBQ2IsR0FBRyxFQUFFLEdBQUcsWUFBRyxDQUFDLFNBQVMsWUFBWTtRQUNqQyxhQUFhLEVBQUUsQ0FBQywyQkFBWSxDQUFDO1FBQzdCLE9BQU8sRUFBRSxpQ0FBa0I7S0FDNUI7SUFDRDtRQUNFLE1BQU0sRUFBRSxLQUFLO1FBQ2IsR0FBRyxFQUFFLEdBQUcsWUFBRyxDQUFDLFNBQVMsT0FBTztRQUM1QixhQUFhLEVBQUUsQ0FBQywyQkFBWSxDQUFDO1FBQzdCLE9BQU8sRUFBRSxnQ0FBaUI7S0FDM0I7SUFDRDtRQUNFLE1BQU0sRUFBRSxLQUFLO1FBQ2IsR0FBRyxFQUFFLEdBQUcsWUFBRyxDQUFDLFNBQVMsT0FBTztRQUM1QixhQUFhLEVBQUUsQ0FBQywyQkFBWSxDQUFDO1FBQzdCLE9BQU8sRUFBRSxtQ0FBb0I7S0FDOUI7SUFDRDtRQUNFLE1BQU0sRUFBRSxRQUFRO1FBQ2hCLEdBQUcsRUFBRSxHQUFHLFlBQUcsQ0FBQyxTQUFTLFlBQVk7UUFDakMsYUFBYSxFQUFFLENBQUMsMkJBQVksQ0FBQztRQUM3QixPQUFPLEVBQUUsbUNBQW9CO0tBQzlCO0NBQ0YsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFQSSB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9jb25maWcnO1xyXG5pbXBvcnQge1xyXG4gIGNyZWF0ZVJvbGVIYW5kbGVyLCBkZWxldGVPbmVSb2xlSGFuZGxlciwgZ2V0T25lUm9sZWRIYW5kbGVyLCBnZXRQYWdpbmdSb2xlSGFuZGxlciwgdXBkYXRlUm9sZUhhbmRsZXJcclxufSBmcm9tICcuLi8uLi9oYW5kbGVycy9yb2xlL3JvbGUuaGFuZGxlcic7XHJcbmltcG9ydCB7IGF1dGhFbXBsb3llZSB9IGZyb20gJy4uLy4uL21pZGRsZXdhcmUvYXV0aGVudGljYXRlJztcclxuXHJcbmV4cG9ydCBjb25zdCByb2xlUm91dGVzID0gW1xyXG4gIHtcclxuICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgdXJsOiBgJHtBUEkuYWRtaW5fYXBpfS9yb2xlYCxcclxuICAgIHByZVZhbGlkYXRpb246IFthdXRoRW1wbG95ZWVdLFxyXG4gICAgaGFuZGxlcjogY3JlYXRlUm9sZUhhbmRsZXIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgdXJsOiBgJHtBUEkuYWRtaW5fYXBpfS9yb2xlLzpfaWRgLFxyXG4gICAgcHJlVmFsaWRhdGlvbjogW2F1dGhFbXBsb3llZV0sXHJcbiAgICBoYW5kbGVyOiBnZXRPbmVSb2xlZEhhbmRsZXIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBtZXRob2Q6ICdQVVQnLFxyXG4gICAgdXJsOiBgJHtBUEkuYWRtaW5fYXBpfS9yb2xlYCxcclxuICAgIHByZVZhbGlkYXRpb246IFthdXRoRW1wbG95ZWVdLFxyXG4gICAgaGFuZGxlcjogdXBkYXRlUm9sZUhhbmRsZXIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgdXJsOiBgJHtBUEkuYWRtaW5fYXBpfS9yb2xlYCxcclxuICAgIHByZVZhbGlkYXRpb246IFthdXRoRW1wbG95ZWVdLFxyXG4gICAgaGFuZGxlcjogZ2V0UGFnaW5nUm9sZUhhbmRsZXIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBtZXRob2Q6ICdERUxFVEUnLFxyXG4gICAgdXJsOiBgJHtBUEkuYWRtaW5fYXBpfS9yb2xlLzpfaWRgLFxyXG4gICAgcHJlVmFsaWRhdGlvbjogW2F1dGhFbXBsb3llZV0sXHJcbiAgICBoYW5kbGVyOiBkZWxldGVPbmVSb2xlSGFuZGxlcixcclxuICB9LFxyXG5dO1xyXG4iXX0=