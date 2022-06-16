import { uploadFile } from '../../../upload/routes';
import { authUser } from '../../middleware/authenticate';
export const uploadFileRoutes = uploadFile(authUser);
