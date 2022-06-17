"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeModel = exports.Employee = void 0;
const tslib_1 = require("tslib");
const typegoose_1 = require("@typegoose/typegoose");
const mongoose_1 = require("mongoose");
const collections_1 = require("../../../constants/collections");
const baseUser_model_1 = require("../../baseUser.model");
let Employee = class Employee extends baseUser_model_1.CommonUser {
};
tslib_1.__decorate([
    (0, typegoose_1.prop)({
        required: true,
        type: mongoose_1.Types.ObjectId,
        ref: collections_1.COLLECTIONS.ROLE,
    }),
    tslib_1.__metadata("design:type", Object)
], Employee.prototype, "roleId", void 0);
Employee = tslib_1.__decorate([
    (0, typegoose_1.modelOptions)({
        schemaOptions: {
            collection: collections_1.COLLECTIONS.EMPLOYEE,
        },
    }),
    (0, typegoose_1.index)({
        roleId: 1,
    }, {
        background: true,
        name: 'roleId',
    })
], Employee);
exports.Employee = Employee;
exports.EmployeeModel = (0, typegoose_1.getModelForClass)(Employee);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kZWxzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL2NvbW1vbi9kYi9tb2RlbHMvZW1wbG95ZWUvbW9kZWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxvREFBd0Y7QUFDeEYsdUNBQWlDO0FBQ2pDLGdFQUE2RDtBQUM3RCx5REFBa0Q7QUFtQmxELElBQWEsUUFBUSxHQUFyQixNQUFhLFFBQVMsU0FBUSwyQkFBVTtDQU92QyxDQUFBO0FBREM7SUFMQyxJQUFBLGdCQUFJLEVBQUM7UUFDSixRQUFRLEVBQUUsSUFBSTtRQUNkLElBQUksRUFBRSxnQkFBSyxDQUFDLFFBQVE7UUFDcEIsR0FBRyxFQUFFLHlCQUFXLENBQUMsSUFBSTtLQUN0QixDQUFDOzt3Q0FDZ0I7QUFOUCxRQUFRO0lBaEJwQixJQUFBLHdCQUFZLEVBQUM7UUFDWixhQUFhLEVBQUU7WUFDYixVQUFVLEVBQUUseUJBQVcsQ0FBQyxRQUFRO1NBQ2pDO0tBQ0YsQ0FBQztJQUVELElBQUEsaUJBQUssRUFDSjtRQUNFLE1BQU0sRUFBRSxDQUFDO0tBQ1YsRUFDRDtRQUNFLFVBQVUsRUFBRSxJQUFJO1FBQ2hCLElBQUksRUFBRSxRQUFRO0tBQ2YsQ0FDRjtHQUVZLFFBQVEsQ0FPcEI7QUFQWSw0QkFBUTtBQVNSLFFBQUEsYUFBYSxHQUFHLElBQUEsNEJBQWdCLEVBQUMsUUFBUSxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnZXRNb2RlbEZvckNsYXNzLCBpbmRleCwgbW9kZWxPcHRpb25zLCBwcm9wLCBSZWYgfSBmcm9tICdAdHlwZWdvb3NlL3R5cGVnb29zZSc7XHJcbmltcG9ydCB7IFR5cGVzIH0gZnJvbSAnbW9uZ29vc2UnO1xyXG5pbXBvcnQgeyBDT0xMRUNUSU9OUyB9IGZyb20gJy4uLy4uLy4uL2NvbnN0YW50cy9jb2xsZWN0aW9ucyc7XHJcbmltcG9ydCB7IENvbW1vblVzZXIgfSBmcm9tICcuLi8uLi9iYXNlVXNlci5tb2RlbCc7XHJcbmltcG9ydCB7IFJvbGUgfSBmcm9tICcuL3JvbGUvbW9kZWxzJztcclxuXHJcbkBtb2RlbE9wdGlvbnMoe1xyXG4gIHNjaGVtYU9wdGlvbnM6IHtcclxuICAgIGNvbGxlY3Rpb246IENPTExFQ1RJT05TLkVNUExPWUVFLFxyXG4gIH0sXHJcbn0pXHJcblxyXG5AaW5kZXgoXHJcbiAge1xyXG4gICAgcm9sZUlkOiAxLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFja2dyb3VuZDogdHJ1ZSxcclxuICAgIG5hbWU6ICdyb2xlSWQnLFxyXG4gIH0sXHJcbilcclxuXHJcbmV4cG9ydCBjbGFzcyBFbXBsb3llZSBleHRlbmRzIENvbW1vblVzZXIge1xyXG4gIEBwcm9wKHtcclxuICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgdHlwZTogVHlwZXMuT2JqZWN0SWQsXHJcbiAgICByZWY6IENPTExFQ1RJT05TLlJPTEUsXHJcbiAgfSlcclxuICByb2xlSWQ6IFJlZjxSb2xlPjtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEVtcGxveWVlTW9kZWwgPSBnZXRNb2RlbEZvckNsYXNzKEVtcGxveWVlKTtcclxuIl19