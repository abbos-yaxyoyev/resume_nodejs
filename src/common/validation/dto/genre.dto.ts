import {
  IsMongoId, IsOptional,
  IsString, ValidateIf
} from 'class-validator';
import { CommonDto, CommonDtoGroup } from '../common.dto';
import { PagingDto } from './paging.dto';

export class GenreDtoGroup extends CommonDtoGroup { }

export class GenreDto extends CommonDto {
  @IsString({ groups: [GenreDtoGroup.CREATE, GenreDtoGroup.UPDATE] })
  name: string;

  @IsOptional({ groups: [GenreDtoGroup.CREATE, GenreDtoGroup.UPDATE] })
  @ValidateIf((data, value) => value != null)
  @IsMongoId({ groups: [GenreDtoGroup.CREATE, GenreDtoGroup.UPDATE] })
  parentId: string;

  @IsOptional({ groups: [GenreDtoGroup.CREATE, GenreDtoGroup.UPDATE] })
  @ValidateIf((data, value) => value != null)
  @IsString({ groups: [GenreDtoGroup.CREATE, GenreDtoGroup.UPDATE] })
  imgUrl: string;
}

export class GenreGetDto extends PagingDto {
  @IsOptional({ groups: [GenreDtoGroup.PAGENATION] })
  @IsMongoId({ groups: [GenreDtoGroup.PAGENATION] })
  _id: string;
}
