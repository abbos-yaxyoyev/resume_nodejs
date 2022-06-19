"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthorModel = exports.Author = void 0;
const tslib_1 = require("tslib");
const typegoose_1 = require("@typegoose/typegoose");
const collections_1 = require("../../../constants/collections");
const base_model_1 = require("../base.model");
let Author = class Author extends base_model_1.CommonModel {
};
tslib_1.__decorate([
    (0, typegoose_1.prop)({
        required: true,
        trim: true,
    }),
    tslib_1.__metadata("design:type", String)
], Author.prototype, "fullName", void 0);
tslib_1.__decorate([
    (0, typegoose_1.prop)({ trim: true, }),
    tslib_1.__metadata("design:type", String)
], Author.prototype, "imgUrl", void 0);
Author = tslib_1.__decorate([
    (0, typegoose_1.modelOptions)({
        schemaOptions: {
            collection: collections_1.COLLECTIONS.AUTHOR,
        },
        options: {
            allowMixed: typegoose_1.Severity.ALLOW,
        },
    }),
    (0, typegoose_1.index)({
        fullName: 1,
        isDeleted: 1,
        dateOfbirth: 1,
    }, {
        background: true,
        name: 'fullName_isDeleted_dateOfbirth',
    })
], Author);
exports.Author = Author;
exports.AuthorModel = (0, typegoose_1.getModelForClass)(Author);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kZWxzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL2NvbW1vbi9kYi9tb2RlbHMvYXV0aG9yL21vZGVscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsb0RBQTZGO0FBQzdGLGdFQUE2RDtBQUM3RCw4Q0FBNEM7QUF1QjVDLElBQWEsTUFBTSxHQUFuQixNQUFhLE1BQU8sU0FBUSx3QkFBVztDQVV0QyxDQUFBO0FBTEM7SUFKQyxJQUFBLGdCQUFJLEVBQUM7UUFDSixRQUFRLEVBQUUsSUFBSTtRQUNkLElBQUksRUFBRSxJQUFJO0tBQ1gsQ0FBQzs7d0NBQ2U7QUFHakI7SUFEQyxJQUFBLGdCQUFJLEVBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxHQUFHLENBQUM7O3NDQUNQO0FBUkosTUFBTTtJQXJCbEIsSUFBQSx3QkFBWSxFQUFDO1FBQ1osYUFBYSxFQUFFO1lBQ2IsVUFBVSxFQUFFLHlCQUFXLENBQUMsTUFBTTtTQUMvQjtRQUNELE9BQU8sRUFBRTtZQUNQLFVBQVUsRUFBRSxvQkFBUSxDQUFDLEtBQUs7U0FDM0I7S0FDRixDQUFDO0lBRUQsSUFBQSxpQkFBSyxFQUNKO1FBQ0UsUUFBUSxFQUFFLENBQUM7UUFDWCxTQUFTLEVBQUUsQ0FBQztRQUNaLFdBQVcsRUFBRSxDQUFDO0tBQ2YsRUFDRDtRQUNFLFVBQVUsRUFBRSxJQUFJO1FBQ2hCLElBQUksRUFBRSxnQ0FBZ0M7S0FDdkMsQ0FDRjtHQUVZLE1BQU0sQ0FVbEI7QUFWWSx3QkFBTTtBQVdOLFFBQUEsV0FBVyxHQUFHLElBQUEsNEJBQWdCLEVBQUMsTUFBTSxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnZXRNb2RlbEZvckNsYXNzLCBpbmRleCwgbW9kZWxPcHRpb25zLCBwcm9wLCBTZXZlcml0eSB9IGZyb20gJ0B0eXBlZ29vc2UvdHlwZWdvb3NlJztcclxuaW1wb3J0IHsgQ09MTEVDVElPTlMgfSBmcm9tICcuLi8uLi8uLi9jb25zdGFudHMvY29sbGVjdGlvbnMnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2RlbCB9IGZyb20gJy4uL2Jhc2UubW9kZWwnO1xyXG5cclxuQG1vZGVsT3B0aW9ucyh7XHJcbiAgc2NoZW1hT3B0aW9uczoge1xyXG4gICAgY29sbGVjdGlvbjogQ09MTEVDVElPTlMuQVVUSE9SLFxyXG4gIH0sXHJcbiAgb3B0aW9uczoge1xyXG4gICAgYWxsb3dNaXhlZDogU2V2ZXJpdHkuQUxMT1csXHJcbiAgfSxcclxufSlcclxuXHJcbkBpbmRleChcclxuICB7XHJcbiAgICBmdWxsTmFtZTogMSxcclxuICAgIGlzRGVsZXRlZDogMSxcclxuICAgIGRhdGVPZmJpcnRoOiAxLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFja2dyb3VuZDogdHJ1ZSxcclxuICAgIG5hbWU6ICdmdWxsTmFtZV9pc0RlbGV0ZWRfZGF0ZU9mYmlydGgnLFxyXG4gIH0sXHJcbilcclxuXHJcbmV4cG9ydCBjbGFzcyBBdXRob3IgZXh0ZW5kcyBDb21tb25Nb2RlbCB7XHJcbiAgQHByb3Aoe1xyXG4gICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICB0cmltOiB0cnVlLFxyXG4gIH0pXHJcbiAgZnVsbE5hbWU6IHN0cmluZztcclxuXHJcbiAgQHByb3AoeyB0cmltOiB0cnVlLCB9KVxyXG4gIGltZ1VybDogc3RyaW5nO1xyXG5cclxufVxyXG5leHBvcnQgY29uc3QgQXV0aG9yTW9kZWwgPSBnZXRNb2RlbEZvckNsYXNzKEF1dGhvcik7XHJcbiJdfQ==