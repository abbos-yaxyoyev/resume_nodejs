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
tslib_1.__decorate([
    (0, typegoose_1.prop)({ trim: true, }),
    tslib_1.__metadata("design:type", String)
], Author.prototype, "biography", void 0);
tslib_1.__decorate([
    (0, typegoose_1.prop)({ required: true, }),
    tslib_1.__metadata("design:type", Date)
], Author.prototype, "dateOfbirth", void 0);
tslib_1.__decorate([
    (0, typegoose_1.prop)({}),
    tslib_1.__metadata("design:type", Date)
], Author.prototype, "dateOfdeath", void 0);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kZWxzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL2NvbW1vbi9kYi9tb2RlbHMvYXV0aG9yL21vZGVscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsb0RBQTZGO0FBQzdGLGdFQUE2RDtBQUM3RCw4Q0FBNEM7QUF1QjVDLElBQWEsTUFBTSxHQUFuQixNQUFhLE1BQU8sU0FBUSx3QkFBVztDQWtCdEMsQ0FBQTtBQWJDO0lBSkMsSUFBQSxnQkFBSSxFQUFDO1FBQ0osUUFBUSxFQUFFLElBQUk7UUFDZCxJQUFJLEVBQUUsSUFBSTtLQUNYLENBQUM7O3dDQUNlO0FBR2pCO0lBREMsSUFBQSxnQkFBSSxFQUFDLEVBQUUsSUFBSSxFQUFFLElBQUksR0FBRyxDQUFDOztzQ0FDUDtBQUdmO0lBREMsSUFBQSxnQkFBSSxFQUFDLEVBQUUsSUFBSSxFQUFFLElBQUksR0FBRyxDQUFDOzt5Q0FDSDtBQUduQjtJQURDLElBQUEsZ0JBQUksRUFBQyxFQUFFLFFBQVEsRUFBRSxJQUFJLEdBQUcsQ0FBQztzQ0FDYixJQUFJOzJDQUFDO0FBR2xCO0lBREMsSUFBQSxnQkFBSSxFQUFDLEVBQUUsQ0FBQztzQ0FDSyxJQUFJOzJDQUFDO0FBakJSLE1BQU07SUFyQmxCLElBQUEsd0JBQVksRUFBQztRQUNaLGFBQWEsRUFBRTtZQUNiLFVBQVUsRUFBRSx5QkFBVyxDQUFDLE1BQU07U0FDL0I7UUFDRCxPQUFPLEVBQUU7WUFDUCxVQUFVLEVBQUUsb0JBQVEsQ0FBQyxLQUFLO1NBQzNCO0tBQ0YsQ0FBQztJQUVELElBQUEsaUJBQUssRUFDSjtRQUNFLFFBQVEsRUFBRSxDQUFDO1FBQ1gsU0FBUyxFQUFFLENBQUM7UUFDWixXQUFXLEVBQUUsQ0FBQztLQUNmLEVBQ0Q7UUFDRSxVQUFVLEVBQUUsSUFBSTtRQUNoQixJQUFJLEVBQUUsZ0NBQWdDO0tBQ3ZDLENBQ0Y7R0FFWSxNQUFNLENBa0JsQjtBQWxCWSx3QkFBTTtBQW1CTixRQUFBLFdBQVcsR0FBRyxJQUFBLDRCQUFnQixFQUFDLE1BQU0sQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2V0TW9kZWxGb3JDbGFzcywgaW5kZXgsIG1vZGVsT3B0aW9ucywgcHJvcCwgU2V2ZXJpdHkgfSBmcm9tICdAdHlwZWdvb3NlL3R5cGVnb29zZSc7XHJcbmltcG9ydCB7IENPTExFQ1RJT05TIH0gZnJvbSAnLi4vLi4vLi4vY29uc3RhbnRzL2NvbGxlY3Rpb25zJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kZWwgfSBmcm9tICcuLi9iYXNlLm1vZGVsJztcclxuXHJcbkBtb2RlbE9wdGlvbnMoe1xyXG4gIHNjaGVtYU9wdGlvbnM6IHtcclxuICAgIGNvbGxlY3Rpb246IENPTExFQ1RJT05TLkFVVEhPUixcclxuICB9LFxyXG4gIG9wdGlvbnM6IHtcclxuICAgIGFsbG93TWl4ZWQ6IFNldmVyaXR5LkFMTE9XLFxyXG4gIH0sXHJcbn0pXHJcblxyXG5AaW5kZXgoXHJcbiAge1xyXG4gICAgZnVsbE5hbWU6IDEsXHJcbiAgICBpc0RlbGV0ZWQ6IDEsXHJcbiAgICBkYXRlT2ZiaXJ0aDogMSxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhY2tncm91bmQ6IHRydWUsXHJcbiAgICBuYW1lOiAnZnVsbE5hbWVfaXNEZWxldGVkX2RhdGVPZmJpcnRoJyxcclxuICB9LFxyXG4pXHJcblxyXG5leHBvcnQgY2xhc3MgQXV0aG9yIGV4dGVuZHMgQ29tbW9uTW9kZWwge1xyXG4gIEBwcm9wKHtcclxuICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgdHJpbTogdHJ1ZSxcclxuICB9KVxyXG4gIGZ1bGxOYW1lOiBzdHJpbmc7XHJcblxyXG4gIEBwcm9wKHsgdHJpbTogdHJ1ZSwgfSlcclxuICBpbWdVcmw6IHN0cmluZztcclxuXHJcbiAgQHByb3AoeyB0cmltOiB0cnVlLCB9KVxyXG4gIGJpb2dyYXBoeT86IHN0cmluZztcclxuXHJcbiAgQHByb3AoeyByZXF1aXJlZDogdHJ1ZSwgfSlcclxuICBkYXRlT2ZiaXJ0aDogRGF0ZTtcclxuXHJcbiAgQHByb3Aoe30pXHJcbiAgZGF0ZU9mZGVhdGg/OiBEYXRlO1xyXG59XHJcbmV4cG9ydCBjb25zdCBBdXRob3JNb2RlbCA9IGdldE1vZGVsRm9yQ2xhc3MoQXV0aG9yKTtcclxuIl19