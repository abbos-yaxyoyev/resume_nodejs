"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mightyUserAuth = exports.authUser = void 0;
const user_service_1 = require("../../common/service/user/user.service");
async function authUser(request, reply) {
    try {
        console.log("request.ip: ", request.ip);
        const token = await request.jwtVerify();
        const user = await user_service_1.userService.findByIdError(token._id, {});
        request.user = user;
    }
    catch (error) {
        return reply.status(401).send({
            code: 401,
            statusCode: 401,
            message: 'Authorization failed',
        });
    }
}
exports.authUser = authUser;
async function mightyUserAuth(request, reply) {
    try {
        const { _id } = await request.jwtVerify();
        const user = await user_service_1.userService.findByIdError(_id, {});
        request.user = user;
    }
    catch (error) { }
}
exports.mightyUserAuth = mightyUserAuth;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aGVudGljYXRlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3VzZXIvbWlkZGxld2FyZS9hdXRoZW50aWNhdGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEseUVBQXFFO0FBRTlELEtBQUssVUFBVSxRQUFRLENBQUMsT0FBTyxFQUFFLEtBQUs7SUFDM0MsSUFBSTtRQUNGLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxFQUFFLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUV4QyxNQUFNLEtBQUssR0FBRyxNQUFNLE9BQU8sQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUN4QyxNQUFNLElBQUksR0FBRyxNQUFNLDBCQUFXLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDNUQsT0FBTyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7S0FDckI7SUFBQyxPQUFPLEtBQUssRUFBRTtRQUNkLE9BQU8sS0FBSyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFDNUIsSUFBSSxFQUFFLEdBQUc7WUFDVCxVQUFVLEVBQUUsR0FBRztZQUNmLE9BQU8sRUFBRSxzQkFBc0I7U0FDaEMsQ0FBQyxDQUFDO0tBQ0o7QUFDSCxDQUFDO0FBZEQsNEJBY0M7QUFFTSxLQUFLLFVBQVUsY0FBYyxDQUFDLE9BQU8sRUFBRSxLQUFLO0lBQ2pELElBQUk7UUFDRixNQUFNLEVBQUUsR0FBRyxFQUFFLEdBQUcsTUFBTSxPQUFPLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDMUMsTUFBTSxJQUFJLEdBQUcsTUFBTSwwQkFBVyxDQUFDLGFBQWEsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDdEQsT0FBTyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7S0FDckI7SUFBQyxPQUFPLEtBQUssRUFBRSxHQUFHO0FBQ3JCLENBQUM7QUFORCx3Q0FNQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vY29tbW9uL3NlcnZpY2UvdXNlci91c2VyLnNlcnZpY2UnO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGF1dGhVc2VyKHJlcXVlc3QsIHJlcGx5KSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnNvbGUubG9nKFwicmVxdWVzdC5pcDogXCIsIHJlcXVlc3QuaXApO1xyXG5cclxuICAgIGNvbnN0IHRva2VuID0gYXdhaXQgcmVxdWVzdC5qd3RWZXJpZnkoKTtcclxuICAgIGNvbnN0IHVzZXIgPSBhd2FpdCB1c2VyU2VydmljZS5maW5kQnlJZEVycm9yKHRva2VuLl9pZCwge30pO1xyXG4gICAgcmVxdWVzdC51c2VyID0gdXNlcjtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgcmV0dXJuIHJlcGx5LnN0YXR1cyg0MDEpLnNlbmQoe1xyXG4gICAgICBjb2RlOiA0MDEsXHJcbiAgICAgIHN0YXR1c0NvZGU6IDQwMSxcclxuICAgICAgbWVzc2FnZTogJ0F1dGhvcml6YXRpb24gZmFpbGVkJyxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIG1pZ2h0eVVzZXJBdXRoKHJlcXVlc3QsIHJlcGx5KSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHsgX2lkIH0gPSBhd2FpdCByZXF1ZXN0Lmp3dFZlcmlmeSgpO1xyXG4gICAgY29uc3QgdXNlciA9IGF3YWl0IHVzZXJTZXJ2aWNlLmZpbmRCeUlkRXJyb3IoX2lkLCB7fSk7XHJcbiAgICByZXF1ZXN0LnVzZXIgPSB1c2VyO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7IH1cclxufVxyXG4iXX0=