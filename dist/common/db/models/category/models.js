"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryModel = exports.Category = void 0;
const tslib_1 = require("tslib");
const typegoose_1 = require("@typegoose/typegoose");
const collections_1 = require("../../../constants/collections");
const base_model_1 = require("../base.model");
let Category = class Category extends base_model_1.CommonModel {
};
tslib_1.__decorate([
    (0, typegoose_1.prop)({
        required: true,
        trim: true
    }),
    tslib_1.__metadata("design:type", String)
], Category.prototype, "name", void 0);
tslib_1.__decorate([
    (0, typegoose_1.prop)({ trim: true }),
    tslib_1.__metadata("design:type", String)
], Category.prototype, "imgUrl", void 0);
Category = tslib_1.__decorate([
    (0, typegoose_1.modelOptions)({
        schemaOptions: {
            collection: collections_1.COLLECTIONS.CATEGORY,
        },
    }),
    (0, typegoose_1.index)({
        isDeleted: 1,
        parentId: 1,
    }, {
        background: true,
        name: 'parentId_isDeleted',
    }),
    (0, typegoose_1.index)({
        name: 1,
        parentId: 1,
    }, {
        unique: true,
        background: true,
        name: 'nameuz_parentId',
        partialFilterExpression: {
            isDeleted: false,
            $type: 'boolean',
        },
    })
], Category);
exports.Category = Category;
exports.CategoryModel = (0, typegoose_1.getModelForClass)(Category);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kZWxzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL2NvbW1vbi9kYi9tb2RlbHMvY2F0ZWdvcnkvbW9kZWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxvREFBbUY7QUFDbkYsZ0VBQTZEO0FBQzdELDhDQUE0QztBQWtDNUMsSUFBYSxRQUFRLEdBQXJCLE1BQWEsUUFBUyxTQUFRLHdCQUFXO0NBU3hDLENBQUE7QUFKQztJQUpDLElBQUEsZ0JBQUksRUFBQztRQUNKLFFBQVEsRUFBRSxJQUFJO1FBQ2QsSUFBSSxFQUFFLElBQUk7S0FDWCxDQUFDOztzQ0FDVztBQUdiO0lBREMsSUFBQSxnQkFBSSxFQUFDLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxDQUFDOzt3Q0FDTDtBQVJMLFFBQVE7SUFoQ3BCLElBQUEsd0JBQVksRUFBQztRQUNaLGFBQWEsRUFBRTtZQUNiLFVBQVUsRUFBRSx5QkFBVyxDQUFDLFFBQVE7U0FDakM7S0FDRixDQUFDO0lBQ0QsSUFBQSxpQkFBSyxFQUNKO1FBQ0UsU0FBUyxFQUFFLENBQUM7UUFDWixRQUFRLEVBQUUsQ0FBQztLQUNaLEVBQ0Q7UUFDRSxVQUFVLEVBQUUsSUFBSTtRQUNoQixJQUFJLEVBQUUsb0JBQW9CO0tBQzNCLENBQ0Y7SUFFQSxJQUFBLGlCQUFLLEVBQ0o7UUFDRSxJQUFJLEVBQUUsQ0FBQztRQUNQLFFBQVEsRUFBRSxDQUFDO0tBQ1osRUFDRDtRQUNFLE1BQU0sRUFBRSxJQUFJO1FBQ1osVUFBVSxFQUFFLElBQUk7UUFDaEIsSUFBSSxFQUFFLGlCQUFpQjtRQUN2Qix1QkFBdUIsRUFBRTtZQUN2QixTQUFTLEVBQUUsS0FBSztZQUNoQixLQUFLLEVBQUUsU0FBUztTQUNqQjtLQUNGLENBQ0Y7R0FFWSxRQUFRLENBU3BCO0FBVFksNEJBQVE7QUFVUixRQUFBLGFBQWEsR0FBRyxJQUFBLDRCQUFnQixFQUFDLFFBQVEsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2V0TW9kZWxGb3JDbGFzcywgaW5kZXgsIG1vZGVsT3B0aW9ucywgcHJvcCB9IGZyb20gJ0B0eXBlZ29vc2UvdHlwZWdvb3NlJztcclxuaW1wb3J0IHsgQ09MTEVDVElPTlMgfSBmcm9tICcuLi8uLi8uLi9jb25zdGFudHMvY29sbGVjdGlvbnMnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2RlbCB9IGZyb20gJy4uL2Jhc2UubW9kZWwnO1xyXG5cclxuQG1vZGVsT3B0aW9ucyh7XHJcbiAgc2NoZW1hT3B0aW9uczoge1xyXG4gICAgY29sbGVjdGlvbjogQ09MTEVDVElPTlMuQ0FURUdPUlksXHJcbiAgfSxcclxufSlcclxuQGluZGV4KFxyXG4gIHtcclxuICAgIGlzRGVsZXRlZDogMSxcclxuICAgIHBhcmVudElkOiAxLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFja2dyb3VuZDogdHJ1ZSxcclxuICAgIG5hbWU6ICdwYXJlbnRJZF9pc0RlbGV0ZWQnLFxyXG4gIH0sXHJcbilcclxuXHJcbkBpbmRleChcclxuICB7XHJcbiAgICBuYW1lOiAxLFxyXG4gICAgcGFyZW50SWQ6IDEsXHJcbiAgfSxcclxuICB7XHJcbiAgICB1bmlxdWU6IHRydWUsXHJcbiAgICBiYWNrZ3JvdW5kOiB0cnVlLFxyXG4gICAgbmFtZTogJ25hbWV1el9wYXJlbnRJZCcsXHJcbiAgICBwYXJ0aWFsRmlsdGVyRXhwcmVzc2lvbjoge1xyXG4gICAgICBpc0RlbGV0ZWQ6IGZhbHNlLFxyXG4gICAgICAkdHlwZTogJ2Jvb2xlYW4nLFxyXG4gICAgfSxcclxuICB9LFxyXG4pXHJcblxyXG5leHBvcnQgY2xhc3MgQ2F0ZWdvcnkgZXh0ZW5kcyBDb21tb25Nb2RlbCB7XHJcbiAgQHByb3Aoe1xyXG4gICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICB0cmltOiB0cnVlXHJcbiAgfSlcclxuICBuYW1lOiBzdHJpbmc7XHJcblxyXG4gIEBwcm9wKHsgdHJpbTogdHJ1ZSB9KVxyXG4gIGltZ1VybD86IHN0cmluZztcclxufVxyXG5leHBvcnQgY29uc3QgQ2F0ZWdvcnlNb2RlbCA9IGdldE1vZGVsRm9yQ2xhc3MoQ2F0ZWdvcnkpO1xyXG4iXX0=