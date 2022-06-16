import { ERROR_CODES } from '../../../constants/errors';
import { CommonException } from '../../../constants/exceptions';

export class BookException extends CommonException {
  static NotFound(data) {
    return new CommonException(ERROR_CODES.BOOK, 'Book not found', data);
  }

  static AuthorOfBooks(data) {
    return new CommonException(
      ERROR_CODES.BOOK + 1,
      'There are appropriate books for this author ',
      'authorId: ' + data,
    );
  }

}
