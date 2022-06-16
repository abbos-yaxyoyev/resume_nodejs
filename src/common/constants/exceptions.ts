import { ERROR_CODES } from './errors';

export class CommonException {
  constructor(public code: number, public message: string, public data: any) { }
  public static UnknownError(data?: any) {
    return new CommonException(ERROR_CODES.BASE, 'Unknown error', data);
  }

  public static ValidationError(data?: any) {
    return new CommonException(ERROR_CODES.BASE + 1, 'Validation Error', data);
  }

  static AllreadyExist(data?, collectionName?, message?,) {
    return new CommonException(ERROR_CODES.BASE, `collectionName:  ${collectionName},  already exist , message: ${message}`, data);
  }
}

export class FileException {

  public static InvalidUploadType(data: any = null) {
    return new CommonException(ERROR_CODES.FILE, 'Invalid upload type', data);
  }

  public static FileNotFound(data: any = null) {
    return new CommonException(ERROR_CODES.FILE + 1, 'Invalid upload type', data);
  }

}

export class CommonUserException extends CommonException {
  static AllreadyExist(data) {
    return new CommonUserException(ERROR_CODES.USER, 'user exist', data);
  }
  static NotFound(data) {
    return new CommonUserException(ERROR_CODES.USER, 'user not found', data);
  }
  static NotEnoughPermission(data: any = null) {
    return new CommonUserException(ERROR_CODES.USER, 'Not enough permissions to access', data);
  }
}
