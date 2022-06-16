import { ModelType } from '@typegoose/typegoose/lib/types';
import { CourseParts, CoursePartsModel } from '../../../db/models/course/courseParts/models';
import { CourseException } from '../../../db/models/course/exceptions';
import { CommonServices } from '../../common.service';

class CoursePartsService extends CommonServices<CourseParts>{
  constructor(model: ModelType<CourseParts>) {
    super(model, CourseException);
  }

  public async findByIdError(id) {
    const genre = await this.findById(id);
    if (!genre) throw CourseException.NotFound(id);
    return genre;
  }

}

export const coursePartsService = new CoursePartsService(CoursePartsModel)