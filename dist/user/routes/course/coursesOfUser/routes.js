"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.coursesOfUserRoutes = void 0;
const config_1 = require("../../../../common/config");
const coursesOfUser_handler_1 = require("../../../handlers/course/coursesOfUser/coursesOfUser.handler");
const authenticate_1 = require("../../../middleware/authenticate");
exports.coursesOfUserRoutes = [
    {
        method: 'POST',
        url: `${config_1.API.user_api}/coursesUser`,
        preValidation: [authenticate_1.authUser],
        handler: coursesOfUser_handler_1.createCoursesOfUserHandler,
    },
    {
        method: 'GET',
        url: `${config_1.API.user_api}/coursesUser`,
        preValidation: [authenticate_1.authUser],
        handler: coursesOfUser_handler_1.getCoursesOfUserHandler,
    }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL3VzZXIvcm91dGVzL2NvdXJzZS9jb3Vyc2VzT2ZVc2VyL3JvdXRlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxzREFBZ0Q7QUFDaEQsd0dBQW1JO0FBQ25JLG1FQUE0RDtBQUcvQyxRQUFBLG1CQUFtQixHQUFHO0lBQ2pDO1FBQ0UsTUFBTSxFQUFFLE1BQU07UUFDZCxHQUFHLEVBQUUsR0FBRyxZQUFHLENBQUMsUUFBUSxjQUFjO1FBQ2xDLGFBQWEsRUFBRSxDQUFDLHVCQUFRLENBQUM7UUFDekIsT0FBTyxFQUFFLGtEQUEwQjtLQUNwQztJQUNEO1FBQ0UsTUFBTSxFQUFFLEtBQUs7UUFDYixHQUFHLEVBQUUsR0FBRyxZQUFHLENBQUMsUUFBUSxjQUFjO1FBQ2xDLGFBQWEsRUFBRSxDQUFDLHVCQUFRLENBQUM7UUFDekIsT0FBTyxFQUFFLCtDQUF1QjtLQUNqQztDQUNGLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBUEkgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21tb24vY29uZmlnJztcclxuaW1wb3J0IHsgY3JlYXRlQ291cnNlc09mVXNlckhhbmRsZXIsIGdldENvdXJzZXNPZlVzZXJIYW5kbGVyIH0gZnJvbSAnLi4vLi4vLi4vaGFuZGxlcnMvY291cnNlL2NvdXJzZXNPZlVzZXIvY291cnNlc09mVXNlci5oYW5kbGVyJztcclxuaW1wb3J0IHsgYXV0aFVzZXIgfSBmcm9tICcuLi8uLi8uLi9taWRkbGV3YXJlL2F1dGhlbnRpY2F0ZSc7XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IGNvdXJzZXNPZlVzZXJSb3V0ZXMgPSBbXHJcbiAge1xyXG4gICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICB1cmw6IGAke0FQSS51c2VyX2FwaX0vY291cnNlc1VzZXJgLFxyXG4gICAgcHJlVmFsaWRhdGlvbjogW2F1dGhVc2VyXSxcclxuICAgIGhhbmRsZXI6IGNyZWF0ZUNvdXJzZXNPZlVzZXJIYW5kbGVyLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbWV0aG9kOiAnR0VUJyxcclxuICAgIHVybDogYCR7QVBJLnVzZXJfYXBpfS9jb3Vyc2VzVXNlcmAsXHJcbiAgICBwcmVWYWxpZGF0aW9uOiBbYXV0aFVzZXJdLFxyXG4gICAgaGFuZGxlcjogZ2V0Q291cnNlc09mVXNlckhhbmRsZXIsXHJcbiAgfVxyXG5dO1xyXG4iXX0=