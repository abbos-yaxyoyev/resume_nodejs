import { IsEnum } from 'class-validator';
import { uploadType } from '../../../constants/fileUploadType';

export class UploadGroupDto {
  static UPLOAD = 'upload';
}

export class UploadDto {
  @IsEnum(uploadType, {
    groups: [UploadGroupDto.UPLOAD],
  })
  type: uploadType;
}
