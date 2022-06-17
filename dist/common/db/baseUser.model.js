"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommonUser = void 0;
const tslib_1 = require("tslib");
const typegoose_1 = require("@typegoose/typegoose");
const base_model_1 = require("./models/base.model");
let CommonUser = class CommonUser extends base_model_1.CommonModel {
};
tslib_1.__decorate([
    (0, typegoose_1.prop)({ trim: true }),
    tslib_1.__metadata("design:type", String)
], CommonUser.prototype, "firstName", void 0);
tslib_1.__decorate([
    (0, typegoose_1.prop)({ trim: true }),
    tslib_1.__metadata("design:type", String)
], CommonUser.prototype, "lastName", void 0);
tslib_1.__decorate([
    (0, typegoose_1.prop)({ trim: true }),
    tslib_1.__metadata("design:type", String)
], CommonUser.prototype, "imgUrl", void 0);
tslib_1.__decorate([
    (0, typegoose_1.prop)({ trim: true }),
    tslib_1.__metadata("design:type", String)
], CommonUser.prototype, "phoneNumber", void 0);
tslib_1.__decorate([
    (0, typegoose_1.prop)({ trim: true }),
    tslib_1.__metadata("design:type", String)
], CommonUser.prototype, "biography", void 0);
tslib_1.__decorate([
    (0, typegoose_1.prop)({ required: true, trim: true, minlength: 5 }),
    tslib_1.__metadata("design:type", String)
], CommonUser.prototype, "password", void 0);
CommonUser = tslib_1.__decorate([
    (0, typegoose_1.index)({
        isDeleted: 1,
    }, {
        background: true,
        name: 'isDeleted',
    }),
    (0, typegoose_1.index)({
        phoneNumber: 1,
    }, {
        unique: true,
        name: 'phoneNumber',
        background: true,
        partialFilterExpression: {
            isDeleted: false,
            $type: 'boolean',
        },
    }),
    (0, typegoose_1.index)({
        password: 1,
    }, {
        unique: true,
        name: 'password',
        background: true,
        partialFilterExpression: {
            isDeleted: false,
            $type: 'boolean',
        },
    })
], CommonUser);
exports.CommonUser = CommonUser;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZVVzZXIubW9kZWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29tbW9uL2RiL2Jhc2VVc2VyLm1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxvREFBbUQ7QUFDbkQsb0RBQWtEO0FBMENsRCxJQUFhLFVBQVUsR0FBdkIsTUFBYSxVQUFXLFNBQVEsd0JBQVc7Q0FrQjFDLENBQUE7QUFoQkM7SUFEQyxJQUFBLGdCQUFJLEVBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLENBQUM7OzZDQUNLO0FBRzFCO0lBREMsSUFBQSxnQkFBSSxFQUFDLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxDQUFDOzs0Q0FDSTtBQUd6QjtJQURDLElBQUEsZ0JBQUksRUFBQyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQzs7MENBQ0U7QUFHdkI7SUFEQyxJQUFBLGdCQUFJLEVBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLENBQUM7OytDQUNNO0FBRzNCO0lBREMsSUFBQSxnQkFBSSxFQUFDLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxDQUFDOzs2Q0FDSztBQUcxQjtJQURDLElBQUEsZ0JBQUksRUFBQyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsQ0FBQyxFQUFFLENBQUM7OzRDQUMzQjtBQWpCYixVQUFVO0lBeEN0QixJQUFBLGlCQUFLLEVBQ0o7UUFDRSxTQUFTLEVBQUUsQ0FBQztLQUNiLEVBQ0Q7UUFDRSxVQUFVLEVBQUUsSUFBSTtRQUNoQixJQUFJLEVBQUUsV0FBVztLQUNsQixDQUNGO0lBRUEsSUFBQSxpQkFBSyxFQUNKO1FBQ0UsV0FBVyxFQUFFLENBQUM7S0FDZixFQUNEO1FBQ0UsTUFBTSxFQUFFLElBQUk7UUFDWixJQUFJLEVBQUUsYUFBYTtRQUNuQixVQUFVLEVBQUUsSUFBSTtRQUNoQix1QkFBdUIsRUFBRTtZQUN2QixTQUFTLEVBQUUsS0FBSztZQUNoQixLQUFLLEVBQUUsU0FBUztTQUNqQjtLQUNGLENBQ0Y7SUFFQSxJQUFBLGlCQUFLLEVBQ0o7UUFDRSxRQUFRLEVBQUUsQ0FBQztLQUNaLEVBQ0Q7UUFDRSxNQUFNLEVBQUUsSUFBSTtRQUNaLElBQUksRUFBRSxVQUFVO1FBQ2hCLFVBQVUsRUFBRSxJQUFJO1FBQ2hCLHVCQUF1QixFQUFFO1lBQ3ZCLFNBQVMsRUFBRSxLQUFLO1lBQ2hCLEtBQUssRUFBRSxTQUFTO1NBQ2pCO0tBQ0YsQ0FDRjtHQUVZLFVBQVUsQ0FrQnRCO0FBbEJZLGdDQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaW5kZXgsIHByb3AgfSBmcm9tICdAdHlwZWdvb3NlL3R5cGVnb29zZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZGVsIH0gZnJvbSAnLi9tb2RlbHMvYmFzZS5tb2RlbCc7XHJcblxyXG5AaW5kZXgoXHJcbiAge1xyXG4gICAgaXNEZWxldGVkOiAxLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFja2dyb3VuZDogdHJ1ZSxcclxuICAgIG5hbWU6ICdpc0RlbGV0ZWQnLFxyXG4gIH0sXHJcbilcclxuXHJcbkBpbmRleChcclxuICB7XHJcbiAgICBwaG9uZU51bWJlcjogMSxcclxuICB9LFxyXG4gIHtcclxuICAgIHVuaXF1ZTogdHJ1ZSxcclxuICAgIG5hbWU6ICdwaG9uZU51bWJlcicsXHJcbiAgICBiYWNrZ3JvdW5kOiB0cnVlLFxyXG4gICAgcGFydGlhbEZpbHRlckV4cHJlc3Npb246IHtcclxuICAgICAgaXNEZWxldGVkOiBmYWxzZSxcclxuICAgICAgJHR5cGU6ICdib29sZWFuJyxcclxuICAgIH0sXHJcbiAgfSxcclxuKVxyXG5cclxuQGluZGV4KFxyXG4gIHtcclxuICAgIHBhc3N3b3JkOiAxLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdW5pcXVlOiB0cnVlLFxyXG4gICAgbmFtZTogJ3Bhc3N3b3JkJyxcclxuICAgIGJhY2tncm91bmQ6IHRydWUsXHJcbiAgICBwYXJ0aWFsRmlsdGVyRXhwcmVzc2lvbjoge1xyXG4gICAgICBpc0RlbGV0ZWQ6IGZhbHNlLFxyXG4gICAgICAkdHlwZTogJ2Jvb2xlYW4nLFxyXG4gICAgfSxcclxuICB9LFxyXG4pXHJcblxyXG5leHBvcnQgY2xhc3MgQ29tbW9uVXNlciBleHRlbmRzIENvbW1vbk1vZGVsIHtcclxuICBAcHJvcCh7IHRyaW06IHRydWUgfSlcclxuICBwdWJsaWMgZmlyc3ROYW1lITogc3RyaW5nO1xyXG5cclxuICBAcHJvcCh7IHRyaW06IHRydWUgfSlcclxuICBwdWJsaWMgbGFzdE5hbWU/OiBzdHJpbmc7XHJcblxyXG4gIEBwcm9wKHsgdHJpbTogdHJ1ZSB9KVxyXG4gIHB1YmxpYyBpbWdVcmw/OiBzdHJpbmc7XHJcblxyXG4gIEBwcm9wKHsgdHJpbTogdHJ1ZSB9KVxyXG4gIHB1YmxpYyBwaG9uZU51bWJlcjogc3RyaW5nO1xyXG5cclxuICBAcHJvcCh7IHRyaW06IHRydWUgfSlcclxuICBwdWJsaWMgYmlvZ3JhcGh5Pzogc3RyaW5nO1xyXG5cclxuICBAcHJvcCh7IHJlcXVpcmVkOiB0cnVlLCB0cmltOiB0cnVlLCBtaW5sZW5ndGg6IDUgfSlcclxuICBwdWJsaWMgcGFzc3dvcmQ6IHN0cmluZztcclxufVxyXG4iXX0=