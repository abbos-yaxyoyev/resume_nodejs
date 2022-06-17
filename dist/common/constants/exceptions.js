"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommonUserException = exports.FileException = exports.CommonException = void 0;
const errors_1 = require("./errors");
class CommonException {
    constructor(code, message, data) {
        this.code = code;
        this.message = message;
        this.data = data;
    }
    static UnknownError(data) {
        return new CommonException(errors_1.ERROR_CODES.BASE, 'Unknown error', data);
    }
    static ValidationError(data) {
        return new CommonException(errors_1.ERROR_CODES.BASE + 1, 'Validation Error', data);
    }
    static AllreadyExist(data, collectionName, message) {
        return new CommonException(errors_1.ERROR_CODES.BASE, `collectionName:  ${collectionName},  already exist , message: ${message}`, data);
    }
}
exports.CommonException = CommonException;
class FileException {
    static InvalidUploadType(data = null) {
        return new CommonException(errors_1.ERROR_CODES.FILE, 'Invalid upload type', data);
    }
    static FileNotFound(data = null) {
        return new CommonException(errors_1.ERROR_CODES.FILE + 1, 'Invalid upload type', data);
    }
}
exports.FileException = FileException;
class CommonUserException extends CommonException {
    static AllreadyExist(data) {
        return new CommonUserException(errors_1.ERROR_CODES.USER, 'user exist', data);
    }
    static NotFound(data) {
        return new CommonUserException(errors_1.ERROR_CODES.USER, 'user not found', data);
    }
    static NotEnoughPermission(data = null) {
        return new CommonUserException(errors_1.ERROR_CODES.USER, 'Not enough permissions to access', data);
    }
}
exports.CommonUserException = CommonUserException;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhjZXB0aW9ucy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21tb24vY29uc3RhbnRzL2V4Y2VwdGlvbnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEscUNBQXVDO0FBRXZDLE1BQWEsZUFBZTtJQUMxQixZQUFtQixJQUFZLEVBQVMsT0FBZSxFQUFTLElBQVM7UUFBdEQsU0FBSSxHQUFKLElBQUksQ0FBUTtRQUFTLFlBQU8sR0FBUCxPQUFPLENBQVE7UUFBUyxTQUFJLEdBQUosSUFBSSxDQUFLO0lBQUksQ0FBQztJQUN2RSxNQUFNLENBQUMsWUFBWSxDQUFDLElBQVU7UUFDbkMsT0FBTyxJQUFJLGVBQWUsQ0FBQyxvQkFBVyxDQUFDLElBQUksRUFBRSxlQUFlLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDdEUsQ0FBQztJQUVNLE1BQU0sQ0FBQyxlQUFlLENBQUMsSUFBVTtRQUN0QyxPQUFPLElBQUksZUFBZSxDQUFDLG9CQUFXLENBQUMsSUFBSSxHQUFHLENBQUMsRUFBRSxrQkFBa0IsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUM3RSxDQUFDO0lBRUQsTUFBTSxDQUFDLGFBQWEsQ0FBQyxJQUFLLEVBQUUsY0FBZSxFQUFFLE9BQVE7UUFDbkQsT0FBTyxJQUFJLGVBQWUsQ0FBQyxvQkFBVyxDQUFDLElBQUksRUFBRSxvQkFBb0IsY0FBYywrQkFBK0IsT0FBTyxFQUFFLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDakksQ0FBQztDQUNGO0FBYkQsMENBYUM7QUFFRCxNQUFhLGFBQWE7SUFFakIsTUFBTSxDQUFDLGlCQUFpQixDQUFDLE9BQVksSUFBSTtRQUM5QyxPQUFPLElBQUksZUFBZSxDQUFDLG9CQUFXLENBQUMsSUFBSSxFQUFFLHFCQUFxQixFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzVFLENBQUM7SUFFTSxNQUFNLENBQUMsWUFBWSxDQUFDLE9BQVksSUFBSTtRQUN6QyxPQUFPLElBQUksZUFBZSxDQUFDLG9CQUFXLENBQUMsSUFBSSxHQUFHLENBQUMsRUFBRSxxQkFBcUIsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNoRixDQUFDO0NBRUY7QUFWRCxzQ0FVQztBQUVELE1BQWEsbUJBQW9CLFNBQVEsZUFBZTtJQUN0RCxNQUFNLENBQUMsYUFBYSxDQUFDLElBQUk7UUFDdkIsT0FBTyxJQUFJLG1CQUFtQixDQUFDLG9CQUFXLENBQUMsSUFBSSxFQUFFLFlBQVksRUFBRSxJQUFJLENBQUMsQ0FBQztJQUN2RSxDQUFDO0lBQ0QsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJO1FBQ2xCLE9BQU8sSUFBSSxtQkFBbUIsQ0FBQyxvQkFBVyxDQUFDLElBQUksRUFBRSxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUMzRSxDQUFDO0lBQ0QsTUFBTSxDQUFDLG1CQUFtQixDQUFDLE9BQVksSUFBSTtRQUN6QyxPQUFPLElBQUksbUJBQW1CLENBQUMsb0JBQVcsQ0FBQyxJQUFJLEVBQUUsa0NBQWtDLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDN0YsQ0FBQztDQUNGO0FBVkQsa0RBVUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFUlJPUl9DT0RFUyB9IGZyb20gJy4vZXJyb3JzJztcclxuXHJcbmV4cG9ydCBjbGFzcyBDb21tb25FeGNlcHRpb24ge1xyXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBjb2RlOiBudW1iZXIsIHB1YmxpYyBtZXNzYWdlOiBzdHJpbmcsIHB1YmxpYyBkYXRhOiBhbnkpIHsgfVxyXG4gIHB1YmxpYyBzdGF0aWMgVW5rbm93bkVycm9yKGRhdGE/OiBhbnkpIHtcclxuICAgIHJldHVybiBuZXcgQ29tbW9uRXhjZXB0aW9uKEVSUk9SX0NPREVTLkJBU0UsICdVbmtub3duIGVycm9yJywgZGF0YSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIFZhbGlkYXRpb25FcnJvcihkYXRhPzogYW55KSB7XHJcbiAgICByZXR1cm4gbmV3IENvbW1vbkV4Y2VwdGlvbihFUlJPUl9DT0RFUy5CQVNFICsgMSwgJ1ZhbGlkYXRpb24gRXJyb3InLCBkYXRhKTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBBbGxyZWFkeUV4aXN0KGRhdGE/LCBjb2xsZWN0aW9uTmFtZT8sIG1lc3NhZ2U/LCkge1xyXG4gICAgcmV0dXJuIG5ldyBDb21tb25FeGNlcHRpb24oRVJST1JfQ09ERVMuQkFTRSwgYGNvbGxlY3Rpb25OYW1lOiAgJHtjb2xsZWN0aW9uTmFtZX0sICBhbHJlYWR5IGV4aXN0ICwgbWVzc2FnZTogJHttZXNzYWdlfWAsIGRhdGEpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEZpbGVFeGNlcHRpb24ge1xyXG5cclxuICBwdWJsaWMgc3RhdGljIEludmFsaWRVcGxvYWRUeXBlKGRhdGE6IGFueSA9IG51bGwpIHtcclxuICAgIHJldHVybiBuZXcgQ29tbW9uRXhjZXB0aW9uKEVSUk9SX0NPREVTLkZJTEUsICdJbnZhbGlkIHVwbG9hZCB0eXBlJywgZGF0YSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIEZpbGVOb3RGb3VuZChkYXRhOiBhbnkgPSBudWxsKSB7XHJcbiAgICByZXR1cm4gbmV3IENvbW1vbkV4Y2VwdGlvbihFUlJPUl9DT0RFUy5GSUxFICsgMSwgJ0ludmFsaWQgdXBsb2FkIHR5cGUnLCBkYXRhKTtcclxuICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQ29tbW9uVXNlckV4Y2VwdGlvbiBleHRlbmRzIENvbW1vbkV4Y2VwdGlvbiB7XHJcbiAgc3RhdGljIEFsbHJlYWR5RXhpc3QoZGF0YSkge1xyXG4gICAgcmV0dXJuIG5ldyBDb21tb25Vc2VyRXhjZXB0aW9uKEVSUk9SX0NPREVTLlVTRVIsICd1c2VyIGV4aXN0JywgZGF0YSk7XHJcbiAgfVxyXG4gIHN0YXRpYyBOb3RGb3VuZChkYXRhKSB7XHJcbiAgICByZXR1cm4gbmV3IENvbW1vblVzZXJFeGNlcHRpb24oRVJST1JfQ09ERVMuVVNFUiwgJ3VzZXIgbm90IGZvdW5kJywgZGF0YSk7XHJcbiAgfVxyXG4gIHN0YXRpYyBOb3RFbm91Z2hQZXJtaXNzaW9uKGRhdGE6IGFueSA9IG51bGwpIHtcclxuICAgIHJldHVybiBuZXcgQ29tbW9uVXNlckV4Y2VwdGlvbihFUlJPUl9DT0RFUy5VU0VSLCAnTm90IGVub3VnaCBwZXJtaXNzaW9ucyB0byBhY2Nlc3MnLCBkYXRhKTtcclxuICB9XHJcbn1cclxuIl19