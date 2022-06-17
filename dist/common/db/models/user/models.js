"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = exports.User = void 0;
const tslib_1 = require("tslib");
const typegoose_1 = require("@typegoose/typegoose");
const collections_1 = require("../../../constants/collections");
const baseUser_model_1 = require("../../baseUser.model");
let User = class User extends baseUser_model_1.CommonUser {
};
User = tslib_1.__decorate([
    (0, typegoose_1.modelOptions)({
        schemaOptions: {
            collection: collections_1.COLLECTIONS.USER,
        },
    })
], User);
exports.User = User;
exports.UserModel = (0, typegoose_1.getModelForClass)(User);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kZWxzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL2NvbW1vbi9kYi9tb2RlbHMvdXNlci9tb2RlbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLG9EQUFzRTtBQUN0RSxnRUFBNkQ7QUFDN0QseURBQWtEO0FBU2xELElBQWEsSUFBSSxHQUFqQixNQUFhLElBQUssU0FBUSwyQkFBVTtDQUFJLENBQUE7QUFBM0IsSUFBSTtJQVBoQixJQUFBLHdCQUFZLEVBQUM7UUFDWixhQUFhLEVBQUU7WUFDYixVQUFVLEVBQUUseUJBQVcsQ0FBQyxJQUFJO1NBQzdCO0tBQ0YsQ0FBQztHQUdXLElBQUksQ0FBdUI7QUFBM0Isb0JBQUk7QUFFSixRQUFBLFNBQVMsR0FBRyxJQUFBLDRCQUFnQixFQUFDLElBQUksQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2V0TW9kZWxGb3JDbGFzcywgbW9kZWxPcHRpb25zIH0gZnJvbSAnQHR5cGVnb29zZS90eXBlZ29vc2UnO1xyXG5pbXBvcnQgeyBDT0xMRUNUSU9OUyB9IGZyb20gJy4uLy4uLy4uL2NvbnN0YW50cy9jb2xsZWN0aW9ucyc7XHJcbmltcG9ydCB7IENvbW1vblVzZXIgfSBmcm9tICcuLi8uLi9iYXNlVXNlci5tb2RlbCc7XHJcblxyXG5AbW9kZWxPcHRpb25zKHtcclxuICBzY2hlbWFPcHRpb25zOiB7XHJcbiAgICBjb2xsZWN0aW9uOiBDT0xMRUNUSU9OUy5VU0VSLFxyXG4gIH0sXHJcbn0pXHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIFVzZXIgZXh0ZW5kcyBDb21tb25Vc2VyIHsgfVxyXG5cclxuZXhwb3J0IGNvbnN0IFVzZXJNb2RlbCA9IGdldE1vZGVsRm9yQ2xhc3MoVXNlcik7XHJcbiJdfQ==