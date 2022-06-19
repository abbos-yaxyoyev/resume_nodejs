import {
  IsMongoId, IsOptional,
  IsString, ValidateIf
} from 'class-validator';
import { CommonDto, CommonDtoGroup } from '../common.dto';
import { PagingDto } from './paging.dto';

export class CategoryDtoGroup extends CommonDtoGroup { }

export class CategoryDto extends CommonDto {
  @IsString({ groups: [CategoryDtoGroup.CREATE, CategoryDtoGroup.UPDATE] })
  name: string;

  @IsOptional({ groups: [CategoryDtoGroup.CREATE, CategoryDtoGroup.UPDATE] })
  @ValidateIf((data, value) => value != null)
  @IsString({ groups: [CategoryDtoGroup.CREATE, CategoryDtoGroup.UPDATE] })
  imgUrl: string;
}

export class CategoryGetDto extends PagingDto {
  @IsOptional({ groups: [CategoryDtoGroup.PAGENATION] })
  @IsMongoId({ groups: [CategoryDtoGroup.PAGENATION] })
  _id: string;
}
