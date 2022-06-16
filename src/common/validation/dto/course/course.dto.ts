import {
  IsOptional,
  IsString, ValidateIf
} from 'class-validator';
import { CommonDto, CommonDtoGroup } from '../../common.dto';
import { PagingDto } from '../paging.dto';

export class CourseDtoGroup extends CommonDtoGroup { }

export class CourseDto extends CommonDto {
  @IsString({ groups: [CourseDtoGroup.CREATE, CourseDtoGroup.UPDATE] })
  name: string;

  @IsOptional({ groups: [CourseDtoGroup.CREATE, CourseDtoGroup.UPDATE] })
  @ValidateIf((data, value) => value != null)
  @IsString({ groups: [CourseDtoGroup.CREATE, CourseDtoGroup.UPDATE] })
  imgUrl: string;

  //!descriptions
  @IsOptional({
    groups: [CourseDtoGroup.CREATE, CourseDtoGroup.UPDATE],
  })
  @ValidateIf((data, value) => value != null)
  @IsString({ groups: [CourseDtoGroup.CREATE, CourseDtoGroup.UPDATE] })
  description: string;
}

export class CourseGetDto extends PagingDto { }
