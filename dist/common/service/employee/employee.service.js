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
                    fullName: 1,
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
                    fullName: 1,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW1wbG95ZWUuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21tb24vc2VydmljZS9lbXBsb3llZS9lbXBsb3llZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUNBLHVDQUFpQztBQUNqQyw2REFBMEQ7QUFDMUQsa0VBQXVFO0FBQ3ZFLDREQUEwRTtBQUUxRSx1RUFBbUU7QUFFbkUsTUFBTSxlQUFnQixTQUFRLHNDQUEyQjtJQUN2RCxZQUFZLEtBQTBCO1FBQ3BDLEtBQUssQ0FBQyxLQUFLLEVBQUUsNkJBQWlCLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBRU0sS0FBSyxDQUFDLFNBQVMsQ0FBSSxHQUFtQjtRQUMzQyxJQUFJO1lBQ0YsSUFBSSxLQUFLLEdBQVEsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLENBQUM7WUFFdEMsTUFBTSxXQUFXLEdBQUc7Z0JBQ2xCLE9BQU8sRUFBRTtvQkFDUCxJQUFJLEVBQUUseUJBQVcsQ0FBQyxJQUFJO29CQUN0QixZQUFZLEVBQUUsS0FBSztvQkFDbkIsVUFBVSxFQUFFLFFBQVE7b0JBQ3BCLEVBQUUsRUFBRSxNQUFNO2lCQUNYO2FBQ0YsQ0FBQztZQUVGLE1BQU0sV0FBVyxHQUFHO2dCQUNsQixPQUFPLEVBQUU7b0JBQ1AsSUFBSSxFQUFFLE9BQU87b0JBQ2IsMEJBQTBCLEVBQUUsSUFBSTtpQkFDakM7YUFDRixDQUFDO1lBRUYsTUFBTSxXQUFXLEdBQUc7Z0JBQ2xCLFFBQVEsRUFBRTtvQkFDUixHQUFHLEVBQUUsQ0FBQztvQkFDTixRQUFRLEVBQUUsQ0FBQztvQkFDWCxJQUFJLEVBQUU7d0JBQ0osR0FBRyxFQUFFLENBQUM7d0JBQ04sSUFBSSxFQUFFLENBQUM7cUJBQ1I7aUJBQ0Y7YUFDRixDQUFDO1lBRUYsTUFBTSxRQUFRLEdBQUcsQ0FBQyxXQUFXLEVBQUUsV0FBVyxFQUFFLFdBQVcsQ0FBQyxDQUFDO1lBRXpELE9BQU8sTUFBTSxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssRUFBRSxHQUFHLEVBQUUsUUFBUSxDQUFFLENBQUM7U0FDckQ7UUFBQyxPQUFPLENBQUMsRUFBRTtZQUNWLE9BQU8sQ0FBQyxHQUFHLENBQUMsc0JBQXNCLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDdkMsTUFBTSw2QkFBaUIsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDekM7SUFDSCxDQUFDO0lBRU0sS0FBSyxDQUFDLGVBQWUsQ0FBSSxFQUFVO1FBQ3hDLElBQUk7WUFDRixNQUFNLE1BQU0sR0FBUTtnQkFDbEIsTUFBTSxFQUFFO29CQUNOLEdBQUcsRUFBRSxJQUFJLGdCQUFLLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQztvQkFDM0IsU0FBUyxFQUFFLEtBQUs7aUJBQ2pCO2FBQ0YsQ0FBQztZQUdGLE1BQU0sV0FBVyxHQUFHO2dCQUNsQixPQUFPLEVBQUU7b0JBQ1AsSUFBSSxFQUFFLHlCQUFXLENBQUMsSUFBSTtvQkFDdEIsWUFBWSxFQUFFLEtBQUs7b0JBQ25CLFVBQVUsRUFBRSxRQUFRO29CQUNwQixFQUFFLEVBQUUsTUFBTTtpQkFDWDthQUNGLENBQUM7WUFFRixNQUFNLFdBQVcsR0FBRztnQkFDbEIsT0FBTyxFQUFFO29CQUNQLElBQUksRUFBRSxPQUFPO29CQUNiLDBCQUEwQixFQUFFLElBQUk7aUJBQ2pDO2FBQ0YsQ0FBQztZQUVGLE1BQU0sV0FBVyxHQUFHO2dCQUNsQixRQUFRLEVBQUU7b0JBQ1IsR0FBRyxFQUFFLENBQUM7b0JBQ04sUUFBUSxFQUFFLENBQUM7b0JBQ1gsSUFBSSxFQUFFO3dCQUNKLEdBQUcsRUFBRSxDQUFDO3dCQUNOLElBQUksRUFBRSxDQUFDO3FCQUNSO2lCQUNGO2FBQ0YsQ0FBQztZQUVGLE1BQU0sUUFBUSxHQUFHLENBQUMsTUFBTSxFQUFFLFdBQVcsRUFBRSxXQUFXLEVBQUUsV0FBVyxDQUFDLENBQUM7WUFFakUsTUFBTSxJQUFJLEdBQUcsTUFBTSxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQzVDLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO2dCQUFFLE1BQU0sNkJBQWlCLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFBO1lBQzNELE9BQU8sSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ2hCO1FBQUMsT0FBTyxLQUFLLEVBQUU7WUFDZCxNQUFNLDZCQUFpQixDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUM3QztJQUNILENBQUM7Q0FDRjtBQUVZLFFBQUEsZUFBZSxHQUFHLElBQUksZUFBZSxDQUFDLHNCQUFhLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vZGVsVHlwZSB9IGZyb20gJ0B0eXBlZ29vc2UvdHlwZWdvb3NlL2xpYi90eXBlcyc7XHJcbmltcG9ydCB7IFR5cGVzIH0gZnJvbSAnbW9uZ29vc2UnO1xyXG5pbXBvcnQgeyBDT0xMRUNUSU9OUyB9IGZyb20gJy4uLy4uL2NvbnN0YW50cy9jb2xsZWN0aW9ucyc7XHJcbmltcG9ydCB7IEVtcGxveWVlRXhjZXB0aW9uIH0gZnJvbSAnLi4vLi4vZGIvbW9kZWxzL2VtcGxveWVlL2V4Y2VwdGlvbic7XHJcbmltcG9ydCB7IEVtcGxveWVlLCBFbXBsb3llZU1vZGVsIH0gZnJvbSAnLi4vLi4vZGIvbW9kZWxzL2VtcGxveWVlL21vZGVscyc7XHJcbmltcG9ydCB7IEVtcGxveWVlR2V0RHRvIH0gZnJvbSAnLi4vLi4vdmFsaWRhdGlvbi9kdG8vY29tbW9uVXNlci9lbXBsb3llZS9lbXBsb3llZS5kdG8nO1xyXG5pbXBvcnQgeyBDb21tb25Vc2VyU2VydmljZSB9IGZyb20gJy4uL2Jhc2VVc2VyL2NvbW1vblVzZXIuc2VydmljZSc7XHJcblxyXG5jbGFzcyBFbXBsb3llZVNlcnZpY2UgZXh0ZW5kcyBDb21tb25Vc2VyU2VydmljZTxFbXBsb3llZT4ge1xyXG4gIGNvbnN0cnVjdG9yKG1vZGVsOiBNb2RlbFR5cGU8RW1wbG95ZWU+KSB7XHJcbiAgICBzdXBlcihtb2RlbCwgRW1wbG95ZWVFeGNlcHRpb24pO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGFzeW5jIGdldFBhZ2luZzxUPihkdG86IEVtcGxveWVlR2V0RHRvKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBsZXQgcXVlcnk6IGFueSA9IHsgaXNEZWxldGVkOiBmYWxzZSB9O1xyXG5cclxuICAgICAgY29uc3QgJGxvb2t1cFJvbGUgPSB7XHJcbiAgICAgICAgJGxvb2t1cDoge1xyXG4gICAgICAgICAgZnJvbTogQ09MTEVDVElPTlMuUk9MRSxcclxuICAgICAgICAgIGZvcmVpZ25GaWVsZDogJ19pZCcsXHJcbiAgICAgICAgICBsb2NhbEZpZWxkOiAncm9sZUlkJyxcclxuICAgICAgICAgIGFzOiAncm9sZScsXHJcbiAgICAgICAgfSxcclxuICAgICAgfTtcclxuXHJcbiAgICAgIGNvbnN0ICR1bndpbmRSb2xlID0ge1xyXG4gICAgICAgICR1bndpbmQ6IHtcclxuICAgICAgICAgIHBhdGg6ICckcm9sZScsXHJcbiAgICAgICAgICBwcmVzZXJ2ZU51bGxBbmRFbXB0eUFycmF5czogdHJ1ZSxcclxuICAgICAgICB9LFxyXG4gICAgICB9O1xyXG5cclxuICAgICAgY29uc3QgJHByb2plY3Rpb24gPSB7XHJcbiAgICAgICAgJHByb2plY3Q6IHtcclxuICAgICAgICAgIF9pZDogMSxcclxuICAgICAgICAgIGZ1bGxOYW1lOiAxLFxyXG4gICAgICAgICAgcm9sZToge1xyXG4gICAgICAgICAgICBfaWQ6IDEsXHJcbiAgICAgICAgICAgIG5hbWU6IDEsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH07XHJcblxyXG4gICAgICBjb25zdCAkcGlwbGluZSA9IFskbG9va3VwUm9sZSwgJHVud2luZFJvbGUsICRwcm9qZWN0aW9uXTtcclxuXHJcbiAgICAgIHJldHVybiBhd2FpdCB0aGlzLmZpbmRQYWdpbmcocXVlcnksIGR0bywgJHBpcGxpbmUsKTtcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgY29uc29sZS5sb2coXCJlcnJvciBwYWdpbmcgYWRtaW46IFwiLCBlKTtcclxuICAgICAgdGhyb3cgRW1wbG95ZWVFeGNlcHRpb24uVW5rbm93bkVycm9yKGUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIGFzeW5jIGdldEVtcGxveWVlRnVsbDxUPihpZDogc3RyaW5nLCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgJG1hdGNoOiBhbnkgPSB7XHJcbiAgICAgICAgJG1hdGNoOiB7XHJcbiAgICAgICAgICBfaWQ6IG5ldyBUeXBlcy5PYmplY3RJZChpZCksXHJcbiAgICAgICAgICBpc0RlbGV0ZWQ6IGZhbHNlXHJcbiAgICAgICAgfSxcclxuICAgICAgfTtcclxuXHJcblxyXG4gICAgICBjb25zdCAkbG9va3VwUm9sZSA9IHtcclxuICAgICAgICAkbG9va3VwOiB7XHJcbiAgICAgICAgICBmcm9tOiBDT0xMRUNUSU9OUy5ST0xFLFxyXG4gICAgICAgICAgZm9yZWlnbkZpZWxkOiAnX2lkJyxcclxuICAgICAgICAgIGxvY2FsRmllbGQ6ICdyb2xlSWQnLFxyXG4gICAgICAgICAgYXM6ICdyb2xlJyxcclxuICAgICAgICB9LFxyXG4gICAgICB9O1xyXG5cclxuICAgICAgY29uc3QgJHVud2luZFJvbGUgPSB7XHJcbiAgICAgICAgJHVud2luZDoge1xyXG4gICAgICAgICAgcGF0aDogJyRyb2xlJyxcclxuICAgICAgICAgIHByZXNlcnZlTnVsbEFuZEVtcHR5QXJyYXlzOiB0cnVlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH07XHJcblxyXG4gICAgICBjb25zdCAkcHJvamVjdGlvbiA9IHtcclxuICAgICAgICAkcHJvamVjdDoge1xyXG4gICAgICAgICAgX2lkOiAxLFxyXG4gICAgICAgICAgZnVsbE5hbWU6IDEsXHJcbiAgICAgICAgICByb2xlOiB7XHJcbiAgICAgICAgICAgIF9pZDogMSxcclxuICAgICAgICAgICAgbmFtZTogMSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgfTtcclxuXHJcbiAgICAgIGNvbnN0ICRwaXBsaW5lID0gWyRtYXRjaCwgJGxvb2t1cFJvbGUsICR1bndpbmRSb2xlLCAkcHJvamVjdGlvbl07XHJcblxyXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgdGhpcy5hZ2dyZWdhdGUoJHBpcGxpbmUpO1xyXG4gICAgICBpZiAoIWRhdGEgfHwgIWRhdGFbMF0pIHRocm93IEVtcGxveWVlRXhjZXB0aW9uLk5vdEZvdW5kKGlkKVxyXG4gICAgICByZXR1cm4gZGF0YVswXTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIHRocm93IEVtcGxveWVlRXhjZXB0aW9uLlVua25vd25FcnJvcihlcnJvcik7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZW1wbG95ZWVTZXJ2aWNlID0gbmV3IEVtcGxveWVlU2VydmljZShFbXBsb3llZU1vZGVsKTtcclxuIl19