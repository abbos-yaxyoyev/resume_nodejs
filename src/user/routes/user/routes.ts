import { deleteProfileHandler, getProfileHandler, removeProfileImageHandler, signInHandler, signUpHandler, updateProfileHandler } from '../../handlers/user.handler';
import { authUser } from '../../middleware/authenticate';
import { API } from './../../../common/config';

export const userRoutes = [
  {
    method: 'POST',
    url: `${API.user_api}/sign-up`,
    handler: signUpHandler,
  },
  {
    method: 'POST',
    url: `${API.user_api}/sign-in`,
    handler: signInHandler,
  },
  {
    method: 'PUT',
    url: `${API.user_api}/update`,
    preValidation: [authUser],
    handler: updateProfileHandler,
  },
  {
    method: 'GET',
    url: `${API.user_api}/getProfile`,
    preValidation: [authUser],
    handler: getProfileHandler,
  },
  {
    method: 'PUT',
    url: `${API.user_api}/removeImage`,
    preValidation: [authUser],
    handler: removeProfileImageHandler,
  },
  {
    method: 'DELETE',
    url: `${API.user_api}/delete`,
    preValidation: [authUser],
    handler: deleteProfileHandler,
  },
];
