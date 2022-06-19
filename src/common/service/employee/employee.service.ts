import { ModelType } from '@typegoose/typegoose/lib/types';
import { Types } from 'mongoose';
import { COLLECTIONS } from '../../constants/collections';
import { EmployeeException } from '../../db/models/employee/exception';
import { Employee, EmployeeModel } from '../../db/models/employee/models';
import { EmployeeGetDto } from '../../validation/dto/commonUser/employee/employee.dto';
import { CommonUserService } from '../baseUser/commonUser.service';

class EmployeeService extends CommonUserService<Employee> {
  constructor(model: ModelType<Employee>) {
    super(model, EmployeeException);
  }

  public async getPaging<T>(dto: EmployeeGetDto) {
    try {
      let query: any = { isDeleted: false };

      const $lookupRole = {
        $lookup: {
          from: COLLECTIONS.ROLE,
          foreignField: '_id',
          localField: 'roleId',
          as: 'role',
        },
      };

      const $unwindRole = {
        $unwind: {
          path: '$role',
          preserveNullAndEmptyArrays: true,
        },
      };

      const $projection = {
        $project: {
          _id: 1,
          fullName: 1,
          role: {
            _id: 1,
            name: 1,
          },
        },
      };

      const $pipline = [$lookupRole, $unwindRole, $projection];

      return await this.findPaging(query, dto, $pipline,);
    } catch (e) {
      console.log("error paging admin: ", e);
      throw EmployeeException.UnknownError(e);
    }
  }

  public async getEmployeeFull<T>(id: string,) {
    try {
      const $match: any = {
        $match: {
          _id: new Types.ObjectId(id),
          isDeleted: false
        },
      };


      const $lookupRole = {
        $lookup: {
          from: COLLECTIONS.ROLE,
          foreignField: '_id',
          localField: 'roleId',
          as: 'role',
        },
      };

      const $unwindRole = {
        $unwind: {
          path: '$role',
          preserveNullAndEmptyArrays: true,
        },
      };

      const $projection = {
        $project: {
          _id: 1,
          fullName: 1,
          role: {
            _id: 1,
            name: 1,
          },
        },
      };

      const $pipline = [$match, $lookupRole, $unwindRole, $projection];

      const data = await this.aggregate($pipline);
      if (!data || !data[0]) throw EmployeeException.NotFound(id)
      return data[0];
    } catch (error) {
      throw EmployeeException.UnknownError(error);
    }
  }
}

export const employeeService = new EmployeeService(EmployeeModel);
