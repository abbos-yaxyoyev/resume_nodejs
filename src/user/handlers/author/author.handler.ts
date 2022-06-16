import { AuthorException } from '../../../common/db/models/author/exception';
import { authorService } from '../../../common/service/author/author.service';
import { AuthorDtoGroup, AuthorGetDto } from '../../../common/validation/dto/book/author.dto';
import { validateIt } from '../../../common/validation/validate';

export async function getPagingAuthorHandler(request, reply) {
  try {

    const data = await validateIt(request.query, AuthorGetDto, [AuthorDtoGroup.PAGENATION]);

    const authors = await authorService.getPaging(data);

    return reply.success(authors);

  } catch (e) {
    if (e instanceof AuthorException) {
      throw e;
    } else {
      throw AuthorException.UnknownError(e);
    }
  }
}

