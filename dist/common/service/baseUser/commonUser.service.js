"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommonUserService = void 0;
const exceptions_1 = require("../../constants/exceptions");
const common_service_1 = require("../common.service");
class CommonUserService extends common_service_1.CommonServices {
    constructor(model, ErrorException) {
        super(model, ErrorException);
    }
    async findByPhone(phoneNumber) {
        return await this.findOne({ phoneNumber, isDeleted: false });
    }
    async findByIdError(id, options, projection) {
        const user = await this.findById(id, options, projection);
        if (!user)
            throw exceptions_1.CommonUserException.NotFound(id);
        return user;
    }
    async findByPhoneError(phoneNumber) {
        const user = await this.findByPhone(phoneNumber);
        if (!user)
            throw exceptions_1.CommonUserException.NotFound(phoneNumber);
        return user;
    }
}
exports.CommonUserService = CommonUserService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uVXNlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2NvbW1vbi9zZXJ2aWNlL2Jhc2VVc2VyL2NvbW1vblVzZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFDQSwyREFBaUU7QUFFakUsc0RBQW1EO0FBRW5ELE1BQWEsaUJBQXFCLFNBQVEsK0JBQWlCO0lBQ3pELFlBQVksS0FBbUIsRUFBRSxjQUFjO1FBQzdDLEtBQUssQ0FBQyxLQUFLLEVBQUUsY0FBYyxDQUFDLENBQUM7SUFDL0IsQ0FBQztJQUNNLEtBQUssQ0FBQyxXQUFXLENBQUMsV0FBVztRQUNsQyxPQUFPLE1BQU0sSUFBSSxDQUFDLE9BQU8sQ0FBYSxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztJQUMzRSxDQUFDO0lBRU0sS0FBSyxDQUFDLGFBQWEsQ0FBQyxFQUFFLEVBQUUsT0FBUSxFQUFFLFVBQVc7UUFDbEQsTUFBTSxJQUFJLEdBQUcsTUFBTSxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsRUFBRSxPQUFPLEVBQUUsVUFBVSxDQUFDLENBQUM7UUFDMUQsSUFBSSxDQUFDLElBQUk7WUFBRSxNQUFNLGdDQUFtQixDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNsRCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFFTSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsV0FBVztRQUN2QyxNQUFNLElBQUksR0FBRyxNQUFNLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDakQsSUFBSSxDQUFDLElBQUk7WUFBRSxNQUFNLGdDQUFtQixDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUMzRCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7Q0FDRjtBQW5CRCw4Q0FtQkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb2RlbFR5cGUgfSBmcm9tICdAdHlwZWdvb3NlL3R5cGVnb29zZS9saWIvdHlwZXMnO1xyXG5pbXBvcnQgeyBDb21tb25Vc2VyRXhjZXB0aW9uIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzL2V4Y2VwdGlvbnMnO1xyXG5pbXBvcnQgeyBDb21tb25Vc2VyIH0gZnJvbSAnLi4vLi4vZGIvYmFzZVVzZXIubW9kZWwnO1xyXG5pbXBvcnQgeyBDb21tb25TZXJ2aWNlcyB9IGZyb20gJy4uL2NvbW1vbi5zZXJ2aWNlJztcclxuXHJcbmV4cG9ydCBjbGFzcyBDb21tb25Vc2VyU2VydmljZTxUPiBleHRlbmRzIENvbW1vblNlcnZpY2VzPFQ+IHtcclxuICBjb25zdHJ1Y3Rvcihtb2RlbDogTW9kZWxUeXBlPFQ+LCBFcnJvckV4Y2VwdGlvbikge1xyXG4gICAgc3VwZXIobW9kZWwsIEVycm9yRXhjZXB0aW9uKTtcclxuICB9XHJcbiAgcHVibGljIGFzeW5jIGZpbmRCeVBob25lKHBob25lTnVtYmVyKSB7XHJcbiAgICByZXR1cm4gYXdhaXQgdGhpcy5maW5kT25lPENvbW1vblVzZXI+KHsgcGhvbmVOdW1iZXIsIGlzRGVsZXRlZDogZmFsc2UgfSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgYXN5bmMgZmluZEJ5SWRFcnJvcihpZCwgb3B0aW9ucz8sIHByb2plY3Rpb24/KSB7XHJcbiAgICBjb25zdCB1c2VyID0gYXdhaXQgdGhpcy5maW5kQnlJZChpZCwgb3B0aW9ucywgcHJvamVjdGlvbik7XHJcbiAgICBpZiAoIXVzZXIpIHRocm93IENvbW1vblVzZXJFeGNlcHRpb24uTm90Rm91bmQoaWQpO1xyXG4gICAgcmV0dXJuIHVzZXI7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgYXN5bmMgZmluZEJ5UGhvbmVFcnJvcihwaG9uZU51bWJlcikge1xyXG4gICAgY29uc3QgdXNlciA9IGF3YWl0IHRoaXMuZmluZEJ5UGhvbmUocGhvbmVOdW1iZXIpO1xyXG4gICAgaWYgKCF1c2VyKSB0aHJvdyBDb21tb25Vc2VyRXhjZXB0aW9uLk5vdEZvdW5kKHBob25lTnVtYmVyKTtcclxuICAgIHJldHVybiB1c2VyO1xyXG4gIH1cclxufVxyXG4iXX0=