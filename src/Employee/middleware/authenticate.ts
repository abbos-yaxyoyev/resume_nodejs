import { employeeService } from '../../common/service/employee/employee.service';

export async function authEmployee(request, reply) {
  try {
    const { _id } = await request.jwtVerify();

    const admin = await employeeService.findByIdError(_id, {}, { _v: 0, deletedAt: 0 });

    const method: string = request.method;
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
  } catch (error) {
    console.log(error);
    return reply.status(401).send({
      success: false,
      code: 401,
      statusCode: 401,
      message: 'Authorization failed',
    });
  }
}
