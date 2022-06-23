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
        const { _id, name, description, createdAt, imgUrl } = await course_service_1.courseService.findByIdError(data._id);
        return reply.success({ _id, name, description, createdAt, imgUrl });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY291cnNlLmhhbmRsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvRW1wbG95ZWUvaGFuZGxlcnMvY291cnNlL2NvdXJzZS5oYW5kbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHVDQUFpQztBQUNqQywyREFBd0Q7QUFDeEQsNEVBQThFO0FBQzlFLGtGQUE4RTtBQUM5RSxxRkFBaUY7QUFDakYsaUZBQTJHO0FBQzNHLGtFQUFpRTtBQUUxRCxLQUFLLFVBQVUsbUJBQW1CLENBQUMsT0FBTyxFQUFFLEtBQUs7SUFDdEQsSUFBSTtRQUNGLE1BQU0sMEJBQVcsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsYUFBSyxDQUFDLGFBQWEsQ0FBQyxDQUFBO1FBRXRFLE1BQU0sSUFBSSxHQUFHLE1BQU0sSUFBQSxxQkFBVSxFQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsc0JBQVMsRUFBRSxDQUFDLDJCQUFjLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUVoRixNQUFNLE1BQU0sR0FBRyxNQUFNLDhCQUFhLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRWhELE9BQU8sS0FBSyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7S0FFbEM7SUFBQyxPQUFPLENBQUMsRUFBRTtRQUNWLElBQUksQ0FBQyxZQUFZLDRCQUFlLEVBQUU7WUFDaEMsTUFBTSxDQUFDLENBQUM7U0FDVDthQUFNO1lBQ0wsTUFBTSw0QkFBZSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUN2QztLQUNGO0FBQ0gsQ0FBQztBQWpCRCxrREFpQkM7QUFFTSxLQUFLLFVBQVUsbUJBQW1CLENBQUMsT0FBTyxFQUFFLEtBQUs7SUFDdEQsSUFBSTtRQUNGLE1BQU0sMEJBQVcsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsYUFBSyxD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QkFBbUIsQ0FBQyxPQUFPLEVBQUUsS0FBSztJQUN0RCxJQUFJO1FBRUYsTUFBTSwwQkFBVyxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxhQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFaEUsSUFBSSxJQUFJLEdBQUcsTUFBTSxJQUFBLHFCQUFVLEVBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxzQkFBUyxFQUFFLENBQUMsMkJBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1FBRW5GLE1BQU0sRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLEdBQUcsTUFBTSw4QkFBYSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUE7UUFFakcsT0FBTyxLQUFLLENBQUMsT0FBTyxDQUFDLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUM7S0FFckU7SUFBQyxPQUFPLENBQUMsRUFBRTtRQUNWLElBQUksQ0FBQyxZQUFZLDRCQUFlLEVBQUU7WUFDaEMsTUFBTSxDQUFDLENBQUM7U0FDVDthQUFNO1lBQ0wsTUFBTSw0QkFBZSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUN2QztLQUNGO0FBQ0gsQ0FBQztBQWxCRCxrREFrQkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUeXBlcyB9IGZyb20gJ21vbmdvb3NlJztcclxuaW1wb3J0IHsgUm9sZXMgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vY29uc3RhbnRzL3JvbGVzJztcclxuaW1wb3J0IHsgQ291cnNlRXhjZXB0aW9uIH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL2RiL21vZGVscy9jb3Vyc2UvZXhjZXB0aW9ucyc7XHJcbmltcG9ydCB7IGNvdXJzZVNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vc2VydmljZS9jb3Vyc2UvY291cnNlLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyByb2xlU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9zZXJ2aWNlL2VtcGxveWVlL3JvbGUvcm9sZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQ291cnNlRHRvLCBDb3Vyc2VEdG9Hcm91cCwgQ291cnNlR2V0RHRvIH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL3ZhbGlkYXRpb24vZHRvL2NvdXJzZS9jb3Vyc2UuZHRvJztcclxuaW1wb3J0IHsgdmFsaWRhdGVJdCB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi92YWxpZGF0aW9uL3ZhbGlkYXRlJztcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVDb3Vyc2VIYW5kbGVyKHJlcXVlc3QsIHJlcGx5KSB7XHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IHJvbGVTZXJ2aWNlLmhhc0FjY2VzcyhyZXF1ZXN0LmFkbWluLnJvbGVJZCwgUm9sZXMuQ09VUlNFX0NSRUFURSlcclxuXHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgdmFsaWRhdGVJdChyZXF1ZXN0LmJvZHksIENvdXJzZUR0bywgW0NvdXJzZUR0b0dyb3VwLkNSRUFURV0pO1xyXG5cclxuICAgIGNvbnN0IGNvdXJzZSA9IGF3YWl0IGNvdXJzZVNlcnZpY2UuY3JlYXRlKGRhdGEpO1xyXG5cclxuICAgIHJldHVybiByZXBseS5zdWNjZXNzKGNvdXJzZS5faWQpO1xyXG5cclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICBpZiAoZSBpbnN0YW5jZW9mIENvdXJzZUV4Y2VwdGlvbikge1xyXG4gICAgICB0aHJvdyBlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhyb3cgQ291cnNlRXhjZXB0aW9uLlVua25vd25FcnJvcihlKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVDb3Vyc2VIYW5kbGVyKHJlcXVlc3QsIHJlcGx5KSB7XHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IHJvbGVTZXJ2aWNlLmhhc0FjY2VzcyhyZXF1ZXN0LmFkbWluLnJvbGVJZCwgUm9sZXMuQ09VUlNFX1VQREFURSlcclxuXHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgdmFsaWRhdGVJdChyZXF1ZXN0LmJvZHksIENvdXJzZUR0bywgW0NvdXJzZUR0b0dyb3VwLlVQREFURV0pO1xyXG5cclxuICAgIGNvbnN0IHF1ZXJ5ID0ge1xyXG4gICAgICBpc0RlbGV0ZWQ6IGZhbHNlLFxyXG4gICAgICBfaWQ6IG5ldyBUeXBlcy5PYmplY3RJZChkYXRhLl9pZClcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjb3Vyc2UgPSBhd2FpdCBjb3Vyc2VTZXJ2aWNlLnVwZGF0ZU9uZUJ5UXVlcnkocXVlcnksIGRhdGEsIHsgbmV3OiB0cnVlIH0pO1xyXG5cclxuICAgIHJldHVybiByZXBseS5zdWNjZXNzKGNvdXJzZS5faWQpO1xyXG5cclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICBpZiAoZSBpbnN0YW5jZW9mIENvdXJzZUV4Y2VwdGlvbikge1xyXG4gICAgICB0aHJvdyBlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhyb3cgQ291cnNlRXhjZXB0aW9uLlVua25vd25FcnJvcihlKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVPbmVDb3Vyc2VIYW5kbGVyKHJlcXVlc3QsIHJlcGx5KSB7XHJcbiAgdHJ5IHtcclxuXHJcbiAgICBhd2FpdCByb2xlU2VydmljZS5oYXNBY2Nlc3MocmVxdWVzdC5hZG1pbi5yb2xlSWQsIFJvbGVzLkNPVVJTRV9ERUxFVEUpO1xyXG5cclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCB2YWxpZGF0ZUl0KHJlcXVlc3QucGFyYW1zLCBDb3Vyc2VEdG8sIFtDb3Vyc2VEdG9Hcm91cC5ERUxFVEVdKTtcclxuXHJcbiAgICBhd2FpdCBjb3Vyc2VTZXJ2aWNlLm1hcmtBc0RlbGV0ZWQoZGF0YS5faWQpO1xyXG5cclxuICAgIHJldHVybiByZXBseS5zdWNjZXNzKGRhdGEuX2lkKTtcclxuXHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgaWYgKGUgaW5zdGFuY2VvZiBDb3Vyc2VFeGNlcHRpb24pIHtcclxuICAgICAgdGhyb3cgZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRocm93IENvdXJzZUV4Y2VwdGlvbi5Vbmtub3duRXJyb3IoZSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0UGFnaW5nQ291cnNlSGFuZGxlcihyZXF1ZXN0LCByZXBseSkge1xyXG4gIHRyeSB7XHJcblxyXG4gICAgYXdhaXQgcm9sZVNlcnZpY2UuaGFzQWNjZXNzKHJlcXVlc3QuYWRtaW4ucm9sZUlkLCBSb2xlcy5DT1VSU0UpO1xyXG5cclxuICAgIGxldCBkYXRhID0gYXdhaXQgdmFsaWRhdGVJdChyZXF1ZXN0LnF1ZXJ5LCBDb3Vyc2VHZXREdG8sIFtDb3Vyc2VEdG9Hcm91cC5QQUdFTkFUSU9OXSk7XHJcblxyXG4gICAgY29uc3QgY291cnNlcyA9IGF3YWl0IGNvdXJzZVNlcnZpY2UuZ2V0UGFnaW5nKGRhdGEpXHJcblxyXG4gICAgcmV0dXJuIHJlcGx5LnN1Y2Nlc3MoY291cnNlcyk7XHJcblxyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIGlmIChlIGluc3RhbmNlb2YgQ291cnNlRXhjZXB0aW9uKSB7XHJcbiAgICAgIHRocm93IGU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aHJvdyBDb3Vyc2VFeGNlcHRpb24uVW5rbm93bkVycm9yKGUpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldENvdXJzZXNXaXRoQ291cnNlUGFydHNIYW5kbGVyKHJlcXVlc3QsIHJlcGx5KSB7XHJcbiAgdHJ5IHtcclxuXHJcbiAgICBhd2FpdCByb2xlU2VydmljZS5oYXNBY2Nlc3MocmVxdWVzdC5hZG1pbi5yb2xlSWQsIFJvbGVzLkNPVVJTRSk7XHJcblxyXG4gICAgbGV0IGRhdGEgPSBhd2FpdCB2YWxpZGF0ZUl0KHJlcXVlc3QucXVlcnksIENvdXJzZUdldER0bywgW0NvdXJzZUR0b0dyb3VwLlBBR0VOQVRJT05dKTtcclxuXHJcbiAgICBjb25zdCBjb3Vyc2VzID0gYXdhaXQgY291cnNlU2VydmljZS5nZXRQYWdpbmdXaXRoQ291cnNlUGFydHMoZGF0YSlcclxuXHJcbiAgICByZXR1cm4gcmVwbHkuc3VjY2Vzcyhjb3Vyc2VzKTtcclxuXHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgaWYgKGUgaW5zdGFuY2VvZiBDb3Vyc2VFeGNlcHRpb24pIHtcclxuICAgICAgdGhyb3cgZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRocm93IENvdXJzZUV4Y2VwdGlvbi5Vbmtub3duRXJyb3IoZSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0T25lQ291cnNlV2l0aENvdXJzZVBhcnRzSGFuZGxlcihyZXF1ZXN0LCByZXBseSkge1xyXG4gIHRyeSB7XHJcblxyXG4gICAgYXdhaXQgcm9sZVNlcnZpY2UuaGFzQWNjZXNzKHJlcXVlc3QuYWRtaW4ucm9sZUlkLCBSb2xlcy5DT1VSU0UpO1xyXG5cclxuICAgIGxldCBkYXRhID0gYXdhaXQgdmFsaWRhdGVJdChyZXF1ZXN0LnBhcmFtcywgQ291cnNlRHRvLCBbQ291cnNlRHRvR3JvdXAuR0VUX0JZX0lEXSk7XHJcblxyXG4gICAgY29uc3QgY291cnNlcyA9IGF3YWl0IGNvdXJzZVNlcnZpY2UuZ2V0Q291cnNlT25lV2l0aENvdXJzZVBhcnRzKGRhdGEuX2lkKVxyXG5cclxuICAgIHJldHVybiByZXBseS5zdWNjZXNzKGNvdXJzZXMpO1xyXG5cclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICBpZiAoZSBpbnN0YW5jZW9mIENvdXJzZUV4Y2VwdGlvbikge1xyXG4gICAgICB0aHJvdyBlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhyb3cgQ291cnNlRXhjZXB0aW9uLlVua25vd25FcnJvcihlKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRPbmVDb3Vyc2VIYW5kbGVyKHJlcXVlc3QsIHJlcGx5KSB7XHJcbiAgdHJ5IHtcclxuXHJcbiAgICBhd2FpdCByb2xlU2VydmljZS5oYXNBY2Nlc3MocmVxdWVzdC5hZG1pbi5yb2xlSWQsIFJvbGVzLkNPVVJTRSk7XHJcblxyXG4gICAgbGV0IGRhdGEgPSBhd2FpdCB2YWxpZGF0ZUl0KHJlcXVlc3QucGFyYW1zLCBDb3Vyc2VEdG8sIFtDb3Vyc2VEdG9Hcm91cC5HRVRfQllfSURdKTtcclxuXHJcbiAgICBjb25zdCB7IF9pZCwgbmFtZSwgZGVzY3JpcHRpb24sIGNyZWF0ZWRBdCwgaW1nVXJsIH0gPSBhd2FpdCBjb3Vyc2VTZXJ2aWNlLmZpbmRCeUlkRXJyb3IoZGF0YS5faWQpXHJcblxyXG4gICAgcmV0dXJuIHJlcGx5LnN1Y2Nlc3MoeyBfaWQsIG5hbWUsIGRlc2NyaXB0aW9uLCBjcmVhdGVkQXQsIGltZ1VybCB9KTtcclxuXHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgaWYgKGUgaW5zdGFuY2VvZiBDb3Vyc2VFeGNlcHRpb24pIHtcclxuICAgICAgdGhyb3cgZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRocm93IENvdXJzZUV4Y2VwdGlvbi5Vbmtub3duRXJyb3IoZSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4iXX0=