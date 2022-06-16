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
    phoneNumber: 1,
  },
  {
    unique: true,
    name: 'phoneNumber',
    background: true,
    partialFilterExpression: {
      isDeleted: false,
      $type: 'boolean',
    },
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
  public firstName!: string;

  @prop({ trim: true })
  public lastName?: string;

  @prop({ trim: true })
  public imgUrl?: string;

  @prop({ trim: true })
  public phoneNumber: string;

  @prop({ trim: true })
  public biography?: string;

  @prop({ required: true, trim: true, minlength: 5 })
  public password: string;
}
