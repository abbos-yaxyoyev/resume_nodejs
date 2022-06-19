import { ModelType } from '@typegoose/typegoose/lib/types';
import { Types } from 'mongoose';
import { COLLECTIONS } from '../../constants/collections';
import { CategoryException } from '../../db/models/category/exception';
import { Category, CategoryModel } from '../../db/models/category/models';
import { CategoryGetDto } from '../../validation/dto/category.dto';
import { CommonServices } from '../common.service';

class CategoryService extends CommonServices<Category> {
  constructor(model: ModelType<Category>) {
    super(model, CategoryException);
  }
  public async findByIdError(id) {
    const Category = await this.findById(id);
    if (!Category) throw CategoryException.NotFound(id);
    return Category;
  }

  public async getPaging(dto: CategoryGetDto) {
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

      const $lookupBooks = {
        $lookup: {
          from: COLLECTIONS.BOOK,
          let: {
            categoryId: '$_id',
          },
          pipeline: [
            {
              $match: {
                isDeleted: false,
                $expr: {
                  $eq: ['$categoryId', '$$categoryId'],
                },
              },
            },
            {
              $lookup: {
                from: COLLECTIONS.AUTHOR,
                foreignField: '_id',
                localField: 'authorId',
                as: 'author',
              },
            },
            {
              $unwind: {
                path: '$author',
                preserveNullAndEmptyArrays: true,
              },
            },
            {
              $project: {
                _id: 1,
                name: 1,
                imgUrl: 1,
                author: {
                  fullName: 1,
                  imgUrl: 1,
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
          name: 1,
          imgUrl: 1,
          books: 1
        },
      };

      const $pipeline = [
        $lookupBooks,
        $projection
      ]

      if (!dto.limit) {
        dto.limit = await this.count(query);
      }

      if (!dto.page) dto.page = 1;

      return await this.findPaging(query, dto, $pipeline);
    } catch (error) {
      throw CategoryException.UnknownError(error);
    }
  }

  public async getCategoryFull<T>(id: string,) {
    try {
      const $match = {
        $match: {
          isDeleted: false,
          _id: new Types.ObjectId(id),
        },
      };

      const $lookupBooks = {
        $lookup: {
          from: COLLECTIONS.BOOK,
          let: {
            categoryId: '$_id',
          },
          pipeline: [
            {
              $match: {
                isDeleted: false,
                $expr: {
                  $eq: ['$categoryId', '$$categoryId'],
                },
              },
            },
            {
              $lookup: {
                from: COLLECTIONS.AUTHOR,
                foreignField: '_id',
                localField: 'authorId',
                as: 'author',
              },
            },
            {
              $unwind: {
                path: '$author',
                preserveNullAndEmptyArrays: true,
              },
            },
            {
              $project: {
                _id: 1,
                name: 1,
                imgUrl: 1,
                author: {
                  fullName: 1,
                  imgUrl: 1,
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
          name: 1,
          imgUrl: 1,
          books: 1
        },
      };

      const $pipline = [
        $match,
        $lookupBooks,
        $projection
      ];

      const data = await this.aggregate($pipline);
      const category = data.shift();
      if (!category) throw CategoryException.NotFound();
      return category;
    } catch (e) {
      if (e instanceof CategoryException) {
        throw e;
      } else {
        throw CategoryException.UnknownError(e);
      }
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
          foreignField: 'categoryId',
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

      const category = data.shift();
      if (category) throw CategoryException.CanNotDeleteCategory(id);
      return category;
    } catch (e) {
      if (e instanceof CategoryException) {
        throw e;
      } else {
        throw CategoryException.UnknownError(e);
      }
    }
  }
}

export const categoryService = new CategoryService(CategoryModel);
