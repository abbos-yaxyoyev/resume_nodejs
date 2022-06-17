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
        method: 'DELETE',
        url: `${config_1.API.admin_api}/courseParts/:_id`,
        preValidation: [authenticate_1.authEmployee],
        handler: courseParts_handler_1.deleteOneCoursePartsHandler,
    }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL0VtcGxveWVlL3JvdXRlcy9jb3Vyc2UvY291cnNlUGFydHMvcm91dGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHNEQUFnRDtBQUNoRCxrR0FBMko7QUFDM0osbUVBQWdFO0FBR25ELFFBQUEsaUJBQWlCLEdBQUc7SUFDL0I7UUFDRSxNQUFNLEVBQUUsTUFBTTtRQUNkLEdBQUcsRUFBRSxHQUFHLFlBQUcsQ0FBQyxTQUFTLGNBQWM7UUFDbkMsYUFBYSxFQUFFLENBQUMsMkJBQVksQ0FBQztRQUM3QixPQUFPLEVBQUUsOENBQXdCO0tBQ2xDO0lBQ0Q7UUFDRSxNQUFNLEVBQUUsS0FBSztRQUNiLEdBQUcsRUFBRSxHQUFHLFlBQUcsQ0FBQyxTQUFTLGNBQWM7UUFDbkMsYUFBYSxFQUFFLENBQUMsMkJBQVksQ0FBQztRQUM3QixPQUFPLEVBQUUsOENBQXdCO0tBQ2xDO0lBQ0Q7UUFDRSxNQUFNLEVBQUUsUUFBUTtRQUNoQixHQUFHLEVBQUUsR0FBRyxZQUFHLENBQUMsU0FBUyxtQkFBbUI7UUFDeEMsYUFBYSxFQUFFLENBQUMsMkJBQVksQ0FBQztRQUM3QixPQUFPLEVBQUUsaURBQTJCO0tBQ3JDO0NBQ0YsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFQSSB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbW1vbi9jb25maWcnO1xyXG5pbXBvcnQgeyBjcmVhdGVDb3Vyc2VQYXJ0c0hhbmRsZXIsIGRlbGV0ZU9uZUNvdXJzZVBhcnRzSGFuZGxlciwgdXBkYXRlQ291cnNlUGFydHNIYW5kbGVyIH0gZnJvbSAnLi4vLi4vLi4vaGFuZGxlcnMvY291cnNlL2NvdXJzZVBhcnRzL2NvdXJzZVBhcnRzLmhhbmRsZXInO1xyXG5pbXBvcnQgeyBhdXRoRW1wbG95ZWUgfSBmcm9tICcuLi8uLi8uLi9taWRkbGV3YXJlL2F1dGhlbnRpY2F0ZSc7XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IGNvdXJzZVBhcnRzUm91dGVzID0gW1xyXG4gIHtcclxuICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgdXJsOiBgJHtBUEkuYWRtaW5fYXBpfS9jb3Vyc2VQYXJ0c2AsXHJcbiAgICBwcmVWYWxpZGF0aW9uOiBbYXV0aEVtcGxveWVlXSxcclxuICAgIGhhbmRsZXI6IGNyZWF0ZUNvdXJzZVBhcnRzSGFuZGxlcixcclxuICB9LFxyXG4gIHtcclxuICAgIG1ldGhvZDogJ1BVVCcsXHJcbiAgICB1cmw6IGAke0FQSS5hZG1pbl9hcGl9L2NvdXJzZVBhcnRzYCxcclxuICAgIHByZVZhbGlkYXRpb246IFthdXRoRW1wbG95ZWVdLFxyXG4gICAgaGFuZGxlcjogdXBkYXRlQ291cnNlUGFydHNIYW5kbGVyLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbWV0aG9kOiAnREVMRVRFJyxcclxuICAgIHVybDogYCR7QVBJLmFkbWluX2FwaX0vY291cnNlUGFydHMvOl9pZGAsXHJcbiAgICBwcmVWYWxpZGF0aW9uOiBbYXV0aEVtcGxveWVlXSxcclxuICAgIGhhbmRsZXI6IGRlbGV0ZU9uZUNvdXJzZVBhcnRzSGFuZGxlcixcclxuICB9XHJcbl07XHJcbiJdfQ==