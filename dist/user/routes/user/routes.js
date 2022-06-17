"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRoutes = void 0;
const user_handler_1 = require("../../handlers/user.handler");
const authenticate_1 = require("../../middleware/authenticate");
const config_1 = require("./../../../common/config");
exports.userRoutes = [
    {
        method: 'POST',
        url: `${config_1.API.user_api}/sign-up`,
        handler: user_handler_1.signUpHandler,
    },
    {
        method: 'POST',
        url: `${config_1.API.user_api}/sign-in`,
        handler: user_handler_1.signInHandler,
    },
    {
        method: 'PUT',
        url: `${config_1.API.user_api}/update`,
        preValidation: [authenticate_1.authUser],
        handler: user_handler_1.updateProfileHandler,
    },
    {
        method: 'GET',
        url: `${config_1.API.user_api}/getProfile`,
        preValidation: [authenticate_1.authUser],
        handler: user_handler_1.getProfileHandler,
    },
    {
        method: 'PUT',
        url: `${config_1.API.user_api}/removeImage`,
        preValidation: [authenticate_1.authUser],
        handler: user_handler_1.removeProfileImageHandler,
    },
    {
        method: 'DELETE',
        url: `${config_1.API.user_api}/delete`,
        preValidation: [authenticate_1.authUser],
        handler: user_handler_1.deleteProfileHandler,
    },
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL3VzZXIvcm91dGVzL3VzZXIvcm91dGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDhEQUFxSztBQUNySyxnRUFBeUQ7QUFDekQscURBQStDO0FBRWxDLFFBQUEsVUFBVSxHQUFHO0lBQ3hCO1FBQ0UsTUFBTSxFQUFFLE1BQU07UUFDZCxHQUFHLEVBQUUsR0FBRyxZQUFHLENBQUMsUUFBUSxVQUFVO1FBQzlCLE9BQU8sRUFBRSw0QkFBYTtLQUN2QjtJQUNEO1FBQ0UsTUFBTSxFQUFFLE1BQU07UUFDZCxHQUFHLEVBQUUsR0FBRyxZQUFHLENBQUMsUUFBUSxVQUFVO1FBQzlCLE9BQU8sRUFBRSw0QkFBYTtLQUN2QjtJQUNEO1FBQ0UsTUFBTSxFQUFFLEtBQUs7UUFDYixHQUFHLEVBQUUsR0FBRyxZQUFHLENBQUMsUUFBUSxTQUFTO1FBQzdCLGFBQWEsRUFBRSxDQUFDLHVCQUFRLENBQUM7UUFDekIsT0FBTyxFQUFFLG1DQUFvQjtLQUM5QjtJQUNEO1FBQ0UsTUFBTSxFQUFFLEtBQUs7UUFDYixHQUFHLEVBQUUsR0FBRyxZQUFHLENBQUMsUUFBUSxhQUFhO1FBQ2pDLGFBQWEsRUFBRSxDQUFDLHVCQUFRLENBQUM7UUFDekIsT0FBTyxFQUFFLGdDQUFpQjtLQUMzQjtJQUNEO1FBQ0UsTUFBTSxFQUFFLEtBQUs7UUFDYixHQUFHLEVBQUUsR0FBRyxZQUFHLENBQUMsUUFBUSxjQUFjO1FBQ2xDLGFBQWEsRUFBRSxDQUFDLHVCQUFRLENBQUM7UUFDekIsT0FBTyxFQUFFLHdDQUF5QjtLQUNuQztJQUNEO1FBQ0UsTUFBTSxFQUFFLFFBQVE7UUFDaEIsR0FBRyxFQUFFLEdBQUcsWUFBRyxDQUFDLFFBQVEsU0FBUztRQUM3QixhQUFhLEVBQUUsQ0FBQyx1QkFBUSxDQUFDO1FBQ3pCLE9BQU8sRUFBRSxtQ0FBb0I7S0FDOUI7Q0FDRixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZGVsZXRlUHJvZmlsZUhhbmRsZXIsIGdldFByb2ZpbGVIYW5kbGVyLCByZW1vdmVQcm9maWxlSW1hZ2VIYW5kbGVyLCBzaWduSW5IYW5kbGVyLCBzaWduVXBIYW5kbGVyLCB1cGRhdGVQcm9maWxlSGFuZGxlciB9IGZyb20gJy4uLy4uL2hhbmRsZXJzL3VzZXIuaGFuZGxlcic7XHJcbmltcG9ydCB7IGF1dGhVc2VyIH0gZnJvbSAnLi4vLi4vbWlkZGxld2FyZS9hdXRoZW50aWNhdGUnO1xyXG5pbXBvcnQgeyBBUEkgfSBmcm9tICcuLy4uLy4uLy4uL2NvbW1vbi9jb25maWcnO1xyXG5cclxuZXhwb3J0IGNvbnN0IHVzZXJSb3V0ZXMgPSBbXHJcbiAge1xyXG4gICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICB1cmw6IGAke0FQSS51c2VyX2FwaX0vc2lnbi11cGAsXHJcbiAgICBoYW5kbGVyOiBzaWduVXBIYW5kbGVyLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICB1cmw6IGAke0FQSS51c2VyX2FwaX0vc2lnbi1pbmAsXHJcbiAgICBoYW5kbGVyOiBzaWduSW5IYW5kbGVyLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbWV0aG9kOiAnUFVUJyxcclxuICAgIHVybDogYCR7QVBJLnVzZXJfYXBpfS91cGRhdGVgLFxyXG4gICAgcHJlVmFsaWRhdGlvbjogW2F1dGhVc2VyXSxcclxuICAgIGhhbmRsZXI6IHVwZGF0ZVByb2ZpbGVIYW5kbGVyLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbWV0aG9kOiAnR0VUJyxcclxuICAgIHVybDogYCR7QVBJLnVzZXJfYXBpfS9nZXRQcm9maWxlYCxcclxuICAgIHByZVZhbGlkYXRpb246IFthdXRoVXNlcl0sXHJcbiAgICBoYW5kbGVyOiBnZXRQcm9maWxlSGFuZGxlcixcclxuICB9LFxyXG4gIHtcclxuICAgIG1ldGhvZDogJ1BVVCcsXHJcbiAgICB1cmw6IGAke0FQSS51c2VyX2FwaX0vcmVtb3ZlSW1hZ2VgLFxyXG4gICAgcHJlVmFsaWRhdGlvbjogW2F1dGhVc2VyXSxcclxuICAgIGhhbmRsZXI6IHJlbW92ZVByb2ZpbGVJbWFnZUhhbmRsZXIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBtZXRob2Q6ICdERUxFVEUnLFxyXG4gICAgdXJsOiBgJHtBUEkudXNlcl9hcGl9L2RlbGV0ZWAsXHJcbiAgICBwcmVWYWxpZGF0aW9uOiBbYXV0aFVzZXJdLFxyXG4gICAgaGFuZGxlcjogZGVsZXRlUHJvZmlsZUhhbmRsZXIsXHJcbiAgfSxcclxuXTtcclxuIl19