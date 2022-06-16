import { getOneBookHandler, getPagingBookHandler } from '../../handlers/book/book.handler';
import { mightyUserAuth } from '../../middleware/authenticate';
import { API } from './../../../common/config';

export const bookRoutes = [
  {
    method: 'GET',
    url: `${API.user_api}/book/:_id`,
    preValidation: [mightyUserAuth],
    handler: getOneBookHandler,
  },
  {
    method: 'GET',
    url: `${API.user_api}/book`,
    preValidation: [mightyUserAuth],
    handler: getPagingBookHandler,
  }
];
