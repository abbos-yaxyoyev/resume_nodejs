import { API } from '../../../../common/config';
import { getOneCoursePartsHandler } from '../../../handlers/course/courseParts/courseParts.handler';
import { authUser } from '../../../middleware/authenticate';


export const coursePartsRoutes = [

  {
    method: 'GET',
    url: `${API.user_api}/courseParts/:_id`,
    preValidation: [authUser],
    handler: getOneCoursePartsHandler,
  }
];
