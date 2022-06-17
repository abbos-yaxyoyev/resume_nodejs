"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authorRoutes = void 0;
const author_handler_1 = require("../../handlers/author/author.handler");
const authenticate_1 = require("../../middleware/authenticate");
const config_1 = require("./../../../common/config");
exports.authorRoutes = [
    {
        method: 'GET',
        url: `${config_1.API.user_api}/author`,
        preValidation: [authenticate_1.mightyUserAuth],
        handler: author_handler_1.getPagingAuthorHandler,
    }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL3VzZXIvcm91dGVzL2F1dGhvci9yb3V0ZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEseUVBQThFO0FBQzlFLGdFQUErRDtBQUMvRCxxREFBK0M7QUFFbEMsUUFBQSxZQUFZLEdBQUc7SUFDMUI7UUFDRSxNQUFNLEVBQUUsS0FBSztRQUNiLEdBQUcsRUFBRSxHQUFHLFlBQUcsQ0FBQyxRQUFRLFNBQVM7UUFDN0IsYUFBYSxFQUFFLENBQUMsNkJBQWMsQ0FBQztRQUMvQixPQUFPLEVBQUUsdUNBQXNCO0tBQ2hDO0NBQ0YsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdldFBhZ2luZ0F1dGhvckhhbmRsZXIgfSBmcm9tICcuLi8uLi9oYW5kbGVycy9hdXRob3IvYXV0aG9yLmhhbmRsZXInO1xyXG5pbXBvcnQgeyBtaWdodHlVc2VyQXV0aCB9IGZyb20gJy4uLy4uL21pZGRsZXdhcmUvYXV0aGVudGljYXRlJztcclxuaW1wb3J0IHsgQVBJIH0gZnJvbSAnLi8uLi8uLi8uLi9jb21tb24vY29uZmlnJztcclxuXHJcbmV4cG9ydCBjb25zdCBhdXRob3JSb3V0ZXMgPSBbXHJcbiAge1xyXG4gICAgbWV0aG9kOiAnR0VUJyxcclxuICAgIHVybDogYCR7QVBJLnVzZXJfYXBpfS9hdXRob3JgLFxyXG4gICAgcHJlVmFsaWRhdGlvbjogW21pZ2h0eVVzZXJBdXRoXSxcclxuICAgIGhhbmRsZXI6IGdldFBhZ2luZ0F1dGhvckhhbmRsZXIsXHJcbiAgfVxyXG5dO1xyXG4iXX0=