"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routesEmployeePlugin = exports.pl = void 0;
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
exports.routesEmployeePlugin = (0, fastify_plugin_1.default)(pl);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvRW1wbG95ZWUvcm91dGVzL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSw0RUFBZ0M7QUFDaEMsNENBQStDO0FBQy9DLDBDQUEyQztBQUMzQyx3REFBZ0U7QUFDaEUsMERBQW9FO0FBQ3BFLDRDQUErQztBQUMvQyw4Q0FBbUQ7QUFDbkQsMkNBQTZDO0FBQzdDLDBDQUEyQztBQUMzQyw0Q0FBbUQ7QUFDbkQsMkNBQTJDO0FBRzNDLE1BQU0sTUFBTSxHQUFHO0lBQ2IsR0FBRyxtQkFBVTtJQUNiLEdBQUcsbUJBQVU7SUFDYixHQUFHLG9CQUFVO0lBQ2IsR0FBRyxvQkFBVztJQUNkLEdBQUcscUJBQVk7SUFDZixHQUFHLHFCQUFZO0lBQ2YsR0FBRyx1QkFBYztJQUNqQixHQUFHLHlCQUFnQjtJQUNuQixHQUFHLDBCQUFpQjtJQUNwQixHQUFHLDRCQUFtQjtDQUN2QixDQUFDO0FBRUssS0FBSyxVQUFVLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxFQUFFLElBQUk7SUFDeEMsSUFBSTtRQUNGLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztLQUM5QztJQUFDLE9BQU8sS0FBSyxFQUFFO1FBQ2QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNuQixPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQ2pCO0lBRUQsSUFBSSxFQUFFLENBQUM7QUFDVCxDQUFDO0FBVEQsZ0JBU0M7QUFFWSxRQUFBLG9CQUFvQixHQUFHLElBQUEsd0JBQUUsRUFBQyxFQUFFLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmcCBmcm9tICdmYXN0aWZ5LXBsdWdpbic7XHJcbmltcG9ydCB7IGF1dGhvclJvdXRlcyB9IGZyb20gJy4vYXV0aG9yL3JvdXRlcyc7XHJcbmltcG9ydCB7IGJvb2tSb3V0ZXMgfSBmcm9tICcuL2Jvb2svcm91dGVzJztcclxuaW1wb3J0IHsgY291cnNlUGFydHNSb3V0ZXMgfSBmcm9tICcuL2NvdXJzZS9jb3Vyc2VQYXJ0cy9yb3V0ZXMnO1xyXG5pbXBvcnQgeyBjb3Vyc2VzT2ZVc2VyUm91dGVzIH0gZnJvbSAnLi9jb3Vyc2UvY291cnNlc09mVXNlci9yb3V0ZXMnO1xyXG5pbXBvcnQgeyBjb3Vyc2VSb3V0ZXMgfSBmcm9tICcuL2NvdXJzZS9yb3V0ZXMnO1xyXG5pbXBvcnQgeyBlbXBsb3llZVJvdXRlcyB9IGZyb20gJy4vZW1wbG95ZWUvcm91dGVzJztcclxuaW1wb3J0IHsgZ2VucmVSb3V0ZXMgfSBmcm9tICcuL2dlbnJlL3JvdXRlcyc7XHJcbmltcG9ydCB7IHJvbGVSb3V0ZXMgfSBmcm9tICcuL3JvbGUvcm91dGVzJztcclxuaW1wb3J0IHsgdXBsb2FkRmlsZVJvdXRlcyB9IGZyb20gJy4vdXBsb2FkL3JvdXRlcyc7XHJcbmltcG9ydCB7IHVzZXJSb3V0ZXMgfSBmcm9tICcuL3VzZXIvcm91dGVzJztcclxuXHJcblxyXG5jb25zdCByb3V0ZXMgPSBbXHJcbiAgLi4ucm9sZVJvdXRlcyxcclxuICAuLi5ib29rUm91dGVzLFxyXG4gIC4uLnVzZXJSb3V0ZXMsXHJcbiAgLi4uZ2VucmVSb3V0ZXMsXHJcbiAgLi4uY291cnNlUm91dGVzLFxyXG4gIC4uLmF1dGhvclJvdXRlcyxcclxuICAuLi5lbXBsb3llZVJvdXRlcyxcclxuICAuLi51cGxvYWRGaWxlUm91dGVzLFxyXG4gIC4uLmNvdXJzZVBhcnRzUm91dGVzLFxyXG4gIC4uLmNvdXJzZXNPZlVzZXJSb3V0ZXMsXHJcbl07XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcGwoaW5zdGFuY2UsIF8sIG5leHQpIHtcclxuICB0cnkge1xyXG4gICAgcm91dGVzLm1hcCgocm91dGUpID0+IGluc3RhbmNlLnJvdXRlKHJvdXRlKSk7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgIHByb2Nlc3MuZXhpdCgxKTtcclxuICB9XHJcblxyXG4gIG5leHQoKTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHJvdXRlc0VtcGxveWVlUGx1Z2luID0gZnAocGwpO1xyXG4iXX0=