"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOneCourseHandler = exports.getOneCourseWithCoursePartsHandler = exports.getCoursesWithCoursePartsHandler = exports.getPagingCourseHandler = exports.deleteOneCourseHandler = exports.updateCourseHandler = exports.createCourseHandler = void 0;
const mongoose_1 = require("mongoose");
const roles_1 = require("../../../common/constants/roles");
const exceptions_1 = require("../../../common/db/models/course/exceptions");
const course_service_1 = require("../../../common/service/course/course.service");
const role_service_1 = require("../../../common/service/employee/role/role.service");
const course_dto_1 = require("../../../common/validation/dto/course/course.dto");
const validate_1 = require("../../../common/validation/validate");
async function createCourseHandler(request, reply) {
    try {
        await role_service_1.roleService.hasAccess(request.admin.roleId, roles_1.Roles.COURSE_CREATE);
        const data = await (0, validate_1.validateIt)(request.body, course_dto_1.CourseDto, [course_dto_1.CourseDtoGroup.CREATE]);
        const course = await course_service_1.courseService.create(data);
        return reply.success(course._id);
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
exports.createCourseHandler = createCourseHandler;
async function updateCourseHandler(request, reply) {
    try {
        await role_service_1.roleService.hasAccess(request.admin.roleId, roles_1.Roles.COURSE_UPDATE);
        const data = await (0, validate_1.validateIt)(request.body, course_dto_1.CourseDto, [course_dto_1.CourseDtoGroup.UPDATE]);
        const query = {
            isDeleted: false,
            _id: new mongoose_1.Types.ObjectId(data._id)
        };
        const course = await course_service_1.courseService.updateOneByQuery(query, data, { new: true });
        return reply.success(course._id);
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
exports.updateCourseHandler = updateCourseHandler;
async function deleteOneCourseHandler(request, reply) {
    try {
        await role_service_1.roleService.hasAccess(request.admin.roleId, roles_1.Roles.COURSE_DELETE);
        const data = await (0, validate_1.validateIt)(request.params, course_dto_1.CourseDto, [course_dto_1.CourseDtoGroup.DELETE]);
        await course_service_1.courseService.markAsDeleted(data._id);
        return reply.success(data._id);
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
exports.deleteOneCourseHandler = deleteOneCourseHandler;
async function getPagingCourseHandler(request, reply) {
    try {
        await role_service_1.roleService.hasAccess(request.admin.roleId, roles_1.Roles.COURSE);
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
        await role_service_1.roleService.hasAccess(request.admin.roleId, roles_1.Roles.COURSE);
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
        await role_service_1.roleService.hasAccess(request.admin.roleId, roles_1.Roles.COURSE);
        let data = await (0, validate_1.validateIt)(request.params, course_dto_1.CourseDto, [course_dto_1.CourseDtoGroup.GET_BY_ID]);
        const courses = await course_service_1.courseService.getCourseOneWithCourseParts(data._id);
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
exports.getOneCourseWithCoursePartsHandler = getOneCourseWithCoursePartsHandler;
async function getOneCourseHandler(request, reply) {
    try {
        await role_service_1.roleService.hasAccess(request.admin.roleId, roles_1.Roles.COURSE);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY291cnNlLmhhbmRsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvRW1wbG95ZWUvaGFuZGxlcnMvY291cnNlL2NvdXJzZS5oYW5kbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHVDQUFpQztBQUNqQywyREFBd0Q7QUFDeEQsNEVBQThFO0FBQzlFLGtGQUE4RTtBQUM5RSxxRkFBaUY7QUFDakYsaUZBQTJHO0FBQzNHLGtFQUFpRTtBQUUxRCxLQUFLLFVBQVUsbUJBQW1CLENBQUMsT0FBTyxFQUFFLEtBQUs7SUFDdEQsSUFBSTtRQUNGLE1BQU0sMEJBQVcsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsYUFBSyxDQUFDLGFBQWEsQ0FBQyxDQUFBO1FBRXRFLE1BQU0sSUFBSSxHQUFHLE1BQU0sSUFBQSxxQkFBVSxFQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsc0JBQVMsRUFBRSxDQUFDLDJCQUFjLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUVoRixNQUFNLE1BQU0sR0FBRyxNQUFNLDhCQUFhLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRWhELE9BQU8sS0FBSyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7S0FFbEM7SUFBQyxPQUFPLENBQUMsRUFBRTtRQUNWLElBQUksQ0FBQyxZQUFZLDRCQUFlLEVBQUU7WUFDaEMsTUFBTSxDQUFDLENBQUM7U0FDVDthQUFNO1lBQ0wsTUFBTSw0QkFBZSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUN2QztLQUNGO0FBQ0gsQ0FBQztBQWpCRCxrREFpQkM7QUFFTSxLQUFLLFVBQVUsbUJBQW1CLENBQUMsT0FBTyxFQUFFLEtBQUs7SUFDdEQsSUFBSTtRQUNGLE1BQU0sMEJBQVcsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsYUFBSyxD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QkFBbUIsQ0FBQyxPQUFPLEVBQUUsS0FBSztJQUN0RCxJQUFJO1FBRUYsTUFBTSwwQkFBVyxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxhQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFaEUsSUFBSSxJQUFJLEdBQUcsTUFBTSxJQUFBLHFCQUFVLEVBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxzQkFBUyxFQUFFLENBQUMsMkJBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1FBRW5GLE1BQU0sRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsR0FBRyxNQUFNLDhCQUFhLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQTtRQUV6RixPQUFPLEtBQUssQ0FBQyxPQUFPLENBQUMsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsQ0FBQyxDQUFDO0tBRTdEO0lBQUMsT0FBTyxDQUFDLEVBQUU7UUFDVixJQUFJLENBQUMsWUFBWSw0QkFBZSxFQUFFO1lBQ2hDLE1BQU0sQ0FBQyxDQUFDO1NBQ1Q7YUFBTTtZQUNMLE1BQU0sNEJBQWUsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDdkM7S0FDRjtBQUNILENBQUM7QUFsQkQsa0RBa0JDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVHlwZXMgfSBmcm9tICdtb25nb29zZSc7XHJcbmltcG9ydCB7IFJvbGVzIH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL2NvbnN0YW50cy9yb2xlcyc7XHJcbmltcG9ydCB7IENvdXJzZUV4Y2VwdGlvbiB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9kYi9tb2RlbHMvY291cnNlL2V4Y2VwdGlvbnMnO1xyXG5pbXBvcnQgeyBjb3Vyc2VTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL3NlcnZpY2UvY291cnNlL2NvdXJzZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgcm9sZVNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vc2VydmljZS9lbXBsb3llZS9yb2xlL3JvbGUuc2VydmljZSc7XHJcbmltcG9ydCB7IENvdXJzZUR0bywgQ291cnNlRHRvR3JvdXAsIENvdXJzZUdldER0byB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi92YWxpZGF0aW9uL2R0by9jb3Vyc2UvY291cnNlLmR0byc7XHJcbmltcG9ydCB7IHZhbGlkYXRlSXQgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vdmFsaWRhdGlvbi92YWxpZGF0ZSc7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlQ291cnNlSGFuZGxlcihyZXF1ZXN0LCByZXBseSkge1xyXG4gIHRyeSB7XHJcbiAgICBhd2FpdCByb2xlU2VydmljZS5oYXNBY2Nlc3MocmVxdWVzdC5hZG1pbi5yb2xlSWQsIFJvbGVzLkNPVVJTRV9DUkVBVEUpXHJcblxyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHZhbGlkYXRlSXQocmVxdWVzdC5ib2R5LCBDb3Vyc2VEdG8sIFtDb3Vyc2VEdG9Hcm91cC5DUkVBVEVdKTtcclxuXHJcbiAgICBjb25zdCBjb3Vyc2UgPSBhd2FpdCBjb3Vyc2VTZXJ2aWNlLmNyZWF0ZShkYXRhKTtcclxuXHJcbiAgICByZXR1cm4gcmVwbHkuc3VjY2Vzcyhjb3Vyc2UuX2lkKTtcclxuXHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgaWYgKGUgaW5zdGFuY2VvZiBDb3Vyc2VFeGNlcHRpb24pIHtcclxuICAgICAgdGhyb3cgZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRocm93IENvdXJzZUV4Y2VwdGlvbi5Vbmtub3duRXJyb3IoZSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlQ291cnNlSGFuZGxlcihyZXF1ZXN0LCByZXBseSkge1xyXG4gIHRyeSB7XHJcbiAgICBhd2FpdCByb2xlU2VydmljZS5oYXNBY2Nlc3MocmVxdWVzdC5hZG1pbi5yb2xlSWQsIFJvbGVzLkNPVVJTRV9VUERBVEUpXHJcblxyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHZhbGlkYXRlSXQocmVxdWVzdC5ib2R5LCBDb3Vyc2VEdG8sIFtDb3Vyc2VEdG9Hcm91cC5VUERBVEVdKTtcclxuXHJcbiAgICBjb25zdCBxdWVyeSA9IHtcclxuICAgICAgaXNEZWxldGVkOiBmYWxzZSxcclxuICAgICAgX2lkOiBuZXcgVHlwZXMuT2JqZWN0SWQoZGF0YS5faWQpXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgY291cnNlID0gYXdhaXQgY291cnNlU2VydmljZS51cGRhdGVPbmVCeVF1ZXJ5KHF1ZXJ5LCBkYXRhLCB7IG5ldzogdHJ1ZSB9KTtcclxuXHJcbiAgICByZXR1cm4gcmVwbHkuc3VjY2Vzcyhjb3Vyc2UuX2lkKTtcclxuXHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgaWYgKGUgaW5zdGFuY2VvZiBDb3Vyc2VFeGNlcHRpb24pIHtcclxuICAgICAgdGhyb3cgZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRocm93IENvdXJzZUV4Y2VwdGlvbi5Vbmtub3duRXJyb3IoZSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlT25lQ291cnNlSGFuZGxlcihyZXF1ZXN0LCByZXBseSkge1xyXG4gIHRyeSB7XHJcblxyXG4gICAgYXdhaXQgcm9sZVNlcnZpY2UuaGFzQWNjZXNzKHJlcXVlc3QuYWRtaW4ucm9sZUlkLCBSb2xlcy5DT1VSU0VfREVMRVRFKTtcclxuXHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgdmFsaWRhdGVJdChyZXF1ZXN0LnBhcmFtcywgQ291cnNlRHRvLCBbQ291cnNlRHRvR3JvdXAuREVMRVRFXSk7XHJcblxyXG4gICAgYXdhaXQgY291cnNlU2VydmljZS5tYXJrQXNEZWxldGVkKGRhdGEuX2lkKTtcclxuXHJcbiAgICByZXR1cm4gcmVwbHkuc3VjY2VzcyhkYXRhLl9pZCk7XHJcblxyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIGlmIChlIGluc3RhbmNlb2YgQ291cnNlRXhjZXB0aW9uKSB7XHJcbiAgICAgIHRocm93IGU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aHJvdyBDb3Vyc2VFeGNlcHRpb24uVW5rbm93bkVycm9yKGUpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFBhZ2luZ0NvdXJzZUhhbmRsZXIocmVxdWVzdCwgcmVwbHkpIHtcclxuICB0cnkge1xyXG5cclxuICAgIGF3YWl0IHJvbGVTZXJ2aWNlLmhhc0FjY2VzcyhyZXF1ZXN0LmFkbWluLnJvbGVJZCwgUm9sZXMuQ09VUlNFKTtcclxuXHJcbiAgICBsZXQgZGF0YSA9IGF3YWl0IHZhbGlkYXRlSXQocmVxdWVzdC5xdWVyeSwgQ291cnNlR2V0RHRvLCBbQ291cnNlRHRvR3JvdXAuUEFHRU5BVElPTl0pO1xyXG5cclxuICAgIGNvbnN0IGNvdXJzZXMgPSBhd2FpdCBjb3Vyc2VTZXJ2aWNlLmdldFBhZ2luZyhkYXRhKVxyXG5cclxuICAgIHJldHVybiByZXBseS5zdWNjZXNzKGNvdXJzZXMpO1xyXG5cclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICBpZiAoZSBpbnN0YW5jZW9mIENvdXJzZUV4Y2VwdGlvbikge1xyXG4gICAgICB0aHJvdyBlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhyb3cgQ291cnNlRXhjZXB0aW9uLlVua25vd25FcnJvcihlKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRDb3Vyc2VzV2l0aENvdXJzZVBhcnRzSGFuZGxlcihyZXF1ZXN0LCByZXBseSkge1xyXG4gIHRyeSB7XHJcblxyXG4gICAgYXdhaXQgcm9sZVNlcnZpY2UuaGFzQWNjZXNzKHJlcXVlc3QuYWRtaW4ucm9sZUlkLCBSb2xlcy5DT1VSU0UpO1xyXG5cclxuICAgIGxldCBkYXRhID0gYXdhaXQgdmFsaWRhdGVJdChyZXF1ZXN0LnF1ZXJ5LCBDb3Vyc2VHZXREdG8sIFtDb3Vyc2VEdG9Hcm91cC5QQUdFTkFUSU9OXSk7XHJcblxyXG4gICAgY29uc3QgY291cnNlcyA9IGF3YWl0IGNvdXJzZVNlcnZpY2UuZ2V0UGFnaW5nV2l0aENvdXJzZVBhcnRzKGRhdGEpXHJcblxyXG4gICAgcmV0dXJuIHJlcGx5LnN1Y2Nlc3MoY291cnNlcyk7XHJcblxyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIGlmIChlIGluc3RhbmNlb2YgQ291cnNlRXhjZXB0aW9uKSB7XHJcbiAgICAgIHRocm93IGU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aHJvdyBDb3Vyc2VFeGNlcHRpb24uVW5rbm93bkVycm9yKGUpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldE9uZUNvdXJzZVdpdGhDb3Vyc2VQYXJ0c0hhbmRsZXIocmVxdWVzdCwgcmVwbHkpIHtcclxuICB0cnkge1xyXG5cclxuICAgIGF3YWl0IHJvbGVTZXJ2aWNlLmhhc0FjY2VzcyhyZXF1ZXN0LmFkbWluLnJvbGVJZCwgUm9sZXMuQ09VUlNFKTtcclxuXHJcbiAgICBsZXQgZGF0YSA9IGF3YWl0IHZhbGlkYXRlSXQocmVxdWVzdC5wYXJhbXMsIENvdXJzZUR0bywgW0NvdXJzZUR0b0dyb3VwLkdFVF9CWV9JRF0pO1xyXG5cclxuICAgIGNvbnN0IGNvdXJzZXMgPSBhd2FpdCBjb3Vyc2VTZXJ2aWNlLmdldENvdXJzZU9uZVdpdGhDb3Vyc2VQYXJ0cyhkYXRhLl9pZClcclxuXHJcbiAgICByZXR1cm4gcmVwbHkuc3VjY2Vzcyhjb3Vyc2VzKTtcclxuXHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgaWYgKGUgaW5zdGFuY2VvZiBDb3Vyc2VFeGNlcHRpb24pIHtcclxuICAgICAgdGhyb3cgZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRocm93IENvdXJzZUV4Y2VwdGlvbi5Vbmtub3duRXJyb3IoZSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0T25lQ291cnNlSGFuZGxlcihyZXF1ZXN0LCByZXBseSkge1xyXG4gIHRyeSB7XHJcblxyXG4gICAgYXdhaXQgcm9sZVNlcnZpY2UuaGFzQWNjZXNzKHJlcXVlc3QuYWRtaW4ucm9sZUlkLCBSb2xlcy5DT1VSU0UpO1xyXG5cclxuICAgIGxldCBkYXRhID0gYXdhaXQgdmFsaWRhdGVJdChyZXF1ZXN0LnBhcmFtcywgQ291cnNlRHRvLCBbQ291cnNlRHRvR3JvdXAuR0VUX0JZX0lEXSk7XHJcblxyXG4gICAgY29uc3QgeyBfaWQsIG5hbWUsIGRlc2NyaXB0aW9uLCBjcmVhdGVkQXQgfSA9IGF3YWl0IGNvdXJzZVNlcnZpY2UuZmluZEJ5SWRFcnJvcihkYXRhLl9pZClcclxuXHJcbiAgICByZXR1cm4gcmVwbHkuc3VjY2Vzcyh7IF9pZCwgbmFtZSwgZGVzY3JpcHRpb24sIGNyZWF0ZWRBdCB9KTtcclxuXHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgaWYgKGUgaW5zdGFuY2VvZiBDb3Vyc2VFeGNlcHRpb24pIHtcclxuICAgICAgdGhyb3cgZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRocm93IENvdXJzZUV4Y2VwdGlvbi5Vbmtub3duRXJyb3IoZSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4iXX0=