import { getModelForClass, index, modelOptions, prop } from '@typegoose/typegoose';
import { COLLECTIONS } from '../../../constants/collections';
import { CommonModel } from '../base.model';

@modelOptions({
  schemaOptions: {
    collection: COLLECTIONS.CATEGORY,
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

export class Category extends CommonModel {
  @prop({
    required: true,
    trim: true
  })
  name: string;

  @prop({ trim: true })
  imgUrl?: string;
}
export const CategoryModel = getModelForClass(Category);
