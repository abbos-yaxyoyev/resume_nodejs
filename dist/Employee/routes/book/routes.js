"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bookRoutes = void 0;
const config_1 = require("../../../common/config");
const book_handler_1 = require("../../handlers/book/book.handler");
const authenticate_1 = require("../../middleware/authenticate");
exports.bookRoutes = [
    {
        method: 'POST',
        url: `${config_1.API.admin_api}/book`,
        preValidation: [authenticate_1.authEmployee],
        handler: book_handler_1.createBookHandler,
    },
    {
        method: 'PUT',
        url: `${config_1.API.admin_api}/book`,
        preValidation: [authenticate_1.authEmployee],
        handler: book_handler_1.updateBookHandler,
    },
    {
        method: 'DELETE',
        url: `${config_1.API.admin_api}/book/:_id`,
        preValidation: [authenticate_1.authEmployee],
        handler: book_handler_1.deleteOneBookHandler,
    },
    {
        method: 'GET',
        url: `${config_1.API.admin_api}/book/:_id`,
        preValidation: [authenticate_1.authEmployee],
        handler: book_handler_1.getOneBookHandler,
    },
    {
        method: 'GET',
        url: `${config_1.API.admin_api}/book`,
        preValidation: [authenticate_1.authEmployee],
        handler: book_handler_1.getPagingBookHandler,
    }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL0VtcGxveWVlL3JvdXRlcy9ib29rL3JvdXRlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxtREFBNkM7QUFDN0MsbUVBRTBDO0FBQzFDLGdFQUE2RDtBQUVoRCxRQUFBLFVBQVUsR0FBRztJQUN4QjtRQUNFLE1BQU0sRUFBRSxNQUFNO1FBQ2QsR0FBRyxFQUFFLEdBQUcsWUFBRyxDQUFDLFNBQVMsT0FBTztRQUM1QixhQUFhLEVBQUUsQ0FBQywyQkFBWSxDQUFDO1FBQzdCLE9BQU8sRUFBRSxnQ0FBaUI7S0FDM0I7SUFDRDtRQUNFLE1BQU0sRUFBRSxLQUFLO1FBQ2IsR0FBRyxFQUFFLEdBQUcsWUFBRyxDQUFDLFNBQVMsT0FBTztRQUM1QixhQUFhLEVBQUUsQ0FBQywyQkFBWSxDQUFDO1FBQzdCLE9BQU8sRUFBRSxnQ0FBaUI7S0FDM0I7SUFDRDtRQUNFLE1BQU0sRUFBRSxRQUFRO1FBQ2hCLEdBQUcsRUFBRSxHQUFHLFlBQUcsQ0FBQyxTQUFTLFlBQVk7UUFDakMsYUFBYSxFQUFFLENBQUMsMkJBQVksQ0FBQztRQUM3QixPQUFPLEVBQUUsbUNBQW9CO0tBQzlCO0lBQ0Q7UUFDRSxNQUFNLEVBQUUsS0FBSztRQUNiLEdBQUcsRUFBRSxHQUFHLFlBQUcsQ0FBQyxTQUFTLFlBQVk7UUFDakMsYUFBYSxFQUFFLENBQUMsMkJBQVksQ0FBQztRQUM3QixPQUFPLEVBQUUsZ0NBQWlCO0tBQzNCO0lBQ0Q7UUFDRSxNQUFNLEVBQUUsS0FBSztRQUNiLEdBQUcsRUFBRSxHQUFHLFlBQUcsQ0FBQyxTQUFTLE9BQU87UUFDNUIsYUFBYSxFQUFFLENBQUMsMkJBQVksQ0FBQztRQUM3QixPQUFPLEVBQUUsbUNBQW9CO0tBQzlCO0NBQ0YsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFQSSB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9jb25maWcnO1xyXG5pbXBvcnQge1xyXG4gIGNyZWF0ZUJvb2tIYW5kbGVyLCBkZWxldGVPbmVCb29rSGFuZGxlciwgZ2V0T25lQm9va0hhbmRsZXIsIGdldFBhZ2luZ0Jvb2tIYW5kbGVyLCB1cGRhdGVCb29rSGFuZGxlclxyXG59IGZyb20gJy4uLy4uL2hhbmRsZXJzL2Jvb2svYm9vay5oYW5kbGVyJztcclxuaW1wb3J0IHsgYXV0aEVtcGxveWVlIH0gZnJvbSAnLi4vLi4vbWlkZGxld2FyZS9hdXRoZW50aWNhdGUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGJvb2tSb3V0ZXMgPSBbXHJcbiAge1xyXG4gICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICB1cmw6IGAke0FQSS5hZG1pbl9hcGl9L2Jvb2tgLFxyXG4gICAgcHJlVmFsaWRhdGlvbjogW2F1dGhFbXBsb3llZV0sXHJcbiAgICBoYW5kbGVyOiBjcmVhdGVCb29rSGFuZGxlcixcclxuICB9LFxyXG4gIHtcclxuICAgIG1ldGhvZDogJ1BVVCcsXHJcbiAgICB1cmw6IGAke0FQSS5hZG1pbl9hcGl9L2Jvb2tgLFxyXG4gICAgcHJlVmFsaWRhdGlvbjogW2F1dGhFbXBsb3llZV0sXHJcbiAgICBoYW5kbGVyOiB1cGRhdGVCb29rSGFuZGxlcixcclxuICB9LFxyXG4gIHtcclxuICAgIG1ldGhvZDogJ0RFTEVURScsXHJcbiAgICB1cmw6IGAke0FQSS5hZG1pbl9hcGl9L2Jvb2svOl9pZGAsXHJcbiAgICBwcmVWYWxpZGF0aW9uOiBbYXV0aEVtcGxveWVlXSxcclxuICAgIGhhbmRsZXI6IGRlbGV0ZU9uZUJvb2tIYW5kbGVyLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbWV0aG9kOiAnR0VUJyxcclxuICAgIHVybDogYCR7QVBJLmFkbWluX2FwaX0vYm9vay86X2lkYCxcclxuICAgIHByZVZhbGlkYXRpb246IFthdXRoRW1wbG95ZWVdLFxyXG4gICAgaGFuZGxlcjogZ2V0T25lQm9va0hhbmRsZXIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgdXJsOiBgJHtBUEkuYWRtaW5fYXBpfS9ib29rYCxcclxuICAgIHByZVZhbGlkYXRpb246IFthdXRoRW1wbG95ZWVdLFxyXG4gICAgaGFuZGxlcjogZ2V0UGFnaW5nQm9va0hhbmRsZXIsXHJcbiAgfVxyXG5dO1xyXG4iXX0=