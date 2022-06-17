"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommonModel = void 0;
const tslib_1 = require("tslib");
const typegoose_1 = require("@typegoose/typegoose");
const mongoose_1 = require("mongoose");
let CommonModel = class CommonModel {
};
tslib_1.__decorate([
    (0, typegoose_1.prop)({ default: false }),
    tslib_1.__metadata("design:type", Boolean)
], CommonModel.prototype, "isDeleted", void 0);
tslib_1.__decorate([
    (0, typegoose_1.prop)({
        type: mongoose_1.Types.ObjectId,
        // refPath: 'which',
    }),
    tslib_1.__metadata("design:type", Object)
], CommonModel.prototype, "createdBy", void 0);
tslib_1.__decorate([
    (0, typegoose_1.prop)({
        type: mongoose_1.Types.ObjectId,
    }),
    tslib_1.__metadata("design:type", Object)
], CommonModel.prototype, "updatedBy", void 0);
tslib_1.__decorate([
    (0, typegoose_1.prop)({
        type: mongoose_1.Types.ObjectId,
    }),
    tslib_1.__metadata("design:type", Object)
], CommonModel.prototype, "deletedBy", void 0);
tslib_1.__decorate([
    (0, typegoose_1.prop)({ default: undefined }),
    tslib_1.__metadata("design:type", Date)
], CommonModel.prototype, "deletedAt", void 0);
CommonModel = tslib_1.__decorate([
    (0, typegoose_1.modelOptions)({
        schemaOptions: {
            timestamps: true,
        },
    })
], CommonModel);
exports.CommonModel = CommonModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS5tb2RlbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21tb24vZGIvbW9kZWxzL2Jhc2UubW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLG9EQUErRDtBQUMvRCx1Q0FBaUM7QUFPakMsSUFBYSxXQUFXLEdBQXhCLE1BQWEsV0FBVztDQStCdkIsQ0FBQTtBQTdCQztJQURDLElBQUEsZ0JBQUksRUFBQyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsQ0FBQzs7OENBQ047QUFZbkI7SUFKQyxJQUFBLGdCQUFJLEVBQUM7UUFDSixJQUFJLEVBQUUsZ0JBQUssQ0FBQyxRQUFRO1FBQ3BCLG9CQUFvQjtLQUNyQixDQUFDOzs4Q0FDdUI7QUFLekI7SUFIQyxJQUFBLGdCQUFJLEVBQUM7UUFDSixJQUFJLEVBQUUsZ0JBQUssQ0FBQyxRQUFRO0tBQ3JCLENBQUM7OzhDQUN1QjtBQUt6QjtJQUhDLElBQUEsZ0JBQUksRUFBQztRQUNKLElBQUksRUFBRSxnQkFBSyxDQUFDLFFBQVE7S0FDckIsQ0FBQzs7OENBQ3VCO0FBR3pCO0lBREMsSUFBQSxnQkFBSSxFQUFDLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxDQUFDO3NDQUNqQixJQUFJOzhDQUFDO0FBM0JOLFdBQVc7SUFMdkIsSUFBQSx3QkFBWSxFQUFDO1FBQ1osYUFBYSxFQUFFO1lBQ2IsVUFBVSxFQUFFLElBQUk7U0FDakI7S0FDRixDQUFDO0dBQ1csV0FBVyxDQStCdkI7QUEvQlksa0NBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBtb2RlbE9wdGlvbnMsIHByb3AsIFJlZiB9IGZyb20gJ0B0eXBlZ29vc2UvdHlwZWdvb3NlJztcclxuaW1wb3J0IHsgVHlwZXMgfSBmcm9tICdtb25nb29zZSc7XHJcbmltcG9ydCB7IEVtcGxveWVlIH0gZnJvbSAnLi9lbXBsb3llZS9tb2RlbHMnO1xyXG5AbW9kZWxPcHRpb25zKHtcclxuICBzY2hlbWFPcHRpb25zOiB7XHJcbiAgICB0aW1lc3RhbXBzOiB0cnVlLFxyXG4gIH0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDb21tb25Nb2RlbCB7XHJcbiAgQHByb3AoeyBkZWZhdWx0OiBmYWxzZSB9KVxyXG4gIGlzRGVsZXRlZDogYm9vbGVhbjtcclxuXHJcbiAgLy8gQHByb3Aoe1xyXG4gIC8vICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgLy8gICAgIGVudW06IFtDT0xMRUNUSU9OUy5VU0VSLCBDT0xMRUNUSU9OUy5BRE1JTl0sXHJcbiAgLy8gfSlcclxuICAvLyB3aGljaD86IHN0cmluZztcclxuXHJcbiAgQHByb3Aoe1xyXG4gICAgdHlwZTogVHlwZXMuT2JqZWN0SWQsXHJcbiAgICAvLyByZWZQYXRoOiAnd2hpY2gnLFxyXG4gIH0pXHJcbiAgY3JlYXRlZEJ5OiBSZWY8RW1wbG95ZWU+O1xyXG5cclxuICBAcHJvcCh7XHJcbiAgICB0eXBlOiBUeXBlcy5PYmplY3RJZCxcclxuICB9KVxyXG4gIHVwZGF0ZWRCeTogUmVmPEVtcGxveWVlPjtcclxuXHJcbiAgQHByb3Aoe1xyXG4gICAgdHlwZTogVHlwZXMuT2JqZWN0SWQsXHJcbiAgfSlcclxuICBkZWxldGVkQnk6IFJlZjxFbXBsb3llZT47XHJcblxyXG4gIEBwcm9wKHsgZGVmYXVsdDogdW5kZWZpbmVkIH0pXHJcbiAgZGVsZXRlZEF0PzogRGF0ZTtcclxuXHJcbiAgY3JlYXRlZEF0PzogRGF0ZTtcclxuICB1cGRhdGVkQXQ6IERhdGU7XHJcbn1cclxuIl19