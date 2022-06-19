import { Roles } from '../../../common/constants/roles';
import { CategoryException } from '../../../common/db/models/category/exception';
import { categoryService } from '../../../common/service/category/category.service';
import { roleService } from '../../../common/service/employee/role/role.service';
import { CategoryDto, CategoryDtoGroup, CategoryGetDto } from '../../../common/validation/dto/category.dto';
import { validateIt } from '../../../common/validation/validate';

export async function createCategoryHandler(request, reply) {
  try {
    await roleService.hasAccess(request.admin.roleId, Roles.GENRE_CREATE);

    const data = await validateIt(request.body, CategoryDto, [CategoryDtoGroup.CREATE]);

    const genre = await categoryService.create(data);

    return reply.success(genre._id);
  } catch (e) {
    if (e instanceof CategoryException) {
      throw e;
    } else {
      throw CategoryException.UnknownError(e);
    }
  }
}

export async function updateCategoryHandler(request, reply) {
  try {
    await roleService.hasAccess(request.admin.roleId, Roles.GENRE_UPDATE);

    const data = await validateIt(request.body, CategoryDto, [CategoryDtoGroup.UPDATE]);

    const genre = await categoryService.updateOne(data._id, data, { new: true });

    return reply.success(genre._id);

  } catch (e) {
    if (e instanceof CategoryException) {
      throw e;
    } else {
      throw CategoryException.UnknownError(e);
    }
  }
}

export async function getOneCategoryHandler(request, reply) {
  try {
    await roleService.hasAccess(request.admin.roleId, Roles.GENRE);

    const data = await validateIt(request.params, CategoryDto, [CategoryDtoGroup.GET_BY_ID]);

    const genre = await categoryService.getCategoryFull(data._id);

    return reply.success(genre);

  } catch (e) {
    if (e instanceof CategoryException) {
      throw e;
    } else {
      throw CategoryException.UnknownError(e);
    }
  }
}

export async function getPagingGenresHandler(request, reply) {
  try {
    await roleService.hasAccess(request.admin.roleId, Roles.GENRE);

    const data = await validateIt(request.query, CategoryGetDto, [CategoryDtoGroup.PAGENATION]);

    const genres = await categoryService.getPaging(data);

    return reply.success(genres);

  } catch (e) {
    if (e instanceof CategoryException) {
      throw e;
    } else {
      throw CategoryException.UnknownError(e);
    }
  }
}

export async function deleteOneCategoryHandler(request, reply) {
  try {
    await roleService.hasAccess(request.admin.roleId, Roles.GENRE_DELETE);

    const data = await validateIt(request.params, CategoryDto, [CategoryDtoGroup.DELETE]);

    await categoryService.checkGenreId(data._id);

    await categoryService.markAsDeleted(data._id)

    return reply.success(data._id);

  } catch (e) {
    if (e instanceof CategoryException) {
      throw e;
    } else {
      throw CategoryException.UnknownError(e);
    }
  }
}
