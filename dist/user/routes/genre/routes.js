"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.genreRoutes = void 0;
const config_1 = require("../../../common/config");
const genre_handler_1 = require("../../handlers/genre/genre.handler");
const authenticate_1 = require("../../middleware/authenticate");
exports.genreRoutes = [
    {
        method: 'GET',
        url: `${config_1.API.user_api}/genre/:_id`,
        preValidation: [authenticate_1.mightyUserAuth],
        handler: genre_handler_1.getOneGenreHandler,
    },
    {
        method: 'GET',
        url: `${config_1.API.user_api}/genre/child/:_id`,
        preValidation: [authenticate_1.mightyUserAuth],
        handler: genre_handler_1.getGenreFirstChildHandler,
    },
    {
        method: 'GET',
        url: `${config_1.API.user_api}/genre`,
        preValidation: [authenticate_1.mightyUserAuth],
        handler: genre_handler_1.getPagingGenreHandler,
    }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL3VzZXIvcm91dGVzL2dlbnJlL3JvdXRlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxtREFBNkM7QUFDN0Msc0VBQTBIO0FBQzFILGdFQUErRDtBQUVsRCxRQUFBLFdBQVcsR0FBRztJQUN6QjtRQUNFLE1BQU0sRUFBRSxLQUFLO1FBQ2IsR0FBRyxFQUFFLEdBQUcsWUFBRyxDQUFDLFFBQVEsYUFBYTtRQUNqQyxhQUFhLEVBQUUsQ0FBQyw2QkFBYyxDQUFDO1FBQy9CLE9BQU8sRUFBRSxrQ0FBa0I7S0FDNUI7SUFDRDtRQUNFLE1BQU0sRUFBRSxLQUFLO1FBQ2IsR0FBRyxFQUFFLEdBQUcsWUFBRyxDQUFDLFFBQVEsbUJBQW1CO1FBQ3ZDLGFBQWEsRUFBRSxDQUFDLDZCQUFjLENBQUM7UUFDL0IsT0FBTyxFQUFFLHlDQUF5QjtLQUNuQztJQUNEO1FBQ0UsTUFBTSxFQUFFLEtBQUs7UUFDYixHQUFHLEVBQUUsR0FBRyxZQUFHLENBQUMsUUFBUSxRQUFRO1FBQzVCLGFBQWEsRUFBRSxDQUFDLDZCQUFjLENBQUM7UUFDL0IsT0FBTyxFQUFFLHFDQUFxQjtLQUMvQjtDQUNGLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBUEkgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vY29uZmlnJztcclxuaW1wb3J0IHsgZ2V0R2VucmVGaXJzdENoaWxkSGFuZGxlciwgZ2V0T25lR2VucmVIYW5kbGVyLCBnZXRQYWdpbmdHZW5yZUhhbmRsZXIgfSBmcm9tICcuLi8uLi9oYW5kbGVycy9nZW5yZS9nZW5yZS5oYW5kbGVyJztcclxuaW1wb3J0IHsgbWlnaHR5VXNlckF1dGggfSBmcm9tICcuLi8uLi9taWRkbGV3YXJlL2F1dGhlbnRpY2F0ZSc7XHJcblxyXG5leHBvcnQgY29uc3QgZ2VucmVSb3V0ZXMgPSBbXHJcbiAge1xyXG4gICAgbWV0aG9kOiAnR0VUJyxcclxuICAgIHVybDogYCR7QVBJLnVzZXJfYXBpfS9nZW5yZS86X2lkYCxcclxuICAgIHByZVZhbGlkYXRpb246IFttaWdodHlVc2VyQXV0aF0sXHJcbiAgICBoYW5kbGVyOiBnZXRPbmVHZW5yZUhhbmRsZXIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgdXJsOiBgJHtBUEkudXNlcl9hcGl9L2dlbnJlL2NoaWxkLzpfaWRgLFxyXG4gICAgcHJlVmFsaWRhdGlvbjogW21pZ2h0eVVzZXJBdXRoXSxcclxuICAgIGhhbmRsZXI6IGdldEdlbnJlRmlyc3RDaGlsZEhhbmRsZXIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgdXJsOiBgJHtBUEkudXNlcl9hcGl9L2dlbnJlYCxcclxuICAgIHByZVZhbGlkYXRpb246IFttaWdodHlVc2VyQXV0aF0sXHJcbiAgICBoYW5kbGVyOiBnZXRQYWdpbmdHZW5yZUhhbmRsZXIsXHJcbiAgfVxyXG5dO1xyXG4iXX0=