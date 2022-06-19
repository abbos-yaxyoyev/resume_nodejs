"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookGetDto = exports.BookDto = exports.BookDtoGroup = void 0;
const tslib_1 = require("tslib");
const class_validator_1 = require("class-validator");
const mongoose_1 = require("mongoose");
const common_dto_1 = require("../../common.dto");
const paging_dto_1 = require("../paging.dto");
class BookDtoGroup extends common_dto_1.CommonDtoGroup {
}
exports.BookDtoGroup = BookDtoGroup;
BookDtoGroup.BARCODE = 'barcode';
BookDtoGroup.BOOKIDS = 'bookIds';
class BookDto extends common_dto_1.CommonDto {
}
tslib_1.__decorate([
    (0, class_validator_1.IsOptional)({ groups: [BookDtoGroup.UPDATE] }),
    (0, class_validator_1.IsString)({ groups: [BookDtoGroup.CREATE, BookDtoGroup.UPDATE] }),
    tslib_1.__metadata("design:type", String)
], BookDto.prototype, "name", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsOptional)({ groups: [BookDtoGroup.UPDATE] }),
    (0, class_validator_1.IsString)({ groups: [BookDtoGroup.CREATE, BookDtoGroup.UPDATE] }),
    tslib_1.__metadata("design:type", String)
], BookDto.prototype, "imgUrl", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsOptional)({ groups: [BookDtoGroup.CREATE, BookDtoGroup.UPDATE] }),
    (0, class_validator_1.ValidateIf)((data, value) => value != null),
    (0, class_validator_1.IsMongoId)({ groups: [BookDtoGroup.CREATE, BookDtoGroup.UPDATE] }),
    tslib_1.__metadata("design:type", String)
], BookDto.prototype, "authorId", void 0);
tslib_1.__decorate([
    (0, class_validator_1.ValidateIf)((data, value) => value != null),
    (0, class_validator_1.IsMongoId)({ groups: [BookDtoGroup.CREATE,] }),
    tslib_1.__metadata("design:type", mongoose_1.Types.ObjectId)
], BookDto.prototype, "categoryId", void 0);
exports.BookDto = BookDto;
class BookGetDto extends paging_dto_1.PagingDto {
}
tslib_1.__decorate([
    (0, class_validator_1.IsOptional)({ groups: [BookDtoGroup.PAGENATION] }),
    (0, class_validator_1.IsMongoId)({ groups: [BookDtoGroup.PAGENATION] }),
    tslib_1.__metadata("design:type", mongoose_1.Types.ObjectId)
], BookGetDto.prototype, "authorId", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsOptional)({ groups: [BookDtoGroup.PAGENATION] }),
    (0, class_validator_1.IsMongoId)({ groups: [BookDtoGroup.PAGENATION] }),
    tslib_1.__metadata("design:type", mongoose_1.Types.ObjectId)
], BookGetDto.prototype, "categoryId", void 0);
exports.BookGetDto = BookGetDto;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9vay5kdG8uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvY29tbW9uL3ZhbGlkYXRpb24vZHRvL2Jvb2svYm9vay5kdG8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLHFEQUd5QjtBQUN6Qix1Q0FBaUM7QUFDakMsaURBQTZEO0FBQzdELDhDQUEwQztBQUUxQyxNQUFhLFlBQWEsU0FBUSwyQkFBYzs7QUFBaEQsb0NBR0M7QUFGUSxvQkFBTyxHQUFHLFNBQVMsQ0FBQztBQUNwQixvQkFBTyxHQUFHLFNBQVMsQ0FBQztBQUU3QixNQUFhLE9BQVEsU0FBUSxzQkFBUztDQW1CckM7QUFmQztJQUZDLElBQUEsNEJBQVUsRUFBQyxFQUFFLE1BQU0sRUFBRSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDO0lBQzdDLElBQUEsMEJBQVEsRUFBQyxFQUFFLE1BQU0sRUFBRSxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUUsWUFBWSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUM7O3FDQUNwRDtBQUliO0lBRkMsSUFBQSw0QkFBVSxFQUFDLEVBQUUsTUFBTSxFQUFFLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUM7SUFDN0MsSUFBQSwwQkFBUSxFQUFDLEVBQUUsTUFBTSxFQUFFLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRSxZQUFZLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQzs7dUNBQ2xEO0FBS2Y7SUFIQyxJQUFBLDRCQUFVLEVBQUMsRUFBRSxNQUFNLEVBQUUsQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFLFlBQVksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDO0lBQ2xFLElBQUEsNEJBQVUsRUFBQyxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsRUFBRSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUM7SUFDMUMsSUFBQSwyQkFBUyxFQUFDLEVBQUUsTUFBTSxFQUFFLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRSxZQUFZLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQzs7eUNBQ2pEO0FBSWpCO0lBRkMsSUFBQSw0QkFBVSxFQUFDLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxFQUFFLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQztJQUMxQyxJQUFBLDJCQUFTLEVBQUMsRUFBRSxNQUFNLEVBQUUsQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQztzQ0FDbEMsZ0JBQUssQ0FBQyxRQUFROzJDQUFDO0FBakI3QiwwQkFtQkM7QUFFRCxNQUFhLFVBQVcsU0FBUSxzQkFBUztDQVF4QztBQUxDO0lBRkMsSUFBQSw0QkFBVSxFQUFDLEVBQUUsTUFBTSxFQUFFLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUM7SUFDakQsSUFBQSwyQkFBUyxFQUFDLEVBQUUsTUFBTSxFQUFFLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUM7c0NBQ3ZDLGdCQUFLLENBQUMsUUFBUTs0Q0FBQztBQUl6QjtJQUZDLElBQUEsNEJBQVUsRUFBQyxFQUFFLE1BQU0sRUFBRSxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDO0lBQ2pELElBQUEsMkJBQVMsRUFBQyxFQUFFLE1BQU0sRUFBRSxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDO3NDQUNyQyxnQkFBSyxDQUFDLFFBQVE7OENBQUM7QUFQN0IsZ0NBUUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIElzTW9uZ29JZCwgSXNPcHRpb25hbCxcclxuICBJc1N0cmluZywgVmFsaWRhdGVJZlxyXG59IGZyb20gJ2NsYXNzLXZhbGlkYXRvcic7XHJcbmltcG9ydCB7IFR5cGVzIH0gZnJvbSAnbW9uZ29vc2UnO1xyXG5pbXBvcnQgeyBDb21tb25EdG8sIENvbW1vbkR0b0dyb3VwIH0gZnJvbSAnLi4vLi4vY29tbW9uLmR0byc7XHJcbmltcG9ydCB7IFBhZ2luZ0R0byB9IGZyb20gJy4uL3BhZ2luZy5kdG8nO1xyXG5cclxuZXhwb3J0IGNsYXNzIEJvb2tEdG9Hcm91cCBleHRlbmRzIENvbW1vbkR0b0dyb3VwIHtcclxuICBzdGF0aWMgQkFSQ09ERSA9ICdiYXJjb2RlJztcclxuICBzdGF0aWMgQk9PS0lEUyA9ICdib29rSWRzJztcclxufVxyXG5leHBvcnQgY2xhc3MgQm9va0R0byBleHRlbmRzIENvbW1vbkR0byB7XHJcblxyXG4gIEBJc09wdGlvbmFsKHsgZ3JvdXBzOiBbQm9va0R0b0dyb3VwLlVQREFURV0gfSlcclxuICBASXNTdHJpbmcoeyBncm91cHM6IFtCb29rRHRvR3JvdXAuQ1JFQVRFLCBCb29rRHRvR3JvdXAuVVBEQVRFXSB9KVxyXG4gIG5hbWU6IHN0cmluZztcclxuXHJcbiAgQElzT3B0aW9uYWwoeyBncm91cHM6IFtCb29rRHRvR3JvdXAuVVBEQVRFXSB9KVxyXG4gIEBJc1N0cmluZyh7IGdyb3VwczogW0Jvb2tEdG9Hcm91cC5DUkVBVEUsIEJvb2tEdG9Hcm91cC5VUERBVEVdIH0pXHJcbiAgaW1nVXJsOiBzdHJpbmc7XHJcblxyXG4gIEBJc09wdGlvbmFsKHsgZ3JvdXBzOiBbQm9va0R0b0dyb3VwLkNSRUFURSwgQm9va0R0b0dyb3VwLlVQREFURV0gfSlcclxuICBAVmFsaWRhdGVJZigoZGF0YSwgdmFsdWUpID0+IHZhbHVlICE9IG51bGwpXHJcbiAgQElzTW9uZ29JZCh7IGdyb3VwczogW0Jvb2tEdG9Hcm91cC5DUkVBVEUsIEJvb2tEdG9Hcm91cC5VUERBVEVdIH0pXHJcbiAgYXV0aG9ySWQ6IHN0cmluZztcclxuXHJcbiAgQFZhbGlkYXRlSWYoKGRhdGEsIHZhbHVlKSA9PiB2YWx1ZSAhPSBudWxsKVxyXG4gIEBJc01vbmdvSWQoeyBncm91cHM6IFtCb29rRHRvR3JvdXAuQ1JFQVRFLF0gfSlcclxuICBjYXRlZ29yeUlkOiBUeXBlcy5PYmplY3RJZDtcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBCb29rR2V0RHRvIGV4dGVuZHMgUGFnaW5nRHRvIHtcclxuICBASXNPcHRpb25hbCh7IGdyb3VwczogW0Jvb2tEdG9Hcm91cC5QQUdFTkFUSU9OXSB9KVxyXG4gIEBJc01vbmdvSWQoeyBncm91cHM6IFtCb29rRHRvR3JvdXAuUEFHRU5BVElPTl0gfSlcclxuICBhdXRob3JJZDogVHlwZXMuT2JqZWN0SWQ7XHJcblxyXG4gIEBJc09wdGlvbmFsKHsgZ3JvdXBzOiBbQm9va0R0b0dyb3VwLlBBR0VOQVRJT05dIH0pXHJcbiAgQElzTW9uZ29JZCh7IGdyb3VwczogW0Jvb2tEdG9Hcm91cC5QQUdFTkFUSU9OXSB9KVxyXG4gIGNhdGVnb3J5SWQ6IFR5cGVzLk9iamVjdElkO1xyXG59XHJcbiJdfQ==