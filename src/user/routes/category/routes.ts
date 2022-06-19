import { API } from '../../../common/config';
import { getOneCategoryHandler, getPagingCategoryHandler } from '../../handlers/category/category.handler';
import { mightyUserAuth } from '../../middleware/authenticate';

export const categoryRoutes = [
  {
    method: 'GET',
    url: `${API.user_api}/category/:_id`,
    preValidation: [mightyUserAuth],
    handler: getOneCategoryHandler,
  },
  {
    method: 'GET',
    url: `${API.user_api}/category`,
    preValidation: [mightyUserAuth],
    handler: getPagingCategoryHandler,
  }
];
