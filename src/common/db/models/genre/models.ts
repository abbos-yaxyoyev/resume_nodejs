import { getModelForClass, index, modelOptions, prop, Ref } from '@typegoose/typegoose';
import { Types } from 'mongoose';
import { COLLECTIONS } from '../../../constants/collections';
import { CommonModel } from '../base.model';

@modelOptions({
  schemaOptions: {
    collection: COLLECTIONS.GENRE,
  },
})
@index(
  {
    isDeleted: 1,
    parentId: 1,
  },
  {
    background: true,
    name: 'parentId_isDeleted',
  },
)

@index(
  {
    name: 1,
    parentId: 1,
  },
  {
    unique: true,
    background: true,
    name: 'nameuz_parentId',
    partialFilterExpression: {
      isDeleted: false,
      $type: 'boolean',
    },
  },
)

export class Genre extends CommonModel {
  @prop({
    required: true,
    trim: true
  })
  name: string;

  @prop({ trim: true })
  imgUrl?: string;

  @prop({
    type: Types.ObjectId,
    ref: COLLECTIONS.GENRE,
    default: undefined
  })
  parentId?: Ref<Genre>;
}
export const GenreModel = getModelForClass(Genre);
