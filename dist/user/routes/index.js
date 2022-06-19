"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routesUserPlugin = exports.pl = void 0;
const tslib_1 = require("tslib");
const fastify_plugin_1 = tslib_1.__importDefault(require("fastify-plugin"));
const routes_1 = require("./author/routes");
const routes_2 = require("./book/routes");
const routes_3 = require("./category/routes");
const routes_4 = require("./course/coursesOfUser/routes");
const routes_5 = require("./course/routes");
const routes_6 = require("./user/routes");
const routes = [
    ...routes_6.userRoutes,
    ...routes_2.bookRoutes,
    ...routes_3.categoryRoutes,
    ...routes_1.authorRoutes,
    ...routes_5.courseRoutes,
    // ...uploadFileRoutes,
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
exports.routesUserPlugin = (0, fastify_plugin_1.default)(pl);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvdXNlci9yb3V0ZXMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLDRFQUFnQztBQUNoQyw0Q0FBK0M7QUFDL0MsMENBQTJDO0FBQzNDLDhDQUFtRDtBQUNuRCwwREFBb0U7QUFDcEUsNENBQStDO0FBQy9DLDBDQUEyQztBQUczQyxNQUFNLE1BQU0sR0FBRztJQUNiLEdBQUcsbUJBQVU7SUFDYixHQUFHLG1CQUFVO0lBQ2IsR0FBRyx1QkFBYztJQUNqQixHQUFHLHFCQUFZO0lBQ2YsR0FBRyxxQkFBWTtJQUNmLHVCQUF1QjtJQUN2QixHQUFHLDRCQUFtQjtDQUN2QixDQUFDO0FBRUssS0FBSyxVQUFVLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxFQUFFLElBQUk7SUFDeEMsSUFBSTtRQUNGLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztLQUM5QztJQUFDLE9BQU8sS0FBSyxFQUFFO1FBQ2QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNuQixPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQ2pCO0lBRUQsSUFBSSxFQUFFLENBQUM7QUFDVCxDQUFDO0FBVEQsZ0JBU0M7QUFFWSxRQUFBLGdCQUFnQixHQUFHLElBQUEsd0JBQUUsRUFBQyxFQUFFLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmcCBmcm9tICdmYXN0aWZ5LXBsdWdpbic7XHJcbmltcG9ydCB7IGF1dGhvclJvdXRlcyB9IGZyb20gJy4vYXV0aG9yL3JvdXRlcyc7XHJcbmltcG9ydCB7IGJvb2tSb3V0ZXMgfSBmcm9tICcuL2Jvb2svcm91dGVzJztcclxuaW1wb3J0IHsgY2F0ZWdvcnlSb3V0ZXMgfSBmcm9tICcuL2NhdGVnb3J5L3JvdXRlcyc7XHJcbmltcG9ydCB7IGNvdXJzZXNPZlVzZXJSb3V0ZXMgfSBmcm9tICcuL2NvdXJzZS9jb3Vyc2VzT2ZVc2VyL3JvdXRlcyc7XHJcbmltcG9ydCB7IGNvdXJzZVJvdXRlcyB9IGZyb20gJy4vY291cnNlL3JvdXRlcyc7XHJcbmltcG9ydCB7IHVzZXJSb3V0ZXMgfSBmcm9tICcuL3VzZXIvcm91dGVzJztcclxuXHJcblxyXG5jb25zdCByb3V0ZXMgPSBbXHJcbiAgLi4udXNlclJvdXRlcyxcclxuICAuLi5ib29rUm91dGVzLFxyXG4gIC4uLmNhdGVnb3J5Um91dGVzLFxyXG4gIC4uLmF1dGhvclJvdXRlcyxcclxuICAuLi5jb3Vyc2VSb3V0ZXMsXHJcbiAgLy8gLi4udXBsb2FkRmlsZVJvdXRlcyxcclxuICAuLi5jb3Vyc2VzT2ZVc2VyUm91dGVzLFxyXG5dO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHBsKGluc3RhbmNlLCBfLCBuZXh0KSB7XHJcbiAgdHJ5IHtcclxuICAgIHJvdXRlcy5tYXAoKHJvdXRlKSA9PiBpbnN0YW5jZS5yb3V0ZShyb3V0ZSkpO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICBwcm9jZXNzLmV4aXQoMSk7XHJcbiAgfVxyXG5cclxuICBuZXh0KCk7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCByb3V0ZXNVc2VyUGx1Z2luID0gZnAocGwpO1xyXG4iXX0=