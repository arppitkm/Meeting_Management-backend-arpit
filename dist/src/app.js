"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_routes_1 = __importDefault(require("./routes/auth.routes"));
const auth_middleware_1 = require("./middlewares/auth.middleware");
const meeting_routes_1 = __importDefault(require("./routes/meeting.routes"));
const action_item_routes_1 = __importDefault(require("./routes/action-item.routes"));
const reminder_routes_1 = __importDefault(require("./routes/reminder.routes"));
const dashboard_routes_1 = __importDefault(require("./routes/dashboard.routes"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const swagger_1 = require("./config/swagger");
const evaluation_routes_1 = __importDefault(require("./routes/evaluation.routes"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.get("/health", (_req, res) => {
    res.json({
        status: "UP",
    });
});
app.use("/api/auth", auth_routes_1.default);
app.use("/api/meetings", meeting_routes_1.default);
app.use("/api/action-items", action_item_routes_1.default);
app.use("/api/reminders", reminder_routes_1.default);
app.use("/api/dashboard", dashboard_routes_1.default);
app.use("/api-docs", swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swagger_1.swaggerSpec));
app.use("/api/evaluation", evaluation_routes_1.default);
app.get("/api/profile", auth_middleware_1.authenticate, (req, res) => {
    res.json({
        userId: req.userId,
        message: "Protected route works",
    });
});
exports.default = app;
//# sourceMappingURL=app.js.map