"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createMeetingSchema = void 0;
const zod_1 = require("zod");
exports.createMeetingSchema = zod_1.z.object({
    title: zod_1.z.string().min(1, "Title is required"),
    meetingDate: zod_1.z.iso.datetime(),
});
//# sourceMappingURL=meeting.validator.js.map