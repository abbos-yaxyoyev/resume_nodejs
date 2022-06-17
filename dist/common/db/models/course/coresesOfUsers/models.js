"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoursesOfUserModel = exports.CoursesOfUser = void 0;
const tslib_1 = require("tslib");
const typegoose_1 = require("@typegoose/typegoose");
const mongoose_1 = require("mongoose");
const collections_1 = require("../../../../constants/collections");
const base_model_1 = require("../../base.model");
let CoursesOfUser = class CoursesOfUser extends base_model_1.CommonModel {
};
tslib_1.__decorate([
    (0, typegoose_1.prop)({
        type: mongoose_1.Types.ObjectId,
        ref: collections_1.COLLECTIONS.COURSE,
    }),
    tslib_1.__metadata("design:type", Object)
], CoursesOfUser.prototype, "courseId", void 0);
tslib_1.__decorate([
    (0, typegoose_1.prop)({
        type: mongoose_1.Types.ObjectId,
        ref: collections_1.COLLECTIONS.USER,
    }),
    tslib_1.__metadata("design:type", Object)
], CoursesOfUser.prototype, "userId", void 0);
CoursesOfUser = tslib_1.__decorate([
    (0, typegoose_1.modelOptions)({
        schemaOptions: {
            collection: collections_1.COLLECTIONS.COURSES_OF_USER,
        },
    }),
    (0, typegoose_1.index)({
        isDeleted: 1,
    }, {
        background: true,
        name: 'isDeleted',
    }),
    (0, typegoose_1.index)({
        userId: 1,
        courseId: 1,
    }, {
        background: true,
        name: 'userId_courseId',
        unique: true,
        partialFilterExpression: {
            isDeleted: false,
            $type: 'boolean',
        },
    })
], CoursesOfUser);
exports.CoursesOfUser = CoursesOfUser;
exports.CoursesOfUserModel = (0, typegoose_1.getModelForClass)(CoursesOfUser);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kZWxzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbW1vbi9kYi9tb2RlbHMvY291cnNlL2NvcmVzZXNPZlVzZXJzL21vZGVscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsb0RBQXdGO0FBQ3hGLHVDQUFpQztBQUNqQyxtRUFBZ0U7QUFDaEUsaURBQStDO0FBb0MvQyxJQUFhLGFBQWEsR0FBMUIsTUFBYSxhQUFjLFNBQVEsd0JBQVc7Q0FjN0MsQ0FBQTtBQVJDO0lBSkMsSUFBQSxnQkFBSSxFQUFDO1FBQ0osSUFBSSxFQUFFLGdCQUFLLENBQUMsUUFBUTtRQUNwQixHQUFHLEVBQUUseUJBQVcsQ0FBQyxNQUFNO0tBQ3hCLENBQUM7OytDQUNvQjtBQU10QjtJQUpDLElBQUEsZ0JBQUksRUFBQztRQUNKLElBQUksRUFBRSxnQkFBSyxDQUFDLFFBQVE7UUFDcEIsR0FBRyxFQUFFLHlCQUFXLENBQUMsSUFBSTtLQUN0QixDQUFDOzs2Q0FDZ0I7QUFaUCxhQUFhO0lBaEN6QixJQUFBLHdCQUFZLEVBQUM7UUFDWixhQUFhLEVBQUU7WUFDYixVQUFVLEVBQUUseUJBQVcsQ0FBQyxlQUFlO1NBQ3hDO0tBQ0YsQ0FBQztJQUVELElBQUEsaUJBQUssRUFDSjtRQUNFLFNBQVMsRUFBRSxDQUFDO0tBQ2IsRUFDRDtRQUNFLFVBQVUsRUFBRSxJQUFJO1FBQ2hCLElBQUksRUFBRSxXQUFXO0tBQ2xCLENBQ0Y7SUFFQSxJQUFBLGlCQUFLLEVBQ0o7UUFDRSxNQUFNLEVBQUUsQ0FBQztRQUNULFFBQVEsRUFBRSxDQUFDO0tBQ1osRUFDRDtRQUNFLFVBQVUsRUFBRSxJQUFJO1FBQ2hCLElBQUksRUFBRSxpQkFBaUI7UUFDdkIsTUFBTSxFQUFFLElBQUk7UUFDWix1QkFBdUIsRUFBRTtZQUN2QixTQUFTLEVBQUUsS0FBSztZQUNoQixLQUFLLEVBQUUsU0FBUztTQUNqQjtLQUNGLENBQ0Y7R0FFWSxhQUFhLENBY3pCO0FBZFksc0NBQWE7QUFlYixRQUFBLGtCQUFrQixHQUFHLElBQUEsNEJBQWdCLEVBQUMsYUFBYSxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnZXRNb2RlbEZvckNsYXNzLCBpbmRleCwgbW9kZWxPcHRpb25zLCBwcm9wLCBSZWYgfSBmcm9tICdAdHlwZWdvb3NlL3R5cGVnb29zZSc7XHJcbmltcG9ydCB7IFR5cGVzIH0gZnJvbSAnbW9uZ29vc2UnO1xyXG5pbXBvcnQgeyBDT0xMRUNUSU9OUyB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbnN0YW50cy9jb2xsZWN0aW9ucyc7XHJcbmltcG9ydCB7IENvbW1vbk1vZGVsIH0gZnJvbSAnLi4vLi4vYmFzZS5tb2RlbCc7XHJcbmltcG9ydCB7IFVzZXIgfSBmcm9tICcuLi8uLi91c2VyL21vZGVscyc7XHJcbmltcG9ydCB7IENvdXJzZSB9IGZyb20gJy4vLi4vbW9kZWxzJztcclxuXHJcbkBtb2RlbE9wdGlvbnMoe1xyXG4gIHNjaGVtYU9wdGlvbnM6IHtcclxuICAgIGNvbGxlY3Rpb246IENPTExFQ1RJT05TLkNPVVJTRVNfT0ZfVVNFUixcclxuICB9LFxyXG59KVxyXG5cclxuQGluZGV4KFxyXG4gIHtcclxuICAgIGlzRGVsZXRlZDogMSxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhY2tncm91bmQ6IHRydWUsXHJcbiAgICBuYW1lOiAnaXNEZWxldGVkJyxcclxuICB9LFxyXG4pXHJcblxyXG5AaW5kZXgoXHJcbiAge1xyXG4gICAgdXNlcklkOiAxLFxyXG4gICAgY291cnNlSWQ6IDEsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cnVlLFxyXG4gICAgbmFtZTogJ3VzZXJJZF9jb3Vyc2VJZCcsXHJcbiAgICB1bmlxdWU6IHRydWUsXHJcbiAgICBwYXJ0aWFsRmlsdGVyRXhwcmVzc2lvbjoge1xyXG4gICAgICBpc0RlbGV0ZWQ6IGZhbHNlLFxyXG4gICAgICAkdHlwZTogJ2Jvb2xlYW4nLFxyXG4gICAgfSxcclxuICB9LFxyXG4pXHJcblxyXG5leHBvcnQgY2xhc3MgQ291cnNlc09mVXNlciBleHRlbmRzIENvbW1vbk1vZGVsIHtcclxuXHJcbiAgQHByb3Aoe1xyXG4gICAgdHlwZTogVHlwZXMuT2JqZWN0SWQsXHJcbiAgICByZWY6IENPTExFQ1RJT05TLkNPVVJTRSxcclxuICB9KVxyXG4gIGNvdXJzZUlkOiBSZWY8Q291cnNlPjtcclxuXHJcbiAgQHByb3Aoe1xyXG4gICAgdHlwZTogVHlwZXMuT2JqZWN0SWQsXHJcbiAgICByZWY6IENPTExFQ1RJT05TLlVTRVIsXHJcbiAgfSlcclxuICB1c2VySWQ6IFJlZjxVc2VyPjtcclxuXHJcbn1cclxuZXhwb3J0IGNvbnN0IENvdXJzZXNPZlVzZXJNb2RlbCA9IGdldE1vZGVsRm9yQ2xhc3MoQ291cnNlc09mVXNlcik7XHJcbiJdfQ==