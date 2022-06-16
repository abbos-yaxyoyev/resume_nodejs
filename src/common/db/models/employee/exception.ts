import { ERROR_CODES } from '../../../constants/errors';
import { CommonException } from '../../../constants/exceptions';

export class EmployeeException extends CommonException {
  static AllreadyExist(data) {
    return new CommonException(ERROR_CODES.EMPLOYEE, 'employee exist', data);
  }

  static NotFound(data) {
    return new CommonException(ERROR_CODES.EMPLOYEE + 1, 'employee not found', data);
  }

  static NotEnoughPermission(data: any = null) {
    return new CommonException(ERROR_CODES.EMPLOYEE + 2, 'Not enough permissions to access', data);
  }

  static InvalidPassword(data: any = null) {
    return new CommonException(ERROR_CODES.EMPLOYEE + 3, 'Invalid password', data);
  }
}
