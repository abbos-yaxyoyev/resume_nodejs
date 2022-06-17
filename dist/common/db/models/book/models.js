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
        trim: true
    }),
    tslib_1.__metadata("design:type", String)
], Books.prototype, "description", void 0);
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
    (0, typegoose_1.prop)({ type: [mongoose_1.Types.ObjectId], ref: collections_1.COLLECTIONS.GENRE }),
    tslib_1.__metadata("design:type", Array)
], Books.prototype, "genreIds", void 0);
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
        genreIds: 1,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kZWxzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL2NvbW1vbi9kYi9tb2RlbHMvYm9vay9tb2RlbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLG9EQUF3RjtBQUN4Rix1Q0FBaUM7QUFDakMsZ0VBQTZEO0FBRTdELDhDQUE0QztBQW1DNUMsSUFBYSxLQUFLLEdBQWxCLE1BQWEsS0FBTSxTQUFRLHdCQUFXO0NBd0JyQyxDQUFBO0FBbkJDO0lBSkMsSUFBQSxnQkFBSSxFQUFDO1FBQ0osUUFBUSxFQUFFLElBQUk7UUFDZCxJQUFJLEVBQUUsSUFBSTtLQUNYLENBQUM7O21DQUNXO0FBS2I7SUFIQyxJQUFBLGdCQUFJLEVBQUM7UUFDSixJQUFJLEVBQUUsSUFBSTtLQUNYLENBQUM7OzBDQUNrQjtBQU1wQjtJQUpDLElBQUEsZ0JBQUksRUFBQztRQUNKLFFBQVEsRUFBRSxJQUFJO1FBQ2QsSUFBSSxFQUFFLElBQUk7S0FDWCxDQUFDOztxQ0FDYTtBQUdmO0lBREMsSUFBQSxnQkFBSSxFQUFDLEVBQUUsSUFBSSxFQUFFLGdCQUFLLENBQUMsUUFBUSxFQUFFLEdBQUcsRUFBRSx5QkFBVyxDQUFDLE1BQU0sRUFBRSxDQUFDOzt1Q0FDakM7QUFHdkI7SUFEQyxJQUFBLGdCQUFJLEVBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxnQkFBSyxDQUFDLFFBQVEsQ0FBQyxFQUFFLEdBQUcsRUFBRSx5QkFBVyxDQUFDLEtBQUssRUFBRSxDQUFDOzt1Q0FDbEM7QUF0QlosS0FBSztJQWhDakIsSUFBQSx3QkFBWSxFQUFDO1FBQ1osYUFBYSxFQUFFO1lBQ2IsVUFBVSxFQUFFLHlCQUFXLENBQUMsSUFBSTtTQUM3QjtLQUNGLENBQUM7SUFDRCxJQUFBLGlCQUFLLEVBQ0o7UUFDRSxTQUFTLEVBQUUsQ0FBQztLQUNiLEVBQ0Q7UUFDRSxVQUFVLEVBQUUsSUFBSTtRQUNoQixJQUFJLEVBQUUsV0FBVztLQUNsQixDQUNGO0lBRUEsSUFBQSxpQkFBSyxFQUNKO1FBQ0UsSUFBSSxFQUFFLENBQUM7UUFDUCxRQUFRLEVBQUUsQ0FBQztRQUNYLFFBQVEsRUFBRSxDQUFDO0tBQ1osRUFDRDtRQUNFLFVBQVUsRUFBRSxJQUFJO1FBQ2hCLElBQUksRUFBRSx1QkFBdUI7UUFDN0IsTUFBTSxFQUFFLElBQUk7UUFDWix1QkFBdUIsRUFBRTtZQUN2QixTQUFTLEVBQUUsS0FBSztZQUNoQixLQUFLLEVBQUUsU0FBUztTQUNqQjtLQUNGLENBQ0Y7R0FFWSxLQUFLLENBd0JqQjtBQXhCWSxzQkFBSztBQXlCTCxRQUFBLFVBQVUsR0FBRyxJQUFBLDRCQUFnQixFQUFDLEtBQUssQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2V0TW9kZWxGb3JDbGFzcywgaW5kZXgsIG1vZGVsT3B0aW9ucywgcHJvcCwgUmVmIH0gZnJvbSAnQHR5cGVnb29zZS90eXBlZ29vc2UnO1xyXG5pbXBvcnQgeyBUeXBlcyB9IGZyb20gJ21vbmdvb3NlJztcclxuaW1wb3J0IHsgQ09MTEVDVElPTlMgfSBmcm9tICcuLi8uLi8uLi9jb25zdGFudHMvY29sbGVjdGlvbnMnO1xyXG5pbXBvcnQgeyBBdXRob3IgfSBmcm9tICcuLi9hdXRob3IvbW9kZWxzJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kZWwgfSBmcm9tICcuLi9iYXNlLm1vZGVsJztcclxuaW1wb3J0IHsgR2VucmUgfSBmcm9tICcuLi9nZW5yZS9tb2RlbHMnO1xyXG5cclxuQG1vZGVsT3B0aW9ucyh7XHJcbiAgc2NoZW1hT3B0aW9uczoge1xyXG4gICAgY29sbGVjdGlvbjogQ09MTEVDVElPTlMuQk9PSyxcclxuICB9LFxyXG59KVxyXG5AaW5kZXgoXHJcbiAge1xyXG4gICAgaXNEZWxldGVkOiAxLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFja2dyb3VuZDogdHJ1ZSxcclxuICAgIG5hbWU6ICdpc0RlbGV0ZWQnLFxyXG4gIH0sXHJcbilcclxuXHJcbkBpbmRleChcclxuICB7XHJcbiAgICBuYW1lOiAxLFxyXG4gICAgYXV0aG9ySWQ6IDEsXHJcbiAgICBnZW5yZUlkczogMSxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhY2tncm91bmQ6IHRydWUsXHJcbiAgICBuYW1lOiAnbmFtZV9hdXRob3JJZF9nZW5yZUlkJyxcclxuICAgIHVuaXF1ZTogdHJ1ZSxcclxuICAgIHBhcnRpYWxGaWx0ZXJFeHByZXNzaW9uOiB7XHJcbiAgICAgIGlzRGVsZXRlZDogZmFsc2UsXHJcbiAgICAgICR0eXBlOiAnYm9vbGVhbicsXHJcbiAgICB9LFxyXG4gIH0sXHJcbilcclxuXHJcbmV4cG9ydCBjbGFzcyBCb29rcyBleHRlbmRzIENvbW1vbk1vZGVsIHtcclxuICBAcHJvcCh7XHJcbiAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgIHRyaW06IHRydWUsXHJcbiAgfSlcclxuICBuYW1lOiBzdHJpbmc7XHJcblxyXG4gIEBwcm9wKHtcclxuICAgIHRyaW06IHRydWVcclxuICB9KVxyXG4gIGRlc2NyaXB0aW9uOiBzdHJpbmc7XHJcblxyXG4gIEBwcm9wKHtcclxuICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgdHJpbTogdHJ1ZSxcclxuICB9KVxyXG4gIGltZ1VybDogc3RyaW5nO1xyXG5cclxuICBAcHJvcCh7IHR5cGU6IFR5cGVzLk9iamVjdElkLCByZWY6IENPTExFQ1RJT05TLkFVVEhPUiB9KVxyXG4gIGF1dGhvcklkPzogUmVmPEF1dGhvcj47XHJcblxyXG4gIEBwcm9wKHsgdHlwZTogW1R5cGVzLk9iamVjdElkXSwgcmVmOiBDT0xMRUNUSU9OUy5HRU5SRSB9KVxyXG4gIGdlbnJlSWRzOiBSZWY8R2VucmU+W107XHJcblxyXG59XHJcbmV4cG9ydCBjb25zdCBCb29rc01vZGVsID0gZ2V0TW9kZWxGb3JDbGFzcyhCb29rcyk7XHJcbiJdfQ==