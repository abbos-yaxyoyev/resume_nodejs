"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.roleService = void 0;
const mongoose_1 = require("mongoose");
const exception_1 = require("../../../db/models/employee/exception");
const exceptions_1 = require("../../../db/models/employee/role/exceptions");
const models_1 = require("../../../db/models/employee/role/models");
const common_service_1 = require("../../common.service");
class RoleService extends common_service_1.CommonServices {
    constructor(model) {
        super(model, exceptions_1.RoleException);
    }
    async findByIdError(id) {
        const role = await this.findById(id);
        if (!role)
            throw exceptions_1.RoleException.NotFound(id);
        return role;
    }
    async hasAccess(id, access) {
        const role = await this.findById(id);
        if (!role[access] || role.isDeleted)
            throw exception_1.EmployeeException.NotEnoughPermission();
    }
    async checkEmployeeRole(id) {
        try {
            const $pipeline = [
                {
                    $match: {
                        _id: new mongoose_1.Types.ObjectId(id),
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
            if (data[0])
                throw exceptions_1.RoleException.RoleOfEmployee(id);
            return data;
        }
        catch (e) {
            if (e instanceof exceptions_1.RoleException) {
                throw e;
            }
            else {
                throw exceptions_1.RoleException.UnknownError(e);
            }
        }
    }
    async getPaging(dto) {
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
        }
        catch (e) {
            throw exceptions_1.RoleException.UnknownError(e);
        }
    }
}
exports.roleService = new RoleService(models_1.RoleModel);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm9sZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL2NvbW1vbi9zZXJ2aWNlL2VtcGxveWVlL3JvbGUvcm9sZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUNBLHVDQUFpQztBQUNqQyxxRUFBMEU7QUFDMUUsNEVBQTRFO0FBQzVFLG9FQUEwRTtBQUUxRSx5REFBc0Q7QUFFdEQsTUFBTSxXQUFZLFNBQVEsK0JBQW9CO0lBRTVDLFlBQVksS0FBc0I7UUFDaEMsS0FBSyxDQUFDLEtBQUssRUFBRSwwQkFBYSxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQUVNLEtBQUssQ0FBQyxhQUFhLENBQUMsRUFBRTtRQUMzQixNQUFNLElBQUksR0FBRyxNQUFNLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDckMsSUFBSSxDQUFDLElBQUk7WUFBRSxNQUFNLDBCQUFhLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQzVDLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVNLEtBQUssQ0FBQyxTQUFTLENBQUMsRUFBVSxFQUFFLE1BQWM7UUFDL0MsTUFBTSxJQUFJLEdBQUcsTUFBTSxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksSUFBSSxDQUFDLFNBQVM7WUFBRSxNQUFNLDZCQUFpQixDQUFDLG1CQUFtQixFQUFFLENBQUM7SUFDckYsQ0FBQztJQUVNLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxFQUFVO1FBQ3ZDLElBQUk7WUFDRixNQUFNLFNBQVMsR0FBRztnQkFDaEI7b0JBQ0UsTUFBTSxFQUFFO3dCQUNOLEdBQUcsRUFBRSxJQUFJLGdCQUFLLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQztxQkFDNUI7aUJBQ0Y7Z0JBQ0Q7b0JBQ0UsT0FBTyxFQUFFO3dCQUNQLElBQUksRUFBRSxXQUFXO3dCQUNqQixVQUFVLEVBQUUsS0FBSzt3QkFDakIsWUFBWSxFQUFFLFFBQVE7d0JBQ3RCLEVBQUUsRUFBRSxVQUFVO3FCQUNmO2lCQUNGO2dCQUNEO29CQUNFLE9BQU8sRUFBRTt3QkFDUCxJQUFJLEVBQUUsV0FBVztxQkFDbEI7aUJBQ0Y7Z0JBQ0Q7b0JBQ0UsWUFBWSxFQUFFO3dCQUNaLE9BQU8sRUFBRSxXQUFXO3FCQUNyQjtpQkFDRjtnQkFDRDtvQkFDRSxNQUFNLEVBQUU7d0JBQ04sU0FBUyxFQUFFLElBQUk7d0JBQ2YsU0FBUyxFQUFFLEtBQUs7cUJBQ2pCO2lCQUNGO2dCQUNEO29CQUNFLFlBQVksRUFBRTt3QkFDWixPQUFPLEVBQUUsTUFBTTt3QkFDZixTQUFTLEVBQUUsWUFBWTt3QkFDdkIsUUFBUSxFQUFFLFdBQVc7d0JBQ3JCLFdBQVcsRUFBRSxjQUFjO3dCQUMzQixTQUFTLEVBQUUsWUFBWTt3QkFDdkIsU0FBUyxFQUFFLFlBQVk7cUJBQ3hCO2lCQUNGO2FBQ0YsQ0FBQztZQUVGLE1BQU0sSUFBSSxHQUFHLE1BQU0sSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUM3QyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUM7Z0JBQUUsTUFBTSwwQkFBYSxDQUFDLGNBQWMsQ0FBQyxFQUFFLENBQUMsQ0FBQTtZQUNuRCxPQUFPLElBQUksQ0FBQztTQUNiO1FBQUMsT0FBTyxDQUFDLEVBQUU7WUFDVixJQUFJLENBQUMsWUFBWSwwQkFBYSxFQUFFO2dCQUM5QixNQUFNLENBQUMsQ0FBQzthQUNUO2lCQUFNO2dCQUNMLE1BQU0sMEJBQWEsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDckM7U0FDRjtJQUNILENBQUM7SUFFTSxLQUFLLENBQUMsU0FBUyxDQUFJLEdBQWU7UUFDdkMsSUFBSTtZQUNGLElBQUksS0FBSyxHQUFHO2dCQUNWLFNBQVMsRUFBRSxLQUFLO2FBQ2pCLENBQUM7WUFFRixNQUFNLFdBQVcsR0FBRztnQkFDbEIsUUFBUSxFQUFFO29CQUNSLEdBQUcsRUFBRSxDQUFDO2lCQUNQO2FBQ0YsQ0FBQztZQUVGLE1BQU0sUUFBUSxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUM7WUFFL0IsT0FBTyxNQUFNLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxFQUFFLEdBQUcsRUFBRSxRQUFRLENBQUMsQ0FBQztTQUNwRDtRQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ1YsTUFBTSwwQkFBYSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNyQztJQUNILENBQUM7Q0FFRjtBQUVZLFFBQUEsV0FBVyxHQUFHLElBQUksV0FBVyxDQUFDLGtCQUFTLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vZGVsVHlwZSB9IGZyb20gJ0B0eXBlZ29vc2UvdHlwZWdvb3NlL2xpYi90eXBlcyc7XHJcbmltcG9ydCB7IFR5cGVzIH0gZnJvbSAnbW9uZ29vc2UnO1xyXG5pbXBvcnQgeyBFbXBsb3llZUV4Y2VwdGlvbiB9IGZyb20gJy4uLy4uLy4uL2RiL21vZGVscy9lbXBsb3llZS9leGNlcHRpb24nO1xyXG5pbXBvcnQgeyBSb2xlRXhjZXB0aW9uIH0gZnJvbSAnLi4vLi4vLi4vZGIvbW9kZWxzL2VtcGxveWVlL3JvbGUvZXhjZXB0aW9ucyc7XHJcbmltcG9ydCB7IFJvbGUsIFJvbGVNb2RlbCB9IGZyb20gJy4uLy4uLy4uL2RiL21vZGVscy9lbXBsb3llZS9yb2xlL21vZGVscyc7XHJcbmltcG9ydCB7IFJvbGVHZXREdG8gfSBmcm9tICcuLi8uLi8uLi92YWxpZGF0aW9uL2R0by9jb21tb25Vc2VyL2VtcGxveWVlL3JvbGUvcm9sZS5kdG8nO1xyXG5pbXBvcnQgeyBDb21tb25TZXJ2aWNlcyB9IGZyb20gJy4uLy4uL2NvbW1vbi5zZXJ2aWNlJztcclxuXHJcbmNsYXNzIFJvbGVTZXJ2aWNlIGV4dGVuZHMgQ29tbW9uU2VydmljZXM8Um9sZT4ge1xyXG5cclxuICBjb25zdHJ1Y3Rvcihtb2RlbDogTW9kZWxUeXBlPFJvbGU+KSB7XHJcbiAgICBzdXBlcihtb2RlbCwgUm9sZUV4Y2VwdGlvbik7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgYXN5bmMgZmluZEJ5SWRFcnJvcihpZCkge1xyXG4gICAgY29uc3Qgcm9sZSA9IGF3YWl0IHRoaXMuZmluZEJ5SWQoaWQpO1xyXG4gICAgaWYgKCFyb2xlKSB0aHJvdyBSb2xlRXhjZXB0aW9uLk5vdEZvdW5kKGlkKTtcclxuICAgIHJldHVybiByb2xlO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGFzeW5jIGhhc0FjY2VzcyhpZDogc3RyaW5nLCBhY2Nlc3M6IHN0cmluZykge1xyXG4gICAgY29uc3Qgcm9sZSA9IGF3YWl0IHRoaXMuZmluZEJ5SWQoaWQpO1xyXG4gICAgaWYgKCFyb2xlW2FjY2Vzc10gfHwgcm9sZS5pc0RlbGV0ZWQpIHRocm93IEVtcGxveWVlRXhjZXB0aW9uLk5vdEVub3VnaFBlcm1pc3Npb24oKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBhc3luYyBjaGVja0VtcGxveWVlUm9sZShpZDogc3RyaW5nKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCAkcGlwZWxpbmUgPSBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgJG1hdGNoOiB7XHJcbiAgICAgICAgICAgIF9pZDogbmV3IFR5cGVzLk9iamVjdElkKGlkKSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAkbG9va3VwOiB7XHJcbiAgICAgICAgICAgIGZyb206ICdlbXBsb3llZXMnLFxyXG4gICAgICAgICAgICBsb2NhbEZpZWxkOiAnX2lkJyxcclxuICAgICAgICAgICAgZm9yZWlnbkZpZWxkOiAncm9sZUlkJyxcclxuICAgICAgICAgICAgYXM6ICdlbXBsb3llZScsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgJHVud2luZDoge1xyXG4gICAgICAgICAgICBwYXRoOiAnJGVtcGxveWVlJyxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAkcmVwbGFjZVJvb3Q6IHtcclxuICAgICAgICAgICAgbmV3Um9vdDogJyRlbXBsb3llZScsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgJG1hdGNoOiB7XHJcbiAgICAgICAgICAgIGRlbGV0ZWRBdDogbnVsbCxcclxuICAgICAgICAgICAgaXNEZWxldGVkOiBmYWxzZSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAkcmVwbGFjZVdpdGg6IHtcclxuICAgICAgICAgICAgYWRtaW5JZDogJyRfaWQnLFxyXG4gICAgICAgICAgICBmaXJzdE5hbWU6ICckZmlyc3ROYW1lJyxcclxuICAgICAgICAgICAgbGFzdE5hbWU6ICckbGFzdE5hbWUnLFxyXG4gICAgICAgICAgICBwaG9uZU51bWJlcjogJyRwaG9uZU51bWJlcicsXHJcbiAgICAgICAgICAgIGNyZWF0ZWRBdDogJyRjcmVhdGVkQXQnLFxyXG4gICAgICAgICAgICB1cGRhdGVkQXQ6ICckdXBkYXRlZEF0JyxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgXTtcclxuXHJcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCB0aGlzLmFnZ3JlZ2F0ZSgkcGlwZWxpbmUpO1xyXG4gICAgICBpZiAoZGF0YVswXSkgdGhyb3cgUm9sZUV4Y2VwdGlvbi5Sb2xlT2ZFbXBsb3llZShpZClcclxuICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIGlmIChlIGluc3RhbmNlb2YgUm9sZUV4Y2VwdGlvbikge1xyXG4gICAgICAgIHRocm93IGU7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhyb3cgUm9sZUV4Y2VwdGlvbi5Vbmtub3duRXJyb3IoZSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBhc3luYyBnZXRQYWdpbmc8VD4oZHRvOiBSb2xlR2V0RHRvKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBsZXQgcXVlcnkgPSB7XHJcbiAgICAgICAgaXNEZWxldGVkOiBmYWxzZSxcclxuICAgICAgfTtcclxuXHJcbiAgICAgIGNvbnN0ICRwcm9qZWN0aW9uID0ge1xyXG4gICAgICAgICRwcm9qZWN0OiB7XHJcbiAgICAgICAgICBfX3Y6IDBcclxuICAgICAgICB9LFxyXG4gICAgICB9O1xyXG5cclxuICAgICAgY29uc3QgJHBpcGxpbmUgPSBbJHByb2plY3Rpb25dO1xyXG5cclxuICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuZmluZFBhZ2luZyhxdWVyeSwgZHRvLCAkcGlwbGluZSk7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIHRocm93IFJvbGVFeGNlcHRpb24uVW5rbm93bkVycm9yKGUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCByb2xlU2VydmljZSA9IG5ldyBSb2xlU2VydmljZShSb2xlTW9kZWwpO1xyXG4iXX0=