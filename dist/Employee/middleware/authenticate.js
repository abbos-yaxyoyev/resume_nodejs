"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authEmployee = void 0;
const employee_service_1 = require("../../common/service/employee/employee.service");
async function authEmployee(request, reply) {
    try {
        const { _id } = await request.jwtVerify();
        const admin = await employee_service_1.employeeService.findByIdError(_id, {}, { _v: 0, deletedAt: 0 });
        const method = request.method;
        switch (method.toLocaleLowerCase()) {
            case 'delete': {
                request.body
                    ? (request.body.deletedBy = admin._id.toString())
                    : (request.body = {
                        deletedBy: admin._id,
                    });
                break;
            }
            case 'put': {
                request.body ? (request.body.updatedBy = admin._id.toString()) : '';
                break;
            }
            case 'post': {
                request.body ? (request.body.createdBy = admin._id.toString()) : '';
                break;
            }
            default: {
            }
        }
        request.admin = admin;
    }
    catch (error) {
        console.log(error);
        return reply.status(401).send({
            success: false,
            code: 401,
            statusCode: 401,
            message: 'Authorization failed',
        });
    }
}
exports.authEmployee = authEmployee;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aGVudGljYXRlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL0VtcGxveWVlL21pZGRsZXdhcmUvYXV0aGVudGljYXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHFGQUFpRjtBQUUxRSxLQUFLLFVBQVUsWUFBWSxDQUFDLE9BQU8sRUFBRSxLQUFLO0lBQy9DLElBQUk7UUFDRixNQUFNLEVBQUUsR0FBRyxFQUFFLEdBQUcsTUFBTSxPQUFPLENBQUMsU0FBUyxFQUFFLENBQUM7UUFFMUMsTUFBTSxLQUFLLEdBQUcsTUFBTSxrQ0FBZSxDQUFDLGFBQWEsQ0FBQyxHQUFHLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxTQUFTLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUVwRixNQUFNLE1BQU0sR0FBVyxPQUFPLENBQUMsTUFBTSxDQUFDO1FBQ3RDLFFBQVEsTUFBTSxDQUFDLGlCQUFpQixFQUFFLEVBQUU7WUFDbEMsS0FBSyxRQUFRLENBQUMsQ0FBQztnQkFDYixPQUFPLENBQUMsSUFBSTtvQkFDVixDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxDQUFDO29CQUNqRCxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxHQUFHO3dCQUNoQixTQUFTLEVBQUUsS0FBSyxDQUFDLEdBQUc7cUJBQ3JCLENBQUMsQ0FBQztnQkFDTCxNQUFNO2FBQ1A7WUFDRCxLQUFLLEtBQUssQ0FBQyxDQUFDO2dCQUNWLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7Z0JBQ3BFLE1BQU07YUFDUDtZQUNELEtBQUssTUFBTSxDQUFDLENBQUM7Z0JBQ1gsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztnQkFDcEUsTUFBTTthQUNQO1lBQ0QsT0FBTyxDQUFDLENBQUM7YUFDUjtTQUNGO1FBRUQsT0FBTyxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7S0FDdkI7SUFBQyxPQUFPLEtBQUssRUFBRTtRQUNkLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDbkIsT0FBTyxLQUFLLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQztZQUM1QixPQUFPLEVBQUUsS0FBSztZQUNkLElBQUksRUFBRSxHQUFHO1lBQ1QsVUFBVSxFQUFFLEdBQUc7WUFDZixPQUFPLEVBQUUsc0JBQXNCO1NBQ2hDLENBQUMsQ0FBQztLQUNKO0FBQ0gsQ0FBQztBQXRDRCxvQ0FzQ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBlbXBsb3llZVNlcnZpY2UgfSBmcm9tICcuLi8uLi9jb21tb24vc2VydmljZS9lbXBsb3llZS9lbXBsb3llZS5zZXJ2aWNlJztcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBhdXRoRW1wbG95ZWUocmVxdWVzdCwgcmVwbHkpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgeyBfaWQgfSA9IGF3YWl0IHJlcXVlc3Quand0VmVyaWZ5KCk7XHJcblxyXG4gICAgY29uc3QgYWRtaW4gPSBhd2FpdCBlbXBsb3llZVNlcnZpY2UuZmluZEJ5SWRFcnJvcihfaWQsIHt9LCB7IF92OiAwLCBkZWxldGVkQXQ6IDAgfSk7XHJcblxyXG4gICAgY29uc3QgbWV0aG9kOiBzdHJpbmcgPSByZXF1ZXN0Lm1ldGhvZDtcclxuICAgIHN3aXRjaCAobWV0aG9kLnRvTG9jYWxlTG93ZXJDYXNlKCkpIHtcclxuICAgICAgY2FzZSAnZGVsZXRlJzoge1xyXG4gICAgICAgIHJlcXVlc3QuYm9keVxyXG4gICAgICAgICAgPyAocmVxdWVzdC5ib2R5LmRlbGV0ZWRCeSA9IGFkbWluLl9pZC50b1N0cmluZygpKVxyXG4gICAgICAgICAgOiAocmVxdWVzdC5ib2R5ID0ge1xyXG4gICAgICAgICAgICBkZWxldGVkQnk6IGFkbWluLl9pZCxcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgJ3B1dCc6IHtcclxuICAgICAgICByZXF1ZXN0LmJvZHkgPyAocmVxdWVzdC5ib2R5LnVwZGF0ZWRCeSA9IGFkbWluLl9pZC50b1N0cmluZygpKSA6ICcnO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgJ3Bvc3QnOiB7XHJcbiAgICAgICAgcmVxdWVzdC5ib2R5ID8gKHJlcXVlc3QuYm9keS5jcmVhdGVkQnkgPSBhZG1pbi5faWQudG9TdHJpbmcoKSkgOiAnJztcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBkZWZhdWx0OiB7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXF1ZXN0LmFkbWluID0gYWRtaW47XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgIHJldHVybiByZXBseS5zdGF0dXMoNDAxKS5zZW5kKHtcclxuICAgICAgc3VjY2VzczogZmFsc2UsXHJcbiAgICAgIGNvZGU6IDQwMSxcclxuICAgICAgc3RhdHVzQ29kZTogNDAxLFxyXG4gICAgICBtZXNzYWdlOiAnQXV0aG9yaXphdGlvbiBmYWlsZWQnLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==