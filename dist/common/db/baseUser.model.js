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
], CommonUser.prototype, "fullName", void 0);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZVVzZXIubW9kZWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29tbW9uL2RiL2Jhc2VVc2VyLm1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxvREFBbUQ7QUFDbkQsb0RBQWtEO0FBMkJsRCxJQUFhLFVBQVUsR0FBdkIsTUFBYSxVQUFXLFNBQVEsd0JBQVc7Q0FNMUMsQ0FBQTtBQUpDO0lBREMsSUFBQSxnQkFBSSxFQUFDLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxDQUFDOzs0Q0FDSTtBQUd6QjtJQURDLElBQUEsZ0JBQUksRUFBQyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsQ0FBQyxFQUFFLENBQUM7OzRDQUMzQjtBQUxiLFVBQVU7SUF6QnRCLElBQUEsaUJBQUssRUFDSjtRQUNFLFNBQVMsRUFBRSxDQUFDO0tBQ2IsRUFDRDtRQUNFLFVBQVUsRUFBRSxJQUFJO1FBQ2hCLElBQUksRUFBRSxXQUFXO0tBQ2xCLENBQ0Y7SUFFQSxJQUFBLGlCQUFLLEVBQ0o7UUFDRSxRQUFRLEVBQUUsQ0FBQztLQUNaLEVBQ0Q7UUFDRSxNQUFNLEVBQUUsSUFBSTtRQUNaLElBQUksRUFBRSxVQUFVO1FBQ2hCLFVBQVUsRUFBRSxJQUFJO1FBQ2hCLHVCQUF1QixFQUFFO1lBQ3ZCLFNBQVMsRUFBRSxLQUFLO1lBQ2hCLEtBQUssRUFBRSxTQUFTO1NBQ2pCO0tBQ0YsQ0FDRjtHQUVZLFVBQVUsQ0FNdEI7QUFOWSxnQ0FBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGluZGV4LCBwcm9wIH0gZnJvbSAnQHR5cGVnb29zZS90eXBlZ29vc2UnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2RlbCB9IGZyb20gJy4vbW9kZWxzL2Jhc2UubW9kZWwnO1xyXG5cclxuQGluZGV4KFxyXG4gIHtcclxuICAgIGlzRGVsZXRlZDogMSxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhY2tncm91bmQ6IHRydWUsXHJcbiAgICBuYW1lOiAnaXNEZWxldGVkJyxcclxuICB9LFxyXG4pXHJcblxyXG5AaW5kZXgoXHJcbiAge1xyXG4gICAgcGFzc3dvcmQ6IDEsXHJcbiAgfSxcclxuICB7XHJcbiAgICB1bmlxdWU6IHRydWUsXHJcbiAgICBuYW1lOiAncGFzc3dvcmQnLFxyXG4gICAgYmFja2dyb3VuZDogdHJ1ZSxcclxuICAgIHBhcnRpYWxGaWx0ZXJFeHByZXNzaW9uOiB7XHJcbiAgICAgIGlzRGVsZXRlZDogZmFsc2UsXHJcbiAgICAgICR0eXBlOiAnYm9vbGVhbicsXHJcbiAgICB9LFxyXG4gIH0sXHJcbilcclxuXHJcbmV4cG9ydCBjbGFzcyBDb21tb25Vc2VyIGV4dGVuZHMgQ29tbW9uTW9kZWwge1xyXG4gIEBwcm9wKHsgdHJpbTogdHJ1ZSB9KVxyXG4gIHB1YmxpYyBmdWxsTmFtZSE6IHN0cmluZztcclxuXHJcbiAgQHByb3AoeyByZXF1aXJlZDogdHJ1ZSwgdHJpbTogdHJ1ZSwgbWlubGVuZ3RoOiA1IH0pXHJcbiAgcHVibGljIHBhc3N3b3JkOiBzdHJpbmc7XHJcbn1cclxuIl19