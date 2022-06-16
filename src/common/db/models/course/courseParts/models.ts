import { getModelForClass, index, modelOptions, prop, Ref } from '@typegoose/typegoose';
import { Types } from 'mongoose';
import { COLLECTIONS } from '../../../../constants/collections';
import { CommonModel } from '../../base.model';
import { Course } from './../models';

@modelOptions({
  schemaOptions: {
    collection: COLLECTIONS.COURSE_PARTS,
  },
})

@index(
  {
    isDeleted: 1,
  },
  {
    background: true,
    name: 'isDeleted',
  },
)

export class CourseParts extends CommonModel {

  @prop({
    type: Types.ObjectId,
    ref: COLLECTIONS.COURSE,
  })
  courseId: Ref<Course>;

  @prop({ trim: true })
  imgUrl?: string;

  @prop({ trim: true })
  videoUrl?: string;

  @prop({ trim: true })
  description: string;
}
export const CoursePartsModel = getModelForClass(CourseParts);
