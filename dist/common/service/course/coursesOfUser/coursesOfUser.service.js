"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.coursesOfUserService = void 0;
const mongoose_1 = require("mongoose");
const collections_1 = require("../../../constants/collections");
const common_service_1 = require("../../common.service");
const exceptions_1 = require("./../../../db/models/course/coresesOfUsers/exceptions");
const models_1 = require("./../../../db/models/course/coresesOfUsers/models");
class CoursesOfUserService extends common_service_1.CommonServices {
    constructor(model) {
        super(model, exceptions_1.CoursesOfUserException);
    }
    async findByIdError(id) {
        const course = await this.findById(id);
        if (!course)
            throw exceptions_1.CoursesOfUserException.NotFound(id);
        return course;
    }
    async getUsersOfCourse(id) {
        try {
            const $match = {
                $match: {
                    isDeleted: false,
                    courseId: new mongoose_1.Types.ObjectId(id)
                }
            };
            const $loookupCourseParts = {
                $lookup: {
                    from: collections_1.COLLECTIONS.USER,
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
                                fullName: 1,
                                imgUrl: 1,
                                createdAt: 1,
                            }
                        }
                    ],
                    as: 'users',
                }
            };
            const $unwindUser = {
                $unwind: {
                    path: '$users',
                    preserveNullAndEmptyArrays: false,
                },
            };
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
            ];
            const data = await this.aggregate($pipline);
            if (!data[0])
                throw exceptions_1.CoursesOfUserException.NotFound(id);
            return data;
        }
        catch (e) {
            console.log("error Course paging: ", e);
            if (e instanceof exceptions_1.CoursesOfUserException) {
                throw e;
            }
            else {
                throw exceptions_1.CoursesOfUserException.UnknownError(e);
            }
        }
    }
    async getCoursesOfUser(id) {
        try {
            const $match = {
                $match: {
                    isDeleted: false,
                    userId: new mongoose_1.Types.ObjectId(id)
                }
            };
            const $loookupCourses = {
                $lookup: {
                    from: collections_1.COLLECTIONS.COURSE,
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
                                createdAt: 1
                            }
                        }
                    ],
                    as: 'courses',
                }
            };
            const $unwindCourses = {
                $unwind: {
                    path: '$courses',
                    preserveNullAndEmptyArrays: false,
                },
            };
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
            ];
            const data = await this.aggregate($pipline);
            if (!data[0])
                throw exceptions_1.CoursesOfUserException.NotFound(id);
            return data;
        }
        catch (e) {
            console.log("error Course paging: ", e);
            if (e instanceof exceptions_1.CoursesOfUserException) {
                throw e;
            }
            else {
                throw exceptions_1.CoursesOfUserException.UnknownError(e);
            }
        }
    }
}
exports.coursesOfUserService = new CoursesOfUserService(models_1.CoursesOfUserModel);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY291cnNlc09mVXNlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL2NvbW1vbi9zZXJ2aWNlL2NvdXJzZS9jb3Vyc2VzT2ZVc2VyL2NvdXJzZXNPZlVzZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFDQSx1Q0FBaUM7QUFDakMsZ0VBQTZEO0FBRTdELHlEQUFzRDtBQUN0RCxzRkFBK0Y7QUFDL0YsOEVBQXVGO0FBR3ZGLE1BQU0sb0JBQXFCLFNBQVEsK0JBQTZCO0lBQzlELFlBQVksS0FBK0I7UUFDekMsS0FBSyxDQUFDLEtBQUssRUFBRSxtQ0FBc0IsQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFFTSxLQUFLLENBQUMsYUFBYSxDQUFDLEVBQUU7UUFDM0IsTUFBTSxNQUFNLEdBQUcsTUFBTSxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxNQUFNO1lBQUUsTUFBTSxtQ0FBc0IsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDdkQsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQztJQUVNLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFVO1FBQ3RDLElBQUk7WUFFRixNQUFNLE1BQU0sR0FBRztnQkFDYixNQUFNLEVBQUU7b0JBQ04sU0FBUyxFQUFFLEtBQUs7b0JBQ2hCLFFBQVEsRUFBRSxJQUFJLGdCQUFLLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQztpQkFDakM7YUFDRixDQUFDO1lBRUYsTUFBTSxtQkFBbUIsR0FBRztnQkFDMUIsT0FBTyxFQUFFO29CQUNQLElBQUksRUFBRSx5QkFBVyxDQUFDLElBQUk7b0JBQ3RCLEdBQUcsRUFBRTt3QkFDSCxNQUFNLEVBQUUsU0FBUztxQkFDbEI7b0JBQ0QsUUFBUSxFQUFFO3dCQUNSOzRCQUNFLE1BQU0sRUFBRTtnQ0FDTixTQUFTLEVBQUUsS0FBSztnQ0FDaEIsS0FBSyxFQUFF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O1lBQ3ZELE9BQU8sSUFBSSxDQUFDO1NBQ2I7UUFBQyxPQUFPLENBQUMsRUFBRTtZQUNWLE9BQU8sQ0FBQyxHQUFHLENBQUMsdUJBQXVCLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDeEMsSUFBSSxDQUFDLFlBQVksbUNBQXNCLEVBQUU7Z0JBQ3ZDLE1BQU0sQ0FBQyxDQUFDO2FBQ1Q7aUJBQU07Z0JBQ0wsTUFBTSxtQ0FBc0IsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDOUM7U0FDRjtJQUNILENBQUM7Q0FFRjtBQUVZLFFBQUEsb0JBQW9CLEdBQUcsSUFBSSxvQkFBb0IsQ0FBQywyQkFBa0IsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9kZWxUeXBlIH0gZnJvbSAnQHR5cGVnb29zZS90eXBlZ29vc2UvbGliL3R5cGVzJztcclxuaW1wb3J0IHsgVHlwZXMgfSBmcm9tICdtb25nb29zZSc7XHJcbmltcG9ydCB7IENPTExFQ1RJT05TIH0gZnJvbSAnLi4vLi4vLi4vY29uc3RhbnRzL2NvbGxlY3Rpb25zJztcclxuaW1wb3J0IHsgQ291cnNlc09mVXNlciB9IGZyb20gJy4uLy4uLy4uL2RiL21vZGVscy9jb3Vyc2UvY29yZXNlc09mVXNlcnMvbW9kZWxzJztcclxuaW1wb3J0IHsgQ29tbW9uU2VydmljZXMgfSBmcm9tICcuLi8uLi9jb21tb24uc2VydmljZSc7XHJcbmltcG9ydCB7IENvdXJzZXNPZlVzZXJFeGNlcHRpb24gfSBmcm9tICcuLy4uLy4uLy4uL2RiL21vZGVscy9jb3Vyc2UvY29yZXNlc09mVXNlcnMvZXhjZXB0aW9ucyc7XHJcbmltcG9ydCB7IENvdXJzZXNPZlVzZXJNb2RlbCB9IGZyb20gJy4vLi4vLi4vLi4vZGIvbW9kZWxzL2NvdXJzZS9jb3Jlc2VzT2ZVc2Vycy9tb2RlbHMnO1xyXG5cclxuXHJcbmNsYXNzIENvdXJzZXNPZlVzZXJTZXJ2aWNlIGV4dGVuZHMgQ29tbW9uU2VydmljZXM8Q291cnNlc09mVXNlcj57XHJcbiAgY29uc3RydWN0b3IobW9kZWw6IE1vZGVsVHlwZTxDb3Vyc2VzT2ZVc2VyPikge1xyXG4gICAgc3VwZXIobW9kZWwsIENvdXJzZXNPZlVzZXJFeGNlcHRpb24pO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGFzeW5jIGZpbmRCeUlkRXJyb3IoaWQpIHtcclxuICAgIGNvbnN0IGNvdXJzZSA9IGF3YWl0IHRoaXMuZmluZEJ5SWQoaWQpO1xyXG4gICAgaWYgKCFjb3Vyc2UpIHRocm93IENvdXJzZXNPZlVzZXJFeGNlcHRpb24uTm90Rm91bmQoaWQpO1xyXG4gICAgcmV0dXJuIGNvdXJzZTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBhc3luYyBnZXRVc2Vyc09mQ291cnNlKGlkOiBzdHJpbmcpIHtcclxuICAgIHRyeSB7XHJcblxyXG4gICAgICBjb25zdCAkbWF0Y2ggPSB7XHJcbiAgICAgICAgJG1hdGNoOiB7XHJcbiAgICAgICAgICBpc0RlbGV0ZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgY291cnNlSWQ6IG5ldyBUeXBlcy5PYmplY3RJZChpZClcclxuICAgICAgICB9XHJcbiAgICAgIH07XHJcblxyXG4gICAgICBjb25zdCAkbG9vb2t1cENvdXJzZVBhcnRzID0ge1xyXG4gICAgICAgICRsb29rdXA6IHtcclxuICAgICAgICAgIGZyb206IENPTExFQ1RJT05TLlVTRVIsXHJcbiAgICAgICAgICBsZXQ6IHtcclxuICAgICAgICAgICAgdXNlcklkOiAnJHVzZXJJZCcsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgcGlwZWxpbmU6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICRtYXRjaDoge1xyXG4gICAgICAgICAgICAgICAgaXNEZWxldGVkOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICRleHByOiB7XHJcbiAgICAgICAgICAgICAgICAgICRlcTogW1wiJF9pZFwiLCBcIiQkdXNlcklkXCJdXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgJHByb2plY3Q6IHtcclxuICAgICAgICAgICAgICAgIGZ1bGxOYW1lOiAxLFxyXG4gICAgICAgICAgICAgICAgaW1nVXJsOiAxLFxyXG4gICAgICAgICAgICAgICAgY3JlYXRlZEF0OiAxLFxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIF0sXHJcbiAgICAgICAgICBhczogJ3VzZXJzJyxcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnN0ICR1bndpbmRVc2VyID0ge1xyXG4gICAgICAgICR1bndpbmQ6IHtcclxuICAgICAgICAgIHBhdGg6ICckdXNlcnMnLFxyXG4gICAgICAgICAgcHJlc2VydmVOdWxsQW5kRW1wdHlBcnJheXM6IGZhbHNlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnN0ICRyZXBsYWNlUm9vdCA9IHtcclxuICAgICAgICAkcmVwbGFjZVJvb3Q6IHtcclxuICAgICAgICAgIG5ld1Jvb3Q6ICckdXNlcnMnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH07XHJcblxyXG5cclxuXHJcblxyXG4gICAgICBjb25zdCAkcGlwbGluZSA9IFtcclxuICAgICAgICAkbWF0Y2gsXHJcbiAgICAgICAgJGxvb29rdXBDb3Vyc2VQYXJ0cyxcclxuICAgICAgICAkdW53aW5kVXNlcixcclxuICAgICAgICAkcmVwbGFjZVJvb3RcclxuICAgICAgXVxyXG5cclxuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHRoaXMuYWdncmVnYXRlKCRwaXBsaW5lKTtcclxuICAgICAgaWYgKCFkYXRhWzBdKSB0aHJvdyBDb3Vyc2VzT2ZVc2VyRXhjZXB0aW9uLk5vdEZvdW5kKGlkKVxyXG4gICAgICByZXR1cm4gZGF0YTtcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgY29uc29sZS5sb2coXCJlcnJvciBDb3Vyc2UgcGFnaW5nOiBcIiwgZSk7XHJcbiAgICAgIGlmIChlIGluc3RhbmNlb2YgQ291cnNlc09mVXNlckV4Y2VwdGlvbikge1xyXG4gICAgICAgIHRocm93IGU7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhyb3cgQ291cnNlc09mVXNlckV4Y2VwdGlvbi5Vbmtub3duRXJyb3IoZSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBhc3luYyBnZXRDb3Vyc2VzT2ZVc2VyKGlkOiBzdHJpbmcpIHtcclxuICAgIHRyeSB7XHJcblxyXG4gICAgICBjb25zdCAkbWF0Y2ggPSB7XHJcbiAgICAgICAgJG1hdGNoOiB7XHJcbiAgICAgICAgICBpc0RlbGV0ZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgdXNlcklkOiBuZXcgVHlwZXMuT2JqZWN0SWQoaWQpXHJcbiAgICAgICAgfVxyXG4gICAgICB9O1xyXG5cclxuICAgICAgY29uc3QgJGxvb29rdXBDb3Vyc2VzID0ge1xyXG4gICAgICAgICRsb29rdXA6IHtcclxuICAgICAgICAgIGZyb206IENPTExFQ1RJT05TLkNPVVJTRSxcclxuICAgICAgICAgIGxldDoge1xyXG4gICAgICAgICAgICBjb3Vyc2VJZDogJyRjb3Vyc2VJZCcsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgcGlwZWxpbmU6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICRtYXRjaDoge1xyXG4gICAgICAgICAgICAgICAgaXNEZWxldGVkOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICRleHByOiB7XHJcbiAgICAgICAgICAgICAgICAgICRlcTogW1wiJF9pZFwiLCBcIiQkY291cnNlSWRcIl1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAkcHJvamVjdDoge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogMSxcclxuICAgICAgICAgICAgICAgIGltZ1VybDogMSxcclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAxLFxyXG4gICAgICAgICAgICAgICAgY3JlYXRlZEF0OiAxXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgXSxcclxuICAgICAgICAgIGFzOiAnY291cnNlcycsXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zdCAkdW53aW5kQ291cnNlcyA9IHtcclxuICAgICAgICAkdW53aW5kOiB7XHJcbiAgICAgICAgICBwYXRoOiAnJGNvdXJzZXMnLFxyXG4gICAgICAgICAgcHJlc2VydmVOdWxsQW5kRW1wdHlBcnJheXM6IGZhbHNlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnN0ICRyZXBsYWNlUm9vdCA9IHtcclxuICAgICAgICAkcmVwbGFjZVJvb3Q6IHtcclxuICAgICAgICAgIG5ld1Jvb3Q6ICckY291cnNlcycsXHJcbiAgICAgICAgfSxcclxuICAgICAgfTtcclxuXHJcblxyXG5cclxuXHJcbiAgICAgIGNvbnN0ICRwaXBsaW5lID0gW1xyXG4gICAgICAgICRtYXRjaCxcclxuICAgICAgICAkbG9vb2t1cENvdXJzZXMsXHJcbiAgICAgICAgJHVud2luZENvdXJzZXMsXHJcbiAgICAgICAgJHJlcGxhY2VSb290XHJcbiAgICAgIF1cclxuXHJcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCB0aGlzLmFnZ3JlZ2F0ZSgkcGlwbGluZSk7XHJcbiAgICAgIGlmICghZGF0YVswXSkgdGhyb3cgQ291cnNlc09mVXNlckV4Y2VwdGlvbi5Ob3RGb3VuZChpZClcclxuICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiZXJyb3IgQ291cnNlIHBhZ2luZzogXCIsIGUpO1xyXG4gICAgICBpZiAoZSBpbnN0YW5jZW9mIENvdXJzZXNPZlVzZXJFeGNlcHRpb24pIHtcclxuICAgICAgICB0aHJvdyBlO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRocm93IENvdXJzZXNPZlVzZXJFeGNlcHRpb24uVW5rbm93bkVycm9yKGUpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGNvdXJzZXNPZlVzZXJTZXJ2aWNlID0gbmV3IENvdXJzZXNPZlVzZXJTZXJ2aWNlKENvdXJzZXNPZlVzZXJNb2RlbCkiXX0=