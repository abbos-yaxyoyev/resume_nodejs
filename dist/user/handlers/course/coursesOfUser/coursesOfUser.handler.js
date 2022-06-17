"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCoursesOfUserHandler = exports.createCoursesOfUserHandler = void 0;
const exceptions_1 = require("../../../../common/db/models/course/coresesOfUsers/exceptions");
const coursesOfUser_service_1 = require("../../../../common/service/course/coursesOfUser/coursesOfUser.service");
const coursesOfUser_dto_1 = require("../../../../common/validation/dto/course/coursesOfUser/coursesOfUser.dto");
const validate_1 = require("../../../../common/validation/validate");
async function createCoursesOfUserHandler(request, reply) {
    try {
        const data = await (0, validate_1.validateIt)(request.body, coursesOfUser_dto_1.CourseOfUserDto, [coursesOfUser_dto_1.CourseOfUserDtoGroup.CREATE]);
        data.userId = request.user._id;
        const course = await coursesOfUser_service_1.coursesOfUserService.create(data);
        return reply.success(course._id);
    }
    catch (e) {
        if (e instanceof exceptions_1.CoursesOfUserException) {
            throw e;
        }
        else {
            throw exceptions_1.CoursesOfUserException.UnknownError(e);
        }
    }
}
exports.createCoursesOfUserHandler = createCoursesOfUserHandler;
async function getCoursesOfUserHandler(request, reply) {
    try {
        const course = await coursesOfUser_service_1.coursesOfUserService.getCoursesOfUser(request.user._id.toString());
        return reply.success(course);
    }
    catch (e) {
        if (e instanceof exceptions_1.CoursesOfUserException) {
            throw e;
        }
        else {
            throw exceptions_1.CoursesOfUserException.UnknownError(e);
        }
    }
}
exports.getCoursesOfUserHandler = getCoursesOfUserHandler;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY291cnNlc09mVXNlci5oYW5kbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL3VzZXIvaGFuZGxlcnMvY291cnNlL2NvdXJzZXNPZlVzZXIvY291cnNlc09mVXNlci5oYW5kbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDhGQUF1RztBQUN2RyxpSEFBNkc7QUFDN0csZ0hBQWlJO0FBQ2pJLHFFQUFvRTtBQUc3RCxLQUFLLFVBQVUsMEJBQTBCLENBQUMsT0FBTyxFQUFFLEtBQUs7SUFDN0QsSUFBSTtRQUVGLE1BQU0sSUFBSSxHQUFHLE1BQU0sSUFBQSxxQkFBVSxFQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsbUNBQWUsRUFBRSxDQUFDLHdDQUFvQixDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFFNUYsSUFBSSxDQUFDLE1BQU0sR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQTtRQUU5QixNQUFNLE1BQU0sR0FBRyxNQUFNLDRDQUFvQixDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUV2RCxPQUFPLEtBQUssQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0tBRWxDO0lBQUMsT0FBTyxDQUFDLEVBQUU7UUFDVixJQUFJLENBQUMsWUFBWSxtQ0FBc0IsRUFBRTtZQUN2QyxNQUFNLENBQUMsQ0FBQztTQUNUO2FBQU07WUFDTCxNQUFNLG1DQUFzQixDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUM5QztLQUNGO0FBQ0gsQ0FBQztBQWxCRCxnRUFrQkM7QUFFTSxLQUFLLFVBQVUsdUJBQXVCLENBQUMsT0FBTyxFQUFFLEtBQUs7SUFDMUQsSUFBSTtRQUVGLE1BQU0sTUFBTSxHQUFHLE1BQU0sNENBQW9CLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQTtRQUV2RixPQUFPLEtBQUssQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7S0FFOUI7SUFBQyxPQUFPLENBQUMsRUFBRTtRQUNWLElBQUksQ0FBQyxZQUFZLG1DQUFzQixFQUFFO1lBQ3ZDLE1BQU0sQ0FBQyxDQUFDO1NBQ1Q7YUFBTTtZQUNMLE1BQU0sbUNBQXNCLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQzlDO0tBQ0Y7QUFDSCxDQUFDO0FBZEQsMERBY0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb3Vyc2VzT2ZVc2VyRXhjZXB0aW9uIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tbW9uL2RiL21vZGVscy9jb3Vyc2UvY29yZXNlc09mVXNlcnMvZXhjZXB0aW9ucyc7XHJcbmltcG9ydCB7IGNvdXJzZXNPZlVzZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tbW9uL3NlcnZpY2UvY291cnNlL2NvdXJzZXNPZlVzZXIvY291cnNlc09mVXNlci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQ291cnNlT2ZVc2VyRHRvLCBDb3Vyc2VPZlVzZXJEdG9Hcm91cCB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbW1vbi92YWxpZGF0aW9uL2R0by9jb3Vyc2UvY291cnNlc09mVXNlci9jb3Vyc2VzT2ZVc2VyLmR0byc7XHJcbmltcG9ydCB7IHZhbGlkYXRlSXQgfSBmcm9tIFwiLi4vLi4vLi4vLi4vY29tbW9uL3ZhbGlkYXRpb24vdmFsaWRhdGVcIjtcclxuXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlQ291cnNlc09mVXNlckhhbmRsZXIocmVxdWVzdCwgcmVwbHkpIHtcclxuICB0cnkge1xyXG5cclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCB2YWxpZGF0ZUl0KHJlcXVlc3QuYm9keSwgQ291cnNlT2ZVc2VyRHRvLCBbQ291cnNlT2ZVc2VyRHRvR3JvdXAuQ1JFQVRFXSk7XHJcblxyXG4gICAgZGF0YS51c2VySWQgPSByZXF1ZXN0LnVzZXIuX2lkXHJcblxyXG4gICAgY29uc3QgY291cnNlID0gYXdhaXQgY291cnNlc09mVXNlclNlcnZpY2UuY3JlYXRlKGRhdGEpO1xyXG5cclxuICAgIHJldHVybiByZXBseS5zdWNjZXNzKGNvdXJzZS5faWQpO1xyXG5cclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICBpZiAoZSBpbnN0YW5jZW9mIENvdXJzZXNPZlVzZXJFeGNlcHRpb24pIHtcclxuICAgICAgdGhyb3cgZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRocm93IENvdXJzZXNPZlVzZXJFeGNlcHRpb24uVW5rbm93bkVycm9yKGUpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldENvdXJzZXNPZlVzZXJIYW5kbGVyKHJlcXVlc3QsIHJlcGx5KSB7XHJcbiAgdHJ5IHtcclxuXHJcbiAgICBjb25zdCBjb3Vyc2UgPSBhd2FpdCBjb3Vyc2VzT2ZVc2VyU2VydmljZS5nZXRDb3Vyc2VzT2ZVc2VyKHJlcXVlc3QudXNlci5faWQudG9TdHJpbmcoKSlcclxuXHJcbiAgICByZXR1cm4gcmVwbHkuc3VjY2Vzcyhjb3Vyc2UpO1xyXG5cclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICBpZiAoZSBpbnN0YW5jZW9mIENvdXJzZXNPZlVzZXJFeGNlcHRpb24pIHtcclxuICAgICAgdGhyb3cgZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRocm93IENvdXJzZXNPZlVzZXJFeGNlcHRpb24uVW5rbm93bkVycm9yKGUpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=