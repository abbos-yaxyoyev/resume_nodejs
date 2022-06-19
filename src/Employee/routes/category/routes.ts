import { API } from '../../../common/config';
import {
  createCategoryHandler,
  deleteOneCategoryHandler,
  getOneCategoryHandler,
  getPagingGenresHandler,
  updateCategoryHandler
} from '../../handlers/category/category.handler';
import { authEmployee } from '../../middleware/authenticate';

export const categoryRoutes = [
  {
    method: 'POST',
    url: `${API.admin_api}/category`,
    preValidation: [authEmployee],
    handler: createCategoryHandler,
  },
  {
    method: 'PUT',
    url: `${API.admin_api}/category`,
    preValidation: [authEmployee],
    handler: updateCategoryHandler,
  },
  {
    method: 'DELETE',
    url: `${API.admin_api}/category/:_id`,
    preValidation: [authEmployee],
    handler: deleteOneCategoryHandler,
  },
  {
    method: 'GET',
    url: `${API.admin_api}/category/:_id`,
    preValidation: [authEmployee],
    handler: getOneCategoryHandler,
  },
  {
    method: 'GET',
    url: `${API.admin_api}/category`,
    preValidation: [authEmployee],
    handler: getPagingGenresHandler,
  }
];
