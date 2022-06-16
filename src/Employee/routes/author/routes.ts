import { API } from '../../../common/config';
import {
  createAuthorHandler,
  deleteOneAuthorHandler, getOneAuthorHandler, getPagingAuthorHandler, updateAuthorHandler
} from '../../handlers/author/author.handler';
import { authEmployee } from '../../middleware/authenticate';

export const authorRoutes = [
  {
    method: 'POST',
    url: `${API.admin_api}/author`,
    preValidation: [authEmployee],
    handler: createAuthorHandler,
  },
  {
    method: 'DELETE',
    url: `${API.admin_api}/author/:_id`,
    preValidation: [authEmployee],
    handler: deleteOneAuthorHandler,
  },
  {
    method: 'GET',
    url: `${API.admin_api}/author`,
    preValidation: [authEmployee],
    handler: getPagingAuthorHandler,
  },
  {
    method: 'GET',
    url: `${API.admin_api}/author/:_id`,
    preValidation: [authEmployee],
    handler: getOneAuthorHandler,
  },
  {
    method: 'PUT',
    url: `${API.admin_api}/author`,
    preValidation: [authEmployee],
    handler: updateAuthorHandler,
  },
];
