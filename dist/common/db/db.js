"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbPlugin = void 0;
const tslib_1 = require("tslib");
const fastify_plugin_1 = tslib_1.__importDefault(require("fastify-plugin"));
const mongoose_1 = tslib_1.__importDefault(require("mongoose"));
const config_1 = require("../config");
async function connect() {
    try {
        console.log("DB_REPLICA_SET: ", config_1.DB_REPLICA_SET);
        console.log('ENV.DB_URL: ', config_1.ENV.DB_URL);
        mongoose_1.default.set('debug', true);
        await mongoose_1.default.connect(config_1.ENV.DB_URL);
        console.log('db success connected');
    }
    catch (e) {
        console.log(e);
        process.exit(1);
    }
}
async function pl(instance, options, next) {
    connect();
    next();
}
exports.dbPlugin = (0, fastify_plugin_1.default)(pl);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29tbW9uL2RiL2RiLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSw0RUFBZ0M7QUFDaEMsZ0VBQWdDO0FBQ2hDLHNDQUFnRDtBQUVoRCxLQUFLLFVBQVUsT0FBTztJQUNwQixJQUFJO1FBQ0YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsRUFBRSx1QkFBYyxDQUFDLENBQUM7UUFDaEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLEVBQUUsWUFBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3hDLGtCQUFRLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQztRQUM1QixNQUFNLGtCQUFRLENBQUMsT0FBTyxDQUFDLFlBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNuQyxPQUFPLENBQUMsR0FBRyxDQUFDLHNCQUFzQixDQUFDLENBQUM7S0FDckM7SUFBQyxPQUFPLENBQUMsRUFBRTtRQUNWLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDZixPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQ2pCO0FBQ0gsQ0FBQztBQUVELEtBQUssVUFBVSxFQUFFLENBQUMsUUFBUSxFQUFFLE9BQU8sRUFBRSxJQUFJO0lBQ3ZDLE9BQU8sRUFBRSxDQUFDO0lBQ1YsSUFBSSxFQUFFLENBQUM7QUFDVCxDQUFDO0FBRVksUUFBQSxRQUFRLEdBQUcsSUFBQSx3QkFBRSxFQUFDLEVBQUUsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZwIGZyb20gJ2Zhc3RpZnktcGx1Z2luJztcclxuaW1wb3J0IG1vbmdvb3NlIGZyb20gJ21vbmdvb3NlJztcclxuaW1wb3J0IHsgREJfUkVQTElDQV9TRVQsIEVOViB9IGZyb20gJy4uL2NvbmZpZyc7XHJcblxyXG5hc3luYyBmdW5jdGlvbiBjb25uZWN0KCkge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zb2xlLmxvZyhcIkRCX1JFUExJQ0FfU0VUOiBcIiwgREJfUkVQTElDQV9TRVQpO1xyXG4gICAgY29uc29sZS5sb2coJ0VOVi5EQl9VUkw6ICcsIEVOVi5EQl9VUkwpO1xyXG4gICAgbW9uZ29vc2Uuc2V0KCdkZWJ1ZycsIHRydWUpO1xyXG4gICAgYXdhaXQgbW9uZ29vc2UuY29ubmVjdChFTlYuREJfVVJMKTtcclxuICAgIGNvbnNvbGUubG9nKCdkYiBzdWNjZXNzIGNvbm5lY3RlZCcpO1xyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgcHJvY2Vzcy5leGl0KDEpO1xyXG4gIH1cclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gcGwoaW5zdGFuY2UsIG9wdGlvbnMsIG5leHQpIHtcclxuICBjb25uZWN0KCk7XHJcbiAgbmV4dCgpO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZGJQbHVnaW4gPSBmcChwbCk7XHJcbiJdfQ==