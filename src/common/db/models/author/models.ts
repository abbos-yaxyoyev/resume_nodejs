import { getModelForClass, index, modelOptions, prop, Severity } from '@typegoose/typegoose';
import { COLLECTIONS } from '../../../constants/collections';
import { CommonModel } from '../base.model';

@modelOptions({
  schemaOptions: {
    collection: COLLECTIONS.AUTHOR,
  },
  options: {
    allowMixed: Severity.ALLOW,
  },
})

@index(
  {
    fullName: 1,
    isDeleted: 1,
    dateOfbirth: 1,
  },
  {
    background: true,
    name: 'fullName_isDeleted_dateOfbirth',
  },
)

export class Author extends CommonModel {
  @prop({
    required: true,
    trim: true,
  })
  fullName: string;

  @prop({ trim: true, })
  imgUrl: string;

  @prop({ trim: true, })
  biography?: string;

  @prop({ required: true, })
  dateOfbirth: Date;

  @prop({})
  dateOfdeath?: Date;
}
export const AuthorModel = getModelForClass(Author);
