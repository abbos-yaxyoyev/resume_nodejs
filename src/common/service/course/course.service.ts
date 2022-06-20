import { ModelType } from '@typegoose/typegoose/lib/types';
import { Types } from 'mongoose';
import { COLLECTIONS } from '../../constants/collections';
import { CommonServices } from '../common.service';
import { CourseException } from './../../db/models/course/exceptions';
import { Course, CourseModel } from './../../db/models/course/models';
import { CourseGetDto } from './../../validation/dto/course/course.dto';

class CourseService extends CommonServices<Course>{
  constructor(model: ModelType<Course>) {
    super(model, CourseException);
  }

  public async findByIdError(id) {
    const course = await this.findById(id);
    if (!course) throw CourseException.NotFound(id);
    return course;
  }

  public async getPaging(dto: CourseGetDto) {
    try {

      let { search } = dto;
      let query: any = { isDeleted: false };

      if (search) {
        query['$expr'] = {
          $regexMatch: {
            input: '$name',
            options: 'i',
            regex: dto.search,
          },
        };
      }

      const $projection = {
        $project: {
          name: 1,
          imgUrl: 1,
          description: 1
        }
      }

      const $pipeline = [
        $projection
      ]

      if (!dto.limit) {
        dto.limit = await this.count(query)
      }

      return await this.findPaging(query, dto, $pipeline)
    } catch (e) {
      console.log("error Course paging: ", e);
      throw CourseException.UnknownError(e);
    }
  }

  public async getPagingWithCourseParts(dto: CourseGetDto) {
    try {
      let { search, asc, limit } = dto;

      if (!asc) {
        dto.asc = 1
      }

      let query: any = {
        isDeleted: false
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

      const $loookupCourseParts = {
        $lookup: {
          from: COLLECTIONS.COURSE_PARTS,
          let: {
            courseId: '$_id',
          },
          pipeline: [
            {
              $match: {
                isDeleted: false,
                $expr: {
                  $eq: ["$courseId", "$$courseId"]
                }
              }
            },
            {
              $project: {
                imgUrl: 1,
                videoUrl: 1,
                description: 1,
                createdAt: 1,
              }
            }

          ],
          as: 'courses',
        }
      }


      const $projection = {
        $project: {
          name: 1,
          imgUrl: 1,
          courses: 1,
          description: 1,
        }
      }

      const $pipeline = [
        $loookupCourseParts,
        $projection,
      ]

      if (!limit) dto.limit = await this.count(query);

      return await this.findPaging(query, dto, $pipeline)
    } catch (e) {
      console.log("error course items paging: ", e);
      throw CourseException.UnknownError(e)
    }
  }

  public async getCourseOneWithCourseParts(id: string) {
    try {

      const $match = {
        $match: {
          isDeleted: false,
          _id: new Types.ObjectId(id)
        }
      };

      const $loookupCourseParts = {
        $lookup: {
          from: COLLECTIONS.COURSE_PARTS,
          let: {
            courseId: '$_id',
          },
          pipeline: [
            {
              $match: {
                isDeleted: false,
                $expr: {
                  $eq: ["$courseId", "$$courseId"]
                }
              }
            },
            {
              $project: {
                imgUrl: 1,
                videoUrl: 1,
                description: 1,
                createdAt: 1,
              }
            }

          ],
          as: 'courses',
        }
      }


      const $projection = {
        $project: {
          name: 1,
          imgUrl: 1,
          courses: 1,
          description: 1,
        }
      }

      const $pipline = [
        $match,
        $loookupCourseParts,
        $projection,
      ]


      const data = await this.aggregate($pipline);
      if (!data || !data[0]) throw CourseException.NotFound(id)
      return data[0];
    } catch (e) {
      console.log("error category items paging: ", e);
      if (e instanceof CourseException) {
        throw e;
      } else {
        throw CourseException.UnknownError(e);
      }
    }
  }

}

export const courseService = new CourseService(CourseModel)