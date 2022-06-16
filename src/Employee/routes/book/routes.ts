import { API } from '../../../common/config';
import {
  createBookHandler, deleteOneBookHandler, getOneBookHandler, getPagingBookHandler, updateBookHandler
} from '../../handlers/book/book.handler';
import { authEmployee } from '../../middleware/authenticate';

export const bookRoutes = [
  {
    method: 'POST',
    url: `${API.admin_api}/book`,
    preValidation: [authEmployee],
    handler: createBookHandler,
  },
  {
    method: 'PUT',
    url: `${API.admin_api}/book`,
    preValidation: [authEmployee],
    handler: updateBookHandler,
  },
  {
    method: 'DELETE',
    url: `${API.admin_api}/book/:_id`,
    preValidation: [authEmployee],
    handler: deleteOneBookHandler,
  },
  {
    method: 'GET',
    url: `${API.admin_api}/book/:_id`,
    preValidation: [authEmployee],
    handler: getOneBookHandler,
  },
  {
    method: 'GET',
    url: `${API.admin_api}/book`,
    preValidation: [authEmployee],
    handler: getPagingBookHandler,
  }
];
