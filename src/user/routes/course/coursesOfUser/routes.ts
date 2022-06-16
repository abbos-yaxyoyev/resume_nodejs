import { API } from '../../../../common/config';
import { createCoursesOfUserHandler, getCoursesOfUserHandler } from '../../../handlers/course/coursesOfUser/coursesOfUser.handler';
import { authUser } from '../../../middleware/authenticate';


export const coursesOfUserRoutes = [
  {
    method: 'POST',
    url: `${API.user_api}/coursesUser`,
    preValidation: [authUser],
    handler: createCoursesOfUserHandler,
  },
  {
    method: 'GET',
    url: `${API.user_api}/coursesUser`,
    preValidation: [authUser],
    handler: getCoursesOfUserHandler,
  }
];
