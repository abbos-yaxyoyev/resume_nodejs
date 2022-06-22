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
        console.log("roles: ", role);
        console.log("role[access]: ", role[access]);
        console.log(" role.isDeleted: ", role.isDeleted);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm9sZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL2NvbW1vbi9zZXJ2aWNlL2VtcGxveWVlL3JvbGUvcm9sZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUNBLHVDQUFpQztBQUNqQyxxRUFBMEU7QUFDMUUsNEVBQTRFO0FBQzVFLG9FQUEwRTtBQUUxRSx5REFBc0Q7QUFFdEQsTUFBTSxXQUFZLFNBQVEsK0JBQW9CO0lBRTVDLFlBQVksS0FBc0I7UUFDaEMsS0FBSyxDQUFDLEtBQUssRUFBRSwwQkFBYSxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQUVNLEtBQUssQ0FBQyxhQUFhLENBQUMsRUFBRTtRQUMzQixNQUFNLElBQUksR0FBRyxNQUFNLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDckMsSUFBSSxDQUFDLElBQUk7WUFBRSxNQUFNLDBCQUFhLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQzVDLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVNLEtBQUssQ0FBQyxTQUFTLENBQUMsRUFBVSxFQUFFLE1BQWM7UUFDL0MsTUFBTSxJQUFJLEdBQUcsTUFBTSxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3JDLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzdCLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFDNUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFFakQsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxJQUFJLENBQUMsU0FBUztZQUFFLE1BQU0sNkJBQWlCLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztJQUNyRixDQUFDO0lBRU0sS0FBSyxDQUFDLGlCQUFpQixDQUFDLEVBQVU7UUFDdkMsSUFBSTtZQUNGLE1BQU0sU0FBUyxHQUFHO2dCQUNoQjtvQkFDRSxNQUFNLEVBQUU7d0JBQ04sR0FBRyxFQUFFLElBQUksZ0JBQUssQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDO3FCQUM1QjtpQkFDRjtnQkFDRDtvQkFDRSxPQUFPLEVBQUU7d0JBQ1AsSUFBSSxFQUFFLFdBQVc7d0JBQ2pCLFVBQVUsRUFBRSxLQUFLO3dCQUNqQixZQUFZLEVBQUUsUUFBUTt3QkFDdEIsRUFBRSxFQUFFLFVBQVU7cUJBQ2Y7aUJBQ0Y7Z0JBQ0Q7b0JBQ0UsT0FBTyxFQUFFO3dCQUNQLElBQUksRUFBRSxXQUFXO3FCQUNsQjtpQkFDRjtnQkFDRDtvQkFDRSxZQUFZLEVBQUU7d0JBQ1osT0FBTyxFQUFFLFdBQVc7cUJBQ3JCO2lCQUNGO2dCQUNEO29CQUNFLE1BQU0sRUFBRTt3QkFDTixTQUFTLEVBQUUsSUFBSTt3QkFDZixTQUFTLEVBQUUsS0FBSztxQkFDakI7aUJBQ0Y7Z0JBQ0Q7b0JBQ0UsWUFBWSxFQUFFO3dCQUNaLE9BQU8sRUFBRSxNQUFNO3dCQUNmLFNBQVMsRUFBRSxZQUFZO3dCQUN2QixRQUFRLEVBQUUsV0FBVzt3QkFDckIsV0FBVyxFQUFFLGNBQWM7d0JBQzNCLFNBQVMsRUFBRSxZQUFZO3dCQUN2QixTQUFTLEVBQUUsWUFBWTtxQkFDeEI7aUJBQ0Y7YUFDRixDQUFDO1lBRUYsTUFBTSxJQUFJLEdBQUcsTUFBTSxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQzdDLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQztnQkFBRSxNQUFNLDBCQUFhLENBQUMsY0FBYyxDQUFDLEVBQUUsQ0FBQyxDQUFBO1lBQ25ELE9BQU8sSUFBSSxDQUFDO1NBQ2I7UUFBQyxPQUFPLENBQUMsRUFBRTtZQUNWLElBQUksQ0FBQyxZQUFZLDBCQUFhLEVBQUU7Z0JBQzlCLE1BQU0sQ0FBQyxDQUFDO2FBQ1Q7aUJBQU07Z0JBQ0wsTUFBTSwwQkFBYSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUNyQztTQUNGO0lBQ0gsQ0FBQztJQUVNLEtBQUssQ0FBQyxTQUFTLENBQUksR0FBZTtRQUN2QyxJQUFJO1lBQ0YsSUFBSSxLQUFLLEdBQUc7Z0JBQ1YsU0FBUyxFQUFFLEtBQUs7YUFDakIsQ0FBQztZQUVGLE1BQU0sV0FBVyxHQUFHO2dCQUNsQixRQUFRLEVBQUU7b0JBQ1IsR0FBRyxFQUFFLENBQUM7aUJBQ1A7YUFDRixDQUFDO1lBRUYsTUFBTSxRQUFRLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUUvQixPQUFPLE1BQU0sSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLEVBQUUsR0FBRyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1NBQ3BEO1FBQUMsT0FBTyxDQUFDLEVBQUU7WUFDVixNQUFNLDBCQUFhLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3JDO0lBQ0gsQ0FBQztDQUVGO0FBRVksUUFBQSxXQUFXLEdBQUcsSUFBSSxXQUFXLENBQUMsa0JBQVMsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9kZWxUeXBlIH0gZnJvbSAnQHR5cGVnb29zZS90eXBlZ29vc2UvbGliL3R5cGVzJztcclxuaW1wb3J0IHsgVHlwZXMgfSBmcm9tICdtb25nb29zZSc7XHJcbmltcG9ydCB7IEVtcGxveWVlRXhjZXB0aW9uIH0gZnJvbSAnLi4vLi4vLi4vZGIvbW9kZWxzL2VtcGxveWVlL2V4Y2VwdGlvbic7XHJcbmltcG9ydCB7IFJvbGVFeGNlcHRpb24gfSBmcm9tICcuLi8uLi8uLi9kYi9tb2RlbHMvZW1wbG95ZWUvcm9sZS9leGNlcHRpb25zJztcclxuaW1wb3J0IHsgUm9sZSwgUm9sZU1vZGVsIH0gZnJvbSAnLi4vLi4vLi4vZGIvbW9kZWxzL2VtcGxveWVlL3JvbGUvbW9kZWxzJztcclxuaW1wb3J0IHsgUm9sZUdldER0byB9IGZyb20gJy4uLy4uLy4uL3ZhbGlkYXRpb24vZHRvL2NvbW1vblVzZXIvZW1wbG95ZWUvcm9sZS9yb2xlLmR0byc7XHJcbmltcG9ydCB7IENvbW1vblNlcnZpY2VzIH0gZnJvbSAnLi4vLi4vY29tbW9uLnNlcnZpY2UnO1xyXG5cclxuY2xhc3MgUm9sZVNlcnZpY2UgZXh0ZW5kcyBDb21tb25TZXJ2aWNlczxSb2xlPiB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKG1vZGVsOiBNb2RlbFR5cGU8Um9sZT4pIHtcclxuICAgIHN1cGVyKG1vZGVsLCBSb2xlRXhjZXB0aW9uKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBhc3luYyBmaW5kQnlJZEVycm9yKGlkKSB7XHJcbiAgICBjb25zdCByb2xlID0gYXdhaXQgdGhpcy5maW5kQnlJZChpZCk7XHJcbiAgICBpZiAoIXJvbGUpIHRocm93IFJvbGVFeGNlcHRpb24uTm90Rm91bmQoaWQpO1xyXG4gICAgcmV0dXJuIHJvbGU7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgYXN5bmMgaGFzQWNjZXNzKGlkOiBzdHJpbmcsIGFjY2Vzczogc3RyaW5nKSB7XHJcbiAgICBjb25zdCByb2xlID0gYXdhaXQgdGhpcy5maW5kQnlJZChpZCk7XHJcbiAgICBjb25zb2xlLmxvZyhcInJvbGVzOiBcIiwgcm9sZSk7XHJcbiAgICBjb25zb2xlLmxvZyhcInJvbGVbYWNjZXNzXTogXCIsIHJvbGVbYWNjZXNzXSk7XHJcbiAgICBjb25zb2xlLmxvZyhcIiByb2xlLmlzRGVsZXRlZDogXCIsIHJvbGUuaXNEZWxldGVkKTtcclxuXHJcbiAgICBpZiAoIXJvbGVbYWNjZXNzXSB8fCByb2xlLmlzRGVsZXRlZCkgdGhyb3cgRW1wbG95ZWVFeGNlcHRpb24uTm90RW5vdWdoUGVybWlzc2lvbigpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGFzeW5jIGNoZWNrRW1wbG95ZWVSb2xlKGlkOiBzdHJpbmcpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0ICRwaXBlbGluZSA9IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAkbWF0Y2g6IHtcclxuICAgICAgICAgICAgX2lkOiBuZXcgVHlwZXMuT2JqZWN0SWQoaWQpLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICRsb29rdXA6IHtcclxuICAgICAgICAgICAgZnJvbTogJ2VtcGxveWVlcycsXHJcbiAgICAgICAgICAgIGxvY2FsRmllbGQ6ICdfaWQnLFxyXG4gICAgICAgICAgICBmb3JlaWduRmllbGQ6ICdyb2xlSWQnLFxyXG4gICAgICAgICAgICBhczogJ2VtcGxveWVlJyxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAkdW53aW5kOiB7XHJcbiAgICAgICAgICAgIHBhdGg6ICckZW1wbG95ZWUnLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICRyZXBsYWNlUm9vdDoge1xyXG4gICAgICAgICAgICBuZXdSb290OiAnJGVtcGxveWVlJyxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAkbWF0Y2g6IHtcclxuICAgICAgICAgICAgZGVsZXRlZEF0OiBudWxsLFxyXG4gICAgICAgICAgICBpc0RlbGV0ZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICRyZXBsYWNlV2l0aDoge1xyXG4gICAgICAgICAgICBhZG1pbklkOiAnJF9pZCcsXHJcbiAgICAgICAgICAgIGZpcnN0TmFtZTogJyRmaXJzdE5hbWUnLFxyXG4gICAgICAgICAgICBsYXN0TmFtZTogJyRsYXN0TmFtZScsXHJcbiAgICAgICAgICAgIHBob25lTnVtYmVyOiAnJHBob25lTnVtYmVyJyxcclxuICAgICAgICAgICAgY3JlYXRlZEF0OiAnJGNyZWF0ZWRBdCcsXHJcbiAgICAgICAgICAgIHVwZGF0ZWRBdDogJyR1cGRhdGVkQXQnLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICBdO1xyXG5cclxuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHRoaXMuYWdncmVnYXRlKCRwaXBlbGluZSk7XHJcbiAgICAgIGlmIChkYXRhWzBdKSB0aHJvdyBSb2xlRXhjZXB0aW9uLlJvbGVPZkVtcGxveWVlKGlkKVxyXG4gICAgICByZXR1cm4gZGF0YTtcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgaWYgKGUgaW5zdGFuY2VvZiBSb2xlRXhjZXB0aW9uKSB7XHJcbiAgICAgICAgdGhyb3cgZTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aHJvdyBSb2xlRXhjZXB0aW9uLlVua25vd25FcnJvcihlKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIGFzeW5jIGdldFBhZ2luZzxUPihkdG86IFJvbGVHZXREdG8pIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGxldCBxdWVyeSA9IHtcclxuICAgICAgICBpc0RlbGV0ZWQ6IGZhbHNlLFxyXG4gICAgICB9O1xyXG5cclxuICAgICAgY29uc3QgJHByb2plY3Rpb24gPSB7XHJcbiAgICAgICAgJHByb2plY3Q6IHtcclxuICAgICAgICAgIF9fdjogMFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH07XHJcblxyXG4gICAgICBjb25zdCAkcGlwbGluZSA9IFskcHJvamVjdGlvbl07XHJcblxyXG4gICAgICByZXR1cm4gYXdhaXQgdGhpcy5maW5kUGFnaW5nKHF1ZXJ5LCBkdG8sICRwaXBsaW5lKTtcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgdGhyb3cgUm9sZUV4Y2VwdGlvbi5Vbmtub3duRXJyb3IoZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHJvbGVTZXJ2aWNlID0gbmV3IFJvbGVTZXJ2aWNlKFJvbGVNb2RlbCk7XHJcbiJdfQ==