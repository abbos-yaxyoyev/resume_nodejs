import { ModelType } from '@typegoose/typegoose/lib/types';
import { Types } from 'mongoose';
import { CommonUserException } from '../../constants/exceptions';
import { User, UserModel } from '../../db/models/user/models';
import { UserGetDto } from '../../validation/dto/commonUser/user/user.dto';
import { CommonUserService } from '../baseUser/commonUser.service';
import { UserException } from './../../db/models/user/exception';

//! for user  service
class UserService extends CommonUserService<User> {
  constructor(model: ModelType<User>) {
    super(model, UserException);
  }
  public async getPaging<T>(dto: UserGetDto) {
    try {
      let query = { isDeleted: false };

      const $projection = {
        $project: {
          _id: 1,
          fullName: 1,
        },
      };

      const $pipeline = [
        $projection,
      ]

      return await this.findPaging(query, dto, $pipeline);
    } catch (e) {
      throw CommonUserException.UnknownError(e);
    }
  }

  public async getUserFullById<T>(id: string) {
    try {
      const $match: any = {
        $match: {
          isDeleted: false,
          _id: new Types.ObjectId(id),
        },
      };

      const $projection = {
        $project: {
          _id: 1,
          fullName: 1
        },
      };

      const $pipline = [$match, $projection];

      let data = await this.aggregate($pipline);

      const user = data.shift();
      if (!user) throw CommonUserException.NotFound(id);
      return user;
    } catch (e) {
      if (e instanceof CommonUserException) {
        throw e;
      } else {
        throw CommonUserException.UnknownError(e);
      }
    }
  }
}

export const userService = new UserService(UserModel);
