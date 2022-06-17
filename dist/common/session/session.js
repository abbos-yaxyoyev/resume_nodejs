"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.withTransaction = void 0;
const tslib_1 = require("tslib");
const mongoose_1 = tslib_1.__importDefault(require("mongoose"));
async function withTransaction(callback) {
    try {
        const session = await mongoose_1.default.startSession();
        try {
            await session.withTransaction(async () => {
                await callback(session);
            }, {
                // readPreference: { mode: "primary" },
                readConcern: {
                    level: 'local',
                },
                writeConcern: {
                    w: 'majority',
                },
            });
        }
        finally {
            await session.endSession();
            console.log('session finished');
        }
    }
    catch (error) {
        throw error;
    }
}
exports.withTransaction = withTransaction;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Vzc2lvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21tb24vc2Vzc2lvbi9zZXNzaW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxnRUFBZ0M7QUFFekIsS0FBSyxVQUFVLGVBQWUsQ0FBQyxRQUFRO0lBQzVDLElBQUk7UUFDRixNQUFNLE9BQU8sR0FBRyxNQUFNLGtCQUFRLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDOUMsSUFBSTtZQUNGLE1BQU0sT0FBTyxDQUFDLGVBQWUsQ0FDM0IsS0FBSyxJQUFJLEVBQUU7Z0JBQ1QsTUFBTSxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDMUIsQ0FBQyxFQUNEO2dCQUNFLHVDQUF1QztnQkFDdkMsV0FBVyxFQUFFO29CQUNYLEtBQUssRUFBRSxPQUFPO2lCQUNmO2dCQUNELFlBQVksRUFBRTtvQkFDWixDQUFDLEVBQUUsVUFBVTtpQkFDZDthQUNGLENBQ0YsQ0FBQztTQUNIO2dCQUFTO1lBQ1IsTUFBTSxPQUFPLENBQUMsVUFBVSxFQUFFLENBQUM7WUFDM0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1NBQ2pDO0tBQ0Y7SUFBQyxPQUFPLEtBQUssRUFBRTtRQUNkLE1BQU0sS0FBSyxDQUFDO0tBQ2I7QUFDSCxDQUFDO0FBekJELDBDQXlCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tICdtb25nb29zZSc7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gd2l0aFRyYW5zYWN0aW9uKGNhbGxiYWNrKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBtb25nb29zZS5zdGFydFNlc3Npb24oKTtcclxuICAgIHRyeSB7XHJcbiAgICAgIGF3YWl0IHNlc3Npb24ud2l0aFRyYW5zYWN0aW9uKFxyXG4gICAgICAgIGFzeW5jICgpID0+IHtcclxuICAgICAgICAgIGF3YWl0IGNhbGxiYWNrKHNlc3Npb24pO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgLy8gcmVhZFByZWZlcmVuY2U6IHsgbW9kZTogXCJwcmltYXJ5XCIgfSxcclxuICAgICAgICAgIHJlYWRDb25jZXJuOiB7XHJcbiAgICAgICAgICAgIGxldmVsOiAnbG9jYWwnLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHdyaXRlQ29uY2Vybjoge1xyXG4gICAgICAgICAgICB3OiAnbWFqb3JpdHknLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICApO1xyXG4gICAgfSBmaW5hbGx5IHtcclxuICAgICAgYXdhaXQgc2Vzc2lvbi5lbmRTZXNzaW9uKCk7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdzZXNzaW9uIGZpbmlzaGVkJyk7XHJcbiAgICB9XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHRocm93IGVycm9yO1xyXG4gIH1cclxufVxyXG4iXX0=