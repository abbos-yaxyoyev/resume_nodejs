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
        const checkUser = await user_service_1.userService.findOne({ password: (0, md5_1.default)(data.password) });
        if (checkUser)
            throw exception_1.UserException.AllreadyExist(data.password);
        data.password = (0, md5_1.default)(data.password);
        const { _id, fullName, password, } = await user_service_1.userService.create(data);
        const token = await (0, authPlugin_1.jwtSign)(request, { _id });
        return reply.success({
            token,
            user: { _id, fullName }
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
        const { _id, fullName, password } = await user_service_1.userService.findOne({ password: (0, md5_1.default)(data.password) });
        if (!fullName)
            throw exception_1.UserException.NotFound(data.password);
        if ((0, md5_1.default)(data.password) != password)
            throw exception_1.UserException.InvalidPassword();
        const token = await (0, authPlugin_1.jwtSign)(request, { _id });
        return reply.success({
            token,
            user: { _id, fullName }
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
        const { _id, fullName } = await user_service_1.userService.updateOne(data._id, data, { new: true });
        return reply.success({ _id, fullName });
    }
    catch (e) {
        throw exception_1.UserException.UnknownError(e);
    }
}
exports.updateProfileHandler = updateProfileHandler;
async function getProfileHandler(request, reply) {
    try {
        const userId = request.user._id.toString();
        const { _id, fullName, createdAt } = await user_service_1.userService.findByIdError(userId);
        return reply.success({ _id, fullName, createdAt });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5oYW5kbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3VzZXIvaGFuZGxlcnMvdXNlci5oYW5kbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxzREFBc0I7QUFDdEIscUVBQXNFO0FBQ3RFLCtEQUF5RDtBQUN6RCx5RUFBcUU7QUFDckUsbUVBQW9FO0FBQ3BFLG1GQUE2RjtBQUM3RiwrREFBOEQ7QUFFdkQsS0FBSyxVQUFVLGFBQWEsQ0FBQyxPQUFPLEVBQUUsS0FBSztJQUNoRCxJQUFJO1FBQ0YsTUFBTSxJQUFJLEdBQUcsTUFBTSxJQUFBLHFCQUFVLEVBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxrQkFBTyxFQUFFLENBQUMsMkJBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBRTlFLE1BQU0sU0FBUyxHQUFHLE1BQU0sMEJBQVcsQ0FBQyxPQUFPLENBQUMsRUFBRSxRQUFRLEVBQUUsSUFBQSxhQUFHLEVBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUU5RSxJQUFJLFNBQVM7WUFBRSxNQUFNLHlCQUFhLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNoRSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUEsYUFBRyxFQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNuQyxNQUFNLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxRQUFRLEdBQUcsR0FBRyxNQUFNLDBCQUFXLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBR3BFLE1BQU0sS0FBSyxHQUFHLE1BQU0sSUFBQSxvQkFBTyxFQUFDLE9BQU8sRUFBRSxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUM7UUFFOUMsT0FBTyxLQUFLLENBQUMsT0FBTyxDQUFDO1lBQ25CLEtBQUs7WUFDTCxJQUFJLEVBQUUsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFO1NBQ3hCLENBQUMs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QyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FDckM7QUFDSCxDQUFDO0FBZEQsb0RBY0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbWQ1IGZyb20gJ21kNSc7XHJcbmltcG9ydCB7IFVzZXJFeGNlcHRpb24gfSBmcm9tICcuLi8uLi9jb21tb24vZGIvbW9kZWxzL3VzZXIvZXhjZXB0aW9uJztcclxuaW1wb3J0IHsgand0U2lnbiB9IGZyb20gJy4uLy4uL2NvbW1vbi9wbHVnaW4vYXV0aFBsdWdpbic7XHJcbmltcG9ydCB7IHVzZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vY29tbW9uL3NlcnZpY2UvdXNlci91c2VyLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBDb21tb25EdG9Hcm91cCB9IGZyb20gJy4uLy4uL2NvbW1vbi92YWxpZGF0aW9uL2NvbW1vbi5kdG8nO1xyXG5pbXBvcnQgeyBVc2VyRHRvLCBVc2VyRHRvR3JvdXAgfSBmcm9tICcuLi8uLi9jb21tb24vdmFsaWRhdGlvbi9kdG8vY29tbW9uVXNlci91c2VyL3VzZXIuZHRvJztcclxuaW1wb3J0IHsgdmFsaWRhdGVJdCB9IGZyb20gJy4uLy4uL2NvbW1vbi92YWxpZGF0aW9uL3ZhbGlkYXRlJztcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzaWduVXBIYW5kbGVyKHJlcXVlc3QsIHJlcGx5KSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCB2YWxpZGF0ZUl0KHJlcXVlc3QuYm9keSwgVXNlckR0bywgW0NvbW1vbkR0b0dyb3VwLkNSRUFURV0pO1xyXG5cclxuICAgIGNvbnN0IGNoZWNrVXNlciA9IGF3YWl0IHVzZXJTZXJ2aWNlLmZpbmRPbmUoeyBwYXNzd29yZDogbWQ1KGRhdGEucGFzc3dvcmQpIH0pO1xyXG5cclxuICAgIGlmIChjaGVja1VzZXIpIHRocm93IFVzZXJFeGNlcHRpb24uQWxscmVhZHlFeGlzdChkYXRhLnBhc3N3b3JkKTtcclxuICAgIGRhdGEucGFzc3dvcmQgPSBtZDUoZGF0YS5wYXNzd29yZCk7XHJcbiAgICBjb25zdCB7IF9pZCwgZnVsbE5hbWUsIHBhc3N3b3JkLCB9ID0gYXdhaXQgdXNlclNlcnZpY2UuY3JlYXRlKGRhdGEpO1xyXG5cclxuXHJcbiAgICBjb25zdCB0b2tlbiA9IGF3YWl0IGp3dFNpZ24ocmVxdWVzdCwgeyBfaWQgfSk7XHJcblxyXG4gICAgcmV0dXJuIHJlcGx5LnN1Y2Nlc3Moe1xyXG4gICAgICB0b2tlbixcclxuICAgICAgdXNlcjogeyBfaWQsIGZ1bGxOYW1lIH1cclxuICAgIH0pO1xyXG5cclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICB0aHJvdyBVc2VyRXhjZXB0aW9uLlVua25vd25FcnJvcihlKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzaWduSW5IYW5kbGVyKHJlcXVlc3QsIHJlcGx5KSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCB2YWxpZGF0ZUl0KHJlcXVlc3QuYm9keSwgVXNlckR0bywgW1VzZXJEdG9Hcm91cC5MT0dJTl0pO1xyXG5cclxuICAgIGNvbnN0IHsgX2lkLCBmdWxsTmFtZSwgcGFzc3dvcmQgfSA9IGF3YWl0IHVzZXJTZXJ2aWNlLmZpbmRPbmUoeyBwYXNzd29yZDogbWQ1KGRhdGEucGFzc3dvcmQpIH0pO1xyXG5cclxuICAgIGlmICghZnVsbE5hbWUpIHRocm93IFVzZXJFeGNlcHRpb24uTm90Rm91bmQoZGF0YS5wYXNzd29yZCk7XHJcblxyXG4gICAgaWYgKG1kNShkYXRhLnBhc3N3b3JkKSAhPSBwYXNzd29yZCkgdGhyb3cgVXNlckV4Y2VwdGlvbi5JbnZhbGlkUGFzc3dvcmQoKTtcclxuXHJcbiAgICBjb25zdCB0b2tlbiA9IGF3YWl0IGp3dFNpZ24ocmVxdWVzdCwgeyBfaWQgfSk7XHJcblxyXG4gICAgcmV0dXJuIHJlcGx5LnN1Y2Nlc3Moe1xyXG4gICAgICB0b2tlbixcclxuICAgICAgdXNlcjogeyBfaWQsIGZ1bGxOYW1lIH1cclxuICAgIH0pO1xyXG5cclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICBpZiAoZSBpbnN0YW5jZW9mIFVzZXJFeGNlcHRpb24pIHtcclxuICAgICAgdGhyb3cgZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRocm93IFVzZXJFeGNlcHRpb24uVW5rbm93bkVycm9yKGUpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZVByb2ZpbGVIYW5kbGVyKHJlcXVlc3QsIHJlcGx5KSB7XHJcbiAgdHJ5IHtcclxuICAgIHJlcXVlc3QuYm9keS5faWQgPSByZXF1ZXN0LnVzZXIuX2lkLnRvU3RyaW5nKCk7XHJcblxyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHZhbGlkYXRlSXQocmVxdWVzdC5ib2R5LCBVc2VyRHRvLCBbVXNlckR0b0dyb3VwLlVQREFURV0pO1xyXG5cclxuICAgIGlmIChkYXRhLnBhc3N3b3JkKSBkYXRhLnBhc3N3b3JkID0gbWQ1KGRhdGEucGFzc3dvcmQpO1xyXG5cclxuICAgIGNvbnN0IHsgX2lkLCBmdWxsTmFtZSB9ID0gYXdhaXQgdXNlclNlcnZpY2UudXBkYXRlT25lKGRhdGEuX2lkLCBkYXRhLCB7IG5ldzogdHJ1ZSB9KTtcclxuXHJcbiAgICByZXR1cm4gcmVwbHkuc3VjY2Vzcyh7IF9pZCwgZnVsbE5hbWUgfSk7XHJcblxyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIHRocm93IFVzZXJFeGNlcHRpb24uVW5rbm93bkVycm9yKGUpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFByb2ZpbGVIYW5kbGVyKHJlcXVlc3QsIHJlcGx5KSB7XHJcbiAgdHJ5IHtcclxuXHJcbiAgICBjb25zdCB1c2VySWQgPSByZXF1ZXN0LnVzZXIuX2lkLnRvU3RyaW5nKClcclxuXHJcbiAgICBjb25zdCB7IF9pZCwgZnVsbE5hbWUsIGNyZWF0ZWRBdCB9ID0gYXdhaXQgdXNlclNlcnZpY2UuZmluZEJ5SWRFcnJvcih1c2VySWQpO1xyXG5cclxuICAgIHJldHVybiByZXBseS5zdWNjZXNzKHsgX2lkLCBmdWxsTmFtZSwgY3JlYXRlZEF0IH0pO1xyXG5cclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICBpZiAoZSBpbnN0YW5jZW9mIFVzZXJFeGNlcHRpb24pIHtcclxuICAgICAgdGhyb3cgZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRocm93IFVzZXJFeGNlcHRpb24uVW5rbm93bkVycm9yKGUpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLy8hIHJlbW92ZSBhY2NvdW50IGltYWdlXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiByZW1vdmVQcm9maWxlSW1hZ2VIYW5kbGVyKHJlcXVlc3QsIHJlcGx5KSB7XHJcbiAgdHJ5IHtcclxuXHJcbiAgICBhd2FpdCB1c2VyU2VydmljZS51cGRhdGVPbmUocmVxdWVzdC51c2VyLl9pZCwgeyBpbWdVcmw6IG51bGwgfSwgeyBuZXc6IHRydWUgfSk7XHJcblxyXG4gICAgcmV0dXJuIHJlcGx5LnN1Y2Nlc3MocmVxdWVzdC51c2VyLl9pZCk7XHJcblxyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIHRocm93IFVzZXJFeGNlcHRpb24uVW5rbm93bkVycm9yKGUpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZVByb2ZpbGVIYW5kbGVyKHJlcXVlc3QsIHJlcGx5KSB7XHJcbiAgdHJ5IHtcclxuXHJcbiAgICBhd2FpdCB1c2VyU2VydmljZS51cGRhdGVPbmUoXHJcbiAgICAgIHsgX2lkOiByZXF1ZXN0LnVzZXIuX2lkIH0sXHJcbiAgICAgIHsgaXNEZWxldGVkOiB0cnVlLCBkZWxldGVkQXQ6IG5ldyBEYXRlKCkgfSxcclxuICAgICAgeyBuZXc6IHRydWUgfSxcclxuICAgICk7XHJcblxyXG4gICAgcmV0dXJuIHJlcGx5LnN1Y2Nlc3MocmVxdWVzdC51c2VyLl9pZCk7XHJcblxyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIHRocm93IFVzZXJFeGNlcHRpb24uVW5rbm93bkVycm9yKGUpO1xyXG4gIH1cclxufVxyXG4iXX0=