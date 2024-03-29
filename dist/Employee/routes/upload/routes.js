"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadFileRoutes = void 0;
const routes_1 = require("../../../upload/routes");
const authenticate_1 = require("../../middleware/authenticate");
exports.uploadFileRoutes = (0, routes_1.uploadFile)(authenticate_1.authEmployee);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL0VtcGxveWVlL3JvdXRlcy91cGxvYWQvcm91dGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLG1EQUFvRDtBQUNwRCxnRUFBNkQ7QUFDaEQsUUFBQSxnQkFBZ0IsR0FBRyxJQUFBLG1CQUFVLEVBQUMsMkJBQVksQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXBsb2FkRmlsZSB9IGZyb20gJy4uLy4uLy4uL3VwbG9hZC9yb3V0ZXMnO1xyXG5pbXBvcnQgeyBhdXRoRW1wbG95ZWUgfSBmcm9tICcuLi8uLi9taWRkbGV3YXJlL2F1dGhlbnRpY2F0ZSc7XHJcbmV4cG9ydCBjb25zdCB1cGxvYWRGaWxlUm91dGVzID0gdXBsb2FkRmlsZShhdXRoRW1wbG95ZWUpO1xyXG4iXX0=