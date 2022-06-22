import { Types } from 'mongoose';
import { Roles } from "../../../../common/constants/roles";
import { CourseException } from '../../../../common/db/models/course/exceptions';
import { coursePartsService } from "../../../../common/service/course/courseParts/courseParts.service";
import { roleService } from "../../../../common/service/employee/role/role.service";
import { CoursePartsDto, CoursePartsDtoGroup } from '../../../../common/validation/dto/course/courseParts/courseParts.dto';
import { validateIt } from "../../../../common/validation/validate";

export async function createCoursePartsHandler(request, reply) {
  try {

    await roleService.hasAccess(request.admin.roleId, Roles.COURSE_CREATE)

    const data = await validateIt(request.body, CoursePartsDto, [CoursePartsDtoGroup.CREATE]);

    const course = await coursePartsService.create(data);

    return reply.success(course._id);

  } catch (e) {
    if (e instanceof CourseException) {
      throw e;
    } else {
      throw CourseException.UnknownError(e);
    }
  }
}

export async function updateCoursePartsHandler(request, reply) {
  try {

    await roleService.hasAccess(request.admin.roleId, Roles.COURSE_UPDATE)

    const data = await validateIt(request.body, CoursePartsDto, CoursePartsDtoGroup.UPDATE)

    await coursePartsService.updateOneByQuery(
      { _id: new Types.ObjectId(data._id) },
      data
    );

    return reply.success(data._id);

  } catch (e) {
    if (e instanceof CourseException) {
      throw e;
    } else {
      throw CourseException.UnknownError(e);
    }
  }
}

export async function deleteOneCoursePartsHandler(request, reply) {

  try {
    await roleService.hasAccess(request.admin.roleId, Roles.COURSE_DELETE)

    const data = await validateIt(request.params, CoursePartsDto, [CoursePartsDtoGroup.DELETE]);

    await coursePartsService.markAsDeleted(data._id)

    return reply.success(data._id)
  } catch (e) {
    if (e instanceof CourseException) {
      throw e;
    } else {
      throw CourseException.UnknownError(e);
    }
  }
}