"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UploadDto = exports.UploadGroupDto = void 0;
const tslib_1 = require("tslib");
const class_validator_1 = require("class-validator");
const fileUploadType_1 = require("../../../constants/fileUploadType");
class UploadGroupDto {
}
exports.UploadGroupDto = UploadGroupDto;
UploadGroupDto.UPLOAD = 'upload';
class UploadDto {
}
tslib_1.__decorate([
    (0, class_validator_1.IsEnum)(fileUploadType_1.uploadType, {
        groups: [UploadGroupDto.UPLOAD],
    }),
    tslib_1.__metadata("design:type", String)
], UploadDto.prototype, "type", void 0);
exports.UploadDto = UploadDto;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBsb2FkLmR0by5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9jb21tb24vdmFsaWRhdGlvbi9kdG8vdXBsb2FkL3VwbG9hZC5kdG8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLHFEQUF5QztBQUN6QyxzRUFBK0Q7QUFFL0QsTUFBYSxjQUFjOztBQUEzQix3Q0FFQztBQURRLHFCQUFNLEdBQUcsUUFBUSxDQUFDO0FBRzNCLE1BQWEsU0FBUztDQUtyQjtBQURDO0lBSEMsSUFBQSx3QkFBTSxFQUFDLDJCQUFVLEVBQUU7UUFDbEIsTUFBTSxFQUFFLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQztLQUNoQyxDQUFDOzt1Q0FDZTtBQUpuQiw4QkFLQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElzRW51bSB9IGZyb20gJ2NsYXNzLXZhbGlkYXRvcic7XHJcbmltcG9ydCB7IHVwbG9hZFR5cGUgfSBmcm9tICcuLi8uLi8uLi9jb25zdGFudHMvZmlsZVVwbG9hZFR5cGUnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFVwbG9hZEdyb3VwRHRvIHtcclxuICBzdGF0aWMgVVBMT0FEID0gJ3VwbG9hZCc7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBVcGxvYWREdG8ge1xyXG4gIEBJc0VudW0odXBsb2FkVHlwZSwge1xyXG4gICAgZ3JvdXBzOiBbVXBsb2FkR3JvdXBEdG8uVVBMT0FEXSxcclxuICB9KVxyXG4gIHR5cGU6IHVwbG9hZFR5cGU7XHJcbn1cclxuIl19