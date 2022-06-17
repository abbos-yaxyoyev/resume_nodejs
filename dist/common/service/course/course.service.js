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
            return await this.findPaging(query, dto, $pipeline, { position: 1, _id: 1 });
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
                                updatedAt: 1
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
            let $match = {
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
                                updatedAt: 1
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
            if (!data || !data[0])
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY291cnNlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvY29tbW9uL3NlcnZpY2UvY291cnNlL2NvdXJzZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUNBLHVDQUFpQztBQUNqQyw2REFBMEQ7QUFDMUQsc0RBQW1EO0FBQ25ELG9FQUFzRTtBQUN0RSw0REFBc0U7QUFHdEUsTUFBTSxhQUFjLFNBQVEsK0JBQXNCO0lBQ2hELFlBQVksS0FBd0I7UUFDbEMsS0FBSyxDQUFDLEtBQUssRUFBRSw0QkFBZSxDQUFDLENBQUM7SUFDaEMsQ0FBQztJQUVNLEtBQUssQ0FBQyxhQUFhLENBQUMsRUFBRTtRQUMzQixNQUFNLE1BQU0sR0FBRyxNQUFNLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDdkMsSUFBSSxDQUFDLE1BQU07WUFBRSxNQUFNLDRCQUFlLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ2hELE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7SUFFTSxLQUFLLENBQUMsU0FBUyxDQUFDLEdBQWlCO1FBQ3RDLElBQUk7WUFFRixJQUFJLEVBQUUsTUFBTSxFQUFFLEdBQUcsR0FBRyxDQUFDO1lBQ3JCLElBQUksS0FBSyxHQUFRLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxDQUFDO1lBRXRDLElBQUksTUFBTSxFQUFFO2dCQUNWLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRztvQkFDZixXQUFXLEVBQUU7d0JBQ1gsS0FBSyxFQUFFLE9BQU87d0JBQ2QsT0FBTyxFQUFFLEdBQUc7d0JBQ1osS0FBSyxFQUFFLEdBQUcsQ0FBQyxNQUFNO3FCQUNsQjtpQkFDRixDQUFDO2FBQ0g7WUFFRCxNQUFNLFdBQVcsR0FBRztnQkFDbEIsUUFBUSxFQUFFO29CQUNSLElBQUksRUFBRSxDQUFDO29CQUNQLE1BQU0sRUFBRSxDQUFDO29CQUNULFdBQVcsRUFBRSxDQUFD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QU8sSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ2hCO1FBQUMsT0FBTyxDQUFDLEVBQUU7WUFDVixPQUFPLENBQUMsR0FBRyxDQUFDLCtCQUErQixFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ2hELElBQUksQ0FBQyxZQUFZLDRCQUFlLEVBQUU7Z0JBQ2hDLE1BQU0sQ0FBQyxDQUFDO2FBQ1Q7aUJBQU07Z0JBQ0wsTUFBTSw0QkFBZSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUN2QztTQUNGO0lBQ0gsQ0FBQztDQUVGO0FBRVksUUFBQSxhQUFhLEdBQUcsSUFBSSxhQUFhLENBQUMsb0JBQVcsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9kZWxUeXBlIH0gZnJvbSAnQHR5cGVnb29zZS90eXBlZ29vc2UvbGliL3R5cGVzJztcclxuaW1wb3J0IHsgVHlwZXMgfSBmcm9tICdtb25nb29zZSc7XHJcbmltcG9ydCB7IENPTExFQ1RJT05TIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzL2NvbGxlY3Rpb25zJztcclxuaW1wb3J0IHsgQ29tbW9uU2VydmljZXMgfSBmcm9tICcuLi9jb21tb24uc2VydmljZSc7XHJcbmltcG9ydCB7IENvdXJzZUV4Y2VwdGlvbiB9IGZyb20gJy4vLi4vLi4vZGIvbW9kZWxzL2NvdXJzZS9leGNlcHRpb25zJztcclxuaW1wb3J0IHsgQ291cnNlLCBDb3Vyc2VNb2RlbCB9IGZyb20gJy4vLi4vLi4vZGIvbW9kZWxzL2NvdXJzZS9tb2RlbHMnO1xyXG5pbXBvcnQgeyBDb3Vyc2VHZXREdG8gfSBmcm9tICcuLy4uLy4uL3ZhbGlkYXRpb24vZHRvL2NvdXJzZS9jb3Vyc2UuZHRvJztcclxuXHJcbmNsYXNzIENvdXJzZVNlcnZpY2UgZXh0ZW5kcyBDb21tb25TZXJ2aWNlczxDb3Vyc2U+e1xyXG4gIGNvbnN0cnVjdG9yKG1vZGVsOiBNb2RlbFR5cGU8Q291cnNlPikge1xyXG4gICAgc3VwZXIobW9kZWwsIENvdXJzZUV4Y2VwdGlvbik7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgYXN5bmMgZmluZEJ5SWRFcnJvcihpZCkge1xyXG4gICAgY29uc3QgY291cnNlID0gYXdhaXQgdGhpcy5maW5kQnlJZChpZCk7XHJcbiAgICBpZiAoIWNvdXJzZSkgdGhyb3cgQ291cnNlRXhjZXB0aW9uLk5vdEZvdW5kKGlkKTtcclxuICAgIHJldHVybiBjb3Vyc2U7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgYXN5bmMgZ2V0UGFnaW5nKGR0bzogQ291cnNlR2V0RHRvKSB7XHJcbiAgICB0cnkge1xyXG5cclxuICAgICAgbGV0IHsgc2VhcmNoIH0gPSBkdG87XHJcbiAgICAgIGxldCBxdWVyeTogYW55ID0geyBpc0RlbGV0ZWQ6IGZhbHNlIH07XHJcblxyXG4gICAgICBpZiAoc2VhcmNoKSB7XHJcbiAgICAgICAgcXVlcnlbJyRleHByJ10gPSB7XHJcbiAgICAgICAgICAkcmVnZXhNYXRjaDoge1xyXG4gICAgICAgICAgICBpbnB1dDogJyRuYW1lJyxcclxuICAgICAgICAgICAgb3B0aW9uczogJ2knLFxyXG4gICAgICAgICAgICByZWdleDogZHRvLnNlYXJjaCxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfTtcclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc3QgJHByb2plY3Rpb24gPSB7XHJcbiAgICAgICAgJHByb2plY3Q6IHtcclxuICAgICAgICAgIG5hbWU6IDEsXHJcbiAgICAgICAgICBpbWdVcmw6IDEsXHJcbiAgICAgICAgICBkZXNjcmlwdGlvbjogMVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc3QgJHBpcGVsaW5lID0gW1xyXG4gICAgICAgICRwcm9qZWN0aW9uXHJcbiAgICAgIF1cclxuXHJcbiAgICAgIGlmICghZHRvLmxpbWl0KSB7XHJcbiAgICAgICAgZHRvLmxpbWl0ID0gYXdhaXQgdGhpcy5jb3VudChxdWVyeSlcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuZmluZFBhZ2luZyhxdWVyeSwgZHRvLCAkcGlwZWxpbmUsIHsgcG9zaXRpb246IDEsIF9pZDogMSB9KVxyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICBjb25zb2xlLmxvZyhcImVycm9yIENvdXJzZSBwYWdpbmc6IFwiLCBlKTtcclxuICAgICAgdGhyb3cgQ291cnNlRXhjZXB0aW9uLlVua25vd25FcnJvcihlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBhc3luYyBnZXRQYWdpbmdXaXRoQ291cnNlUGFydHMoZHRvOiBDb3Vyc2VHZXREdG8pIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGxldCB7IHNlYXJjaCwgYXNjLCBsaW1pdCB9ID0gZHRvO1xyXG5cclxuICAgICAgaWYgKCFhc2MpIHtcclxuICAgICAgICBkdG8uYXNjID0gMVxyXG4gICAgICB9XHJcblxyXG4gICAgICBsZXQgcXVlcnk6IGFueSA9IHtcclxuICAgICAgICBpc0RlbGV0ZWQ6IGZhbHNlXHJcbiAgICAgIH07XHJcblxyXG4gICAgICBpZiAoc2VhcmNoKSB7XHJcbiAgICAgICAgcXVlcnlbJyRleHByJ10gPSB7XHJcbiAgICAgICAgICAkcmVnZXhNYXRjaDoge1xyXG4gICAgICAgICAgICBpbnB1dDogJyRuYW1lJyxcclxuICAgICAgICAgICAgb3B0aW9uczogJ2knLFxyXG4gICAgICAgICAgICByZWdleDogc2VhcmNoLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9O1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zdCAkbG9vb2t1cENvdXJzZVBhcnRzID0ge1xyXG4gICAgICAgICRsb29rdXA6IHtcclxuICAgICAgICAgIGZyb206IENPTExFQ1RJT05TLkNPVVJTRV9QQVJUUyxcclxuICAgICAgICAgIGxldDoge1xyXG4gICAgICAgICAgICBjb3Vyc2VJZDogJyRfaWQnLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHBpcGVsaW5lOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAkbWF0Y2g6IHtcclxuICAgICAgICAgICAgICAgIGlzRGVsZXRlZDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAkZXhwcjoge1xyXG4gICAgICAgICAgICAgICAgICAkZXE6IFtcIiRjb3Vyc2VJZFwiLCBcIiQkY291cnNlSWRcIl1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAkcHJvamVjdDoge1xyXG4gICAgICAgICAgICAgICAgaW1nVXJsOiAxLFxyXG4gICAgICAgICAgICAgICAgdmlkZW9Vcmw6IDEsXHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogMSxcclxuICAgICAgICAgICAgICAgIGNyZWF0ZWRBdDogMSxcclxuICAgICAgICAgICAgICAgIHVwZGF0ZWRBdDogMVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIF0sXHJcbiAgICAgICAgICBhczogJ2NvdXJzZXMnLFxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuXHJcbiAgICAgIGNvbnN0ICRwcm9qZWN0aW9uID0ge1xyXG4gICAgICAgICRwcm9qZWN0OiB7XHJcbiAgICAgICAgICBuYW1lOiAxLFxyXG4gICAgICAgICAgaW1nVXJsOiAxLFxyXG4gICAgICAgICAgY291cnNlczogMSxcclxuICAgICAgICAgIGRlc2NyaXB0aW9uOiAxLFxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc3QgJHBpcGVsaW5lID0gW1xyXG4gICAgICAgICRsb29va3VwQ291cnNlUGFydHMsXHJcbiAgICAgICAgJHByb2plY3Rpb24sXHJcbiAgICAgIF1cclxuXHJcbiAgICAgIGlmICghbGltaXQpIGR0by5saW1pdCA9IGF3YWl0IHRoaXMuY291bnQocXVlcnkpO1xyXG5cclxuICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuZmluZFBhZ2luZyhxdWVyeSwgZHRvLCAkcGlwZWxpbmUpXHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiZXJyb3IgY291cnNlIGl0ZW1zIHBhZ2luZzogXCIsIGUpO1xyXG4gICAgICB0aHJvdyBDb3Vyc2VFeGNlcHRpb24uVW5rbm93bkVycm9yKGUpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgYXN5bmMgZ2V0Q291cnNlT25lV2l0aENvdXJzZVBhcnRzKGlkOiBzdHJpbmcpIHtcclxuICAgIHRyeSB7XHJcblxyXG4gICAgICBsZXQgJG1hdGNoID0ge1xyXG4gICAgICAgICRtYXRjaDoge1xyXG4gICAgICAgICAgaXNEZWxldGVkOiBmYWxzZSxcclxuICAgICAgICAgIF9pZDogbmV3IFR5cGVzLk9iamVjdElkKGlkKVxyXG4gICAgICAgIH1cclxuICAgICAgfTtcclxuXHJcbiAgICAgIGNvbnN0ICRsb29va3VwQ291cnNlUGFydHMgPSB7XHJcbiAgICAgICAgJGxvb2t1cDoge1xyXG4gICAgICAgICAgZnJvbTogQ09MTEVDVElPTlMuQ09VUlNFX1BBUlRTLFxyXG4gICAgICAgICAgbGV0OiB7XHJcbiAgICAgICAgICAgIGNvdXJzZUlkOiAnJF9pZCcsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgcGlwZWxpbmU6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICRtYXRjaDoge1xyXG4gICAgICAgICAgICAgICAgaXNEZWxldGVkOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICRleHByOiB7XHJcbiAgICAgICAgICAgICAgICAgICRlcTogW1wiJGNvdXJzZUlkXCIsIFwiJCRjb3Vyc2VJZFwiXVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICRwcm9qZWN0OiB7XHJcbiAgICAgICAgICAgICAgICBpbWdVcmw6IDEsXHJcbiAgICAgICAgICAgICAgICB2aWRlb1VybDogMSxcclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAxLFxyXG4gICAgICAgICAgICAgICAgY3JlYXRlZEF0OiAxLFxyXG4gICAgICAgICAgICAgICAgdXBkYXRlZEF0OiAxXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgXSxcclxuICAgICAgICAgIGFzOiAnY291cnNlcycsXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG5cclxuICAgICAgY29uc3QgJHByb2plY3Rpb24gPSB7XHJcbiAgICAgICAgJHByb2plY3Q6IHtcclxuICAgICAgICAgIG5hbWU6IDEsXHJcbiAgICAgICAgICBpbWdVcmw6IDEsXHJcbiAgICAgICAgICBjb3Vyc2VzOiAxLFxyXG4gICAgICAgICAgZGVzY3JpcHRpb246IDEsXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zdCAkcGlwbGluZSA9IFtcclxuICAgICAgICAkbWF0Y2gsXHJcbiAgICAgICAgJGxvb29rdXBDb3Vyc2VQYXJ0cyxcclxuICAgICAgICAkcHJvamVjdGlvbixcclxuICAgICAgXVxyXG5cclxuXHJcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCB0aGlzLmFnZ3JlZ2F0ZSgkcGlwbGluZSk7XHJcbiAgICAgIGlmICghZGF0YSB8fCAhZGF0YVswXSkgdGhyb3cgQ291cnNlRXhjZXB0aW9uLk5vdEZvdW5kKGlkKVxyXG4gICAgICByZXR1cm4gZGF0YVswXTtcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgY29uc29sZS5sb2coXCJlcnJvciBjYXRlZ29yeSBpdGVtcyBwYWdpbmc6IFwiLCBlKTtcclxuICAgICAgaWYgKGUgaW5zdGFuY2VvZiBDb3Vyc2VFeGNlcHRpb24pIHtcclxuICAgICAgICB0aHJvdyBlO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRocm93IENvdXJzZUV4Y2VwdGlvbi5Vbmtub3duRXJyb3IoZSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgY291cnNlU2VydmljZSA9IG5ldyBDb3Vyc2VTZXJ2aWNlKENvdXJzZU1vZGVsKSJdfQ==