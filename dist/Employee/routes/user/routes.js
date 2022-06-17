"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRoutes = void 0;
const config_1 = require("../../../common/config");
const user_handler_1 = require("../../handlers/user.handler");
const authenticate_1 = require("../../middleware/authenticate");
exports.userRoutes = [
    {
        method: 'GET',
        url: `${config_1.API.admin_api}/user`,
        preValidation: [authenticate_1.authEmployee],
        handler: user_handler_1.getPagingUserHandler,
    },
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL0VtcGxveWVlL3JvdXRlcy91c2VyL3JvdXRlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxtREFBNkM7QUFDN0MsOERBQW1FO0FBQ25FLGdFQUE2RDtBQUVoRCxRQUFBLFVBQVUsR0FBRztJQUV4QjtRQUNFLE1BQU0sRUFBRSxLQUFLO1FBQ2IsR0FBRyxFQUFFLEdBQUcsWUFBRyxDQUFDLFNBQVMsT0FBTztRQUM1QixhQUFhLEVBQUUsQ0FBQywyQkFBWSxDQUFDO1FBQzdCLE9BQU8sRUFBRSxtQ0FBb0I7S0FDOUI7Q0FDRixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQVBJIH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL2NvbmZpZyc7XHJcbmltcG9ydCB7IGdldFBhZ2luZ1VzZXJIYW5kbGVyIH0gZnJvbSAnLi4vLi4vaGFuZGxlcnMvdXNlci5oYW5kbGVyJztcclxuaW1wb3J0IHsgYXV0aEVtcGxveWVlIH0gZnJvbSAnLi4vLi4vbWlkZGxld2FyZS9hdXRoZW50aWNhdGUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IHVzZXJSb3V0ZXMgPSBbXHJcblxyXG4gIHtcclxuICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICB1cmw6IGAke0FQSS5hZG1pbl9hcGl9L3VzZXJgLFxyXG4gICAgcHJlVmFsaWRhdGlvbjogW2F1dGhFbXBsb3llZV0sXHJcbiAgICBoYW5kbGVyOiBnZXRQYWdpbmdVc2VySGFuZGxlcixcclxuICB9LFxyXG5dO1xyXG4iXX0=