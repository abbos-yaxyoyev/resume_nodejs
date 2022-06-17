"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetPagingDto = exports.CommonDto = exports.CommonDtoGroup = void 0;
const tslib_1 = require("tslib");
const class_validator_1 = require("class-validator");
class CommonDtoGroup {
}
exports.CommonDtoGroup = CommonDtoGroup;
CommonDtoGroup.CREATE = 'create';
CommonDtoGroup.UPDATE = 'update';
CommonDtoGroup.DELETE = 'delete';
CommonDtoGroup.GET_BY_ID = 'getById';
CommonDtoGroup.NUMBER = 'number';
CommonDtoGroup.PAGENATION = 'pagination';
CommonDtoGroup.SET_STATE = 'state';
CommonDtoGroup.POSITION = 'position';
CommonDtoGroup.CREATE_WEB = 'web';
class CommonDto {
}
tslib_1.__decorate([
    (0, class_validator_1.IsOptional)({ groups: [CommonDtoGroup.PAGENATION] }),
    (0, class_validator_1.IsMongoId)({
        groups: [
            CommonDtoGroup.UPDATE,
            CommonDtoGroup.DELETE,
            CommonDtoGroup.GET_BY_ID,
            CommonDtoGroup.SET_STATE,
            CommonDtoGroup.PAGENATION,
            CommonDtoGroup.POSITION
        ],
    }),
    tslib_1.__metadata("design:type", String)
], CommonDto.prototype, "_id", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsOptional)({ groups: [CommonDtoGroup.CREATE] }),
    (0, class_validator_1.IsMongoId)({ groups: [CommonDtoGroup.CREATE] }),
    tslib_1.__metadata("design:type", String)
], CommonDto.prototype, "createdBy", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsOptional)({ groups: [CommonDtoGroup.UPDATE] }),
    (0, class_validator_1.IsMongoId)({ groups: [CommonDtoGroup.UPDATE] }),
    tslib_1.__metadata("design:type", String)
], CommonDto.prototype, "updatedBy", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsOptional)({ groups: [CommonDtoGroup.DELETE] }),
    (0, class_validator_1.IsMongoId)({ groups: [CommonDtoGroup.DELETE] }),
    tslib_1.__metadata("design:type", String)
], CommonDto.prototype, "deletedBy", void 0);
exports.CommonDto = CommonDto;
class GetPagingDto {
}
exports.GetPagingDto = GetPagingDto;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uLmR0by5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21tb24vdmFsaWRhdGlvbi9jb21tb24uZHRvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxxREFBd0Q7QUFDeEQsTUFBYSxjQUFjOztBQUEzQix3Q0FVQztBQVRRLHFCQUFNLEdBQUcsUUFBUSxDQUFDO0FBQ2xCLHFCQUFNLEdBQUcsUUFBUSxDQUFDO0FBQ2xCLHFCQUFNLEdBQUcsUUFBUSxDQUFDO0FBQ2xCLHdCQUFTLEdBQUcsU0FBUyxDQUFDO0FBQ3RCLHFCQUFNLEdBQUcsUUFBUSxDQUFDO0FBQ2xCLHlCQUFVLEdBQUcsWUFBWSxDQUFDO0FBQzFCLHdCQUFTLEdBQUcsT0FBTyxDQUFDO0FBQ3BCLHVCQUFRLEdBQUcsVUFBVSxDQUFDO0FBQ3RCLHlCQUFVLEdBQUcsS0FBSyxDQUFDO0FBRzVCLE1BQWEsU0FBUztDQTJCckI7QUFmQztJQVhDLElBQUEsNEJBQVUsRUFBQyxFQUFFLE1BQU0sRUFBRSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDO0lBQ25ELElBQUEsMkJBQVMsRUFBQztRQUNULE1BQU0sRUFBRTtZQUNOLGNBQWMsQ0FBQyxNQUFNO1lBQ3JCLGNBQWMsQ0FBQyxNQUFNO1lBQ3JCLGNBQWMsQ0FBQyxTQUFTO1lBQ3hCLGNBQWMsQ0FBQyxTQUFTO1lBQ3hCLGNBQWMsQ0FBQyxVQUFVO1lBQ3pCLGNBQWMsQ0FBQyxRQUFRO1NBQ3hCO0tBQ0YsQ0FBQzs7c0NBQ1U7QUFJWjtJQUZDLElBQUEsNEJBQVUsRUFBQyxFQUFFLE1BQU0sRUFBRSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDO0lBQy9DLElBQUEsMkJBQVMsRUFBQyxFQUFFLE1BQU0sRUFBRSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDOzs0Q0FDN0I7QUFJbEI7SUFGQyxJQUFBLDRCQUFVLEVBQUMsRUFBRSxNQUFNLEVBQUUsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQztJQUMvQyxJQUFBLDJCQUFTLEVBQUMsRUFBRSxNQUFNLEVBQUUsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQzs7NENBQzdCO0FBSWxCO0lBRkMsSUFBQSw0QkFBVSxFQUFDLEVBQUUsTUFBTSxFQUFFLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUM7SUFDL0MsSUFBQSwyQkFBUyxFQUFDLEVBQUUsTUFBTSxFQUFFLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUM7OzRDQUM3QjtBQXhCcEIsOEJBMkJDO0FBRUQsTUFBYSxZQUFZO0NBQUk7QUFBN0Isb0NBQTZCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSXNNb25nb0lkLCBJc09wdGlvbmFsIH0gZnJvbSAnY2xhc3MtdmFsaWRhdG9yJztcclxuZXhwb3J0IGNsYXNzIENvbW1vbkR0b0dyb3VwIHtcclxuICBzdGF0aWMgQ1JFQVRFID0gJ2NyZWF0ZSc7XHJcbiAgc3RhdGljIFVQREFURSA9ICd1cGRhdGUnO1xyXG4gIHN0YXRpYyBERUxFVEUgPSAnZGVsZXRlJztcclxuICBzdGF0aWMgR0VUX0JZX0lEID0gJ2dldEJ5SWQnO1xyXG4gIHN0YXRpYyBOVU1CRVIgPSAnbnVtYmVyJztcclxuICBzdGF0aWMgUEFHRU5BVElPTiA9ICdwYWdpbmF0aW9uJztcclxuICBzdGF0aWMgU0VUX1NUQVRFID0gJ3N0YXRlJztcclxuICBzdGF0aWMgUE9TSVRJT04gPSAncG9zaXRpb24nO1xyXG4gIHN0YXRpYyBDUkVBVEVfV0VCID0gJ3dlYic7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBDb21tb25EdG8ge1xyXG4gIEBJc09wdGlvbmFsKHsgZ3JvdXBzOiBbQ29tbW9uRHRvR3JvdXAuUEFHRU5BVElPTl0gfSlcclxuICBASXNNb25nb0lkKHtcclxuICAgIGdyb3VwczogW1xyXG4gICAgICBDb21tb25EdG9Hcm91cC5VUERBVEUsXHJcbiAgICAgIENvbW1vbkR0b0dyb3VwLkRFTEVURSxcclxuICAgICAgQ29tbW9uRHRvR3JvdXAuR0VUX0JZX0lELFxyXG4gICAgICBDb21tb25EdG9Hcm91cC5TRVRfU1RBVEUsXHJcbiAgICAgIENvbW1vbkR0b0dyb3VwLlBBR0VOQVRJT04sXHJcbiAgICAgIENvbW1vbkR0b0dyb3VwLlBPU0lUSU9OXHJcbiAgICBdLFxyXG4gIH0pXHJcbiAgX2lkOiBzdHJpbmc7XHJcblxyXG4gIEBJc09wdGlvbmFsKHsgZ3JvdXBzOiBbQ29tbW9uRHRvR3JvdXAuQ1JFQVRFXSB9KVxyXG4gIEBJc01vbmdvSWQoeyBncm91cHM6IFtDb21tb25EdG9Hcm91cC5DUkVBVEVdIH0pXHJcbiAgY3JlYXRlZEJ5OiBzdHJpbmc7XHJcblxyXG4gIEBJc09wdGlvbmFsKHsgZ3JvdXBzOiBbQ29tbW9uRHRvR3JvdXAuVVBEQVRFXSB9KVxyXG4gIEBJc01vbmdvSWQoeyBncm91cHM6IFtDb21tb25EdG9Hcm91cC5VUERBVEVdIH0pXHJcbiAgdXBkYXRlZEJ5OiBzdHJpbmc7XHJcblxyXG4gIEBJc09wdGlvbmFsKHsgZ3JvdXBzOiBbQ29tbW9uRHRvR3JvdXAuREVMRVRFXSB9KVxyXG4gIEBJc01vbmdvSWQoeyBncm91cHM6IFtDb21tb25EdG9Hcm91cC5ERUxFVEVdIH0pXHJcbiAgZGVsZXRlZEJ5OiBzdHJpbmc7XHJcblxyXG4gIGlzRGVsZXRlZD86IGJvb2xlYW47XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBHZXRQYWdpbmdEdG8geyB9XHJcbiJdfQ==