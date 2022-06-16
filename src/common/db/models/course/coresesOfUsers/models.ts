import { getModelForClass, index, modelOptions, prop, Ref } from '@typegoose/typegoose';
import { Types } from 'mongoose';
import { COLLECTIONS } from '../../../../constants/collections';
import { CommonModel } from '../../base.model';
import { User } from '../../user/models';
import { Course } from './../models';

@modelOptions({
  schemaOptions: {
    collection: COLLECTIONS.COURSES_OF_USER,
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

@index(
  {
    userId: 1,
    courseId: 1,
  },
  {
    background: true,
    name: 'userId_courseId',
    unique: true,
    partialFilterExpression: {
      isDeleted: false,
      $type: 'boolean',
    },
  },
)

export class CoursesOfUser extends CommonModel {

  @prop({
    type: Types.ObjectId,
    ref: COLLECTIONS.COURSE,
  })
  courseId: Ref<Course>;

  @prop({
    type: Types.ObjectId,
    ref: COLLECTIONS.USER,
  })
  userId: Ref<User>;

}
export const CoursesOfUserModel = getModelForClass(CoursesOfUser);
