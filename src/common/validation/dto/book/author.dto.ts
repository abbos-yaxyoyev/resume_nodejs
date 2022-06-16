import {
  IsDateString, IsOptional,
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

  @IsOptional({ groups: [AuthorDtoGroup.CREATE, AuthorDtoGroup.UPDATE] })
  @IsString({ groups: [AuthorDtoGroup.CREATE, AuthorDtoGroup.UPDATE] })
  biography: string;

  @IsOptional({
    groups: [AuthorDtoGroup.UPDATE],
  })
  @ValidateIf((data, value) => value != null)
  @IsDateString({ strict: true }, { groups: [AuthorDtoGroup.CREATE, AuthorDtoGroup.UPDATE] })
  dateOfbirth: Date;

  @IsOptional({
    groups: [AuthorDtoGroup.CREATE, AuthorDtoGroup.UPDATE],
  })
  @ValidateIf((data, value) => value != null)
  @IsDateString({ strict: true }, { groups: [AuthorDtoGroup.CREATE, AuthorDtoGroup.UPDATE] })
  dateOfdeath: Date;
}

//* for paging
export class AuthorGetDto extends PagingDto { }
