import { IsBoolean, IsOptional, IsString } from 'class-validator';
import { CommonDto, CommonDtoGroup } from '../../../../common.dto';
import { PagingDto } from '../../../paging.dto';

export class RoleDtoGroup extends CommonDtoGroup { }

export class RoleGetDto extends PagingDto { }

export class RoleDto extends CommonDto {
  @IsString({
    groups: [RoleDtoGroup.UPDATE, RoleDtoGroup.CREATE],
  })
  name: string;

  //genres 
  @IsBoolean({
    groups: [RoleDtoGroup.CREATE, RoleDtoGroup.UPDATE]
  })
  @IsOptional({
    groups: [RoleDtoGroup.CREATE, RoleDtoGroup.UPDATE]
  })
  genre: boolean;

  @IsBoolean({
    groups: [RoleDtoGroup.CREATE, RoleDtoGroup.UPDATE]
  })
  @IsOptional({
    groups: [RoleDtoGroup.CREATE, RoleDtoGroup.UPDATE]
  })
  genreCreate: boolean;

  @IsBoolean({
    groups: [RoleDtoGroup.CREATE, RoleDtoGroup.UPDATE]
  })
  @IsOptional({
    groups: [RoleDtoGroup.CREATE, RoleDtoGroup.UPDATE]
  })
  genreUpdate: boolean;

  @IsBoolean({
    groups: [RoleDtoGroup.CREATE, RoleDtoGroup.UPDATE]
  })
  @IsOptional({
    groups: [RoleDtoGroup.CREATE, RoleDtoGroup.UPDATE]
  })
  genreDelete: boolean;

  /** *********************************************** */

  //books
  @IsBoolean({
    groups: [RoleDtoGroup.CREATE, RoleDtoGroup.UPDATE]
  })
  @IsOptional({
    groups: [RoleDtoGroup.CREATE, RoleDtoGroup.UPDATE]
  })
  book: boolean;

  @IsBoolean({
    groups: [RoleDtoGroup.CREATE, RoleDtoGroup.UPDATE]
  })
  @IsOptional({
    groups: [RoleDtoGroup.CREATE, RoleDtoGroup.UPDATE]
  })
  bookCreate: boolean;

  @IsBoolean({
    groups: [RoleDtoGroup.CREATE, RoleDtoGroup.UPDATE]
  })
  @IsOptional({
    groups: [RoleDtoGroup.CREATE, RoleDtoGroup.UPDATE]
  })
  bookUpdate: boolean;

  @IsBoolean({
    groups: [RoleDtoGroup.CREATE, RoleDtoGroup.UPDATE]
  })
  @IsOptional({
    groups: [RoleDtoGroup.CREATE, RoleDtoGroup.UPDATE]
  })
  bookDelete: boolean;

  /** ******************************* */
  //user
  @IsBoolean({
    groups: [RoleDtoGroup.CREATE, RoleDtoGroup.UPDATE]
  })
  @IsOptional({
    groups: [RoleDtoGroup.CREATE, RoleDtoGroup.UPDATE]
  })
  user: boolean;

  @IsBoolean({
    groups: [RoleDtoGroup.CREATE, RoleDtoGroup.UPDATE]
  })
  @IsOptional({
    groups: [RoleDtoGroup.CREATE, RoleDtoGroup.UPDATE]
  })
  userCreate: boolean;

  @IsBoolean({
    groups: [RoleDtoGroup.CREATE, RoleDtoGroup.UPDATE]
  })
  @IsOptional({
    groups: [RoleDtoGroup.CREATE, RoleDtoGroup.UPDATE]
  })
  userUpdate: boolean;

  @IsBoolean({
    groups: [RoleDtoGroup.CREATE, RoleDtoGroup.UPDATE]
  })
  @IsOptional({
    groups: [RoleDtoGroup.CREATE, RoleDtoGroup.UPDATE]
  })
  userDelete: boolean;

  /** ******************************* */

  //author
  @IsBoolean({
    groups: [RoleDtoGroup.CREATE, RoleDtoGroup.UPDATE]
  })
  @IsOptional({
    groups: [RoleDtoGroup.CREATE, RoleDtoGroup.UPDATE]
  })
  author: boolean;

  @IsBoolean({
    groups: [RoleDtoGroup.CREATE, RoleDtoGroup.UPDATE]
  })
  @IsOptional({
    groups: [RoleDtoGroup.CREATE, RoleDtoGroup.UPDATE]
  })
  authorCreate: boolean;

  @IsBoolean({
    groups: [RoleDtoGroup.CREATE, RoleDtoGroup.UPDATE]
  })
  @IsOptional({
    groups: [RoleDtoGroup.CREATE, RoleDtoGroup.UPDATE]
  })
  authorUpdate: boolean;

  @IsBoolean({
    groups: [RoleDtoGroup.CREATE, RoleDtoGroup.UPDATE]
  })
  @IsOptional({
    groups: [RoleDtoGroup.CREATE, RoleDtoGroup.UPDATE]
  })
  authorDelete: boolean;

  /** ******************************* */

  //role
  @IsBoolean({
    groups: [RoleDtoGroup.CREATE, RoleDtoGroup.UPDATE]
  })
  @IsOptional({
    groups: [RoleDtoGroup.CREATE, RoleDtoGroup.UPDATE]
  })
  role: boolean;

  @IsBoolean({
    groups: [RoleDtoGroup.CREATE, RoleDtoGroup.UPDATE]
  })
  @IsOptional({
    groups: [RoleDtoGroup.CREATE, RoleDtoGroup.UPDATE]
  })
  roleCreate: boolean;

  @IsBoolean({
    groups: [RoleDtoGroup.CREATE, RoleDtoGroup.UPDATE]
  })
  @IsOptional({
    groups: [RoleDtoGroup.CREATE, RoleDtoGroup.UPDATE]
  })
  roleUpdate: boolean;

  @IsBoolean({
    groups: [RoleDtoGroup.CREATE, RoleDtoGroup.UPDATE]
  })
  @IsOptional({
    groups: [RoleDtoGroup.CREATE, RoleDtoGroup.UPDATE]
  })
  roleDelete: boolean;

  /** ******************************* */

  //employee
  @IsBoolean({
    groups: [RoleDtoGroup.CREATE, RoleDtoGroup.UPDATE]
  })
  @IsOptional({
    groups: [RoleDtoGroup.CREATE, RoleDtoGroup.UPDATE]
  })
  employee: boolean;

  @IsBoolean({
    groups: [RoleDtoGroup.CREATE, RoleDtoGroup.UPDATE]
  })
  @IsOptional({
    groups: [RoleDtoGroup.CREATE, RoleDtoGroup.UPDATE]
  })
  employeeCreate: boolean;

  @IsBoolean({
    groups: [RoleDtoGroup.CREATE, RoleDtoGroup.UPDATE]
  })
  @IsOptional({
    groups: [RoleDtoGroup.CREATE, RoleDtoGroup.UPDATE]
  })
  employeeUpdate: boolean;

  @IsBoolean({
    groups: [RoleDtoGroup.CREATE, RoleDtoGroup.UPDATE]
  })
  @IsOptional({
    groups: [RoleDtoGroup.CREATE, RoleDtoGroup.UPDATE]
  })
  employeeDelete: boolean;

  /** ******************************* */

  //course
  @IsBoolean({
    groups: [RoleDtoGroup.CREATE, RoleDtoGroup.UPDATE]
  })
  @IsOptional({
    groups: [RoleDtoGroup.CREATE, RoleDtoGroup.UPDATE]
  })
  course: boolean;

  @IsBoolean({
    groups: [RoleDtoGroup.CREATE, RoleDtoGroup.UPDATE]
  })
  @IsOptional({
    groups: [RoleDtoGroup.CREATE, RoleDtoGroup.UPDATE]
  })
  courseCreate: boolean;

  @IsBoolean({
    groups: [RoleDtoGroup.CREATE, RoleDtoGroup.UPDATE]
  })
  @IsOptional({
    groups: [RoleDtoGroup.CREATE, RoleDtoGroup.UPDATE]
  })
  courseUpdate: boolean;

  @IsBoolean({
    groups: [RoleDtoGroup.CREATE, RoleDtoGroup.UPDATE]
  })
  @IsOptional({
    groups: [RoleDtoGroup.CREATE, RoleDtoGroup.UPDATE]
  })
  courseDelete: boolean;

  /** ******************************* */
}
