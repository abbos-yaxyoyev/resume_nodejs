"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.genreRoutes = void 0;
const config_1 = require("../../../common/config");
const genre_handler_1 = require("../../handlers/genre/genre.handler");
const authenticate_1 = require("../../middleware/authenticate");
exports.genreRoutes = [
    {
        method: 'POST',
        url: `${config_1.API.admin_api}/genre`,
        preValidation: [authenticate_1.authEmployee],
        handler: genre_handler_1.createGenreHandler,
    },
    {
        method: 'PUT',
        url: `${config_1.API.admin_api}/genre`,
        preValidation: [authenticate_1.authEmployee],
        handler: genre_handler_1.updateGenreHandler,
    },
    {
        method: 'DELETE',
        url: `${config_1.API.admin_api}/genre/:_id`,
        preValidation: [authenticate_1.authEmployee],
        handler: genre_handler_1.deleteOneGenreHandler,
    },
    {
        method: 'GET',
        url: `${config_1.API.admin_api}/genre/:_id`,
        preValidation: [authenticate_1.authEmployee],
        handler: genre_handler_1.getOneGenreHandler,
    },
    {
        method: 'GET',
        url: `${config_1.API.admin_api}/genre`,
        preValidation: [authenticate_1.authEmployee],
        handler: genre_handler_1.getPagingGenresHandler,
    }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2VtcGxveWVlL3JvdXRlcy9nZW5yZS9yb3V0ZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsbURBQTZDO0FBQzdDLHNFQU00QztBQUM1QyxnRUFBNkQ7QUFFaEQsUUFBQSxXQUFXLEdBQUc7SUFDekI7UUFDRSxNQUFNLEVBQUUsTUFBTTtRQUNkLEdBQUcsRUFBRSxHQUFHLFlBQUcsQ0FBQyxTQUFTLFFBQVE7UUFDN0IsYUFBYSxFQUFFLENBQUMsMkJBQVksQ0FBQztRQUM3QixPQUFPLEVBQUUsa0NBQWtCO0tBQzVCO0lBQ0Q7UUFDRSxNQUFNLEVBQUUsS0FBSztRQUNiLEdBQUcsRUFBRSxHQUFHLFlBQUcsQ0FBQyxTQUFTLFFBQVE7UUFDN0IsYUFBYSxFQUFFLENBQUMsMkJBQVksQ0FBQztRQUM3QixPQUFPLEVBQUUsa0NBQWtCO0tBQzVCO0lBQ0Q7UUFDRSxNQUFNLEVBQUUsUUFBUTtRQUNoQixHQUFHLEVBQUUsR0FBRyxZQUFHLENBQUMsU0FBUyxhQUFhO1FBQ2xDLGFBQWEsRUFBRSxDQUFDLDJCQUFZLENBQUM7UUFDN0IsT0FBTyxFQUFFLHFDQUFxQjtLQUMvQjtJQUNEO1FBQ0UsTUFBTSxFQUFFLEtBQUs7UUFDYixHQUFHLEVBQUUsR0FBRyxZQUFHLENBQUMsU0FBUyxhQUFhO1FBQ2xDLGFBQWEsRUFBRSxDQUFDLDJCQUFZLENBQUM7UUFDN0IsT0FBTyxFQUFFLGtDQUFrQjtLQUM1QjtJQUNEO1FBQ0UsTUFBTSxFQUFFLEtBQUs7UUFDYixHQUFHLEVBQUUsR0FBRyxZQUFHLENBQUMsU0FBUyxRQUFRO1FBQzdCLGFBQWEsRUFBRSxDQUFDLDJCQUFZLENBQUM7UUFDN0IsT0FBTyxFQUFFLHNDQUFzQjtLQUNoQztDQUNGLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBUEkgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vY29uZmlnJztcclxuaW1wb3J0IHtcclxuICBjcmVhdGVHZW5yZUhhbmRsZXIsXHJcbiAgZGVsZXRlT25lR2VucmVIYW5kbGVyLFxyXG4gIGdldE9uZUdlbnJlSGFuZGxlcixcclxuICBnZXRQYWdpbmdHZW5yZXNIYW5kbGVyLFxyXG4gIHVwZGF0ZUdlbnJlSGFuZGxlclxyXG59IGZyb20gJy4uLy4uL2hhbmRsZXJzL2dlbnJlL2dlbnJlLmhhbmRsZXInO1xyXG5pbXBvcnQgeyBhdXRoRW1wbG95ZWUgfSBmcm9tICcuLi8uLi9taWRkbGV3YXJlL2F1dGhlbnRpY2F0ZSc7XHJcblxyXG5leHBvcnQgY29uc3QgZ2VucmVSb3V0ZXMgPSBbXHJcbiAge1xyXG4gICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICB1cmw6IGAke0FQSS5hZG1pbl9hcGl9L2dlbnJlYCxcclxuICAgIHByZVZhbGlkYXRpb246IFthdXRoRW1wbG95ZWVdLFxyXG4gICAgaGFuZGxlcjogY3JlYXRlR2VucmVIYW5kbGVyLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbWV0aG9kOiAnUFVUJyxcclxuICAgIHVybDogYCR7QVBJLmFkbWluX2FwaX0vZ2VucmVgLFxyXG4gICAgcHJlVmFsaWRhdGlvbjogW2F1dGhFbXBsb3llZV0sXHJcbiAgICBoYW5kbGVyOiB1cGRhdGVHZW5yZUhhbmRsZXIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBtZXRob2Q6ICdERUxFVEUnLFxyXG4gICAgdXJsOiBgJHtBUEkuYWRtaW5fYXBpfS9nZW5yZS86X2lkYCxcclxuICAgIHByZVZhbGlkYXRpb246IFthdXRoRW1wbG95ZWVdLFxyXG4gICAgaGFuZGxlcjogZGVsZXRlT25lR2VucmVIYW5kbGVyLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbWV0aG9kOiAnR0VUJyxcclxuICAgIHVybDogYCR7QVBJLmFkbWluX2FwaX0vZ2VucmUvOl9pZGAsXHJcbiAgICBwcmVWYWxpZGF0aW9uOiBbYXV0aEVtcGxveWVlXSxcclxuICAgIGhhbmRsZXI6IGdldE9uZUdlbnJlSGFuZGxlcixcclxuICB9LFxyXG4gIHtcclxuICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICB1cmw6IGAke0FQSS5hZG1pbl9hcGl9L2dlbnJlYCxcclxuICAgIHByZVZhbGlkYXRpb246IFthdXRoRW1wbG95ZWVdLFxyXG4gICAgaGFuZGxlcjogZ2V0UGFnaW5nR2VucmVzSGFuZGxlcixcclxuICB9XHJcbl07XHJcbiJdfQ==