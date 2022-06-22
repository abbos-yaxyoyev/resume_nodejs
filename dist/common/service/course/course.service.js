"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.courseService = void 0;
const mongoose_1 = require("mongoose");
const collections_1 = require("../../constants/collections");
const common_service_1 = require("../common.service");
const exceptions_1 = require("./../../db/models/course/exceptions");
const models_1 = require("./../../db/models/course/models");
class CourseService extends common_service_1.CommonServices {
    constructor(model) {
        super(model, exceptions_1.CourseException);
    }
    async findByIdError(id) {
        const course = await this.findById(id);
        if (!course)
            throw exceptions_1.CourseException.NotFound(id);
        return course;
    }
    async getPaging(dto) {
        try {
            let { search } = dto;
            let query = { isDeleted: false };
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
            };
            const $pipeline = [
                $projection
            ];
            if (!dto.limit) {
                dto.limit = await this.count(query);
            }
            return await this.findPaging(query, dto, $pipeline);
        }
        catch (e) {
            console.log("error Course paging: ", e);
            throw exceptions_1.CourseException.UnknownError(e);
        }
    }
    async getPagingWithCourseParts(dto) {
        try {
            let { search, asc, limit } = dto;
            if (!asc) {
                dto.asc = 1;
            }
            let query = {
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
                    from: collections_1.COLLECTIONS.COURSE_PARTS,
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
            };
            const $projection = {
                $project: {
                    name: 1,
                    imgUrl: 1,
                    courses: 1,
                    description: 1,
                }
            };
            const $pipeline = [
                $loookupCourseParts,
                $projection,
            ];
            if (!limit)
                dto.limit = await this.count(query);
            return await this.findPaging(query, dto, $pipeline);
        }
        catch (e) {
            console.log("error course items paging: ", e);
            throw exceptions_1.CourseException.UnknownError(e);
        }
    }
    async getCourseOneWithCourseParts(id) {
        try {
            const $match = {
                $match: {
                    isDeleted: false,
                    _id: new mongoose_1.Types.ObjectId(id)
                }
            };
            const $loookupCourseParts = {
                $lookup: {
                    from: collections_1.COLLECTIONS.COURSE_PARTS,
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
            };
            const $projection = {
                $project: {
                    name: 1,
                    imgUrl: 1,
                    courses: 1,
                    description: 1,
                }
            };
            const $pipline = [
                $match,
                $loookupCourseParts,
                $projection,
            ];
            const data = await this.aggregate($pipline);
            if (!data[0])
                throw exceptions_1.CourseException.NotFound(id);
            return data[0];
        }
        catch (e) {
            console.log("error category items paging: ", e);
            if (e instanceof exceptions_1.CourseException) {
                throw e;
            }
            else {
                throw exceptions_1.CourseException.UnknownError(e);
            }
        }
    }
}
exports.courseService = new CourseService(models_1.CourseModel);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY291cnNlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvY29tbW9uL3NlcnZpY2UvY291cnNlL2NvdXJzZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUNBLHVDQUFpQztBQUNqQyw2REFBMEQ7QUFDMUQsc0RBQW1EO0FBQ25ELG9FQUFzRTtBQUN0RSw0REFBc0U7QUFHdEUsTUFBTSxhQUFjLFNBQVEsK0JBQXNCO0lBQ2hELFlBQVksS0FBd0I7UUFDbEMsS0FBSyxDQUFDLEtBQUssRUFBRSw0QkFBZSxDQUFDLENBQUM7SUFDaEMsQ0FBQztJQUVNLEtBQUssQ0FBQyxhQUFhLENBQUMsRUFBRTtRQUMzQixNQUFNLE1BQU0sR0FBRyxNQUFNLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDdkMsSUFBSSxDQUFDLE1BQU07WUFBRSxNQUFNLDRCQUFlLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ2hELE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7SUFFTSxLQUFLLENBQUMsU0FBUyxDQUFDLEdBQWlCO1FBQ3RDLElBQUk7WUFFRixJQUFJLEVBQUUsTUFBTSxFQUFFLEdBQUcsR0FBRyxDQUFDO1lBQ3JCLElBQUksS0FBSyxHQUFRLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxDQUFDO1lBRXRDLElBQUksTUFBTSxFQUFFO2dCQUNWLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRztvQkFDZixXQUFXLEVBQUU7d0JBQ1gsS0FBSyxFQUFFLE9BQU87d0JBQ2QsT0FBTyxFQUFFLEdBQUc7d0JBQ1osS0FBSyxFQUFFLEdBQUcsQ0FBQyxNQUFNO3FCQUNsQjtpQkFDRixDQUFDO2FBQ0g7WUFFRCxNQUFNLFdBQVcsR0FBRztnQkFDbEIsUUFBUSxFQUFFO29CQUNSLElBQUksRUFBRSxDQUFDO29CQUNQLE1BQU0sRUFBRSxDQUFDO29CQUNULFdBQVcsRUFBRSxDQUFD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QUNoRCxJQUFJLENBQUMsWUFBWSw0QkFBZSxFQUFFO2dCQUNoQyxNQUFNLENBQUMsQ0FBQzthQUNUO2lCQUFNO2dCQUNMLE1BQU0sNEJBQWUsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDdkM7U0FDRjtJQUNILENBQUM7Q0FFRjtBQUVZLFFBQUEsYUFBYSxHQUFHLElBQUksYUFBYSxDQUFDLG9CQUFXLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vZGVsVHlwZSB9IGZyb20gJ0B0eXBlZ29vc2UvdHlwZWdvb3NlL2xpYi90eXBlcyc7XHJcbmltcG9ydCB7IFR5cGVzIH0gZnJvbSAnbW9uZ29vc2UnO1xyXG5pbXBvcnQgeyBDT0xMRUNUSU9OUyB9IGZyb20gJy4uLy4uL2NvbnN0YW50cy9jb2xsZWN0aW9ucyc7XHJcbmltcG9ydCB7IENvbW1vblNlcnZpY2VzIH0gZnJvbSAnLi4vY29tbW9uLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBDb3Vyc2VFeGNlcHRpb24gfSBmcm9tICcuLy4uLy4uL2RiL21vZGVscy9jb3Vyc2UvZXhjZXB0aW9ucyc7XHJcbmltcG9ydCB7IENvdXJzZSwgQ291cnNlTW9kZWwgfSBmcm9tICcuLy4uLy4uL2RiL21vZGVscy9jb3Vyc2UvbW9kZWxzJztcclxuaW1wb3J0IHsgQ291cnNlR2V0RHRvIH0gZnJvbSAnLi8uLi8uLi92YWxpZGF0aW9uL2R0by9jb3Vyc2UvY291cnNlLmR0byc7XHJcblxyXG5jbGFzcyBDb3Vyc2VTZXJ2aWNlIGV4dGVuZHMgQ29tbW9uU2VydmljZXM8Q291cnNlPntcclxuICBjb25zdHJ1Y3Rvcihtb2RlbDogTW9kZWxUeXBlPENvdXJzZT4pIHtcclxuICAgIHN1cGVyKG1vZGVsLCBDb3Vyc2VFeGNlcHRpb24pO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGFzeW5jIGZpbmRCeUlkRXJyb3IoaWQpIHtcclxuICAgIGNvbnN0IGNvdXJzZSA9IGF3YWl0IHRoaXMuZmluZEJ5SWQoaWQpO1xyXG4gICAgaWYgKCFjb3Vyc2UpIHRocm93IENvdXJzZUV4Y2VwdGlvbi5Ob3RGb3VuZChpZCk7XHJcbiAgICByZXR1cm4gY291cnNlO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGFzeW5jIGdldFBhZ2luZyhkdG86IENvdXJzZUdldER0bykge1xyXG4gICAgdHJ5IHtcclxuXHJcbiAgICAgIGxldCB7IHNlYXJjaCB9ID0gZHRvO1xyXG4gICAgICBsZXQgcXVlcnk6IGFueSA9IHsgaXNEZWxldGVkOiBmYWxzZSB9O1xyXG5cclxuICAgICAgaWYgKHNlYXJjaCkge1xyXG4gICAgICAgIHF1ZXJ5WyckZXhwciddID0ge1xyXG4gICAgICAgICAgJHJlZ2V4TWF0Y2g6IHtcclxuICAgICAgICAgICAgaW5wdXQ6ICckbmFtZScsXHJcbiAgICAgICAgICAgIG9wdGlvbnM6ICdpJyxcclxuICAgICAgICAgICAgcmVnZXg6IGR0by5zZWFyY2gsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH07XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnN0ICRwcm9qZWN0aW9uID0ge1xyXG4gICAgICAgICRwcm9qZWN0OiB7XHJcbiAgICAgICAgICBuYW1lOiAxLFxyXG4gICAgICAgICAgaW1nVXJsOiAxLFxyXG4gICAgICAgICAgZGVzY3JpcHRpb246IDFcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnN0ICRwaXBlbGluZSA9IFtcclxuICAgICAgICAkcHJvamVjdGlvblxyXG4gICAgICBdXHJcblxyXG4gICAgICBpZiAoIWR0by5saW1pdCkge1xyXG4gICAgICAgIGR0by5saW1pdCA9IGF3YWl0IHRoaXMuY291bnQocXVlcnkpXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiBhd2FpdCB0aGlzLmZpbmRQYWdpbmcocXVlcnksIGR0bywgJHBpcGVsaW5lKVxyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICBjb25zb2xlLmxvZyhcImVycm9yIENvdXJzZSBwYWdpbmc6IFwiLCBlKTtcclxuICAgICAgdGhyb3cgQ291cnNlRXhjZXB0aW9uLlVua25vd25FcnJvcihlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBhc3luYyBnZXRQYWdpbmdXaXRoQ291cnNlUGFydHMoZHRvOiBDb3Vyc2VHZXREdG8pIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGxldCB7IHNlYXJjaCwgYXNjLCBsaW1pdCB9ID0gZHRvO1xyXG5cclxuICAgICAgaWYgKCFhc2MpIHtcclxuICAgICAgICBkdG8uYXNjID0gMVxyXG4gICAgICB9XHJcblxyXG4gICAgICBsZXQgcXVlcnk6IGFueSA9IHtcclxuICAgICAgICBpc0RlbGV0ZWQ6IGZhbHNlXHJcbiAgICAgIH07XHJcblxyXG4gICAgICBpZiAoc2VhcmNoKSB7XHJcbiAgICAgICAgcXVlcnlbJyRleHByJ10gPSB7XHJcbiAgICAgICAgICAkcmVnZXhNYXRjaDoge1xyXG4gICAgICAgICAgICBpbnB1dDogJyRuYW1lJyxcclxuICAgICAgICAgICAgb3B0aW9uczogJ2knLFxyXG4gICAgICAgICAgICByZWdleDogc2VhcmNoLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9O1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zdCAkbG9vb2t1cENvdXJzZVBhcnRzID0ge1xyXG4gICAgICAgICRsb29rdXA6IHtcclxuICAgICAgICAgIGZyb206IENPTExFQ1RJT05TLkNPVVJTRV9QQVJUUyxcclxuICAgICAgICAgIGxldDoge1xyXG4gICAgICAgICAgICBjb3Vyc2VJZDogJyRfaWQnLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHBpcGVsaW5lOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAkbWF0Y2g6IHtcclxuICAgICAgICAgICAgICAgIGlzRGVsZXRlZDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAkZXhwcjoge1xyXG4gICAgICAgICAgICAgICAgICAkZXE6IFtcIiRjb3Vyc2VJZFwiLCBcIiQkY291cnNlSWRcIl1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAkcHJvamVjdDoge1xyXG4gICAgICAgICAgICAgICAgaW1nVXJsOiAxLFxyXG4gICAgICAgICAgICAgICAgdmlkZW9Vcmw6IDEsXHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogMSxcclxuICAgICAgICAgICAgICAgIGNyZWF0ZWRBdDogMSxcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBdLFxyXG4gICAgICAgICAgYXM6ICdjb3Vyc2VzJyxcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcblxyXG4gICAgICBjb25zdCAkcHJvamVjdGlvbiA9IHtcclxuICAgICAgICAkcHJvamVjdDoge1xyXG4gICAgICAgICAgbmFtZTogMSxcclxuICAgICAgICAgIGltZ1VybDogMSxcclxuICAgICAgICAgIGNvdXJzZXM6IDEsXHJcbiAgICAgICAgICBkZXNjcmlwdGlvbjogMSxcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnN0ICRwaXBlbGluZSA9IFtcclxuICAgICAgICAkbG9vb2t1cENvdXJzZVBhcnRzLFxyXG4gICAgICAgICRwcm9qZWN0aW9uLFxyXG4gICAgICBdXHJcblxyXG4gICAgICBpZiAoIWxpbWl0KSBkdG8ubGltaXQgPSBhd2FpdCB0aGlzLmNvdW50KHF1ZXJ5KTtcclxuXHJcbiAgICAgIHJldHVybiBhd2FpdCB0aGlzLmZpbmRQYWdpbmcocXVlcnksIGR0bywgJHBpcGVsaW5lKVxyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICBjb25zb2xlLmxvZyhcImVycm9yIGNvdXJzZSBpdGVtcyBwYWdpbmc6IFwiLCBlKTtcclxuICAgICAgdGhyb3cgQ291cnNlRXhjZXB0aW9uLlVua25vd25FcnJvcihlKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIGFzeW5jIGdldENvdXJzZU9uZVdpdGhDb3Vyc2VQYXJ0cyhpZDogc3RyaW5nKSB7XHJcbiAgICB0cnkge1xyXG5cclxuICAgICAgY29uc3QgJG1hdGNoID0ge1xyXG4gICAgICAgICRtYXRjaDoge1xyXG4gICAgICAgICAgaXNEZWxldGVkOiBmYWxzZSxcclxuICAgICAgICAgIF9pZDogbmV3IFR5cGVzLk9iamVjdElkKGlkKVxyXG4gICAgICAgIH1cclxuICAgICAgfTtcclxuXHJcbiAgICAgIGNvbnN0ICRsb29va3VwQ291cnNlUGFydHMgPSB7XHJcbiAgICAgICAgJGxvb2t1cDoge1xyXG4gICAgICAgICAgZnJvbTogQ09MTEVDVElPTlMuQ09VUlNFX1BBUlRTLFxyXG4gICAgICAgICAgbGV0OiB7XHJcbiAgICAgICAgICAgIGNvdXJzZUlkOiAnJF9pZCcsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgcGlwZWxpbmU6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICRtYXRjaDoge1xyXG4gICAgICAgICAgICAgICAgaXNEZWxldGVkOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICRleHByOiB7XHJcbiAgICAgICAgICAgICAgICAgICRlcTogW1wiJGNvdXJzZUlkXCIsIFwiJCRjb3Vyc2VJZFwiXVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICRwcm9qZWN0OiB7XHJcbiAgICAgICAgICAgICAgICBpbWdVcmw6IDEsXHJcbiAgICAgICAgICAgICAgICB2aWRlb1VybDogMSxcclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAxLFxyXG4gICAgICAgICAgICAgICAgY3JlYXRlZEF0OiAxLFxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIF0sXHJcbiAgICAgICAgICBhczogJ2NvdXJzZXMnLFxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuXHJcbiAgICAgIGNvbnN0ICRwcm9qZWN0aW9uID0ge1xyXG4gICAgICAgICRwcm9qZWN0OiB7XHJcbiAgICAgICAgICBuYW1lOiAxLFxyXG4gICAgICAgICAgaW1nVXJsOiAxLFxyXG4gICAgICAgICAgY291cnNlczogMSxcclxuICAgICAgICAgIGRlc2NyaXB0aW9uOiAxLFxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc3QgJHBpcGxpbmUgPSBbXHJcbiAgICAgICAgJG1hdGNoLFxyXG4gICAgICAgICRsb29va3VwQ291cnNlUGFydHMsXHJcbiAgICAgICAgJHByb2plY3Rpb24sXHJcbiAgICAgIF1cclxuXHJcblxyXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgdGhpcy5hZ2dyZWdhdGUoJHBpcGxpbmUpO1xyXG4gICAgICBpZiAoIWRhdGFbMF0pIHRocm93IENvdXJzZUV4Y2VwdGlvbi5Ob3RGb3VuZChpZClcclxuICAgICAgcmV0dXJuIGRhdGFbMF07XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiZXJyb3IgY2F0ZWdvcnkgaXRlbXMgcGFnaW5nOiBcIiwgZSk7XHJcbiAgICAgIGlmIChlIGluc3RhbmNlb2YgQ291cnNlRXhjZXB0aW9uKSB7XHJcbiAgICAgICAgdGhyb3cgZTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aHJvdyBDb3Vyc2VFeGNlcHRpb24uVW5rbm93bkVycm9yKGUpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGNvdXJzZVNlcnZpY2UgPSBuZXcgQ291cnNlU2VydmljZShDb3Vyc2VNb2RlbCkiXX0=