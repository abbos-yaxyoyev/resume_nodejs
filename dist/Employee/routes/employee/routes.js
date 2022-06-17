"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.employeeRoutes = void 0;
const config_1 = require("../../../common/config");
const employee_handler_1 = require("../../handlers/employee.handler");
const authenticate_1 = require("../../middleware/authenticate");
exports.employeeRoutes = [
    {
        method: 'POST',
        url: `${config_1.API.admin_api}/sign-in`,
        handler: employee_handler_1.signInHandler,
    },
    {
        method: 'POST',
        url: `${config_1.API.admin_api}/employee`,
        preValidation: [authenticate_1.authEmployee],
        handler: employee_handler_1.createEmployeeHandler,
    },
    {
        method: 'PUT',
        url: `${config_1.API.admin_api}/employee`,
        preValidation: [authenticate_1.authEmployee],
        handler: employee_handler_1.updateEmployeeHandler,
    },
    {
        method: 'PUT',
        url: `${config_1.API.admin_api}/employee/profile`,
        preValidation: [authenticate_1.authEmployee],
        handler: employee_handler_1.updateEmployeeProfileHandler,
    },
    {
        method: 'GET',
        url: `${config_1.API.admin_api}/employee`,
        preValidation: [authenticate_1.authEmployee],
        handler: employee_handler_1.getPagingEmployeeHandler,
    },
    {
        method: 'GET',
        url: `${config_1.API.admin_api}/employee/:_id`,
        preValidation: [authenticate_1.authEmployee],
        handler: employee_handler_1.getOneEmployeeHandler,
    },
    {
        method: 'GET',
        url: `${config_1.API.admin_api}/employee/profile`,
        preValidation: [authenticate_1.authEmployee],
        handler: employee_handler_1.getEmployeeProfileHandler,
    },
    {
        method: 'DELETE',
        url: `${config_1.API.admin_api}/employee/:_id`,
        preValidation: [authenticate_1.authEmployee],
        handler: employee_handler_1.deleteOneEmployeeHandler,
    }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL0VtcGxveWVlL3JvdXRlcy9lbXBsb3llZS9yb3V0ZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsbURBQTZDO0FBQzdDLHNFQUV5QztBQUN6QyxnRUFBNkQ7QUFFaEQsUUFBQSxjQUFjLEdBQUc7SUFDNUI7UUFDRSxNQUFNLEVBQUUsTUFBTTtRQUNkLEdBQUcsRUFBRSxHQUFHLFlBQUcsQ0FBQyxTQUFTLFVBQVU7UUFDL0IsT0FBTyxFQUFFLGdDQUFhO0tBQ3ZCO0lBQ0Q7UUFDRSxNQUFNLEVBQUUsTUFBTTtRQUNkLEdBQUcsRUFBRSxHQUFHLFlBQUcsQ0FBQyxTQUFTLFdBQVc7UUFDaEMsYUFBYSxFQUFFLENBQUMsMkJBQVksQ0FBQztRQUM3QixPQUFPLEVBQUUsd0NBQXFCO0tBQy9CO0lBQ0Q7UUFDRSxNQUFNLEVBQUUsS0FBSztRQUNiLEdBQUcsRUFBRSxHQUFHLFlBQUcsQ0FBQyxTQUFTLFdBQVc7UUFDaEMsYUFBYSxFQUFFLENBQUMsMkJBQVksQ0FBQztRQUM3QixPQUFPLEVBQUUsd0NBQXFCO0tBQy9CO0lBQ0Q7UUFDRSxNQUFNLEVBQUUsS0FBSztRQUNiLEdBQUcsRUFBRSxHQUFHLFlBQUcsQ0FBQyxTQUFTLG1CQUFtQjtRQUN4QyxhQUFhLEVBQUUsQ0FBQywyQkFBWSxDQUFDO1FBQzdCLE9BQU8sRUFBRSwrQ0FBNEI7S0FDdEM7SUFDRDtRQUNFLE1BQU0sRUFBRSxLQUFLO1FBQ2IsR0FBRyxFQUFFLEdBQUcsWUFBRyxDQUFDLFNBQVMsV0FBVztRQUNoQyxhQUFhLEVBQUUsQ0FBQywyQkFBWSxDQUFDO1FBQzdCLE9BQU8sRUFBRSwyQ0FBd0I7S0FDbEM7SUFDRDtRQUNFLE1BQU0sRUFBRSxLQUFLO1FBQ2IsR0FBRyxFQUFFLEdBQUcsWUFBRyxDQUFDLFNBQVMsZ0JBQWdCO1FBQ3JDLGFBQWEsRUFBRSxDQUFDLDJCQUFZLENBQUM7UUFDN0IsT0FBTyxFQUFFLHdDQUFxQjtLQUMvQjtJQUNEO1FBQ0UsTUFBTSxFQUFFLEtBQUs7UUFDYixHQUFHLEVBQUUsR0FBRyxZQUFHLENBQUMsU0FBUyxtQkFBbUI7UUFDeEMsYUFBYSxFQUFFLENBQUMsMkJBQVksQ0FBQztRQUM3QixPQUFPLEVBQUUsNENBQXlCO0tBQ25DO0lBQ0Q7UUFDRSxNQUFNLEVBQUUsUUFBUTtRQUNoQixHQUFHLEVBQUUsR0FBRyxZQUFHLENBQUMsU0FBUyxnQkFBZ0I7UUFDckMsYUFBYSxFQUFFLENBQUMsMkJBQVksQ0FBQztRQUM3QixPQUFPLEVBQUUsMkNBQXdCO0tBQ2xDO0NBQ0YsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFQSSB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9jb25maWcnO1xyXG5pbXBvcnQge1xyXG4gIGNyZWF0ZUVtcGxveWVlSGFuZGxlciwgZGVsZXRlT25lRW1wbG95ZWVIYW5kbGVyLCBnZXRFbXBsb3llZVByb2ZpbGVIYW5kbGVyLCBnZXRPbmVFbXBsb3llZUhhbmRsZXIsIGdldFBhZ2luZ0VtcGxveWVlSGFuZGxlciwgc2lnbkluSGFuZGxlciwgdXBkYXRlRW1wbG95ZWVIYW5kbGVyLCB1cGRhdGVFbXBsb3llZVByb2ZpbGVIYW5kbGVyXHJcbn0gZnJvbSAnLi4vLi4vaGFuZGxlcnMvZW1wbG95ZWUuaGFuZGxlcic7XHJcbmltcG9ydCB7IGF1dGhFbXBsb3llZSB9IGZyb20gJy4uLy4uL21pZGRsZXdhcmUvYXV0aGVudGljYXRlJztcclxuXHJcbmV4cG9ydCBjb25zdCBlbXBsb3llZVJvdXRlcyA9IFtcclxuICB7XHJcbiAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgIHVybDogYCR7QVBJLmFkbWluX2FwaX0vc2lnbi1pbmAsXHJcbiAgICBoYW5kbGVyOiBzaWduSW5IYW5kbGVyLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICB1cmw6IGAke0FQSS5hZG1pbl9hcGl9L2VtcGxveWVlYCxcclxuICAgIHByZVZhbGlkYXRpb246IFthdXRoRW1wbG95ZWVdLFxyXG4gICAgaGFuZGxlcjogY3JlYXRlRW1wbG95ZWVIYW5kbGVyLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbWV0aG9kOiAnUFVUJyxcclxuICAgIHVybDogYCR7QVBJLmFkbWluX2FwaX0vZW1wbG95ZWVgLFxyXG4gICAgcHJlVmFsaWRhdGlvbjogW2F1dGhFbXBsb3llZV0sXHJcbiAgICBoYW5kbGVyOiB1cGRhdGVFbXBsb3llZUhhbmRsZXIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBtZXRob2Q6ICdQVVQnLFxyXG4gICAgdXJsOiBgJHtBUEkuYWRtaW5fYXBpfS9lbXBsb3llZS9wcm9maWxlYCxcclxuICAgIHByZVZhbGlkYXRpb246IFthdXRoRW1wbG95ZWVdLFxyXG4gICAgaGFuZGxlcjogdXBkYXRlRW1wbG95ZWVQcm9maWxlSGFuZGxlcixcclxuICB9LFxyXG4gIHtcclxuICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICB1cmw6IGAke0FQSS5hZG1pbl9hcGl9L2VtcGxveWVlYCxcclxuICAgIHByZVZhbGlkYXRpb246IFthdXRoRW1wbG95ZWVdLFxyXG4gICAgaGFuZGxlcjogZ2V0UGFnaW5nRW1wbG95ZWVIYW5kbGVyLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbWV0aG9kOiAnR0VUJyxcclxuICAgIHVybDogYCR7QVBJLmFkbWluX2FwaX0vZW1wbG95ZWUvOl9pZGAsXHJcbiAgICBwcmVWYWxpZGF0aW9uOiBbYXV0aEVtcGxveWVlXSxcclxuICAgIGhhbmRsZXI6IGdldE9uZUVtcGxveWVlSGFuZGxlcixcclxuICB9LFxyXG4gIHtcclxuICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICB1cmw6IGAke0FQSS5hZG1pbl9hcGl9L2VtcGxveWVlL3Byb2ZpbGVgLFxyXG4gICAgcHJlVmFsaWRhdGlvbjogW2F1dGhFbXBsb3llZV0sXHJcbiAgICBoYW5kbGVyOiBnZXRFbXBsb3llZVByb2ZpbGVIYW5kbGVyLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbWV0aG9kOiAnREVMRVRFJyxcclxuICAgIHVybDogYCR7QVBJLmFkbWluX2FwaX0vZW1wbG95ZWUvOl9pZGAsXHJcbiAgICBwcmVWYWxpZGF0aW9uOiBbYXV0aEVtcGxveWVlXSxcclxuICAgIGhhbmRsZXI6IGRlbGV0ZU9uZUVtcGxveWVlSGFuZGxlcixcclxuICB9XHJcbl07XHJcbiJdfQ==