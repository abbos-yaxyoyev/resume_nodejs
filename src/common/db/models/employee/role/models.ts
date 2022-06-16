import { getModelForClass, index, modelOptions, prop } from '@typegoose/typegoose';
import { COLLECTIONS } from '../../../../constants/collections';
import { CommonModel } from '../../base.model';

@modelOptions({
  schemaOptions: {
    collection: COLLECTIONS.ROLE,
  },
})
@index(
  {
    name: 1,
  },
  {
    unique: true,
    name: 'name',
    background: true,
    partialFilterExpression: {
      isDeleted: false,
      $type: 'boolean',
    },
  },
)

@index(
  {
    isDeleted: 1,
  },
  {
    background: true,
    name: 'isDeleted',
  },
)
export class Role extends CommonModel {
  @prop({
    trim: true,
    required: true,
  })
  name: string;

  //genres 
  @prop({
    default: false
  })
  genre: boolean;

  @prop({
    default: false
  })
  genreCreate: boolean;

  @prop({
    default: false
  })
  genreUpdate: boolean;

  @prop({
    default: false
  })
  genreDelete: boolean;

  /** *********************************************** */

  //books
  @prop({
    default: false
  })
  book: boolean;

  @prop({
    default: false
  })
  bookCreate: boolean;

  @prop({
    default: false
  })
  bookUpdate: boolean;

  @prop({
    default: false
  })
  bookDelete: boolean;

  /** ******************************* */

  //user
  @prop({
    default: false
  })
  user: boolean;

  @prop({
    default: false
  })
  userCreate: boolean;

  @prop({
    default: false
  })
  userUpdate: boolean;

  @prop({
    default: false
  })
  userDelete: boolean;

  /** ******************************* */

  //author
  @prop({
    default: false
  })
  author: boolean;

  @prop({
    default: false
  })
  authorCreate: boolean;

  @prop({
    default: false
  })
  authorUpdate: boolean;

  @prop({
    default: false
  })
  authorDelete: boolean;

  /** ******************************* */

  //role
  @prop({
    default: false
  })
  role: boolean;

  @prop({
    default: false
  })
  roleCreate: boolean;

  @prop({
    default: false
  })
  roleUpdate: boolean;

  @prop({
    default: false
  })
  roleDelete: boolean;

  /** ******************************* */

  //employee
  @prop({
    default: false
  })
  employee: boolean;

  @prop({
    default: false
  })
  employeeCreate: boolean;

  @prop({
    default: false
  })
  employeeUpdate: boolean;

  @prop({
    default: false
  })
  employeeDelete: boolean;

  /** ******************************* */

  //discount
  @prop({
    default: false
  })
  course: boolean;

  @prop({
    default: false
  })
  courseCreate: boolean;

  @prop({
    default: false
  })
  courseUpdate: boolean;

  @prop({
    default: false
  })
  courseDelete: boolean;

  /** ******************************* */

}

export const RoleModel = getModelForClass(Role);