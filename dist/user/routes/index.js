"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routesUserPlugin = exports.pl = void 0;
const tslib_1 = require("tslib");
const fastify_plugin_1 = tslib_1.__importDefault(require("fastify-plugin"));
const routes_1 = require("./author/routes");
const routes_2 = require("./book/routes");
const routes_3 = require("./category/routes");
const routes_4 = require("./course/courseParts/routes");
const routes_5 = require("./course/coursesOfUser/routes");
const routes_6 = require("./course/routes");
const routes_7 = require("./user/routes");
const routes = [
    ...routes_7.userRoutes,
    ...routes_2.bookRoutes,
    ...routes_3.categoryRoutes,
    ...routes_1.authorRoutes,
    ...routes_6.courseRoutes,
    ...routes_4.coursePartsRoutes,
    // ...uploadFileRoutes,
    ...routes_5.coursesOfUserRoutes,
];
async function pl(instance, _, next) {
    try {
        routes.map((route) => instance.route(route));
    }
    catch (error) {
        console.log(error);
        process.exit(1);
    }
    next();
}
exports.pl = pl;
exports.routesUserPlugin = (0, fastify_plugin_1.default)(pl);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvdXNlci9yb3V0ZXMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLDRFQUFnQztBQUNoQyw0Q0FBK0M7QUFDL0MsMENBQTJDO0FBQzNDLDhDQUFtRDtBQUNuRCx3REFBZ0U7QUFDaEUsMERBQW9FO0FBQ3BFLDRDQUErQztBQUMvQywwQ0FBMkM7QUFHM0MsTUFBTSxNQUFNLEdBQUc7SUFDYixHQUFHLG1CQUFVO0lBQ2IsR0FBRyxtQkFBVTtJQUNiLEdBQUcsdUJBQWM7SUFDakIsR0FBRyxxQkFBWTtJQUNmLEdBQUcscUJBQVk7SUFDZixHQUFHLDBCQUFpQjtJQUNwQix1QkFBdUI7SUFDdkIsR0FBRyw0QkFBbUI7Q0FDdkIsQ0FBQztBQUVLLEtBQUssVUFBVSxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUMsRUFBRSxJQUFJO0lBQ3hDLElBQUk7UUFDRixNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7S0FDOUM7SUFBQyxPQUFPLEtBQUssRUFBRTtRQUNkLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDbkIsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztLQUNqQjtJQUVELElBQUksRUFBRSxDQUFDO0FBQ1QsQ0FBQztBQVRELGdCQVNDO0FBRVksUUFBQSxnQkFBZ0IsR0FBRyxJQUFBLHdCQUFFLEVBQUMsRUFBRSxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZnAgZnJvbSAnZmFzdGlmeS1wbHVnaW4nO1xyXG5pbXBvcnQgeyBhdXRob3JSb3V0ZXMgfSBmcm9tICcuL2F1dGhvci9yb3V0ZXMnO1xyXG5pbXBvcnQgeyBib29rUm91dGVzIH0gZnJvbSAnLi9ib29rL3JvdXRlcyc7XHJcbmltcG9ydCB7IGNhdGVnb3J5Um91dGVzIH0gZnJvbSAnLi9jYXRlZ29yeS9yb3V0ZXMnO1xyXG5pbXBvcnQgeyBjb3Vyc2VQYXJ0c1JvdXRlcyB9IGZyb20gJy4vY291cnNlL2NvdXJzZVBhcnRzL3JvdXRlcyc7XHJcbmltcG9ydCB7IGNvdXJzZXNPZlVzZXJSb3V0ZXMgfSBmcm9tICcuL2NvdXJzZS9jb3Vyc2VzT2ZVc2VyL3JvdXRlcyc7XHJcbmltcG9ydCB7IGNvdXJzZVJvdXRlcyB9IGZyb20gJy4vY291cnNlL3JvdXRlcyc7XHJcbmltcG9ydCB7IHVzZXJSb3V0ZXMgfSBmcm9tICcuL3VzZXIvcm91dGVzJztcclxuXHJcblxyXG5jb25zdCByb3V0ZXMgPSBbXHJcbiAgLi4udXNlclJvdXRlcyxcclxuICAuLi5ib29rUm91dGVzLFxyXG4gIC4uLmNhdGVnb3J5Um91dGVzLFxyXG4gIC4uLmF1dGhvclJvdXRlcyxcclxuICAuLi5jb3Vyc2VSb3V0ZXMsXHJcbiAgLi4uY291cnNlUGFydHNSb3V0ZXMsXHJcbiAgLy8gLi4udXBsb2FkRmlsZVJvdXRlcyxcclxuICAuLi5jb3Vyc2VzT2ZVc2VyUm91dGVzLFxyXG5dO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHBsKGluc3RhbmNlLCBfLCBuZXh0KSB7XHJcbiAgdHJ5IHtcclxuICAgIHJvdXRlcy5tYXAoKHJvdXRlKSA9PiBpbnN0YW5jZS5yb3V0ZShyb3V0ZSkpO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICBwcm9jZXNzLmV4aXQoMSk7XHJcbiAgfVxyXG5cclxuICBuZXh0KCk7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCByb3V0ZXNVc2VyUGx1Z2luID0gZnAocGwpO1xyXG4iXX0=