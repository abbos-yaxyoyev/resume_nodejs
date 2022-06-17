"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bookRoutes = void 0;
const book_handler_1 = require("../../handlers/book/book.handler");
const authenticate_1 = require("../../middleware/authenticate");
const config_1 = require("./../../../common/config");
exports.bookRoutes = [
    {
        method: 'GET',
        url: `${config_1.API.user_api}/book/:_id`,
        preValidation: [authenticate_1.mightyUserAuth],
        handler: book_handler_1.getOneBookHandler,
    },
    {
        method: 'GET',
        url: `${config_1.API.user_api}/book`,
        preValidation: [authenticate_1.mightyUserAuth],
        handler: book_handler_1.getPagingBookHandler,
    }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL3VzZXIvcm91dGVzL2Jvb2svcm91dGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLG1FQUEyRjtBQUMzRixnRUFBK0Q7QUFDL0QscURBQStDO0FBRWxDLFFBQUEsVUFBVSxHQUFHO0lBQ3hCO1FBQ0UsTUFBTSxFQUFFLEtBQUs7UUFDYixHQUFHLEVBQUUsR0FBRyxZQUFHLENBQUMsUUFBUSxZQUFZO1FBQ2hDLGFBQWEsRUFBRSxDQUFDLDZCQUFjLENBQUM7UUFDL0IsT0FBTyxFQUFFLGdDQUFpQjtLQUMzQjtJQUNEO1FBQ0UsTUFBTSxFQUFFLEtBQUs7UUFDYixHQUFHLEVBQUUsR0FBRyxZQUFHLENBQUMsUUFBUSxPQUFPO1FBQzNCLGFBQWEsRUFBRSxDQUFDLDZCQUFjLENBQUM7UUFDL0IsT0FBTyxFQUFFLG1DQUFvQjtLQUM5QjtDQUNGLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnZXRPbmVCb29rSGFuZGxlciwgZ2V0UGFnaW5nQm9va0hhbmRsZXIgfSBmcm9tICcuLi8uLi9oYW5kbGVycy9ib29rL2Jvb2suaGFuZGxlcic7XHJcbmltcG9ydCB7IG1pZ2h0eVVzZXJBdXRoIH0gZnJvbSAnLi4vLi4vbWlkZGxld2FyZS9hdXRoZW50aWNhdGUnO1xyXG5pbXBvcnQgeyBBUEkgfSBmcm9tICcuLy4uLy4uLy4uL2NvbW1vbi9jb25maWcnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGJvb2tSb3V0ZXMgPSBbXHJcbiAge1xyXG4gICAgbWV0aG9kOiAnR0VUJyxcclxuICAgIHVybDogYCR7QVBJLnVzZXJfYXBpfS9ib29rLzpfaWRgLFxyXG4gICAgcHJlVmFsaWRhdGlvbjogW21pZ2h0eVVzZXJBdXRoXSxcclxuICAgIGhhbmRsZXI6IGdldE9uZUJvb2tIYW5kbGVyLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbWV0aG9kOiAnR0VUJyxcclxuICAgIHVybDogYCR7QVBJLnVzZXJfYXBpfS9ib29rYCxcclxuICAgIHByZVZhbGlkYXRpb246IFttaWdodHlVc2VyQXV0aF0sXHJcbiAgICBoYW5kbGVyOiBnZXRQYWdpbmdCb29rSGFuZGxlcixcclxuICB9XHJcbl07XHJcbiJdfQ==