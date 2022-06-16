import { Roles } from '../../../common/constants/roles';
import { GenreException } from '../../../common/db/models/genre/exception';
import { roleService } from '../../../common/service/employee/role/role.service';
import { genreService } from '../../../common/service/genre/genre.service';
import { GenreDto, GenreDtoGroup, GenreGetDto } from '../../../common/validation/dto/genre.dto';
import { validateIt } from '../../../common/validation/validate';

export async function createGenreHandler(request, reply) {
  try {
    await roleService.hasAccess(request.admin.roleId, Roles.GENRE_CREATE);

    const data = await validateIt(request.body, GenreDto, [GenreDtoGroup.CREATE]);

    const genre = await genreService.create(data);

    return reply.success(genre._id);
  } catch (e) {
    if (e instanceof GenreException) {
      throw e;
    } else {
      throw GenreException.UnknownError(e);
    }
  }
}

export async function updateGenreHandler(request, reply) {
  try {
    await roleService.hasAccess(request.admin.roleId, Roles.GENRE_UPDATE);

    const data = await validateIt(request.body, GenreDto, [GenreDtoGroup.UPDATE]);

    const genre = await genreService.updateOne(data._id, data, { new: true });

    return reply.success(genre._id);

  } catch (e) {
    if (e instanceof GenreException) {
      throw e;
    } else {
      throw GenreException.UnknownError(e);
    }
  }
}

export async function getOneGenreHandler(request, reply) {
  try {
    await roleService.hasAccess(request.admin.roleId, Roles.GENRE);

    const data = await validateIt(request.params, GenreDto, [GenreDtoGroup.GET_BY_ID]);

    const genre = await genreService.getGenereFull(data._id);

    return reply.success(genre);

  } catch (e) {
    if (e instanceof GenreException) {
      throw e;
    } else {
      throw GenreException.UnknownError(e);
    }
  }
}

export async function getPagingGenresHandler(request, reply) {
  try {
    await roleService.hasAccess(request.admin.roleId, Roles.GENRE);

    const data = await validateIt(request.query, GenreGetDto, [GenreDtoGroup.PAGENATION]);

    const genres = await genreService.getPaging(data);

    return reply.success(genres);

  } catch (e) {
    if (e instanceof GenreException) {
      throw e;
    } else {
      throw GenreException.UnknownError(e);
    }
  }
}

export async function deleteOneGenreHandler(request, reply) {
  try {
    await roleService.hasAccess(request.admin.roleId, Roles.GENRE_DELETE);

    const data = await validateIt(request.params, GenreDto, [GenreDtoGroup.DELETE]);

    await genreService.checkGenreId(data._id);

    await genreService.markAsDeleted(data._id)

    return reply.success(data._id);

  } catch (e) {
    if (e instanceof GenreException) {
      throw e;
    } else {
      throw GenreException.UnknownError(e);
    }
  }
}
