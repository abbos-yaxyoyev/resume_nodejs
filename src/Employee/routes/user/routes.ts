import { API } from '../../../common/config';
import { getPagingUserHandler } from '../../handlers/user.handler';
import { authEmployee } from '../../middleware/authenticate';

export const userRoutes = [

  {
    method: 'GET',
    url: `${API.admin_api}/user`,
    preValidation: [authEmployee],
    handler: getPagingUserHandler,
  },
];
