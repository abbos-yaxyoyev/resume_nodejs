import { index, prop } from '@typegoose/typegoose';
import { CommonModel } from './models/base.model';

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
    password: 1,
  },
  {
    unique: true,
    name: 'password',
    background: true,
    partialFilterExpression: {
      isDeleted: false,
      $type: 'boolean',
    },
  },
)

export class CommonUser extends CommonModel {
  @prop({ trim: true })
  public fullName!: string;

  @prop({ required: true, trim: true, minlength: 5 })
  public password: string;
}
