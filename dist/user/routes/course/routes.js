"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.courseRoutes = void 0;
const config_1 = require("../../../common/config");
const course_handler_1 = require("../../handlers/course/course.handler");
const authenticate_1 = require("../../middleware/authenticate");
exports.courseRoutes = [
    {
        method: 'GET',
        url: `${config_1.API.user_api}/course/courseParts`,
        preValidation: [authenticate_1.mightyUserAuth],
        handler: course_handler_1.getCoursesWithCoursePartsHandler,
    },
    {
        method: 'GET',
        url: `${config_1.API.user_api}/course/oneCourseParts/:_id`,
        preValidation: [authenticate_1.mightyUserAuth],
        handler: course_handler_1.getOneCourseWithCoursePartsHandler,
    },
    {
        method: 'GET',
        url: `${config_1.API.user_api}/course`,
        preValidation: [authenticate_1.mightyUserAuth],
        handler: course_handler_1.getPagingCourseHandler,
    },
    {
        method: 'GET',
        url: `${config_1.API.user_api}/course/:_id`,
        preValidation: [authenticate_1.mightyUserAuth],
        handler: course_handler_1.getOneCourseHandler,
    }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL3VzZXIvcm91dGVzL2NvdXJzZS9yb3V0ZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsbURBQTZDO0FBQzdDLHlFQUF5SztBQUN6SyxnRUFBK0Q7QUFHbEQsUUFBQSxZQUFZLEdBQUc7SUFFMUI7UUFDRSxNQUFNLEVBQUUsS0FBSztRQUNiLEdBQUcsRUFBRSxHQUFHLFlBQUcsQ0FBQyxRQUFRLHFCQUFxQjtRQUN6QyxhQUFhLEVBQUUsQ0FBQyw2QkFBYyxDQUFDO1FBQy9CLE9BQU8sRUFBRSxpREFBZ0M7S0FDMUM7SUFDRDtRQUNFLE1BQU0sRUFBRSxLQUFLO1FBQ2IsR0FBRyxFQUFFLEdBQUcsWUFBRyxDQUFDLFFBQVEsNkJBQTZCO1FBQ2pELGFBQWEsRUFBRSxDQUFDLDZCQUFjLENBQUM7UUFDL0IsT0FBTyxFQUFFLG1EQUFrQztLQUM1QztJQUNEO1FBQ0UsTUFBTSxFQUFFLEtBQUs7UUFDYixHQUFHLEVBQUUsR0FBRyxZQUFHLENBQUMsUUFBUSxTQUFTO1FBQzdCLGFBQWEsRUFBRSxDQUFDLDZCQUFjLENBQUM7UUFDL0IsT0FBTyxFQUFFLHVDQUFzQjtLQUNoQztJQUNEO1FBQ0UsTUFBTSxFQUFFLEtBQUs7UUFDYixHQUFHLEVBQUUsR0FBRyxZQUFHLENBQUMsUUFBUSxjQUFjO1FBQ2xDLGFBQWEsRUFBRSxDQUFDLDZCQUFjLENBQUM7UUFDL0IsT0FBTyxFQUFFLG9DQUFtQjtLQUM3QjtDQUNGLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBUEkgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vY29uZmlnJztcclxuaW1wb3J0IHsgZ2V0Q291cnNlc1dpdGhDb3Vyc2VQYXJ0c0hhbmRsZXIsIGdldE9uZUNvdXJzZUhhbmRsZXIsIGdldE9uZUNvdXJzZVdpdGhDb3Vyc2VQYXJ0c0hhbmRsZXIsIGdldFBhZ2luZ0NvdXJzZUhhbmRsZXIgfSBmcm9tICcuLi8uLi9oYW5kbGVycy9jb3Vyc2UvY291cnNlLmhhbmRsZXInO1xyXG5pbXBvcnQgeyBtaWdodHlVc2VyQXV0aCB9IGZyb20gJy4uLy4uL21pZGRsZXdhcmUvYXV0aGVudGljYXRlJztcclxuXHJcblxyXG5leHBvcnQgY29uc3QgY291cnNlUm91dGVzID0gW1xyXG5cclxuICB7XHJcbiAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgdXJsOiBgJHtBUEkudXNlcl9hcGl9L2NvdXJzZS9jb3Vyc2VQYXJ0c2AsXHJcbiAgICBwcmVWYWxpZGF0aW9uOiBbbWlnaHR5VXNlckF1dGhdLFxyXG4gICAgaGFuZGxlcjogZ2V0Q291cnNlc1dpdGhDb3Vyc2VQYXJ0c0hhbmRsZXIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgdXJsOiBgJHtBUEkudXNlcl9hcGl9L2NvdXJzZS9vbmVDb3Vyc2VQYXJ0cy86X2lkYCxcclxuICAgIHByZVZhbGlkYXRpb246IFttaWdodHlVc2VyQXV0aF0sXHJcbiAgICBoYW5kbGVyOiBnZXRPbmVDb3Vyc2VXaXRoQ291cnNlUGFydHNIYW5kbGVyLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbWV0aG9kOiAnR0VUJyxcclxuICAgIHVybDogYCR7QVBJLnVzZXJfYXBpfS9jb3Vyc2VgLFxyXG4gICAgcHJlVmFsaWRhdGlvbjogW21pZ2h0eVVzZXJBdXRoXSxcclxuICAgIGhhbmRsZXI6IGdldFBhZ2luZ0NvdXJzZUhhbmRsZXIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgdXJsOiBgJHtBUEkudXNlcl9hcGl9L2NvdXJzZS86X2lkYCxcclxuICAgIHByZVZhbGlkYXRpb246IFttaWdodHlVc2VyQXV0aF0sXHJcbiAgICBoYW5kbGVyOiBnZXRPbmVDb3Vyc2VIYW5kbGVyLFxyXG4gIH1cclxuXTtcclxuIl19