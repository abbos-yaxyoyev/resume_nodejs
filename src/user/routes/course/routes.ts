import { API } from '../../../common/config';
import { getCoursesWithCoursePartsHandler, getOneCourseHandler, getOneCourseWithCoursePartsHandler, getPagingCourseHandler } from '../../handlers/course/course.handler';
import { mightyUserAuth } from '../../middleware/authenticate';


export const courseRoutes = [

  {
    method: 'GET',
    url: `${API.user_api}/course/courseParts`,
    preValidation: [mightyUserAuth],
    handler: getCoursesWithCoursePartsHandler,
  },
  {
    method: 'GET',
    url: `${API.user_api}/course/oneCourseParts/:_id`,
    preValidation: [mightyUserAuth],
    handler: getOneCourseWithCoursePartsHandler,
  },
  {
    method: 'GET',
    url: `${API.user_api}/course`,
    preValidation: [mightyUserAuth],
    handler: getPagingCourseHandler,
  },
  {
    method: 'GET',
    url: `${API.user_api}/course/:_id`,
    preValidation: [mightyUserAuth],
    handler: getOneCourseHandler,
  }
];
