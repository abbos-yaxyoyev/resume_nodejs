import { ERROR_CODES } from '../../../../constants/errors';
import { CommonException } from '../../../../constants/exceptions';

export class CoursesOfUserException extends CommonException {
  static NotFound(data) {
    return new CommonException(ERROR_CODES.COURSES_OF_USER, 'course not found', data);
  }
}
