import { getModelForClass, index, modelOptions, prop, Ref } from '@typegoose/typegoose';
import { Types } from 'mongoose';
import { COLLECTIONS } from '../../../constants/collections';
import { CommonUser } from '../../baseUser.model';
import { Role } from './role/models';

@modelOptions({
  schemaOptions: {
    collection: COLLECTIONS.EMPLOYEE,
  },
})

@index(
  {
    roleId: 1,
  },
  {
    background: true,
    name: 'roleId',
  },
)

export class Employee extends CommonUser {
  @prop({
    required: true,
    type: Types.ObjectId,
    ref: COLLECTIONS.ROLE,
  })
  roleId: Ref<Role>;
}

export const EmployeeModel = getModelForClass(Employee);
