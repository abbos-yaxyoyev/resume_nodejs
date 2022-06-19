"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routesEmployeePlugin = exports.pl = void 0;
const tslib_1 = require("tslib");
const fastify_plugin_1 = tslib_1.__importDefault(require("fastify-plugin"));
const routes_1 = require("./author/routes");
const routes_2 = require("./book/routes");
const routes_3 = require("./category/routes");
const routes_4 = require("./course/courseParts/routes");
const routes_5 = require("./course/coursesOfUser/routes");
const routes_6 = require("./course/routes");
const routes_7 = require("./employee/routes");
const routes_8 = require("./role/routes");
const routes_9 = require("./upload/routes");
const routes_10 = require("./user/routes");
const routes = [
    ...routes_8.roleRoutes,
    ...routes_2.bookRoutes,
    ...routes_10.userRoutes,
    ...routes_3.categoryRoutes,
    ...routes_6.courseRoutes,
    ...routes_1.authorRoutes,
    ...routes_7.employeeRoutes,
    ...routes_9.uploadFileRoutes,
    ...routes_4.coursePartsRoutes,
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
exports.routesEmployeePlugin = (0, fastify_plugin_1.default)(pl);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvRW1wbG95ZWUvcm91dGVzL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSw0RUFBZ0M7QUFDaEMsNENBQStDO0FBQy9DLDBDQUEyQztBQUMzQyw4Q0FBbUQ7QUFDbkQsd0RBQWdFO0FBQ2hFLDBEQUFvRTtBQUNwRSw0Q0FBK0M7QUFDL0MsOENBQW1EO0FBQ25ELDBDQUEyQztBQUMzQyw0Q0FBbUQ7QUFDbkQsMkNBQTJDO0FBRzNDLE1BQU0sTUFBTSxHQUFHO0lBQ2IsR0FBRyxtQkFBVTtJQUNiLEdBQUcsbUJBQVU7SUFDYixHQUFHLG9CQUFVO0lBQ2IsR0FBRyx1QkFBYztJQUNqQixHQUFHLHFCQUFZO0lBQ2YsR0FBRyxxQkFBWTtJQUNmLEdBQUcsdUJBQWM7SUFDakIsR0FBRyx5QkFBZ0I7SUFDbkIsR0FBRywwQkFBaUI7SUFDcEIsR0FBRyw0QkFBbUI7Q0FDdkIsQ0FBQztBQUVLLEtBQUssVUFBVSxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUMsRUFBRSxJQUFJO0lBQ3hDLElBQUk7UUFDRixNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7S0FDOUM7SUFBQyxPQUFPLEtBQUssRUFBRTtRQUNkLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDbkIsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztLQUNqQjtJQUVELElBQUksRUFBRSxDQUFDO0FBQ1QsQ0FBQztBQVRELGdCQVNDO0FBRVksUUFBQSxvQkFBb0IsR0FBRyxJQUFBLHdCQUFFLEVBQUMsRUFBRSxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZnAgZnJvbSAnZmFzdGlmeS1wbHVnaW4nO1xyXG5pbXBvcnQgeyBhdXRob3JSb3V0ZXMgfSBmcm9tICcuL2F1dGhvci9yb3V0ZXMnO1xyXG5pbXBvcnQgeyBib29rUm91dGVzIH0gZnJvbSAnLi9ib29rL3JvdXRlcyc7XHJcbmltcG9ydCB7IGNhdGVnb3J5Um91dGVzIH0gZnJvbSAnLi9jYXRlZ29yeS9yb3V0ZXMnO1xyXG5pbXBvcnQgeyBjb3Vyc2VQYXJ0c1JvdXRlcyB9IGZyb20gJy4vY291cnNlL2NvdXJzZVBhcnRzL3JvdXRlcyc7XHJcbmltcG9ydCB7IGNvdXJzZXNPZlVzZXJSb3V0ZXMgfSBmcm9tICcuL2NvdXJzZS9jb3Vyc2VzT2ZVc2VyL3JvdXRlcyc7XHJcbmltcG9ydCB7IGNvdXJzZVJvdXRlcyB9IGZyb20gJy4vY291cnNlL3JvdXRlcyc7XHJcbmltcG9ydCB7IGVtcGxveWVlUm91dGVzIH0gZnJvbSAnLi9lbXBsb3llZS9yb3V0ZXMnO1xyXG5pbXBvcnQgeyByb2xlUm91dGVzIH0gZnJvbSAnLi9yb2xlL3JvdXRlcyc7XHJcbmltcG9ydCB7IHVwbG9hZEZpbGVSb3V0ZXMgfSBmcm9tICcuL3VwbG9hZC9yb3V0ZXMnO1xyXG5pbXBvcnQgeyB1c2VyUm91dGVzIH0gZnJvbSAnLi91c2VyL3JvdXRlcyc7XHJcblxyXG5cclxuY29uc3Qgcm91dGVzID0gW1xyXG4gIC4uLnJvbGVSb3V0ZXMsXHJcbiAgLi4uYm9va1JvdXRlcyxcclxuICAuLi51c2VyUm91dGVzLFxyXG4gIC4uLmNhdGVnb3J5Um91dGVzLFxyXG4gIC4uLmNvdXJzZVJvdXRlcyxcclxuICAuLi5hdXRob3JSb3V0ZXMsXHJcbiAgLi4uZW1wbG95ZWVSb3V0ZXMsXHJcbiAgLi4udXBsb2FkRmlsZVJvdXRlcyxcclxuICAuLi5jb3Vyc2VQYXJ0c1JvdXRlcyxcclxuICAuLi5jb3Vyc2VzT2ZVc2VyUm91dGVzLFxyXG5dO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHBsKGluc3RhbmNlLCBfLCBuZXh0KSB7XHJcbiAgdHJ5IHtcclxuICAgIHJvdXRlcy5tYXAoKHJvdXRlKSA9PiBpbnN0YW5jZS5yb3V0ZShyb3V0ZSkpO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICBwcm9jZXNzLmV4aXQoMSk7XHJcbiAgfVxyXG5cclxuICBuZXh0KCk7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCByb3V0ZXNFbXBsb3llZVBsdWdpbiA9IGZwKHBsKTtcclxuIl19