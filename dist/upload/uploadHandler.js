"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadFileHandler = void 0;
const tslib_1 = require("tslib");
const fs_1 = tslib_1.__importDefault(require("fs"));
const path_1 = tslib_1.__importDefault(require("path"));
const exceptions_1 = require("../common/constants/exceptions");
const fileUploadType_1 = require("../common/constants/fileUploadType");
const upload_dto_1 = require("../common/validation/dto/upload/upload.dto");
const validate_1 = require("./../common/validation/validate");
async function uploadFileHandler(request, reply) {
    const type = request.body.type;
    try {
        const fileType = await (0, validate_1.validateIt)({ type }, upload_dto_1.UploadDto, [upload_dto_1.UploadGroupDto.UPLOAD]);
        const files = request.raw.files;
        let url;
        if (!files)
            throw exceptions_1.FileException.InvalidUploadType();
        const file = files['file'];
        if (fileType.type == fileUploadType_1.uploadType.video) {
            url = 'preview/video' + '-' + file.md5 + path_1.default.extname(file.name);
        }
        else if (fileType.type == fileUploadType_1.uploadType.img) {
            url = 'img/img' + '-' + file.md5 + path_1.default.extname(file.name);
        }
        else {
            console.log('Invalid upload type: ');
            throw exceptions_1.FileException.InvalidUploadType();
        }
        const direction = path_1.default.join(__dirname, '../../');
        const wstream = fs_1.default.createWriteStream(direction + 'public/' + url);
        wstream.write(file.data);
        wstream.end();
        reply.success(url);
    }
    catch (e) {
        throw exceptions_1.CommonException.UnknownError(e);
    }
}
exports.uploadFileHandler = uploadFileHandler;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBsb2FkSGFuZGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91cGxvYWQvdXBsb2FkSGFuZGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsb0RBQW9CO0FBQ3BCLHdEQUF3QjtBQUN4QiwrREFBZ0Y7QUFDaEYsdUVBQWdFO0FBQ2hFLDJFQUF1RjtBQUN2Riw4REFBNkQ7QUFFdEQsS0FBSyxVQUFVLGlCQUFpQixDQUFDLE9BQU8sRUFBRSxLQUFLO0lBQ3BELE1BQU0sSUFBSSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBRS9CLElBQUk7UUFDRixNQUFNLFFBQVEsR0FBRyxNQUFNLElBQUEscUJBQVUsRUFBQyxFQUFFLElBQUksRUFBRSxFQUFFLHNCQUFTLEVBQUUsQ0FBQywyQkFBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFDaEYsTUFBTSxLQUFLLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUM7UUFDaEMsSUFBSSxHQUFXLENBQUM7UUFFaEIsSUFBSSxDQUFDLEtBQUs7WUFBRSxNQUFNLDBCQUFhLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztRQUNwRCxNQUFNLElBQUksR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFM0IsSUFBSSxRQUFRLENBQUMsSUFBSSxJQUFJLDJCQUFVLENBQUMsS0FBSyxFQUFFO1lBQ3JDLEdBQUcsR0FBRyxlQUFlLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLEdBQUcsY0FBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDbEU7YUFBTSxJQUFJLFFBQVEsQ0FBQyxJQUFJLElBQUksMkJBQVUsQ0FBQyxHQUFHLEVBQUU7WUFDMUMsR0FBRyxHQUFHLFNBQVMsR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsR0FBRyxjQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUM1RDthQUFNO1lBQ0wsT0FBTyxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO1lBQ3JDLE1BQU0sMEJBQWEsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1NBQ3pDO1FBRUQsTUFBTSxTQUFTLEdBQUcsY0FBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDakQsTUFBTSxPQUFPLEdBQUcsWUFBRSxDQUFDLGlCQUFpQixDQUFDLFNBQVMsR0FBRyxTQUFTLEdBQUcsR0FBRyxDQUFDLENBQUM7UUFDbEUsT0FBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDekIsT0FBTyxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQ2QsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztLQUNwQjtJQUFDLE9BQU8sQ0FBQyxFQUFFO1FBQ1YsTUFBTSw0QkFBZSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQztLQUN2QztBQUNILENBQUM7QUE1QkQsOENBNEJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZzIGZyb20gJ2ZzJztcclxuaW1wb3J0IHBhdGggZnJvbSAncGF0aCc7XHJcbmltcG9ydCB7IENvbW1vbkV4Y2VwdGlvbiwgRmlsZUV4Y2VwdGlvbiB9IGZyb20gJy4uL2NvbW1vbi9jb25zdGFudHMvZXhjZXB0aW9ucyc7XHJcbmltcG9ydCB7IHVwbG9hZFR5cGUgfSBmcm9tICcuLi9jb21tb24vY29uc3RhbnRzL2ZpbGVVcGxvYWRUeXBlJztcclxuaW1wb3J0IHsgVXBsb2FkRHRvLCBVcGxvYWRHcm91cER0byB9IGZyb20gJy4uL2NvbW1vbi92YWxpZGF0aW9uL2R0by91cGxvYWQvdXBsb2FkLmR0byc7XHJcbmltcG9ydCB7IHZhbGlkYXRlSXQgfSBmcm9tICcuLy4uL2NvbW1vbi92YWxpZGF0aW9uL3ZhbGlkYXRlJztcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGxvYWRGaWxlSGFuZGxlcihyZXF1ZXN0LCByZXBseSkge1xyXG4gIGNvbnN0IHR5cGUgPSByZXF1ZXN0LmJvZHkudHlwZTtcclxuXHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGZpbGVUeXBlID0gYXdhaXQgdmFsaWRhdGVJdCh7IHR5cGUgfSwgVXBsb2FkRHRvLCBbVXBsb2FkR3JvdXBEdG8uVVBMT0FEXSk7XHJcbiAgICBjb25zdCBmaWxlcyA9IHJlcXVlc3QucmF3LmZpbGVzO1xyXG4gICAgbGV0IHVybDogc3RyaW5nO1xyXG5cclxuICAgIGlmICghZmlsZXMpIHRocm93IEZpbGVFeGNlcHRpb24uSW52YWxpZFVwbG9hZFR5cGUoKTtcclxuICAgIGNvbnN0IGZpbGUgPSBmaWxlc1snZmlsZSddO1xyXG5cclxuICAgIGlmIChmaWxlVHlwZS50eXBlID09IHVwbG9hZFR5cGUudmlkZW8pIHtcclxuICAgICAgdXJsID0gJ3ByZXZpZXcvdmlkZW8nICsgJy0nICsgZmlsZS5tZDUgKyBwYXRoLmV4dG5hbWUoZmlsZS5uYW1lKTtcclxuICAgIH0gZWxzZSBpZiAoZmlsZVR5cGUudHlwZSA9PSB1cGxvYWRUeXBlLmltZykge1xyXG4gICAgICB1cmwgPSAnaW1nL2ltZycgKyAnLScgKyBmaWxlLm1kNSArIHBhdGguZXh0bmFtZShmaWxlLm5hbWUpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc29sZS5sb2coJ0ludmFsaWQgdXBsb2FkIHR5cGU6ICcpO1xyXG4gICAgICB0aHJvdyBGaWxlRXhjZXB0aW9uLkludmFsaWRVcGxvYWRUeXBlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZGlyZWN0aW9uID0gcGF0aC5qb2luKF9fZGlybmFtZSwgJy4uLy4uLycpO1xyXG4gICAgY29uc3Qgd3N0cmVhbSA9IGZzLmNyZWF0ZVdyaXRlU3RyZWFtKGRpcmVjdGlvbiArICdwdWJsaWMvJyArIHVybCk7XHJcbiAgICB3c3RyZWFtLndyaXRlKGZpbGUuZGF0YSk7XHJcbiAgICB3c3RyZWFtLmVuZCgpO1xyXG4gICAgcmVwbHkuc3VjY2Vzcyh1cmwpO1xyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIHRocm93IENvbW1vbkV4Y2VwdGlvbi5Vbmtub3duRXJyb3IoZSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==