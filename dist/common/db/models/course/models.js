"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CourseModel = exports.Course = void 0;
const tslib_1 = require("tslib");
const typegoose_1 = require("@typegoose/typegoose");
const collections_1 = require("../../../constants/collections");
const base_model_1 = require("../base.model");
let Course = class Course extends base_model_1.CommonModel {
};
tslib_1.__decorate([
    (0, typegoose_1.prop)({
        required: true,
        trim: true
    }),
    tslib_1.__metadata("design:type", String)
], Course.prototype, "name", void 0);
tslib_1.__decorate([
    (0, typegoose_1.prop)({ trim: true }),
    tslib_1.__metadata("design:type", String)
], Course.prototype, "imgUrl", void 0);
tslib_1.__decorate([
    (0, typegoose_1.prop)({ trim: true }),
    tslib_1.__metadata("design:type", String)
], Course.prototype, "description", void 0);
Course = tslib_1.__decorate([
    (0, typegoose_1.modelOptions)({
        schemaOptions: {
            collection: collections_1.COLLECTIONS.COURSE,
        },
    }),
    (0, typegoose_1.index)({
        name: 1,
        isDeleted: 1,
    }, {
        background: true,
        name: 'name_isDeleted',
    })
], Course);
exports.Course = Course;
exports.CourseModel = (0, typegoose_1.getModelForClass)(Course);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kZWxzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL2NvbW1vbi9kYi9tb2RlbHMvY291cnNlL21vZGVscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsb0RBQW1GO0FBQ25GLGdFQUE2RDtBQUM3RCw4Q0FBNEM7QUFtQjVDLElBQWEsTUFBTSxHQUFuQixNQUFhLE1BQU8sU0FBUSx3QkFBVztDQVl0QyxDQUFBO0FBUEM7SUFKQyxJQUFBLGdCQUFJLEVBQUM7UUFDSixRQUFRLEVBQUUsSUFBSTtRQUNkLElBQUksRUFBRSxJQUFJO0tBQ1gsQ0FBQzs7b0NBQ1c7QUFHYjtJQURDLElBQUEsZ0JBQUksRUFBQyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQzs7c0NBQ0w7QUFHaEI7SUFEQyxJQUFBLGdCQUFJLEVBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLENBQUM7OzJDQUNBO0FBWFYsTUFBTTtJQWpCbEIsSUFBQSx3QkFBWSxFQUFDO1FBQ1osYUFBYSxFQUFFO1lBQ2IsVUFBVSxFQUFFLHlCQUFXLENBQUMsTUFBTTtTQUMvQjtLQUNGLENBQUM7SUFFRCxJQUFBLGlCQUFLLEVBQ0o7UUFDRSxJQUFJLEVBQUUsQ0FBQztRQUNQLFNBQVMsRUFBRSxDQUFDO0tBQ2IsRUFDRDtRQUNFLFVBQVUsRUFBRSxJQUFJO1FBQ2hCLElBQUksRUFBRSxnQkFBZ0I7S0FDdkIsQ0FDRjtHQUVZLE1BQU0sQ0FZbEI7QUFaWSx3QkFBTTtBQWFOLFFBQUEsV0FBVyxHQUFHLElBQUEsNEJBQWdCLEVBQUMsTUFBTSxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnZXRNb2RlbEZvckNsYXNzLCBpbmRleCwgbW9kZWxPcHRpb25zLCBwcm9wIH0gZnJvbSAnQHR5cGVnb29zZS90eXBlZ29vc2UnO1xyXG5pbXBvcnQgeyBDT0xMRUNUSU9OUyB9IGZyb20gJy4uLy4uLy4uL2NvbnN0YW50cy9jb2xsZWN0aW9ucyc7XHJcbmltcG9ydCB7IENvbW1vbk1vZGVsIH0gZnJvbSAnLi4vYmFzZS5tb2RlbCc7XHJcblxyXG5AbW9kZWxPcHRpb25zKHtcclxuICBzY2hlbWFPcHRpb25zOiB7XHJcbiAgICBjb2xsZWN0aW9uOiBDT0xMRUNUSU9OUy5DT1VSU0UsXHJcbiAgfSxcclxufSlcclxuXHJcbkBpbmRleChcclxuICB7XHJcbiAgICBuYW1lOiAxLFxyXG4gICAgaXNEZWxldGVkOiAxLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFja2dyb3VuZDogdHJ1ZSxcclxuICAgIG5hbWU6ICduYW1lX2lzRGVsZXRlZCcsXHJcbiAgfSxcclxuKVxyXG5cclxuZXhwb3J0IGNsYXNzIENvdXJzZSBleHRlbmRzIENvbW1vbk1vZGVsIHtcclxuICBAcHJvcCh7XHJcbiAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgIHRyaW06IHRydWVcclxuICB9KVxyXG4gIG5hbWU6IHN0cmluZztcclxuXHJcbiAgQHByb3AoeyB0cmltOiB0cnVlIH0pXHJcbiAgaW1nVXJsPzogc3RyaW5nO1xyXG5cclxuICBAcHJvcCh7IHRyaW06IHRydWUgfSlcclxuICBkZXNjcmlwdGlvbj86IHN0cmluZztcclxufVxyXG5leHBvcnQgY29uc3QgQ291cnNlTW9kZWwgPSBnZXRNb2RlbEZvckNsYXNzKENvdXJzZSk7XHJcbiJdfQ==