import { CourseException } from '../../../../common/db/models/course/exceptions';
import { coursePartsService } from "../../../../common/service/course/courseParts/courseParts.service";
import { CoursePartsDto, CoursePartsDtoGroup } from '../../../../common/validation/dto/course/courseParts/courseParts.dto';
import { validateIt } from "../../../../common/validation/validate";


export async function getOneCoursePartsHandler(request, reply) {
  try {


    const data = await validateIt(request.params, CoursePartsDto, CoursePartsDtoGroup.GET_BY_ID)

    const { _id, imgUrl, videoUrl, description } = await coursePartsService.findByIdError(data._id)

    return reply.success({ _id, imgUrl, videoUrl, description });

  } catch (e) {
    if (e instanceof CourseException) {
      throw e;
    } else {
      throw CourseException.UnknownError(e);
    }
  }
}
