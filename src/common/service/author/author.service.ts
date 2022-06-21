import { ModelType } from '@typegoose/typegoose/lib/types';
import { Types } from 'mongoose';
import { COLLECTIONS } from '../../constants/collections';
import { AuthorException } from '../../db/models/author/exception';
import { Author, AuthorModel } from '../../db/models/author/models';
import { AuthorGetDto } from '../../validation/dto/book/author.dto';
import { CommonServices } from '../common.service';

class AuthorService extends CommonServices<Author> {
  constructor(model: ModelType<Author>) {
    super(model);
  }
  public async findByIdError(id) {
    const author = await this.findById(id);
    if (!author) throw AuthorException.NotFound(id);
    return author;
  }

  public async getPaging<T>(dto: AuthorGetDto) {
    try {
      let query: any = {
        isDeleted: false
      };

      if (dto.search) {
        query = {
          isDeleted: false,
          fullName: {
            $options: 'ig',
            $regex: dto.search,
          },
        };
      }

      const $lookupBook = {
        $lookup: {
          from: COLLECTIONS.BOOK,
          let: {
            authorId: '$authorId',
          },
          pipeline: [
            {
              $match: {
                isDeleted: false,
                isAvailable: true,
                $expr: {
                  $eq: ['$authorId', '$$authorId']
                }
              },
            },
          ],
          as: 'books',
        },
      };

      const $projection = {
        $project: {
          _id: 1,
          imgUrl: 1,
          fullName: 1,

          bookCount: {
            $size: "$books"
          }
        },
      };

      const $pipline = [$lookupBook, $projection];

      if (!dto.limit) dto.limit = await this.count(query)

      return await this.findPaging(query, dto, $pipline);
    } catch (error) {
      throw AuthorException.UnknownError(error);
    }
  }

  public async getByIdFull<T>(id: string) {
    try {
      const $match = {
        $match: {
          isDeleted: false,
          _id: new Types.ObjectId(id),
        },
      };

      const $projection = {
        $project: {
          _id: 1,
          imgUrl: 1,
          fullName: 1
        },
      };

      const $pipeline = [$match, $projection];

      const data = await this.aggregate($pipeline);
      if (!data || !data[0]) throw AuthorException.NotFound(id)
      return data[0];
    } catch (e) {
      if (e instanceof AuthorException) {
        throw e;
      } else {
        throw AuthorException.UnknownError(e);
      }
    }
  }

  public async checkAuthorId<T>(id: string) {
    try {
      const $pipeline = [
        {
          $match: {
            _id: new Types.ObjectId(id),
          },
        },
        {
          $lookup: {
            from: COLLECTIONS.BOOK,
            localField: '_id',
            foreignField: 'authorId',
            as: 'book',
          },
        },
        {
          $unwind: {
            path: '$book',
            preserveNullAndEmptyArrays: false,
          },
        },
        {
          $match: {
            'book.isDeleted': false,
          },
        },
        {
          $project: {
            deletedAt: 0,
            isDeleted: 0,
            __v: 0,
          },
        },
      ];

      const data = await this.aggregate($pipeline);
      if (data[0]) throw AuthorException.DeletedAuthor(id)
      return data;
    } catch (e) {
      if (e instanceof AuthorException) {
        throw e;
      } else {
        throw AuthorException.UnknownError(e);
      }
    }
  }
}

export const authorService = new AuthorService(AuthorModel);
