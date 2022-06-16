import { PagingDto } from '../../paging.dto';
import { CommonUserDto, CommonUserDtoGroup } from '../commonUser.dto';

export class UserDtoGroup extends CommonUserDtoGroup { }

export class UserDto extends CommonUserDto { }

export class UserGetDto extends PagingDto { }
