import fs from 'fs';
import path from 'path';
import { CommonException, FileException } from '../common/constants/exceptions';
import { uploadType } from '../common/constants/fileUploadType';
import { UploadDto, UploadGroupDto } from '../common/validation/dto/upload/upload.dto';
import { validateIt } from './../common/validation/validate';

export async function uploadFileHandler(request, reply) {
  const type = request.body.type;

  try {
    const fileType = await validateIt({ type }, UploadDto, [UploadGroupDto.UPLOAD]);
    const files = request.raw.files;
    let url: string;

    if (!files) throw FileException.InvalidUploadType();
    const file = files['file'];

    if (fileType.type == uploadType.video) {
      url = 'preview/video' + '-' + file.md5 + path.extname(file.name);
    } else if (fileType.type == uploadType.img) {
      url = 'img/img' + '-' + file.md5 + path.extname(file.name);
    } else {
      console.log('Invalid upload type: ');
      throw FileException.InvalidUploadType();
    }

    const direction = path.join(__dirname, '../../');
    const wstream = fs.createWriteStream(direction + 'public/' + url);
    wstream.write(file.data);
    wstream.end();
    reply.success(url);
  } catch (e) {
    throw CommonException.UnknownError(e);
  }
}
