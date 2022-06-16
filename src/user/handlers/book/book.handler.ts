import { BookException } from '../../../common/db/models/book/exceptions';
import { bookService } from '../../../common/service/book/book.service';
import { BookDto, BookDtoGroup, BookGetDto } from '../../../common/validation/dto/book/book.dto';
import { validateIt } from '../../../common/validation/validate';

export async function getOneBookHandler(request, reply) {
  try {
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

export async function getPagingBookHandler(request, reply) {

  try {

    const data = await validateIt(request.query, BookGetDto, [BookDtoGroup.PAGENATION]);

    let books = await bookService.getPaging(data);

    return reply.success(books);

  } catch (e) {
    if (e instanceof BookException) {
      throw e;
    } else {
      throw BookException.UnknownError(e);
    }
  }

}
