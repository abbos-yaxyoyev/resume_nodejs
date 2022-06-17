import { Roles } from "../../../../common/constants/roles";
import { CoursesOfUserException } from '../../../../common/db/models/course/coresesOfUsers/exceptions';
import { coursesOfUserService } from '../../../../common/service/course/coursesOfUser/coursesOfUser.service';
import { roleService } from "../../../../common/service/employee/role/role.service";
import { CourseOfUserDto, CourseOfUserDtoGroup } from '../../../../common/validation/dto/course/coursesOfUser/coursesOfUser.dto';
import { validateIt } from "../../../../common/validation/validate";

export async function getUsersOfCourseHandler(request, reply) {
  try {

    await roleService.hasAccess(request.admin.roleId, Roles.COURSE);

    let data = await validateIt(request.params, CourseOfUserDto, [CourseOfUserDtoGroup.GET_BY_ID]);

    const course = await coursesOfUserService.getUsersOfCourse(data._id)

    return reply.success(course);

  } catch (e) {
    if (e instanceof CoursesOfUserException) {
      throw e;
    } else {
      throw CoursesOfUserException.UnknownError(e);
    }
  }
}

export async function getCoursesOfUserHandler(request, reply) {
  try {

    await roleService.hasAccess(request.admin.roleId, Roles.COURSE);

    let data = await validateIt(request.params, CourseOfUserDto, [CourseOfUserDtoGroup.GET_BY_ID]);

    const course = await coursesOfUserService.getCoursesOfUser(data._id)

    return reply.success(course);

  } catch (e) {
    if (e instanceof CoursesOfUserException) {
      throw e;
    } else {
      throw CoursesOfUserException.UnknownError(e);
    }
  }
}
