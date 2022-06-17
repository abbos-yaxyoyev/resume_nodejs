"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routesPlugin = exports.pl = void 0;
const tslib_1 = require("tslib");
const fastify_plugin_1 = tslib_1.__importDefault(require("fastify-plugin"));
const routes_1 = require("./author/routes");
const routes_2 = require("./book/routes");
const routes_3 = require("./course/coursesOfUser/routes");
const routes_4 = require("./course/routes");
const routes_5 = require("./genre/routes");
const routes_6 = require("./upload/routes");
const routes_7 = require("./user/routes");
const routes = [
    ...routes_7.userRoutes,
    ...routes_2.bookRoutes,
    ...routes_5.genreRoutes,
    ...routes_1.authorRoutes,
    ...routes_4.courseRoutes,
    ...routes_6.uploadFileRoutes,
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
exports.routesPlugin = (0, fastify_plugin_1.default)(pl);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvdXNlci9yb3V0ZXMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLDRFQUFnQztBQUNoQyw0Q0FBK0M7QUFDL0MsMENBQTJDO0FBQzNDLDBEQUFvRTtBQUNwRSw0Q0FBK0M7QUFDL0MsMkNBQTZDO0FBQzdDLDRDQUFtRDtBQUNuRCwwQ0FBMkM7QUFHM0MsTUFBTSxNQUFNLEdBQUc7SUFDYixHQUFHLG1CQUFVO0lBQ2IsR0FBRyxtQkFBVTtJQUNiLEdBQUcsb0JBQVc7SUFDZCxHQUFHLHFCQUFZO0lBQ2YsR0FBRyxxQkFBWTtJQUNmLEdBQUcseUJBQWdCO0lBQ25CLEdBQUcsNEJBQW1CO0NBQ3ZCLENBQUM7QUFFSyxLQUFLLFVBQVUsRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDLEVBQUUsSUFBSTtJQUN4QyxJQUFJO1FBQ0YsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0tBQzlDO0lBQUMsT0FBTyxLQUFLLEVBQUU7UUFDZCxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ25CLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FDakI7SUFFRCxJQUFJLEVBQUUsQ0FBQztBQUNULENBQUM7QUFURCxnQkFTQztBQUVZLFFBQUEsWUFBWSxHQUFHLElBQUEsd0JBQUUsRUFBQyxFQUFFLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmcCBmcm9tICdmYXN0aWZ5LXBsdWdpbic7XHJcbmltcG9ydCB7IGF1dGhvclJvdXRlcyB9IGZyb20gJy4vYXV0aG9yL3JvdXRlcyc7XHJcbmltcG9ydCB7IGJvb2tSb3V0ZXMgfSBmcm9tICcuL2Jvb2svcm91dGVzJztcclxuaW1wb3J0IHsgY291cnNlc09mVXNlclJvdXRlcyB9IGZyb20gJy4vY291cnNlL2NvdXJzZXNPZlVzZXIvcm91dGVzJztcclxuaW1wb3J0IHsgY291cnNlUm91dGVzIH0gZnJvbSAnLi9jb3Vyc2Uvcm91dGVzJztcclxuaW1wb3J0IHsgZ2VucmVSb3V0ZXMgfSBmcm9tICcuL2dlbnJlL3JvdXRlcyc7XHJcbmltcG9ydCB7IHVwbG9hZEZpbGVSb3V0ZXMgfSBmcm9tICcuL3VwbG9hZC9yb3V0ZXMnO1xyXG5pbXBvcnQgeyB1c2VyUm91dGVzIH0gZnJvbSAnLi91c2VyL3JvdXRlcyc7XHJcblxyXG5cclxuY29uc3Qgcm91dGVzID0gW1xyXG4gIC4uLnVzZXJSb3V0ZXMsXHJcbiAgLi4uYm9va1JvdXRlcyxcclxuICAuLi5nZW5yZVJvdXRlcyxcclxuICAuLi5hdXRob3JSb3V0ZXMsXHJcbiAgLi4uY291cnNlUm91dGVzLFxyXG4gIC4uLnVwbG9hZEZpbGVSb3V0ZXMsXHJcbiAgLi4uY291cnNlc09mVXNlclJvdXRlcyxcclxuXTtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBwbChpbnN0YW5jZSwgXywgbmV4dCkge1xyXG4gIHRyeSB7XHJcbiAgICByb3V0ZXMubWFwKChyb3V0ZSkgPT4gaW5zdGFuY2Uucm91dGUocm91dGUpKTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgcHJvY2Vzcy5leGl0KDEpO1xyXG4gIH1cclxuXHJcbiAgbmV4dCgpO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3Qgcm91dGVzUGx1Z2luID0gZnAocGwpO1xyXG4iXX0=