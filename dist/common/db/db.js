"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbPlugin = void 0;
const tslib_1 = require("tslib");
const fastify_plugin_1 = tslib_1.__importDefault(require("fastify-plugin"));
const mongoose_1 = tslib_1.__importDefault(require("mongoose"));
const config_1 = require("../config");
async function connect() {
    try {
        console.log('ENV.DB_URL: ', config_1.ENV.DB_URL);
        mongoose_1.default.set('debug', true);
        await mongoose_1.default.connect(config_1.ENV.DB_URL);
        console.log('db success connected');
    }
    catch (e) {
        console.log("faile db connect:  ", e);
        process.exit(1);
    }
}
async function pl(instance, options, next) {
    connect();
    next();
}
exports.dbPlugin = (0, fastify_plugin_1.default)(pl);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29tbW9uL2RiL2RiLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSw0RUFBZ0M7QUFDaEMsZ0VBQWdDO0FBQ2hDLHNDQUFnQztBQUVoQyxLQUFLLFVBQVUsT0FBTztJQUNwQixJQUFJO1FBQ0YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLEVBQUUsWUFBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3hDLGtCQUFRLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQztRQUM1QixNQUFNLGtCQUFRLENBQUMsT0FBTyxDQUFDLFlBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNuQyxPQUFPLENBQUMsR0FBRyxDQUFDLHNCQUFzQixDQUFDLENBQUM7S0FDckM7SUFBQyxPQUFPLENBQUMsRUFBRTtRQUNWLE9BQU8sQ0FBQyxHQUFHLENBQUMscUJBQXFCLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDdEMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztLQUNqQjtBQUNILENBQUM7QUFFRCxLQUFLLFVBQVUsRUFBRSxDQUFDLFFBQVEsRUFBRSxPQUFPLEVBQUUsSUFBSTtJQUN2QyxPQUFPLEVBQUUsQ0FBQztJQUNWLElBQUksRUFBRSxDQUFDO0FBQ1QsQ0FBQztBQUVZLFFBQUEsUUFBUSxHQUFHLElBQUEsd0JBQUUsRUFBQyxFQUFFLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmcCBmcm9tICdmYXN0aWZ5LXBsdWdpbic7XHJcbmltcG9ydCBtb25nb29zZSBmcm9tICdtb25nb29zZSc7XHJcbmltcG9ydCB7IEVOViB9IGZyb20gJy4uL2NvbmZpZyc7XHJcblxyXG5hc3luYyBmdW5jdGlvbiBjb25uZWN0KCkge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zb2xlLmxvZygnRU5WLkRCX1VSTDogJywgRU5WLkRCX1VSTCk7XHJcbiAgICBtb25nb29zZS5zZXQoJ2RlYnVnJywgdHJ1ZSk7XHJcbiAgICBhd2FpdCBtb25nb29zZS5jb25uZWN0KEVOVi5EQl9VUkwpO1xyXG4gICAgY29uc29sZS5sb2coJ2RiIHN1Y2Nlc3MgY29ubmVjdGVkJyk7XHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgY29uc29sZS5sb2coXCJmYWlsZSBkYiBjb25uZWN0OiAgXCIsIGUpO1xyXG4gICAgcHJvY2Vzcy5leGl0KDEpO1xyXG4gIH1cclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gcGwoaW5zdGFuY2UsIG9wdGlvbnMsIG5leHQpIHtcclxuICBjb25uZWN0KCk7XHJcbiAgbmV4dCgpO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZGJQbHVnaW4gPSBmcChwbCk7XHJcbiJdfQ==