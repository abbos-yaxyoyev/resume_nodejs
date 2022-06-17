"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProfileHandler = exports.removeProfileImageHandler = exports.getProfileHandler = exports.updateProfileHandler = exports.signInHandler = exports.signUpHandler = void 0;
const tslib_1 = require("tslib");
const md5_1 = tslib_1.__importDefault(require("md5"));
const exception_1 = require("../../common/db/models/user/exception");
const authPlugin_1 = require("../../common/plugin/authPlugin");
const user_service_1 = require("../../common/service/user/user.service");
const common_dto_1 = require("../../common/validation/common.dto");
const user_dto_1 = require("../../common/validation/dto/commonUser/user/user.dto");
const validate_1 = require("../../common/validation/validate");
async function signUpHandler(request, reply) {
    try {
        const data = await (0, validate_1.validateIt)(request.body, user_dto_1.UserDto, [common_dto_1.CommonDtoGroup.CREATE]);
        const checkUser = await user_service_1.userService.findByPhone(data.phoneNumber);
        if (checkUser)
            throw exception_1.UserException.AllreadyExist(data.phoneNumber);
        data.password = (0, md5_1.default)(data.password);
        const { _id, firstName, lastName, phoneNumber, biography, } = await user_service_1.userService.create(data);
        const token = await (0, authPlugin_1.jwtSign)(request, { _id });
        return reply.success({
            token,
            user: { _id, firstName, lastName, phoneNumber, biography, }
        });
    }
    catch (e) {
        throw exception_1.UserException.UnknownError(e);
    }
}
exports.signUpHandler = signUpHandler;
async function signInHandler(request, reply) {
    try {
        const data = await (0, validate_1.validateIt)(request.body, user_dto_1.UserDto, [user_dto_1.UserDtoGroup.LOGIN]);
        const { _id, firstName, lastName, phoneNumber, biography, password } = await user_service_1.userService.findOne({ phoneNumber: data.phoneNumber, password: (0, md5_1.default)(data.password) });
        if (!firstName || !lastName || !phoneNumber)
            throw exception_1.UserException.NotFound({ phoneNumber: data.phoneNumber, password: (0, md5_1.default)(data.password) });
        if ((0, md5_1.default)(data.password) != password)
            throw exception_1.UserException.InvalidPassword();
        const token = await (0, authPlugin_1.jwtSign)(request, { _id });
        return reply.success({
            token,
            user: { _id, firstName, lastName, phoneNumber, biography, }
        });
    }
    catch (e) {
        if (e instanceof exception_1.UserException) {
            throw e;
        }
        else {
            throw exception_1.UserException.UnknownError(e);
        }
    }
}
exports.signInHandler = signInHandler;
async function updateProfileHandler(request, reply) {
    try {
        request.body._id = request.user._id.toString();
        const data = await (0, validate_1.validateIt)(request.body, user_dto_1.UserDto, [user_dto_1.UserDtoGroup.UPDATE]);
        if (data.password)
            data.password = (0, md5_1.default)(data.password);
        const { _id, firstName, lastName, phoneNumber } = await user_service_1.userService.updateOne(data._id, data, { new: true });
        return reply.success({ _id, firstName, lastName, phoneNumber });
    }
    catch (e) {
        throw exception_1.UserException.UnknownError(e);
    }
}
exports.updateProfileHandler = updateProfileHandler;
async function getProfileHandler(request, reply) {
    try {
        const userId = request.user._id.toString();
        const { _id, firstName, lastName, phoneNumber, imgUrl, createdAt } = await user_service_1.userService.findByIdError(userId);
        return reply.success({ _id, firstName, lastName, phoneNumber, imgUrl, createdAt });
    }
    catch (e) {
        if (e instanceof exception_1.UserException) {
            throw e;
        }
        else {
            throw exception_1.UserException.UnknownError(e);
        }
    }
}
exports.getProfileHandler = getProfileHandler;
//! remove account image
async function removeProfileImageHandler(request, reply) {
    try {
        await user_service_1.userService.updateOne(request.user._id, { imgUrl: null }, { new: true });
        return reply.success(request.user._id);
    }
    catch (e) {
        throw exception_1.UserException.UnknownError(e);
    }
}
exports.removeProfileImageHandler = removeProfileImageHandler;
async function deleteProfileHandler(request, reply) {
    try {
        await user_service_1.userService.updateOne({ _id: request.user._id }, { isDeleted: true, deletedAt: new Date() }, { new: true });
        return reply.success(request.user._id);
    }
    catch (e) {
        throw exception_1.UserException.UnknownError(e);
    }
}
exports.deleteProfileHandler = deleteProfileHandler;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5oYW5kbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3VzZXIvaGFuZGxlcnMvdXNlci5oYW5kbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxzREFBc0I7QUFDdEIscUVBQXNFO0FBQ3RFLCtEQUF5RDtBQUN6RCx5RUFBcUU7QUFDckUsbUVBQW9FO0FBQ3BFLG1GQUE2RjtBQUM3RiwrREFBOEQ7QUFFdkQsS0FBSyxVQUFVLGFBQWEsQ0FBQyxPQUFPLEVBQUUsS0FBSztJQUNoRCxJQUFJO1FBQ0YsTUFBTSxJQUFJLEdBQUcsTUFBTSxJQUFBLHFCQUFVLEVBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxrQkFBTyxFQUFFLENBQUMsMkJBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBRTlFLE1BQU0sU0FBUyxHQUFHLE1BQU0sMEJBQVcsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBRWxFLElBQUksU0FBUztZQUFFLE1BQU0seUJBQWEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ25FLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBQSxhQUFHLEVBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ25DLE1BQU0sRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxXQUFXLEVBQUUsU0FBUyxHQUFHLEdBQUcsTUFBTSwwQkFBVyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUc3RixNQUFNLEtBQUssR0FBRyxNQUFNLElBQUEsb0JBQU8sRUFBQyxPQUFPLEVBQUUsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDO1FBRTlDLE9BQU8sS0FBSyxDQUFDLE9BQU8sQ0FBQztZQUNuQixLQUFLO1lBQ0wsSUFBSSxFQUFFLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsV0FBVyxFQUFFLFNBQVMsR0FBRztT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SUFDdkQsSUFBSTtRQUVGLE1BQU0sMEJBQVcsQ0FBQyxTQUFTLENBQ3pCLEVBQUUsR0FBRyxFQUFFLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLEVBQ3pCLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsSUFBSSxJQUFJLEVBQUUsRUFBRSxFQUMxQyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsQ0FDZCxDQUFDO1FBRUYsT0FBTyxLQUFLLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7S0FFeEM7SUFBQyxPQUFPLENBQUMsRUFBRTtRQUNWLE1BQU0seUJBQWEsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FDckM7QUFDSCxDQUFDO0FBZEQsb0RBY0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbWQ1IGZyb20gJ21kNSc7XHJcbmltcG9ydCB7IFVzZXJFeGNlcHRpb24gfSBmcm9tICcuLi8uLi9jb21tb24vZGIvbW9kZWxzL3VzZXIvZXhjZXB0aW9uJztcclxuaW1wb3J0IHsgand0U2lnbiB9IGZyb20gJy4uLy4uL2NvbW1vbi9wbHVnaW4vYXV0aFBsdWdpbic7XHJcbmltcG9ydCB7IHVzZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vY29tbW9uL3NlcnZpY2UvdXNlci91c2VyLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBDb21tb25EdG9Hcm91cCB9IGZyb20gJy4uLy4uL2NvbW1vbi92YWxpZGF0aW9uL2NvbW1vbi5kdG8nO1xyXG5pbXBvcnQgeyBVc2VyRHRvLCBVc2VyRHRvR3JvdXAgfSBmcm9tICcuLi8uLi9jb21tb24vdmFsaWRhdGlvbi9kdG8vY29tbW9uVXNlci91c2VyL3VzZXIuZHRvJztcclxuaW1wb3J0IHsgdmFsaWRhdGVJdCB9IGZyb20gJy4uLy4uL2NvbW1vbi92YWxpZGF0aW9uL3ZhbGlkYXRlJztcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzaWduVXBIYW5kbGVyKHJlcXVlc3QsIHJlcGx5KSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCB2YWxpZGF0ZUl0KHJlcXVlc3QuYm9keSwgVXNlckR0bywgW0NvbW1vbkR0b0dyb3VwLkNSRUFURV0pO1xyXG5cclxuICAgIGNvbnN0IGNoZWNrVXNlciA9IGF3YWl0IHVzZXJTZXJ2aWNlLmZpbmRCeVBob25lKGRhdGEucGhvbmVOdW1iZXIpO1xyXG5cclxuICAgIGlmIChjaGVja1VzZXIpIHRocm93IFVzZXJFeGNlcHRpb24uQWxscmVhZHlFeGlzdChkYXRhLnBob25lTnVtYmVyKTtcclxuICAgIGRhdGEucGFzc3dvcmQgPSBtZDUoZGF0YS5wYXNzd29yZCk7XHJcbiAgICBjb25zdCB7IF9pZCwgZmlyc3ROYW1lLCBsYXN0TmFtZSwgcGhvbmVOdW1iZXIsIGJpb2dyYXBoeSwgfSA9IGF3YWl0IHVzZXJTZXJ2aWNlLmNyZWF0ZShkYXRhKTtcclxuXHJcblxyXG4gICAgY29uc3QgdG9rZW4gPSBhd2FpdCBqd3RTaWduKHJlcXVlc3QsIHsgX2lkIH0pO1xyXG5cclxuICAgIHJldHVybiByZXBseS5zdWNjZXNzKHtcclxuICAgICAgdG9rZW4sXHJcbiAgICAgIHVzZXI6IHsgX2lkLCBmaXJzdE5hbWUsIGxhc3ROYW1lLCBwaG9uZU51bWJlciwgYmlvZ3JhcGh5LCB9XHJcbiAgICB9KTtcclxuXHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgdGhyb3cgVXNlckV4Y2VwdGlvbi5Vbmtub3duRXJyb3IoZSk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc2lnbkluSGFuZGxlcihyZXF1ZXN0LCByZXBseSkge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgdmFsaWRhdGVJdChyZXF1ZXN0LmJvZHksIFVzZXJEdG8sIFtVc2VyRHRvR3JvdXAuTE9HSU5dKTtcclxuXHJcbiAgICBjb25zdCB7IF9pZCwgZmlyc3ROYW1lLCBsYXN0TmFtZSwgcGhvbmVOdW1iZXIsIGJpb2dyYXBoeSwgcGFzc3dvcmQgfSA9IGF3YWl0IHVzZXJTZXJ2aWNlLmZpbmRPbmUoeyBwaG9uZU51bWJlcjogZGF0YS5waG9uZU51bWJlciwgcGFzc3dvcmQ6IG1kNShkYXRhLnBhc3N3b3JkKSB9KTtcclxuXHJcbiAgICBpZiAoIWZpcnN0TmFtZSB8fCAhbGFzdE5hbWUgfHwgIXBob25lTnVtYmVyKSB0aHJvdyBVc2VyRXhjZXB0aW9uLk5vdEZvdW5kKHsgcGhvbmVOdW1iZXI6IGRhdGEucGhvbmVOdW1iZXIsIHBhc3N3b3JkOiBtZDUoZGF0YS5wYXNzd29yZCkgfSk7XHJcblxyXG4gICAgaWYgKG1kNShkYXRhLnBhc3N3b3JkKSAhPSBwYXNzd29yZCkgdGhyb3cgVXNlckV4Y2VwdGlvbi5JbnZhbGlkUGFzc3dvcmQoKTtcclxuXHJcbiAgICBjb25zdCB0b2tlbiA9IGF3YWl0IGp3dFNpZ24ocmVxdWVzdCwgeyBfaWQgfSk7XHJcblxyXG4gICAgcmV0dXJuIHJlcGx5LnN1Y2Nlc3Moe1xyXG4gICAgICB0b2tlbixcclxuICAgICAgdXNlcjogeyBfaWQsIGZpcnN0TmFtZSwgbGFzdE5hbWUsIHBob25lTnVtYmVyLCBiaW9ncmFwaHksIH1cclxuICAgIH0pO1xyXG5cclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICBpZiAoZSBpbnN0YW5jZW9mIFVzZXJFeGNlcHRpb24pIHtcclxuICAgICAgdGhyb3cgZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRocm93IFVzZXJFeGNlcHRpb24uVW5rbm93bkVycm9yKGUpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZVByb2ZpbGVIYW5kbGVyKHJlcXVlc3QsIHJlcGx5KSB7XHJcbiAgdHJ5IHtcclxuICAgIHJlcXVlc3QuYm9keS5faWQgPSByZXF1ZXN0LnVzZXIuX2lkLnRvU3RyaW5nKCk7XHJcblxyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHZhbGlkYXRlSXQocmVxdWVzdC5ib2R5LCBVc2VyRHRvLCBbVXNlckR0b0dyb3VwLlVQREFURV0pO1xyXG5cclxuICAgIGlmIChkYXRhLnBhc3N3b3JkKSBkYXRhLnBhc3N3b3JkID0gbWQ1KGRhdGEucGFzc3dvcmQpO1xyXG5cclxuICAgIGNvbnN0IHsgX2lkLCBmaXJzdE5hbWUsIGxhc3ROYW1lLCBwaG9uZU51bWJlciB9ID0gYXdhaXQgdXNlclNlcnZpY2UudXBkYXRlT25lKGRhdGEuX2lkLCBkYXRhLCB7IG5ldzogdHJ1ZSB9KTtcclxuXHJcbiAgICByZXR1cm4gcmVwbHkuc3VjY2Vzcyh7IF9pZCwgZmlyc3ROYW1lLCBsYXN0TmFtZSwgcGhvbmVOdW1iZXIgfSk7XHJcblxyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIHRocm93IFVzZXJFeGNlcHRpb24uVW5rbm93bkVycm9yKGUpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFByb2ZpbGVIYW5kbGVyKHJlcXVlc3QsIHJlcGx5KSB7XHJcbiAgdHJ5IHtcclxuXHJcbiAgICBjb25zdCB1c2VySWQgPSByZXF1ZXN0LnVzZXIuX2lkLnRvU3RyaW5nKClcclxuXHJcbiAgICBjb25zdCB7IF9pZCwgZmlyc3ROYW1lLCBsYXN0TmFtZSwgcGhvbmVOdW1iZXIsIGltZ1VybCwgY3JlYXRlZEF0IH0gPSBhd2FpdCB1c2VyU2VydmljZS5maW5kQnlJZEVycm9yKHVzZXJJZCk7XHJcblxyXG4gICAgcmV0dXJuIHJlcGx5LnN1Y2Nlc3MoeyBfaWQsIGZpcnN0TmFtZSwgbGFzdE5hbWUsIHBob25lTnVtYmVyLCBpbWdVcmwsIGNyZWF0ZWRBdCB9KTtcclxuXHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgaWYgKGUgaW5zdGFuY2VvZiBVc2VyRXhjZXB0aW9uKSB7XHJcbiAgICAgIHRocm93IGU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aHJvdyBVc2VyRXhjZXB0aW9uLlVua25vd25FcnJvcihlKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8vISByZW1vdmUgYWNjb3VudCBpbWFnZVxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcmVtb3ZlUHJvZmlsZUltYWdlSGFuZGxlcihyZXF1ZXN0LCByZXBseSkge1xyXG4gIHRyeSB7XHJcblxyXG4gICAgYXdhaXQgdXNlclNlcnZpY2UudXBkYXRlT25lKHJlcXVlc3QudXNlci5faWQsIHsgaW1nVXJsOiBudWxsIH0sIHsgbmV3OiB0cnVlIH0pO1xyXG5cclxuICAgIHJldHVybiByZXBseS5zdWNjZXNzKHJlcXVlc3QudXNlci5faWQpO1xyXG5cclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICB0aHJvdyBVc2VyRXhjZXB0aW9uLlVua25vd25FcnJvcihlKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVQcm9maWxlSGFuZGxlcihyZXF1ZXN0LCByZXBseSkge1xyXG4gIHRyeSB7XHJcblxyXG4gICAgYXdhaXQgdXNlclNlcnZpY2UudXBkYXRlT25lKFxyXG4gICAgICB7IF9pZDogcmVxdWVzdC51c2VyLl9pZCB9LFxyXG4gICAgICB7IGlzRGVsZXRlZDogdHJ1ZSwgZGVsZXRlZEF0OiBuZXcgRGF0ZSgpIH0sXHJcbiAgICAgIHsgbmV3OiB0cnVlIH0sXHJcbiAgICApO1xyXG5cclxuICAgIHJldHVybiByZXBseS5zdWNjZXNzKHJlcXVlc3QudXNlci5faWQpO1xyXG5cclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICB0aHJvdyBVc2VyRXhjZXB0aW9uLlVua25vd25FcnJvcihlKTtcclxuICB9XHJcbn1cclxuIl19