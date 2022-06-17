"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookGetDto = exports.BookDto = exports.BookDtoGroup = void 0;
const tslib_1 = require("tslib");
const class_validator_1 = require("class-validator");
const mongoose_1 = require("mongoose");
const validateIt_decorators_1 = require("../../../decorators/validateIt.decorators");
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
    (0, class_validator_1.IsOptional)({
        groups: [BookDtoGroup.CREATE, BookDtoGroup.UPDATE],
    }),
    (0, class_validator_1.ValidateIf)((data, value) => value != null),
    (0, class_validator_1.IsString)({ groups: [BookDtoGroup.CREATE, BookDtoGroup.UPDATE] }),
    tslib_1.__metadata("design:type", String)
], BookDto.prototype, "description", void 0);
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
    (0, class_validator_1.IsOptional)({ groups: [BookDtoGroup.UPDATE] }),
    (0, class_validator_1.IsArray)({ groups: [BookDtoGroup.CREATE, BookDtoGroup.UPDATE] }),
    (0, class_validator_1.ArrayMinSize)(1, { groups: [BookDtoGroup.CREATE, BookDtoGroup.UPDATE] }),
    (0, validateIt_decorators_1.IsMongoIdCustom)({ each: true, groups: [BookDtoGroup.PAGENATION] }),
    tslib_1.__metadata("design:type", Array)
], BookDto.prototype, "genreIds", void 0);
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
], BookGetDto.prototype, "genreId", void 0);
exports.BookGetDto = BookGetDto;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9vay5kdG8uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvY29tbW9uL3ZhbGlkYXRpb24vZHRvL2Jvb2svYm9vay5kdG8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLHFEQUl5QjtBQUN6Qix1Q0FBaUM7QUFDakMscUZBQTRFO0FBQzVFLGlEQUE2RDtBQUM3RCw4Q0FBMEM7QUFFMUMsTUFBYSxZQUFhLFNBQVEsMkJBQWM7O0FBQWhELG9DQUdDO0FBRlEsb0JBQU8sR0FBRyxTQUFTLENBQUM7QUFDcEIsb0JBQU8sR0FBRyxTQUFTLENBQUM7QUFFN0IsTUFBYSxPQUFRLFNBQVEsc0JBQVM7Q0E2QnJDO0FBekJDO0lBRkMsSUFBQSw0QkFBVSxFQUFDLEVBQUUsTUFBTSxFQUFFLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUM7SUFDN0MsSUFBQSwwQkFBUSxFQUFDLEVBQUUsTUFBTSxFQUFFLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRSxZQUFZLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQzs7cUNBQ3BEO0FBUWI7SUFMQyxJQUFBLDRCQUFVLEVBQUM7UUFDVixNQUFNLEVBQUUsQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFLFlBQVksQ0FBQyxNQUFNLENBQUM7S0FDbkQsQ0FBQztJQUNELElBQUEsNEJBQVUsRUFBQyxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsRUFBRSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUM7SUFDMUMsSUFBQSwwQkFBUSxFQUFDLEVBQUUsTUFBTSxFQUFFLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRSxZQUFZLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQzs7NENBQzdDO0FBSXBCO0lBRkMsSUFBQSw0QkFBVSxFQUFDLEVBQUUsTUFBTSxFQUFFLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUM7SUFDN0MsSUFBQSwwQkFBUSxFQUFDLEVBQUUsTUFBTSxFQUFFLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRSxZQUFZLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQzs7dUNBQ2xEO0FBS2Y7SUFIQyxJQUFBLDRCQUFVLEVBQUMsRUFBRSxNQUFNLEVBQUUsQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFLFlBQVksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDO0lBQ2xFLElBQUEsNEJBQVUsRUFBQyxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsRUFBRSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUM7SUFDMUMsSUFBQSwyQkFBUyxFQUFDLEVBQUUsTUFBTSxFQUFFLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRSxZQUFZLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQzs7eUNBQ2pEO0FBTWpCO0lBSkMsSUFBQSw0QkFBVSxFQUFDLEVBQUUsTUFBTSxFQUFFLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUM7SUFDN0MsSUFBQSx5QkFBTyxFQUFDLEVBQUUsTUFBTSxFQUFFLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRSxZQUFZLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQztJQUMvRCxJQUFBLDhCQUFZLEVBQUMsQ0FBQyxFQUFFLEVBQUUsTUFBTSxFQUFFLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRSxZQUFZLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQztJQUN2RSxJQUFBLHVDQUFlLEVBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDOzt5Q0FDeEM7QUEzQjdCLDBCQTZCQztBQUVELE1BQWEsVUFBVyxTQUFRLHNCQUFTO0NBUXhDO0FBTEM7SUFGQyxJQUFBLDRCQUFVLEVBQUMsRUFBRSxNQUFNLEVBQUUsQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQztJQUNqRCxJQUFBLDJCQUFTLEVBQUMsRUFBRSxNQUFNLEVBQUUsQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQztzQ0FDdkMsZ0JBQUssQ0FBQyxRQUFROzRDQUFDO0FBSXpCO0lBRkMsSUFBQSw0QkFBVSxFQUFDLEVBQUUsTUFBTSxFQUFFLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUM7SUFDakQsSUFBQSwyQkFBUyxFQUFDLEVBQUUsTUFBTSxFQUFFLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUM7c0NBQ3hDLGdCQUFLLENBQUMsUUFBUTsyQ0FBQztBQVAxQixnQ0FRQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQXJyYXlNaW5TaXplLFxyXG4gIElzQXJyYXksIElzTW9uZ29JZCwgSXNPcHRpb25hbCxcclxuICBJc1N0cmluZywgVmFsaWRhdGVJZlxyXG59IGZyb20gJ2NsYXNzLXZhbGlkYXRvcic7XHJcbmltcG9ydCB7IFR5cGVzIH0gZnJvbSAnbW9uZ29vc2UnO1xyXG5pbXBvcnQgeyBJc01vbmdvSWRDdXN0b20gfSBmcm9tICcuLi8uLi8uLi9kZWNvcmF0b3JzL3ZhbGlkYXRlSXQuZGVjb3JhdG9ycyc7XHJcbmltcG9ydCB7IENvbW1vbkR0bywgQ29tbW9uRHRvR3JvdXAgfSBmcm9tICcuLi8uLi9jb21tb24uZHRvJztcclxuaW1wb3J0IHsgUGFnaW5nRHRvIH0gZnJvbSAnLi4vcGFnaW5nLmR0byc7XHJcblxyXG5leHBvcnQgY2xhc3MgQm9va0R0b0dyb3VwIGV4dGVuZHMgQ29tbW9uRHRvR3JvdXAge1xyXG4gIHN0YXRpYyBCQVJDT0RFID0gJ2JhcmNvZGUnO1xyXG4gIHN0YXRpYyBCT09LSURTID0gJ2Jvb2tJZHMnO1xyXG59XHJcbmV4cG9ydCBjbGFzcyBCb29rRHRvIGV4dGVuZHMgQ29tbW9uRHRvIHtcclxuXHJcbiAgQElzT3B0aW9uYWwoeyBncm91cHM6IFtCb29rRHRvR3JvdXAuVVBEQVRFXSB9KVxyXG4gIEBJc1N0cmluZyh7IGdyb3VwczogW0Jvb2tEdG9Hcm91cC5DUkVBVEUsIEJvb2tEdG9Hcm91cC5VUERBVEVdIH0pXHJcbiAgbmFtZTogc3RyaW5nO1xyXG5cclxuICAvLyFkZXNjcmlwdGlvbnNcclxuICBASXNPcHRpb25hbCh7XHJcbiAgICBncm91cHM6IFtCb29rRHRvR3JvdXAuQ1JFQVRFLCBCb29rRHRvR3JvdXAuVVBEQVRFXSxcclxuICB9KVxyXG4gIEBWYWxpZGF0ZUlmKChkYXRhLCB2YWx1ZSkgPT4gdmFsdWUgIT0gbnVsbClcclxuICBASXNTdHJpbmcoeyBncm91cHM6IFtCb29rRHRvR3JvdXAuQ1JFQVRFLCBCb29rRHRvR3JvdXAuVVBEQVRFXSB9KVxyXG4gIGRlc2NyaXB0aW9uOiBzdHJpbmc7XHJcblxyXG4gIEBJc09wdGlvbmFsKHsgZ3JvdXBzOiBbQm9va0R0b0dyb3VwLlVQREFURV0gfSlcclxuICBASXNTdHJpbmcoeyBncm91cHM6IFtCb29rRHRvR3JvdXAuQ1JFQVRFLCBCb29rRHRvR3JvdXAuVVBEQVRFXSB9KVxyXG4gIGltZ1VybDogc3RyaW5nO1xyXG5cclxuICBASXNPcHRpb25hbCh7IGdyb3VwczogW0Jvb2tEdG9Hcm91cC5DUkVBVEUsIEJvb2tEdG9Hcm91cC5VUERBVEVdIH0pXHJcbiAgQFZhbGlkYXRlSWYoKGRhdGEsIHZhbHVlKSA9PiB2YWx1ZSAhPSBudWxsKVxyXG4gIEBJc01vbmdvSWQoeyBncm91cHM6IFtCb29rRHRvR3JvdXAuQ1JFQVRFLCBCb29rRHRvR3JvdXAuVVBEQVRFXSB9KVxyXG4gIGF1dGhvcklkOiBzdHJpbmc7XHJcblxyXG4gIEBJc09wdGlvbmFsKHsgZ3JvdXBzOiBbQm9va0R0b0dyb3VwLlVQREFURV0gfSlcclxuICBASXNBcnJheSh7IGdyb3VwczogW0Jvb2tEdG9Hcm91cC5DUkVBVEUsIEJvb2tEdG9Hcm91cC5VUERBVEVdIH0pXHJcbiAgQEFycmF5TWluU2l6ZSgxLCB7IGdyb3VwczogW0Jvb2tEdG9Hcm91cC5DUkVBVEUsIEJvb2tEdG9Hcm91cC5VUERBVEVdIH0pXHJcbiAgQElzTW9uZ29JZEN1c3RvbSh7IGVhY2g6IHRydWUsIGdyb3VwczogW0Jvb2tEdG9Hcm91cC5QQUdFTkFUSU9OXSB9KVxyXG4gIGdlbnJlSWRzOiBUeXBlcy5PYmplY3RJZFtdO1xyXG5cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEJvb2tHZXREdG8gZXh0ZW5kcyBQYWdpbmdEdG8ge1xyXG4gIEBJc09wdGlvbmFsKHsgZ3JvdXBzOiBbQm9va0R0b0dyb3VwLlBBR0VOQVRJT05dIH0pXHJcbiAgQElzTW9uZ29JZCh7IGdyb3VwczogW0Jvb2tEdG9Hcm91cC5QQUdFTkFUSU9OXSB9KVxyXG4gIGF1dGhvcklkOiBUeXBlcy5PYmplY3RJZDtcclxuXHJcbiAgQElzT3B0aW9uYWwoeyBncm91cHM6IFtCb29rRHRvR3JvdXAuUEFHRU5BVElPTl0gfSlcclxuICBASXNNb25nb0lkKHsgZ3JvdXBzOiBbQm9va0R0b0dyb3VwLlBBR0VOQVRJT05dIH0pXHJcbiAgZ2VucmVJZDogVHlwZXMuT2JqZWN0SWQ7XHJcbn1cclxuIl19