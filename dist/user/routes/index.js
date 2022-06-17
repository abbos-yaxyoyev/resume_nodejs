"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routesUserPlugin = exports.pl = void 0;
const tslib_1 = require("tslib");
const fastify_plugin_1 = tslib_1.__importDefault(require("fastify-plugin"));
const routes_1 = require("./author/routes");
const routes_2 = require("./book/routes");
const routes_3 = require("./course/coursesOfUser/routes");
const routes_4 = require("./course/routes");
const routes_5 = require("./genre/routes");
const routes_6 = require("./user/routes");
const routes = [
    ...routes_6.userRoutes,
    ...routes_2.bookRoutes,
    ...routes_5.genreRoutes,
    ...routes_1.authorRoutes,
    ...routes_4.courseRoutes,
    // ...uploadFileRoutes,
    ...routes_3.coursesOfUserRoutes,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvdXNlci9yb3V0ZXMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLDRFQUFnQztBQUNoQyw0Q0FBK0M7QUFDL0MsMENBQTJDO0FBQzNDLDBEQUFvRTtBQUNwRSw0Q0FBK0M7QUFDL0MsMkNBQTZDO0FBQzdDLDBDQUEyQztBQUczQyxNQUFNLE1BQU0sR0FBRztJQUNiLEdBQUcsbUJBQVU7SUFDYixHQUFHLG1CQUFVO0lBQ2IsR0FBRyxvQkFBVztJQUNkLEdBQUcscUJBQVk7SUFDZixHQUFHLHFCQUFZO0lBQ2YsdUJBQXVCO0lBQ3ZCLEdBQUcsNEJBQW1CO0NBQ3ZCLENBQUM7QUFFSyxLQUFLLFVBQVUsRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDLEVBQUUsSUFBSTtJQUN4QyxJQUFJO1FBQ0YsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0tBQzlDO0lBQUMsT0FBTyxLQUFLLEVBQUU7UUFDZCxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ25CLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FDakI7SUFFRCxJQUFJLEVBQUUsQ0FBQztBQUNULENBQUM7QUFURCxnQkFTQztBQUVZLFFBQUEsZ0JBQWdCLEdBQUcsSUFBQSx3QkFBRSxFQUFDLEVBQUUsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZwIGZyb20gJ2Zhc3RpZnktcGx1Z2luJztcclxuaW1wb3J0IHsgYXV0aG9yUm91dGVzIH0gZnJvbSAnLi9hdXRob3Ivcm91dGVzJztcclxuaW1wb3J0IHsgYm9va1JvdXRlcyB9IGZyb20gJy4vYm9vay9yb3V0ZXMnO1xyXG5pbXBvcnQgeyBjb3Vyc2VzT2ZVc2VyUm91dGVzIH0gZnJvbSAnLi9jb3Vyc2UvY291cnNlc09mVXNlci9yb3V0ZXMnO1xyXG5pbXBvcnQgeyBjb3Vyc2VSb3V0ZXMgfSBmcm9tICcuL2NvdXJzZS9yb3V0ZXMnO1xyXG5pbXBvcnQgeyBnZW5yZVJvdXRlcyB9IGZyb20gJy4vZ2VucmUvcm91dGVzJztcclxuaW1wb3J0IHsgdXNlclJvdXRlcyB9IGZyb20gJy4vdXNlci9yb3V0ZXMnO1xyXG5cclxuXHJcbmNvbnN0IHJvdXRlcyA9IFtcclxuICAuLi51c2VyUm91dGVzLFxyXG4gIC4uLmJvb2tSb3V0ZXMsXHJcbiAgLi4uZ2VucmVSb3V0ZXMsXHJcbiAgLi4uYXV0aG9yUm91dGVzLFxyXG4gIC4uLmNvdXJzZVJvdXRlcyxcclxuICAvLyAuLi51cGxvYWRGaWxlUm91dGVzLFxyXG4gIC4uLmNvdXJzZXNPZlVzZXJSb3V0ZXMsXHJcbl07XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcGwoaW5zdGFuY2UsIF8sIG5leHQpIHtcclxuICB0cnkge1xyXG4gICAgcm91dGVzLm1hcCgocm91dGUpID0+IGluc3RhbmNlLnJvdXRlKHJvdXRlKSk7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgIHByb2Nlc3MuZXhpdCgxKTtcclxuICB9XHJcblxyXG4gIG5leHQoKTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHJvdXRlc1VzZXJQbHVnaW4gPSBmcChwbCk7XHJcbiJdfQ==