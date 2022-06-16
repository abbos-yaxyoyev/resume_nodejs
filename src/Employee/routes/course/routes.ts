import { API } from '../../../common/config';
import { createCourseHandler, deleteOneCourseHandler, getCoursesWithCoursePartsHandler, getOneCourseHandler, getOneCourseWithCoursePartsHandler, getPagingCourseHandler, updateCourseHandler } from '../../handlers/course/course.handler';
import { authEmployee } from '../../middleware/authenticate';


export const courseRoutes = [
  {
    method: 'POST',
    url: `${API.admin_api}/course`,
    preValidation: [authEmployee],
    handler: createCourseHandler,
  },
  {
    method: 'PUT',
    url: `${API.admin_api}/course`,
    preValidation: [authEmployee],
    handler: updateCourseHandler,
  },
  {
    method: 'GET',
    url: `${API.admin_api}/course/courseParts`,
    preValidation: [authEmployee],
    handler: getCoursesWithCoursePartsHandler,
  },
  {
    method: 'GET',
    url: `${API.admin_api}/course/oneCourseParts/:_id`,
    preValidation: [authEmployee],
    handler: getOneCourseWithCoursePartsHandler,
  },
  {
    method: 'DELETE',
    url: `${API.admin_api}/course/:_id`,
    preValidation: [authEmployee],
    handler: deleteOneCourseHandler,
  },
  {
    method: 'GET',
    url: `${API.admin_api}/course`,
    preValidation: [authEmployee],
    handler: getPagingCourseHandler,
  },
  {
    method: 'GET',
    url: `${API.admin_api}/course/:_id`,
    preValidation: [authEmployee],
    handler: getOneCourseHandler,
  }
];
