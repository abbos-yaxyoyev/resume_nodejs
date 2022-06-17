"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.jwtSign = exports.authPlugin = void 0;
const tslib_1 = require("tslib");
const fastify_plugin_1 = tslib_1.__importDefault(require("fastify-plugin"));
const config_1 = require("../config");
const fastify_jwt_1 = tslib_1.__importDefault(require("fastify-jwt"));
async function auth(instance, options, next) {
    instance.register(fastify_jwt_1.default, {
        secret: config_1.ENV.JWT_SECRET,
        sign: {
            expiresIn: config_1.ENV.JWT_EXPIRE,
        },
    });
    instance.addHook('onRequest', function (request, reply, done) {
        request.instance = instance;
        request.lang = request.headers['language'] || 'uz';
        console.log('language: ', request.lang);
        done();
    });
    next();
}
exports.authPlugin = (0, fastify_plugin_1.default)(auth);
function jwtSign(request, params) {
    return request.instance.jwt.sign(params);
}
exports.jwtSign = jwtSign;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aFBsdWdpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21tb24vcGx1Z2luL2F1dGhQbHVnaW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLDRFQUFnQztBQUNoQyxzQ0FBZ0M7QUFDaEMsc0VBQXFDO0FBRXJDLEtBQUssVUFBVSxJQUFJLENBQUMsUUFBUSxFQUFFLE9BQU8sRUFBRSxJQUFJO0lBQ3pDLFFBQVEsQ0FBQyxRQUFRLENBQUMscUJBQVUsRUFBRTtRQUM1QixNQUFNLEVBQUUsWUFBRyxDQUFDLFVBQVU7UUFDdEIsSUFBSSxFQUFFO1lBQ0osU0FBUyxFQUFFLFlBQUcsQ0FBQyxVQUFVO1NBQzFCO0tBQ0YsQ0FBQyxDQUFDO0lBRUgsUUFBUSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsVUFBVSxPQUFPLEVBQUUsS0FBSyxFQUFFLElBQUk7UUFDMUQsT0FBTyxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDNUIsT0FBTyxDQUFDLElBQUksR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxJQUFJLElBQUksQ0FBQztRQUNuRCxPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEMsSUFBSSxFQUFFLENBQUM7SUFDVCxDQUFDLENBQUMsQ0FBQztJQUVILElBQUksRUFBRSxDQUFDO0FBQ1QsQ0FBQztBQUVZLFFBQUEsVUFBVSxHQUFHLElBQUEsd0JBQUUsRUFBQyxJQUFJLENBQUMsQ0FBQztBQUVuQyxTQUFnQixPQUFPLENBQUMsT0FBTyxFQUFFLE1BQU07SUFDckMsT0FBTyxPQUFPLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDM0MsQ0FBQztBQUZELDBCQUVDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZwIGZyb20gJ2Zhc3RpZnktcGx1Z2luJztcclxuaW1wb3J0IHsgRU5WIH0gZnJvbSAnLi4vY29uZmlnJztcclxuaW1wb3J0IGZhc3RpZnlKV1QgZnJvbSAnZmFzdGlmeS1qd3QnO1xyXG5cclxuYXN5bmMgZnVuY3Rpb24gYXV0aChpbnN0YW5jZSwgb3B0aW9ucywgbmV4dCkge1xyXG4gIGluc3RhbmNlLnJlZ2lzdGVyKGZhc3RpZnlKV1QsIHtcclxuICAgIHNlY3JldDogRU5WLkpXVF9TRUNSRVQsXHJcbiAgICBzaWduOiB7XHJcbiAgICAgIGV4cGlyZXNJbjogRU5WLkpXVF9FWFBJUkUsXHJcbiAgICB9LFxyXG4gIH0pO1xyXG5cclxuICBpbnN0YW5jZS5hZGRIb29rKCdvblJlcXVlc3QnLCBmdW5jdGlvbiAocmVxdWVzdCwgcmVwbHksIGRvbmUpIHtcclxuICAgIHJlcXVlc3QuaW5zdGFuY2UgPSBpbnN0YW5jZTtcclxuICAgIHJlcXVlc3QubGFuZyA9IHJlcXVlc3QuaGVhZGVyc1snbGFuZ3VhZ2UnXSB8fCAndXonO1xyXG4gICAgY29uc29sZS5sb2coJ2xhbmd1YWdlOiAnLCByZXF1ZXN0LmxhbmcpO1xyXG4gICAgZG9uZSgpO1xyXG4gIH0pO1xyXG5cclxuICBuZXh0KCk7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBhdXRoUGx1Z2luID0gZnAoYXV0aCk7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gand0U2lnbihyZXF1ZXN0LCBwYXJhbXMpIHtcclxuICByZXR1cm4gcmVxdWVzdC5pbnN0YW5jZS5qd3Quc2lnbihwYXJhbXMpO1xyXG59XHJcbiJdfQ==