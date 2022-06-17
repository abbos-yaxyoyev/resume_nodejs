"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.replyDecorator = void 0;
const tslib_1 = require("tslib");
const fastify_plugin_1 = tslib_1.__importDefault(require("fastify-plugin"));
const exceptions_1 = require("../constants/exceptions");
async function pl(instance, options, next) {
    instance.decorateReply('success', function (result = 'ok') {
        this.status(200).send({
            statusCode: 200,
            code: 0,
            message: 'Success',
            data: result,
        });
    });
    // global error handler
    instance.setErrorHandler((error, _request, reply) => {
        if (error instanceof exceptions_1.CommonException) {
            reply.status(400).send(error);
        }
        else {
            reply.send(error);
        }
    });
    next();
}
exports.replyDecorator = (0, fastify_plugin_1.default)(pl);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVwbHkuZGVjb3JhdG9yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvbW1vbi9kZWNvcmF0b3JzL3JlcGx5LmRlY29yYXRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsNEVBQWdDO0FBQ2hDLHdEQUEwRDtBQUUxRCxLQUFLLFVBQVUsRUFBRSxDQUFDLFFBQVEsRUFBRSxPQUFPLEVBQUUsSUFBSTtJQUN2QyxRQUFRLENBQUMsYUFBYSxDQUFDLFNBQVMsRUFBRSxVQUFVLFNBQWMsSUFBSTtRQUM1RCxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQztZQUNwQixVQUFVLEVBQUUsR0FBRztZQUNmLElBQUksRUFBRSxDQUFDO1lBQ1AsT0FBTyxFQUFFLFNBQVM7WUFDbEIsSUFBSSxFQUFFLE1BQU07U0FDYixDQUFDLENBQUM7SUFDTCxDQUFDLENBQUMsQ0FBQztJQUVILHVCQUF1QjtJQUN2QixRQUFRLENBQUMsZUFBZSxDQUFDLENBQUMsS0FBSyxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsRUFBRTtRQUNsRCxJQUFJLEtBQUssWUFBWSw0QkFBZSxFQUFFO1lBQ3BDLEtBQUssQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQy9CO2FBQU07WUFDTCxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ25CO0lBQ0gsQ0FBQyxDQUFDLENBQUM7SUFFSCxJQUFJLEVBQUUsQ0FBQztBQUNULENBQUM7QUFFWSxRQUFBLGNBQWMsR0FBRyxJQUFBLHdCQUFFLEVBQUMsRUFBRSxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZnAgZnJvbSAnZmFzdGlmeS1wbHVnaW4nO1xyXG5pbXBvcnQgeyBDb21tb25FeGNlcHRpb24gfSBmcm9tICcuLi9jb25zdGFudHMvZXhjZXB0aW9ucyc7XHJcblxyXG5hc3luYyBmdW5jdGlvbiBwbChpbnN0YW5jZSwgb3B0aW9ucywgbmV4dCkge1xyXG4gIGluc3RhbmNlLmRlY29yYXRlUmVwbHkoJ3N1Y2Nlc3MnLCBmdW5jdGlvbiAocmVzdWx0OiBhbnkgPSAnb2snKSB7XHJcbiAgICB0aGlzLnN0YXR1cygyMDApLnNlbmQoe1xyXG4gICAgICBzdGF0dXNDb2RlOiAyMDAsXHJcbiAgICAgIGNvZGU6IDAsXHJcbiAgICAgIG1lc3NhZ2U6ICdTdWNjZXNzJyxcclxuICAgICAgZGF0YTogcmVzdWx0LFxyXG4gICAgfSk7XHJcbiAgfSk7XHJcblxyXG4gIC8vIGdsb2JhbCBlcnJvciBoYW5kbGVyXHJcbiAgaW5zdGFuY2Uuc2V0RXJyb3JIYW5kbGVyKChlcnJvciwgX3JlcXVlc3QsIHJlcGx5KSA9PiB7XHJcbiAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBDb21tb25FeGNlcHRpb24pIHtcclxuICAgICAgcmVwbHkuc3RhdHVzKDQwMCkuc2VuZChlcnJvcik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXBseS5zZW5kKGVycm9yKTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgbmV4dCgpO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgcmVwbHlEZWNvcmF0b3IgPSBmcChwbCk7XHJcbiJdfQ==