"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routesPlugin = exports.pl = void 0;
const tslib_1 = require("tslib");
const fastify_plugin_1 = tslib_1.__importDefault(require("fastify-plugin"));
const routes_1 = require("./author/routes");
const routes_2 = require("./book/routes");
const routes_3 = require("./course/courseParts/routes");
const routes_4 = require("./course/coursesOfUser/routes");
const routes_5 = require("./course/routes");
const routes_6 = require("./employee/routes");
const routes_7 = require("./genre/routes");
const routes_8 = require("./role/routes");
const routes_9 = require("./upload/routes");
const routes_10 = require("./user/routes");
const routes = [
    ...routes_8.roleRoutes,
    ...routes_2.bookRoutes,
    ...routes_10.userRoutes,
    ...routes_7.genreRoutes,
    ...routes_5.courseRoutes,
    ...routes_1.authorRoutes,
    ...routes_6.employeeRoutes,
    ...routes_9.uploadFileRoutes,
    ...routes_3.coursePartsRoutes,
    ...routes_4.coursesOfUserRoutes,
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
exports.routesPlugin = (0, fastify_plugin_1.default)(pl);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvZW1wbG95ZWUvcm91dGVzL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSw0RUFBZ0M7QUFDaEMsNENBQStDO0FBQy9DLDBDQUEyQztBQUMzQyx3REFBZ0U7QUFDaEUsMERBQW9FO0FBQ3BFLDRDQUErQztBQUMvQyw4Q0FBbUQ7QUFDbkQsMkNBQTZDO0FBQzdDLDBDQUEyQztBQUMzQyw0Q0FBbUQ7QUFDbkQsMkNBQTJDO0FBRzNDLE1BQU0sTUFBTSxHQUFHO0lBQ2IsR0FBRyxtQkFBVTtJQUNiLEdBQUcsbUJBQVU7SUFDYixHQUFHLG9CQUFVO0lBQ2IsR0FBRyxvQkFBVztJQUNkLEdBQUcscUJBQVk7SUFDZixHQUFHLHFCQUFZO0lBQ2YsR0FBRyx1QkFBYztJQUNqQixHQUFHLHlCQUFnQjtJQUNuQixHQUFHLDBCQUFpQjtJQUNwQixHQUFHLDRCQUFtQjtDQUN2QixDQUFDO0FBRUssS0FBSyxVQUFVLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxFQUFFLElBQUk7SUFDeEMsSUFBSTtRQUNGLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztLQUM5QztJQUFDLE9BQU8sS0FBSyxFQUFFO1FBQ2QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNuQixPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQ2pCO0lBRUQsSUFBSSxFQUFFLENBQUM7QUFDVCxDQUFDO0FBVEQsZ0JBU0M7QUFFWSxRQUFBLFlBQVksR0FBRyxJQUFBLHdCQUFFLEVBQUMsRUFBRSxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZnAgZnJvbSAnZmFzdGlmeS1wbHVnaW4nO1xyXG5pbXBvcnQgeyBhdXRob3JSb3V0ZXMgfSBmcm9tICcuL2F1dGhvci9yb3V0ZXMnO1xyXG5pbXBvcnQgeyBib29rUm91dGVzIH0gZnJvbSAnLi9ib29rL3JvdXRlcyc7XHJcbmltcG9ydCB7IGNvdXJzZVBhcnRzUm91dGVzIH0gZnJvbSAnLi9jb3Vyc2UvY291cnNlUGFydHMvcm91dGVzJztcclxuaW1wb3J0IHsgY291cnNlc09mVXNlclJvdXRlcyB9IGZyb20gJy4vY291cnNlL2NvdXJzZXNPZlVzZXIvcm91dGVzJztcclxuaW1wb3J0IHsgY291cnNlUm91dGVzIH0gZnJvbSAnLi9jb3Vyc2Uvcm91dGVzJztcclxuaW1wb3J0IHsgZW1wbG95ZWVSb3V0ZXMgfSBmcm9tICcuL2VtcGxveWVlL3JvdXRlcyc7XHJcbmltcG9ydCB7IGdlbnJlUm91dGVzIH0gZnJvbSAnLi9nZW5yZS9yb3V0ZXMnO1xyXG5pbXBvcnQgeyByb2xlUm91dGVzIH0gZnJvbSAnLi9yb2xlL3JvdXRlcyc7XHJcbmltcG9ydCB7IHVwbG9hZEZpbGVSb3V0ZXMgfSBmcm9tICcuL3VwbG9hZC9yb3V0ZXMnO1xyXG5pbXBvcnQgeyB1c2VyUm91dGVzIH0gZnJvbSAnLi91c2VyL3JvdXRlcyc7XHJcblxyXG5cclxuY29uc3Qgcm91dGVzID0gW1xyXG4gIC4uLnJvbGVSb3V0ZXMsXHJcbiAgLi4uYm9va1JvdXRlcyxcclxuICAuLi51c2VyUm91dGVzLFxyXG4gIC4uLmdlbnJlUm91dGVzLFxyXG4gIC4uLmNvdXJzZVJvdXRlcyxcclxuICAuLi5hdXRob3JSb3V0ZXMsXHJcbiAgLi4uZW1wbG95ZWVSb3V0ZXMsXHJcbiAgLi4udXBsb2FkRmlsZVJvdXRlcyxcclxuICAuLi5jb3Vyc2VQYXJ0c1JvdXRlcyxcclxuICAuLi5jb3Vyc2VzT2ZVc2VyUm91dGVzLFxyXG5dO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHBsKGluc3RhbmNlLCBfLCBuZXh0KSB7XHJcbiAgdHJ5IHtcclxuICAgIHJvdXRlcy5tYXAoKHJvdXRlKSA9PiBpbnN0YW5jZS5yb3V0ZShyb3V0ZSkpO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICBwcm9jZXNzLmV4aXQoMSk7XHJcbiAgfVxyXG5cclxuICBuZXh0KCk7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCByb3V0ZXNQbHVnaW4gPSBmcChwbCk7XHJcbiJdfQ==