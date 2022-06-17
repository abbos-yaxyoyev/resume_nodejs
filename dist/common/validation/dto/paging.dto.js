"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PagingDto = void 0;
const tslib_1 = require("tslib");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const common_dto_1 = require("../common.dto");
class PagingDto extends common_dto_1.CommonDto {
}
tslib_1.__decorate([
    (0, class_transformer_1.Transform)(({ value }) => Number(value)),
    (0, class_validator_1.IsNumber)({
        allowInfinity: false,
        allowNaN: false,
        maxDecimalPlaces: 0,
    }, {
        groups: [common_dto_1.CommonDtoGroup.PAGENATION],
    }),
    tslib_1.__metadata("design:type", Number)
], PagingDto.prototype, "limit", void 0);
tslib_1.__decorate([
    (0, class_transformer_1.Transform)(({ value }) => Number(value)),
    (0, class_validator_1.IsNumber)({
        allowInfinity: false,
        allowNaN: false,
        maxDecimalPlaces: 0,
    }, {
        groups: [common_dto_1.CommonDtoGroup.PAGENATION],
    }),
    tslib_1.__metadata("design:type", Number)
], PagingDto.prototype, "page", void 0);
tslib_1.__decorate([
    (0, class_transformer_1.Expose)({ toClassOnly: true }),
    (0, class_transformer_1.Transform)(({ value }) => value?.trim() || ''),
    (0, class_validator_1.IsOptional)({
        groups: [common_dto_1.CommonDtoGroup.PAGENATION],
    }),
    (0, class_validator_1.IsString)({
        groups: [common_dto_1.CommonDtoGroup.PAGENATION],
    }),
    tslib_1.__metadata("design:type", String)
], PagingDto.prototype, "search", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsOptional)({
        groups: [common_dto_1.CommonDtoGroup.PAGENATION],
    }),
    (0, class_validator_1.IsDateString)({
        strict: false,
    }, {
        groups: [common_dto_1.CommonDtoGroup.PAGENATION],
    }),
    tslib_1.__metadata("design:type", String)
], PagingDto.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsOptional)({
        groups: [common_dto_1.CommonDtoGroup.PAGENATION],
    }),
    (0, class_validator_1.IsDateString)({
        strict: false,
    }, {
        groups: [common_dto_1.CommonDtoGroup.PAGENATION],
    }),
    tslib_1.__metadata("design:type", String)
], PagingDto.prototype, "createdAt", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsOptional)({
        groups: [common_dto_1.CommonDtoGroup.PAGENATION],
    }),
    (0, class_validator_1.IsString)({
        groups: [common_dto_1.CommonDtoGroup.PAGENATION],
    }),
    tslib_1.__metadata("design:type", String)
], PagingDto.prototype, "sortBy", void 0);
tslib_1.__decorate([
    (0, class_transformer_1.Transform)(({ value }) => Number(value)),
    (0, class_validator_1.IsOptional)({
        groups: [common_dto_1.CommonDtoGroup.PAGENATION],
    }),
    (0, class_validator_1.IsNumber)({
        allowInfinity: false,
        allowNaN: false,
    }),
    tslib_1.__metadata("design:type", Number)
], PagingDto.prototype, "asc", void 0);
exports.PagingDto = PagingDto;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5nLmR0by5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21tb24vdmFsaWRhdGlvbi9kdG8vcGFnaW5nLmR0by50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEseURBQXNEO0FBQ3RELHFEQUErRjtBQUMvRiw4Q0FBMEQ7QUFFMUQsTUFBYSxTQUFVLFNBQVEsc0JBQVM7Q0FnRnZDO0FBcEVDO0lBWEMsSUFBQSw2QkFBUyxFQUFDLENBQUMsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3ZDLElBQUEsMEJBQVEsRUFDUDtRQUNFLGFBQWEsRUFBRSxLQUFLO1FBQ3BCLFFBQVEsRUFBRSxLQUFLO1FBQ2YsZ0JBQWdCLEVBQUUsQ0FBQztLQUNwQixFQUNEO1FBQ0UsTUFBTSxFQUFFLENBQUMsMkJBQWMsQ0FBQyxVQUFVLENBQUM7S0FDcEMsQ0FDRjs7d0NBQ2M7QUFhZjtJQVhDLElBQUEsNkJBQVMsRUFBQyxDQUFDLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN2QyxJQUFBLDBCQUFRLEVBQ1A7UUFDRSxhQUFhLEVBQUUsS0FBSztRQUNwQixRQUFRLEVBQUUsS0FBSztRQUNmLGdCQUFnQixFQUFFLENBQUM7S0FDcEIsRUFDRDtRQUNFLE1BQU0sRUFBRSxDQUFDLDJCQUFjLENBQUMsVUFBVSxDQUFDO0tBQ3BDLENBQ0Y7O3VDQUNhO0FBVWQ7SUFSQyxJQUFBLDBCQUFNLEVBQUMsRUFBRSxXQUFXLEVBQUUsSUFBSSxFQUFFLENBQUM7SUFDN0IsSUFBQSw2QkFBUyxFQUFDLENBQUMsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLENBQUMsS0FBSyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQztJQUM3QyxJQUFBLDRCQUFVLEVBQUM7UUFDVixNQUFNLEVBQUUsQ0FBQywyQkFBYyxDQUFDLFVBQVUsQ0FBQztLQUNwQyxDQUFDO0lBQ0QsSUFBQSwwQkFBUSxFQUFDO1FBQ1IsTUFBTSxFQUFFLENBQUMsMkJBQWMsQ0FBQyxVQUFVLENBQUM7S0FDcEMsQ0FBQzs7eUNBQ2M7QUFhaEI7SUFYQyxJQUFBLDRCQUFVLEVBQUM7UUFDVixNQUFNLEVBQUUsQ0FBQywyQkFBYyxDQUFDLFVBQVUsQ0FBQztLQUNwQyxDQUFDO0lBQ0QsSUFBQSw4QkFBWSxFQUNYO1FBQ0UsTUFBTSxFQUFFLEtBQUs7S0FDZCxFQUNEO1FBQ0UsTUFBTSxFQUFFLENBQUMsMkJBQWMsQ0FBQyxVQUFVLENBQUM7S0FDcEMsQ0FDRjs7NENBQ2tCO0FBYW5CO0lBWEMsSUFBQSw0QkFBVSxFQUFDO1FBQ1YsTUFBTSxFQUFFLENBQUMsMkJBQWMsQ0FBQyxVQUFVLENBQUM7S0FDcEMsQ0FBQztJQUNELElBQUEsOEJBQVksRUFDWDtRQUNFLE1BQU0sRUFBRSxLQUFLO0tBQ2QsRUFDRDtRQUNFLE1BQU0sRUFBRSxDQUFDLDJCQUFjLENBQUMsVUFBVSxDQUFDO0tBQ3BDLENBQ0Y7OzRDQUNrQjtBQVFuQjtJQU5DLElBQUEsNEJBQVUsRUFBQztRQUNWLE1BQU0sRUFBRSxDQUFDLDJCQUFjLENBQUMsVUFBVSxDQUFDO0tBQ3BDLENBQUM7SUFDRCxJQUFBLDBCQUFRLEVBQUM7UUFDUixNQUFNLEVBQUUsQ0FBQywyQkFBYyxDQUFDLFVBQVUsQ0FBQztLQUNwQyxDQUFDOzt5Q0FDYztBQVVoQjtJQVJDLElBQUEsNkJBQVMsRUFBQyxDQUFDLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN2QyxJQUFBLDRCQUFVLEVBQUM7UUFDVixNQUFNLEVBQUUsQ0FBQywyQkFBYyxDQUFDLFVBQVUsQ0FBQztLQUNwQyxDQUFDO0lBQ0QsSUFBQSwwQkFBUSxFQUFDO1FBQ1IsYUFBYSxFQUFFLEtBQUs7UUFDcEIsUUFBUSxFQUFFLEtBQUs7S0FDaEIsQ0FBQzs7c0NBQ1c7QUEvRWYsOEJBZ0ZDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXhwb3NlLCBUcmFuc2Zvcm0gfSBmcm9tICdjbGFzcy10cmFuc2Zvcm1lcic7XHJcbmltcG9ydCB7IElzRGF0ZVN0cmluZywgSXNOdW1iZXIsIGlzTnVtYmVyU3RyaW5nLCBJc09wdGlvbmFsLCBJc1N0cmluZyB9IGZyb20gJ2NsYXNzLXZhbGlkYXRvcic7XHJcbmltcG9ydCB7IENvbW1vbkR0bywgQ29tbW9uRHRvR3JvdXAgfSBmcm9tICcuLi9jb21tb24uZHRvJztcclxuXHJcbmV4cG9ydCBjbGFzcyBQYWdpbmdEdG8gZXh0ZW5kcyBDb21tb25EdG8ge1xyXG4gIEBUcmFuc2Zvcm0oKHsgdmFsdWUgfSkgPT4gTnVtYmVyKHZhbHVlKSlcclxuICBASXNOdW1iZXIoXHJcbiAgICB7XHJcbiAgICAgIGFsbG93SW5maW5pdHk6IGZhbHNlLFxyXG4gICAgICBhbGxvd05hTjogZmFsc2UsXHJcbiAgICAgIG1heERlY2ltYWxQbGFjZXM6IDAsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBncm91cHM6IFtDb21tb25EdG9Hcm91cC5QQUdFTkFUSU9OXSxcclxuICAgIH0sXHJcbiAgKVxyXG4gIGxpbWl0ITogbnVtYmVyO1xyXG5cclxuICBAVHJhbnNmb3JtKCh7IHZhbHVlIH0pID0+IE51bWJlcih2YWx1ZSkpXHJcbiAgQElzTnVtYmVyKFxyXG4gICAge1xyXG4gICAgICBhbGxvd0luZmluaXR5OiBmYWxzZSxcclxuICAgICAgYWxsb3dOYU46IGZhbHNlLFxyXG4gICAgICBtYXhEZWNpbWFsUGxhY2VzOiAwLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgZ3JvdXBzOiBbQ29tbW9uRHRvR3JvdXAuUEFHRU5BVElPTl0sXHJcbiAgICB9LFxyXG4gIClcclxuICBwYWdlITogbnVtYmVyO1xyXG5cclxuICBARXhwb3NlKHsgdG9DbGFzc09ubHk6IHRydWUgfSlcclxuICBAVHJhbnNmb3JtKCh7IHZhbHVlIH0pID0+IHZhbHVlPy50cmltKCkgfHwgJycpXHJcbiAgQElzT3B0aW9uYWwoe1xyXG4gICAgZ3JvdXBzOiBbQ29tbW9uRHRvR3JvdXAuUEFHRU5BVElPTl0sXHJcbiAgfSlcclxuICBASXNTdHJpbmcoe1xyXG4gICAgZ3JvdXBzOiBbQ29tbW9uRHRvR3JvdXAuUEFHRU5BVElPTl0sXHJcbiAgfSlcclxuICBzZWFyY2g/OiBzdHJpbmc7XHJcblxyXG4gIEBJc09wdGlvbmFsKHtcclxuICAgIGdyb3VwczogW0NvbW1vbkR0b0dyb3VwLlBBR0VOQVRJT05dLFxyXG4gIH0pXHJcbiAgQElzRGF0ZVN0cmluZyhcclxuICAgIHtcclxuICAgICAgc3RyaWN0OiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGdyb3VwczogW0NvbW1vbkR0b0dyb3VwLlBBR0VOQVRJT05dLFxyXG4gICAgfSxcclxuICApXHJcbiAgdXBkYXRlZEF0Pzogc3RyaW5nO1xyXG5cclxuICBASXNPcHRpb25hbCh7XHJcbiAgICBncm91cHM6IFtDb21tb25EdG9Hcm91cC5QQUdFTkFUSU9OXSxcclxuICB9KVxyXG4gIEBJc0RhdGVTdHJpbmcoXHJcbiAgICB7XHJcbiAgICAgIHN0cmljdDogZmFsc2UsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBncm91cHM6IFtDb21tb25EdG9Hcm91cC5QQUdFTkFUSU9OXSxcclxuICAgIH0sXHJcbiAgKVxyXG4gIGNyZWF0ZWRBdD86IHN0cmluZztcclxuXHJcbiAgQElzT3B0aW9uYWwoe1xyXG4gICAgZ3JvdXBzOiBbQ29tbW9uRHRvR3JvdXAuUEFHRU5BVElPTl0sXHJcbiAgfSlcclxuICBASXNTdHJpbmcoe1xyXG4gICAgZ3JvdXBzOiBbQ29tbW9uRHRvR3JvdXAuUEFHRU5BVElPTl0sXHJcbiAgfSlcclxuICBzb3J0Qnk/OiBzdHJpbmc7XHJcblxyXG4gIEBUcmFuc2Zvcm0oKHsgdmFsdWUgfSkgPT4gTnVtYmVyKHZhbHVlKSlcclxuICBASXNPcHRpb25hbCh7XHJcbiAgICBncm91cHM6IFtDb21tb25EdG9Hcm91cC5QQUdFTkFUSU9OXSxcclxuICB9KVxyXG4gIEBJc051bWJlcih7XHJcbiAgICBhbGxvd0luZmluaXR5OiBmYWxzZSxcclxuICAgIGFsbG93TmFOOiBmYWxzZSxcclxuICB9KVxyXG4gIGFzYz86IG51bWJlcjtcclxufVxyXG4iXX0=