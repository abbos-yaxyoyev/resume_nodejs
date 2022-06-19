"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BooksModel = exports.Books = void 0;
const tslib_1 = require("tslib");
const typegoose_1 = require("@typegoose/typegoose");
const mongoose_1 = require("mongoose");
const collections_1 = require("../../../constants/collections");
const base_model_1 = require("../base.model");
let Books = class Books extends base_model_1.CommonModel {
};
tslib_1.__decorate([
    (0, typegoose_1.prop)({
        required: true,
        trim: true,
    }),
    tslib_1.__metadata("design:type", String)
], Books.prototype, "name", void 0);
tslib_1.__decorate([
    (0, typegoose_1.prop)({
        required: true,
        trim: true,
    }),
    tslib_1.__metadata("design:type", String)
], Books.prototype, "imgUrl", void 0);
tslib_1.__decorate([
    (0, typegoose_1.prop)({ type: mongoose_1.Types.ObjectId, ref: collections_1.COLLECTIONS.AUTHOR }),
    tslib_1.__metadata("design:type", Object)
], Books.prototype, "authorId", void 0);
tslib_1.__decorate([
    (0, typegoose_1.prop)({ type: mongoose_1.Types.ObjectId, ref: collections_1.COLLECTIONS.CATEGORY }),
    tslib_1.__metadata("design:type", Object)
], Books.prototype, "categoryId", void 0);
Books = tslib_1.__decorate([
    (0, typegoose_1.modelOptions)({
        schemaOptions: {
            collection: collections_1.COLLECTIONS.BOOK,
        },
    }),
    (0, typegoose_1.index)({
        isDeleted: 1,
    }, {
        background: true,
        name: 'isDeleted',
    }),
    (0, typegoose_1.index)({
        name: 1,
        authorId: 1,
        categoryId: 1,
    }, {
        background: true,
        name: 'name_authorId_genreId',
        unique: true,
        partialFilterExpression: {
            isDeleted: false,
            $type: 'boolean',
        },
    })
], Books);
exports.Books = Books;
exports.BooksModel = (0, typegoose_1.getModelForClass)(Books);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kZWxzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL2NvbW1vbi9kYi9tb2RlbHMvYm9vay9tb2RlbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLG9EQUF3RjtBQUN4Rix1Q0FBaUM7QUFDakMsZ0VBQTZEO0FBRTdELDhDQUE0QztBQW1DNUMsSUFBYSxLQUFLLEdBQWxCLE1BQWEsS0FBTSxTQUFRLHdCQUFXO0NBbUJyQyxDQUFBO0FBZEM7SUFKQyxJQUFBLGdCQUFJLEVBQUM7UUFDSixRQUFRLEVBQUUsSUFBSTtRQUNkLElBQUksRUFBRSxJQUFJO0tBQ1gsQ0FBQzs7bUNBQ1c7QUFNYjtJQUpDLElBQUEsZ0JBQUksRUFBQztRQUNKLFFBQVEsRUFBRSxJQUFJO1FBQ2QsSUFBSSxFQUFFLElBQUk7S0FDWCxDQUFDOztxQ0FDYTtBQUdmO0lBREMsSUFBQSxnQkFBSSxFQUFDLEVBQUUsSUFBSSxFQUFFLGdCQUFLLENBQUMsUUFBUSxFQUFFLEdBQUcsRUFBRSx5QkFBVyxDQUFDLE1BQU0sRUFBRSxDQUFDOzt1Q0FDakM7QUFHdkI7SUFEQyxJQUFBLGdCQUFJLEVBQUMsRUFBRSxJQUFJLEVBQUUsZ0JBQUssQ0FBQyxRQUFRLEVBQUUsR0FBRyxFQUFFLHlCQUFXLENBQUMsUUFBUSxFQUFFLENBQUM7O3lDQUNoQztBQWpCZixLQUFLO0lBaENqQixJQUFBLHdCQUFZLEVBQUM7UUFDWixhQUFhLEVBQUU7WUFDYixVQUFVLEVBQUUseUJBQVcsQ0FBQyxJQUFJO1NBQzdCO0tBQ0YsQ0FBQztJQUNELElBQUEsaUJBQUssRUFDSjtRQUNFLFNBQVMsRUFBRSxDQUFDO0tBQ2IsRUFDRDtRQUNFLFVBQVUsRUFBRSxJQUFJO1FBQ2hCLElBQUksRUFBRSxXQUFXO0tBQ2xCLENBQ0Y7SUFFQSxJQUFBLGlCQUFLLEVBQ0o7UUFDRSxJQUFJLEVBQUUsQ0FBQztRQUNQLFFBQVEsRUFBRSxDQUFDO1FBQ1gsVUFBVSxFQUFFLENBQUM7S0FDZCxFQUNEO1FBQ0UsVUFBVSxFQUFFLElBQUk7UUFDaEIsSUFBSSxFQUFFLHVCQUF1QjtRQUM3QixNQUFNLEVBQUUsSUFBSTtRQUNaLHVCQUF1QixFQUFFO1lBQ3ZCLFNBQVMsRUFBRSxLQUFLO1lBQ2hCLEtBQUssRUFBRSxTQUFTO1NBQ2pCO0tBQ0YsQ0FDRjtHQUVZLEtBQUssQ0FtQmpCO0FBbkJZLHNCQUFLO0FBb0JMLFFBQUEsVUFBVSxHQUFHLElBQUEsNEJBQWdCLEVBQUMsS0FBSyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnZXRNb2RlbEZvckNsYXNzLCBpbmRleCwgbW9kZWxPcHRpb25zLCBwcm9wLCBSZWYgfSBmcm9tICdAdHlwZWdvb3NlL3R5cGVnb29zZSc7XHJcbmltcG9ydCB7IFR5cGVzIH0gZnJvbSAnbW9uZ29vc2UnO1xyXG5pbXBvcnQgeyBDT0xMRUNUSU9OUyB9IGZyb20gJy4uLy4uLy4uL2NvbnN0YW50cy9jb2xsZWN0aW9ucyc7XHJcbmltcG9ydCB7IEF1dGhvciB9IGZyb20gJy4uL2F1dGhvci9tb2RlbHMnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2RlbCB9IGZyb20gJy4uL2Jhc2UubW9kZWwnO1xyXG5pbXBvcnQgeyBDYXRlZ29yeSB9IGZyb20gJy4uL2NhdGVnb3J5L21vZGVscyc7XHJcblxyXG5AbW9kZWxPcHRpb25zKHtcclxuICBzY2hlbWFPcHRpb25zOiB7XHJcbiAgICBjb2xsZWN0aW9uOiBDT0xMRUNUSU9OUy5CT09LLFxyXG4gIH0sXHJcbn0pXHJcbkBpbmRleChcclxuICB7XHJcbiAgICBpc0RlbGV0ZWQ6IDEsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cnVlLFxyXG4gICAgbmFtZTogJ2lzRGVsZXRlZCcsXHJcbiAgfSxcclxuKVxyXG5cclxuQGluZGV4KFxyXG4gIHtcclxuICAgIG5hbWU6IDEsXHJcbiAgICBhdXRob3JJZDogMSxcclxuICAgIGNhdGVnb3J5SWQ6IDEsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cnVlLFxyXG4gICAgbmFtZTogJ25hbWVfYXV0aG9ySWRfZ2VucmVJZCcsXHJcbiAgICB1bmlxdWU6IHRydWUsXHJcbiAgICBwYXJ0aWFsRmlsdGVyRXhwcmVzc2lvbjoge1xyXG4gICAgICBpc0RlbGV0ZWQ6IGZhbHNlLFxyXG4gICAgICAkdHlwZTogJ2Jvb2xlYW4nLFxyXG4gICAgfSxcclxuICB9LFxyXG4pXHJcblxyXG5leHBvcnQgY2xhc3MgQm9va3MgZXh0ZW5kcyBDb21tb25Nb2RlbCB7XHJcbiAgQHByb3Aoe1xyXG4gICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICB0cmltOiB0cnVlLFxyXG4gIH0pXHJcbiAgbmFtZTogc3RyaW5nO1xyXG5cclxuICBAcHJvcCh7XHJcbiAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgIHRyaW06IHRydWUsXHJcbiAgfSlcclxuICBpbWdVcmw6IHN0cmluZztcclxuXHJcbiAgQHByb3AoeyB0eXBlOiBUeXBlcy5PYmplY3RJZCwgcmVmOiBDT0xMRUNUSU9OUy5BVVRIT1IgfSlcclxuICBhdXRob3JJZD86IFJlZjxBdXRob3I+O1xyXG5cclxuICBAcHJvcCh7IHR5cGU6IFR5cGVzLk9iamVjdElkLCByZWY6IENPTExFQ1RJT05TLkNBVEVHT1JZIH0pXHJcbiAgY2F0ZWdvcnlJZDogUmVmPENhdGVnb3J5PjtcclxuXHJcbn1cclxuZXhwb3J0IGNvbnN0IEJvb2tzTW9kZWwgPSBnZXRNb2RlbEZvckNsYXNzKEJvb2tzKTtcclxuIl19