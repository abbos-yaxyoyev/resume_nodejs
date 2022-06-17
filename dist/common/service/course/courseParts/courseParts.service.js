"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.coursePartsService = void 0;
const models_1 = require("../../../db/models/course/courseParts/models");
const exceptions_1 = require("../../../db/models/course/exceptions");
const common_service_1 = require("../../common.service");
class CoursePartsService extends common_service_1.CommonServices {
    constructor(model) {
        super(model, exceptions_1.CourseException);
    }
    async findByIdError(id) {
        const genre = await this.findById(id);
        if (!genre)
            throw exceptions_1.CourseException.NotFound(id);
        return genre;
    }
}
exports.coursePartsService = new CoursePartsService(models_1.CoursePartsModel);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY291cnNlUGFydHMuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9jb21tb24vc2VydmljZS9jb3Vyc2UvY291cnNlUGFydHMvY291cnNlUGFydHMuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFDQSx5RUFBNkY7QUFDN0YscUVBQXVFO0FBQ3ZFLHlEQUFzRDtBQUV0RCxNQUFNLGtCQUFtQixTQUFRLCtCQUEyQjtJQUMxRCxZQUFZLEtBQTZCO1FBQ3ZDLEtBQUssQ0FBQyxLQUFLLEVBQUUsNEJBQWUsQ0FBQyxDQUFDO0lBQ2hDLENBQUM7SUFFTSxLQUFLLENBQUMsYUFBYSxDQUFDLEVBQUU7UUFDM0IsTUFBTSxLQUFLLEdBQUcsTUFBTSxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3RDLElBQUksQ0FBQyxLQUFLO1lBQUUsTUFBTSw0QkFBZSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUMvQyxPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7Q0FFRjtBQUVZLFFBQUEsa0JBQWtCLEdBQUcsSUFBSSxrQkFBa0IsQ0FBQyx5QkFBZ0IsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9kZWxUeXBlIH0gZnJvbSAnQHR5cGVnb29zZS90eXBlZ29vc2UvbGliL3R5cGVzJztcclxuaW1wb3J0IHsgQ291cnNlUGFydHMsIENvdXJzZVBhcnRzTW9kZWwgfSBmcm9tICcuLi8uLi8uLi9kYi9tb2RlbHMvY291cnNlL2NvdXJzZVBhcnRzL21vZGVscyc7XHJcbmltcG9ydCB7IENvdXJzZUV4Y2VwdGlvbiB9IGZyb20gJy4uLy4uLy4uL2RiL21vZGVscy9jb3Vyc2UvZXhjZXB0aW9ucyc7XHJcbmltcG9ydCB7IENvbW1vblNlcnZpY2VzIH0gZnJvbSAnLi4vLi4vY29tbW9uLnNlcnZpY2UnO1xyXG5cclxuY2xhc3MgQ291cnNlUGFydHNTZXJ2aWNlIGV4dGVuZHMgQ29tbW9uU2VydmljZXM8Q291cnNlUGFydHM+e1xyXG4gIGNvbnN0cnVjdG9yKG1vZGVsOiBNb2RlbFR5cGU8Q291cnNlUGFydHM+KSB7XHJcbiAgICBzdXBlcihtb2RlbCwgQ291cnNlRXhjZXB0aW9uKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBhc3luYyBmaW5kQnlJZEVycm9yKGlkKSB7XHJcbiAgICBjb25zdCBnZW5yZSA9IGF3YWl0IHRoaXMuZmluZEJ5SWQoaWQpO1xyXG4gICAgaWYgKCFnZW5yZSkgdGhyb3cgQ291cnNlRXhjZXB0aW9uLk5vdEZvdW5kKGlkKTtcclxuICAgIHJldHVybiBnZW5yZTtcclxuICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgY291cnNlUGFydHNTZXJ2aWNlID0gbmV3IENvdXJzZVBhcnRzU2VydmljZShDb3Vyc2VQYXJ0c01vZGVsKSJdfQ==