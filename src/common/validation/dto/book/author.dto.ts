import {
  IsOptional,
  IsString, MinLength, ValidateIf
} from 'class-validator';
import { CommonDto, CommonDtoGroup } from '../../common.dto';
import { PagingDto } from '../paging.dto';

export class AuthorDtoGroup extends CommonDtoGroup { }


export class AuthorDto extends CommonDto {
  @MinLength(3, {
    message: 'Title is too short. Minimal length is 3 characters',
    groups: [AuthorDtoGroup.CREATE, AuthorDtoGroup.UPDATE],
  })
  @IsString({ groups: [AuthorDtoGroup.CREATE, AuthorDtoGroup.UPDATE] })
  fullName: string;

  @IsOptional({ groups: [AuthorDtoGroup.CREATE, AuthorDtoGroup.UPDATE] })
  @ValidateIf((data, value) => value != null)
  @IsString({ groups: [AuthorDtoGroup.CREATE, AuthorDtoGroup.UPDATE] })
  imgUrl: string;
}

//* for paging
export class AuthorGetDto extends PagingDto { }
