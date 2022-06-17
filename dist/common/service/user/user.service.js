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
                    firstName: 1,
                    lastName: 1,
                    phoneNumber: 1,
                    biography: 1
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
                    lastName: 1,
                    firstName: 1,
                    biography: 1,
                    phoneNumber: 1,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2NvbW1vbi9zZXJ2aWNlL3VzZXIvdXNlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUNBLHVDQUFpQztBQUNqQywyREFBaUU7QUFDakUsd0RBQThEO0FBRTlELHVFQUFtRTtBQUNuRSxnRUFBaUU7QUFFakUscUJBQXFCO0FBQ3JCLE1BQU0sV0FBWSxTQUFRLHNDQUF1QjtJQUMvQyxZQUFZLEtBQXNCO1FBQ2hDLEtBQUssQ0FBQyxLQUFLLEVBQUUseUJBQWEsQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFDTSxLQUFLLENBQUMsU0FBUyxDQUFJLEdBQWU7UUFDdkMsSUFBSTtZQUNGLElBQUksS0FBSyxHQUFHLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxDQUFDO1lBRWpDLE1BQU0sV0FBVyxHQUFHO2dCQUNsQixRQUFRLEVBQUU7b0JBQ1IsR0FBRyxFQUFFLENBQUM7b0JBQ04sU0FBUyxFQUFFLENBQUM7b0JBQ1osUUFBUSxFQUFFLENBQUM7b0JBQ1gsV0FBVyxFQUFFLENBQUM7b0JBQ2QsU0FBUyxFQUFFLENBQUM7aUJBRWI7YUFDRixDQUFDO1lBRUYsTUFBTSxTQUFTLEdBQUc7Z0JBQ2hCLFdBQVc7YUFDWixDQUFBO1lBRUQsT0FBTyxNQUFNLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxFQUFFLEdBQUcsRUFBRSxTQUFTLENBQUMsQ0FBQztTQUNyRDtRQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ1YsTUFBTSxnQ0FBbUIsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDM0M7SUFDSCxDQUFDO0lBRU0sS0FBSyxDQUFDLGVBQWUsQ0FBSSxFQUFVO1FBQ3hDLElBQUk7WUFDRixNQUFNLE1BQU0sR0FBUTtnQkFDbEIsTUFBTSxFQUFFO29CQUNOLFNBQVMsRUFBRSxLQUFLO29CQUNoQixHQUFHLEVBQUUsSUFBSSxnQkFBSyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUM7aUJBQzVCO2FBQ0YsQ0FBQztZQUVGLE1BQU0sV0FBVyxHQUFHO2dCQUNsQixRQUFRLEVBQUU7b0JBQ1IsR0FBRyxFQUFFLENBQUM7b0JBQ04sUUFBUSxFQUFFLENBQUM7b0JBQ1gsU0FBUyxFQUFFLENBQUM7b0JBQ1osU0FBUyxFQUFFLENBQUM7b0JBQ1osV0FBVyxFQUFFLENBQUM7aUJBQ2Y7YUFDRixDQUFDO1lBRUYsTUFBTSxRQUFRLEdBQUcsQ0FBQyxNQUFNLEVBQUUsV0FBVyxDQUFDLENBQUM7WUFFdkMsSUFBSSxJQUFJLEdBQUcsTUFBTSxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBRTFDLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUMxQixJQUFJLENBQUMsSUFBSTtnQkFBRSxNQUFNLGdDQUFtQixDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUNsRCxPQUFPLElBQUksQ0FBQztTQUNiO1FBQUMsT0FBTyxDQUFDLEVBQUU7WUFDVixJQUFJLENBQUMsWUFBWSxnQ0FBbUIsRUFBRTtnQkFDcEMsTUFBTSxDQUFDLENBQUM7YUFDVDtpQkFBTTtnQkFDTCxNQUFNLGdDQUFtQixDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUMzQztTQUNGO0lBQ0gsQ0FBQztDQUNGO0FBRVksUUFBQSxXQUFXLEdBQUcsSUFBSSxXQUFXLENBQUMsa0JBQVMsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9kZWxUeXBlIH0gZnJvbSAnQHR5cGVnb29zZS90eXBlZ29vc2UvbGliL3R5cGVzJztcclxuaW1wb3J0IHsgVHlwZXMgfSBmcm9tICdtb25nb29zZSc7XHJcbmltcG9ydCB7IENvbW1vblVzZXJFeGNlcHRpb24gfSBmcm9tICcuLi8uLi9jb25zdGFudHMvZXhjZXB0aW9ucyc7XHJcbmltcG9ydCB7IFVzZXIsIFVzZXJNb2RlbCB9IGZyb20gJy4uLy4uL2RiL21vZGVscy91c2VyL21vZGVscyc7XHJcbmltcG9ydCB7IFVzZXJHZXREdG8gfSBmcm9tICcuLi8uLi92YWxpZGF0aW9uL2R0by9jb21tb25Vc2VyL3VzZXIvdXNlci5kdG8nO1xyXG5pbXBvcnQgeyBDb21tb25Vc2VyU2VydmljZSB9IGZyb20gJy4uL2Jhc2VVc2VyL2NvbW1vblVzZXIuc2VydmljZSc7XHJcbmltcG9ydCB7IFVzZXJFeGNlcHRpb24gfSBmcm9tICcuLy4uLy4uL2RiL21vZGVscy91c2VyL2V4Y2VwdGlvbic7XHJcblxyXG4vLyEgZm9yIHVzZXIgIHNlcnZpY2VcclxuY2xhc3MgVXNlclNlcnZpY2UgZXh0ZW5kcyBDb21tb25Vc2VyU2VydmljZTxVc2VyPiB7XHJcbiAgY29uc3RydWN0b3IobW9kZWw6IE1vZGVsVHlwZTxVc2VyPikge1xyXG4gICAgc3VwZXIobW9kZWwsIFVzZXJFeGNlcHRpb24pO1xyXG4gIH1cclxuICBwdWJsaWMgYXN5bmMgZ2V0UGFnaW5nPFQ+KGR0bzogVXNlckdldER0bykge1xyXG4gICAgdHJ5IHtcclxuICAgICAgbGV0IHF1ZXJ5ID0geyBpc0RlbGV0ZWQ6IGZhbHNlIH07XHJcblxyXG4gICAgICBjb25zdCAkcHJvamVjdGlvbiA9IHtcclxuICAgICAgICAkcHJvamVjdDoge1xyXG4gICAgICAgICAgX2lkOiAxLFxyXG4gICAgICAgICAgZmlyc3ROYW1lOiAxLFxyXG4gICAgICAgICAgbGFzdE5hbWU6IDEsXHJcbiAgICAgICAgICBwaG9uZU51bWJlcjogMSxcclxuICAgICAgICAgIGJpb2dyYXBoeTogMVxyXG5cclxuICAgICAgICB9LFxyXG4gICAgICB9O1xyXG5cclxuICAgICAgY29uc3QgJHBpcGVsaW5lID0gW1xyXG4gICAgICAgICRwcm9qZWN0aW9uLFxyXG4gICAgICBdXHJcblxyXG4gICAgICByZXR1cm4gYXdhaXQgdGhpcy5maW5kUGFnaW5nKHF1ZXJ5LCBkdG8sICRwaXBlbGluZSk7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIHRocm93IENvbW1vblVzZXJFeGNlcHRpb24uVW5rbm93bkVycm9yKGUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIGFzeW5jIGdldFVzZXJGdWxsQnlJZDxUPihpZDogc3RyaW5nKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCAkbWF0Y2g6IGFueSA9IHtcclxuICAgICAgICAkbWF0Y2g6IHtcclxuICAgICAgICAgIGlzRGVsZXRlZDogZmFsc2UsXHJcbiAgICAgICAgICBfaWQ6IG5ldyBUeXBlcy5PYmplY3RJZChpZCksXHJcbiAgICAgICAgfSxcclxuICAgICAgfTtcclxuXHJcbiAgICAgIGNvbnN0ICRwcm9qZWN0aW9uID0ge1xyXG4gICAgICAgICRwcm9qZWN0OiB7XHJcbiAgICAgICAgICBfaWQ6IDEsXHJcbiAgICAgICAgICBsYXN0TmFtZTogMSxcclxuICAgICAgICAgIGZpcnN0TmFtZTogMSxcclxuICAgICAgICAgIGJpb2dyYXBoeTogMSxcclxuICAgICAgICAgIHBob25lTnVtYmVyOiAxLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH07XHJcblxyXG4gICAgICBjb25zdCAkcGlwbGluZSA9IFskbWF0Y2gsICRwcm9qZWN0aW9uXTtcclxuXHJcbiAgICAgIGxldCBkYXRhID0gYXdhaXQgdGhpcy5hZ2dyZWdhdGUoJHBpcGxpbmUpO1xyXG5cclxuICAgICAgY29uc3QgdXNlciA9IGRhdGEuc2hpZnQoKTtcclxuICAgICAgaWYgKCF1c2VyKSB0aHJvdyBDb21tb25Vc2VyRXhjZXB0aW9uLk5vdEZvdW5kKGlkKTtcclxuICAgICAgcmV0dXJuIHVzZXI7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIGlmIChlIGluc3RhbmNlb2YgQ29tbW9uVXNlckV4Y2VwdGlvbikge1xyXG4gICAgICAgIHRocm93IGU7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhyb3cgQ29tbW9uVXNlckV4Y2VwdGlvbi5Vbmtub3duRXJyb3IoZSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCB1c2VyU2VydmljZSA9IG5ldyBVc2VyU2VydmljZShVc2VyTW9kZWwpO1xyXG4iXX0=