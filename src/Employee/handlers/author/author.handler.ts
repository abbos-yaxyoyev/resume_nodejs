import { Types } from 'mongoose';
import { Roles } from '../../../common/constants/roles';
import { AuthorException } from '../../../common/db/models/author/exception';
import { authorService } from '../../../common/service/author/author.service';
import { roleService } from '../../../common/service/employee/role/role.service';
import { AuthorDto, AuthorDtoGroup, AuthorGetDto } from '../../../common/validation/dto/book/author.dto';
import { validateIt } from '../../../common/validation/validate';

export async function createAuthorHandler(request, reply) {
  try {
    await roleService.hasAccess(request.admin.roleId, Roles.AUTHOR_CREATE);
    const data = await validateIt(request.body, AuthorDto, [AuthorDtoGroup.CREATE]);
    const author = await authorService.create(data);
    return reply.success(author._id);
  } catch (e) {
    if (e instanceof AuthorException) {
      throw e;
    } else {
      throw AuthorException.UnknownError(e);
    }
  }
}

export async function updateAuthorHandler(request, reply) {
  try {
    await roleService.hasAccess(request.admin.roleId, Roles.AUTHOR_UPDATE);

    const data = await validateIt(request.body, AuthorDto, [AuthorDtoGroup.UPDATE]);

    await authorService.findByIdError(data._id);

    const author = await authorService.updateOne(data._id, data, { new: true });

    return reply.success(author._id);
  } catch (e) {
    if (e instanceof AuthorException) {
      throw e;
    } else {
      throw AuthorException.UnknownError(e);
    }
  }
}

export async function getOneAuthorHandler(request, reply) {
  try {
    await roleService.hasAccess(request.admin.roleId, Roles.AUTHOR);

    const data = await validateIt(request.params, AuthorDto, [AuthorDtoGroup.GET_BY_ID]);

    const author = await authorService.getByIdFull(data._id);

    return reply.success(author);
  } catch (e) {
    if (e instanceof AuthorException) {
      throw e;
    } else {
      throw AuthorException.UnknownError(e);
    }
  }
}

export async function getPagingAuthorHandler(request, reply) {
  try {
    await roleService.hasAccess(request.admin.roleId, Roles.AUTHOR);

    const data = await validateIt(request.query, AuthorGetDto, [AuthorDtoGroup.PAGENATION]);

    const author = await authorService.getPaging(data);

    return reply.success(author);
  } catch (e) {
    if (e instanceof AuthorException) {
      throw e;
    } else {
      throw AuthorException.UnknownError(e);
    }
  }
}

export async function deleteOneAuthorHandler(request, reply) {
  try {
    await roleService.hasAccess(request.admin.roleId, Roles.AUTHOR_DELETE);

    const data = await validateIt(request.params, AuthorDto, [AuthorDtoGroup.DELETE]);

    const query = {
      isDeleted: false,
      _id: new Types.ObjectId(data._id),
    };

    await authorService.checkAuthorId(data._id);

    const author = await authorService.updateOneByQuery(
      query,
      { ...request.body, isDeleted: true, deletedAt: Date.now() },
      { new: true },
    );
    return reply.success(author._id);
  } catch (e) {
    if (e instanceof AuthorException) {
      throw e;
    } else {
      throw AuthorException.UnknownError(e);
    }
  }
}
