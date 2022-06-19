import { IsOptional, IsString, MinLength } from 'class-validator';
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
  fullName: string;

  @IsOptional({ groups: [CommonUserDtoGroup.CREATE, CommonUserDtoGroup.UPDATE] })
  @MinLength(5, {
    message: 'password is too short. Minimal length is 5 characters',
    groups: [CommonUserDtoGroup.CREATE, CommonUserDtoGroup.UPDATE, CommonUserDtoGroup.LOGIN],
  })
  @IsString({ groups: [CommonUserDtoGroup.CREATE, CommonUserDtoGroup.UPDATE, CommonUserDtoGroup.LOGIN] })
  password: string;

}
