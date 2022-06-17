"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getGenreFirstChildHandler = exports.getPagingGenreHandler = exports.getOneGenreHandler = void 0;
const exception_1 = require("../../../common/db/models/genre/exception");
const genre_service_1 = require("../../../common/service/genre/genre.service");
const genre_dto_1 = require("../../../common/validation/dto/genre.dto");
const validate_1 = require("../../../common/validation/validate");
async function getOneGenreHandler(request, reply) {
    try {
        const data = await (0, validate_1.validateIt)(request.params, genre_dto_1.GenreDto, [genre_dto_1.GenreDtoGroup.GET_BY_ID]);
        const genre = await genre_service_1.genreService.getGenereFull(data._id);
        return reply.success(genre);
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
exports.getOneGenreHandler = getOneGenreHandler;
async function getPagingGenreHandler(request, reply) {
    try {
        const data = await (0, validate_1.validateIt)(request.query, genre_dto_1.GenreGetDto, [genre_dto_1.GenreDtoGroup.PAGENATION]);
        const genres = await genre_service_1.genreService.getPaging(data);
        return reply.success(genres);
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
exports.getPagingGenreHandler = getPagingGenreHandler;
async function getGenreFirstChildHandler(request, reply) {
    try {
        const data = await (0, validate_1.validateIt)(request.params, genre_dto_1.GenreDto, [genre_dto_1.GenreDtoGroup.PAGENATION]);
        const genres = await genre_service_1.genreService.getFirstChildPaging(data._id);
        return reply.success(genres);
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
exports.getGenreFirstChildHandler = getGenreFirstChildHandler;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VucmUuaGFuZGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy91c2VyL2hhbmRsZXJzL2dlbnJlL2dlbnJlLmhhbmRsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEseUVBQTJFO0FBQzNFLCtFQUEyRTtBQUMzRSx3RUFBZ0c7QUFDaEcsa0VBQWlFO0FBRTFELEtBQUssVUFBVSxrQkFBa0IsQ0FBQyxPQUFPLEVBQUUsS0FBSztJQUNyRCxJQUFJO1FBRUYsTUFBTSxJQUFJLEdBQUcsTUFBTSxJQUFBLHFCQUFVLEVBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxvQkFBUSxFQUFFLENBQUMseUJBQWEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1FBRW5GLE1BQU0sS0FBSyxHQUFHLE1BQU0sNEJBQVksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBRXpELE9BQU8sS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUU3QjtJQUFDLE9BQU8sQ0FBQyxFQUFFO1FBQ1YsSUFBSSxDQUFDLFlBQVksMEJBQWMsRUFBRTtZQUMvQixNQUFNLENBQUMsQ0FBQztTQUNUO2FBQU07WUFDTCxNQUFNLDBCQUFjLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3RDO0tBQ0Y7QUFFSCxDQUFDO0FBakJELGdEQWlCQztBQUVNLEtBQUssVUFBVSxxQkFBcUIsQ0FBQyxPQUFPLEVBQUUsS0FBSztJQUN4RCxJQUFJO1FBRUYsTUFBTSxJQUFJLEdBQUcsTUFBTSxJQUFBLHFCQUFVLEVBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSx1QkFBVyxFQUFFLENBQUMseUJBQWEsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO1FBRXRGLE1BQU0sTUFBTSxHQUFHLE1BQU0sNEJBQVksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFbEQsT0FBTyxLQUFLLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0tBRTlCO0lBQUMsT0FBTyxDQUFDLEVBQUU7UUFDVixJQUFJLENBQUMsWUFBWSwwQkFBYyxFQUFFO1lBQy9CLE1BQU0sQ0FBQyxDQUFDO1NBQ1Q7YUFBTTtZQUNMLE1BQU0sMEJBQWMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDdEM7S0FDRjtBQUNILENBQUM7QUFoQkQsc0RBZ0JDO0FBRU0sS0FBSyxVQUFVLHlCQUF5QixDQUFDLE9BQU8sRUFBRSxLQUFLO0lBRTVELElBQUk7UUFFRixNQUFNLElBQUksR0FBRyxNQUFNLElBQUEscUJBQVUsRUFBQyxPQUFPLENBQUMsTUFBTSxFQUFFLG9CQUFRLEVBQUUsQ0FBQyx5QkFBYSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7UUFFcEYsTUFBTSxNQUFNLEdBQUcsTUFBTSw0QkFBWSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUVoRSxPQUFPLEtBQUssQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7S0FFOUI7SUFBQyxPQUFPLENBQUMsRUFBRTtRQUNWLElBQUksQ0FBQyxZQUFZLDBCQUFjLEVBQUU7WUFDL0IsTUFBTSxDQUFDLENBQUM7U0FDVDthQUFNO1lBQ0wsTUFBTSwwQkFBYyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUN0QztLQUNGO0FBRUgsQ0FBQztBQWxCRCw4REFrQkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHZW5yZUV4Y2VwdGlvbiB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9kYi9tb2RlbHMvZ2VucmUvZXhjZXB0aW9uJztcclxuaW1wb3J0IHsgZ2VucmVTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL3NlcnZpY2UvZ2VucmUvZ2VucmUuc2VydmljZSc7XHJcbmltcG9ydCB7IEdlbnJlRHRvLCBHZW5yZUR0b0dyb3VwLCBHZW5yZUdldER0byB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi92YWxpZGF0aW9uL2R0by9nZW5yZS5kdG8nO1xyXG5pbXBvcnQgeyB2YWxpZGF0ZUl0IH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL3ZhbGlkYXRpb24vdmFsaWRhdGUnO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldE9uZUdlbnJlSGFuZGxlcihyZXF1ZXN0LCByZXBseSkge1xyXG4gIHRyeSB7XHJcblxyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHZhbGlkYXRlSXQocmVxdWVzdC5wYXJhbXMsIEdlbnJlRHRvLCBbR2VucmVEdG9Hcm91cC5HRVRfQllfSURdKTtcclxuXHJcbiAgICBjb25zdCBnZW5yZSA9IGF3YWl0IGdlbnJlU2VydmljZS5nZXRHZW5lcmVGdWxsKGRhdGEuX2lkKTtcclxuXHJcbiAgICByZXR1cm4gcmVwbHkuc3VjY2VzcyhnZW5yZSk7XHJcblxyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIGlmIChlIGluc3RhbmNlb2YgR2VucmVFeGNlcHRpb24pIHtcclxuICAgICAgdGhyb3cgZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRocm93IEdlbnJlRXhjZXB0aW9uLlVua25vd25FcnJvcihlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0UGFnaW5nR2VucmVIYW5kbGVyKHJlcXVlc3QsIHJlcGx5KSB7XHJcbiAgdHJ5IHtcclxuXHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgdmFsaWRhdGVJdChyZXF1ZXN0LnF1ZXJ5LCBHZW5yZUdldER0bywgW0dlbnJlRHRvR3JvdXAuUEFHRU5BVElPTl0pO1xyXG5cclxuICAgIGNvbnN0IGdlbnJlcyA9IGF3YWl0IGdlbnJlU2VydmljZS5nZXRQYWdpbmcoZGF0YSk7XHJcblxyXG4gICAgcmV0dXJuIHJlcGx5LnN1Y2Nlc3MoZ2VucmVzKTtcclxuXHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgaWYgKGUgaW5zdGFuY2VvZiBHZW5yZUV4Y2VwdGlvbikge1xyXG4gICAgICB0aHJvdyBlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhyb3cgR2VucmVFeGNlcHRpb24uVW5rbm93bkVycm9yKGUpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEdlbnJlRmlyc3RDaGlsZEhhbmRsZXIocmVxdWVzdCwgcmVwbHkpIHtcclxuXHJcbiAgdHJ5IHtcclxuXHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgdmFsaWRhdGVJdChyZXF1ZXN0LnBhcmFtcywgR2VucmVEdG8sIFtHZW5yZUR0b0dyb3VwLlBBR0VOQVRJT05dKTtcclxuXHJcbiAgICBjb25zdCBnZW5yZXMgPSBhd2FpdCBnZW5yZVNlcnZpY2UuZ2V0Rmlyc3RDaGlsZFBhZ2luZyhkYXRhLl9pZCk7XHJcblxyXG4gICAgcmV0dXJuIHJlcGx5LnN1Y2Nlc3MoZ2VucmVzKTtcclxuXHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgaWYgKGUgaW5zdGFuY2VvZiBHZW5yZUV4Y2VwdGlvbikge1xyXG4gICAgICB0aHJvdyBlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhyb3cgR2VucmVFeGNlcHRpb24uVW5rbm93bkVycm9yKGUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbn1cclxuXHJcbiJdfQ==