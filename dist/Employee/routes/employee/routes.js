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
        url: `${config_1.API.admin_api}/create`,
        preValidation: [authenticate_1.authEmployee],
        handler: employee_handler_1.createEmployeeHandler,
    },
    {
        method: 'PUT',
        url: `${config_1.API.admin_api}/update`,
        preValidation: [authenticate_1.authEmployee],
        handler: employee_handler_1.updateEmployeeHandler,
    },
    {
        method: 'PUT',
        url: `${config_1.API.admin_api}/profile`,
        preValidation: [authenticate_1.authEmployee],
        handler: employee_handler_1.updateEmployeeProfileHandler,
    },
    {
        method: 'GET',
        url: `${config_1.API.admin_api}/paging`,
        preValidation: [authenticate_1.authEmployee],
        handler: employee_handler_1.getPagingEmployeeHandler,
    },
    {
        method: 'GET',
        url: `${config_1.API.admin_api}/profile/:_id`,
        preValidation: [authenticate_1.authEmployee],
        handler: employee_handler_1.getOneEmployeeHandler,
    },
    {
        method: 'GET',
        url: `${config_1.API.admin_api}/profile`,
        preValidation: [authenticate_1.authEmployee],
        handler: employee_handler_1.getEmployeeProfileHandler,
    },
    {
        method: 'DELETE',
        url: `${config_1.API.admin_api}/profile/:_id`,
        preValidation: [authenticate_1.authEmployee],
        handler: employee_handler_1.deleteOneEmployeeHandler,
    }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL0VtcGxveWVlL3JvdXRlcy9lbXBsb3llZS9yb3V0ZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsbURBQTZDO0FBQzdDLHNFQUV5QztBQUN6QyxnRUFBNkQ7QUFFaEQsUUFBQSxjQUFjLEdBQUc7SUFDNUI7UUFDRSxNQUFNLEVBQUUsTUFBTTtRQUNkLEdBQUcsRUFBRSxHQUFHLFlBQUcsQ0FBQyxTQUFTLFVBQVU7UUFDL0IsT0FBTyxFQUFFLGdDQUFhO0tBQ3ZCO0lBQ0Q7UUFDRSxNQUFNLEVBQUUsTUFBTTtRQUNkLEdBQUcsRUFBRSxHQUFHLFlBQUcsQ0FBQyxTQUFTLFNBQVM7UUFDOUIsYUFBYSxFQUFFLENBQUMsMkJBQVksQ0FBQztRQUM3QixPQUFPLEVBQUUsd0NBQXFCO0tBQy9CO0lBQ0Q7UUFDRSxNQUFNLEVBQUUsS0FBSztRQUNiLEdBQUcsRUFBRSxHQUFHLFlBQUcsQ0FBQyxTQUFTLFNBQVM7UUFDOUIsYUFBYSxFQUFFLENBQUMsMkJBQVksQ0FBQztRQUM3QixPQUFPLEVBQUUsd0NBQXFCO0tBQy9CO0lBQ0Q7UUFDRSxNQUFNLEVBQUUsS0FBSztRQUNiLEdBQUcsRUFBRSxHQUFHLFlBQUcsQ0FBQyxTQUFTLFVBQVU7UUFDL0IsYUFBYSxFQUFFLENBQUMsMkJBQVksQ0FBQztRQUM3QixPQUFPLEVBQUUsK0NBQTRCO0tBQ3RDO0lBQ0Q7UUFDRSxNQUFNLEVBQUUsS0FBSztRQUNiLEdBQUcsRUFBRSxHQUFHLFlBQUcsQ0FBQyxTQUFTLFNBQVM7UUFDOUIsYUFBYSxFQUFFLENBQUMsMkJBQVksQ0FBQztRQUM3QixPQUFPLEVBQUUsMkNBQXdCO0tBQ2xDO0lBQ0Q7UUFDRSxNQUFNLEVBQUUsS0FBSztRQUNiLEdBQUcsRUFBRSxHQUFHLFlBQUcsQ0FBQyxTQUFTLGVBQWU7UUFDcEMsYUFBYSxFQUFFLENBQUMsMkJBQVksQ0FBQztRQUM3QixPQUFPLEVBQUUsd0NBQXFCO0tBQy9CO0lBQ0Q7UUFDRSxNQUFNLEVBQUUsS0FBSztRQUNiLEdBQUcsRUFBRSxHQUFHLFlBQUcsQ0FBQyxTQUFTLFVBQVU7UUFDL0IsYUFBYSxFQUFFLENBQUMsMkJBQVksQ0FBQztRQUM3QixPQUFPLEVBQUUsNENBQXlCO0tBQ25DO0lBQ0Q7UUFDRSxNQUFNLEVBQUUsUUFBUTtRQUNoQixHQUFHLEVBQUUsR0FBRyxZQUFHLENBQUMsU0FBUyxlQUFlO1FBQ3BDLGFBQWEsRUFBRSxDQUFDLDJCQUFZLENBQUM7UUFDN0IsT0FBTyxFQUFFLDJDQUF3QjtLQUNsQztDQUNGLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBUEkgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vY29uZmlnJztcclxuaW1wb3J0IHtcclxuICBjcmVhdGVFbXBsb3llZUhhbmRsZXIsIGRlbGV0ZU9uZUVtcGxveWVlSGFuZGxlciwgZ2V0RW1wbG95ZWVQcm9maWxlSGFuZGxlciwgZ2V0T25lRW1wbG95ZWVIYW5kbGVyLCBnZXRQYWdpbmdFbXBsb3llZUhhbmRsZXIsIHNpZ25JbkhhbmRsZXIsIHVwZGF0ZUVtcGxveWVlSGFuZGxlciwgdXBkYXRlRW1wbG95ZWVQcm9maWxlSGFuZGxlclxyXG59IGZyb20gJy4uLy4uL2hhbmRsZXJzL2VtcGxveWVlLmhhbmRsZXInO1xyXG5pbXBvcnQgeyBhdXRoRW1wbG95ZWUgfSBmcm9tICcuLi8uLi9taWRkbGV3YXJlL2F1dGhlbnRpY2F0ZSc7XHJcblxyXG5leHBvcnQgY29uc3QgZW1wbG95ZWVSb3V0ZXMgPSBbXHJcbiAge1xyXG4gICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICB1cmw6IGAke0FQSS5hZG1pbl9hcGl9L3NpZ24taW5gLFxyXG4gICAgaGFuZGxlcjogc2lnbkluSGFuZGxlcixcclxuICB9LFxyXG4gIHtcclxuICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgdXJsOiBgJHtBUEkuYWRtaW5fYXBpfS9jcmVhdGVgLFxyXG4gICAgcHJlVmFsaWRhdGlvbjogW2F1dGhFbXBsb3llZV0sXHJcbiAgICBoYW5kbGVyOiBjcmVhdGVFbXBsb3llZUhhbmRsZXIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBtZXRob2Q6ICdQVVQnLFxyXG4gICAgdXJsOiBgJHtBUEkuYWRtaW5fYXBpfS91cGRhdGVgLFxyXG4gICAgcHJlVmFsaWRhdGlvbjogW2F1dGhFbXBsb3llZV0sXHJcbiAgICBoYW5kbGVyOiB1cGRhdGVFbXBsb3llZUhhbmRsZXIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBtZXRob2Q6ICdQVVQnLFxyXG4gICAgdXJsOiBgJHtBUEkuYWRtaW5fYXBpfS9wcm9maWxlYCxcclxuICAgIHByZVZhbGlkYXRpb246IFthdXRoRW1wbG95ZWVdLFxyXG4gICAgaGFuZGxlcjogdXBkYXRlRW1wbG95ZWVQcm9maWxlSGFuZGxlcixcclxuICB9LFxyXG4gIHtcclxuICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICB1cmw6IGAke0FQSS5hZG1pbl9hcGl9L3BhZ2luZ2AsXHJcbiAgICBwcmVWYWxpZGF0aW9uOiBbYXV0aEVtcGxveWVlXSxcclxuICAgIGhhbmRsZXI6IGdldFBhZ2luZ0VtcGxveWVlSGFuZGxlcixcclxuICB9LFxyXG4gIHtcclxuICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICB1cmw6IGAke0FQSS5hZG1pbl9hcGl9L3Byb2ZpbGUvOl9pZGAsXHJcbiAgICBwcmVWYWxpZGF0aW9uOiBbYXV0aEVtcGxveWVlXSxcclxuICAgIGhhbmRsZXI6IGdldE9uZUVtcGxveWVlSGFuZGxlcixcclxuICB9LFxyXG4gIHtcclxuICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICB1cmw6IGAke0FQSS5hZG1pbl9hcGl9L3Byb2ZpbGVgLFxyXG4gICAgcHJlVmFsaWRhdGlvbjogW2F1dGhFbXBsb3llZV0sXHJcbiAgICBoYW5kbGVyOiBnZXRFbXBsb3llZVByb2ZpbGVIYW5kbGVyLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbWV0aG9kOiAnREVMRVRFJyxcclxuICAgIHVybDogYCR7QVBJLmFkbWluX2FwaX0vcHJvZmlsZS86X2lkYCxcclxuICAgIHByZVZhbGlkYXRpb246IFthdXRoRW1wbG95ZWVdLFxyXG4gICAgaGFuZGxlcjogZGVsZXRlT25lRW1wbG95ZWVIYW5kbGVyLFxyXG4gIH1cclxuXTtcclxuIl19