"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOneCoursePartsHandler = void 0;
const exceptions_1 = require("../../../../common/db/models/course/exceptions");
const courseParts_service_1 = require("../../../../common/service/course/courseParts/courseParts.service");
const courseParts_dto_1 = require("../../../../common/validation/dto/course/courseParts/courseParts.dto");
const validate_1 = require("../../../../common/validation/validate");
async function getOneCoursePartsHandler(request, reply) {
    try {
        const data = await (0, validate_1.validateIt)(request.params, courseParts_dto_1.CoursePartsDto, courseParts_dto_1.CoursePartsDtoGroup.GET_BY_ID);
        const { _id, imgUrl, videoUrl, description } = await courseParts_service_1.coursePartsService.findByIdError(data._id);
        return reply.success({ _id, imgUrl, videoUrl, description });
    }
    catch (e) {
        if (e instanceof exceptions_1.CourseException) {
            throw e;
        }
        else {
            throw exceptions_1.CourseException.UnknownError(e);
        }
    }
}
exports.getOneCoursePartsHandler = getOneCoursePartsHandler;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY291cnNlUGFydHMuaGFuZGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy91c2VyL2hhbmRsZXJzL2NvdXJzZS9jb3Vyc2VQYXJ0cy9jb3Vyc2VQYXJ0cy5oYW5kbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLCtFQUFpRjtBQUNqRiwyR0FBdUc7QUFDdkcsMEdBQTJIO0FBQzNILHFFQUFvRTtBQUc3RCxLQUFLLFVBQVUsd0JBQXdCLENBQUMsT0FBTyxFQUFFLEtBQUs7SUFDM0QsSUFBSTtRQUdGLE1BQU0sSUFBSSxHQUFHLE1BQU0sSUFBQSxxQkFBVSxFQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsZ0NBQWMsRUFBRSxxQ0FBbUIsQ0FBQyxTQUFTLENBQUMsQ0FBQTtRQUU1RixNQUFNLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsV0FBVyxFQUFFLEdBQUcsTUFBTSx3Q0FBa0IsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFBO1FBRS9GLE9BQU8sS0FBSyxDQUFDLE9BQU8sQ0FBQyxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLFdBQVcsRUFBRSxDQUFDLENBQUM7S0FFOUQ7SUFBQyxPQUFPLENBQUMsRUFBRTtRQUNWLElBQUksQ0FBQyxZQUFZLDRCQUFlLEVBQUU7WUFDaEMsTUFBTSxDQUFDLENBQUM7U0FDVDthQUFNO1lBQ0wsTUFBTSw0QkFBZSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUN2QztLQUNGO0FBQ0gsQ0FBQztBQWpCRCw0REFpQkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb3Vyc2VFeGNlcHRpb24gfSBmcm9tICcuLi8uLi8uLi8uLi9jb21tb24vZGIvbW9kZWxzL2NvdXJzZS9leGNlcHRpb25zJztcclxuaW1wb3J0IHsgY291cnNlUGFydHNTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uLy4uLy4uL2NvbW1vbi9zZXJ2aWNlL2NvdXJzZS9jb3Vyc2VQYXJ0cy9jb3Vyc2VQYXJ0cy5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IENvdXJzZVBhcnRzRHRvLCBDb3Vyc2VQYXJ0c0R0b0dyb3VwIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tbW9uL3ZhbGlkYXRpb24vZHRvL2NvdXJzZS9jb3Vyc2VQYXJ0cy9jb3Vyc2VQYXJ0cy5kdG8nO1xyXG5pbXBvcnQgeyB2YWxpZGF0ZUl0IH0gZnJvbSBcIi4uLy4uLy4uLy4uL2NvbW1vbi92YWxpZGF0aW9uL3ZhbGlkYXRlXCI7XHJcblxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldE9uZUNvdXJzZVBhcnRzSGFuZGxlcihyZXF1ZXN0LCByZXBseSkge1xyXG4gIHRyeSB7XHJcblxyXG5cclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCB2YWxpZGF0ZUl0KHJlcXVlc3QucGFyYW1zLCBDb3Vyc2VQYXJ0c0R0bywgQ291cnNlUGFydHNEdG9Hcm91cC5HRVRfQllfSUQpXHJcblxyXG4gICAgY29uc3QgeyBfaWQsIGltZ1VybCwgdmlkZW9VcmwsIGRlc2NyaXB0aW9uIH0gPSBhd2FpdCBjb3Vyc2VQYXJ0c1NlcnZpY2UuZmluZEJ5SWRFcnJvcihkYXRhLl9pZClcclxuXHJcbiAgICByZXR1cm4gcmVwbHkuc3VjY2Vzcyh7IF9pZCwgaW1nVXJsLCB2aWRlb1VybCwgZGVzY3JpcHRpb24gfSk7XHJcblxyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIGlmIChlIGluc3RhbmNlb2YgQ291cnNlRXhjZXB0aW9uKSB7XHJcbiAgICAgIHRocm93IGU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aHJvdyBDb3Vyc2VFeGNlcHRpb24uVW5rbm93bkVycm9yKGUpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=