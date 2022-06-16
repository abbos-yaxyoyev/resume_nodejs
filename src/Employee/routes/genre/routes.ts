import { API } from '../../../common/config';
import {
  createGenreHandler,
  deleteOneGenreHandler,
  getOneGenreHandler,
  getPagingGenresHandler,
  updateGenreHandler
} from '../../handlers/genre/genre.handler';
import { authEmployee } from '../../middleware/authenticate';

export const genreRoutes = [
  {
    method: 'POST',
    url: `${API.admin_api}/genre`,
    preValidation: [authEmployee],
    handler: createGenreHandler,
  },
  {
    method: 'PUT',
    url: `${API.admin_api}/genre`,
    preValidation: [authEmployee],
    handler: updateGenreHandler,
  },
  {
    method: 'DELETE',
    url: `${API.admin_api}/genre/:_id`,
    preValidation: [authEmployee],
    handler: deleteOneGenreHandler,
  },
  {
    method: 'GET',
    url: `${API.admin_api}/genre/:_id`,
    preValidation: [authEmployee],
    handler: getOneGenreHandler,
  },
  {
    method: 'GET',
    url: `${API.admin_api}/genre`,
    preValidation: [authEmployee],
    handler: getPagingGenresHandler,
  }
];
