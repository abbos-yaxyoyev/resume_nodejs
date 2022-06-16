import { userService } from '../../common/service/user/user.service';

export async function authUser(request, reply) {
  try {
    console.log("request.ip: ", request.ip);

    const token = await request.jwtVerify();
    const user = await userService.findByIdError(token._id, {});
    request.user = user;
  } catch (error) {
    return reply.status(401).send({
      code: 401,
      statusCode: 401,
      message: 'Authorization failed',
    });
  }
}

export async function mightyUserAuth(request, reply) {
  try {
    const { _id } = await request.jwtVerify();
    const user = await userService.findByIdError(_id, {});
    request.user = user;
  } catch (error) { }
}
