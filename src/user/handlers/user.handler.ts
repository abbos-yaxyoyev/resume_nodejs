import md5 from 'md5';
import { UserException } from '../../common/db/models/user/exception';
import { jwtSign } from '../../common/plugin/authPlugin';
import { userService } from '../../common/service/user/user.service';
import { CommonDtoGroup } from '../../common/validation/common.dto';
import { UserDto, UserDtoGroup } from '../../common/validation/dto/commonUser/user/user.dto';
import { validateIt } from '../../common/validation/validate';

export async function signUpHandler(request, reply) {
  try {
    const data = await validateIt(request.body, UserDto, [CommonDtoGroup.CREATE]);

    const checkUser = await userService.findOne({ password: md5(data.password) });

    if (checkUser) throw UserException.AllreadyExist(data.password);
    data.password = md5(data.password);
    const { _id, fullName, password, } = await userService.create(data);


    const token = await jwtSign(request, { _id });

    return reply.success({
      token,
      user: { _id, fullName }
    });

  } catch (e) {
    throw UserException.UnknownError(e);
  }
}

export async function signInHandler(request, reply) {
  try {
    const data = await validateIt(request.body, UserDto, [UserDtoGroup.LOGIN]);

    const { _id, fullName, password } = await userService.findOne({ password: md5(data.password) });

    if (!fullName) throw UserException.NotFound(data.password);

    if (md5(data.password) != password) throw UserException.InvalidPassword();

    const token = await jwtSign(request, { _id });

    return reply.success({
      token,
      user: { _id, fullName }
    });

  } catch (e) {
    if (e instanceof UserException) {
      throw e;
    } else {
      throw UserException.UnknownError(e);
    }
  }
}

export async function updateProfileHandler(request, reply) {
  try {
    request.body._id = request.user._id.toString();

    const data = await validateIt(request.body, UserDto, [UserDtoGroup.UPDATE]);

    if (data.password) data.password = md5(data.password);

    const { _id, fullName } = await userService.updateOne(data._id, data, { new: true });

    return reply.success({ _id, fullName });

  } catch (e) {
    throw UserException.UnknownError(e);
  }
}

export async function getProfileHandler(request, reply) {
  try {

    const userId = request.user._id.toString()

    const { _id, fullName, createdAt } = await userService.findByIdError(userId);

    return reply.success({ _id, fullName, createdAt });

  } catch (e) {
    if (e instanceof UserException) {
      throw e;
    } else {
      throw UserException.UnknownError(e);
    }
  }
}

//! remove account image
export async function removeProfileImageHandler(request, reply) {
  try {

    await userService.updateOne(request.user._id, { imgUrl: null }, { new: true });

    return reply.success(request.user._id);

  } catch (e) {
    throw UserException.UnknownError(e);
  }
}

export async function deleteProfileHandler(request, reply) {
  try {

    await userService.updateOne(
      { _id: request.user._id },
      { isDeleted: true, deletedAt: new Date() },
      { new: true },
    );

    return reply.success(request.user._id);

  } catch (e) {
    throw UserException.UnknownError(e);
  }
}
