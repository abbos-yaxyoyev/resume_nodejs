import { ModelType } from '@typegoose/typegoose/lib/types';
import { Types } from 'mongoose';
import { EmployeeException } from '../../../db/models/employee/exception';
import { RoleException } from '../../../db/models/employee/role/exceptions';
import { Role, RoleModel } from '../../../db/models/employee/role/models';
import { RoleGetDto } from '../../../validation/dto/commonUser/employee/role/role.dto';
import { CommonServices } from '../../common.service';

class RoleService extends CommonServices<Role> {

  constructor(model: ModelType<Role>) {
    super(model, RoleException);
  }

  public async findByIdError(id) {
    const role = await this.findById(id);
    if (!role) throw RoleException.NotFound(id);
    return role;
  }

  public async hasAccess(id: string, access: string) {
    const role = await this.findById(id);
    console.log("roles: ", role);
    console.log("role[access]: ", role[access]);
    console.log(" role.isDeleted: ", role.isDeleted);

    if (!role[access] || role.isDeleted) throw EmployeeException.NotEnoughPermission();
  }

  public async checkEmployeeRole(id: string) {
    try {
      const $pipeline = [
        {
          $match: {
            _id: new Types.ObjectId(id),
          },
        },
        {
          $lookup: {
            from: 'employees',
            localField: '_id',
            foreignField: 'roleId',
            as: 'employee',
          },
        },
        {
          $unwind: {
            path: '$employee',
          },
        },
        {
          $replaceRoot: {
            newRoot: '$employee',
          },
        },
        {
          $match: {
            deletedAt: null,
            isDeleted: false,
          },
        },
        {
          $replaceWith: {
            adminId: '$_id',
            firstName: '$firstName',
            lastName: '$lastName',
            phoneNumber: '$phoneNumber',
            createdAt: '$createdAt',
            updatedAt: '$updatedAt',
          },
        },
      ];

      const data = await this.aggregate($pipeline);
      if (data[0]) throw RoleException.RoleOfEmployee(id)
      return data;
    } catch (e) {
      if (e instanceof RoleException) {
        throw e;
      } else {
        throw RoleException.UnknownError(e);
      }
    }
  }

  public async getPaging<T>(dto: RoleGetDto) {
    try {
      let query = {
        isDeleted: false,
      };

      const $projection = {
        $project: {
          __v: 0
        },
      };

      const $pipline = [$projection];

      return await this.findPaging(query, dto, $pipline);
    } catch (e) {
      throw RoleException.UnknownError(e);
    }
  }

}

export const roleService = new RoleService(RoleModel);
