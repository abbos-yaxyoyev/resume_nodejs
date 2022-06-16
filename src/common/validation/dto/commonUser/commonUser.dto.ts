import { Transform } from 'class-transformer';
import { IsOptional, IsPhoneNumber, IsString, MinLength, ValidateIf } from 'class-validator';
import { CommonDto, CommonDtoGroup } from '../../common.dto';

export class CommonUserDtoGroup extends CommonDtoGroup {
  static LOGIN = 'LOGIN';
}

export class CommonUserDto extends CommonDto {
  @IsOptional({ groups: [CommonUserDtoGroup.UPDATE] })
  @MinLength(2, {
    message: 'Title is too short. Minimal length is 2 characters',
    groups: [CommonUserDtoGroup.CREATE, CommonUserDtoGroup.UPDATE],
  })
  @IsString({ groups: [CommonUserDtoGroup.CREATE, CommonUserDtoGroup.UPDATE] })
  firstName: string;

  @IsOptional({ groups: [CommonUserDtoGroup.UPDATE, CommonUserDtoGroup.CREATE] })
  @IsString({ groups: [CommonUserDtoGroup.CREATE, CommonUserDtoGroup.UPDATE] })
  lastName: string;

  @IsOptional({ groups: [CommonUserDtoGroup.UPDATE, CommonUserDtoGroup.CREATE] })
  @IsString({ groups: [CommonUserDtoGroup.CREATE, CommonUserDtoGroup.UPDATE] })
  imgUrl: string;

  @IsOptional({ groups: [CommonUserDtoGroup.UPDATE] })
  @Transform(({ value }) => `+${value?.replace(/[^0-9]/g, '')}`)
  @IsPhoneNumber(null, {
    groups: [CommonUserDtoGroup.CREATE, CommonUserDtoGroup.UPDATE, CommonUserDtoGroup.LOGIN],
  })
  phoneNumber: string;

  @IsOptional({ groups: [CommonUserDtoGroup.CREATE, CommonUserDtoGroup.UPDATE] })
  @MinLength(5, {
    message: 'password is too short. Minimal length is 5 characters',
    groups: [CommonUserDtoGroup.CREATE, CommonUserDtoGroup.UPDATE, CommonUserDtoGroup.LOGIN],
  })
  @IsString({ groups: [CommonUserDtoGroup.CREATE, CommonUserDtoGroup.UPDATE, CommonUserDtoGroup.LOGIN] })
  password: string;

  @IsOptional({ groups: [CommonUserDtoGroup.CREATE, CommonUserDtoGroup.UPDATE] })
  @ValidateIf((data, value) => value != null)
  @MinLength(2, {
    message: 'Title is too short. Minimal length is 2 characters',
    groups: [CommonUserDtoGroup.CREATE, CommonUserDtoGroup.UPDATE],
  })
  @IsString({ groups: [CommonUserDtoGroup.CREATE, CommonUserDtoGroup.UPDATE] })
  biography: string;
}
