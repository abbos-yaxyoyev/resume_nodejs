"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenreGetDto = exports.GenreDto = exports.GenreDtoGroup = void 0;
const tslib_1 = require("tslib");
const class_validator_1 = require("class-validator");
const common_dto_1 = require("../common.dto");
const paging_dto_1 = require("./paging.dto");
class GenreDtoGroup extends common_dto_1.CommonDtoGroup {
}
exports.GenreDtoGroup = GenreDtoGroup;
class GenreDto extends common_dto_1.CommonDto {
}
tslib_1.__decorate([
    (0, class_validator_1.IsString)({ groups: [GenreDtoGroup.CREATE, GenreDtoGroup.UPDATE] }),
    tslib_1.__metadata("design:type", String)
], GenreDto.prototype, "name", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsOptional)({ groups: [GenreDtoGroup.CREATE, GenreDtoGroup.UPDATE] }),
    (0, class_validator_1.ValidateIf)((data, value) => value != null),
    (0, class_validator_1.IsMongoId)({ groups: [GenreDtoGroup.CREATE, GenreDtoGroup.UPDATE] }),
    tslib_1.__metadata("design:type", String)
], GenreDto.prototype, "parentId", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsOptional)({ groups: [GenreDtoGroup.CREATE, GenreDtoGroup.UPDATE] }),
    (0, class_validator_1.ValidateIf)((data, value) => value != null),
    (0, class_validator_1.IsString)({ groups: [GenreDtoGroup.CREATE, GenreDtoGroup.UPDATE] }),
    tslib_1.__metadata("design:type", String)
], GenreDto.prototype, "imgUrl", void 0);
exports.GenreDto = GenreDto;
class GenreGetDto extends paging_dto_1.PagingDto {
}
tslib_1.__decorate([
    (0, class_validator_1.IsOptional)({ groups: [GenreDtoGroup.PAGENATION] }),
    (0, class_validator_1.IsMongoId)({ groups: [GenreDtoGroup.PAGENATION] }),
    tslib_1.__metadata("design:type", String)
], GenreGetDto.prototype, "_id", void 0);
exports.GenreGetDto = GenreGetDto;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VucmUuZHRvLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2NvbW1vbi92YWxpZGF0aW9uL2R0by9nZW5yZS5kdG8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLHFEQUd5QjtBQUN6Qiw4Q0FBMEQ7QUFDMUQsNkNBQXlDO0FBRXpDLE1BQWEsYUFBYyxTQUFRLDJCQUFjO0NBQUk7QUFBckQsc0NBQXFEO0FBRXJELE1BQWEsUUFBUyxTQUFRLHNCQUFTO0NBYXRDO0FBWEM7SUFEQyxJQUFBLDBCQUFRLEVBQUMsRUFBRSxNQUFNLEVBQUUsQ0FBQyxhQUFhLENBQUMsTUFBTSxFQUFFLGFBQWEsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDOztzQ0FDdEQ7QUFLYjtJQUhDLElBQUEsNEJBQVUsRUFBQyxFQUFFLE1BQU0sRUFBRSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEVBQUUsYUFBYSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUM7SUFDcEUsSUFBQSw0QkFBVSxFQUFDLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxFQUFFLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQztJQUMxQyxJQUFBLDJCQUFTLEVBQUMsRUFBRSxNQUFNLEVBQUUsQ0FBQyxhQUFhLENBQUMsTUFBTSxFQUFFLGFBQWEsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDOzswQ0FDbkQ7QUFLakI7SUFIQyxJQUFBLDRCQUFVLEVBQUMsRUFBRSxNQUFNLEVBQUUsQ0FBQyxhQUFhLENBQUMsTUFBTSxFQUFFLGFBQWEsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDO0lBQ3BFLElBQUEsNEJBQVUsRUFBQyxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsRUFBRSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUM7SUFDMUMsSUFBQSwwQkFBUSxFQUFDLEVBQUUsTUFBTSxFQUFFLENBQUMsYUFBYSxDQUFDLE1BQU0sRUFBRSxhQUFhLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQzs7d0NBQ3BEO0FBWmpCLDRCQWFDO0FBRUQsTUFBYSxXQUFZLFNBQVEsc0JBQVM7Q0FJekM7QUFEQztJQUZDLElBQUEsNEJBQVUsRUFBQyxFQUFFLE1BQU0sRUFBRSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDO0lBQ2xELElBQUEsMkJBQVMsRUFBQyxFQUFFLE1BQU0sRUFBRSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDOzt3Q0FDdEM7QUFIZCxrQ0FJQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgSXNNb25nb0lkLCBJc09wdGlvbmFsLFxyXG4gIElzU3RyaW5nLCBWYWxpZGF0ZUlmXHJcbn0gZnJvbSAnY2xhc3MtdmFsaWRhdG9yJztcclxuaW1wb3J0IHsgQ29tbW9uRHRvLCBDb21tb25EdG9Hcm91cCB9IGZyb20gJy4uL2NvbW1vbi5kdG8nO1xyXG5pbXBvcnQgeyBQYWdpbmdEdG8gfSBmcm9tICcuL3BhZ2luZy5kdG8nO1xyXG5cclxuZXhwb3J0IGNsYXNzIEdlbnJlRHRvR3JvdXAgZXh0ZW5kcyBDb21tb25EdG9Hcm91cCB7IH1cclxuXHJcbmV4cG9ydCBjbGFzcyBHZW5yZUR0byBleHRlbmRzIENvbW1vbkR0byB7XHJcbiAgQElzU3RyaW5nKHsgZ3JvdXBzOiBbR2VucmVEdG9Hcm91cC5DUkVBVEUsIEdlbnJlRHRvR3JvdXAuVVBEQVRFXSB9KVxyXG4gIG5hbWU6IHN0cmluZztcclxuXHJcbiAgQElzT3B0aW9uYWwoeyBncm91cHM6IFtHZW5yZUR0b0dyb3VwLkNSRUFURSwgR2VucmVEdG9Hcm91cC5VUERBVEVdIH0pXHJcbiAgQFZhbGlkYXRlSWYoKGRhdGEsIHZhbHVlKSA9PiB2YWx1ZSAhPSBudWxsKVxyXG4gIEBJc01vbmdvSWQoeyBncm91cHM6IFtHZW5yZUR0b0dyb3VwLkNSRUFURSwgR2VucmVEdG9Hcm91cC5VUERBVEVdIH0pXHJcbiAgcGFyZW50SWQ6IHN0cmluZztcclxuXHJcbiAgQElzT3B0aW9uYWwoeyBncm91cHM6IFtHZW5yZUR0b0dyb3VwLkNSRUFURSwgR2VucmVEdG9Hcm91cC5VUERBVEVdIH0pXHJcbiAgQFZhbGlkYXRlSWYoKGRhdGEsIHZhbHVlKSA9PiB2YWx1ZSAhPSBudWxsKVxyXG4gIEBJc1N0cmluZyh7IGdyb3VwczogW0dlbnJlRHRvR3JvdXAuQ1JFQVRFLCBHZW5yZUR0b0dyb3VwLlVQREFURV0gfSlcclxuICBpbWdVcmw6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEdlbnJlR2V0RHRvIGV4dGVuZHMgUGFnaW5nRHRvIHtcclxuICBASXNPcHRpb25hbCh7IGdyb3VwczogW0dlbnJlRHRvR3JvdXAuUEFHRU5BVElPTl0gfSlcclxuICBASXNNb25nb0lkKHsgZ3JvdXBzOiBbR2VucmVEdG9Hcm91cC5QQUdFTkFUSU9OXSB9KVxyXG4gIF9pZDogc3RyaW5nO1xyXG59XHJcbiJdfQ==