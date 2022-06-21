import { getModelForClass, index, modelOptions, prop, Ref } from '@typegoose/typegoose';
import { Types } from 'mongoose';
import { COLLECTIONS } from '../../../constants/collections';
import { Author } from '../author/models';
import { CommonModel } from '../base.model';
import { Category } from '../category/models';

@modelOptions({
  schemaOptions: {
    collection: COLLECTIONS.BOOK,
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
    name: 1,
    authorId: 1,
    categoryId: 1,
  },
  {
    background: true,
    name: 'name_authorId_genreId',
    unique: true,
    partialFilterExpression: {
      isDeleted: false,
      $type: 'boolean',
    },
  },
)

export class Books extends CommonModel {
  @prop({
    required: true,
    trim: true,
  })
  name: string;

  @prop({
    required: true,
    trim: true,
  })
  imgUrl: string;

  @prop({
    required: true,
    trim: true,
  })
  ebookUrl: string;

  @prop({
    trim: true,
  })
  description?: string;


  @prop({ type: Types.ObjectId, ref: COLLECTIONS.AUTHOR })
  authorId?: Ref<Author>;

  @prop({ type: Types.ObjectId, ref: COLLECTIONS.CATEGORY })
  categoryId: Ref<Category>;

}
export const BooksModel = getModelForClass(Books);
