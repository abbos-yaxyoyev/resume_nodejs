"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenreModel = exports.Genre = void 0;
const tslib_1 = require("tslib");
const typegoose_1 = require("@typegoose/typegoose");
const mongoose_1 = require("mongoose");
const collections_1 = require("../../../constants/collections");
const base_model_1 = require("../base.model");
let Genre = class Genre extends base_model_1.CommonModel {
};
tslib_1.__decorate([
    (0, typegoose_1.prop)({
        required: true,
        trim: true
    }),
    tslib_1.__metadata("design:type", String)
], Genre.prototype, "name", void 0);
tslib_1.__decorate([
    (0, typegoose_1.prop)({ trim: true }),
    tslib_1.__metadata("design:type", String)
], Genre.prototype, "imgUrl", void 0);
tslib_1.__decorate([
    (0, typegoose_1.prop)({
        type: mongoose_1.Types.ObjectId,
        ref: collections_1.COLLECTIONS.GENRE,
        default: undefined
    }),
    tslib_1.__metadata("design:type", Object)
], Genre.prototype, "parentId", void 0);
Genre = tslib_1.__decorate([
    (0, typegoose_1.modelOptions)({
        schemaOptions: {
            collection: collections_1.COLLECTIONS.GENRE,
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
], Genre);
exports.Genre = Genre;
exports.GenreModel = (0, typegoose_1.getModelForClass)(Genre);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kZWxzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL2NvbW1vbi9kYi9tb2RlbHMvZ2VucmUvbW9kZWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxvREFBd0Y7QUFDeEYsdUNBQWlDO0FBQ2pDLGdFQUE2RDtBQUM3RCw4Q0FBNEM7QUFrQzVDLElBQWEsS0FBSyxHQUFsQixNQUFhLEtBQU0sU0FBUSx3QkFBVztDQWdCckMsQ0FBQTtBQVhDO0lBSkMsSUFBQSxnQkFBSSxFQUFDO1FBQ0osUUFBUSxFQUFFLElBQUk7UUFDZCxJQUFJLEVBQUUsSUFBSTtLQUNYLENBQUM7O21DQUNXO0FBR2I7SUFEQyxJQUFBLGdCQUFJLEVBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLENBQUM7O3FDQUNMO0FBT2hCO0lBTEMsSUFBQSxnQkFBSSxFQUFDO1FBQ0osSUFBSSxFQUFFLGdCQUFLLENBQUMsUUFBUTtRQUNwQixHQUFHLEVBQUUseUJBQVcsQ0FBQyxLQUFLO1FBQ3RCLE9BQU8sRUFBRSxTQUFTO0tBQ25CLENBQUM7O3VDQUNvQjtBQWZYLEtBQUs7SUFoQ2pCLElBQUEsd0JBQVksRUFBQztRQUNaLGFBQWEsRUFBRTtZQUNiLFVBQVUsRUFBRSx5QkFBVyxDQUFDLEtBQUs7U0FDOUI7S0FDRixDQUFDO0lBQ0QsSUFBQSxpQkFBSyxFQUNKO1FBQ0UsU0FBUyxFQUFFLENBQUM7UUFDWixRQUFRLEVBQUUsQ0FBQztLQUNaLEVBQ0Q7UUFDRSxVQUFVLEVBQUUsSUFBSTtRQUNoQixJQUFJLEVBQUUsb0JBQW9CO0tBQzNCLENBQ0Y7SUFFQSxJQUFBLGlCQUFLLEVBQ0o7UUFDRSxJQUFJLEVBQUUsQ0FBQztRQUNQLFFBQVEsRUFBRSxDQUFDO0tBQ1osRUFDRDtRQUNFLE1BQU0sRUFBRSxJQUFJO1FBQ1osVUFBVSxFQUFFLElBQUk7UUFDaEIsSUFBSSxFQUFFLGlCQUFpQjtRQUN2Qix1QkFBdUIsRUFBRTtZQUN2QixTQUFTLEVBQUUsS0FBSztZQUNoQixLQUFLLEVBQUUsU0FBUztTQUNqQjtLQUNGLENBQ0Y7R0FFWSxLQUFLLENBZ0JqQjtBQWhCWSxzQkFBSztBQWlCTCxRQUFBLFVBQVUsR0FBRyxJQUFBLDRCQUFnQixFQUFDLEtBQUssQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2V0TW9kZWxGb3JDbGFzcywgaW5kZXgsIG1vZGVsT3B0aW9ucywgcHJvcCwgUmVmIH0gZnJvbSAnQHR5cGVnb29zZS90eXBlZ29vc2UnO1xyXG5pbXBvcnQgeyBUeXBlcyB9IGZyb20gJ21vbmdvb3NlJztcclxuaW1wb3J0IHsgQ09MTEVDVElPTlMgfSBmcm9tICcuLi8uLi8uLi9jb25zdGFudHMvY29sbGVjdGlvbnMnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2RlbCB9IGZyb20gJy4uL2Jhc2UubW9kZWwnO1xyXG5cclxuQG1vZGVsT3B0aW9ucyh7XHJcbiAgc2NoZW1hT3B0aW9uczoge1xyXG4gICAgY29sbGVjdGlvbjogQ09MTEVDVElPTlMuR0VOUkUsXHJcbiAgfSxcclxufSlcclxuQGluZGV4KFxyXG4gIHtcclxuICAgIGlzRGVsZXRlZDogMSxcclxuICAgIHBhcmVudElkOiAxLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFja2dyb3VuZDogdHJ1ZSxcclxuICAgIG5hbWU6ICdwYXJlbnRJZF9pc0RlbGV0ZWQnLFxyXG4gIH0sXHJcbilcclxuXHJcbkBpbmRleChcclxuICB7XHJcbiAgICBuYW1lOiAxLFxyXG4gICAgcGFyZW50SWQ6IDEsXHJcbiAgfSxcclxuICB7XHJcbiAgICB1bmlxdWU6IHRydWUsXHJcbiAgICBiYWNrZ3JvdW5kOiB0cnVlLFxyXG4gICAgbmFtZTogJ25hbWV1el9wYXJlbnRJZCcsXHJcbiAgICBwYXJ0aWFsRmlsdGVyRXhwcmVzc2lvbjoge1xyXG4gICAgICBpc0RlbGV0ZWQ6IGZhbHNlLFxyXG4gICAgICAkdHlwZTogJ2Jvb2xlYW4nLFxyXG4gICAgfSxcclxuICB9LFxyXG4pXHJcblxyXG5leHBvcnQgY2xhc3MgR2VucmUgZXh0ZW5kcyBDb21tb25Nb2RlbCB7XHJcbiAgQHByb3Aoe1xyXG4gICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICB0cmltOiB0cnVlXHJcbiAgfSlcclxuICBuYW1lOiBzdHJpbmc7XHJcblxyXG4gIEBwcm9wKHsgdHJpbTogdHJ1ZSB9KVxyXG4gIGltZ1VybD86IHN0cmluZztcclxuXHJcbiAgQHByb3Aoe1xyXG4gICAgdHlwZTogVHlwZXMuT2JqZWN0SWQsXHJcbiAgICByZWY6IENPTExFQ1RJT05TLkdFTlJFLFxyXG4gICAgZGVmYXVsdDogdW5kZWZpbmVkXHJcbiAgfSlcclxuICBwYXJlbnRJZD86IFJlZjxHZW5yZT47XHJcbn1cclxuZXhwb3J0IGNvbnN0IEdlbnJlTW9kZWwgPSBnZXRNb2RlbEZvckNsYXNzKEdlbnJlKTtcclxuIl19