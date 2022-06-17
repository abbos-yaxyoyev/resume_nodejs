"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.encryption = void 0;
const tslib_1 = require("tslib");
const axios_1 = tslib_1.__importDefault(require("axios"));
const fs_1 = tslib_1.__importDefault(require("fs"));
const path_1 = tslib_1.__importDefault(require("path"));
// import { promisify } from 'util';
async function encryption(fileName) {
    try {
        const url = `https://api.systematicdev.uz/crypto-api/bookuz/download/${fileName}`;
        const direction = path_1.default.join(__dirname, '../../../');
        const wstream = fs_1.default.createWriteStream(direction + 'public/' + `encryption/${fileName}`);
        const response = await (0, axios_1.default)({
            method: 'GET',
            url: url,
            responseType: 'stream'
        });
        response.data.pipe(wstream);
        new Promise((resolve, reject) => {
            wstream.on('finish', resolve);
            wstream.on('error', reject);
        });
        return `encryption/${fileName}`;
    }
    catch (e) {
        console.log("encryuption error: ", e);
        throw new Error(e);
    }
}
exports.encryption = encryption;
// export async function encryption(fileName) {
//   await downloadFile(fileName);
//   return `encryption/${fileName}`;
// }
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW5jcnlwdGlvbiAuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvdXBsb2FkL2VuY3J5cHRpb24vZW5jcnlwdGlvbiAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLDBEQUEwQjtBQUMxQixvREFBb0I7QUFDcEIsd0RBQXdCO0FBQ3hCLG9DQUFvQztBQUU3QixLQUFLLFVBQVUsVUFBVSxDQUFDLFFBQVE7SUFDdkMsSUFBSTtRQUNGLE1BQU0sR0FBRyxHQUFHLDJEQUEyRCxRQUFRLEVBQUUsQ0FBQTtRQUVqRixNQUFNLFNBQVMsR0FBRyxjQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxXQUFXLENBQUMsQ0FBQztRQUNwRCxNQUFNLE9BQU8sR0FBRyxZQUFFLENBQUMsaUJBQWlCLENBQUMsU0FBUyxHQUFHLFNBQVMsR0FBRyxjQUFjLFFBQVEsRUFBRSxDQUFDLENBQUM7UUFFdkYsTUFBTSxRQUFRLEdBQUcsTUFBTSxJQUFBLGVBQUssRUFBQztZQUMzQixNQUFNLEVBQUUsS0FBSztZQUNiLEdBQUcsRUFBRSxHQUFHO1lBQ1IsWUFBWSxFQUFFLFFBQVE7U0FDdkIsQ0FBQyxDQUFBO1FBRUYsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUE7UUFFM0IsSUFBSSxPQUFPLENBQUMsQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEVBQUU7WUFDOUIsT0FBTyxDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUE7WUFDN0IsT0FBTyxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDLENBQUE7UUFDN0IsQ0FBQyxDQUFDLENBQUE7UUFFRixPQUFPLGNBQWMsUUFBUSxFQUFFLENBQUM7S0FFakM7SUFBQyxPQUFPLENBQUMsRUFBRTtRQUNWLE9BQU8sQ0FBQyxHQUFHLENBQUMscUJBQXFCLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDdEMsTUFBTSxJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQTtLQUNuQjtBQUNILENBQUM7QUExQkQsZ0NBMEJDO0FBRUQsK0NBQStDO0FBQy9DLGtDQUFrQztBQUNsQyxxQ0FBcUM7QUFDckMsSUFBSSIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCBmcyBmcm9tICdmcyc7XHJcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnO1xyXG4vLyBpbXBvcnQgeyBwcm9taXNpZnkgfSBmcm9tICd1dGlsJztcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBlbmNyeXB0aW9uKGZpbGVOYW1lKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHVybCA9IGBodHRwczovL2FwaS5zeXN0ZW1hdGljZGV2LnV6L2NyeXB0by1hcGkvYm9va3V6L2Rvd25sb2FkLyR7ZmlsZU5hbWV9YFxyXG5cclxuICAgIGNvbnN0IGRpcmVjdGlvbiA9IHBhdGguam9pbihfX2Rpcm5hbWUsICcuLi8uLi8uLi8nKTtcclxuICAgIGNvbnN0IHdzdHJlYW0gPSBmcy5jcmVhdGVXcml0ZVN0cmVhbShkaXJlY3Rpb24gKyAncHVibGljLycgKyBgZW5jcnlwdGlvbi8ke2ZpbGVOYW1lfWApO1xyXG5cclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3Moe1xyXG4gICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICB1cmw6IHVybCxcclxuICAgICAgcmVzcG9uc2VUeXBlOiAnc3RyZWFtJ1xyXG4gICAgfSlcclxuXHJcbiAgICByZXNwb25zZS5kYXRhLnBpcGUod3N0cmVhbSlcclxuXHJcbiAgICBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgIHdzdHJlYW0ub24oJ2ZpbmlzaCcsIHJlc29sdmUpXHJcbiAgICAgIHdzdHJlYW0ub24oJ2Vycm9yJywgcmVqZWN0KVxyXG4gICAgfSlcclxuXHJcbiAgICByZXR1cm4gYGVuY3J5cHRpb24vJHtmaWxlTmFtZX1gO1xyXG5cclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcImVuY3J5dXB0aW9uIGVycm9yOiBcIiwgZSk7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoZSlcclxuICB9XHJcbn1cclxuXHJcbi8vIGV4cG9ydCBhc3luYyBmdW5jdGlvbiBlbmNyeXB0aW9uKGZpbGVOYW1lKSB7XHJcbi8vICAgYXdhaXQgZG93bmxvYWRGaWxlKGZpbGVOYW1lKTtcclxuLy8gICByZXR1cm4gYGVuY3J5cHRpb24vJHtmaWxlTmFtZX1gO1xyXG4vLyB9XHJcblxyXG4iXX0=