"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userService = void 0;
const mongoose_1 = require("mongoose");
const exceptions_1 = require("../../constants/exceptions");
const models_1 = require("../../db/models/user/models");
const commonUser_service_1 = require("../baseUser/commonUser.service");
const exception_1 = require("./../../db/models/user/exception");
//! for user  service
class UserService extends commonUser_service_1.CommonUserService {
    constructor(model) {
        super(model, exception_1.UserException);
    }
    async getPaging(dto) {
        try {
            let query = { isDeleted: false };
            const $projection = {
                $project: {
                    _id: 1,
                    fullName: 1,
                },
            };
            const $pipeline = [
                $projection,
            ];
            return await this.findPaging(query, dto, $pipeline);
        }
        catch (e) {
            throw exceptions_1.CommonUserException.UnknownError(e);
        }
    }
    async getUserFullById(id) {
        try {
            const $match = {
                $match: {
                    isDeleted: false,
                    _id: new mongoose_1.Types.ObjectId(id),
                },
            };
            const $projection = {
                $project: {
                    _id: 1,
                    fullName: 1
                },
            };
            const $pipline = [$match, $projection];
            let data = await this.aggregate($pipline);
            const user = data.shift();
            if (!user)
                throw exceptions_1.CommonUserException.NotFound(id);
            return user;
        }
        catch (e) {
            if (e instanceof exceptions_1.CommonUserException) {
                throw e;
            }
            else {
                throw exceptions_1.CommonUserException.UnknownError(e);
            }
        }
    }
}
exports.userService = new UserService(models_1.UserModel);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2NvbW1vbi9zZXJ2aWNlL3VzZXIvdXNlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUNBLHVDQUFpQztBQUNqQywyREFBaUU7QUFDakUsd0RBQThEO0FBRTlELHVFQUFtRTtBQUNuRSxnRUFBaUU7QUFFakUscUJBQXFCO0FBQ3JCLE1BQU0sV0FBWSxTQUFRLHNDQUF1QjtJQUMvQyxZQUFZLEtBQXNCO1FBQ2hDLEtBQUssQ0FBQyxLQUFLLEVBQUUseUJBQWEsQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFDTSxLQUFLLENBQUMsU0FBUyxDQUFJLEdBQWU7UUFDdkMsSUFBSTtZQUNGLElBQUksS0FBSyxHQUFHLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxDQUFDO1lBRWpDLE1BQU0sV0FBVyxHQUFHO2dCQUNsQixRQUFRLEVBQUU7b0JBQ1IsR0FBRyxFQUFFLENBQUM7b0JBQ04sUUFBUSxFQUFFLENBQUM7aUJBQ1o7YUFDRixDQUFDO1lBRUYsTUFBTSxTQUFTLEdBQUc7Z0JBQ2hCLFdBQVc7YUFDWixDQUFBO1lBRUQsT0FBTyxNQUFNLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxFQUFFLEdBQUcsRUFBRSxTQUFTLENBQUMsQ0FBQztTQUNyRDtRQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ1YsTUFBTSxnQ0FBbUIsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDM0M7SUFDSCxDQUFDO0lBRU0sS0FBSyxDQUFDLGVBQWUsQ0FBSSxFQUFVO1FBQ3hDLElBQUk7WUFDRixNQUFNLE1BQU0sR0FBUTtnQkFDbEIsTUFBTSxFQUFFO29CQUNOLFNBQVMsRUFBRSxLQUFLO29CQUNoQixHQUFHLEVBQUUsSUFBSSxnQkFBSyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUM7aUJBQzVCO2FBQ0YsQ0FBQztZQUVGLE1BQU0sV0FBVyxHQUFHO2dCQUNsQixRQUFRLEVBQUU7b0JBQ1IsR0FBRyxFQUFFLENBQUM7b0JBQ04sUUFBUSxFQUFFLENBQUM7aUJBQ1o7YUFDRixDQUFDO1lBRUYsTUFBTSxRQUFRLEdBQUcsQ0FBQyxNQUFNLEVBQUUsV0FBVyxDQUFDLENBQUM7WUFFdkMsSUFBSSxJQUFJLEdBQUcsTUFBTSxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBRTFDLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUMxQixJQUFJLENBQUMsSUFBSTtnQkFBRSxNQUFNLGdDQUFtQixDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUNsRCxPQUFPLElBQUksQ0FBQztTQUNiO1FBQUMsT0FBTyxDQUFDLEVBQUU7WUFDVixJQUFJLENBQUMsWUFBWSxnQ0FBbUIsRUFBRTtnQkFDcEMsTUFBTSxDQUFDLENBQUM7YUFDVDtpQkFBTTtnQkFDTCxNQUFNLGdDQUFtQixDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUMzQztTQUNGO0lBQ0gsQ0FBQztDQUNGO0FBRVksUUFBQSxXQUFXLEdBQUcsSUFBSSxXQUFXLENBQUMsa0JBQVMsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9kZWxUeXBlIH0gZnJvbSAnQHR5cGVnb29zZS90eXBlZ29vc2UvbGliL3R5cGVzJztcclxuaW1wb3J0IHsgVHlwZXMgfSBmcm9tICdtb25nb29zZSc7XHJcbmltcG9ydCB7IENvbW1vblVzZXJFeGNlcHRpb24gfSBmcm9tICcuLi8uLi9jb25zdGFudHMvZXhjZXB0aW9ucyc7XHJcbmltcG9ydCB7IFVzZXIsIFVzZXJNb2RlbCB9IGZyb20gJy4uLy4uL2RiL21vZGVscy91c2VyL21vZGVscyc7XHJcbmltcG9ydCB7IFVzZXJHZXREdG8gfSBmcm9tICcuLi8uLi92YWxpZGF0aW9uL2R0by9jb21tb25Vc2VyL3VzZXIvdXNlci5kdG8nO1xyXG5pbXBvcnQgeyBDb21tb25Vc2VyU2VydmljZSB9IGZyb20gJy4uL2Jhc2VVc2VyL2NvbW1vblVzZXIuc2VydmljZSc7XHJcbmltcG9ydCB7IFVzZXJFeGNlcHRpb24gfSBmcm9tICcuLy4uLy4uL2RiL21vZGVscy91c2VyL2V4Y2VwdGlvbic7XHJcblxyXG4vLyEgZm9yIHVzZXIgIHNlcnZpY2VcclxuY2xhc3MgVXNlclNlcnZpY2UgZXh0ZW5kcyBDb21tb25Vc2VyU2VydmljZTxVc2VyPiB7XHJcbiAgY29uc3RydWN0b3IobW9kZWw6IE1vZGVsVHlwZTxVc2VyPikge1xyXG4gICAgc3VwZXIobW9kZWwsIFVzZXJFeGNlcHRpb24pO1xyXG4gIH1cclxuICBwdWJsaWMgYXN5bmMgZ2V0UGFnaW5nPFQ+KGR0bzogVXNlckdldER0bykge1xyXG4gICAgdHJ5IHtcclxuICAgICAgbGV0IHF1ZXJ5ID0geyBpc0RlbGV0ZWQ6IGZhbHNlIH07XHJcblxyXG4gICAgICBjb25zdCAkcHJvamVjdGlvbiA9IHtcclxuICAgICAgICAkcHJvamVjdDoge1xyXG4gICAgICAgICAgX2lkOiAxLFxyXG4gICAgICAgICAgZnVsbE5hbWU6IDEsXHJcbiAgICAgICAgfSxcclxuICAgICAgfTtcclxuXHJcbiAgICAgIGNvbnN0ICRwaXBlbGluZSA9IFtcclxuICAgICAgICAkcHJvamVjdGlvbixcclxuICAgICAgXVxyXG5cclxuICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuZmluZFBhZ2luZyhxdWVyeSwgZHRvLCAkcGlwZWxpbmUpO1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICB0aHJvdyBDb21tb25Vc2VyRXhjZXB0aW9uLlVua25vd25FcnJvcihlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBhc3luYyBnZXRVc2VyRnVsbEJ5SWQ8VD4oaWQ6IHN0cmluZykge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgJG1hdGNoOiBhbnkgPSB7XHJcbiAgICAgICAgJG1hdGNoOiB7XHJcbiAgICAgICAgICBpc0RlbGV0ZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgX2lkOiBuZXcgVHlwZXMuT2JqZWN0SWQoaWQpLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH07XHJcblxyXG4gICAgICBjb25zdCAkcHJvamVjdGlvbiA9IHtcclxuICAgICAgICAkcHJvamVjdDoge1xyXG4gICAgICAgICAgX2lkOiAxLFxyXG4gICAgICAgICAgZnVsbE5hbWU6IDFcclxuICAgICAgICB9LFxyXG4gICAgICB9O1xyXG5cclxuICAgICAgY29uc3QgJHBpcGxpbmUgPSBbJG1hdGNoLCAkcHJvamVjdGlvbl07XHJcblxyXG4gICAgICBsZXQgZGF0YSA9IGF3YWl0IHRoaXMuYWdncmVnYXRlKCRwaXBsaW5lKTtcclxuXHJcbiAgICAgIGNvbnN0IHVzZXIgPSBkYXRhLnNoaWZ0KCk7XHJcbiAgICAgIGlmICghdXNlcikgdGhyb3cgQ29tbW9uVXNlckV4Y2VwdGlvbi5Ob3RGb3VuZChpZCk7XHJcbiAgICAgIHJldHVybiB1c2VyO1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICBpZiAoZSBpbnN0YW5jZW9mIENvbW1vblVzZXJFeGNlcHRpb24pIHtcclxuICAgICAgICB0aHJvdyBlO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRocm93IENvbW1vblVzZXJFeGNlcHRpb24uVW5rbm93bkVycm9yKGUpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgdXNlclNlcnZpY2UgPSBuZXcgVXNlclNlcnZpY2UoVXNlck1vZGVsKTtcclxuIl19