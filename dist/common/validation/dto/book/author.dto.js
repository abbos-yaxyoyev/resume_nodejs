"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthorGetDto = exports.AuthorDto = exports.AuthorDtoGroup = void 0;
const tslib_1 = require("tslib");
const class_validator_1 = require("class-validator");
const common_dto_1 = require("../../common.dto");
const paging_dto_1 = require("../paging.dto");
class AuthorDtoGroup extends common_dto_1.CommonDtoGroup {
}
exports.AuthorDtoGroup = AuthorDtoGroup;
class AuthorDto extends common_dto_1.CommonDto {
}
tslib_1.__decorate([
    (0, class_validator_1.MinLength)(3, {
        message: 'Title is too short. Minimal length is 3 characters',
        groups: [AuthorDtoGroup.CREATE, AuthorDtoGroup.UPDATE],
    }),
    (0, class_validator_1.IsString)({ groups: [AuthorDtoGroup.CREATE, AuthorDtoGroup.UPDATE] }),
    tslib_1.__metadata("design:type", String)
], AuthorDto.prototype, "fullName", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsOptional)({ groups: [AuthorDtoGroup.CREATE, AuthorDtoGroup.UPDATE] }),
    (0, class_validator_1.ValidateIf)((data, value) => value != null),
    (0, class_validator_1.IsString)({ groups: [AuthorDtoGroup.CREATE, AuthorDtoGroup.UPDATE] }),
    tslib_1.__metadata("design:type", String)
], AuthorDto.prototype, "imgUrl", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsOptional)({ groups: [AuthorDtoGroup.CREATE, AuthorDtoGroup.UPDATE] }),
    (0, class_validator_1.IsString)({ groups: [AuthorDtoGroup.CREATE, AuthorDtoGroup.UPDATE] }),
    tslib_1.__metadata("design:type", String)
], AuthorDto.prototype, "biography", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsOptional)({
        groups: [AuthorDtoGroup.UPDATE],
    }),
    (0, class_validator_1.ValidateIf)((data, value) => value != null),
    (0, class_validator_1.IsDateString)({ strict: true }, { groups: [AuthorDtoGroup.CREATE, AuthorDtoGroup.UPDATE] }),
    tslib_1.__metadata("design:type", Date)
], AuthorDto.prototype, "dateOfbirth", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsOptional)({
        groups: [AuthorDtoGroup.CREATE, AuthorDtoGroup.UPDATE],
    }),
    (0, class_validator_1.ValidateIf)((data, value) => value != null),
    (0, class_validator_1.IsDateString)({ strict: true }, { groups: [AuthorDtoGroup.CREATE, AuthorDtoGroup.UPDATE] }),
    tslib_1.__metadata("design:type", Date)
], AuthorDto.prototype, "dateOfdeath", void 0);
exports.AuthorDto = AuthorDto;
//* for paging
class AuthorGetDto extends paging_dto_1.PagingDto {
}
exports.AuthorGetDto = AuthorGetDto;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aG9yLmR0by5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9jb21tb24vdmFsaWRhdGlvbi9kdG8vYm9vay9hdXRob3IuZHRvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxxREFHeUI7QUFDekIsaURBQTZEO0FBQzdELDhDQUEwQztBQUUxQyxNQUFhLGNBQWUsU0FBUSwyQkFBYztDQUFJO0FBQXRELHdDQUFzRDtBQUd0RCxNQUFhLFNBQVUsU0FBUSxzQkFBUztDQThCdkM7QUF4QkM7SUFMQyxJQUFBLDJCQUFTLEVBQUMsQ0FBQyxFQUFFO1FBQ1osT0FBTyxFQUFFLG9EQUFvRDtRQUM3RCxNQUFNLEVBQUUsQ0FBQyxjQUFjLENBQUMsTUFBTSxFQUFFLGNBQWMsQ0FBQyxNQUFNLENBQUM7S0FDdkQsQ0FBQztJQUNELElBQUEsMEJBQVEsRUFBQyxFQUFFLE1BQU0sRUFBRSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUUsY0FBYyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUM7OzJDQUNwRDtBQUtqQjtJQUhDLElBQUEsNEJBQVUsRUFBQyxFQUFFLE1BQU0sRUFBRSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUUsY0FBYyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUM7SUFDdEUsSUFBQSw0QkFBVSxFQUFDLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxFQUFFLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQztJQUMxQyxJQUFBLDBCQUFRLEVBQUMsRUFBRSxNQUFNLEVBQUUsQ0FBQyxjQUFjLENBQUMsTUFBTSxFQUFFLGNBQWMsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDOzt5Q0FDdEQ7QUFJZjtJQUZDLElBQUEsNEJBQVUsRUFBQyxFQUFFLE1BQU0sRUFBRSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUUsY0FBYyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUM7SUFDdEUsSUFBQSwwQkFBUSxFQUFDLEVBQUUsTUFBTSxFQUFFLENBQUMsY0FBYyxDQUFDLE1BQU0sRUFBRSxjQUFjLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQzs7NENBQ25EO0FBT2xCO0lBTEMsSUFBQSw0QkFBVSxFQUFDO1FBQ1YsTUFBTSxFQUFFLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQztLQUNoQyxDQUFDO0lBQ0QsSUFBQSw0QkFBVSxFQUFDLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxFQUFFLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQztJQUMxQyxJQUFBLDhCQUFZLEVBQUMsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsQ0FBQyxjQUFjLENBQUMsTUFBTSxFQUFFLGNBQWMsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDO3NDQUM5RSxJQUFJOzhDQUFDO0FBT2xCO0lBTEMsSUFBQSw0QkFBVSxFQUFDO1FBQ1YsTUFBTSxFQUFFLENBQUMsY0FBYyxDQUFDLE1BQU0sRUFBRSxjQUFjLENBQUMsTUFBTSxDQUFDO0tBQ3ZELENBQUM7SUFDRCxJQUFBLDRCQUFVLEVBQUMsQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLEVBQUUsQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDO0lBQzFDLElBQUEsOEJBQVksRUFBQyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUUsY0FBYyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUM7c0NBQzlFLElBQUk7OENBQUM7QUE3QnBCLDhCQThCQztBQUVELGNBQWM7QUFDZCxNQUFhLFlBQWEsU0FBUSxzQkFBUztDQUFJO0FBQS9DLG9DQUErQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgSXNEYXRlU3RyaW5nLCBJc09wdGlvbmFsLFxyXG4gIElzU3RyaW5nLCBNaW5MZW5ndGgsIFZhbGlkYXRlSWZcclxufSBmcm9tICdjbGFzcy12YWxpZGF0b3InO1xyXG5pbXBvcnQgeyBDb21tb25EdG8sIENvbW1vbkR0b0dyb3VwIH0gZnJvbSAnLi4vLi4vY29tbW9uLmR0byc7XHJcbmltcG9ydCB7IFBhZ2luZ0R0byB9IGZyb20gJy4uL3BhZ2luZy5kdG8nO1xyXG5cclxuZXhwb3J0IGNsYXNzIEF1dGhvckR0b0dyb3VwIGV4dGVuZHMgQ29tbW9uRHRvR3JvdXAgeyB9XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIEF1dGhvckR0byBleHRlbmRzIENvbW1vbkR0byB7XHJcbiAgQE1pbkxlbmd0aCgzLCB7XHJcbiAgICBtZXNzYWdlOiAnVGl0bGUgaXMgdG9vIHNob3J0LiBNaW5pbWFsIGxlbmd0aCBpcyAzIGNoYXJhY3RlcnMnLFxyXG4gICAgZ3JvdXBzOiBbQXV0aG9yRHRvR3JvdXAuQ1JFQVRFLCBBdXRob3JEdG9Hcm91cC5VUERBVEVdLFxyXG4gIH0pXHJcbiAgQElzU3RyaW5nKHsgZ3JvdXBzOiBbQXV0aG9yRHRvR3JvdXAuQ1JFQVRFLCBBdXRob3JEdG9Hcm91cC5VUERBVEVdIH0pXHJcbiAgZnVsbE5hbWU6IHN0cmluZztcclxuXHJcbiAgQElzT3B0aW9uYWwoeyBncm91cHM6IFtBdXRob3JEdG9Hcm91cC5DUkVBVEUsIEF1dGhvckR0b0dyb3VwLlVQREFURV0gfSlcclxuICBAVmFsaWRhdGVJZigoZGF0YSwgdmFsdWUpID0+IHZhbHVlICE9IG51bGwpXHJcbiAgQElzU3RyaW5nKHsgZ3JvdXBzOiBbQXV0aG9yRHRvR3JvdXAuQ1JFQVRFLCBBdXRob3JEdG9Hcm91cC5VUERBVEVdIH0pXHJcbiAgaW1nVXJsOiBzdHJpbmc7XHJcblxyXG4gIEBJc09wdGlvbmFsKHsgZ3JvdXBzOiBbQXV0aG9yRHRvR3JvdXAuQ1JFQVRFLCBBdXRob3JEdG9Hcm91cC5VUERBVEVdIH0pXHJcbiAgQElzU3RyaW5nKHsgZ3JvdXBzOiBbQXV0aG9yRHRvR3JvdXAuQ1JFQVRFLCBBdXRob3JEdG9Hcm91cC5VUERBVEVdIH0pXHJcbiAgYmlvZ3JhcGh5OiBzdHJpbmc7XHJcblxyXG4gIEBJc09wdGlvbmFsKHtcclxuICAgIGdyb3VwczogW0F1dGhvckR0b0dyb3VwLlVQREFURV0sXHJcbiAgfSlcclxuICBAVmFsaWRhdGVJZigoZGF0YSwgdmFsdWUpID0+IHZhbHVlICE9IG51bGwpXHJcbiAgQElzRGF0ZVN0cmluZyh7IHN0cmljdDogdHJ1ZSB9LCB7IGdyb3VwczogW0F1dGhvckR0b0dyb3VwLkNSRUFURSwgQXV0aG9yRHRvR3JvdXAuVVBEQVRFXSB9KVxyXG4gIGRhdGVPZmJpcnRoOiBEYXRlO1xyXG5cclxuICBASXNPcHRpb25hbCh7XHJcbiAgICBncm91cHM6IFtBdXRob3JEdG9Hcm91cC5DUkVBVEUsIEF1dGhvckR0b0dyb3VwLlVQREFURV0sXHJcbiAgfSlcclxuICBAVmFsaWRhdGVJZigoZGF0YSwgdmFsdWUpID0+IHZhbHVlICE9IG51bGwpXHJcbiAgQElzRGF0ZVN0cmluZyh7IHN0cmljdDogdHJ1ZSB9LCB7IGdyb3VwczogW0F1dGhvckR0b0dyb3VwLkNSRUFURSwgQXV0aG9yRHRvR3JvdXAuVVBEQVRFXSB9KVxyXG4gIGRhdGVPZmRlYXRoOiBEYXRlO1xyXG59XHJcblxyXG4vLyogZm9yIHBhZ2luZ1xyXG5leHBvcnQgY2xhc3MgQXV0aG9yR2V0RHRvIGV4dGVuZHMgUGFnaW5nRHRvIHsgfVxyXG4iXX0=