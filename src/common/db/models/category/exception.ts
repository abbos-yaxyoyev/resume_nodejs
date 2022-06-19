import { ERROR_CODES } from '../../../constants/errors';
import { CommonException } from '../../../constants/exceptions';

export class CategoryException extends CommonException {
  static NotFound(data: any = null) {
    return new CommonException(ERROR_CODES.CATEGORY, 'CATEGORY not found', data);
  }

  static CanNotDeleteCategory(data) {
    return new CommonException(ERROR_CODES.CATEGORY + 1, `books have got CATEGORYId ${data}`, data);
  }

  static RequiredParentId(data = null) {
    return new CommonException(ERROR_CODES.CATEGORY + 2, `required parent id `, data);
  }
}
