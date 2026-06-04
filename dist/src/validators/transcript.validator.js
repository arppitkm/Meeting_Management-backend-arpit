"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTranscriptSchema = void 0;
const zod_1 = require("zod");
exports.createTranscriptSchema = zod_1.z.object({
    timestamp: zod_1.z.string().min(1),
    speaker: zod_1.z.string().min(1),
    text: zod_1.z.string().min(1),
});
//# sourceMappingURL=transcript.validator.js.map