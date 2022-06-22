import {
  IsMongoId,
  IsOptional,
  IsString
} from 'class-validator';
import { CommonDto, CommonDtoGroup } from '../../../common.dto';

export class CoursePartsDtoGroup extends CommonDtoGroup { }

export class CoursePartsDto extends CommonDto {

  @IsOptional({ groups: [CoursePartsDtoGroup.CREATE, CoursePartsDtoGroup.UPDATE] })
  @IsString({ groups: [CoursePartsDtoGroup.CREATE, CoursePartsDtoGroup.UPDATE] })
  imgUrl: string;

  @IsOptional({ groups: [CoursePartsDtoGroup.CREATE, CoursePartsDtoGroup.UPDATE] })
  @IsString({ groups: [CoursePartsDtoGroup.CREATE, CoursePartsDtoGroup.UPDATE] })
  videoUrl: string;

  //!descriptions
  @IsOptional({
    groups: [CoursePartsDtoGroup.CREATE, CoursePartsDtoGroup.UPDATE],
  })
  @IsString({ groups: [CoursePartsDtoGroup.CREATE, CoursePartsDtoGroup.UPDATE] })
  description: string;

  @IsOptional({ groups: [CoursePartsDtoGroup.UPDATE] })
  @IsMongoId({ groups: [CoursePartsDtoGroup.CREATE, CoursePartsDtoGroup.UPDATE] })
  courseId: string;
}
