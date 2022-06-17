import { Roles } from '../../common/constants/roles';
import { UserException } from '../../common/db/models/user/exception';
import { roleService } from '../../common/service/employee/role/role.service';
import { userService } from '../../common/service/user/user.service';
import { UserDtoGroup, UserGetDto } from '../../common/validation/dto/commonUser/user/user.dto';
import { validateIt } from '../../common/validation/validate';


export async function getPagingUserHandler(request, reply) {
  try {
    await roleService.hasAccess(request.admin.roleId, Roles.EMPLOYEE);

    const data = await validateIt(request.query, UserGetDto, [UserDtoGroup.PAGENATION]);

    const users = await userService.getPaging(data);

    return reply.success(users);

  } catch (e) {
    if (e instanceof UserException) {
      throw e;
    } else {
      throw UserException.UnknownError(e);
    }
  }
}
