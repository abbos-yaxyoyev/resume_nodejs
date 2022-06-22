import { API } from '../../../common/config';
import {
  createRoleHandler, getOneRoledHandler, getPagingRoleHandler, updateRoleHandler
} from '../../handlers/role/role.handler';
import { authEmployee } from '../../middleware/authenticate';

export const roleRoutes = [
  {
    method: 'POST',
    url: `${API.admin_api}/role`,
    preValidation: [authEmployee],
    handler: createRoleHandler,
  },
  {
    method: 'GET',
    url: `${API.admin_api}/role/:_id`,
    preValidation: [authEmployee],
    handler: getOneRoledHandler,
  },
  {
    method: 'PUT',
    url: `${API.admin_api}/role`,
    preValidation: [authEmployee],
    handler: updateRoleHandler,
  },
  {
    method: 'GET',
    url: `${API.admin_api}/role`,
    preValidation: [authEmployee],
    handler: getPagingRoleHandler,
  },
  // {
  //   method: 'DELETE',
  //   url: `${API.admin_api}/role/:_id`,
  //   preValidation: [authEmployee],
  //   handler: deleteOneRoleHandler,
  // },
];
