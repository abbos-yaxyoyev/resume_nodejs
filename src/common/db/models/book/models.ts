import { getModelForClass, index, modelOptions, prop, Ref } from '@typegoose/typegoose';
import { Types } from 'mongoose';
import { COLLECTIONS } from '../../../constants/collections';
import { Author } from '../author/models';
import { CommonModel } from '../base.model';
import { Genre } from '../genre/models';

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
    genreIds: 1,
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
    trim: true
  })
  description: string;

  @prop({
    required: true,
    trim: true,
  })
  imgUrl: string;

  @prop({ type: Types.ObjectId, ref: COLLECTIONS.AUTHOR })
  authorId?: Ref<Author>;

  @prop({ type: [Types.ObjectId], ref: COLLECTIONS.GENRE })
  genreIds: Ref<Genre>[];

}
export const BooksModel = getModelForClass(Books);
