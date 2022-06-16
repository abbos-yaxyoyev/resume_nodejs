import { uploadFile } from '../../../upload/routes';
import { authEmployee } from '../../middleware/authenticate';
export const uploadFileRoutes = uploadFile(authEmployee);
