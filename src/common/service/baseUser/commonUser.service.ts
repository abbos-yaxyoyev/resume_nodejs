import { ModelType } from '@typegoose/typegoose/lib/types';
import md5 from 'md5';
import { CommonUserException } from '../../constants/exceptions';
import { CommonUser } from '../../db/baseUser.model';
import { CommonServices } from '../common.service';

export class CommonUserService<T> extends CommonServices<T> {
  constructor(model: ModelType<T>, ErrorException) {
    super(model, ErrorException);
  }

  public async findByPassword(password) {
    return await this.findOne<CommonUser>({ password: md5(password), isDeleted: false });
  }

  public async findByIdError(id, options?, projection?) {
    const user = await this.findById(id, options, projection);
    if (!user) throw CommonUserException.NotFound(id);
    return user;
  }

  public async findByPasswordError(password) {
    const user = await this.findByPassword(password);
    if (!user) throw CommonUserException.NotFound(password);
    return user;
  }
}
