"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOneCourseHandler = exports.getOneCourseWithCoursePartsHandler = exports.getCoursesWithCoursePartsHandler = exports.getPagingCourseHandler = void 0;
const course_service_1 = require("../../../common/service/course/course.service");
const validate_1 = require("../../../common/validation/validate");
const exceptions_1 = require("./../../../common/db/models/course/exceptions");
const course_dto_1 = require("./../../../common/validation/dto/course/course.dto");
async function getPagingCourseHandler(request, reply) {
    try {
        let data = await (0, validate_1.validateIt)(request.query, course_dto_1.CourseGetDto, [course_dto_1.CourseDtoGroup.PAGENATION]);
        const courses = await course_service_1.courseService.getPaging(data);
        return reply.success(courses);
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
exports.getPagingCourseHandler = getPagingCourseHandler;
async function getCoursesWithCoursePartsHandler(request, reply) {
    try {
        let data = await (0, validate_1.validateIt)(request.query, course_dto_1.CourseGetDto, [course_dto_1.CourseDtoGroup.PAGENATION]);
        const courses = await course_service_1.courseService.getPagingWithCourseParts(data);
        return reply.success(courses);
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
exports.getCoursesWithCoursePartsHandler = getCoursesWithCoursePartsHandler;
async function getOneCourseWithCoursePartsHandler(request, reply) {
    try {
        let data = await (0, validate_1.validateIt)(request.params, course_dto_1.CourseDto, [course_dto_1.CourseDtoGroup.GET_BY_ID]);
        const course = await course_service_1.courseService.getCourseOneWithCourseParts(data._id);
        return reply.success(course);
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
exports.getOneCourseWithCoursePartsHandler = getOneCourseWithCoursePartsHandler;
async function getOneCourseHandler(request, reply) {
    try {
        let data = await (0, validate_1.validateIt)(request.params, course_dto_1.CourseDto, [course_dto_1.CourseDtoGroup.GET_BY_ID]);
        const course = await course_service_1.courseService.findByIdError(data._id);
        return reply.success(course);
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
exports.getOneCourseHandler = getOneCourseHandler;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY291cnNlLmhhbmRsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvdXNlci9oYW5kbGVycy9jb3Vyc2UvY291cnNlLmhhbmRsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsa0ZBQThFO0FBQzlFLGtFQUFpRTtBQUNqRSw4RUFBZ0Y7QUFDaEYsbUZBQTZHO0FBR3RHLEtBQUssVUFBVSxzQkFBc0IsQ0FBQyxPQUFPLEVBQUUsS0FBSztJQUN6RCxJQUFJO1FBRUYsSUFBSSxJQUFJLEdBQUcsTUFBTSxJQUFBLHFCQUFVLEVBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSx5QkFBWSxFQUFFLENBQUMsMkJBQWMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO1FBRXRGLE1BQU0sT0FBTyxHQUFHLE1BQU0sOEJBQWEsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUE7UUFFbkQsT0FBTyxLQUFLLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0tBRS9CO0lBQUMsT0FBTyxDQUFDLEVBQUU7UUFDVixJQUFJLENBQUMsWUFBWSw0QkFBZSxFQUFFO1lBQ2hDLE1BQU0sQ0FBQyxDQUFDO1NBQ1Q7YUFBTTtZQUNMLE1BQU0sNEJBQWUsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDdkM7S0FDRjtBQUNILENBQUM7QUFoQkQsd0RBZ0JDO0FBRU0sS0FBSyxVQUFVLGdDQUFnQyxDQUFDLE9BQU8sRUFBRSxLQUFLO0lBQ25FLElBQUk7UUFFRixJQUFJLElBQUksR0FBRyxNQUFNLElBQUEscUJBQVUsRUFBQyxPQUFPLENBQUMsS0FBSyxFQUFFLHlCQUFZLEVBQUUsQ0FBQywyQkFBYyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7UUFFdEYsTUFBTSxPQUFPLEdBQUcsTUFBTSw4QkFBYSxDQUFDLHdCQUF3QixDQUFDLElBQUksQ0FBQyxDQUFBO1FBRWxFLE9BQU8sS0FBSyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztLQUUvQjtJQUFDLE9BQU8sQ0FBQyxFQUFFO1FBQ1YsSUFBSSxDQUFDLFlBQVksNEJBQWUsRUFBRTtZQUNoQyxNQUFNLENBQUMsQ0FBQztTQUNUO2FBQU07WUFDTCxNQUFNLDRCQUFlLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3ZDO0tBQ0Y7QUFDSCxDQUFDO0FBaEJELDRFQWdCQztBQUVNLEtBQUssVUFBVSxrQ0FBa0MsQ0FBQyxPQUFPLEVBQUUsS0FBSztJQUNyRSxJQUFJO1FBQ0YsSUFBSSxJQUFJLEdBQUcsTUFBTSxJQUFBLHFCQUFVLEVBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxzQkFBUyxFQUFFLENBQUMsMkJBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1FBRW5GLE1BQU0sTUFBTSxHQUFHLE1BQU0sOEJBQWEsQ0FBQywyQkFBMkIsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUE7UUFFeEUsT0FBTyxLQUFLLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0tBRTlCO0lBQUMsT0FBTyxDQUFDLEVBQUU7UUFDVixJQUFJLENBQUMsWUFBWSw0QkFBZSxFQUFFO1lBQ2hDLE1BQU0sQ0FBQyxDQUFDO1NBQ1Q7YUFBTTtZQUNMLE1BQU0sNEJBQWUsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDdkM7S0FDRjtBQUNILENBQUM7QUFmRCxnRkFlQztBQUVNLEtBQUssVUFBVSxtQkFBbUIsQ0FBQyxPQUFPLEVBQUUsS0FBSztJQUN0RCxJQUFJO1FBRUYsSUFBSSxJQUFJLEdBQUcsTUFBTSxJQUFBLHFCQUFVLEVBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxzQkFBUyxFQUFFLENBQUMsMkJBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1FBRW5GLE1BQU0sTUFBTSxHQUFHLE1BQU0sOEJBQWEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFBO1FBRTFELE9BQU8sS0FBSyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztLQUU5QjtJQUFDLE9BQU8sQ0FBQyxFQUFFO1FBQ1YsSUFBSSxDQUFDLFlBQVksNEJBQWUsRUFBRTtZQUNoQyxNQUFNLENBQUMsQ0FBQztTQUNUO2FBQU07WUFDTCxNQUFNLDRCQUFlLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3ZDO0tBQ0Y7QUFDSCxDQUFDO0FBaEJELGtEQWdCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvdXJzZVNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vc2VydmljZS9jb3Vyc2UvY291cnNlLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyB2YWxpZGF0ZUl0IH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL3ZhbGlkYXRpb24vdmFsaWRhdGUnO1xyXG5pbXBvcnQgeyBDb3Vyc2VFeGNlcHRpb24gfSBmcm9tICcuLy4uLy4uLy4uL2NvbW1vbi9kYi9tb2RlbHMvY291cnNlL2V4Y2VwdGlvbnMnO1xyXG5pbXBvcnQgeyBDb3Vyc2VEdG8sIENvdXJzZUR0b0dyb3VwLCBDb3Vyc2VHZXREdG8gfSBmcm9tICcuLy4uLy4uLy4uL2NvbW1vbi92YWxpZGF0aW9uL2R0by9jb3Vyc2UvY291cnNlLmR0byc7XHJcblxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFBhZ2luZ0NvdXJzZUhhbmRsZXIocmVxdWVzdCwgcmVwbHkpIHtcclxuICB0cnkge1xyXG5cclxuICAgIGxldCBkYXRhID0gYXdhaXQgdmFsaWRhdGVJdChyZXF1ZXN0LnF1ZXJ5LCBDb3Vyc2VHZXREdG8sIFtDb3Vyc2VEdG9Hcm91cC5QQUdFTkFUSU9OXSk7XHJcblxyXG4gICAgY29uc3QgY291cnNlcyA9IGF3YWl0IGNvdXJzZVNlcnZpY2UuZ2V0UGFnaW5nKGRhdGEpXHJcblxyXG4gICAgcmV0dXJuIHJlcGx5LnN1Y2Nlc3MoY291cnNlcyk7XHJcblxyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIGlmIChlIGluc3RhbmNlb2YgQ291cnNlRXhjZXB0aW9uKSB7XHJcbiAgICAgIHRocm93IGU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aHJvdyBDb3Vyc2VFeGNlcHRpb24uVW5rbm93bkVycm9yKGUpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldENvdXJzZXNXaXRoQ291cnNlUGFydHNIYW5kbGVyKHJlcXVlc3QsIHJlcGx5KSB7XHJcbiAgdHJ5IHtcclxuXHJcbiAgICBsZXQgZGF0YSA9IGF3YWl0IHZhbGlkYXRlSXQocmVxdWVzdC5xdWVyeSwgQ291cnNlR2V0RHRvLCBbQ291cnNlRHRvR3JvdXAuUEFHRU5BVElPTl0pO1xyXG5cclxuICAgIGNvbnN0IGNvdXJzZXMgPSBhd2FpdCBjb3Vyc2VTZXJ2aWNlLmdldFBhZ2luZ1dpdGhDb3Vyc2VQYXJ0cyhkYXRhKVxyXG5cclxuICAgIHJldHVybiByZXBseS5zdWNjZXNzKGNvdXJzZXMpO1xyXG5cclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICBpZiAoZSBpbnN0YW5jZW9mIENvdXJzZUV4Y2VwdGlvbikge1xyXG4gICAgICB0aHJvdyBlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhyb3cgQ291cnNlRXhjZXB0aW9uLlVua25vd25FcnJvcihlKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRPbmVDb3Vyc2VXaXRoQ291cnNlUGFydHNIYW5kbGVyKHJlcXVlc3QsIHJlcGx5KSB7XHJcbiAgdHJ5IHtcclxuICAgIGxldCBkYXRhID0gYXdhaXQgdmFsaWRhdGVJdChyZXF1ZXN0LnBhcmFtcywgQ291cnNlRHRvLCBbQ291cnNlRHRvR3JvdXAuR0VUX0JZX0lEXSk7XHJcblxyXG4gICAgY29uc3QgY291cnNlID0gYXdhaXQgY291cnNlU2VydmljZS5nZXRDb3Vyc2VPbmVXaXRoQ291cnNlUGFydHMoZGF0YS5faWQpXHJcblxyXG4gICAgcmV0dXJuIHJlcGx5LnN1Y2Nlc3MoY291cnNlKTtcclxuXHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgaWYgKGUgaW5zdGFuY2VvZiBDb3Vyc2VFeGNlcHRpb24pIHtcclxuICAgICAgdGhyb3cgZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRocm93IENvdXJzZUV4Y2VwdGlvbi5Vbmtub3duRXJyb3IoZSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0T25lQ291cnNlSGFuZGxlcihyZXF1ZXN0LCByZXBseSkge1xyXG4gIHRyeSB7XHJcblxyXG4gICAgbGV0IGRhdGEgPSBhd2FpdCB2YWxpZGF0ZUl0KHJlcXVlc3QucGFyYW1zLCBDb3Vyc2VEdG8sIFtDb3Vyc2VEdG9Hcm91cC5HRVRfQllfSURdKTtcclxuXHJcbiAgICBjb25zdCBjb3Vyc2UgPSBhd2FpdCBjb3Vyc2VTZXJ2aWNlLmZpbmRCeUlkRXJyb3IoZGF0YS5faWQpXHJcblxyXG4gICAgcmV0dXJuIHJlcGx5LnN1Y2Nlc3MoY291cnNlKTtcclxuXHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgaWYgKGUgaW5zdGFuY2VvZiBDb3Vyc2VFeGNlcHRpb24pIHtcclxuICAgICAgdGhyb3cgZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRocm93IENvdXJzZUV4Y2VwdGlvbi5Vbmtub3duRXJyb3IoZSk7XHJcbiAgICB9XHJcbiAgfVxyXG59Il19