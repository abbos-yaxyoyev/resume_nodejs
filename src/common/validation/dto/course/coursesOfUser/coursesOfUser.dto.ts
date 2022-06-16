import {
  IsMongoId,
  IsOptional, ValidateIf
} from 'class-validator';
import { CommonDto, CommonDtoGroup } from '../../../common.dto';
import { PagingDto } from '../../paging.dto';

export class CourseOfUserDtoGroup extends CommonDtoGroup { }

export class CourseOfUserDto extends CommonDto {

  @IsOptional({ groups: [CourseOfUserDtoGroup.CREATE, CourseOfUserDtoGroup.UPDATE] })
  @ValidateIf((data, value) => value != null)
  @IsMongoId({ groups: [CourseOfUserDtoGroup.CREATE, CourseOfUserDtoGroup.UPDATE] })
  courseId: string;

  @IsOptional({ groups: [CourseOfUserDtoGroup.CREATE] })
  userId: string;
}

export class CoursesOfUserGetDto extends PagingDto {
  @IsOptional({ groups: [CourseOfUserDtoGroup.PAGENATION] })
  @IsMongoId({ groups: [CourseOfUserDtoGroup.PAGENATION] })
  courseId: string

  @IsOptional({ groups: [CourseOfUserDtoGroup.PAGENATION] })
  @IsMongoId({ groups: [CourseOfUserDtoGroup.PAGENATION] })
  userId: string
}
