import { IsMongoId, IsOptional, IsString, MinLength } from 'class-validator';
import { PagingDto } from '../../paging.dto';
import { CommonUserDto, CommonUserDtoGroup } from '../commonUser.dto';

export class EmployeeDtoGroup extends CommonUserDtoGroup { }

export class EmployeeDto extends CommonUserDto {
  @IsOptional({ groups: [EmployeeDtoGroup.UPDATE] })
  @IsMongoId({ groups: [EmployeeDtoGroup.UPDATE] })
  _id: string;

  @IsMongoId({ groups: [EmployeeDtoGroup.CREATE, EmployeeDtoGroup.UPDATE] })
  roleId: string;

  @IsOptional({ groups: [EmployeeDtoGroup.UPDATE] })
  @MinLength(6, { groups: [EmployeeDtoGroup.CREATE, EmployeeDtoGroup.UPDATE, EmployeeDtoGroup.LOGIN] })
  @IsString({ groups: [EmployeeDtoGroup.CREATE, EmployeeDtoGroup.UPDATE, EmployeeDtoGroup.LOGIN] })
  password: string;
}

export class EmployeeGetDto extends PagingDto { }