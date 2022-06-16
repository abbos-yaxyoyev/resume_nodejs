import { ERROR_CODES } from '../../../constants/errors';
import { CommonException } from '../../../constants/exceptions';

export class GenreException extends CommonException {
  static NotFound(data:any = null) {
    return new CommonException(ERROR_CODES.GENRE, 'genre not found', data);
  }

  static CanNotDeleteGenre(data) {
    return new CommonException(ERROR_CODES.GENRE + 1, `books have got genreId ${data}`, data);
  }

  static RequiredParentId(data = null) {
    return new CommonException(ERROR_CODES.GENRE + 2, `required parent id `, data);
  }
}
