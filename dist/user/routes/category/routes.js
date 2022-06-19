"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoryRoutes = void 0;
const config_1 = require("../../../common/config");
const category_handler_1 = require("../../handlers/category/category.handler");
const authenticate_1 = require("../../middleware/authenticate");
exports.categoryRoutes = [
    {
        method: 'GET',
        url: `${config_1.API.user_api}/category/:_id`,
        preValidation: [authenticate_1.mightyUserAuth],
        handler: category_handler_1.getOneCategoryHandler,
    },
    {
        method: 'GET',
        url: `${config_1.API.user_api}/category`,
        preValidation: [authenticate_1.mightyUserAuth],
        handler: category_handler_1.getPagingCategoryHandler,
    }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL3VzZXIvcm91dGVzL2NhdGVnb3J5L3JvdXRlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxtREFBNkM7QUFDN0MsK0VBQTJHO0FBQzNHLGdFQUErRDtBQUVsRCxRQUFBLGNBQWMsR0FBRztJQUM1QjtRQUNFLE1BQU0sRUFBRSxLQUFLO1FBQ2IsR0FBRyxFQUFFLEdBQUcsWUFBRyxDQUFDLFFBQVEsZ0JBQWdCO1FBQ3BDLGFBQWEsRUFBRSxDQUFDLDZCQUFjLENBQUM7UUFDL0IsT0FBTyxFQUFFLHdDQUFxQjtLQUMvQjtJQUNEO1FBQ0UsTUFBTSxFQUFFLEtBQUs7UUFDYixHQUFHLEVBQUUsR0FBRyxZQUFHLENBQUMsUUFBUSxXQUFXO1FBQy9CLGFBQWEsRUFBRSxDQUFDLDZCQUFjLENBQUM7UUFDL0IsT0FBTyxFQUFFLDJDQUF3QjtLQUNsQztDQUNGLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBUEkgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vY29uZmlnJztcclxuaW1wb3J0IHsgZ2V0T25lQ2F0ZWdvcnlIYW5kbGVyLCBnZXRQYWdpbmdDYXRlZ29yeUhhbmRsZXIgfSBmcm9tICcuLi8uLi9oYW5kbGVycy9jYXRlZ29yeS9jYXRlZ29yeS5oYW5kbGVyJztcclxuaW1wb3J0IHsgbWlnaHR5VXNlckF1dGggfSBmcm9tICcuLi8uLi9taWRkbGV3YXJlL2F1dGhlbnRpY2F0ZSc7XHJcblxyXG5leHBvcnQgY29uc3QgY2F0ZWdvcnlSb3V0ZXMgPSBbXHJcbiAge1xyXG4gICAgbWV0aG9kOiAnR0VUJyxcclxuICAgIHVybDogYCR7QVBJLnVzZXJfYXBpfS9jYXRlZ29yeS86X2lkYCxcclxuICAgIHByZVZhbGlkYXRpb246IFttaWdodHlVc2VyQXV0aF0sXHJcbiAgICBoYW5kbGVyOiBnZXRPbmVDYXRlZ29yeUhhbmRsZXIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgdXJsOiBgJHtBUEkudXNlcl9hcGl9L2NhdGVnb3J5YCxcclxuICAgIHByZVZhbGlkYXRpb246IFttaWdodHlVc2VyQXV0aF0sXHJcbiAgICBoYW5kbGVyOiBnZXRQYWdpbmdDYXRlZ29yeUhhbmRsZXIsXHJcbiAgfVxyXG5dO1xyXG4iXX0=