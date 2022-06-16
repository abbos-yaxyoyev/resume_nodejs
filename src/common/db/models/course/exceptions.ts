import { ERROR_CODES } from '../../../constants/errors';
import { CommonException } from '../../../constants/exceptions';

export class CourseException extends CommonException {
  static NotFound(data) {
    return new CommonException(ERROR_CODES.COURSE, 'course not found', data);
  }
}
