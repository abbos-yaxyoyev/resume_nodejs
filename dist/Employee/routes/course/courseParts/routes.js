"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.coursePartsRoutes = void 0;
const config_1 = require("../../../../common/config");
const courseParts_handler_1 = require("../../../handlers/course/courseParts/courseParts.handler");
const authenticate_1 = require("../../../middleware/authenticate");
exports.coursePartsRoutes = [
    {
        method: 'POST',
        url: `${config_1.API.admin_api}/courseParts`,
        preValidation: [authenticate_1.authEmployee],
        handler: courseParts_handler_1.createCoursePartsHandler,
    },
    {
        method: 'PUT',
        url: `${config_1.API.admin_api}/courseParts`,
        preValidation: [authenticate_1.authEmployee],
        handler: courseParts_handler_1.updateCoursePartsHandler,
    },
    {
        method: 'GET',
        url: `${config_1.API.admin_api}/courseParts/:_id`,
        preValidation: [authenticate_1.authEmployee],
        handler: courseParts_handler_1.getOneCoursePartsHandler,
    },
    {
        method: 'DELETE',
        url: `${config_1.API.admin_api}/courseParts/:_id`,
        preValidation: [authenticate_1.authEmployee],
        handler: courseParts_handler_1.deleteOneCoursePartsHandler,
    }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL0VtcGxveWVlL3JvdXRlcy9jb3Vyc2UvY291cnNlUGFydHMvcm91dGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHNEQUFnRDtBQUNoRCxrR0FBcUw7QUFDckwsbUVBQWdFO0FBR25ELFFBQUEsaUJBQWlCLEdBQUc7SUFDL0I7UUFDRSxNQUFNLEVBQUUsTUFBTTtRQUNkLEdBQUcsRUFBRSxHQUFHLFlBQUcsQ0FBQyxTQUFTLGNBQWM7UUFDbkMsYUFBYSxFQUFFLENBQUMsMkJBQVksQ0FBQztRQUM3QixPQUFPLEVBQUUsOENBQXdCO0tBQ2xDO0lBQ0Q7UUFDRSxNQUFNLEVBQUUsS0FBSztRQUNiLEdBQUcsRUFBRSxHQUFHLFlBQUcsQ0FBQyxTQUFTLGNBQWM7UUFDbkMsYUFBYSxFQUFFLENBQUMsMkJBQVksQ0FBQztRQUM3QixPQUFPLEVBQUUsOENBQXdCO0tBQ2xDO0lBQ0Q7UUFDRSxNQUFNLEVBQUUsS0FBSztRQUNiLEdBQUcsRUFBRSxHQUFHLFlBQUcsQ0FBQyxTQUFTLG1CQUFtQjtRQUN4QyxhQUFhLEVBQUUsQ0FBQywyQkFBWSxDQUFDO1FBQzdCLE9BQU8sRUFBRSw4Q0FBd0I7S0FDbEM7SUFDRDtRQUNFLE1BQU0sRUFBRSxRQUFRO1FBQ2hCLEdBQUcsRUFBRSxHQUFHLFlBQUcsQ0FBQyxTQUFTLG1CQUFtQjtRQUN4QyxhQUFhLEVBQUUsQ0FBQywyQkFBWSxDQUFDO1FBQzdCLE9BQU8sRUFBRSxpREFBMkI7S0FDckM7Q0FDRixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQVBJIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tbW9uL2NvbmZpZyc7XHJcbmltcG9ydCB7IGNyZWF0ZUNvdXJzZVBhcnRzSGFuZGxlciwgZGVsZXRlT25lQ291cnNlUGFydHNIYW5kbGVyLCBnZXRPbmVDb3Vyc2VQYXJ0c0hhbmRsZXIsIHVwZGF0ZUNvdXJzZVBhcnRzSGFuZGxlciB9IGZyb20gJy4uLy4uLy4uL2hhbmRsZXJzL2NvdXJzZS9jb3Vyc2VQYXJ0cy9jb3Vyc2VQYXJ0cy5oYW5kbGVyJztcclxuaW1wb3J0IHsgYXV0aEVtcGxveWVlIH0gZnJvbSAnLi4vLi4vLi4vbWlkZGxld2FyZS9hdXRoZW50aWNhdGUnO1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBjb3Vyc2VQYXJ0c1JvdXRlcyA9IFtcclxuICB7XHJcbiAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgIHVybDogYCR7QVBJLmFkbWluX2FwaX0vY291cnNlUGFydHNgLFxyXG4gICAgcHJlVmFsaWRhdGlvbjogW2F1dGhFbXBsb3llZV0sXHJcbiAgICBoYW5kbGVyOiBjcmVhdGVDb3Vyc2VQYXJ0c0hhbmRsZXIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBtZXRob2Q6ICdQVVQnLFxyXG4gICAgdXJsOiBgJHtBUEkuYWRtaW5fYXBpfS9jb3Vyc2VQYXJ0c2AsXHJcbiAgICBwcmVWYWxpZGF0aW9uOiBbYXV0aEVtcGxveWVlXSxcclxuICAgIGhhbmRsZXI6IHVwZGF0ZUNvdXJzZVBhcnRzSGFuZGxlcixcclxuICB9LFxyXG4gIHtcclxuICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICB1cmw6IGAke0FQSS5hZG1pbl9hcGl9L2NvdXJzZVBhcnRzLzpfaWRgLFxyXG4gICAgcHJlVmFsaWRhdGlvbjogW2F1dGhFbXBsb3llZV0sXHJcbiAgICBoYW5kbGVyOiBnZXRPbmVDb3Vyc2VQYXJ0c0hhbmRsZXIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBtZXRob2Q6ICdERUxFVEUnLFxyXG4gICAgdXJsOiBgJHtBUEkuYWRtaW5fYXBpfS9jb3Vyc2VQYXJ0cy86X2lkYCxcclxuICAgIHByZVZhbGlkYXRpb246IFthdXRoRW1wbG95ZWVdLFxyXG4gICAgaGFuZGxlcjogZGVsZXRlT25lQ291cnNlUGFydHNIYW5kbGVyLFxyXG4gIH1cclxuXTtcclxuIl19