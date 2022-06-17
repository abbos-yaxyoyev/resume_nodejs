"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteOneBookHandler = exports.getOneBookHandler = exports.getPagingBookHandler = exports.updateBookHandler = exports.createBookHandler = void 0;
const mongoose_1 = require("mongoose");
const roles_1 = require("../../../common/constants/roles");
const exceptions_1 = require("../../../common/db/models/book/exceptions");
const book_service_1 = require("../../../common/service/book/book.service");
const role_service_1 = require("../../../common/service/employee/role/role.service");
const book_dto_1 = require("../../../common/validation/dto/book/book.dto");
const validate_1 = require("../../../common/validation/validate");
async function createBookHandler(request, reply) {
    try {
        await role_service_1.roleService.hasAccess(request.admin.roleId, roles_1.Roles.BOOK_CREATE);
        const data = await (0, validate_1.validateIt)(request.body, book_dto_1.BookDto, [book_dto_1.BookDtoGroup.CREATE]);
        const book = await book_service_1.bookService.create(data);
        return reply.success(book._id);
    }
    catch (e) {
        if (e instanceof exceptions_1.BookException) {
            throw e;
        }
        else {
            throw exceptions_1.BookException.UnknownError(e);
        }
    }
}
exports.createBookHandler = createBookHandler;
async function updateBookHandler(request, reply) {
    try {
        await role_service_1.roleService.hasAccess(request.admin.roleId, roles_1.Roles.BOOK_UPDATE);
        const data = await (0, validate_1.validateIt)(request.body, book_dto_1.BookDto, [book_dto_1.BookDtoGroup.UPDATE]);
        const book = await book_service_1.bookService.updateOne(data._id, data, { new: true });
        return reply.success(book._id);
    }
    catch (e) {
        if (e instanceof exceptions_1.BookException) {
            throw e;
        }
        else {
            throw exceptions_1.BookException.UnknownError(e);
        }
    }
}
exports.updateBookHandler = updateBookHandler;
async function getPagingBookHandler(request, reply) {
    try {
        await role_service_1.roleService.hasAccess(request.admin.roleId, roles_1.Roles.BOOK);
        const data = await (0, validate_1.validateIt)(request.query, book_dto_1.BookGetDto, [book_dto_1.BookDtoGroup.PAGENATION]);
        const book = await book_service_1.bookService.getPaging(data);
        return reply.success(book);
    }
    catch (e) {
        if (e instanceof exceptions_1.BookException) {
            throw e;
        }
        else {
            throw exceptions_1.BookException.UnknownError(e);
        }
    }
}
exports.getPagingBookHandler = getPagingBookHandler;
async function getOneBookHandler(request, reply) {
    try {
        await role_service_1.roleService.hasAccess(request.admin.roleId, roles_1.Roles.BOOK);
        const data = await (0, validate_1.validateIt)(request.params, book_dto_1.BookDto, [book_dto_1.BookDtoGroup.GET_BY_ID]);
        const book = await book_service_1.bookService.getOneBook(data._id);
        return reply.success(book);
    }
    catch (e) {
        if (e instanceof exceptions_1.BookException) {
            throw e;
        }
        else {
            throw exceptions_1.BookException.UnknownError(e);
        }
    }
}
exports.getOneBookHandler = getOneBookHandler;
async function deleteOneBookHandler(request, reply) {
    try {
        await role_service_1.roleService.hasAccess(request.admin.roleId, roles_1.Roles.BOOK_DELETE);
        const data = await (0, validate_1.validateIt)(request.params, book_dto_1.BookDto, [book_dto_1.BookDtoGroup.GET_BY_ID]);
        const query = {
            isDeleted: false,
            _id: new mongoose_1.Types.ObjectId(data._id),
        };
        delete request.body._id;
        await book_service_1.bookService.updateOneByQuery(query, { ...request.body, isDeleted: true, deletedAt: Date.now() }, { new: true });
        return reply.success(data._id);
    }
    catch (e) {
        if (e instanceof exceptions_1.BookException) {
            throw e;
        }
        else {
            throw exceptions_1.BookException.UnknownError(e);
        }
    }
}
exports.deleteOneBookHandler = deleteOneBookHandler;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9vay5oYW5kbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2VtcGxveWVlL2hhbmRsZXJzL2Jvb2svYm9vay5oYW5kbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHVDQUFpQztBQUNqQywyREFBd0Q7QUFDeEQsMEVBQTBFO0FBQzFFLDRFQUF3RTtBQUN4RSxxRkFBaUY7QUFDakYsMkVBQWlHO0FBQ2pHLGtFQUFpRTtBQUUxRCxLQUFLLFVBQVUsaUJBQWlCLENBQUMsT0FBTyxFQUFFLEtBQUs7SUFDcEQsSUFBSTtRQUNGLE1BQU0sMEJBQVcsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsYUFBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBRXJFLE1BQU0sSUFBSSxHQUFHLE1BQU0sSUFBQSxxQkFBVSxFQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsa0JBQU8sRUFBRSxDQUFDLHVCQUFZLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUU1RSxNQUFNLElBQUksR0FBRyxNQUFNLDBCQUFXLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRTVDLE9BQU8sS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7S0FDaEM7SUFBQyxPQUFPLENBQUMsRUFBRTtRQUNWLElBQUksQ0FBQyxZQUFZLDBCQUFhLEVBQUU7WUFDOUIsTUFBTSxDQUFDLENBQUM7U0FDVDthQUFNO1lBQ0wsTUFBTSwwQkFBYSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNyQztLQUNGO0FBQ0gsQ0FBQztBQWhCRCw4Q0FnQkM7QUFFTSxLQUFLLFVBQVUsaUJBQWlCLENBQUMsT0FBTyxFQUFFLEtBQUs7SUFDcEQsSUFBSTtRQUNGLE1BQU0sMEJBQVcsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsYUFBSyxDQUFDLFdB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S0FBSztZQUNoQixHQUFHLEVBQUUsSUFBSSxnQkFBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDO1NBQ2xDLENBQUM7UUFFRixPQUFPLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDO1FBRXhCLE1BQU0sMEJBQVcsQ0FBQyxnQkFBZ0IsQ0FDaEMsS0FBSyxFQUNMLEVBQUUsR0FBRyxPQUFPLENBQUMsSUFBSSxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUUsRUFBRSxFQUMzRCxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsQ0FDZCxDQUFDO1FBRUYsT0FBTyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztLQUNoQztJQUFDLE9BQU8sQ0FBQyxFQUFFO1FBQ1YsSUFBSSxDQUFDLFlBQVksMEJBQWEsRUFBRTtZQUM5QixNQUFNLENBQUMsQ0FBQztTQUNUO2FBQU07WUFDTCxNQUFNLDBCQUFhLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3JDO0tBQ0Y7QUFFSCxDQUFDO0FBNUJELG9EQTRCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFR5cGVzIH0gZnJvbSAnbW9uZ29vc2UnO1xyXG5pbXBvcnQgeyBSb2xlcyB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9jb25zdGFudHMvcm9sZXMnO1xyXG5pbXBvcnQgeyBCb29rRXhjZXB0aW9uIH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL2RiL21vZGVscy9ib29rL2V4Y2VwdGlvbnMnO1xyXG5pbXBvcnQgeyBib29rU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9zZXJ2aWNlL2Jvb2svYm9vay5zZXJ2aWNlJztcclxuaW1wb3J0IHsgcm9sZVNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vc2VydmljZS9lbXBsb3llZS9yb2xlL3JvbGUuc2VydmljZSc7XHJcbmltcG9ydCB7IEJvb2tEdG8sIEJvb2tEdG9Hcm91cCwgQm9va0dldER0byB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi92YWxpZGF0aW9uL2R0by9ib29rL2Jvb2suZHRvJztcclxuaW1wb3J0IHsgdmFsaWRhdGVJdCB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi92YWxpZGF0aW9uL3ZhbGlkYXRlJztcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVCb29rSGFuZGxlcihyZXF1ZXN0LCByZXBseSkge1xyXG4gIHRyeSB7XHJcbiAgICBhd2FpdCByb2xlU2VydmljZS5oYXNBY2Nlc3MocmVxdWVzdC5hZG1pbi5yb2xlSWQsIFJvbGVzLkJPT0tfQ1JFQVRFKTtcclxuXHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgdmFsaWRhdGVJdChyZXF1ZXN0LmJvZHksIEJvb2tEdG8sIFtCb29rRHRvR3JvdXAuQ1JFQVRFXSk7XHJcblxyXG4gICAgY29uc3QgYm9vayA9IGF3YWl0IGJvb2tTZXJ2aWNlLmNyZWF0ZShkYXRhKTtcclxuXHJcbiAgICByZXR1cm4gcmVwbHkuc3VjY2Vzcyhib29rLl9pZCk7XHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgaWYgKGUgaW5zdGFuY2VvZiBCb29rRXhjZXB0aW9uKSB7XHJcbiAgICAgIHRocm93IGU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aHJvdyBCb29rRXhjZXB0aW9uLlVua25vd25FcnJvcihlKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVCb29rSGFuZGxlcihyZXF1ZXN0LCByZXBseSkge1xyXG4gIHRyeSB7XHJcbiAgICBhd2FpdCByb2xlU2VydmljZS5oYXNBY2Nlc3MocmVxdWVzdC5hZG1pbi5yb2xlSWQsIFJvbGVzLkJPT0tfVVBEQVRFKTtcclxuXHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgdmFsaWRhdGVJdChyZXF1ZXN0LmJvZHksIEJvb2tEdG8sIFtCb29rRHRvR3JvdXAuVVBEQVRFXSk7XHJcblxyXG4gICAgY29uc3QgYm9vayA9IGF3YWl0IGJvb2tTZXJ2aWNlLnVwZGF0ZU9uZShkYXRhLl9pZCwgZGF0YSwgeyBuZXc6IHRydWUgfSk7XHJcblxyXG4gICAgcmV0dXJuIHJlcGx5LnN1Y2Nlc3MoYm9vay5faWQpO1xyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIGlmIChlIGluc3RhbmNlb2YgQm9va0V4Y2VwdGlvbikge1xyXG4gICAgICB0aHJvdyBlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhyb3cgQm9va0V4Y2VwdGlvbi5Vbmtub3duRXJyb3IoZSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0UGFnaW5nQm9va0hhbmRsZXIocmVxdWVzdCwgcmVwbHkpIHtcclxuICB0cnkge1xyXG4gICAgYXdhaXQgcm9sZVNlcnZpY2UuaGFzQWNjZXNzKHJlcXVlc3QuYWRtaW4ucm9sZUlkLCBSb2xlcy5CT09LKTtcclxuXHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgdmFsaWRhdGVJdChyZXF1ZXN0LnF1ZXJ5LCBCb29rR2V0RHRvLCBbQm9va0R0b0dyb3VwLlBBR0VOQVRJT05dKTtcclxuXHJcbiAgICBjb25zdCBib29rID0gYXdhaXQgYm9va1NlcnZpY2UuZ2V0UGFnaW5nKGRhdGEpO1xyXG5cclxuICAgIHJldHVybiByZXBseS5zdWNjZXNzKGJvb2spO1xyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIGlmIChlIGluc3RhbmNlb2YgQm9va0V4Y2VwdGlvbikge1xyXG4gICAgICB0aHJvdyBlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhyb3cgQm9va0V4Y2VwdGlvbi5Vbmtub3duRXJyb3IoZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldE9uZUJvb2tIYW5kbGVyKHJlcXVlc3QsIHJlcGx5KSB7XHJcblxyXG4gIHRyeSB7XHJcbiAgICBhd2FpdCByb2xlU2VydmljZS5oYXNBY2Nlc3MocmVxdWVzdC5hZG1pbi5yb2xlSWQsIFJvbGVzLkJPT0spO1xyXG5cclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCB2YWxpZGF0ZUl0KHJlcXVlc3QucGFyYW1zLCBCb29rRHRvLCBbQm9va0R0b0dyb3VwLkdFVF9CWV9JRF0pO1xyXG5cclxuICAgIGNvbnN0IGJvb2sgPSBhd2FpdCBib29rU2VydmljZS5nZXRPbmVCb29rKGRhdGEuX2lkKTtcclxuXHJcbiAgICByZXR1cm4gcmVwbHkuc3VjY2Vzcyhib29rKTtcclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICBpZiAoZSBpbnN0YW5jZW9mIEJvb2tFeGNlcHRpb24pIHtcclxuICAgICAgdGhyb3cgZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRocm93IEJvb2tFeGNlcHRpb24uVW5rbm93bkVycm9yKGUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVPbmVCb29rSGFuZGxlcihyZXF1ZXN0LCByZXBseSkge1xyXG4gIHRyeSB7XHJcbiAgICBhd2FpdCByb2xlU2VydmljZS5oYXNBY2Nlc3MocmVxdWVzdC5hZG1pbi5yb2xlSWQsIFJvbGVzLkJPT0tfREVMRVRFKTtcclxuXHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgdmFsaWRhdGVJdChyZXF1ZXN0LnBhcmFtcywgQm9va0R0bywgW0Jvb2tEdG9Hcm91cC5HRVRfQllfSURdKTtcclxuXHJcbiAgICBjb25zdCBxdWVyeSA9IHtcclxuICAgICAgaXNEZWxldGVkOiBmYWxzZSxcclxuICAgICAgX2lkOiBuZXcgVHlwZXMuT2JqZWN0SWQoZGF0YS5faWQpLFxyXG4gICAgfTtcclxuXHJcbiAgICBkZWxldGUgcmVxdWVzdC5ib2R5Ll9pZDtcclxuXHJcbiAgICBhd2FpdCBib29rU2VydmljZS51cGRhdGVPbmVCeVF1ZXJ5KFxyXG4gICAgICBxdWVyeSxcclxuICAgICAgeyAuLi5yZXF1ZXN0LmJvZHksIGlzRGVsZXRlZDogdHJ1ZSwgZGVsZXRlZEF0OiBEYXRlLm5vdygpIH0sXHJcbiAgICAgIHsgbmV3OiB0cnVlIH0sXHJcbiAgICApO1xyXG5cclxuICAgIHJldHVybiByZXBseS5zdWNjZXNzKGRhdGEuX2lkKTtcclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICBpZiAoZSBpbnN0YW5jZW9mIEJvb2tFeGNlcHRpb24pIHtcclxuICAgICAgdGhyb3cgZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRocm93IEJvb2tFeGNlcHRpb24uVW5rbm93bkVycm9yKGUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbn1cclxuIl19