import { Types } from 'mongoose';
import { Roles } from '../../../common/constants/roles';
import { BookException } from '../../../common/db/models/book/exceptions';
import { bookService } from '../../../common/service/book/book.service';
import { roleService } from '../../../common/service/employee/role/role.service';
import { BookDto, BookDtoGroup, BookGetDto } from '../../../common/validation/dto/book/book.dto';
import { validateIt } from '../../../common/validation/validate';

export async function createBookHandler(request, reply) {
  try {
    await roleService.hasAccess(request.admin.roleId, Roles.BOOK_CREATE);

    const data = await validateIt(request.body, BookDto, [BookDtoGroup.CREATE]);

    const book = await bookService.create(data);

    return reply.success(book._id);
  } catch (e) {
    if (e instanceof BookException) {
      throw e;
    } else {
      throw BookException.UnknownError(e);
    }
  }
}

export async function updateBookHandler(request, reply) {
  try {
    await roleService.hasAccess(request.admin.roleId, Roles.BOOK_UPDATE);

    const data = await validateIt(request.body, BookDto, [BookDtoGroup.UPDATE]);

    const book = await bookService.updateOne(data._id, data, { new: true });

    return reply.success(book._id);
  } catch (e) {
    if (e instanceof BookException) {
      throw e;
    } else {
      throw BookException.UnknownError(e);
    }
  }
}

export async function getPagingBookHandler(request, reply) {
  try {
    await roleService.hasAccess(request.admin.roleId, Roles.BOOK);

    const data = await validateIt(request.query, BookGetDto, [BookDtoGroup.PAGENATION]);

    const book = await bookService.getPaging(data);

    return reply.success(book);
  } catch (e) {
    if (e instanceof BookException) {
      throw e;
    } else {
      throw BookException.UnknownError(e);
    }
  }

}

export async function getOneBookHandler(request, reply) {

  try {
    await roleService.hasAccess(request.admin.roleId, Roles.BOOK);

    const data = await validateIt(request.params, BookDto, [BookDtoGroup.GET_BY_ID]);

    const book = await bookService.getOneBook(data._id);

    return reply.success(book);
  } catch (e) {
    if (e instanceof BookException) {
      throw e;
    } else {
      throw BookException.UnknownError(e);
    }
  }

}

export async function deleteOneBookHandler(request, reply) {
  try {
    await roleService.hasAccess(request.admin.roleId, Roles.BOOK_DELETE);

    const data = await validateIt(request.params, BookDto, [BookDtoGroup.GET_BY_ID]);

    const query = {
      isDeleted: false,
      _id: new Types.ObjectId(data._id),
    };

    delete request.body._id;

    await bookService.updateOneByQuery(
      query,
      { ...request.body, isDeleted: true, deletedAt: Date.now() },
      { new: true },
    );

    return reply.success(data._id);
  } catch (e) {
    if (e instanceof BookException) {
      throw e;
    } else {
      throw BookException.UnknownError(e);
    }
  }

}
