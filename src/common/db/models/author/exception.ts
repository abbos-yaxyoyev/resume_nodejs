import { ERROR_CODES } from '../../../constants/errors';
import { CommonException } from '../../../constants/exceptions';

export class AuthorException extends CommonException {
  static NotFound(data) {
    return new CommonException(ERROR_CODES.AUTHOR, 'Author not found', data);
  }

  static DeletedAuthor(data) {
    return new CommonException(ERROR_CODES.AUTHOR + 1, `books have got authorId ${data}`, data);
  }
}
