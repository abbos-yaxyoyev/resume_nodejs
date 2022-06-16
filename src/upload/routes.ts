import { API } from '../common/config';
import { uploadFileHandler } from './uploadHandler';

export function uploadFile(callback) {
  return [
    {
      method: 'POST',
      url: `${API.admin_api}/upload`,
      preValidation: [callback],
      handler: uploadFileHandler,
    },
  ];
}
