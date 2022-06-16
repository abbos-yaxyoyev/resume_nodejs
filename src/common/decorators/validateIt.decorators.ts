import { isMongoId, registerDecorator, ValidationArguments, ValidationOptions } from "class-validator"
import { Types } from "mongoose"

export function IsMongoIdCustom(validationOptions?: ValidationOptions) {
  return function (object: any, propertyName: string) {
    registerDecorator({
      name: 'isMongoIdCustom',
      target: object.constructor,
      propertyName: propertyName,
      constraints: [],
      options: {
        ...validationOptions,
        message: `${propertyName} must be mongodb id`
      },
      validator: {
        validate(value: any, args: ValidationArguments) {

          if (!isMongoId(value?.toString())) return false

          if (args.object[propertyName] instanceof Array) {
            args.object[propertyName] = args.object[propertyName].map(id => new Types.ObjectId(id?.toString()))
          }
          else {
            args.object[propertyName] = new Types.ObjectId(value?.toString())
          }
          return true
        }
      }
    })
  }
}