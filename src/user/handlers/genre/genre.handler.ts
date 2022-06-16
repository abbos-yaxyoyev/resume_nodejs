import { GenreException } from '../../../common/db/models/genre/exception';
import { genreService } from '../../../common/service/genre/genre.service';
import { GenreDto, GenreDtoGroup, GenreGetDto } from '../../../common/validation/dto/genre.dto';
import { validateIt } from '../../../common/validation/validate';

export async function getOneGenreHandler(request, reply) {
  try {

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

export async function getPagingGenreHandler(request, reply) {
  try {

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

export async function getGenreFirstChildHandler(request, reply) {

  try {

    const data = await validateIt(request.params, GenreDto, [GenreDtoGroup.PAGENATION]);

    const genres = await genreService.getFirstChildPaging(data._id);

    return reply.success(genres);

  } catch (e) {
    if (e instanceof GenreException) {
      throw e;
    } else {
      throw GenreException.UnknownError(e);
    }
  }

}

