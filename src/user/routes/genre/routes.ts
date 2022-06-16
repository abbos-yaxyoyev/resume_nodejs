import { API } from '../../../common/config';
import { getGenreFirstChildHandler, getOneGenreHandler, getPagingGenreHandler } from '../../handlers/genre/genre.handler';
import { mightyUserAuth } from '../../middleware/authenticate';

export const genreRoutes = [
  {
    method: 'GET',
    url: `${API.user_api}/genre/:_id`,
    preValidation: [mightyUserAuth],
    handler: getOneGenreHandler,
  },
  {
    method: 'GET',
    url: `${API.user_api}/genre/child/:_id`,
    preValidation: [mightyUserAuth],
    handler: getGenreFirstChildHandler,
  },
  {
    method: 'GET',
    url: `${API.user_api}/genre`,
    preValidation: [mightyUserAuth],
    handler: getPagingGenreHandler,
  }
];
