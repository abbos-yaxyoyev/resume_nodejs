import { ModelType } from '@typegoose/typegoose/lib/types';
import { Types } from 'mongoose';
import { COLLECTIONS } from '../../constants/collections';
import { GenreException } from '../../db/models/genre/exception';
import { Genre, GenreModel } from '../../db/models/genre/models';
import { GenreGetDto } from '../../validation/dto/genre.dto';
import { CommonServices } from '../common.service';

class GenreService extends CommonServices<Genre> {
  constructor(model: ModelType<Genre>) {
    super(model, GenreException);
  }
  public async findByIdError(id) {
    const genre = await this.findById(id);
    if (!genre) throw GenreException.NotFound(id);
    return genre;
  }

  public async getPaging(dto: GenreGetDto) {
    try {
      let query = {
        isDeleted: false,
        name: {
          $options: 'ig',
          $regex: dto.search,
        }
      }

      if (!dto.sortBy) {
        dto.sortBy = 'createdAt';
      }

      const $graphLookup = {
        $graphLookup: {
          from: COLLECTIONS.GENRE,
          startWith: "$_id",
          connectFromField: '_id',
          connectToField: 'parentId',
          as: 'children',
        }
      }

      const $projectionFilter = {
        $project: {
          _id: 1,
          name: 1,
          imgUrl: 1,
          children: {
            $filter: {
              input: "$children",
              as: "child",
              cond: { $eq: ["$$child.isDeleted", false] }
            }
          }
        },
      };

      const $projectionSize = {
        $project: {
          _id: 1,
          name: 1,
          imgUrl: 1,
          children: {
            $size: "$children"
          }
        },
      };

      const $pipeline = [
        $graphLookup,
        $projectionFilter,
        $projectionSize
      ]

      if (!dto.limit) {
        dto.limit = await this.count(query);
      }

      if (!dto.page) dto.page = 1;

      return await this.findPaging(query, dto, $pipeline);
    } catch (error) {
      throw GenreException.UnknownError(error);
    }
  }

  public async getGenereFull<T>(id: string,) {
    try {
      const $match = {
        $match: {
          isDeleted: false,
          _id: new Types.ObjectId(id),
        },
      };

      const $lookupParentId = {
        $lookup: {
          from: COLLECTIONS.GENRE,
          foreignField: '_id',
          localField: 'parentId',
          as: 'parent',
        },
      };

      const $unwindParentId = {
        $unwind: {
          path: '$parent',
          preserveNullAndEmptyArrays: true,
        },
      };

      const $projection = {
        $project: {
          _id: 1,
          name: 1,
          imgUrl: 1,
          parent: {
            _id: 1,
            name: `$parent.name`,
          },
        },
      };

      const $pipline = [
        $match,
        $lookupParentId,
        $unwindParentId,
        $projection
      ];

      const data = await this.aggregate($pipline);
      const genre = data.shift();
      if (!genre) throw GenreException.NotFound();
      return genre;
    } catch (e) {
      if (e instanceof GenreException) {
        throw e;
      } else {
        throw GenreException.UnknownError(e);
      }
    }
  }

  public async getFirstChildPaging<T>(_id: string) {
    try {
      const $match = {
        $match: {
          isDeleted: false,
          // _id: new Types.ObjectId(_id),
          parentId: new Types.ObjectId(_id),
        }
      }

      const $graphLookup = {
        $graphLookup: {
          from: COLLECTIONS.GENRE,
          startWith: "$_id",
          connectFromField: '_id',
          connectToField: 'parentId',
          as: 'children',
        }
      }

      const $projectionFilter = {
        $project: {
          _id: 1,
          name: 1,
          imgUrl: 1,
          // children: 1
          children: {
            $filter: {
              input: "$children",
              as: "child",
              cond: { $eq: ["$$child.isDeleted", false] }
            }
          }
        },
      };

      const $projectionSize = {
        $project: {
          _id: 1,
          name: 1,
          imgUrl: 1,
          children: {
            $size: "$children"
          }
        },
      };

      const $pipline = [
        $match,
        $graphLookup,
        $projectionFilter,
        $projectionSize,
      ];

      return await this.aggregate($pipline);

    } catch (e) {
      throw GenreException.UnknownError(e);
    }
  }

  public async checkGenreId<T>(id: string) {
    try {
      const $matchGenre = {
        $match: {
          isDeleted: false,
          _id: new Types.ObjectId(id),
        },
      };

      const $lookupBook = {
        $lookup: {
          from: COLLECTIONS.BOOK,
          foreignField: 'genreId',
          localField: '_id',
          as: 'books',
        },
      };

      const $unwindBook = {
        $unwind: {
          path: '$books',
          preserveNullAndEmptyArrays: false,
        },
      };

      const $replaceRoot = {
        $replaceRoot: {
          newRoot: '$books',
        },
      };

      const $matchBook = {
        $match: {
          isDeleted: false,
          genreId: new Types.ObjectId(id),
        },
      };

      const $pipline = [$matchGenre, $lookupBook, $unwindBook, $replaceRoot, $matchBook];

      let data = await this.aggregate($pipline);

      const genre = data.shift();
      if (genre) throw GenreException.CanNotDeleteGenre(id);
      return genre;
    } catch (e) {
      if (e instanceof GenreException) {
        throw e;
      } else {
        throw GenreException.UnknownError(e);
      }
    }
  }
}

export const genreService = new GenreService(GenreModel);
