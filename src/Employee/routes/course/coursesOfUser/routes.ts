import { API } from '../../../../common/config';
import { getCoursesOfUserHandler, getUsersOfCourseHandler } from '../../../handlers/course/coursesOfUser/coursesOfUser.handler';
import { authEmployee } from '../../../middleware/authenticate';


export const coursesOfUserRoutes = [
  {
    method: 'GET',
    url: `${API.admin_api}/coursesUser/:_id`,
    preValidation: [authEmployee],
    handler: getCoursesOfUserHandler,
  },
  {
    method: 'GET',
    url: `${API.admin_api}/userCourse/:_id`,
    preValidation: [authEmployee],
    handler: getUsersOfCourseHandler,
  }
];
