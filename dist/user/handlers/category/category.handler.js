"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPagingCategoryHandler = exports.getOneCategoryHandler = void 0;
const exception_1 = require("../../../common/db/models/category/exception");
const category_service_1 = require("../../../common/service/category/category.service");
const category_dto_1 = require("../../../common/validation/dto/category.dto");
const validate_1 = require("../../../common/validation/validate");
async function getOneCategoryHandler(request, reply) {
    try {
        const data = await (0, validate_1.validateIt)(request.params, category_dto_1.CategoryDto, [category_dto_1.CategoryDtoGroup.GET_BY_ID]);
        const category = await category_service_1.categoryService.getCategoryFull(data._id);
        return reply.success(category);
    }
    catch (e) {
        if (e instanceof exception_1.CategoryException) {
            throw e;
        }
        else {
            throw exception_1.CategoryException.UnknownError(e);
        }
    }
}
exports.getOneCategoryHandler = getOneCategoryHandler;
async function getPagingCategoryHandler(request, reply) {
    try {
        const data = await (0, validate_1.validateIt)(request.query, category_dto_1.CategoryGetDto, [category_dto_1.CategoryDtoGroup.PAGENATION]);
        const categorys = await category_service_1.categoryService.getPaging(data);
        return reply.success(categorys);
    }
    catch (e) {
        if (e instanceof exception_1.CategoryException) {
            throw e;
        }
        else {
            throw exception_1.CategoryException.UnknownError(e);
        }
    }
}
exports.getPagingCategoryHandler = getPagingCategoryHandler;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2F0ZWdvcnkuaGFuZGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy91c2VyL2hhbmRsZXJzL2NhdGVnb3J5L2NhdGVnb3J5LmhhbmRsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsNEVBQWlGO0FBQ2pGLHdGQUFvRjtBQUNwRiw4RUFBNEc7QUFDNUcsa0VBQWlFO0FBRTFELEtBQUssVUFBVSxxQkFBcUIsQ0FBQyxPQUFPLEVBQUUsS0FBSztJQUN4RCxJQUFJO1FBRUYsTUFBTSxJQUFJLEdBQUcsTUFBTSxJQUFBLHFCQUFVLEVBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSwwQkFBVyxFQUFFLENBQUMsK0JBQWdCLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztRQUV6RixNQUFNLFFBQVEsR0FBRyxNQUFNLGtDQUFlLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUVqRSxPQUFPLEtBQUssQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7S0FFaEM7SUFBQyxPQUFPLENBQUMsRUFBRTtRQUNWLElBQUksQ0FBQyxZQUFZLDZCQUFpQixFQUFFO1lBQ2xDLE1BQU0sQ0FBQyxDQUFDO1NBQ1Q7YUFBTTtZQUNMLE1BQU0sNkJBQWlCLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3pDO0tBQ0Y7QUFFSCxDQUFDO0FBakJELHNEQWlCQztBQUVNLEtBQUssVUFBVSx3QkFBd0IsQ0FBQyxPQUFPLEVBQUUsS0FBSztJQUMzRCxJQUFJO1FBRUYsTUFBTSxJQUFJLEdBQUcsTUFBTSxJQUFBLHFCQUFVLEVBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSw2QkFBYyxFQUFFLENBQUMsK0JBQWdCLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztRQUU1RixNQUFNLFNBQVMsR0FBRyxNQUFNLGtDQUFlLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRXhELE9BQU8sS0FBSyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQztLQUVqQztJQUFDLE9BQU8sQ0FBQyxFQUFFO1FBQ1YsSUFBSSxDQUFDLFlBQVksNkJBQWlCLEVBQUU7WUFDbEMsTUFBTSxDQUFDLENBQUM7U0FDVDthQUFNO1lBQ0wsTUFBTSw2QkFBaUIsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDekM7S0FDRjtBQUNILENBQUM7QUFoQkQsNERBZ0JDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2F0ZWdvcnlFeGNlcHRpb24gfSBmcm9tICcuLi8uLi8uLi9jb21tb24vZGIvbW9kZWxzL2NhdGVnb3J5L2V4Y2VwdGlvbic7XHJcbmltcG9ydCB7IGNhdGVnb3J5U2VydmljZSB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9zZXJ2aWNlL2NhdGVnb3J5L2NhdGVnb3J5LnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBDYXRlZ29yeUR0bywgQ2F0ZWdvcnlEdG9Hcm91cCwgQ2F0ZWdvcnlHZXREdG8gfSBmcm9tICcuLi8uLi8uLi9jb21tb24vdmFsaWRhdGlvbi9kdG8vY2F0ZWdvcnkuZHRvJztcclxuaW1wb3J0IHsgdmFsaWRhdGVJdCB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi92YWxpZGF0aW9uL3ZhbGlkYXRlJztcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRPbmVDYXRlZ29yeUhhbmRsZXIocmVxdWVzdCwgcmVwbHkpIHtcclxuICB0cnkge1xyXG5cclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCB2YWxpZGF0ZUl0KHJlcXVlc3QucGFyYW1zLCBDYXRlZ29yeUR0bywgW0NhdGVnb3J5RHRvR3JvdXAuR0VUX0JZX0lEXSk7XHJcblxyXG4gICAgY29uc3QgY2F0ZWdvcnkgPSBhd2FpdCBjYXRlZ29yeVNlcnZpY2UuZ2V0Q2F0ZWdvcnlGdWxsKGRhdGEuX2lkKTtcclxuXHJcbiAgICByZXR1cm4gcmVwbHkuc3VjY2VzcyhjYXRlZ29yeSk7XHJcblxyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIGlmIChlIGluc3RhbmNlb2YgQ2F0ZWdvcnlFeGNlcHRpb24pIHtcclxuICAgICAgdGhyb3cgZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRocm93IENhdGVnb3J5RXhjZXB0aW9uLlVua25vd25FcnJvcihlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0UGFnaW5nQ2F0ZWdvcnlIYW5kbGVyKHJlcXVlc3QsIHJlcGx5KSB7XHJcbiAgdHJ5IHtcclxuXHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgdmFsaWRhdGVJdChyZXF1ZXN0LnF1ZXJ5LCBDYXRlZ29yeUdldER0bywgW0NhdGVnb3J5RHRvR3JvdXAuUEFHRU5BVElPTl0pO1xyXG5cclxuICAgIGNvbnN0IGNhdGVnb3J5cyA9IGF3YWl0IGNhdGVnb3J5U2VydmljZS5nZXRQYWdpbmcoZGF0YSk7XHJcblxyXG4gICAgcmV0dXJuIHJlcGx5LnN1Y2Nlc3MoY2F0ZWdvcnlzKTtcclxuXHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgaWYgKGUgaW5zdGFuY2VvZiBDYXRlZ29yeUV4Y2VwdGlvbikge1xyXG4gICAgICB0aHJvdyBlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhyb3cgQ2F0ZWdvcnlFeGNlcHRpb24uVW5rbm93bkVycm9yKGUpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuXHJcbiJdfQ==