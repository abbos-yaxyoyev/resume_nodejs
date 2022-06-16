import { CoursesOfUserException } from '../../../../common/db/models/course/coresesOfUsers/exceptions';
import { coursesOfUserService } from '../../../../common/service/course/coursesOfUser/coursesOfUser.service';
import { CourseOfUserDto, CourseOfUserDtoGroup } from '../../../../common/validation/dto/course/coursesOfUser/coursesOfUser.dto';
import { validateIt } from "../../../../common/validation/validate";


export async function createCoursesOfUserHandler(request, reply) {
  try {

    const data = await validateIt(request.body, CourseOfUserDto, [CourseOfUserDtoGroup.CREATE]);

    data.userId = request.user._id

    const course = await coursesOfUserService.create(data);

    return reply.success(course._id);

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

    const course = await coursesOfUserService.getCoursesOfUser(request.user._id.toString())

    return reply.success(course);

  } catch (e) {
    if (e instanceof CoursesOfUserException) {
      throw e;
    } else {
      throw CoursesOfUserException.UnknownError(e);
    }
  }
}
