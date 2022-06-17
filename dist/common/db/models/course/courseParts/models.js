"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoursePartsModel = exports.CourseParts = void 0;
const tslib_1 = require("tslib");
const typegoose_1 = require("@typegoose/typegoose");
const mongoose_1 = require("mongoose");
const collections_1 = require("../../../../constants/collections");
const base_model_1 = require("../../base.model");
let CourseParts = class CourseParts extends base_model_1.CommonModel {
};
tslib_1.__decorate([
    (0, typegoose_1.prop)({
        type: mongoose_1.Types.ObjectId,
        ref: collections_1.COLLECTIONS.COURSE,
    }),
    tslib_1.__metadata("design:type", Object)
], CourseParts.prototype, "courseId", void 0);
tslib_1.__decorate([
    (0, typegoose_1.prop)({ trim: true }),
    tslib_1.__metadata("design:type", String)
], CourseParts.prototype, "imgUrl", void 0);
tslib_1.__decorate([
    (0, typegoose_1.prop)({ trim: true }),
    tslib_1.__metadata("design:type", String)
], CourseParts.prototype, "videoUrl", void 0);
tslib_1.__decorate([
    (0, typegoose_1.prop)({ trim: true }),
    tslib_1.__metadata("design:type", String)
], CourseParts.prototype, "description", void 0);
CourseParts = tslib_1.__decorate([
    (0, typegoose_1.modelOptions)({
        schemaOptions: {
            collection: collections_1.COLLECTIONS.COURSE_PARTS,
        },
    }),
    (0, typegoose_1.index)({
        isDeleted: 1,
    }, {
        background: true,
        name: 'isDeleted',
    })
], CourseParts);
exports.CourseParts = CourseParts;
exports.CoursePartsModel = (0, typegoose_1.getModelForClass)(CourseParts);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kZWxzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbW1vbi9kYi9tb2RlbHMvY291cnNlL2NvdXJzZVBhcnRzL21vZGVscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsb0RBQXdGO0FBQ3hGLHVDQUFpQztBQUNqQyxtRUFBZ0U7QUFDaEUsaURBQStDO0FBbUIvQyxJQUFhLFdBQVcsR0FBeEIsTUFBYSxXQUFZLFNBQVEsd0JBQVc7Q0FnQjNDLENBQUE7QUFWQztJQUpDLElBQUEsZ0JBQUksRUFBQztRQUNKLElBQUksRUFBRSxnQkFBSyxDQUFDLFFBQVE7UUFDcEIsR0FBRyxFQUFFLHlCQUFXLENBQUMsTUFBTTtLQUN4QixDQUFDOzs2Q0FDb0I7QUFHdEI7SUFEQyxJQUFBLGdCQUFJLEVBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLENBQUM7OzJDQUNMO0FBR2hCO0lBREMsSUFBQSxnQkFBSSxFQUFDLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxDQUFDOzs2Q0FDSDtBQUdsQjtJQURDLElBQUEsZ0JBQUksRUFBQyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQzs7Z0RBQ0Q7QUFmVCxXQUFXO0lBaEJ2QixJQUFBLHdCQUFZLEVBQUM7UUFDWixhQUFhLEVBQUU7WUFDYixVQUFVLEVBQUUseUJBQVcsQ0FBQyxZQUFZO1NBQ3JDO0tBQ0YsQ0FBQztJQUVELElBQUEsaUJBQUssRUFDSjtRQUNFLFNBQVMsRUFBRSxDQUFDO0tBQ2IsRUFDRDtRQUNFLFVBQVUsRUFBRSxJQUFJO1FBQ2hCLElBQUksRUFBRSxXQUFXO0tBQ2xCLENBQ0Y7R0FFWSxXQUFXLENBZ0J2QjtBQWhCWSxrQ0FBVztBQWlCWCxRQUFBLGdCQUFnQixHQUFHLElBQUEsNEJBQWdCLEVBQUMsV0FBVyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnZXRNb2RlbEZvckNsYXNzLCBpbmRleCwgbW9kZWxPcHRpb25zLCBwcm9wLCBSZWYgfSBmcm9tICdAdHlwZWdvb3NlL3R5cGVnb29zZSc7XHJcbmltcG9ydCB7IFR5cGVzIH0gZnJvbSAnbW9uZ29vc2UnO1xyXG5pbXBvcnQgeyBDT0xMRUNUSU9OUyB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbnN0YW50cy9jb2xsZWN0aW9ucyc7XHJcbmltcG9ydCB7IENvbW1vbk1vZGVsIH0gZnJvbSAnLi4vLi4vYmFzZS5tb2RlbCc7XHJcbmltcG9ydCB7IENvdXJzZSB9IGZyb20gJy4vLi4vbW9kZWxzJztcclxuXHJcbkBtb2RlbE9wdGlvbnMoe1xyXG4gIHNjaGVtYU9wdGlvbnM6IHtcclxuICAgIGNvbGxlY3Rpb246IENPTExFQ1RJT05TLkNPVVJTRV9QQVJUUyxcclxuICB9LFxyXG59KVxyXG5cclxuQGluZGV4KFxyXG4gIHtcclxuICAgIGlzRGVsZXRlZDogMSxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhY2tncm91bmQ6IHRydWUsXHJcbiAgICBuYW1lOiAnaXNEZWxldGVkJyxcclxuICB9LFxyXG4pXHJcblxyXG5leHBvcnQgY2xhc3MgQ291cnNlUGFydHMgZXh0ZW5kcyBDb21tb25Nb2RlbCB7XHJcblxyXG4gIEBwcm9wKHtcclxuICAgIHR5cGU6IFR5cGVzLk9iamVjdElkLFxyXG4gICAgcmVmOiBDT0xMRUNUSU9OUy5DT1VSU0UsXHJcbiAgfSlcclxuICBjb3Vyc2VJZDogUmVmPENvdXJzZT47XHJcblxyXG4gIEBwcm9wKHsgdHJpbTogdHJ1ZSB9KVxyXG4gIGltZ1VybD86IHN0cmluZztcclxuXHJcbiAgQHByb3AoeyB0cmltOiB0cnVlIH0pXHJcbiAgdmlkZW9Vcmw/OiBzdHJpbmc7XHJcblxyXG4gIEBwcm9wKHsgdHJpbTogdHJ1ZSB9KVxyXG4gIGRlc2NyaXB0aW9uOiBzdHJpbmc7XHJcbn1cclxuZXhwb3J0IGNvbnN0IENvdXJzZVBhcnRzTW9kZWwgPSBnZXRNb2RlbEZvckNsYXNzKENvdXJzZVBhcnRzKTtcclxuIl19