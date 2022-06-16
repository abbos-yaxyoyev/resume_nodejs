import { getModelForClass, modelOptions } from '@typegoose/typegoose';
import { COLLECTIONS } from '../../../constants/collections';
import { CommonUser } from '../../baseUser.model';

@modelOptions({
  schemaOptions: {
    collection: COLLECTIONS.USER,
  },
})


export class User extends CommonUser { }

export const UserModel = getModelForClass(User);
