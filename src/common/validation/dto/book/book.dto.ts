import {
  IsMongoId, IsOptional,
  IsString, ValidateIf
} from 'class-validator';
import { Types } from 'mongoose';
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

  @IsOptional({ groups: [BookDtoGroup.UPDATE] })
  @IsString({ groups: [BookDtoGroup.CREATE, BookDtoGroup.UPDATE] })
  imgUrl: string;

  @IsOptional({ groups: [BookDtoGroup.CREATE, BookDtoGroup.UPDATE] })
  @ValidateIf((data, value) => value != null)
  @IsMongoId({ groups: [BookDtoGroup.CREATE, BookDtoGroup.UPDATE] })
  authorId: string;

  @ValidateIf((data, value) => value != null)
  @IsMongoId({ groups: [BookDtoGroup.CREATE,] })
  categoryId: Types.ObjectId;

}

export class BookGetDto extends PagingDto {
  @IsOptional({ groups: [BookDtoGroup.PAGENATION] })
  @IsMongoId({ groups: [BookDtoGroup.PAGENATION] })
  authorId: Types.ObjectId;

  @IsOptional({ groups: [BookDtoGroup.PAGENATION] })
  @IsMongoId({ groups: [BookDtoGroup.PAGENATION] })
  categoryId: Types.ObjectId;
}
