"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.genreService = void 0;
const mongoose_1 = require("mongoose");
const collections_1 = require("../../constants/collections");
const exception_1 = require("../../db/models/genre/exception");
const models_1 = require("../../db/models/genre/models");
const common_service_1 = require("../common.service");
class GenreService extends common_service_1.CommonServices {
    constructor(model) {
        super(model, exception_1.GenreException);
    }
    async findByIdError(id) {
        const genre = await this.findById(id);
        if (!genre)
            throw exception_1.GenreException.NotFound(id);
        return genre;
    }
    async getPaging(dto) {
        try {
            let query = {
                isDeleted: false,
                name: {
                    $options: 'ig',
                    $regex: dto.search,
                }
            };
            if (!dto.sortBy) {
                dto.sortBy = 'createdAt';
            }
            const $graphLookup = {
                $graphLookup: {
                    from: collections_1.COLLECTIONS.GENRE,
                    startWith: "$_id",
                    connectFromField: '_id',
                    connectToField: 'parentId',
                    as: 'children',
                }
            };
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
            ];
            if (!dto.limit) {
                dto.limit = await this.count(query);
            }
            if (!dto.page)
                dto.page = 1;
            return await this.findPaging(query, dto, $pipeline);
        }
        catch (error) {
            throw exception_1.GenreException.UnknownError(error);
        }
    }
    async getGenereFull(id) {
        try {
            const $match = {
                $match: {
                    isDeleted: false,
                    _id: new mongoose_1.Types.ObjectId(id),
                },
            };
            const $lookupParentId = {
                $lookup: {
                    from: collections_1.COLLECTIONS.GENRE,
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
            if (!genre)
                throw exception_1.GenreException.NotFound();
            return genre;
        }
        catch (e) {
            if (e instanceof exception_1.GenreException) {
                throw e;
            }
            else {
                throw exception_1.GenreException.UnknownError(e);
            }
        }
    }
    async getFirstChildPaging(_id) {
        try {
            const $match = {
                $match: {
                    isDeleted: false,
                    // _id: new Types.ObjectId(_id),
                    parentId: new mongoose_1.Types.ObjectId(_id),
                }
            };
            const $graphLookup = {
                $graphLookup: {
                    from: collections_1.COLLECTIONS.GENRE,
                    startWith: "$_id",
                    connectFromField: '_id',
                    connectToField: 'parentId',
                    as: 'children',
                }
            };
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
        }
        catch (e) {
            throw exception_1.GenreException.UnknownError(e);
        }
    }
    async checkGenreId(id) {
        try {
            const $matchGenre = {
                $match: {
                    isDeleted: false,
                    _id: new mongoose_1.Types.ObjectId(id),
                },
            };
            const $lookupBook = {
                $lookup: {
                    from: collections_1.COLLECTIONS.BOOK,
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
                    genreId: new mongoose_1.Types.ObjectId(id),
                },
            };
            const $pipline = [$matchGenre, $lookupBook, $unwindBook, $replaceRoot, $matchBook];
            let data = await this.aggregate($pipline);
            const genre = data.shift();
            if (genre)
                throw exception_1.GenreException.CanNotDeleteGenre(id);
            return genre;
        }
        catch (e) {
            if (e instanceof exception_1.GenreException) {
                throw e;
            }
            else {
                throw exception_1.GenreException.UnknownError(e);
            }
        }
    }
}
exports.genreService = new GenreService(models_1.GenreModel);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VucmUuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21tb24vc2VydmljZS9nZW5yZS9nZW5yZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUNBLHVDQUFpQztBQUNqQyw2REFBMEQ7QUFDMUQsK0RBQWlFO0FBQ2pFLHlEQUFpRTtBQUVqRSxzREFBbUQ7QUFFbkQsTUFBTSxZQUFhLFNBQVEsK0JBQXFCO0lBQzlDLFlBQVksS0FBdUI7UUFDakMsS0FBSyxDQUFDLEtBQUssRUFBRSwwQkFBYyxDQUFDLENBQUM7SUFDL0IsQ0FBQztJQUNNLEtBQUssQ0FBQyxhQUFhLENBQUMsRUFBRTtRQUMzQixNQUFNLEtBQUssR0FBRyxNQUFNLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDdEMsSUFBSSxDQUFDLEtBQUs7WUFBRSxNQUFNLDBCQUFjLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQzlDLE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQztJQUVNLEtBQUssQ0FBQyxTQUFTLENBQUMsR0FBZ0I7UUFDckMsSUFBSTtZQUNGLElBQUksS0FBSyxHQUFHO2dCQUNWLFNBQVMsRUFBRSxLQUFLO2dCQUNoQixJQUFJLEVBQUU7b0JBQ0osUUFBUSxFQUFFLElBQUk7b0JBQ2QsTUFBTSxFQUFFLEdBQUcsQ0FBQyxNQUFNO2lCQUNuQjthQUNGLENBQUE7WUFFRCxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRTtnQkFDZixHQUFHLENBQUMsTUFBTSxHQUFHLFdBQVcsQ0FBQzthQUMxQjtZQUVELE1BQU0sWUFBWSxHQUFHO2dCQUNuQixZQUFZLEVBQUU7b0JBQ1osSUFBSSxFQUFFLHlCQUFXLENBQUMsS0FBSztvQkFDdkIsU0FBUyxFQUFFLE1BQU07b0JBQ2pCLGdCQUFnQixFQUFFLEtBQUs7b0JBQ3ZCLGNBQWMsRUFBRSxVQUFVO29CQUMxQixFQUFFLEVBQUUs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LE1BQU0sSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUUxQyxNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDM0IsSUFBSSxLQUFLO2dCQUFFLE1BQU0sMEJBQWMsQ0FBQyxpQkFBaUIsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUN0RCxPQUFPLEtBQUssQ0FBQztTQUNkO1FBQUMsT0FBTyxDQUFDLEVBQUU7WUFDVixJQUFJLENBQUMsWUFBWSwwQkFBYyxFQUFFO2dCQUMvQixNQUFNLENBQUMsQ0FBQzthQUNUO2lCQUFNO2dCQUNMLE1BQU0sMEJBQWMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDdEM7U0FDRjtJQUNILENBQUM7Q0FDRjtBQUVZLFFBQUEsWUFBWSxHQUFHLElBQUksWUFBWSxDQUFDLG1CQUFVLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vZGVsVHlwZSB9IGZyb20gJ0B0eXBlZ29vc2UvdHlwZWdvb3NlL2xpYi90eXBlcyc7XHJcbmltcG9ydCB7IFR5cGVzIH0gZnJvbSAnbW9uZ29vc2UnO1xyXG5pbXBvcnQgeyBDT0xMRUNUSU9OUyB9IGZyb20gJy4uLy4uL2NvbnN0YW50cy9jb2xsZWN0aW9ucyc7XHJcbmltcG9ydCB7IEdlbnJlRXhjZXB0aW9uIH0gZnJvbSAnLi4vLi4vZGIvbW9kZWxzL2dlbnJlL2V4Y2VwdGlvbic7XHJcbmltcG9ydCB7IEdlbnJlLCBHZW5yZU1vZGVsIH0gZnJvbSAnLi4vLi4vZGIvbW9kZWxzL2dlbnJlL21vZGVscyc7XHJcbmltcG9ydCB7IEdlbnJlR2V0RHRvIH0gZnJvbSAnLi4vLi4vdmFsaWRhdGlvbi9kdG8vZ2VucmUuZHRvJztcclxuaW1wb3J0IHsgQ29tbW9uU2VydmljZXMgfSBmcm9tICcuLi9jb21tb24uc2VydmljZSc7XHJcblxyXG5jbGFzcyBHZW5yZVNlcnZpY2UgZXh0ZW5kcyBDb21tb25TZXJ2aWNlczxHZW5yZT4ge1xyXG4gIGNvbnN0cnVjdG9yKG1vZGVsOiBNb2RlbFR5cGU8R2VucmU+KSB7XHJcbiAgICBzdXBlcihtb2RlbCwgR2VucmVFeGNlcHRpb24pO1xyXG4gIH1cclxuICBwdWJsaWMgYXN5bmMgZmluZEJ5SWRFcnJvcihpZCkge1xyXG4gICAgY29uc3QgZ2VucmUgPSBhd2FpdCB0aGlzLmZpbmRCeUlkKGlkKTtcclxuICAgIGlmICghZ2VucmUpIHRocm93IEdlbnJlRXhjZXB0aW9uLk5vdEZvdW5kKGlkKTtcclxuICAgIHJldHVybiBnZW5yZTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBhc3luYyBnZXRQYWdpbmcoZHRvOiBHZW5yZUdldER0bykge1xyXG4gICAgdHJ5IHtcclxuICAgICAgbGV0IHF1ZXJ5ID0ge1xyXG4gICAgICAgIGlzRGVsZXRlZDogZmFsc2UsXHJcbiAgICAgICAgbmFtZToge1xyXG4gICAgICAgICAgJG9wdGlvbnM6ICdpZycsXHJcbiAgICAgICAgICAkcmVnZXg6IGR0by5zZWFyY2gsXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoIWR0by5zb3J0QnkpIHtcclxuICAgICAgICBkdG8uc29ydEJ5ID0gJ2NyZWF0ZWRBdCc7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnN0ICRncmFwaExvb2t1cCA9IHtcclxuICAgICAgICAkZ3JhcGhMb29rdXA6IHtcclxuICAgICAgICAgIGZyb206IENPTExFQ1RJT05TLkdFTlJFLFxyXG4gICAgICAgICAgc3RhcnRXaXRoOiBcIiRfaWRcIixcclxuICAgICAgICAgIGNvbm5lY3RGcm9tRmllbGQ6ICdfaWQnLFxyXG4gICAgICAgICAgY29ubmVjdFRvRmllbGQ6ICdwYXJlbnRJZCcsXHJcbiAgICAgICAgICBhczogJ2NoaWxkcmVuJyxcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnN0ICRwcm9qZWN0aW9uRmlsdGVyID0ge1xyXG4gICAgICAgICRwcm9qZWN0OiB7XHJcbiAgICAgICAgICBfaWQ6IDEsXHJcbiAgICAgICAgICBuYW1lOiAxLFxyXG4gICAgICAgICAgaW1nVXJsOiAxLFxyXG4gICAgICAgICAgY2hpbGRyZW46IHtcclxuICAgICAgICAgICAgJGZpbHRlcjoge1xyXG4gICAgICAgICAgICAgIGlucHV0OiBcIiRjaGlsZHJlblwiLFxyXG4gICAgICAgICAgICAgIGFzOiBcImNoaWxkXCIsXHJcbiAgICAgICAgICAgICAgY29uZDogeyAkZXE6IFtcIiQkY2hpbGQuaXNEZWxldGVkXCIsIGZhbHNlXSB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICB9O1xyXG5cclxuICAgICAgY29uc3QgJHByb2plY3Rpb25TaXplID0ge1xyXG4gICAgICAgICRwcm9qZWN0OiB7XHJcbiAgICAgICAgICBfaWQ6IDEsXHJcbiAgICAgICAgICBuYW1lOiAxLFxyXG4gICAgICAgICAgaW1nVXJsOiAxLFxyXG4gICAgICAgICAgY2hpbGRyZW46IHtcclxuICAgICAgICAgICAgJHNpemU6IFwiJGNoaWxkcmVuXCJcclxuICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICB9O1xyXG5cclxuICAgICAgY29uc3QgJHBpcGVsaW5lID0gW1xyXG4gICAgICAgICRncmFwaExvb2t1cCxcclxuICAgICAgICAkcHJvamVjdGlvbkZpbHRlcixcclxuICAgICAgICAkcHJvamVjdGlvblNpemVcclxuICAgICAgXVxyXG5cclxuICAgICAgaWYgKCFkdG8ubGltaXQpIHtcclxuICAgICAgICBkdG8ubGltaXQgPSBhd2FpdCB0aGlzLmNvdW50KHF1ZXJ5KTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKCFkdG8ucGFnZSkgZHRvLnBhZ2UgPSAxO1xyXG5cclxuICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuZmluZFBhZ2luZyhxdWVyeSwgZHRvLCAkcGlwZWxpbmUpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgdGhyb3cgR2VucmVFeGNlcHRpb24uVW5rbm93bkVycm9yKGVycm9yKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBhc3luYyBnZXRHZW5lcmVGdWxsPFQ+KGlkOiBzdHJpbmcsKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCAkbWF0Y2ggPSB7XHJcbiAgICAgICAgJG1hdGNoOiB7XHJcbiAgICAgICAgICBpc0RlbGV0ZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgX2lkOiBuZXcgVHlwZXMuT2JqZWN0SWQoaWQpLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH07XHJcblxyXG4gICAgICBjb25zdCAkbG9va3VwUGFyZW50SWQgPSB7XHJcbiAgICAgICAgJGxvb2t1cDoge1xyXG4gICAgICAgICAgZnJvbTogQ09MTEVDVElPTlMuR0VOUkUsXHJcbiAgICAgICAgICBmb3JlaWduRmllbGQ6ICdfaWQnLFxyXG4gICAgICAgICAgbG9jYWxGaWVsZDogJ3BhcmVudElkJyxcclxuICAgICAgICAgIGFzOiAncGFyZW50JyxcclxuICAgICAgICB9LFxyXG4gICAgICB9O1xyXG5cclxuICAgICAgY29uc3QgJHVud2luZFBhcmVudElkID0ge1xyXG4gICAgICAgICR1bndpbmQ6IHtcclxuICAgICAgICAgIHBhdGg6ICckcGFyZW50JyxcclxuICAgICAgICAgIHByZXNlcnZlTnVsbEFuZEVtcHR5QXJyYXlzOiB0cnVlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH07XHJcblxyXG4gICAgICBjb25zdCAkcHJvamVjdGlvbiA9IHtcclxuICAgICAgICAkcHJvamVjdDoge1xyXG4gICAgICAgICAgX2lkOiAxLFxyXG4gICAgICAgICAgbmFtZTogMSxcclxuICAgICAgICAgIGltZ1VybDogMSxcclxuICAgICAgICAgIHBhcmVudDoge1xyXG4gICAgICAgICAgICBfaWQ6IDEsXHJcbiAgICAgICAgICAgIG5hbWU6IGAkcGFyZW50Lm5hbWVgLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICB9O1xyXG5cclxuICAgICAgY29uc3QgJHBpcGxpbmUgPSBbXHJcbiAgICAgICAgJG1hdGNoLFxyXG4gICAgICAgICRsb29rdXBQYXJlbnRJZCxcclxuICAgICAgICAkdW53aW5kUGFyZW50SWQsXHJcbiAgICAgICAgJHByb2plY3Rpb25cclxuICAgICAgXTtcclxuXHJcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCB0aGlzLmFnZ3JlZ2F0ZSgkcGlwbGluZSk7XHJcbiAgICAgIGNvbnN0IGdlbnJlID0gZGF0YS5zaGlmdCgpO1xyXG4gICAgICBpZiAoIWdlbnJlKSB0aHJvdyBHZW5yZUV4Y2VwdGlvbi5Ob3RGb3VuZCgpO1xyXG4gICAgICByZXR1cm4gZ2VucmU7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIGlmIChlIGluc3RhbmNlb2YgR2VucmVFeGNlcHRpb24pIHtcclxuICAgICAgICB0aHJvdyBlO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRocm93IEdlbnJlRXhjZXB0aW9uLlVua25vd25FcnJvcihlKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIGFzeW5jIGdldEZpcnN0Q2hpbGRQYWdpbmc8VD4oX2lkOiBzdHJpbmcpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0ICRtYXRjaCA9IHtcclxuICAgICAgICAkbWF0Y2g6IHtcclxuICAgICAgICAgIGlzRGVsZXRlZDogZmFsc2UsXHJcbiAgICAgICAgICAvLyBfaWQ6IG5ldyBUeXBlcy5PYmplY3RJZChfaWQpLFxyXG4gICAgICAgICAgcGFyZW50SWQ6IG5ldyBUeXBlcy5PYmplY3RJZChfaWQpLFxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc3QgJGdyYXBoTG9va3VwID0ge1xyXG4gICAgICAgICRncmFwaExvb2t1cDoge1xyXG4gICAgICAgICAgZnJvbTogQ09MTEVDVElPTlMuR0VOUkUsXHJcbiAgICAgICAgICBzdGFydFdpdGg6IFwiJF9pZFwiLFxyXG4gICAgICAgICAgY29ubmVjdEZyb21GaWVsZDogJ19pZCcsXHJcbiAgICAgICAgICBjb25uZWN0VG9GaWVsZDogJ3BhcmVudElkJyxcclxuICAgICAgICAgIGFzOiAnY2hpbGRyZW4nLFxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc3QgJHByb2plY3Rpb25GaWx0ZXIgPSB7XHJcbiAgICAgICAgJHByb2plY3Q6IHtcclxuICAgICAgICAgIF9pZDogMSxcclxuICAgICAgICAgIG5hbWU6IDEsXHJcbiAgICAgICAgICBpbWdVcmw6IDEsXHJcbiAgICAgICAgICAvLyBjaGlsZHJlbjogMVxyXG4gICAgICAgICAgY2hpbGRyZW46IHtcclxuICAgICAgICAgICAgJGZpbHRlcjoge1xyXG4gICAgICAgICAgICAgIGlucHV0OiBcIiRjaGlsZHJlblwiLFxyXG4gICAgICAgICAgICAgIGFzOiBcImNoaWxkXCIsXHJcbiAgICAgICAgICAgICAgY29uZDogeyAkZXE6IFtcIiQkY2hpbGQuaXNEZWxldGVkXCIsIGZhbHNlXSB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICB9O1xyXG5cclxuICAgICAgY29uc3QgJHByb2plY3Rpb25TaXplID0ge1xyXG4gICAgICAgICRwcm9qZWN0OiB7XHJcbiAgICAgICAgICBfaWQ6IDEsXHJcbiAgICAgICAgICBuYW1lOiAxLFxyXG4gICAgICAgICAgaW1nVXJsOiAxLFxyXG4gICAgICAgICAgY2hpbGRyZW46IHtcclxuICAgICAgICAgICAgJHNpemU6IFwiJGNoaWxkcmVuXCJcclxuICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICB9O1xyXG5cclxuICAgICAgY29uc3QgJHBpcGxpbmUgPSBbXHJcbiAgICAgICAgJG1hdGNoLFxyXG4gICAgICAgICRncmFwaExvb2t1cCxcclxuICAgICAgICAkcHJvamVjdGlvbkZpbHRlcixcclxuICAgICAgICAkcHJvamVjdGlvblNpemUsXHJcbiAgICAgIF07XHJcblxyXG4gICAgICByZXR1cm4gYXdhaXQgdGhpcy5hZ2dyZWdhdGUoJHBpcGxpbmUpO1xyXG5cclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgdGhyb3cgR2VucmVFeGNlcHRpb24uVW5rbm93bkVycm9yKGUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIGFzeW5jIGNoZWNrR2VucmVJZDxUPihpZDogc3RyaW5nKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCAkbWF0Y2hHZW5yZSA9IHtcclxuICAgICAgICAkbWF0Y2g6IHtcclxuICAgICAgICAgIGlzRGVsZXRlZDogZmFsc2UsXHJcbiAgICAgICAgICBfaWQ6IG5ldyBUeXBlcy5PYmplY3RJZChpZCksXHJcbiAgICAgICAgfSxcclxuICAgICAgfTtcclxuXHJcbiAgICAgIGNvbnN0ICRsb29rdXBCb29rID0ge1xyXG4gICAgICAgICRsb29rdXA6IHtcclxuICAgICAgICAgIGZyb206IENPTExFQ1RJT05TLkJPT0ssXHJcbiAgICAgICAgICBmb3JlaWduRmllbGQ6ICdnZW5yZUlkJyxcclxuICAgICAgICAgIGxvY2FsRmllbGQ6ICdfaWQnLFxyXG4gICAgICAgICAgYXM6ICdib29rcycsXHJcbiAgICAgICAgfSxcclxuICAgICAgfTtcclxuXHJcbiAgICAgIGNvbnN0ICR1bndpbmRCb29rID0ge1xyXG4gICAgICAgICR1bndpbmQ6IHtcclxuICAgICAgICAgIHBhdGg6ICckYm9va3MnLFxyXG4gICAgICAgICAgcHJlc2VydmVOdWxsQW5kRW1wdHlBcnJheXM6IGZhbHNlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH07XHJcblxyXG4gICAgICBjb25zdCAkcmVwbGFjZVJvb3QgPSB7XHJcbiAgICAgICAgJHJlcGxhY2VSb290OiB7XHJcbiAgICAgICAgICBuZXdSb290OiAnJGJvb2tzJyxcclxuICAgICAgICB9LFxyXG4gICAgICB9O1xyXG5cclxuICAgICAgY29uc3QgJG1hdGNoQm9vayA9IHtcclxuICAgICAgICAkbWF0Y2g6IHtcclxuICAgICAgICAgIGlzRGVsZXRlZDogZmFsc2UsXHJcbiAgICAgICAgICBnZW5yZUlkOiBuZXcgVHlwZXMuT2JqZWN0SWQoaWQpLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH07XHJcblxyXG4gICAgICBjb25zdCAkcGlwbGluZSA9IFskbWF0Y2hHZW5yZSwgJGxvb2t1cEJvb2ssICR1bndpbmRCb29rLCAkcmVwbGFjZVJvb3QsICRtYXRjaEJvb2tdO1xyXG5cclxuICAgICAgbGV0IGRhdGEgPSBhd2FpdCB0aGlzLmFnZ3JlZ2F0ZSgkcGlwbGluZSk7XHJcblxyXG4gICAgICBjb25zdCBnZW5yZSA9IGRhdGEuc2hpZnQoKTtcclxuICAgICAgaWYgKGdlbnJlKSB0aHJvdyBHZW5yZUV4Y2VwdGlvbi5DYW5Ob3REZWxldGVHZW5yZShpZCk7XHJcbiAgICAgIHJldHVybiBnZW5yZTtcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgaWYgKGUgaW5zdGFuY2VvZiBHZW5yZUV4Y2VwdGlvbikge1xyXG4gICAgICAgIHRocm93IGU7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhyb3cgR2VucmVFeGNlcHRpb24uVW5rbm93bkVycm9yKGUpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZ2VucmVTZXJ2aWNlID0gbmV3IEdlbnJlU2VydmljZShHZW5yZU1vZGVsKTtcclxuIl19