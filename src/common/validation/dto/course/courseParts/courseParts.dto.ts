import {
  IsMongoId,
  IsOptional,
  IsString, ValidateIf
} from 'class-validator';
import { CommonDto, CommonDtoGroup } from '../../../common.dto';

export class CoursePartsDtoGroup extends CommonDtoGroup { }

export class CoursePartsDto extends CommonDto {

  @IsOptional({ groups: [CoursePartsDtoGroup.CREATE, CoursePartsDtoGroup.UPDATE] })
  @ValidateIf((data, value) => value != null)
  @IsString({ groups: [CoursePartsDtoGroup.CREATE, CoursePartsDtoGroup.UPDATE] })
  imgUrl: string;

  //!descriptions
  @IsOptional({
    groups: [CoursePartsDtoGroup.CREATE, CoursePartsDtoGroup.UPDATE],
  })
  @ValidateIf((data, value) => value != null)
  @IsString({ groups: [CoursePartsDtoGroup.CREATE, CoursePartsDtoGroup.UPDATE] })
  description: string;

  @IsOptional({ groups: [CoursePartsDtoGroup.CREATE, CoursePartsDtoGroup.UPDATE] })
  @ValidateIf((data, value) => value != null)
  @IsMongoId({ groups: [CoursePartsDtoGroup.CREATE, CoursePartsDtoGroup.UPDATE] })
  courseId: string;
}
