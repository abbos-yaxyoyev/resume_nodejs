"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CourseGetDto = exports.CourseDto = exports.CourseDtoGroup = void 0;
const tslib_1 = require("tslib");
const class_validator_1 = require("class-validator");
const common_dto_1 = require("../../common.dto");
const paging_dto_1 = require("../paging.dto");
class CourseDtoGroup extends common_dto_1.CommonDtoGroup {
}
exports.CourseDtoGroup = CourseDtoGroup;
class CourseDto extends common_dto_1.CommonDto {
}
tslib_1.__decorate([
    (0, class_validator_1.IsString)({ groups: [CourseDtoGroup.CREATE, CourseDtoGroup.UPDATE] }),
    tslib_1.__metadata("design:type", String)
], CourseDto.prototype, "name", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsOptional)({ groups: [CourseDtoGroup.CREATE, CourseDtoGroup.UPDATE] }),
    (0, class_validator_1.ValidateIf)((data, value) => value != null),
    (0, class_validator_1.IsString)({ groups: [CourseDtoGroup.CREATE, CourseDtoGroup.UPDATE] }),
    tslib_1.__metadata("design:type", String)
], CourseDto.prototype, "imgUrl", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsOptional)({
        groups: [CourseDtoGroup.CREATE, CourseDtoGroup.UPDATE],
    }),
    (0, class_validator_1.ValidateIf)((data, value) => value != null),
    (0, class_validator_1.IsString)({ groups: [CourseDtoGroup.CREATE, CourseDtoGroup.UPDATE] }),
    tslib_1.__metadata("design:type", String)
], CourseDto.prototype, "description", void 0);
exports.CourseDto = CourseDto;
class CourseGetDto extends paging_dto_1.PagingDto {
}
exports.CourseGetDto = CourseGetDto;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY291cnNlLmR0by5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9jb21tb24vdmFsaWRhdGlvbi9kdG8vY291cnNlL2NvdXJzZS5kdG8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLHFEQUd5QjtBQUN6QixpREFBNkQ7QUFDN0QsOENBQTBDO0FBRTFDLE1BQWEsY0FBZSxTQUFRLDJCQUFjO0NBQUk7QUFBdEQsd0NBQXNEO0FBRXRELE1BQWEsU0FBVSxTQUFRLHNCQUFTO0NBZ0J2QztBQWRDO0lBREMsSUFBQSwwQkFBUSxFQUFDLEVBQUUsTUFBTSxFQUFFLENBQUMsY0FBYyxDQUFDLE1BQU0sRUFBRSxjQUFjLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQzs7dUNBQ3hEO0FBS2I7SUFIQyxJQUFBLDRCQUFVLEVBQUMsRUFBRSxNQUFNLEVBQUUsQ0FBQyxjQUFjLENBQUMsTUFBTSxFQUFFLGNBQWMsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDO0lBQ3RFLElBQUEsNEJBQVUsRUFBQyxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsRUFBRSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUM7SUFDMUMsSUFBQSwwQkFBUSxFQUFDLEVBQUUsTUFBTSxFQUFFLENBQUMsY0FBYyxDQUFDLE1BQU0sRUFBRSxjQUFjLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQzs7eUNBQ3REO0FBUWY7SUFMQyxJQUFBLDRCQUFVLEVBQUM7UUFDVixNQUFNLEVBQUUsQ0FBQyxjQUFjLENBQUMsTUFBTSxFQUFFLGNBQWMsQ0FBQyxNQUFNLENBQUM7S0FDdkQsQ0FBQztJQUNELElBQUEsNEJBQVUsRUFBQyxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsRUFBRSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUM7SUFDMUMsSUFBQSwwQkFBUSxFQUFDLEVBQUUsTUFBTSxFQUFFLENBQUMsY0FBYyxDQUFDLE1BQU0sRUFBRSxjQUFjLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQzs7OENBQ2pEO0FBZnRCLDhCQWdCQztBQUVELE1BQWEsWUFBYSxTQUFRLHNCQUFTO0NBQUk7QUFBL0Msb0NBQStDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBJc09wdGlvbmFsLFxyXG4gIElzU3RyaW5nLCBWYWxpZGF0ZUlmXHJcbn0gZnJvbSAnY2xhc3MtdmFsaWRhdG9yJztcclxuaW1wb3J0IHsgQ29tbW9uRHRvLCBDb21tb25EdG9Hcm91cCB9IGZyb20gJy4uLy4uL2NvbW1vbi5kdG8nO1xyXG5pbXBvcnQgeyBQYWdpbmdEdG8gfSBmcm9tICcuLi9wYWdpbmcuZHRvJztcclxuXHJcbmV4cG9ydCBjbGFzcyBDb3Vyc2VEdG9Hcm91cCBleHRlbmRzIENvbW1vbkR0b0dyb3VwIHsgfVxyXG5cclxuZXhwb3J0IGNsYXNzIENvdXJzZUR0byBleHRlbmRzIENvbW1vbkR0byB7XHJcbiAgQElzU3RyaW5nKHsgZ3JvdXBzOiBbQ291cnNlRHRvR3JvdXAuQ1JFQVRFLCBDb3Vyc2VEdG9Hcm91cC5VUERBVEVdIH0pXHJcbiAgbmFtZTogc3RyaW5nO1xyXG5cclxuICBASXNPcHRpb25hbCh7IGdyb3VwczogW0NvdXJzZUR0b0dyb3VwLkNSRUFURSwgQ291cnNlRHRvR3JvdXAuVVBEQVRFXSB9KVxyXG4gIEBWYWxpZGF0ZUlmKChkYXRhLCB2YWx1ZSkgPT4gdmFsdWUgIT0gbnVsbClcclxuICBASXNTdHJpbmcoeyBncm91cHM6IFtDb3Vyc2VEdG9Hcm91cC5DUkVBVEUsIENvdXJzZUR0b0dyb3VwLlVQREFURV0gfSlcclxuICBpbWdVcmw6IHN0cmluZztcclxuXHJcbiAgLy8hZGVzY3JpcHRpb25zXHJcbiAgQElzT3B0aW9uYWwoe1xyXG4gICAgZ3JvdXBzOiBbQ291cnNlRHRvR3JvdXAuQ1JFQVRFLCBDb3Vyc2VEdG9Hcm91cC5VUERBVEVdLFxyXG4gIH0pXHJcbiAgQFZhbGlkYXRlSWYoKGRhdGEsIHZhbHVlKSA9PiB2YWx1ZSAhPSBudWxsKVxyXG4gIEBJc1N0cmluZyh7IGdyb3VwczogW0NvdXJzZUR0b0dyb3VwLkNSRUFURSwgQ291cnNlRHRvR3JvdXAuVVBEQVRFXSB9KVxyXG4gIGRlc2NyaXB0aW9uOiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBDb3Vyc2VHZXREdG8gZXh0ZW5kcyBQYWdpbmdEdG8geyB9XHJcbiJdfQ==