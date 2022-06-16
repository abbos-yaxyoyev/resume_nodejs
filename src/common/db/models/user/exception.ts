import { ERROR_CODES } from '../../../constants/errors';
import { CommonException } from '../../../constants/exceptions';

export class UserException extends CommonException {

  static AllreadyExist(data) {
    return new UserException(ERROR_CODES.USER, 'user exist', data);
  }

  static NotFound(data) {
    return new UserException(ERROR_CODES.USER + 1, 'user not found', data);
  }

  static NotEnoughPermission(data: any = null) {
    return new UserException(ERROR_CODES.USER + 2, 'Not enough permissions to access', data);
  }

  static InvalidPassword(data: any = null) {
    return new CommonException(ERROR_CODES.USER + 3, 'Invalid password', data);
  }
}
