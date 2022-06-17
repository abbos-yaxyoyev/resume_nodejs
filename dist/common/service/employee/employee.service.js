"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.employeeService = void 0;
const mongoose_1 = require("mongoose");
const collections_1 = require("../../constants/collections");
const exception_1 = require("../../db/models/employee/exception");
const models_1 = require("../../db/models/employee/models");
const commonUser_service_1 = require("../baseUser/commonUser.service");
class EmployeeService extends commonUser_service_1.CommonUserService {
    constructor(model) {
        super(model, exception_1.EmployeeException);
    }
    async getPaging(dto) {
        try {
            let query = { isDeleted: false };
            const $lookupRole = {
                $lookup: {
                    from: collections_1.COLLECTIONS.ROLE,
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
                    firstName: 1,
                    lastName: 1,
                    phoneNumber: 1,
                    role: {
                        _id: 1,
                        name: 1,
                    },
                },
            };
            const $pipline = [$lookupRole, $unwindRole, $projection];
            return await this.findPaging(query, dto, $pipline);
        }
        catch (e) {
            console.log("error paging admin: ", e);
            throw exception_1.EmployeeException.UnknownError(e);
        }
    }
    async getEmployeeFull(id) {
        try {
            const $match = {
                $match: {
                    _id: new mongoose_1.Types.ObjectId(id),
                    isDeleted: false
                },
            };
            const $lookupRole = {
                $lookup: {
                    from: collections_1.COLLECTIONS.ROLE,
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
                    isActive: 1,
                    lastName: 1,
                    firstName: 1,
                    biography: 1,
                    phoneNumber: 1,
                    role: {
                        _id: 1,
                        name: 1,
                    },
                },
            };
            const $pipline = [$match, $lookupRole, $unwindRole, $projection];
            const data = await this.aggregate($pipline);
            if (!data || !data[0])
                throw exception_1.EmployeeException.NotFound(id);
            return data[0];
        }
        catch (error) {
            throw exception_1.EmployeeException.UnknownError(error);
        }
    }
}
exports.employeeService = new EmployeeService(models_1.EmployeeModel);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW1wbG95ZWUuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21tb24vc2VydmljZS9lbXBsb3llZS9lbXBsb3llZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUNBLHVDQUFpQztBQUNqQyw2REFBMEQ7QUFDMUQsa0VBQXVFO0FBQ3ZFLDREQUEwRTtBQUUxRSx1RUFBbUU7QUFFbkUsTUFBTSxlQUFnQixTQUFRLHNDQUEyQjtJQUN2RCxZQUFZLEtBQTBCO1FBQ3BDLEtBQUssQ0FBQyxLQUFLLEVBQUUsNkJBQWlCLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBRU0sS0FBSyxDQUFDLFNBQVMsQ0FBSSxHQUFtQjtRQUMzQyxJQUFJO1lBQ0YsSUFBSSxLQUFLLEdBQVEsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLENBQUM7WUFFdEMsTUFBTSxXQUFXLEdBQUc7Z0JBQ2xCLE9BQU8sRUFBRTtvQkFDUCxJQUFJLEVBQUUseUJBQVcsQ0FBQyxJQUFJO29CQUN0QixZQUFZLEVBQUUsS0FBSztvQkFDbkIsVUFBVSxFQUFFLFFBQVE7b0JBQ3BCLEVBQUUsRUFBRSxNQUFNO2lCQUNYO2FBQ0YsQ0FBQztZQUVGLE1BQU0sV0FBVyxHQUFHO2dCQUNsQixPQUFPLEVBQUU7b0JBQ1AsSUFBSSxFQUFFLE9BQU87b0JBQ2IsMEJBQTBCLEVBQUUsSUFBSTtpQkFDakM7YUFDRixDQUFDO1lBRUYsTUFBTSxXQUFXLEdBQUc7Z0JBQ2xCLFFBQVEsRUFBRTtvQkFDUixHQUFHLEVBQUUsQ0FBQztvQkFDTixTQUFTLEVBQUUsQ0FBQztvQkFDWixRQUFRLEVBQUUsQ0FBQztvQkFDWCxXQUFXLEVBQUUsQ0FBQztvQkFDZCxJQUFJLEVBQUU7d0JBQ0osR0FBRyxFQUFFLENBQUM7d0JBQ04sSUFBSSxFQUFFLENBQUM7cUJBQ1I7aUJBQ0Y7YUFDRixDQUFDO1lBRUYsTUFBTSxRQUFRLEdBQUcsQ0FBQyxXQUFXLEVBQUUsV0FBVyxFQUFFLFdBQVcsQ0FBQyxDQUFDO1lBRXpELE9BQU8sTUFBTSxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssRUFBRSxHQUFHLEVBQUUsUUFBUSxDQUFFLENBQUM7U0FDckQ7UUFBQyxPQUFPLENBQUMsRUFBRTtZQUNWLE9BQU8sQ0FBQyxHQUFHLENBQUMsc0JBQXNCLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDdkMsTUFBTSw2QkFBaUIsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDekM7SUFDSCxDQUFDO0lBRU0sS0FBSyxDQUFDLGVBQWUsQ0FBSSxFQUFVO1FBQ3hDLElBQUk7WUFDRixNQUFNLE1BQU0sR0FBUTtnQkFDbEIsTUFBTSxFQUFFO29CQUNOLEdBQUcsRUFBRSxJQUFJLGdCQUFLLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQztvQkFDM0IsU0FBUyxFQUFFLEtBQUs7aUJBQ2pCO2FBQ0YsQ0FBQztZQUdGLE1BQU0sV0FBVyxHQUFHO2dCQUNsQixPQUFPLEVBQUU7b0JBQ1AsSUFBSSxFQUFFLHlCQUFXLENBQUMsSUFBSTtvQkFDdEIsWUFBWSxFQUFFLEtBQUs7b0JBQ25CLFVBQVUsRUFBRSxRQUFRO29CQUNwQixFQUFFLEVBQUUsTUFBTTtpQkFDWDthQUNGLENBQUM7WUFFRixNQUFNLFdBQVcsR0FBRztnQkFDbEIsT0FBTyxFQUFFO29CQUNQLElBQUksRUFBRSxPQUFPO29CQUNiLDBCQUEwQixFQUFFLElBQUk7aUJBQ2pDO2FBQ0YsQ0FBQztZQUVGLE1BQU0sV0FBVyxHQUFHO2dCQUNsQixRQUFRLEVBQUU7b0JBQ1IsR0FBRyxFQUFFLENBQUM7b0JBQ04sUUFBUSxFQUFFLENBQUM7b0JBQ1gsUUFBUSxFQUFFLENBQUM7b0JBQ1gsU0FBUyxFQUFFLENBQUM7b0JBQ1osU0FBUyxFQUFFLENBQUM7b0JBQ1osV0FBVyxFQUFFLENBQUM7b0JBQ2QsSUFBSSxFQUFFO3dCQUNKLEdBQUcsRUFBRSxDQUFDO3dCQUNOLElBQUksRUFBRSxDQUFDO3FCQUNSO2lCQUNGO2FBQ0YsQ0FBQztZQUVGLE1BQU0sUUFBUSxHQUFHLENBQUMsTUFBTSxFQUFFLFdBQVcsRUFBRSxXQUFXLEVBQUUsV0FBVyxDQUFDLENBQUM7WUFFakUsTUFBTSxJQUFJLEdBQUcsTUFBTSxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQzVDLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO2dCQUFFLE1BQU0sNkJBQWlCLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFBO1lBQzNELE9BQU8sSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ2hCO1FBQUMsT0FBTyxLQUFLLEVBQUU7WUFDZCxNQUFNLDZCQUFpQixDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUM3QztJQUNILENBQUM7Q0FDRjtBQUVZLFFBQUEsZUFBZSxHQUFHLElBQUksZUFBZSxDQUFDLHNCQUFhLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vZGVsVHlwZSB9IGZyb20gJ0B0eXBlZ29vc2UvdHlwZWdvb3NlL2xpYi90eXBlcyc7XHJcbmltcG9ydCB7IFR5cGVzIH0gZnJvbSAnbW9uZ29vc2UnO1xyXG5pbXBvcnQgeyBDT0xMRUNUSU9OUyB9IGZyb20gJy4uLy4uL2NvbnN0YW50cy9jb2xsZWN0aW9ucyc7XHJcbmltcG9ydCB7IEVtcGxveWVlRXhjZXB0aW9uIH0gZnJvbSAnLi4vLi4vZGIvbW9kZWxzL2VtcGxveWVlL2V4Y2VwdGlvbic7XHJcbmltcG9ydCB7IEVtcGxveWVlLCBFbXBsb3llZU1vZGVsIH0gZnJvbSAnLi4vLi4vZGIvbW9kZWxzL2VtcGxveWVlL21vZGVscyc7XHJcbmltcG9ydCB7IEVtcGxveWVlR2V0RHRvIH0gZnJvbSAnLi4vLi4vdmFsaWRhdGlvbi9kdG8vY29tbW9uVXNlci9lbXBsb3llZS9lbXBsb3llZS5kdG8nO1xyXG5pbXBvcnQgeyBDb21tb25Vc2VyU2VydmljZSB9IGZyb20gJy4uL2Jhc2VVc2VyL2NvbW1vblVzZXIuc2VydmljZSc7XHJcblxyXG5jbGFzcyBFbXBsb3llZVNlcnZpY2UgZXh0ZW5kcyBDb21tb25Vc2VyU2VydmljZTxFbXBsb3llZT4ge1xyXG4gIGNvbnN0cnVjdG9yKG1vZGVsOiBNb2RlbFR5cGU8RW1wbG95ZWU+KSB7XHJcbiAgICBzdXBlcihtb2RlbCwgRW1wbG95ZWVFeGNlcHRpb24pO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGFzeW5jIGdldFBhZ2luZzxUPihkdG86IEVtcGxveWVlR2V0RHRvKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBsZXQgcXVlcnk6IGFueSA9IHsgaXNEZWxldGVkOiBmYWxzZSB9O1xyXG5cclxuICAgICAgY29uc3QgJGxvb2t1cFJvbGUgPSB7XHJcbiAgICAgICAgJGxvb2t1cDoge1xyXG4gICAgICAgICAgZnJvbTogQ09MTEVDVElPTlMuUk9MRSxcclxuICAgICAgICAgIGZvcmVpZ25GaWVsZDogJ19pZCcsXHJcbiAgICAgICAgICBsb2NhbEZpZWxkOiAncm9sZUlkJyxcclxuICAgICAgICAgIGFzOiAncm9sZScsXHJcbiAgICAgICAgfSxcclxuICAgICAgfTtcclxuXHJcbiAgICAgIGNvbnN0ICR1bndpbmRSb2xlID0ge1xyXG4gICAgICAgICR1bndpbmQ6IHtcclxuICAgICAgICAgIHBhdGg6ICckcm9sZScsXHJcbiAgICAgICAgICBwcmVzZXJ2ZU51bGxBbmRFbXB0eUFycmF5czogdHJ1ZSxcclxuICAgICAgICB9LFxyXG4gICAgICB9O1xyXG5cclxuICAgICAgY29uc3QgJHByb2plY3Rpb24gPSB7XHJcbiAgICAgICAgJHByb2plY3Q6IHtcclxuICAgICAgICAgIF9pZDogMSxcclxuICAgICAgICAgIGZpcnN0TmFtZTogMSxcclxuICAgICAgICAgIGxhc3ROYW1lOiAxLFxyXG4gICAgICAgICAgcGhvbmVOdW1iZXI6IDEsXHJcbiAgICAgICAgICByb2xlOiB7XHJcbiAgICAgICAgICAgIF9pZDogMSxcclxuICAgICAgICAgICAgbmFtZTogMSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgfTtcclxuXHJcbiAgICAgIGNvbnN0ICRwaXBsaW5lID0gWyRsb29rdXBSb2xlLCAkdW53aW5kUm9sZSwgJHByb2plY3Rpb25dO1xyXG5cclxuICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuZmluZFBhZ2luZyhxdWVyeSwgZHRvLCAkcGlwbGluZSwpO1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICBjb25zb2xlLmxvZyhcImVycm9yIHBhZ2luZyBhZG1pbjogXCIsIGUpO1xyXG4gICAgICB0aHJvdyBFbXBsb3llZUV4Y2VwdGlvbi5Vbmtub3duRXJyb3IoZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgYXN5bmMgZ2V0RW1wbG95ZWVGdWxsPFQ+KGlkOiBzdHJpbmcsKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCAkbWF0Y2g6IGFueSA9IHtcclxuICAgICAgICAkbWF0Y2g6IHtcclxuICAgICAgICAgIF9pZDogbmV3IFR5cGVzLk9iamVjdElkKGlkKSxcclxuICAgICAgICAgIGlzRGVsZXRlZDogZmFsc2VcclxuICAgICAgICB9LFxyXG4gICAgICB9O1xyXG5cclxuXHJcbiAgICAgIGNvbnN0ICRsb29rdXBSb2xlID0ge1xyXG4gICAgICAgICRsb29rdXA6IHtcclxuICAgICAgICAgIGZyb206IENPTExFQ1RJT05TLlJPTEUsXHJcbiAgICAgICAgICBmb3JlaWduRmllbGQ6ICdfaWQnLFxyXG4gICAgICAgICAgbG9jYWxGaWVsZDogJ3JvbGVJZCcsXHJcbiAgICAgICAgICBhczogJ3JvbGUnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH07XHJcblxyXG4gICAgICBjb25zdCAkdW53aW5kUm9sZSA9IHtcclxuICAgICAgICAkdW53aW5kOiB7XHJcbiAgICAgICAgICBwYXRoOiAnJHJvbGUnLFxyXG4gICAgICAgICAgcHJlc2VydmVOdWxsQW5kRW1wdHlBcnJheXM6IHRydWUsXHJcbiAgICAgICAgfSxcclxuICAgICAgfTtcclxuXHJcbiAgICAgIGNvbnN0ICRwcm9qZWN0aW9uID0ge1xyXG4gICAgICAgICRwcm9qZWN0OiB7XHJcbiAgICAgICAgICBfaWQ6IDEsXHJcbiAgICAgICAgICBpc0FjdGl2ZTogMSxcclxuICAgICAgICAgIGxhc3ROYW1lOiAxLFxyXG4gICAgICAgICAgZmlyc3ROYW1lOiAxLFxyXG4gICAgICAgICAgYmlvZ3JhcGh5OiAxLFxyXG4gICAgICAgICAgcGhvbmVOdW1iZXI6IDEsXHJcbiAgICAgICAgICByb2xlOiB7XHJcbiAgICAgICAgICAgIF9pZDogMSxcclxuICAgICAgICAgICAgbmFtZTogMSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgfTtcclxuXHJcbiAgICAgIGNvbnN0ICRwaXBsaW5lID0gWyRtYXRjaCwgJGxvb2t1cFJvbGUsICR1bndpbmRSb2xlLCAkcHJvamVjdGlvbl07XHJcblxyXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgdGhpcy5hZ2dyZWdhdGUoJHBpcGxpbmUpO1xyXG4gICAgICBpZiAoIWRhdGEgfHwgIWRhdGFbMF0pIHRocm93IEVtcGxveWVlRXhjZXB0aW9uLk5vdEZvdW5kKGlkKVxyXG4gICAgICByZXR1cm4gZGF0YVswXTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIHRocm93IEVtcGxveWVlRXhjZXB0aW9uLlVua25vd25FcnJvcihlcnJvcik7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZW1wbG95ZWVTZXJ2aWNlID0gbmV3IEVtcGxveWVlU2VydmljZShFbXBsb3llZU1vZGVsKTtcclxuIl19