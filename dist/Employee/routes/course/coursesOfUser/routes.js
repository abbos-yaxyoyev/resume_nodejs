"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.coursesOfUserRoutes = void 0;
const config_1 = require("../../../../common/config");
const coursesOfUser_handler_1 = require("../../../handlers/course/coursesOfUser/coursesOfUser.handler");
const authenticate_1 = require("../../../middleware/authenticate");
exports.coursesOfUserRoutes = [
    {
        method: 'GET',
        url: `${config_1.API.admin_api}/coursesUser/:_id`,
        preValidation: [authenticate_1.authEmployee],
        handler: coursesOfUser_handler_1.getCoursesOfUserHandler,
    },
    {
        method: 'GET',
        url: `${config_1.API.admin_api}/userCourse/:_id`,
        preValidation: [authenticate_1.authEmployee],
        handler: coursesOfUser_handler_1.getUsersOfCourseHandler,
    }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL2VtcGxveWVlL3JvdXRlcy9jb3Vyc2UvY291cnNlc09mVXNlci9yb3V0ZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsc0RBQWdEO0FBQ2hELHdHQUFnSTtBQUNoSSxtRUFBZ0U7QUFHbkQsUUFBQSxtQkFBbUIsR0FBRztJQUNqQztRQUNFLE1BQU0sRUFBRSxLQUFLO1FBQ2IsR0FBRyxFQUFFLEdBQUcsWUFBRyxDQUFDLFNBQVMsbUJBQW1CO1FBQ3hDLGFBQWEsRUFBRSxDQUFDLDJCQUFZLENBQUM7UUFDN0IsT0FBTyxFQUFFLCtDQUF1QjtLQUNqQztJQUNEO1FBQ0UsTUFBTSxFQUFFLEtBQUs7UUFDYixHQUFHLEVBQUUsR0FBRyxZQUFHLENBQUMsU0FBUyxrQkFBa0I7UUFDdkMsYUFBYSxFQUFFLENBQUMsMkJBQVksQ0FBQztRQUM3QixPQUFPLEVBQUUsK0NBQXVCO0tBQ2pDO0NBQ0YsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFQSSB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbW1vbi9jb25maWcnO1xyXG5pbXBvcnQgeyBnZXRDb3Vyc2VzT2ZVc2VySGFuZGxlciwgZ2V0VXNlcnNPZkNvdXJzZUhhbmRsZXIgfSBmcm9tICcuLi8uLi8uLi9oYW5kbGVycy9jb3Vyc2UvY291cnNlc09mVXNlci9jb3Vyc2VzT2ZVc2VyLmhhbmRsZXInO1xyXG5pbXBvcnQgeyBhdXRoRW1wbG95ZWUgfSBmcm9tICcuLi8uLi8uLi9taWRkbGV3YXJlL2F1dGhlbnRpY2F0ZSc7XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IGNvdXJzZXNPZlVzZXJSb3V0ZXMgPSBbXHJcbiAge1xyXG4gICAgbWV0aG9kOiAnR0VUJyxcclxuICAgIHVybDogYCR7QVBJLmFkbWluX2FwaX0vY291cnNlc1VzZXIvOl9pZGAsXHJcbiAgICBwcmVWYWxpZGF0aW9uOiBbYXV0aEVtcGxveWVlXSxcclxuICAgIGhhbmRsZXI6IGdldENvdXJzZXNPZlVzZXJIYW5kbGVyLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbWV0aG9kOiAnR0VUJyxcclxuICAgIHVybDogYCR7QVBJLmFkbWluX2FwaX0vdXNlckNvdXJzZS86X2lkYCxcclxuICAgIHByZVZhbGlkYXRpb246IFthdXRoRW1wbG95ZWVdLFxyXG4gICAgaGFuZGxlcjogZ2V0VXNlcnNPZkNvdXJzZUhhbmRsZXIsXHJcbiAgfVxyXG5dO1xyXG4iXX0=