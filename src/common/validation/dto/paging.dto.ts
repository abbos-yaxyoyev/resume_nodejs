import { Expose, Transform } from 'class-transformer';
import { IsDateString, IsNumber, isNumberString, IsOptional, IsString } from 'class-validator';
import { CommonDto, CommonDtoGroup } from '../common.dto';

export class PagingDto extends CommonDto {
  @Transform(({ value }) => Number(value))
  @IsNumber(
    {
      allowInfinity: false,
      allowNaN: false,
      maxDecimalPlaces: 0,
    },
    {
      groups: [CommonDtoGroup.PAGENATION],
    },
  )
  limit!: number;

  @Transform(({ value }) => Number(value))
  @IsNumber(
    {
      allowInfinity: false,
      allowNaN: false,
      maxDecimalPlaces: 0,
    },
    {
      groups: [CommonDtoGroup.PAGENATION],
    },
  )
  page!: number;

  @Expose({ toClassOnly: true })
  @Transform(({ value }) => value?.trim() || '')
  @IsOptional({
    groups: [CommonDtoGroup.PAGENATION],
  })
  @IsString({
    groups: [CommonDtoGroup.PAGENATION],
  })
  search?: string;

  @IsOptional({
    groups: [CommonDtoGroup.PAGENATION],
  })
  @IsDateString(
    {
      strict: false,
    },
    {
      groups: [CommonDtoGroup.PAGENATION],
    },
  )
  updatedAt?: string;

  @IsOptional({
    groups: [CommonDtoGroup.PAGENATION],
  })
  @IsDateString(
    {
      strict: false,
    },
    {
      groups: [CommonDtoGroup.PAGENATION],
    },
  )
  createdAt?: string;

  @IsOptional({
    groups: [CommonDtoGroup.PAGENATION],
  })
  @IsString({
    groups: [CommonDtoGroup.PAGENATION],
  })
  sortBy?: string;

  @Transform(({ value }) => Number(value))
  @IsOptional({
    groups: [CommonDtoGroup.PAGENATION],
  })
  @IsNumber({
    allowInfinity: false,
    allowNaN: false,
  })
  asc?: number;
}
