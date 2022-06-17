import md5 from 'md5';
import { Roles } from '../../common/constants/roles';
import { EmployeeException } from '../../common/db/models/employee/exception';
import { jwtSign } from '../../common/plugin/authPlugin';
import { employeeService } from '../../common/service/employee/employee.service';
import { roleService } from '../../common/service/employee/role/role.service';
import { EmployeeDto, EmployeeDtoGroup, EmployeeGetDto } from '../../common/validation/dto/commonUser/employee/employee.dto';
import { validateIt } from '../../common/validation/validate';

//! create employee by moderator
export async function createEmployeeHandler(request, reply) {
  try {

    await roleService.hasAccess(request.admin.roleId, Roles.EMPLOYEE_CREATE);

    const data = await validateIt(request.body, EmployeeDto, [EmployeeDtoGroup.CREATE]);

    data.password = md5(data.password)

    const { _id } = await employeeService.create(data);

    return reply.success(_id);

  } catch (e) {
    if (e instanceof EmployeeException) {
      throw e;
    } else {
      throw EmployeeException.UnknownError(e);
    }
  }
}


//! updates admin
export async function updateEmployeeHandler(request, reply) {
  try {
    await roleService.hasAccess(request.admin.roleId, Roles.EMPLOYEE_UPDATE);

    const data = await validateIt(request.body, EmployeeDto, [EmployeeDtoGroup.UPDATE]);

    if (data.password) {
      data.password = md5(data.password)
    }

    const admin = await employeeService.updateOne(data._id, data, { new: true });

    return reply.success(admin._id);

  } catch (e) {
    if (e instanceof EmployeeException) {
      throw e;
    } else {
      throw EmployeeException.UnknownError(e);
    }
  }
}

//! updates admin
export async function updateEmployeeProfileHandler(request, reply) {
  try {
    await roleService.hasAccess(request.admin.roleId, Roles.EMPLOYEE);

    request.body._id = request.admin._id.toString()

    const data = await validateIt(request.body, EmployeeDto, [EmployeeDtoGroup.UPDATE]);

    if (data.password) {
      data.password = md5(data.password)
    }

    const employee = await employeeService.updateOne(data._id, data, { new: true });

    return reply.success(employee._id);

  } catch (e) {
    if (e instanceof EmployeeException) {
      throw e;
    } else {
      throw EmployeeException.UnknownError(e);
    }
  }
}

export async function deleteOneEmployeeHandler(request, reply) {
  try {
    await roleService.hasAccess(request.admin.roleId, Roles.EMPLOYEE_DELETE);

    const data = await validateIt(request.params, EmployeeDto, [EmployeeDtoGroup.DELETE]);

    await employeeService.updateOne(data._id, data, { new: true });

    return reply.success(data._id);
  } catch (e) {
    if (e instanceof EmployeeException) {
      throw e;
    } else {
      throw EmployeeException.UnknownError(e);
    }
  }
}


//! get employees by paging
export async function getPagingEmployeeHandler(request, reply) {
  try {
    await roleService.hasAccess(request.admin.roleId, Roles.EMPLOYEE);

    const data = await validateIt(request.query, EmployeeGetDto, [EmployeeDtoGroup.PAGENATION]);

    const admins = await employeeService.getPaging(data);

    return reply.success(admins);

  } catch (e) {
    if (e instanceof EmployeeException) {
      throw e;
    } else {
      throw EmployeeException.UnknownError(e);
    }
  }
}


export async function getOneEmployeeHandler(request, reply) {

  try {
    await roleService.hasAccess(request.admin.roleId, Roles.EMPLOYEE);

    const data = await validateIt(request.params, EmployeeDto, [EmployeeDtoGroup.GET_BY_ID]);

    const admin = await employeeService.getEmployeeFull(data._id);

    return reply.success(admin);

  } catch (e) {
    if (e instanceof EmployeeException) {
      throw e;
    } else {
      throw EmployeeException.UnknownError(e);
    }
  }
}


//! get full profile by yourself
export async function getEmployeeProfileHandler(request, reply) {
  try {

    const admin = await employeeService.getEmployeeFull(request.admin._id.toString());

    return reply.success(admin);

  } catch (e) {
    if (e instanceof EmployeeException) {
      throw e;
    } else {
      throw EmployeeException.UnknownError(e);
    }
  }
}

export async function signInHandler(request, reply) {
  try {
    const data = await validateIt(request.body, EmployeeDto, [EmployeeDtoGroup.LOGIN]);

    const admin = await employeeService.findByPhone(data.phoneNumber);

    if (!admin) throw EmployeeException.NotFound(data.phoneNumber);

    if (md5(data.password) != admin.password) throw EmployeeException.InvalidPassword();

    const token = await jwtSign(request, { _id: admin._id });

    return reply.success({
      token,
      admin
    });
  } catch (e) {
    if (e instanceof EmployeeException) {
      throw e;
    } else {
      throw EmployeeException.UnknownError(e);
    }
  }
}