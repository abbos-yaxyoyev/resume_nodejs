import { ModelType } from '@typegoose/typegoose/lib/types';
import { Types } from 'mongoose';
import { COLLECTIONS } from '../../constants/collections';
import { BookException } from '../../db/models/book/exceptions';
import { Books, BooksModel } from '../../db/models/book/models';
import { BookGetDto } from '../../validation/dto/book/book.dto';
import { CommonServices } from '../common.service';

class BookService extends CommonServices<Books> {
  constructor(model: ModelType<Books>) {
    super(model, BookException);
  }
  public async findByIdError(id) {
    const book = await this.findById(id);
    if (!book) throw BookException.NotFound(id);
    return book;
  }

  public async getPaging<T>(dto: BookGetDto) {
    try {

      let { search, authorId, genreId, } = dto;

      const query: any = {
        isDeleted: false,
      };

      if (search) {
        query['$expr'] = {
          $regexMatch: {
            input: '$name',
            options: 'i',
            regex: search,
          },
        };
      }

      if (authorId) {
        query['authorId'] = authorId;
      }

      if (genreId) {
        query['genreIds'] = {
          $elemMatch: { $in: genreId }
        };
      }

      const $lookupAuthor = {
        $lookup: {
          from: COLLECTIONS.AUTHOR,
          foreignField: '_id',
          localField: 'authorId',
          as: 'author',
        },
      };

      const $unwindAuthor = {
        $unwind: {
          path: '$author',
          preserveNullAndEmptyArrays: false,
        },
      };

      const $lookupGenre = {
        $lookup: {
          from: COLLECTIONS.GENRE,
          let: {
            genreIds: '$genreIds',
          },
          pipeline: [
            {
              $match: {
                isDeleted: false,
                $expr: {
                  $in: ['$_id', '$$genreIds'],
                },
              },
            },
            {
              $project: {
                _id: 1,
                name: 1,
                imgUrl: 1,
              },
            },
          ],
          as: 'genre',
        },
      };

      const $projection = {
        $project: {
          _id: 1,
          name: 1,
          description: 1,

          author: {
            _id: 1,
            imgUrl: 1,
            fullName: 1,
            dateOfbirth: 1,
            dateOfdeath: 1,
          },

          genre: 1,
          imgUrl: 1,

        },
      };

      const $pipeline = [
        $lookupAuthor,
        $unwindAuthor,
        $lookupGenre,
        $projection,
      ];

      return await this.findPaging(query, dto, $pipeline);
    } catch (error) {
      throw BookException.UnknownError(error);
    }
  }

  public async getOneBook(id: string) {
    try {
      const $match = {
        $match: {
          isDeleted: false,
          _id: new Types.ObjectId(id),
        },
      };

      const $lookupGenre = {
        $lookup: {
          from: COLLECTIONS.GENRE,
          let: {
            genreIds: '$genreIds',
          },
          pipeline: [
            {
              $match: {
                isDeleted: false,
                $expr: {
                  $in: ['$_id', '$$genreIds']
                }
              },
            },
            {
              $project: {
                _id: 1,
                name: 1,
                imgUrl: 1,
              },
            },
          ],
          as: 'genre',
        },
      };

      const $lookupAuthor = {
        $lookup: {
          from: COLLECTIONS.AUTHOR,
          foreignField: '_id',
          localField: 'authorId',
          as: 'author',
        },
      };

      const $unwindAuthor = {
        $unwind: {
          path: '$author',
          preserveNullAndEmptyArrays: true,
        },
      };

      const $projection = {
        $project: {
          _id: 1,
          name: 1,
          imgUrl: 1,
          description: 1,

          author: {
            _id: 1,
            imgUrl: 1,
            fullName: 1,
            dateOfbirth: 1,
            dateOfdeath: 1,
          },

          genre: 1,

        },
      };

      const $pipeline = [
        $match,
        $lookupAuthor,
        $unwindAuthor,
        $lookupGenre,
        $projection,
      ];

      const data = await this.aggregate($pipeline);
      if (!data[0]) throw BookException.NotFound(id);
      return data[0];
    } catch (e) {
      console.log("error book get by id service: ", e);
      if (e instanceof BookException) {
        throw e;
      } else {
        throw BookException.UnknownError(e);
      }
    }
  }

}

export const bookService = new BookService(BooksModel);
