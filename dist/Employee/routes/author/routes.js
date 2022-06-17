"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authorRoutes = void 0;
const config_1 = require("../../../common/config");
const author_handler_1 = require("../../handlers/author/author.handler");
const authenticate_1 = require("../../middleware/authenticate");
exports.authorRoutes = [
    {
        method: 'POST',
        url: `${config_1.API.admin_api}/author`,
        preValidation: [authenticate_1.authEmployee],
        handler: author_handler_1.createAuthorHandler,
    },
    {
        method: 'DELETE',
        url: `${config_1.API.admin_api}/author/:_id`,
        preValidation: [authenticate_1.authEmployee],
        handler: author_handler_1.deleteOneAuthorHandler,
    },
    {
        method: 'GET',
        url: `${config_1.API.admin_api}/author`,
        preValidation: [authenticate_1.authEmployee],
        handler: author_handler_1.getPagingAuthorHandler,
    },
    {
        method: 'GET',
        url: `${config_1.API.admin_api}/author/:_id`,
        preValidation: [authenticate_1.authEmployee],
        handler: author_handler_1.getOneAuthorHandler,
    },
    {
        method: 'PUT',
        url: `${config_1.API.admin_api}/author`,
        preValidation: [authenticate_1.authEmployee],
        handler: author_handler_1.updateAuthorHandler,
    },
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2VtcGxveWVlL3JvdXRlcy9hdXRob3Ivcm91dGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLG1EQUE2QztBQUM3Qyx5RUFHOEM7QUFDOUMsZ0VBQTZEO0FBRWhELFFBQUEsWUFBWSxHQUFHO0lBQzFCO1FBQ0UsTUFBTSxFQUFFLE1BQU07UUFDZCxHQUFHLEVBQUUsR0FBRyxZQUFHLENBQUMsU0FBUyxTQUFTO1FBQzlCLGFBQWEsRUFBRSxDQUFDLDJCQUFZLENBQUM7UUFDN0IsT0FBTyxFQUFFLG9DQUFtQjtLQUM3QjtJQUNEO1FBQ0UsTUFBTSxFQUFFLFFBQVE7UUFDaEIsR0FBRyxFQUFFLEdBQUcsWUFBRyxDQUFDLFNBQVMsY0FBYztRQUNuQyxhQUFhLEVBQUUsQ0FBQywyQkFBWSxDQUFDO1FBQzdCLE9BQU8sRUFBRSx1Q0FBc0I7S0FDaEM7SUFDRDtRQUNFLE1BQU0sRUFBRSxLQUFLO1FBQ2IsR0FBRyxFQUFFLEdBQUcsWUFBRyxDQUFDLFNBQVMsU0FBUztRQUM5QixhQUFhLEVBQUUsQ0FBQywyQkFBWSxDQUFDO1FBQzdCLE9BQU8sRUFBRSx1Q0FBc0I7S0FDaEM7SUFDRDtRQUNFLE1BQU0sRUFBRSxLQUFLO1FBQ2IsR0FBRyxFQUFFLEdBQUcsWUFBRyxDQUFDLFNBQVMsY0FBYztRQUNuQyxhQUFhLEVBQUUsQ0FBQywyQkFBWSxDQUFDO1FBQzdCLE9BQU8sRUFBRSxvQ0FBbUI7S0FDN0I7SUFDRDtRQUNFLE1BQU0sRUFBRSxLQUFLO1FBQ2IsR0FBRyxFQUFFLEdBQUcsWUFBRyxDQUFDLFNBQVMsU0FBUztRQUM5QixhQUFhLEVBQUUsQ0FBQywyQkFBWSxDQUFDO1FBQzdCLE9BQU8sRUFBRSxvQ0FBbUI7S0FDN0I7Q0FDRixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQVBJIH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL2NvbmZpZyc7XHJcbmltcG9ydCB7XHJcbiAgY3JlYXRlQXV0aG9ySGFuZGxlcixcclxuICBkZWxldGVPbmVBdXRob3JIYW5kbGVyLCBnZXRPbmVBdXRob3JIYW5kbGVyLCBnZXRQYWdpbmdBdXRob3JIYW5kbGVyLCB1cGRhdGVBdXRob3JIYW5kbGVyXHJcbn0gZnJvbSAnLi4vLi4vaGFuZGxlcnMvYXV0aG9yL2F1dGhvci5oYW5kbGVyJztcclxuaW1wb3J0IHsgYXV0aEVtcGxveWVlIH0gZnJvbSAnLi4vLi4vbWlkZGxld2FyZS9hdXRoZW50aWNhdGUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGF1dGhvclJvdXRlcyA9IFtcclxuICB7XHJcbiAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgIHVybDogYCR7QVBJLmFkbWluX2FwaX0vYXV0aG9yYCxcclxuICAgIHByZVZhbGlkYXRpb246IFthdXRoRW1wbG95ZWVdLFxyXG4gICAgaGFuZGxlcjogY3JlYXRlQXV0aG9ySGFuZGxlcixcclxuICB9LFxyXG4gIHtcclxuICAgIG1ldGhvZDogJ0RFTEVURScsXHJcbiAgICB1cmw6IGAke0FQSS5hZG1pbl9hcGl9L2F1dGhvci86X2lkYCxcclxuICAgIHByZVZhbGlkYXRpb246IFthdXRoRW1wbG95ZWVdLFxyXG4gICAgaGFuZGxlcjogZGVsZXRlT25lQXV0aG9ySGFuZGxlcixcclxuICB9LFxyXG4gIHtcclxuICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICB1cmw6IGAke0FQSS5hZG1pbl9hcGl9L2F1dGhvcmAsXHJcbiAgICBwcmVWYWxpZGF0aW9uOiBbYXV0aEVtcGxveWVlXSxcclxuICAgIGhhbmRsZXI6IGdldFBhZ2luZ0F1dGhvckhhbmRsZXIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgdXJsOiBgJHtBUEkuYWRtaW5fYXBpfS9hdXRob3IvOl9pZGAsXHJcbiAgICBwcmVWYWxpZGF0aW9uOiBbYXV0aEVtcGxveWVlXSxcclxuICAgIGhhbmRsZXI6IGdldE9uZUF1dGhvckhhbmRsZXIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBtZXRob2Q6ICdQVVQnLFxyXG4gICAgdXJsOiBgJHtBUEkuYWRtaW5fYXBpfS9hdXRob3JgLFxyXG4gICAgcHJlVmFsaWRhdGlvbjogW2F1dGhFbXBsb3llZV0sXHJcbiAgICBoYW5kbGVyOiB1cGRhdGVBdXRob3JIYW5kbGVyLFxyXG4gIH0sXHJcbl07XHJcbiJdfQ==