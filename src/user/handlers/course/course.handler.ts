import { courseService } from '../../../common/service/course/course.service';
import { validateIt } from '../../../common/validation/validate';
import { CourseException } from './../../../common/db/models/course/exceptions';
import { CourseDto, CourseDtoGroup, CourseGetDto } from './../../../common/validation/dto/course/course.dto';


export async function getPagingCourseHandler(request, reply) {
  try {

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
    let data = await validateIt(request.params, CourseDto, [CourseDtoGroup.GET_BY_ID]);

    const course = await courseService.getCourseOneWithCourseParts(data._id)

    return reply.success(course);

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