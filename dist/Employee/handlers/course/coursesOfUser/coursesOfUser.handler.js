"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCoursesOfUserHandler = exports.getUsersOfCourseHandler = void 0;
const roles_1 = require("../../../../common/constants/roles");
const exceptions_1 = require("../../../../common/db/models/course/coresesOfUsers/exceptions");
const coursesOfUser_service_1 = require("../../../../common/service/course/coursesOfUser/coursesOfUser.service");
const role_service_1 = require("../../../../common/service/employee/role/role.service");
const coursesOfUser_dto_1 = require("../../../../common/validation/dto/course/coursesOfUser/coursesOfUser.dto");
const validate_1 = require("../../../../common/validation/validate");
async function getUsersOfCourseHandler(request, reply) {
    try {
        await role_service_1.roleService.hasAccess(request.admin.roleId, roles_1.Roles.COURSE);
        let data = await (0, validate_1.validateIt)(request.params, coursesOfUser_dto_1.CourseOfUserDto, [coursesOfUser_dto_1.CourseOfUserDtoGroup.GET_BY_ID]);
        const course = await coursesOfUser_service_1.coursesOfUserService.getUsersOfCourse(data._id);
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
exports.getUsersOfCourseHandler = getUsersOfCourseHandler;
async function getCoursesOfUserHandler(request, reply) {
    try {
        await role_service_1.roleService.hasAccess(request.admin.roleId, roles_1.Roles.COURSE);
        let data = await (0, validate_1.validateIt)(request.params, coursesOfUser_dto_1.CourseOfUserDto, [coursesOfUser_dto_1.CourseOfUserDtoGroup.GET_BY_ID]);
        const course = await coursesOfUser_service_1.coursesOfUserService.getCoursesOfUser(data._id);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY291cnNlc09mVXNlci5oYW5kbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL0VtcGxveWVlL2hhbmRsZXJzL2NvdXJzZS9jb3Vyc2VzT2ZVc2VyL2NvdXJzZXNPZlVzZXIuaGFuZGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw4REFBMkQ7QUFDM0QsOEZBQXVHO0FBQ3ZHLGlIQUE2RztBQUM3Ryx3RkFBb0Y7QUFDcEYsZ0hBQWlJO0FBQ2pJLHFFQUFvRTtBQUU3RCxLQUFLLFVBQVUsdUJBQXVCLENBQUMsT0FBTyxFQUFFLEtBQUs7SUFDMUQsSUFBSTtRQUVGLE1BQU0sMEJBQVcsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsYUFBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRWhFLElBQUksSUFBSSxHQUFHLE1BQU0sSUFBQSxxQkFBVSxFQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsbUNBQWUsRUFBRSxDQUFDLHdDQUFvQixDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7UUFFL0YsTUFBTSxNQUFNLEdBQUcsTUFBTSw0Q0FBb0IsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUE7UUFFcEUsT0FBTyxLQUFLLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0tBRTlCO0lBQUMsT0FBTyxDQUFDLEVBQUU7UUFDVixJQUFJLENBQUMsWUFBWSxtQ0FBc0IsRUFBRTtZQUN2QyxNQUFNLENBQUMsQ0FBQztTQUNUO2FBQU07WUFDTCxNQUFNLG1DQUFzQixDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUM5QztLQUNGO0FBQ0gsQ0FBQztBQWxCRCwwREFrQkM7QUFFTSxLQUFLLFVBQVUsdUJBQXVCLENBQUMsT0FBTyxFQUFFLEtBQUs7SUFDMUQsSUFBSTtRQUVGLE1BQU0sMEJBQVcsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsYUFBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRWhFLElBQUksSUFBSSxHQUFHLE1BQU0sSUFBQSxxQkFBVSxFQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsbUNBQWUsRUFBRSxDQUFDLHdDQUFvQixDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7UUFFL0YsTUFBTSxNQUFNLEdBQUcsTUFBTSw0Q0FBb0IsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUE7UUFFcEUsT0FBTyxLQUFLLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0tBRTlCO0lBQUMsT0FBTyxDQUFDLEVBQUU7UUFDVixJQUFJLENBQUMsWUFBWSxtQ0FBc0IsRUFBRTtZQUN2QyxNQUFNLENBQUMsQ0FBQztTQUNUO2FBQU07WUFDTCxNQUFNLG1DQUFzQixDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUM5QztLQUNGO0FBQ0gsQ0FBQztBQWxCRCwwREFrQkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSb2xlcyB9IGZyb20gXCIuLi8uLi8uLi8uLi9jb21tb24vY29uc3RhbnRzL3JvbGVzXCI7XHJcbmltcG9ydCB7IENvdXJzZXNPZlVzZXJFeGNlcHRpb24gfSBmcm9tICcuLi8uLi8uLi8uLi9jb21tb24vZGIvbW9kZWxzL2NvdXJzZS9jb3Jlc2VzT2ZVc2Vycy9leGNlcHRpb25zJztcclxuaW1wb3J0IHsgY291cnNlc09mVXNlclNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21tb24vc2VydmljZS9jb3Vyc2UvY291cnNlc09mVXNlci9jb3Vyc2VzT2ZVc2VyLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyByb2xlU2VydmljZSB9IGZyb20gXCIuLi8uLi8uLi8uLi9jb21tb24vc2VydmljZS9lbXBsb3llZS9yb2xlL3JvbGUuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBDb3Vyc2VPZlVzZXJEdG8sIENvdXJzZU9mVXNlckR0b0dyb3VwIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tbW9uL3ZhbGlkYXRpb24vZHRvL2NvdXJzZS9jb3Vyc2VzT2ZVc2VyL2NvdXJzZXNPZlVzZXIuZHRvJztcclxuaW1wb3J0IHsgdmFsaWRhdGVJdCB9IGZyb20gXCIuLi8uLi8uLi8uLi9jb21tb24vdmFsaWRhdGlvbi92YWxpZGF0ZVwiO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFVzZXJzT2ZDb3Vyc2VIYW5kbGVyKHJlcXVlc3QsIHJlcGx5KSB7XHJcbiAgdHJ5IHtcclxuXHJcbiAgICBhd2FpdCByb2xlU2VydmljZS5oYXNBY2Nlc3MocmVxdWVzdC5hZG1pbi5yb2xlSWQsIFJvbGVzLkNPVVJTRSk7XHJcblxyXG4gICAgbGV0IGRhdGEgPSBhd2FpdCB2YWxpZGF0ZUl0KHJlcXVlc3QucGFyYW1zLCBDb3Vyc2VPZlVzZXJEdG8sIFtDb3Vyc2VPZlVzZXJEdG9Hcm91cC5HRVRfQllfSURdKTtcclxuXHJcbiAgICBjb25zdCBjb3Vyc2UgPSBhd2FpdCBjb3Vyc2VzT2ZVc2VyU2VydmljZS5nZXRVc2Vyc09mQ291cnNlKGRhdGEuX2lkKVxyXG5cclxuICAgIHJldHVybiByZXBseS5zdWNjZXNzKGNvdXJzZSk7XHJcblxyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIGlmIChlIGluc3RhbmNlb2YgQ291cnNlc09mVXNlckV4Y2VwdGlvbikge1xyXG4gICAgICB0aHJvdyBlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhyb3cgQ291cnNlc09mVXNlckV4Y2VwdGlvbi5Vbmtub3duRXJyb3IoZSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Q291cnNlc09mVXNlckhhbmRsZXIocmVxdWVzdCwgcmVwbHkpIHtcclxuICB0cnkge1xyXG5cclxuICAgIGF3YWl0IHJvbGVTZXJ2aWNlLmhhc0FjY2VzcyhyZXF1ZXN0LmFkbWluLnJvbGVJZCwgUm9sZXMuQ09VUlNFKTtcclxuXHJcbiAgICBsZXQgZGF0YSA9IGF3YWl0IHZhbGlkYXRlSXQocmVxdWVzdC5wYXJhbXMsIENvdXJzZU9mVXNlckR0bywgW0NvdXJzZU9mVXNlckR0b0dyb3VwLkdFVF9CWV9JRF0pO1xyXG5cclxuICAgIGNvbnN0IGNvdXJzZSA9IGF3YWl0IGNvdXJzZXNPZlVzZXJTZXJ2aWNlLmdldENvdXJzZXNPZlVzZXIoZGF0YS5faWQpXHJcblxyXG4gICAgcmV0dXJuIHJlcGx5LnN1Y2Nlc3MoY291cnNlKTtcclxuXHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgaWYgKGUgaW5zdGFuY2VvZiBDb3Vyc2VzT2ZVc2VyRXhjZXB0aW9uKSB7XHJcbiAgICAgIHRocm93IGU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aHJvdyBDb3Vyc2VzT2ZVc2VyRXhjZXB0aW9uLlVua25vd25FcnJvcihlKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19