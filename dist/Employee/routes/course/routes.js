"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.courseRoutes = void 0;
const config_1 = require("../../../common/config");
const course_handler_1 = require("../../handlers/course/course.handler");
const authenticate_1 = require("../../middleware/authenticate");
exports.courseRoutes = [
    {
        method: 'POST',
        url: `${config_1.API.admin_api}/course`,
        preValidation: [authenticate_1.authEmployee],
        handler: course_handler_1.createCourseHandler,
    },
    {
        method: 'PUT',
        url: `${config_1.API.admin_api}/course`,
        preValidation: [authenticate_1.authEmployee],
        handler: course_handler_1.updateCourseHandler,
    },
    {
        method: 'GET',
        url: `${config_1.API.admin_api}/course/courseParts`,
        preValidation: [authenticate_1.authEmployee],
        handler: course_handler_1.getCoursesWithCoursePartsHandler,
    },
    {
        method: 'GET',
        url: `${config_1.API.admin_api}/course/oneCourseParts/:_id`,
        preValidation: [authenticate_1.authEmployee],
        handler: course_handler_1.getOneCourseWithCoursePartsHandler,
    },
    {
        method: 'DELETE',
        url: `${config_1.API.admin_api}/course/:_id`,
        preValidation: [authenticate_1.authEmployee],
        handler: course_handler_1.deleteOneCourseHandler,
    },
    {
        method: 'GET',
        url: `${config_1.API.admin_api}/course`,
        preValidation: [authenticate_1.authEmployee],
        handler: course_handler_1.getPagingCourseHandler,
    },
    {
        method: 'GET',
        url: `${config_1.API.admin_api}/course/:_id`,
        preValidation: [authenticate_1.authEmployee],
        handler: course_handler_1.getOneCourseHandler,
    }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL0VtcGxveWVlL3JvdXRlcy9jb3Vyc2Uvcm91dGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLG1EQUE2QztBQUM3Qyx5RUFBMk87QUFDM08sZ0VBQTZEO0FBR2hELFFBQUEsWUFBWSxHQUFHO0lBQzFCO1FBQ0UsTUFBTSxFQUFFLE1BQU07UUFDZCxHQUFHLEVBQUUsR0FBRyxZQUFHLENBQUMsU0FBUyxTQUFTO1FBQzlCLGFBQWEsRUFBRSxDQUFDLDJCQUFZLENBQUM7UUFDN0IsT0FBTyxFQUFFLG9DQUFtQjtLQUM3QjtJQUNEO1FBQ0UsTUFBTSxFQUFFLEtBQUs7UUFDYixHQUFHLEVBQUUsR0FBRyxZQUFHLENBQUMsU0FBUyxTQUFTO1FBQzlCLGFBQWEsRUFBRSxDQUFDLDJCQUFZLENBQUM7UUFDN0IsT0FBTyxFQUFFLG9DQUFtQjtLQUM3QjtJQUNEO1FBQ0UsTUFBTSxFQUFFLEtBQUs7UUFDYixHQUFHLEVBQUUsR0FBRyxZQUFHLENBQUMsU0FBUyxxQkFBcUI7UUFDMUMsYUFBYSxFQUFFLENBQUMsMkJBQVksQ0FBQztRQUM3QixPQUFPLEVBQUUsaURBQWdDO0tBQzFDO0lBQ0Q7UUFDRSxNQUFNLEVBQUUsS0FBSztRQUNiLEdBQUcsRUFBRSxHQUFHLFlBQUcsQ0FBQyxTQUFTLDZCQUE2QjtRQUNsRCxhQUFhLEVBQUUsQ0FBQywyQkFBWSxDQUFDO1FBQzdCLE9BQU8sRUFBRSxtREFBa0M7S0FDNUM7SUFDRDtRQUNFLE1BQU0sRUFBRSxRQUFRO1FBQ2hCLEdBQUcsRUFBRSxHQUFHLFlBQUcsQ0FBQyxTQUFTLGNBQWM7UUFDbkMsYUFBYSxFQUFFLENBQUMsMkJBQVksQ0FBQztRQUM3QixPQUFPLEVBQUUsdUNBQXNCO0tBQ2hDO0lBQ0Q7UUFDRSxNQUFNLEVBQUUsS0FBSztRQUNiLEdBQUcsRUFBRSxHQUFHLFlBQUcsQ0FBQyxTQUFTLFNBQVM7UUFDOUIsYUFBYSxFQUFFLENBQUMsMkJBQVksQ0FBQztRQUM3QixPQUFPLEVBQUUsdUNBQXNCO0tBQ2hDO0lBQ0Q7UUFDRSxNQUFNLEVBQUUsS0FBSztRQUNiLEdBQUcsRUFBRSxHQUFHLFlBQUcsQ0FBQyxTQUFTLGNBQWM7UUFDbkMsYUFBYSxFQUFFLENBQUMsMkJBQVksQ0FBQztRQUM3QixPQUFPLEVBQUUsb0NBQW1CO0tBQzdCO0NBQ0YsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFQSSB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9jb25maWcnO1xyXG5pbXBvcnQgeyBjcmVhdGVDb3Vyc2VIYW5kbGVyLCBkZWxldGVPbmVDb3Vyc2VIYW5kbGVyLCBnZXRDb3Vyc2VzV2l0aENvdXJzZVBhcnRzSGFuZGxlciwgZ2V0T25lQ291cnNlSGFuZGxlciwgZ2V0T25lQ291cnNlV2l0aENvdXJzZVBhcnRzSGFuZGxlciwgZ2V0UGFnaW5nQ291cnNlSGFuZGxlciwgdXBkYXRlQ291cnNlSGFuZGxlciB9IGZyb20gJy4uLy4uL2hhbmRsZXJzL2NvdXJzZS9jb3Vyc2UuaGFuZGxlcic7XHJcbmltcG9ydCB7IGF1dGhFbXBsb3llZSB9IGZyb20gJy4uLy4uL21pZGRsZXdhcmUvYXV0aGVudGljYXRlJztcclxuXHJcblxyXG5leHBvcnQgY29uc3QgY291cnNlUm91dGVzID0gW1xyXG4gIHtcclxuICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgdXJsOiBgJHtBUEkuYWRtaW5fYXBpfS9jb3Vyc2VgLFxyXG4gICAgcHJlVmFsaWRhdGlvbjogW2F1dGhFbXBsb3llZV0sXHJcbiAgICBoYW5kbGVyOiBjcmVhdGVDb3Vyc2VIYW5kbGVyLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbWV0aG9kOiAnUFVUJyxcclxuICAgIHVybDogYCR7QVBJLmFkbWluX2FwaX0vY291cnNlYCxcclxuICAgIHByZVZhbGlkYXRpb246IFthdXRoRW1wbG95ZWVdLFxyXG4gICAgaGFuZGxlcjogdXBkYXRlQ291cnNlSGFuZGxlcixcclxuICB9LFxyXG4gIHtcclxuICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICB1cmw6IGAke0FQSS5hZG1pbl9hcGl9L2NvdXJzZS9jb3Vyc2VQYXJ0c2AsXHJcbiAgICBwcmVWYWxpZGF0aW9uOiBbYXV0aEVtcGxveWVlXSxcclxuICAgIGhhbmRsZXI6IGdldENvdXJzZXNXaXRoQ291cnNlUGFydHNIYW5kbGVyLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbWV0aG9kOiAnR0VUJyxcclxuICAgIHVybDogYCR7QVBJLmFkbWluX2FwaX0vY291cnNlL29uZUNvdXJzZVBhcnRzLzpfaWRgLFxyXG4gICAgcHJlVmFsaWRhdGlvbjogW2F1dGhFbXBsb3llZV0sXHJcbiAgICBoYW5kbGVyOiBnZXRPbmVDb3Vyc2VXaXRoQ291cnNlUGFydHNIYW5kbGVyLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbWV0aG9kOiAnREVMRVRFJyxcclxuICAgIHVybDogYCR7QVBJLmFkbWluX2FwaX0vY291cnNlLzpfaWRgLFxyXG4gICAgcHJlVmFsaWRhdGlvbjogW2F1dGhFbXBsb3llZV0sXHJcbiAgICBoYW5kbGVyOiBkZWxldGVPbmVDb3Vyc2VIYW5kbGVyLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbWV0aG9kOiAnR0VUJyxcclxuICAgIHVybDogYCR7QVBJLmFkbWluX2FwaX0vY291cnNlYCxcclxuICAgIHByZVZhbGlkYXRpb246IFthdXRoRW1wbG95ZWVdLFxyXG4gICAgaGFuZGxlcjogZ2V0UGFnaW5nQ291cnNlSGFuZGxlcixcclxuICB9LFxyXG4gIHtcclxuICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICB1cmw6IGAke0FQSS5hZG1pbl9hcGl9L2NvdXJzZS86X2lkYCxcclxuICAgIHByZVZhbGlkYXRpb246IFthdXRoRW1wbG95ZWVdLFxyXG4gICAgaGFuZGxlcjogZ2V0T25lQ291cnNlSGFuZGxlcixcclxuICB9XHJcbl07XHJcbiJdfQ==