import { Types } from 'mongoose';
import { Roles } from '../../../common/constants/roles';
import { courseService } from '../../../common/service/course/course.service';
import { roleService } from '../../../common/service/employee/role/role.service';
import { validateIt } from '../../../common/validation/validate';
import { CourseException } from './../../../common/db/models/course/exceptions';
import { CourseDto, CourseDtoGroup, CourseGetDto } from './../../../common/validation/dto/course/course.dto';

export async function createCourseHandler(request, reply) {
  try {
    await roleService.hasAccess(request.admin.roleId, Roles.COURSE_CREATE)

    const data = await validateIt(request.body, CourseDto, [CourseDtoGroup.CREATE]);

    const course = await courseService.create(data);

    return reply.success(course._id);

  } catch (e) {
    if (e instanceof CourseException) {
      throw e;
    } else {
      throw CourseException.UnknownError(e);
    }
  }
}

export async function updateCourseHandler(request, reply) {
  try {
    await roleService.hasAccess(request.admin.roleId, Roles.COURSE_UPDATE)

    const data = await validateIt(request.body, CourseDto, [CourseDtoGroup.UPDATE]);

    const query = {
      isDeleted: false,
      _id: new Types.ObjectId(data._id)
    }

    const course = await courseService.updateOneByQuery(query, data, { new: true });

    return reply.success(course._id);

  } catch (e) {
    if (e instanceof CourseException) {
      throw e;
    } else {
      throw CourseException.UnknownError(e);
    }
  }
}

export async function deleteOneCourseHandler(request, reply) {
  try {

    await roleService.hasAccess(request.admin.roleId, Roles.COURSE_DELETE);

    const data = await validateIt(request.params, CourseDto, [CourseDtoGroup.DELETE]);

    await courseService.markAsDeleted(data._id);

    return reply.success(data._id);

  } catch (e) {
    if (e instanceof CourseException) {
      throw e;
    } else {
      throw CourseException.UnknownError(e);
    }
  }
}

export async function getPagingCourseHandler(request, reply) {
  try {

    await roleService.hasAccess(request.admin.roleId, Roles.COURSE);

    let data = await validateIt(request.query, CourseGetDto, [CourseDtoGroup.PAGENATION]);

    const courses = await courseService.getPaging(data)

    return reply.success(courses);

  } catch (e) {
    if (e instanceof CourseException) {
      throw e;
    } else {
      throw CourseException.UnknownError(e);
    }
  }
}

export async function getCoursesWithCoursePartsHandler(request, reply) {
  try {

    await roleService.hasAccess(request.admin.roleId, Roles.COURSE);

    let data = await validateIt(request.query, CourseGetDto, [CourseDtoGroup.PAGENATION]);

    const courses = await courseService.getPagingWithCourseParts(data)

    return reply.success(courses);

  } catch (e) {
    if (e instanceof CourseException) {
      throw e;
    } else {
      throw CourseException.UnknownError(e);
    }
  }
}

export async function getOneCourseWithCoursePartsHandler(request, reply) {
  try {

    await roleService.hasAccess(request.admin.roleId, Roles.COURSE);

    let data = await validateIt(request.params, CourseDto, [CourseDtoGroup.GET_BY_ID]);

    const courses = await courseService.getCourseOneWithCourseParts(data._id)

    return reply.success(courses);

  } catch (e) {
    if (e instanceof CourseException) {
      throw e;
    } else {
      throw CourseException.UnknownError(e);
    }
  }
}

export async function getOneCourseHandler(request, reply) {
  try {

    await roleService.hasAccess(request.admin.roleId, Roles.COURSE);

    let data = await validateIt(request.params, CourseDto, [CourseDtoGroup.GET_BY_ID]);

    const course = await courseService.findByIdError(data._id)

    return reply.success(course);

  } catch (e) {
    if (e instanceof CourseException) {
      throw e;
    } else {
      throw CourseException.UnknownError(e);
    }
  }
}

