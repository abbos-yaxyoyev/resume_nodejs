"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadFile = void 0;
const config_1 = require("../common/config");
const uploadHandler_1 = require("./uploadHandler");
function uploadFile(callback) {
    return [
        {
            method: 'POST',
            url: `${config_1.API.admin_api}/upload`,
            preValidation: [callback],
            handler: uploadHandler_1.uploadFileHandler,
        },
    ];
}
exports.uploadFile = uploadFile;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3VwbG9hZC9yb3V0ZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsNkNBQXVDO0FBQ3ZDLG1EQUFvRDtBQUVwRCxTQUFnQixVQUFVLENBQUMsUUFBUTtJQUNqQyxPQUFPO1FBQ0w7WUFDRSxNQUFNLEVBQUUsTUFBTTtZQUNkLEdBQUcsRUFBRSxHQUFHLFlBQUcsQ0FBQyxTQUFTLFNBQVM7WUFDOUIsYUFBYSxFQUFFLENBQUMsUUFBUSxDQUFDO1lBQ3pCLE9BQU8sRUFBRSxpQ0FBaUI7U0FDM0I7S0FDRixDQUFDO0FBQ0osQ0FBQztBQVRELGdDQVNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQVBJIH0gZnJvbSAnLi4vY29tbW9uL2NvbmZpZyc7XHJcbmltcG9ydCB7IHVwbG9hZEZpbGVIYW5kbGVyIH0gZnJvbSAnLi91cGxvYWRIYW5kbGVyJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB1cGxvYWRGaWxlKGNhbGxiYWNrKSB7XHJcbiAgcmV0dXJuIFtcclxuICAgIHtcclxuICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgIHVybDogYCR7QVBJLmFkbWluX2FwaX0vdXBsb2FkYCxcclxuICAgICAgcHJlVmFsaWRhdGlvbjogW2NhbGxiYWNrXSxcclxuICAgICAgaGFuZGxlcjogdXBsb2FkRmlsZUhhbmRsZXIsXHJcbiAgICB9LFxyXG4gIF07XHJcbn1cclxuIl19