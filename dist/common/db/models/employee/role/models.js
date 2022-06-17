"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleModel = exports.Role = void 0;
const tslib_1 = require("tslib");
const typegoose_1 = require("@typegoose/typegoose");
const collections_1 = require("../../../../constants/collections");
const base_model_1 = require("../../base.model");
let Role = class Role extends base_model_1.CommonModel {
};
tslib_1.__decorate([
    (0, typegoose_1.prop)({
        trim: true,
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Role.prototype, "name", void 0);
tslib_1.__decorate([
    (0, typegoose_1.prop)({
        default: false
    }),
    tslib_1.__metadata("design:type", Boolean)
], Role.prototype, "genre", void 0);
tslib_1.__decorate([
    (0, typegoose_1.prop)({
        default: false
    }),
    tslib_1.__metadata("design:type", Boolean)
], Role.prototype, "genreCreate", void 0);
tslib_1.__decorate([
    (0, typegoose_1.prop)({
        default: false
    }),
    tslib_1.__metadata("design:type", Boolean)
], Role.prototype, "genreUpdate", void 0);
tslib_1.__decorate([
    (0, typegoose_1.prop)({
        default: false
    }),
    tslib_1.__metadata("design:type", Boolean)
], Role.prototype, "genreDelete", void 0);
tslib_1.__decorate([
    (0, typegoose_1.prop)({
        default: false
    }),
    tslib_1.__metadata("design:type", Boolean)
], Role.prototype, "book", void 0);
tslib_1.__decorate([
    (0, typegoose_1.prop)({
        default: false
    }),
    tslib_1.__metadata("design:type", Boolean)
], Role.prototype, "bookCreate", void 0);
tslib_1.__decorate([
    (0, typegoose_1.prop)({
        default: false
    }),
    tslib_1.__metadata("design:type", Boolean)
], Role.prototype, "bookUpdate", void 0);
tslib_1.__decorate([
    (0, typegoose_1.prop)({
        default: false
    }),
    tslib_1.__metadata("design:type", Boolean)
], Role.prototype, "bookDelete", void 0);
tslib_1.__decorate([
    (0, typegoose_1.prop)({
        default: false
    }),
    tslib_1.__metadata("design:type", Boolean)
], Role.prototype, "user", void 0);
tslib_1.__decorate([
    (0, typegoose_1.prop)({
        default: false
    }),
    tslib_1.__metadata("design:type", Boolean)
], Role.prototype, "userCreate", void 0);
tslib_1.__decorate([
    (0, typegoose_1.prop)({
        default: false
    }),
    tslib_1.__metadata("design:type", Boolean)
], Role.prototype, "userUpdate", void 0);
tslib_1.__decorate([
    (0, typegoose_1.prop)({
        default: false
    }),
    tslib_1.__metadata("design:type", Boolean)
], Role.prototype, "userDelete", void 0);
tslib_1.__decorate([
    (0, typegoose_1.prop)({
        default: false
    }),
    tslib_1.__metadata("design:type", Boolean)
], Role.prototype, "author", void 0);
tslib_1.__decorate([
    (0, typegoose_1.prop)({
        default: false
    }),
    tslib_1.__metadata("design:type", Boolean)
], Role.prototype, "authorCreate", void 0);
tslib_1.__decorate([
    (0, typegoose_1.prop)({
        default: false
    }),
    tslib_1.__metadata("design:type", Boolean)
], Role.prototype, "authorUpdate", void 0);
tslib_1.__decorate([
    (0, typegoose_1.prop)({
        default: false
    }),
    tslib_1.__metadata("design:type", Boolean)
], Role.prototype, "authorDelete", void 0);
tslib_1.__decorate([
    (0, typegoose_1.prop)({
        default: false
    }),
    tslib_1.__metadata("design:type", Boolean)
], Role.prototype, "role", void 0);
tslib_1.__decorate([
    (0, typegoose_1.prop)({
        default: false
    }),
    tslib_1.__metadata("design:type", Boolean)
], Role.prototype, "roleCreate", void 0);
tslib_1.__decorate([
    (0, typegoose_1.prop)({
        default: false
    }),
    tslib_1.__metadata("design:type", Boolean)
], Role.prototype, "roleUpdate", void 0);
tslib_1.__decorate([
    (0, typegoose_1.prop)({
        default: false
    }),
    tslib_1.__metadata("design:type", Boolean)
], Role.prototype, "roleDelete", void 0);
tslib_1.__decorate([
    (0, typegoose_1.prop)({
        default: false
    }),
    tslib_1.__metadata("design:type", Boolean)
], Role.prototype, "employee", void 0);
tslib_1.__decorate([
    (0, typegoose_1.prop)({
        default: false
    }),
    tslib_1.__metadata("design:type", Boolean)
], Role.prototype, "employeeCreate", void 0);
tslib_1.__decorate([
    (0, typegoose_1.prop)({
        default: false
    }),
    tslib_1.__metadata("design:type", Boolean)
], Role.prototype, "employeeUpdate", void 0);
tslib_1.__decorate([
    (0, typegoose_1.prop)({
        default: false
    }),
    tslib_1.__metadata("design:type", Boolean)
], Role.prototype, "employeeDelete", void 0);
tslib_1.__decorate([
    (0, typegoose_1.prop)({
        default: false
    }),
    tslib_1.__metadata("design:type", Boolean)
], Role.prototype, "course", void 0);
tslib_1.__decorate([
    (0, typegoose_1.prop)({
        default: false
    }),
    tslib_1.__metadata("design:type", Boolean)
], Role.prototype, "courseCreate", void 0);
tslib_1.__decorate([
    (0, typegoose_1.prop)({
        default: false
    }),
    tslib_1.__metadata("design:type", Boolean)
], Role.prototype, "courseUpdate", void 0);
tslib_1.__decorate([
    (0, typegoose_1.prop)({
        default: false
    }),
    tslib_1.__metadata("design:type", Boolean)
], Role.prototype, "courseDelete", void 0);
Role = tslib_1.__decorate([
    (0, typegoose_1.modelOptions)({
        schemaOptions: {
            collection: collections_1.COLLECTIONS.ROLE,
        },
    }),
    (0, typegoose_1.index)({
        name: 1,
    }, {
        unique: true,
        name: 'name',
        background: true,
        partialFilterExpression: {
            isDeleted: false,
            $type: 'boolean',
        },
    }),
    (0, typegoose_1.index)({
        isDeleted: 1,
    }, {
        background: true,
        name: 'isDeleted',
    })
], Role);
exports.Role = Role;
exports.RoleModel = (0, typegoose_1.getModelForClass)(Role);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kZWxzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbW1vbi9kYi9tb2RlbHMvZW1wbG95ZWUvcm9sZS9tb2RlbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLG9EQUFtRjtBQUNuRixtRUFBZ0U7QUFDaEUsaURBQStDO0FBK0IvQyxJQUFhLElBQUksR0FBakIsTUFBYSxJQUFLLFNBQVEsd0JBQVc7Q0F3S3BDLENBQUE7QUFuS0M7SUFKQyxJQUFBLGdCQUFJLEVBQUM7UUFDSixJQUFJLEVBQUUsSUFBSTtRQUNWLFFBQVEsRUFBRSxJQUFJO0tBQ2YsQ0FBQzs7a0NBQ1c7QUFNYjtJQUhDLElBQUEsZ0JBQUksRUFBQztRQUNKLE9BQU8sRUFBRSxLQUFLO0tBQ2YsQ0FBQzs7bUNBQ2E7QUFLZjtJQUhDLElBQUEsZ0JBQUksRUFBQztRQUNKLE9BQU8sRUFBRSxLQUFLO0tBQ2YsQ0FBQzs7eUNBQ21CO0FBS3JCO0lBSEMsSUFBQSxnQkFBSSxFQUFDO1FBQ0osT0FBTyxFQUFFLEtBQUs7S0FDZixDQUFDOzt5Q0FDbUI7QUFLckI7SUFIQyxJQUFBLGdCQUFJLEVBQUM7UUFDSixPQUFPLEVBQUUsS0FBSztLQUNmLENBQUM7O3lDQUNtQjtBQVFyQjtJQUhDLElBQUEsZ0JBQUksRUFBQztRQUNKLE9BQU8sRUFBRSxLQUFLO0tBQ2YsQ0FBQzs7a0NBQ1k7QUFLZDtJQUhDLElBQUEsZ0JBQUksRUFBQztRQUNKLE9BQU8sRUFBRSxLQUFLO0tBQ2YsQ0FBQzs7d0NBQ2tCO0FBS3BCO0lBSEMsSUFBQSxnQkFBSSxFQUFDO1FBQ0osT0FBTyxFQUFFLEtBQUs7S0FDZixDQUFDOzt3Q0FDa0I7QUFLcEI7SUFIQyxJQUFBLGdCQUFJLEVBQUM7UUFDSixPQUFPLEVBQUUsS0FBSztLQUNmLENBQUM7O3dDQUNrQjtBQVFwQjtJQUhDLElBQUEsZ0JBQUksRUFBQztRQUNKLE9BQU8sRUFBRSxLQUFLO0tBQ2YsQ0FBQzs7a0NBQ1k7QUFLZDtJQUhDLElBQUEsZ0JBQUksRUFBQztRQUNKLE9BQU8sRUFBRSxLQUFLO0tBQ2YsQ0FBQzs7d0NBQ2tCO0FBS3BCO0lBSEMsSUFBQSxnQkFBSSxFQUFDO1FBQ0osT0FBTyxFQUFFLEtBQUs7S0FDZixDQUFDOzt3Q0FDa0I7QUFLcEI7SUFIQyxJQUFBLGdCQUFJLEVBQUM7UUFDSixPQUFPLEVBQUUsS0FBSztLQUNmLENBQUM7O3dDQUNrQjtBQVFwQjtJQUhDLElBQUEsZ0JBQUksRUFBQztRQUNKLE9BQU8sRUFBRSxLQUFLO0tBQ2YsQ0FBQzs7b0NBQ2M7QUFLaEI7SUFIQyxJQUFBLGdCQUFJLEVBQUM7UUFDSixPQUFPLEVBQUUsS0FBSztLQUNmLENBQUM7OzBDQUNvQjtBQUt0QjtJQUhDLElBQUEsZ0JBQUksRUFBQztRQUNKLE9BQU8sRUFBRSxLQUFLO0tBQ2YsQ0FBQzs7MENBQ29CO0FBS3RCO0lBSEMsSUFBQSxnQkFBSSxFQUFDO1FBQ0osT0FBTyxFQUFFLEtBQUs7S0FDZixDQUFDOzswQ0FDb0I7QUFRdEI7SUFIQyxJQUFBLGdCQUFJLEVBQUM7UUFDSixPQUFPLEVBQUUsS0FBSztLQUNmLENBQUM7O2tDQUNZO0FBS2Q7SUFIQyxJQUFBLGdCQUFJLEVBQUM7UUFDSixPQUFPLEVBQUUsS0FBSztLQUNmLENBQUM7O3dDQUNrQjtBQUtwQjtJQUhDLElBQUEsZ0JBQUksRUFBQztRQUNKLE9BQU8sRUFBRSxLQUFLO0tBQ2YsQ0FBQzs7d0NBQ2tCO0FBS3BCO0lBSEMsSUFBQSxnQkFBSSxFQUFDO1FBQ0osT0FBTyxFQUFFLEtBQUs7S0FDZixDQUFDOzt3Q0FDa0I7QUFRcEI7SUFIQyxJQUFBLGdCQUFJLEVBQUM7UUFDSixPQUFPLEVBQUUsS0FBSztLQUNmLENBQUM7O3NDQUNnQjtBQUtsQjtJQUhDLElBQUEsZ0JBQUksRUFBQztRQUNKLE9BQU8sRUFBRSxLQUFLO0tBQ2YsQ0FBQzs7NENBQ3NCO0FBS3hCO0lBSEMsSUFBQSxnQkFBSSxFQUFDO1FBQ0osT0FBTyxFQUFFLEtBQUs7S0FDZixDQUFDOzs0Q0FDc0I7QUFLeEI7SUFIQyxJQUFBLGdCQUFJLEVBQUM7UUFDSixPQUFPLEVBQUUsS0FBSztLQUNmLENBQUM7OzRDQUNzQjtBQVF4QjtJQUhDLElBQUEsZ0JBQUksRUFBQztRQUNKLE9BQU8sRUFBRSxLQUFLO0tBQ2YsQ0FBQzs7b0NBQ2M7QUFLaEI7SUFIQyxJQUFBLGdCQUFJLEVBQUM7UUFDSixPQUFPLEVBQUUsS0FBSztLQUNmLENBQUM7OzBDQUNvQjtBQUt0QjtJQUhDLElBQUEsZ0JBQUksRUFBQztRQUNKLE9BQU8sRUFBRSxLQUFLO0tBQ2YsQ0FBQzs7MENBQ29CO0FBS3RCO0lBSEMsSUFBQSxnQkFBSSxFQUFDO1FBQ0osT0FBTyxFQUFFLEtBQUs7S0FDZixDQUFDOzswQ0FDb0I7QUFwS1gsSUFBSTtJQTdCaEIsSUFBQSx3QkFBWSxFQUFDO1FBQ1osYUFBYSxFQUFFO1lBQ2IsVUFBVSxFQUFFLHlCQUFXLENBQUMsSUFBSTtTQUM3QjtLQUNGLENBQUM7SUFDRCxJQUFBLGlCQUFLLEVBQ0o7UUFDRSxJQUFJLEVBQUUsQ0FBQztLQUNSLEVBQ0Q7UUFDRSxNQUFNLEVBQUUsSUFBSTtRQUNaLElBQUksRUFBRSxNQUFNO1FBQ1osVUFBVSxFQUFFLElBQUk7UUFDaEIsdUJBQXVCLEVBQUU7WUFDdkIsU0FBUyxFQUFFLEtBQUs7WUFDaEIsS0FBSyxFQUFFLFNBQVM7U0FDakI7S0FDRixDQUNGO0lBRUEsSUFBQSxpQkFBSyxFQUNKO1FBQ0UsU0FBUyxFQUFFLENBQUM7S0FDYixFQUNEO1FBQ0UsVUFBVSxFQUFFLElBQUk7UUFDaEIsSUFBSSxFQUFFLFdBQVc7S0FDbEIsQ0FDRjtHQUNZLElBQUksQ0F3S2hCO0FBeEtZLG9CQUFJO0FBMEtKLFFBQUEsU0FBUyxHQUFHLElBQUEsNEJBQWdCLEVBQUMsSUFBSSxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnZXRNb2RlbEZvckNsYXNzLCBpbmRleCwgbW9kZWxPcHRpb25zLCBwcm9wIH0gZnJvbSAnQHR5cGVnb29zZS90eXBlZ29vc2UnO1xyXG5pbXBvcnQgeyBDT0xMRUNUSU9OUyB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbnN0YW50cy9jb2xsZWN0aW9ucyc7XHJcbmltcG9ydCB7IENvbW1vbk1vZGVsIH0gZnJvbSAnLi4vLi4vYmFzZS5tb2RlbCc7XHJcblxyXG5AbW9kZWxPcHRpb25zKHtcclxuICBzY2hlbWFPcHRpb25zOiB7XHJcbiAgICBjb2xsZWN0aW9uOiBDT0xMRUNUSU9OUy5ST0xFLFxyXG4gIH0sXHJcbn0pXHJcbkBpbmRleChcclxuICB7XHJcbiAgICBuYW1lOiAxLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdW5pcXVlOiB0cnVlLFxyXG4gICAgbmFtZTogJ25hbWUnLFxyXG4gICAgYmFja2dyb3VuZDogdHJ1ZSxcclxuICAgIHBhcnRpYWxGaWx0ZXJFeHByZXNzaW9uOiB7XHJcbiAgICAgIGlzRGVsZXRlZDogZmFsc2UsXHJcbiAgICAgICR0eXBlOiAnYm9vbGVhbicsXHJcbiAgICB9LFxyXG4gIH0sXHJcbilcclxuXHJcbkBpbmRleChcclxuICB7XHJcbiAgICBpc0RlbGV0ZWQ6IDEsXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cnVlLFxyXG4gICAgbmFtZTogJ2lzRGVsZXRlZCcsXHJcbiAgfSxcclxuKVxyXG5leHBvcnQgY2xhc3MgUm9sZSBleHRlbmRzIENvbW1vbk1vZGVsIHtcclxuICBAcHJvcCh7XHJcbiAgICB0cmltOiB0cnVlLFxyXG4gICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgfSlcclxuICBuYW1lOiBzdHJpbmc7XHJcblxyXG4gIC8vZ2VucmVzIFxyXG4gIEBwcm9wKHtcclxuICAgIGRlZmF1bHQ6IGZhbHNlXHJcbiAgfSlcclxuICBnZW5yZTogYm9vbGVhbjtcclxuXHJcbiAgQHByb3Aoe1xyXG4gICAgZGVmYXVsdDogZmFsc2VcclxuICB9KVxyXG4gIGdlbnJlQ3JlYXRlOiBib29sZWFuO1xyXG5cclxuICBAcHJvcCh7XHJcbiAgICBkZWZhdWx0OiBmYWxzZVxyXG4gIH0pXHJcbiAgZ2VucmVVcGRhdGU6IGJvb2xlYW47XHJcblxyXG4gIEBwcm9wKHtcclxuICAgIGRlZmF1bHQ6IGZhbHNlXHJcbiAgfSlcclxuICBnZW5yZURlbGV0ZTogYm9vbGVhbjtcclxuXHJcbiAgLyoqICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXHJcblxyXG4gIC8vYm9va3NcclxuICBAcHJvcCh7XHJcbiAgICBkZWZhdWx0OiBmYWxzZVxyXG4gIH0pXHJcbiAgYm9vazogYm9vbGVhbjtcclxuXHJcbiAgQHByb3Aoe1xyXG4gICAgZGVmYXVsdDogZmFsc2VcclxuICB9KVxyXG4gIGJvb2tDcmVhdGU6IGJvb2xlYW47XHJcblxyXG4gIEBwcm9wKHtcclxuICAgIGRlZmF1bHQ6IGZhbHNlXHJcbiAgfSlcclxuICBib29rVXBkYXRlOiBib29sZWFuO1xyXG5cclxuICBAcHJvcCh7XHJcbiAgICBkZWZhdWx0OiBmYWxzZVxyXG4gIH0pXHJcbiAgYm9va0RlbGV0ZTogYm9vbGVhbjtcclxuXHJcbiAgLyoqICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cclxuXHJcbiAgLy91c2VyXHJcbiAgQHByb3Aoe1xyXG4gICAgZGVmYXVsdDogZmFsc2VcclxuICB9KVxyXG4gIHVzZXI6IGJvb2xlYW47XHJcblxyXG4gIEBwcm9wKHtcclxuICAgIGRlZmF1bHQ6IGZhbHNlXHJcbiAgfSlcclxuICB1c2VyQ3JlYXRlOiBib29sZWFuO1xyXG5cclxuICBAcHJvcCh7XHJcbiAgICBkZWZhdWx0OiBmYWxzZVxyXG4gIH0pXHJcbiAgdXNlclVwZGF0ZTogYm9vbGVhbjtcclxuXHJcbiAgQHByb3Aoe1xyXG4gICAgZGVmYXVsdDogZmFsc2VcclxuICB9KVxyXG4gIHVzZXJEZWxldGU6IGJvb2xlYW47XHJcblxyXG4gIC8qKiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXHJcblxyXG4gIC8vYXV0aG9yXHJcbiAgQHByb3Aoe1xyXG4gICAgZGVmYXVsdDogZmFsc2VcclxuICB9KVxyXG4gIGF1dGhvcjogYm9vbGVhbjtcclxuXHJcbiAgQHByb3Aoe1xyXG4gICAgZGVmYXVsdDogZmFsc2VcclxuICB9KVxyXG4gIGF1dGhvckNyZWF0ZTogYm9vbGVhbjtcclxuXHJcbiAgQHByb3Aoe1xyXG4gICAgZGVmYXVsdDogZmFsc2VcclxuICB9KVxyXG4gIGF1dGhvclVwZGF0ZTogYm9vbGVhbjtcclxuXHJcbiAgQHByb3Aoe1xyXG4gICAgZGVmYXVsdDogZmFsc2VcclxuICB9KVxyXG4gIGF1dGhvckRlbGV0ZTogYm9vbGVhbjtcclxuXHJcbiAgLyoqICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cclxuXHJcbiAgLy9yb2xlXHJcbiAgQHByb3Aoe1xyXG4gICAgZGVmYXVsdDogZmFsc2VcclxuICB9KVxyXG4gIHJvbGU6IGJvb2xlYW47XHJcblxyXG4gIEBwcm9wKHtcclxuICAgIGRlZmF1bHQ6IGZhbHNlXHJcbiAgfSlcclxuICByb2xlQ3JlYXRlOiBib29sZWFuO1xyXG5cclxuICBAcHJvcCh7XHJcbiAgICBkZWZhdWx0OiBmYWxzZVxyXG4gIH0pXHJcbiAgcm9sZVVwZGF0ZTogYm9vbGVhbjtcclxuXHJcbiAgQHByb3Aoe1xyXG4gICAgZGVmYXVsdDogZmFsc2VcclxuICB9KVxyXG4gIHJvbGVEZWxldGU6IGJvb2xlYW47XHJcblxyXG4gIC8qKiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXHJcblxyXG4gIC8vZW1wbG95ZWVcclxuICBAcHJvcCh7XHJcbiAgICBkZWZhdWx0OiBmYWxzZVxyXG4gIH0pXHJcbiAgZW1wbG95ZWU6IGJvb2xlYW47XHJcblxyXG4gIEBwcm9wKHtcclxuICAgIGRlZmF1bHQ6IGZhbHNlXHJcbiAgfSlcclxuICBlbXBsb3llZUNyZWF0ZTogYm9vbGVhbjtcclxuXHJcbiAgQHByb3Aoe1xyXG4gICAgZGVmYXVsdDogZmFsc2VcclxuICB9KVxyXG4gIGVtcGxveWVlVXBkYXRlOiBib29sZWFuO1xyXG5cclxuICBAcHJvcCh7XHJcbiAgICBkZWZhdWx0OiBmYWxzZVxyXG4gIH0pXHJcbiAgZW1wbG95ZWVEZWxldGU6IGJvb2xlYW47XHJcblxyXG4gIC8qKiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXHJcblxyXG4gIC8vZGlzY291bnRcclxuICBAcHJvcCh7XHJcbiAgICBkZWZhdWx0OiBmYWxzZVxyXG4gIH0pXHJcbiAgY291cnNlOiBib29sZWFuO1xyXG5cclxuICBAcHJvcCh7XHJcbiAgICBkZWZhdWx0OiBmYWxzZVxyXG4gIH0pXHJcbiAgY291cnNlQ3JlYXRlOiBib29sZWFuO1xyXG5cclxuICBAcHJvcCh7XHJcbiAgICBkZWZhdWx0OiBmYWxzZVxyXG4gIH0pXHJcbiAgY291cnNlVXBkYXRlOiBib29sZWFuO1xyXG5cclxuICBAcHJvcCh7XHJcbiAgICBkZWZhdWx0OiBmYWxzZVxyXG4gIH0pXHJcbiAgY291cnNlRGVsZXRlOiBib29sZWFuO1xyXG5cclxuICAvKiogKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xyXG5cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFJvbGVNb2RlbCA9IGdldE1vZGVsRm9yQ2xhc3MoUm9sZSk7Il19