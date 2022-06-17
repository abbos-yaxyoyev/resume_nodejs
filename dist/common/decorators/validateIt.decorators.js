"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsMongoIdCustom = void 0;
const class_validator_1 = require("class-validator");
const mongoose_1 = require("mongoose");
function IsMongoIdCustom(validationOptions) {
    return function (object, propertyName) {
        (0, class_validator_1.registerDecorator)({
            name: 'isMongoIdCustom',
            target: object.constructor,
            propertyName: propertyName,
            constraints: [],
            options: {
                ...validationOptions,
                message: `${propertyName} must be mongodb id`
            },
            validator: {
                validate(value, args) {
                    if (!(0, class_validator_1.isMongoId)(value?.toString()))
                        return false;
                    if (args.object[propertyName] instanceof Array) {
                        args.object[propertyName] = args.object[propertyName].map(id => new mongoose_1.Types.ObjectId(id?.toString()));
                    }
                    else {
                        args.object[propertyName] = new mongoose_1.Types.ObjectId(value?.toString());
                    }
                    return true;
                }
            }
        });
    };
}
exports.IsMongoIdCustom = IsMongoIdCustom;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGVJdC5kZWNvcmF0b3JzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvbW1vbi9kZWNvcmF0b3JzL3ZhbGlkYXRlSXQuZGVjb3JhdG9ycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxxREFBc0c7QUFDdEcsdUNBQWdDO0FBRWhDLFNBQWdCLGVBQWUsQ0FBQyxpQkFBcUM7SUFDbkUsT0FBTyxVQUFVLE1BQVcsRUFBRSxZQUFvQjtRQUNoRCxJQUFBLG1DQUFpQixFQUFDO1lBQ2hCLElBQUksRUFBRSxpQkFBaUI7WUFDdkIsTUFBTSxFQUFFLE1BQU0sQ0FBQyxXQUFXO1lBQzFCLFlBQVksRUFBRSxZQUFZO1lBQzFCLFdBQVcsRUFBRSxFQUFFO1lBQ2YsT0FBTyxFQUFFO2dCQUNQLEdBQUcsaUJBQWlCO2dCQUNwQixPQUFPLEVBQUUsR0FBRyxZQUFZLHFCQUFxQjthQUM5QztZQUNELFNBQVMsRUFBRTtnQkFDVCxRQUFRLENBQUMsS0FBVSxFQUFFLElBQXlCO29CQUU1QyxJQUFJLENBQUMsSUFBQSwyQkFBUyxFQUFDLEtBQUssRUFBRSxRQUFRLEVBQUUsQ0FBQzt3QkFBRSxPQUFPLEtBQUssQ0FBQTtvQkFFL0MsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxZQUFZLEtBQUssRUFBRTt3QkFDOUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksZ0JBQUssQ0FBQyxRQUFRLENBQUMsRUFBRSxFQUFFLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQTtxQkFDcEc7eUJBQ0k7d0JBQ0gsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsR0FBRyxJQUFJLGdCQUFLLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxRQUFRLEVBQUUsQ0FBQyxDQUFBO3FCQUNsRTtvQkFDRCxPQUFPLElBQUksQ0FBQTtnQkFDYixDQUFDO2FBQ0Y7U0FDRixDQUFDLENBQUE7SUFDSixDQUFDLENBQUE7QUFDSCxDQUFDO0FBM0JELDBDQTJCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGlzTW9uZ29JZCwgcmVnaXN0ZXJEZWNvcmF0b3IsIFZhbGlkYXRpb25Bcmd1bWVudHMsIFZhbGlkYXRpb25PcHRpb25zIH0gZnJvbSBcImNsYXNzLXZhbGlkYXRvclwiXHJcbmltcG9ydCB7IFR5cGVzIH0gZnJvbSBcIm1vbmdvb3NlXCJcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBJc01vbmdvSWRDdXN0b20odmFsaWRhdGlvbk9wdGlvbnM/OiBWYWxpZGF0aW9uT3B0aW9ucykge1xyXG4gIHJldHVybiBmdW5jdGlvbiAob2JqZWN0OiBhbnksIHByb3BlcnR5TmFtZTogc3RyaW5nKSB7XHJcbiAgICByZWdpc3RlckRlY29yYXRvcih7XHJcbiAgICAgIG5hbWU6ICdpc01vbmdvSWRDdXN0b20nLFxyXG4gICAgICB0YXJnZXQ6IG9iamVjdC5jb25zdHJ1Y3RvcixcclxuICAgICAgcHJvcGVydHlOYW1lOiBwcm9wZXJ0eU5hbWUsXHJcbiAgICAgIGNvbnN0cmFpbnRzOiBbXSxcclxuICAgICAgb3B0aW9uczoge1xyXG4gICAgICAgIC4uLnZhbGlkYXRpb25PcHRpb25zLFxyXG4gICAgICAgIG1lc3NhZ2U6IGAke3Byb3BlcnR5TmFtZX0gbXVzdCBiZSBtb25nb2RiIGlkYFxyXG4gICAgICB9LFxyXG4gICAgICB2YWxpZGF0b3I6IHtcclxuICAgICAgICB2YWxpZGF0ZSh2YWx1ZTogYW55LCBhcmdzOiBWYWxpZGF0aW9uQXJndW1lbnRzKSB7XHJcblxyXG4gICAgICAgICAgaWYgKCFpc01vbmdvSWQodmFsdWU/LnRvU3RyaW5nKCkpKSByZXR1cm4gZmFsc2VcclxuXHJcbiAgICAgICAgICBpZiAoYXJncy5vYmplY3RbcHJvcGVydHlOYW1lXSBpbnN0YW5jZW9mIEFycmF5KSB7XHJcbiAgICAgICAgICAgIGFyZ3Mub2JqZWN0W3Byb3BlcnR5TmFtZV0gPSBhcmdzLm9iamVjdFtwcm9wZXJ0eU5hbWVdLm1hcChpZCA9PiBuZXcgVHlwZXMuT2JqZWN0SWQoaWQ/LnRvU3RyaW5nKCkpKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGFyZ3Mub2JqZWN0W3Byb3BlcnR5TmFtZV0gPSBuZXcgVHlwZXMuT2JqZWN0SWQodmFsdWU/LnRvU3RyaW5nKCkpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9XHJcbn0iXX0=