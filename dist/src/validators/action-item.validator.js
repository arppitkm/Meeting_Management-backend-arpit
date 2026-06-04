"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateStatusSchema = exports.createActionItemSchema = void 0;
const zod_1 = require("zod");
exports.createActionItemSchema = zod_1.z.object({
    meetingId: zod_1.z.string(),
    task: zod_1.z.string().min(1),
    assignee: zod_1.z.string().min(1),
    dueDate: zod_1.z.string().optional(),
});
exports.updateStatusSchema = zod_1.z.object({
    status: zod_1.z.enum([
        "PENDING",
        "IN_PROGRESS",
        "COMPLETED",
    ]),
});
//# sourceMappingURL=action-item.validator.js.map