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
        const { _id, name, description, createdAt } = await course_service_1.courseService.findByIdError(data._id);
        return reply.success({ _id, name, description, createdAt });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY291cnNlLmhhbmRsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvdXNlci9oYW5kbGVycy9jb3Vyc2UvY291cnNlLmhhbmRsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsa0ZBQThFO0FBQzlFLGtFQUFpRTtBQUNqRSw4RUFBZ0Y7QUFDaEYsbUZBQTZHO0FBR3RHLEtBQUssVUFBVSxzQkFBc0IsQ0FBQyxPQUFPLEVBQUUsS0FBSztJQUN6RCxJQUFJO1FBRUYsSUFBSSxJQUFJLEdBQUcsTUFBTSxJQUFBLHFCQUFVLEVBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSx5QkFBWSxFQUFFLENBQUMsMkJBQWMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO1FBRXRGLE1BQU0sT0FBTyxHQUFHLE1BQU0sOEJBQWEsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUE7UUFFbkQsT0FBTyxLQUFLLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0tBRS9CO0lBQUMsT0FBTyxDQUFDLEVBQUU7UUFDVixJQUFJLENBQUMsWUFBWSw0QkFBZSxFQUFFO1lBQ2hDLE1BQU0sQ0FBQyxDQUFDO1NBQ1Q7YUFBTTtZQUNMLE1BQU0sNEJBQWUsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDdkM7S0FDRjtBQUNILENBQUM7QUFoQkQsd0RBZ0JDO0FBRU0sS0FBSyxVQUFVLGdDQUFnQyxDQUFDLE9BQU8sRUFBRSxLQUFLO0lBQ25FLElBQUk7UUFFRixJQUFJLElBQUksR0FBRyxNQUFNLElBQUEscUJBQVUsRUFBQyxPQUFPLENBQUMsS0FBSyxFQUFFLHlCQUFZLEVBQUUsQ0FBQywyQkFBYyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7UUFFdEYsTUFBTSxPQUFPLEdBQUcsTUFBTSw4QkFBYSxDQUFDLHdCQUF3QixDQUFDLElBQUksQ0FBQyxDQUFBO1FBRWxFLE9BQU8sS0FBSyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztLQUUvQjtJQUFDLE9BQU8sQ0FBQyxFQUFFO1FBQ1YsSUFBSSxDQUFDLFlBQVksNEJBQWUsRUFBRTtZQUNoQyxNQUFNLENBQUMsQ0FBQztTQUNUO2FBQU07WUFDTCxNQUFNLDRCQUFlLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3ZDO0tBQ0Y7QUFDSCxDQUFDO0FBaEJELDRFQWdCQztBQUVNLEtBQUssVUFBVSxrQ0FBa0MsQ0FBQyxPQUFPLEVBQUUsS0FBSztJQUNyRSxJQUFJO1FBQ0YsSUFBSSxJQUFJLEdBQUcsTUFBTSxJQUFBLHFCQUFVLEVBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxzQkFBUyxFQUFFLENBQUMsMkJBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1FBRW5GLE1BQU0sTUFBTSxHQUFHLE1BQU0sOEJBQWEsQ0FBQywyQkFBMkIsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUE7UUFFeEUsT0FBTyxLQUFLLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0tBRTlCO0lBQUMsT0FBTyxDQUFDLEVBQUU7UUFDVixJQUFJLENBQUMsWUFBWSw0QkFBZSxFQUFFO1lBQ2hDLE1BQU0sQ0FBQyxDQUFDO1NBQ1Q7YUFBTTtZQUNMLE1BQU0sNEJBQWUsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDdkM7S0FDRjtBQUNILENBQUM7QUFmRCxnRkFlQztBQUVNLEtBQUssVUFBVSxtQkFBbUIsQ0FBQyxPQUFPLEVBQUUsS0FBSztJQUN0RCxJQUFJO1FBRUYsSUFBSSxJQUFJLEdBQUcsTUFBTSxJQUFBLHFCQUFVLEVBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxzQkFBUyxFQUFFLENBQUMsMkJBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1FBRW5GLE1BQU0sRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsR0FBRyxNQUFNLDhCQUFhLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQTtRQUV6RixPQUFPLEtBQUssQ0FBQyxPQUFPLENBQUMsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsQ0FBQyxDQUFDO0tBRTdEO0lBQUMsT0FBTyxDQUFDLEVBQUU7UUFDVixJQUFJLENBQUMsWUFBWSw0QkFBZSxFQUFFO1lBQ2hDLE1BQU0sQ0FBQyxDQUFDO1NBQ1Q7YUFBTTtZQUNMLE1BQU0sNEJBQWUsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDdkM7S0FDRjtBQUNILENBQUM7QUFoQkQsa0RBZ0JDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY291cnNlU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9zZXJ2aWNlL2NvdXJzZS9jb3Vyc2Uuc2VydmljZSc7XHJcbmltcG9ydCB7IHZhbGlkYXRlSXQgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vdmFsaWRhdGlvbi92YWxpZGF0ZSc7XHJcbmltcG9ydCB7IENvdXJzZUV4Y2VwdGlvbiB9IGZyb20gJy4vLi4vLi4vLi4vY29tbW9uL2RiL21vZGVscy9jb3Vyc2UvZXhjZXB0aW9ucyc7XHJcbmltcG9ydCB7IENvdXJzZUR0bywgQ291cnNlRHRvR3JvdXAsIENvdXJzZUdldER0byB9IGZyb20gJy4vLi4vLi4vLi4vY29tbW9uL3ZhbGlkYXRpb24vZHRvL2NvdXJzZS9jb3Vyc2UuZHRvJztcclxuXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0UGFnaW5nQ291cnNlSGFuZGxlcihyZXF1ZXN0LCByZXBseSkge1xyXG4gIHRyeSB7XHJcblxyXG4gICAgbGV0IGRhdGEgPSBhd2FpdCB2YWxpZGF0ZUl0KHJlcXVlc3QucXVlcnksIENvdXJzZUdldER0bywgW0NvdXJzZUR0b0dyb3VwLlBBR0VOQVRJT05dKTtcclxuXHJcbiAgICBjb25zdCBjb3Vyc2VzID0gYXdhaXQgY291cnNlU2VydmljZS5nZXRQYWdpbmcoZGF0YSlcclxuXHJcbiAgICByZXR1cm4gcmVwbHkuc3VjY2Vzcyhjb3Vyc2VzKTtcclxuXHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgaWYgKGUgaW5zdGFuY2VvZiBDb3Vyc2VFeGNlcHRpb24pIHtcclxuICAgICAgdGhyb3cgZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRocm93IENvdXJzZUV4Y2VwdGlvbi5Vbmtub3duRXJyb3IoZSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Q291cnNlc1dpdGhDb3Vyc2VQYXJ0c0hhbmRsZXIocmVxdWVzdCwgcmVwbHkpIHtcclxuICB0cnkge1xyXG5cclxuICAgIGxldCBkYXRhID0gYXdhaXQgdmFsaWRhdGVJdChyZXF1ZXN0LnF1ZXJ5LCBDb3Vyc2VHZXREdG8sIFtDb3Vyc2VEdG9Hcm91cC5QQUdFTkFUSU9OXSk7XHJcblxyXG4gICAgY29uc3QgY291cnNlcyA9IGF3YWl0IGNvdXJzZVNlcnZpY2UuZ2V0UGFnaW5nV2l0aENvdXJzZVBhcnRzKGRhdGEpXHJcblxyXG4gICAgcmV0dXJuIHJlcGx5LnN1Y2Nlc3MoY291cnNlcyk7XHJcblxyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIGlmIChlIGluc3RhbmNlb2YgQ291cnNlRXhjZXB0aW9uKSB7XHJcbiAgICAgIHRocm93IGU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aHJvdyBDb3Vyc2VFeGNlcHRpb24uVW5rbm93bkVycm9yKGUpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldE9uZUNvdXJzZVdpdGhDb3Vyc2VQYXJ0c0hhbmRsZXIocmVxdWVzdCwgcmVwbHkpIHtcclxuICB0cnkge1xyXG4gICAgbGV0IGRhdGEgPSBhd2FpdCB2YWxpZGF0ZUl0KHJlcXVlc3QucGFyYW1zLCBDb3Vyc2VEdG8sIFtDb3Vyc2VEdG9Hcm91cC5HRVRfQllfSURdKTtcclxuXHJcbiAgICBjb25zdCBjb3Vyc2UgPSBhd2FpdCBjb3Vyc2VTZXJ2aWNlLmdldENvdXJzZU9uZVdpdGhDb3Vyc2VQYXJ0cyhkYXRhLl9pZClcclxuXHJcbiAgICByZXR1cm4gcmVwbHkuc3VjY2Vzcyhjb3Vyc2UpO1xyXG5cclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICBpZiAoZSBpbnN0YW5jZW9mIENvdXJzZUV4Y2VwdGlvbikge1xyXG4gICAgICB0aHJvdyBlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhyb3cgQ291cnNlRXhjZXB0aW9uLlVua25vd25FcnJvcihlKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRPbmVDb3Vyc2VIYW5kbGVyKHJlcXVlc3QsIHJlcGx5KSB7XHJcbiAgdHJ5IHtcclxuXHJcbiAgICBsZXQgZGF0YSA9IGF3YWl0IHZhbGlkYXRlSXQocmVxdWVzdC5wYXJhbXMsIENvdXJzZUR0bywgW0NvdXJzZUR0b0dyb3VwLkdFVF9CWV9JRF0pO1xyXG5cclxuICAgIGNvbnN0IHsgX2lkLCBuYW1lLCBkZXNjcmlwdGlvbiwgY3JlYXRlZEF0IH0gPSBhd2FpdCBjb3Vyc2VTZXJ2aWNlLmZpbmRCeUlkRXJyb3IoZGF0YS5faWQpXHJcblxyXG4gICAgcmV0dXJuIHJlcGx5LnN1Y2Nlc3MoeyBfaWQsIG5hbWUsIGRlc2NyaXB0aW9uLCBjcmVhdGVkQXQgfSk7XHJcblxyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIGlmIChlIGluc3RhbmNlb2YgQ291cnNlRXhjZXB0aW9uKSB7XHJcbiAgICAgIHRocm93IGU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aHJvdyBDb3Vyc2VFeGNlcHRpb24uVW5rbm93bkVycm9yKGUpO1xyXG4gICAgfVxyXG4gIH1cclxufSJdfQ==