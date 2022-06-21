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
    (0, class_validator_1.IsOptional)({ groups: [BookDtoGroup.UPDATE] }),
    (0, class_validator_1.IsString)({ groups: [BookDtoGroup.CREATE, BookDtoGroup.UPDATE] }),
    tslib_1.__metadata("design:type", String)
], BookDto.prototype, "ebookUrl", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsOptional)({ groups: [BookDtoGroup.UPDATE] }),
    (0, class_validator_1.IsString)({ groups: [BookDtoGroup.CREATE, BookDtoGroup.UPDATE] }),
    tslib_1.__metadata("design:type", String)
], BookDto.prototype, "description", void 0);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9vay5kdG8uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvY29tbW9uL3ZhbGlkYXRpb24vZHRvL2Jvb2svYm9vay5kdG8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLHFEQUd5QjtBQUN6Qix1Q0FBaUM7QUFDakMsaURBQTZEO0FBQzdELDhDQUEwQztBQUUxQyxNQUFhLFlBQWEsU0FBUSwyQkFBYzs7QUFBaEQsb0NBR0M7QUFGUSxvQkFBTyxHQUFHLFNBQVMsQ0FBQztBQUNwQixvQkFBTyxHQUFHLFNBQVMsQ0FBQztBQUU3QixNQUFhLE9BQVEsU0FBUSxzQkFBUztDQTJCckM7QUF2QkM7SUFGQyxJQUFBLDRCQUFVLEVBQUMsRUFBRSxNQUFNLEVBQUUsQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQztJQUM3QyxJQUFBLDBCQUFRLEVBQUMsRUFBRSxNQUFNLEVBQUUsQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFLFlBQVksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDOztxQ0FDcEQ7QUFJYjtJQUZDLElBQUEsNEJBQVUsRUFBQyxFQUFFLE1BQU0sRUFBRSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDO0lBQzdDLElBQUEsMEJBQVEsRUFBQyxFQUFFLE1BQU0sRUFBRSxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUUsWUFBWSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUM7O3VDQUNsRDtBQUlmO0lBRkMsSUFBQSw0QkFBVSxFQUFDLEVBQUUsTUFBTSxFQUFFLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUM7SUFDN0MsSUFBQSwwQkFBUSxFQUFDLEVBQUUsTUFBTSxFQUFFLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRSxZQUFZLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQzs7eUNBQ2hEO0FBSWpCO0lBRkMsSUFBQSw0QkFBVSxFQUFDLEVBQUUsTUFBTSxFQUFFLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUM7SUFDN0MsSUFBQSwwQkFBUSxFQUFDLEVBQUUsTUFBTSxFQUFFLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRSxZQUFZLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQzs7NENBQzdDO0FBS3BCO0lBSEMsSUFBQSw0QkFBVSxFQUFDLEVBQUUsTUFBTSxFQUFFLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRSxZQUFZLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQztJQUNsRSxJQUFBLDRCQUFVLEVBQUMsQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLEVBQUUsQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDO0lBQzFDLElBQUEsMkJBQVMsRUFBQyxFQUFFLE1BQU0sRUFBRSxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUUsWUFBWSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUM7O3lDQUNqRDtBQUlqQjtJQUZDLElBQUEsNEJBQVUsRUFBQyxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsRUFBRSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUM7SUFDMUMsSUFBQSwyQkFBUyxFQUFDLEVBQUUsTUFBTSxFQUFFLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUM7c0NBQ2xDLGdCQUFLLENBQUMsUUFBUTsyQ0FBQztBQXpCN0IsMEJBMkJDO0FBRUQsTUFBYSxVQUFXLFNBQVEsc0JBQVM7Q0FReEM7QUFMQztJQUZDLElBQUEsNEJBQVUsRUFBQyxFQUFFLE1BQU0sRUFBRSxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDO0lBQ2pELElBQUEsMkJBQVMsRUFBQyxFQUFFLE1BQU0sRUFBRSxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDO3NDQUN2QyxnQkFBSyxDQUFDLFFBQVE7NENBQUM7QUFJekI7SUFGQyxJQUFBLDRCQUFVLEVBQUMsRUFBRSxNQUFNLEVBQUUsQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQztJQUNqRCxJQUFBLDJCQUFTLEVBQUMsRUFBRSxNQUFNLEVBQUUsQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQztzQ0FDckMsZ0JBQUssQ0FBQyxRQUFROzhDQUFDO0FBUDdCLGdDQVFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBJc01vbmdvSWQsIElzT3B0aW9uYWwsXHJcbiAgSXNTdHJpbmcsIFZhbGlkYXRlSWZcclxufSBmcm9tICdjbGFzcy12YWxpZGF0b3InO1xyXG5pbXBvcnQgeyBUeXBlcyB9IGZyb20gJ21vbmdvb3NlJztcclxuaW1wb3J0IHsgQ29tbW9uRHRvLCBDb21tb25EdG9Hcm91cCB9IGZyb20gJy4uLy4uL2NvbW1vbi5kdG8nO1xyXG5pbXBvcnQgeyBQYWdpbmdEdG8gfSBmcm9tICcuLi9wYWdpbmcuZHRvJztcclxuXHJcbmV4cG9ydCBjbGFzcyBCb29rRHRvR3JvdXAgZXh0ZW5kcyBDb21tb25EdG9Hcm91cCB7XHJcbiAgc3RhdGljIEJBUkNPREUgPSAnYmFyY29kZSc7XHJcbiAgc3RhdGljIEJPT0tJRFMgPSAnYm9va0lkcyc7XHJcbn1cclxuZXhwb3J0IGNsYXNzIEJvb2tEdG8gZXh0ZW5kcyBDb21tb25EdG8ge1xyXG5cclxuICBASXNPcHRpb25hbCh7IGdyb3VwczogW0Jvb2tEdG9Hcm91cC5VUERBVEVdIH0pXHJcbiAgQElzU3RyaW5nKHsgZ3JvdXBzOiBbQm9va0R0b0dyb3VwLkNSRUFURSwgQm9va0R0b0dyb3VwLlVQREFURV0gfSlcclxuICBuYW1lOiBzdHJpbmc7XHJcblxyXG4gIEBJc09wdGlvbmFsKHsgZ3JvdXBzOiBbQm9va0R0b0dyb3VwLlVQREFURV0gfSlcclxuICBASXNTdHJpbmcoeyBncm91cHM6IFtCb29rRHRvR3JvdXAuQ1JFQVRFLCBCb29rRHRvR3JvdXAuVVBEQVRFXSB9KVxyXG4gIGltZ1VybDogc3RyaW5nO1xyXG5cclxuICBASXNPcHRpb25hbCh7IGdyb3VwczogW0Jvb2tEdG9Hcm91cC5VUERBVEVdIH0pXHJcbiAgQElzU3RyaW5nKHsgZ3JvdXBzOiBbQm9va0R0b0dyb3VwLkNSRUFURSwgQm9va0R0b0dyb3VwLlVQREFURV0gfSlcclxuICBlYm9va1VybDogc3RyaW5nO1xyXG5cclxuICBASXNPcHRpb25hbCh7IGdyb3VwczogW0Jvb2tEdG9Hcm91cC5VUERBVEVdIH0pXHJcbiAgQElzU3RyaW5nKHsgZ3JvdXBzOiBbQm9va0R0b0dyb3VwLkNSRUFURSwgQm9va0R0b0dyb3VwLlVQREFURV0gfSlcclxuICBkZXNjcmlwdGlvbjogc3RyaW5nO1xyXG5cclxuICBASXNPcHRpb25hbCh7IGdyb3VwczogW0Jvb2tEdG9Hcm91cC5DUkVBVEUsIEJvb2tEdG9Hcm91cC5VUERBVEVdIH0pXHJcbiAgQFZhbGlkYXRlSWYoKGRhdGEsIHZhbHVlKSA9PiB2YWx1ZSAhPSBudWxsKVxyXG4gIEBJc01vbmdvSWQoeyBncm91cHM6IFtCb29rRHRvR3JvdXAuQ1JFQVRFLCBCb29rRHRvR3JvdXAuVVBEQVRFXSB9KVxyXG4gIGF1dGhvcklkOiBzdHJpbmc7XHJcblxyXG4gIEBWYWxpZGF0ZUlmKChkYXRhLCB2YWx1ZSkgPT4gdmFsdWUgIT0gbnVsbClcclxuICBASXNNb25nb0lkKHsgZ3JvdXBzOiBbQm9va0R0b0dyb3VwLkNSRUFURSxdIH0pXHJcbiAgY2F0ZWdvcnlJZDogVHlwZXMuT2JqZWN0SWQ7XHJcblxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQm9va0dldER0byBleHRlbmRzIFBhZ2luZ0R0byB7XHJcbiAgQElzT3B0aW9uYWwoeyBncm91cHM6IFtCb29rRHRvR3JvdXAuUEFHRU5BVElPTl0gfSlcclxuICBASXNNb25nb0lkKHsgZ3JvdXBzOiBbQm9va0R0b0dyb3VwLlBBR0VOQVRJT05dIH0pXHJcbiAgYXV0aG9ySWQ6IFR5cGVzLk9iamVjdElkO1xyXG5cclxuICBASXNPcHRpb25hbCh7IGdyb3VwczogW0Jvb2tEdG9Hcm91cC5QQUdFTkFUSU9OXSB9KVxyXG4gIEBJc01vbmdvSWQoeyBncm91cHM6IFtCb29rRHRvR3JvdXAuUEFHRU5BVElPTl0gfSlcclxuICBjYXRlZ29yeUlkOiBUeXBlcy5PYmplY3RJZDtcclxufVxyXG4iXX0=