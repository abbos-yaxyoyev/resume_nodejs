"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.coursePartsRoutes = void 0;
const config_1 = require("../../../../common/config");
const courseParts_handler_1 = require("../../../handlers/course/courseParts/courseParts.handler");
const authenticate_1 = require("../../../middleware/authenticate");
exports.coursePartsRoutes = [
    {
        method: 'GET',
        url: `${config_1.API.user_api}/courseParts/:_id`,
        preValidation: [authenticate_1.authUser],
        handler: courseParts_handler_1.getOneCoursePartsHandler,
    }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL3VzZXIvcm91dGVzL2NvdXJzZS9jb3Vyc2VQYXJ0cy9yb3V0ZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsc0RBQWdEO0FBQ2hELGtHQUFvRztBQUNwRyxtRUFBNEQ7QUFHL0MsUUFBQSxpQkFBaUIsR0FBRztJQUUvQjtRQUNFLE1BQU0sRUFBRSxLQUFLO1FBQ2IsR0FBRyxFQUFFLEdBQUcsWUFBRyxDQUFDLFFBQVEsbUJBQW1CO1FBQ3ZDLGFBQWEsRUFBRSxDQUFDLHVCQUFRLENBQUM7UUFDekIsT0FBTyxFQUFFLDhDQUF3QjtLQUNsQztDQUNGLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBUEkgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21tb24vY29uZmlnJztcclxuaW1wb3J0IHsgZ2V0T25lQ291cnNlUGFydHNIYW5kbGVyIH0gZnJvbSAnLi4vLi4vLi4vaGFuZGxlcnMvY291cnNlL2NvdXJzZVBhcnRzL2NvdXJzZVBhcnRzLmhhbmRsZXInO1xyXG5pbXBvcnQgeyBhdXRoVXNlciB9IGZyb20gJy4uLy4uLy4uL21pZGRsZXdhcmUvYXV0aGVudGljYXRlJztcclxuXHJcblxyXG5leHBvcnQgY29uc3QgY291cnNlUGFydHNSb3V0ZXMgPSBbXHJcblxyXG4gIHtcclxuICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICB1cmw6IGAke0FQSS51c2VyX2FwaX0vY291cnNlUGFydHMvOl9pZGAsXHJcbiAgICBwcmVWYWxpZGF0aW9uOiBbYXV0aFVzZXJdLFxyXG4gICAgaGFuZGxlcjogZ2V0T25lQ291cnNlUGFydHNIYW5kbGVyLFxyXG4gIH1cclxuXTtcclxuIl19