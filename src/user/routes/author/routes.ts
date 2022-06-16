import { getPagingAuthorHandler } from '../../handlers/author/author.handler';
import { mightyUserAuth } from '../../middleware/authenticate';
import { API } from './../../../common/config';

export const authorRoutes = [
  {
    method: 'GET',
    url: `${API.user_api}/author`,
    preValidation: [mightyUserAuth],
    handler: getPagingAuthorHandler,
  }
];
