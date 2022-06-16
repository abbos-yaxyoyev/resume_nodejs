import { API } from '../../../common/config';
import {
  createEmployeeHandler, deleteOneEmployeeHandler, getEmployeeProfileHandler, getOneEmployeeHandler, getPagingEmployeeHandler, signInHandler, updateEmployeeHandler, updateEmployeeProfileHandler
} from '../../handlers/employee.handler';
import { authEmployee } from '../../middleware/authenticate';

export const employeeRoutes = [
  {
    method: 'POST',
    url: `${API.admin_api}/sign-in`,
    handler: signInHandler,
  },
  {
    method: 'POST',
    url: `${API.admin_api}/employee`,
    preValidation: [authEmployee],
    handler: createEmployeeHandler,
  },
  {
    method: 'PUT',
    url: `${API.admin_api}/employee`,
    preValidation: [authEmployee],
    handler: updateEmployeeHandler,
  },
  {
    method: 'PUT',
    url: `${API.admin_api}/employee/profile`,
    preValidation: [authEmployee],
    handler: updateEmployeeProfileHandler,
  },
  {
    method: 'GET',
    url: `${API.admin_api}/employee`,
    preValidation: [authEmployee],
    handler: getPagingEmployeeHandler,
  },
  {
    method: 'GET',
    url: `${API.admin_api}/employee/:_id`,
    preValidation: [authEmployee],
    handler: getOneEmployeeHandler,
  },
  {
    method: 'GET',
    url: `${API.admin_api}/employee/profile`,
    preValidation: [authEmployee],
    handler: getEmployeeProfileHandler,
  },
  {
    method: 'DELETE',
    url: `${API.admin_api}/employee/:_id`,
    preValidation: [authEmployee],
    handler: deleteOneEmployeeHandler,
  }
];
