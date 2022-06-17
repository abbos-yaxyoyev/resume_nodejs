"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MinDateCustom = void 0;
const class_validator_1 = require("class-validator");
function MinDateCustom(validationOptions) {
    return function (object, propertyName) {
        (0, class_validator_1.registerDecorator)({
            name: 'MinDateCusatom',
            target: object.constructor,
            propertyName: propertyName,
            options: validationOptions,
            validator: {
                validate(value, args) {
                    console.log('value custom decorator: ', value);
                    return new Date(value) > new Date(); // you can return a Promise<boolean> here as well, if you want to make async validation
                },
            },
        });
    };
}
exports.MinDateCustom = MinDateCustom;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWluRGF0ZUN1c3RvbS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21tb24vdmFsaWRhdGlvbi9jdXN0b21EZWNvcmF0b3IvTWluRGF0ZUN1c3RvbS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxxREFBNEY7QUFFNUYsU0FBZ0IsYUFBYSxDQUFDLGlCQUFxQztJQUNqRSxPQUFPLFVBQVUsTUFBVyxFQUFFLFlBQW9CO1FBQ2hELElBQUEsbUNBQWlCLEVBQUM7WUFDaEIsSUFBSSxFQUFFLGdCQUFnQjtZQUN0QixNQUFNLEVBQUUsTUFBTSxDQUFDLFdBQVc7WUFDMUIsWUFBWSxFQUFFLFlBQVk7WUFDMUIsT0FBTyxFQUFFLGlCQUFpQjtZQUMxQixTQUFTLEVBQUU7Z0JBQ1QsUUFBUSxDQUFDLEtBQVUsRUFBRSxJQUF5QjtvQkFDNUMsT0FBTyxDQUFDLEdBQUcsQ0FBQywwQkFBMEIsRUFBRSxLQUFLLENBQUMsQ0FBQztvQkFDL0MsT0FBTyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDLENBQUMsdUZBQXVGO2dCQUM5SCxDQUFDO2FBQ0Y7U0FDRixDQUFDLENBQUM7SUFDTCxDQUFDLENBQUM7QUFDSixDQUFDO0FBZkQsc0NBZUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZWdpc3RlckRlY29yYXRvciwgVmFsaWRhdGlvbkFyZ3VtZW50cywgVmFsaWRhdGlvbk9wdGlvbnMgfSBmcm9tICdjbGFzcy12YWxpZGF0b3InO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIE1pbkRhdGVDdXN0b20odmFsaWRhdGlvbk9wdGlvbnM/OiBWYWxpZGF0aW9uT3B0aW9ucykge1xyXG4gIHJldHVybiBmdW5jdGlvbiAob2JqZWN0OiBhbnksIHByb3BlcnR5TmFtZTogc3RyaW5nKSB7XHJcbiAgICByZWdpc3RlckRlY29yYXRvcih7XHJcbiAgICAgIG5hbWU6ICdNaW5EYXRlQ3VzYXRvbScsXHJcbiAgICAgIHRhcmdldDogb2JqZWN0LmNvbnN0cnVjdG9yLFxyXG4gICAgICBwcm9wZXJ0eU5hbWU6IHByb3BlcnR5TmFtZSxcclxuICAgICAgb3B0aW9uczogdmFsaWRhdGlvbk9wdGlvbnMsXHJcbiAgICAgIHZhbGlkYXRvcjoge1xyXG4gICAgICAgIHZhbGlkYXRlKHZhbHVlOiBhbnksIGFyZ3M6IFZhbGlkYXRpb25Bcmd1bWVudHMpIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKCd2YWx1ZSBjdXN0b20gZGVjb3JhdG9yOiAnLCB2YWx1ZSk7XHJcbiAgICAgICAgICByZXR1cm4gbmV3IERhdGUodmFsdWUpID4gbmV3IERhdGUoKTsgLy8geW91IGNhbiByZXR1cm4gYSBQcm9taXNlPGJvb2xlYW4+IGhlcmUgYXMgd2VsbCwgaWYgeW91IHdhbnQgdG8gbWFrZSBhc3luYyB2YWxpZGF0aW9uXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG4gIH07XHJcbn1cclxuIl19