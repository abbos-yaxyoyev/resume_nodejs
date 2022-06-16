import { getModelForClass, index, modelOptions, prop } from '@typegoose/typegoose';
import { COLLECTIONS } from '../../../constants/collections';
import { CommonModel } from '../base.model';

@modelOptions({
  schemaOptions: {
    collection: COLLECTIONS.COURSE,
  },
})

@index(
  {
    name: 1,
    isDeleted: 1,
  },
  {
    background: true,
    name: 'name_isDeleted',
  },
)

export class Course extends CommonModel {
  @prop({
    required: true,
    trim: true
  })
  name: string;

  @prop({ trim: true })
  imgUrl?: string;

  @prop({ trim: true })
  description?: string;
}
export const CourseModel = getModelForClass(Course);
