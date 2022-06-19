"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoryRoutes = void 0;
const config_1 = require("../../../common/config");
const category_handler_1 = require("../../handlers/category/category.handler");
const authenticate_1 = require("../../middleware/authenticate");
exports.categoryRoutes = [
    {
        method: 'POST',
        url: `${config_1.API.admin_api}/category`,
        preValidation: [authenticate_1.authEmployee],
        handler: category_handler_1.createCategoryHandler,
    },
    {
        method: 'PUT',
        url: `${config_1.API.admin_api}/category`,
        preValidation: [authenticate_1.authEmployee],
        handler: category_handler_1.updateCategoryHandler,
    },
    {
        method: 'DELETE',
        url: `${config_1.API.admin_api}/category/:_id`,
        preValidation: [authenticate_1.authEmployee],
        handler: category_handler_1.deleteOneCategoryHandler,
    },
    {
        method: 'GET',
        url: `${config_1.API.admin_api}/category/:_id`,
        preValidation: [authenticate_1.authEmployee],
        handler: category_handler_1.getOneCategoryHandler,
    },
    {
        method: 'GET',
        url: `${config_1.API.admin_api}/category`,
        preValidation: [authenticate_1.authEmployee],
        handler: category_handler_1.getPagingGenresHandler,
    }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL0VtcGxveWVlL3JvdXRlcy9jYXRlZ29yeS9yb3V0ZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsbURBQTZDO0FBQzdDLCtFQU1rRDtBQUNsRCxnRUFBNkQ7QUFFaEQsUUFBQSxjQUFjLEdBQUc7SUFDNUI7UUFDRSxNQUFNLEVBQUUsTUFBTTtRQUNkLEdBQUcsRUFBRSxHQUFHLFlBQUcsQ0FBQyxTQUFTLFdBQVc7UUFDaEMsYUFBYSxFQUFFLENBQUMsMkJBQVksQ0FBQztRQUM3QixPQUFPLEVBQUUsd0NBQXFCO0tBQy9CO0lBQ0Q7UUFDRSxNQUFNLEVBQUUsS0FBSztRQUNiLEdBQUcsRUFBRSxHQUFHLFlBQUcsQ0FBQyxTQUFTLFdBQVc7UUFDaEMsYUFBYSxFQUFFLENBQUMsMkJBQVksQ0FBQztRQUM3QixPQUFPLEVBQUUsd0NBQXFCO0tBQy9CO0lBQ0Q7UUFDRSxNQUFNLEVBQUUsUUFBUTtRQUNoQixHQUFHLEVBQUUsR0FBRyxZQUFHLENBQUMsU0FBUyxnQkFBZ0I7UUFDckMsYUFBYSxFQUFFLENBQUMsMkJBQVksQ0FBQztRQUM3QixPQUFPLEVBQUUsMkNBQXdCO0tBQ2xDO0lBQ0Q7UUFDRSxNQUFNLEVBQUUsS0FBSztRQUNiLEdBQUcsRUFBRSxHQUFHLFlBQUcsQ0FBQyxTQUFTLGdCQUFnQjtRQUNyQyxhQUFhLEVBQUUsQ0FBQywyQkFBWSxDQUFDO1FBQzdCLE9BQU8sRUFBRSx3Q0FBcUI7S0FDL0I7SUFDRDtRQUNFLE1BQU0sRUFBRSxLQUFLO1FBQ2IsR0FBRyxFQUFFLEdBQUcsWUFBRyxDQUFDLFNBQVMsV0FBVztRQUNoQyxhQUFhLEVBQUUsQ0FBQywyQkFBWSxDQUFDO1FBQzdCLE9BQU8sRUFBRSx5Q0FBc0I7S0FDaEM7Q0FDRixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQVBJIH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL2NvbmZpZyc7XHJcbmltcG9ydCB7XHJcbiAgY3JlYXRlQ2F0ZWdvcnlIYW5kbGVyLFxyXG4gIGRlbGV0ZU9uZUNhdGVnb3J5SGFuZGxlcixcclxuICBnZXRPbmVDYXRlZ29yeUhhbmRsZXIsXHJcbiAgZ2V0UGFnaW5nR2VucmVzSGFuZGxlcixcclxuICB1cGRhdGVDYXRlZ29yeUhhbmRsZXJcclxufSBmcm9tICcuLi8uLi9oYW5kbGVycy9jYXRlZ29yeS9jYXRlZ29yeS5oYW5kbGVyJztcclxuaW1wb3J0IHsgYXV0aEVtcGxveWVlIH0gZnJvbSAnLi4vLi4vbWlkZGxld2FyZS9hdXRoZW50aWNhdGUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGNhdGVnb3J5Um91dGVzID0gW1xyXG4gIHtcclxuICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgdXJsOiBgJHtBUEkuYWRtaW5fYXBpfS9jYXRlZ29yeWAsXHJcbiAgICBwcmVWYWxpZGF0aW9uOiBbYXV0aEVtcGxveWVlXSxcclxuICAgIGhhbmRsZXI6IGNyZWF0ZUNhdGVnb3J5SGFuZGxlcixcclxuICB9LFxyXG4gIHtcclxuICAgIG1ldGhvZDogJ1BVVCcsXHJcbiAgICB1cmw6IGAke0FQSS5hZG1pbl9hcGl9L2NhdGVnb3J5YCxcclxuICAgIHByZVZhbGlkYXRpb246IFthdXRoRW1wbG95ZWVdLFxyXG4gICAgaGFuZGxlcjogdXBkYXRlQ2F0ZWdvcnlIYW5kbGVyLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbWV0aG9kOiAnREVMRVRFJyxcclxuICAgIHVybDogYCR7QVBJLmFkbWluX2FwaX0vY2F0ZWdvcnkvOl9pZGAsXHJcbiAgICBwcmVWYWxpZGF0aW9uOiBbYXV0aEVtcGxveWVlXSxcclxuICAgIGhhbmRsZXI6IGRlbGV0ZU9uZUNhdGVnb3J5SGFuZGxlcixcclxuICB9LFxyXG4gIHtcclxuICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICB1cmw6IGAke0FQSS5hZG1pbl9hcGl9L2NhdGVnb3J5LzpfaWRgLFxyXG4gICAgcHJlVmFsaWRhdGlvbjogW2F1dGhFbXBsb3llZV0sXHJcbiAgICBoYW5kbGVyOiBnZXRPbmVDYXRlZ29yeUhhbmRsZXIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgdXJsOiBgJHtBUEkuYWRtaW5fYXBpfS9jYXRlZ29yeWAsXHJcbiAgICBwcmVWYWxpZGF0aW9uOiBbYXV0aEVtcGxveWVlXSxcclxuICAgIGhhbmRsZXI6IGdldFBhZ2luZ0dlbnJlc0hhbmRsZXIsXHJcbiAgfVxyXG5dO1xyXG4iXX0=