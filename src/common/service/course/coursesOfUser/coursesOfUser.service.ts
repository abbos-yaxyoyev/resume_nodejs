import { ModelType } from '@typegoose/typegoose/lib/types';
import { Types } from 'mongoose';
import { COLLECTIONS } from '../../../constants/collections';
import { CoursesOfUser } from '../../../db/models/course/coresesOfUsers/models';
import { CommonServices } from '../../common.service';
import { CoursesOfUserException } from './../../../db/models/course/coresesOfUsers/exceptions';
import { CoursesOfUserModel } from './../../../db/models/course/coresesOfUsers/models';


class CoursesOfUserService extends CommonServices<CoursesOfUser>{
  constructor(model: ModelType<CoursesOfUser>) {
    super(model, CoursesOfUserException);
  }

  public async findByIdError(id) {
    const course = await this.findById(id);
    if (!course) throw CoursesOfUserException.NotFound(id);
    return course;
  }

  public async getUsersOfCourse(id: string) {
    try {

      const $match = {
        $match: {
          isDeleted: false,
          courseId: new Types.ObjectId(id)
        }
      };

      const $loookupCourseParts = {
        $lookup: {
          from: COLLECTIONS.USER,
          let: {
            userId: '$userId',
          },
          pipeline: [
            {
              $match: {
                isDeleted: false,
                $expr: {
                  $eq: ["$_id", "$$userId"]
                }
              }
            },
            {
              $project: {
                firstName: 1,
                lastName: 1,
                phoneNumber: 1,
                imgUrl: 1,
                createdAt: 1,
                updatedAt: 1
              }
            }

          ],
          as: 'users',
        }
      }

      const $unwindUser = {
        $unwind: {
          path: '$users',
          preserveNullAndEmptyArrays: false,
        },
      }

      const $replaceRoot = {
        $replaceRoot: {
          newRoot: '$users',
        },
      };




      const $pipline = [
        $match,
        $loookupCourseParts,
        $unwindUser,
        $replaceRoot
      ]

      const data = await this.aggregate($pipline);
      if (!data[0]) throw CoursesOfUserException.NotFound(id)
      return data;
    } catch (e) {
      console.log("error Course paging: ", e);
      if (e instanceof CoursesOfUserException) {
        throw e;
      } else {
        throw CoursesOfUserException.UnknownError(e);
      }
    }
  }

  public async getCoursesOfUser(id: string) {
    try {

      const $match = {
        $match: {
          isDeleted: false,
          userId: new Types.ObjectId(id)
        }
      };

      const $loookupCourses = {
        $lookup: {
          from: COLLECTIONS.COURSE,
          let: {
            courseId: '$courseId',
          },
          pipeline: [
            {
              $match: {
                isDeleted: false,
                $expr: {
                  $eq: ["$_id", "$$courseId"]
                }
              }
            },
            {
              $project: {
                name: 1,
                imgUrl: 1,
                description: 1,
                createdAt: 1,
                updatedAt: 1
              }
            }

          ],
          as: 'courses',
        }
      }

      const $unwindCourses = {
        $unwind: {
          path: '$courses',
          preserveNullAndEmptyArrays: false,
        },
      }

      const $replaceRoot = {
        $replaceRoot: {
          newRoot: '$courses',
        },
      };




      const $pipline = [
        $match,
        $loookupCourses,
        $unwindCourses,
        $replaceRoot
      ]

      const data = await this.aggregate($pipline);
      if (!data[0]) throw CoursesOfUserException.NotFound(id)
      return data;
    } catch (e) {
      console.log("error Course paging: ", e);
      if (e instanceof CoursesOfUserException) {
        throw e;
      } else {
        throw CoursesOfUserException.UnknownError(e);
      }
    }
  }

}

export const coursesOfUserService = new CoursesOfUserService(CoursesOfUserModel)