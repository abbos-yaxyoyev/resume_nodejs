import {
  ArrayMinSize,
  IsArray, IsMongoId, IsOptional,
  IsString, ValidateIf
} from 'class-validator';
import { Types } from 'mongoose';
import { IsMongoIdCustom } from '../../../decorators/validateIt.decorators';
import { CommonDto, CommonDtoGroup } from '../../common.dto';
import { PagingDto } from '../paging.dto';

export class BookDtoGroup extends CommonDtoGroup {
  static BARCODE = 'barcode';
  static BOOKIDS = 'bookIds';
}
export class BookDto extends CommonDto {

  @IsOptional({ groups: [BookDtoGroup.UPDATE] })
  @IsString({ groups: [BookDtoGroup.CREATE, BookDtoGroup.UPDATE] })
  name: string;

  //!descriptions
  @IsOptional({
    groups: [BookDtoGroup.CREATE, BookDtoGroup.UPDATE],
  })
  @ValidateIf((data, value) => value != null)
  @IsString({ groups: [BookDtoGroup.CREATE, BookDtoGroup.UPDATE] })
  description: string;

  @IsOptional({ groups: [BookDtoGroup.UPDATE] })
  @IsString({ groups: [BookDtoGroup.CREATE, BookDtoGroup.UPDATE] })
  imgUrl: string;

  @IsOptional({ groups: [BookDtoGroup.CREATE, BookDtoGroup.UPDATE] })
  @ValidateIf((data, value) => value != null)
  @IsMongoId({ groups: [BookDtoGroup.CREATE, BookDtoGroup.UPDATE] })
  authorId: string;

  @IsOptional({ groups: [BookDtoGroup.UPDATE] })
  @IsArray({ groups: [BookDtoGroup.CREATE, BookDtoGroup.UPDATE] })
  @ArrayMinSize(1, { groups: [BookDtoGroup.CREATE, BookDtoGroup.UPDATE] })
  @IsMongoIdCustom({ each: true, groups: [BookDtoGroup.PAGENATION] })
  genreIds: Types.ObjectId[];

}

export class BookGetDto extends PagingDto {
  @IsOptional({ groups: [BookDtoGroup.PAGENATION] })
  @IsMongoId({ groups: [BookDtoGroup.PAGENATION] })
  authorId: Types.ObjectId;

  @IsOptional({ groups: [BookDtoGroup.PAGENATION] })
  @IsMongoId({ groups: [BookDtoGroup.PAGENATION] })
  genreId: Types.ObjectId;
}
