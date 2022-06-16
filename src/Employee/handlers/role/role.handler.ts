import { Roles } from '../../../common/constants/roles';
import { RoleException } from '../../../common/db/models/employee/role/exceptions';
import { roleService } from '../../../common/service/employee/role/role.service';
import { RoleDto, RoleDtoGroup, RoleGetDto } from '../../../common/validation/dto/commonUser/employee/role/role.dto';
import { validateIt } from '../../../common/validation/validate';

export async function createRoleHandler(request, reply) {
  try {
    await roleService.hasAccess(request.admin.roleId.toString(), Roles.ROLE_CREATE);

    const data = await validateIt(request.body, RoleDto, [RoleDtoGroup.CREATE]);

    let role = await roleService.create(data);

    return reply.success(role._id);

  } catch (e) {
    if (e instanceof RoleException) {
      throw e;
    } else {
      throw RoleException.UnknownError(e);
    }
  }
}

export async function getOneRoledHandler(request, reply) {
  try {
    await roleService.hasAccess(request.admin.roleId, Roles.ROLE);

    const data = await validateIt(request.params, RoleDto, [RoleDtoGroup.GET_BY_ID]);

    let role = await roleService.findByIdError(data._id);

    return reply.success(role);

  } catch (e) {
    if (e instanceof RoleException) {
      throw e;
    } else {
      throw RoleException.UnknownError(e);
    }
  }
}

export async function updateRoleHandler(request, reply) {
  try {
    await roleService.hasAccess(request.admin.roleId, Roles.ROLE_UPDATE);

    const data = await validateIt(request.body, RoleDto, [RoleDtoGroup.UPDATE]);

    await roleService.updateOne(data._id, data, { new: true });

    return reply.success(data._id);

  } catch (e) {
    if (e instanceof RoleException) {
      throw e;
    } else {
      throw RoleException.UnknownError(e);
    }
  }
}

export async function deleteOneRoleHandler(request, reply) {
  try {
    await roleService.hasAccess(request.admin.roleId, Roles.ROLE_DELETE);

    const data = await validateIt(request.params, RoleDto, [RoleDtoGroup.DELETE]);

    await roleService.checkEmployeeRole(data._id);

    const role = await roleService.updateOneByQuery({ _id: data._id, }, { isDeleted: true })

    return reply.success(role._id);

  } catch (e) {
    if (e instanceof RoleException) {
      throw e;
    } else {
      throw RoleException.UnknownError(e);
    }
  }
}

export async function getPagingRoleHandler(request, reply) {
  try {
    await roleService.hasAccess(request.admin.roleId, Roles.ROLE);

    const data = await validateIt(request.query, RoleGetDto, [RoleDtoGroup.PAGENATION]);

    const role = await roleService.getPaging(data);

    return reply.success(role);

  } catch (e) {
    if (e instanceof RoleException) {
      throw e;
    } else {
      throw RoleException.UnknownError(e);
    }
  }
}