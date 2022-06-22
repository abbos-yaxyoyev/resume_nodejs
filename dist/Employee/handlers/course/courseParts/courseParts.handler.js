"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteOneCoursePartsHandler = exports.updateCoursePartsHandler = exports.createCoursePartsHandler = void 0;
const mongoose_1 = require("mongoose");
const roles_1 = require("../../../../common/constants/roles");
const exceptions_1 = require("../../../../common/db/models/course/exceptions");
const courseParts_service_1 = require("../../../../common/service/course/courseParts/courseParts.service");
const role_service_1 = require("../../../../common/service/employee/role/role.service");
const courseParts_dto_1 = require("../../../../common/validation/dto/course/courseParts/courseParts.dto");
const validate_1 = require("../../../../common/validation/validate");
async function createCoursePartsHandler(request, reply) {
    try {
        await role_service_1.roleService.hasAccess(request.admin.roleId, roles_1.Roles.COURSE_CREATE);
        const data = await (0, validate_1.validateIt)(request.body, courseParts_dto_1.CoursePartsDto, [courseParts_dto_1.CoursePartsDtoGroup.CREATE]);
        const course = await courseParts_service_1.coursePartsService.create(data);
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
exports.createCoursePartsHandler = createCoursePartsHandler;
async function updateCoursePartsHandler(request, reply) {
    try {
        await role_service_1.roleService.hasAccess(request.admin.roleId, roles_1.Roles.COURSE_UPDATE);
        const data = await (0, validate_1.validateIt)(request.body, courseParts_dto_1.CoursePartsDto, courseParts_dto_1.CoursePartsDtoGroup.UPDATE);
        await courseParts_service_1.coursePartsService.updateOneByQuery({ _id: new mongoose_1.Types.ObjectId(data._id) }, data);
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
exports.updateCoursePartsHandler = updateCoursePartsHandler;
async function deleteOneCoursePartsHandler(request, reply) {
    try {
        await role_service_1.roleService.hasAccess(request.admin.roleId, roles_1.Roles.COURSE_DELETE);
        const data = await (0, validate_1.validateIt)(request.params, courseParts_dto_1.CoursePartsDto, [courseParts_dto_1.CoursePartsDtoGroup.DELETE]);
        await courseParts_service_1.coursePartsService.markAsDeleted(data._id);
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
exports.deleteOneCoursePartsHandler = deleteOneCoursePartsHandler;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY291cnNlUGFydHMuaGFuZGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9FbXBsb3llZS9oYW5kbGVycy9jb3Vyc2UvY291cnNlUGFydHMvY291cnNlUGFydHMuaGFuZGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSx1Q0FBaUM7QUFDakMsOERBQTJEO0FBQzNELCtFQUFpRjtBQUNqRiwyR0FBdUc7QUFDdkcsd0ZBQW9GO0FBQ3BGLDBHQUEySDtBQUMzSCxxRUFBb0U7QUFFN0QsS0FBSyxVQUFVLHdCQUF3QixDQUFDLE9BQU8sRUFBRSxLQUFLO0lBQzNELElBQUk7UUFFRixNQUFNLDBCQUFXLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLGFBQUssQ0FBQyxhQUFhLENBQUMsQ0FBQTtRQUV0RSxNQUFNLElBQUksR0FBRyxNQUFNLElBQUEscUJBQVUsRUFBQyxPQUFPLENBQUMsSUFBSSxFQUFFLGdDQUFjLEVBQUUsQ0FBQyxxQ0FBbUIsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBRTFGLE1BQU0sTUFBTSxHQUFHLE1BQU0sd0NBQWtCLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRXJELE9BQU8sS0FBSyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7S0FFbEM7SUFBQyxPQUFPLENBQUMsRUFBRTtRQUNWLElBQUksQ0FBQyxZQUFZLDRCQUFlLEVBQUU7WUFDaEMsTUFBTSxDQUFDLENBQUM7U0FDVDthQUFNO1lBQ0wsTUFBTSw0QkFBZSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUN2QztLQUNGO0FBQ0gsQ0FBQztBQWxCRCw0REFrQkM7QUFFTSxLQUFLLFVBQVUsd0JBQXdCLENBQUMsT0FBTyxFQUFFLEtBQUs7SUFDM0QsSUFBSTtRQUVGLE1BQU0sMEJBQVcsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsYUFBSyxDQUFDLGFBQWEsQ0FBQyxDQUFBO1FBRXRFLE1BQU0sSUFBSSxHQUFHLE1BQU0sSUFBQSxxQkFBVSxFQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsZ0NBQWMsRUFBRSxxQ0FBbUIsQ0FBQyxNQUFNLENBQUMsQ0FBQTtRQUV2RixNQUFNLHdDQUFrQixDQUFDLGdCQUFnQixDQUN2QyxFQUFFLEdBQUcsRUFBRSxJQUFJLGdCQUFLLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUNyQyxJQUFJLENBQ0wsQ0FBQztRQUVGLE9BQU8sS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7S0FFaEM7SUFBQyxPQUFPLENBQUMsRUFBRTtRQUNWLElBQUksQ0FBQyxZQUFZLDRCQUFlLEVBQUU7WUFDaEMsTUFBTSxDQUFDLENBQUM7U0FDVDthQUFNO1lBQ0wsTUFBTSw0QkFBZSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUN2QztLQUNGO0FBQ0gsQ0FBQztBQXJCRCw0REFxQkM7QUFFTSxLQUFLLFVBQVUsMkJBQTJCLENBQUMsT0FBTyxFQUFFLEtBQUs7SUFFOUQsSUFBSTtRQUNGLE1BQU0sMEJBQVcsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsYUFBSyxDQUFDLGFBQWEsQ0FBQyxDQUFBO1FBRXRFLE1BQU0sSUFBSSxHQUFHLE1BQU0sSUFBQSxxQkFBVSxFQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsZ0NBQWMsRUFBRSxDQUFDLHFDQUFtQixDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFFNUYsTUFBTSx3Q0FBa0IsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFBO1FBRWhELE9BQU8sS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUE7S0FDL0I7SUFBQyxPQUFPLENBQUMsRUFBRTtRQUNWLElBQUksQ0FBQyxZQUFZLDRCQUFlLEVBQUU7WUFDaEMsTUFBTSxDQUFDLENBQUM7U0FDVDthQUFNO1lBQ0wsTUFBTSw0QkFBZSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUN2QztLQUNGO0FBQ0gsQ0FBQztBQWpCRCxrRUFpQkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUeXBlcyB9IGZyb20gJ21vbmdvb3NlJztcclxuaW1wb3J0IHsgUm9sZXMgfSBmcm9tIFwiLi4vLi4vLi4vLi4vY29tbW9uL2NvbnN0YW50cy9yb2xlc1wiO1xyXG5pbXBvcnQgeyBDb3Vyc2VFeGNlcHRpb24gfSBmcm9tICcuLi8uLi8uLi8uLi9jb21tb24vZGIvbW9kZWxzL2NvdXJzZS9leGNlcHRpb25zJztcclxuaW1wb3J0IHsgY291cnNlUGFydHNTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uLy4uLy4uL2NvbW1vbi9zZXJ2aWNlL2NvdXJzZS9jb3Vyc2VQYXJ0cy9jb3Vyc2VQYXJ0cy5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IHJvbGVTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uLy4uLy4uL2NvbW1vbi9zZXJ2aWNlL2VtcGxveWVlL3JvbGUvcm9sZS5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IENvdXJzZVBhcnRzRHRvLCBDb3Vyc2VQYXJ0c0R0b0dyb3VwIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tbW9uL3ZhbGlkYXRpb24vZHRvL2NvdXJzZS9jb3Vyc2VQYXJ0cy9jb3Vyc2VQYXJ0cy5kdG8nO1xyXG5pbXBvcnQgeyB2YWxpZGF0ZUl0IH0gZnJvbSBcIi4uLy4uLy4uLy4uL2NvbW1vbi92YWxpZGF0aW9uL3ZhbGlkYXRlXCI7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlQ291cnNlUGFydHNIYW5kbGVyKHJlcXVlc3QsIHJlcGx5KSB7XHJcbiAgdHJ5IHtcclxuXHJcbiAgICBhd2FpdCByb2xlU2VydmljZS5oYXNBY2Nlc3MocmVxdWVzdC5hZG1pbi5yb2xlSWQsIFJvbGVzLkNPVVJTRV9DUkVBVEUpXHJcblxyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHZhbGlkYXRlSXQocmVxdWVzdC5ib2R5LCBDb3Vyc2VQYXJ0c0R0bywgW0NvdXJzZVBhcnRzRHRvR3JvdXAuQ1JFQVRFXSk7XHJcblxyXG4gICAgY29uc3QgY291cnNlID0gYXdhaXQgY291cnNlUGFydHNTZXJ2aWNlLmNyZWF0ZShkYXRhKTtcclxuXHJcbiAgICByZXR1cm4gcmVwbHkuc3VjY2Vzcyhjb3Vyc2UuX2lkKTtcclxuXHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgaWYgKGUgaW5zdGFuY2VvZiBDb3Vyc2VFeGNlcHRpb24pIHtcclxuICAgICAgdGhyb3cgZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRocm93IENvdXJzZUV4Y2VwdGlvbi5Vbmtub3duRXJyb3IoZSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlQ291cnNlUGFydHNIYW5kbGVyKHJlcXVlc3QsIHJlcGx5KSB7XHJcbiAgdHJ5IHtcclxuXHJcbiAgICBhd2FpdCByb2xlU2VydmljZS5oYXNBY2Nlc3MocmVxdWVzdC5hZG1pbi5yb2xlSWQsIFJvbGVzLkNPVVJTRV9VUERBVEUpXHJcblxyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHZhbGlkYXRlSXQocmVxdWVzdC5ib2R5LCBDb3Vyc2VQYXJ0c0R0bywgQ291cnNlUGFydHNEdG9Hcm91cC5VUERBVEUpXHJcblxyXG4gICAgYXdhaXQgY291cnNlUGFydHNTZXJ2aWNlLnVwZGF0ZU9uZUJ5UXVlcnkoXHJcbiAgICAgIHsgX2lkOiBuZXcgVHlwZXMuT2JqZWN0SWQoZGF0YS5faWQpIH0sXHJcbiAgICAgIGRhdGFcclxuICAgICk7XHJcblxyXG4gICAgcmV0dXJuIHJlcGx5LnN1Y2Nlc3MoZGF0YS5faWQpO1xyXG5cclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICBpZiAoZSBpbnN0YW5jZW9mIENvdXJzZUV4Y2VwdGlvbikge1xyXG4gICAgICB0aHJvdyBlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhyb3cgQ291cnNlRXhjZXB0aW9uLlVua25vd25FcnJvcihlKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVPbmVDb3Vyc2VQYXJ0c0hhbmRsZXIocmVxdWVzdCwgcmVwbHkpIHtcclxuXHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IHJvbGVTZXJ2aWNlLmhhc0FjY2VzcyhyZXF1ZXN0LmFkbWluLnJvbGVJZCwgUm9sZXMuQ09VUlNFX0RFTEVURSlcclxuXHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgdmFsaWRhdGVJdChyZXF1ZXN0LnBhcmFtcywgQ291cnNlUGFydHNEdG8sIFtDb3Vyc2VQYXJ0c0R0b0dyb3VwLkRFTEVURV0pO1xyXG5cclxuICAgIGF3YWl0IGNvdXJzZVBhcnRzU2VydmljZS5tYXJrQXNEZWxldGVkKGRhdGEuX2lkKVxyXG5cclxuICAgIHJldHVybiByZXBseS5zdWNjZXNzKGRhdGEuX2lkKVxyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIGlmIChlIGluc3RhbmNlb2YgQ291cnNlRXhjZXB0aW9uKSB7XHJcbiAgICAgIHRocm93IGU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aHJvdyBDb3Vyc2VFeGNlcHRpb24uVW5rbm93bkVycm9yKGUpO1xyXG4gICAgfVxyXG4gIH1cclxufSJdfQ==