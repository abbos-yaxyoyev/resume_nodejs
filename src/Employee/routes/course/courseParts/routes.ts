import { API } from '../../../../common/config';
import { createCoursePartsHandler, deleteOneCoursePartsHandler, updateCoursePartsHandler } from '../../../handlers/course/courseParts/courseParts.handler';
import { authEmployee } from '../../../middleware/authenticate';


export const coursePartsRoutes = [
  {
    method: 'POST',
    url: `${API.admin_api}/courseParts`,
    preValidation: [authEmployee],
    handler: createCoursePartsHandler,
  },
  {
    method: 'PUT',
    url: `${API.admin_api}/courseParts`,
    preValidation: [authEmployee],
    handler: updateCoursePartsHandler,
  },
  {
    method: 'DELETE',
    url: `${API.admin_api}/courseParts/:_id`,
    preValidation: [authEmployee],
    handler: deleteOneCoursePartsHandler,
  }
];
