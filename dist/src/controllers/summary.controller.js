"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.summaryHandler = summaryHandler;
const transcript_service_1 = require("../services/transcript.service");
const summary_service_1 = require("../services/summary.service");
async function summaryHandler(req, res) {
    try {
        const meetingId = req.params.id;
        const transcripts = await (0, transcript_service_1.getMeetingTranscript)(meetingId);
        const transcriptText = transcripts
            .map((t, index) => `Segment ${index + 1}: ${t.speaker}: ${t.text}`)
            .join("\n");
        const summaryText = await (0, summary_service_1.generateMeetingSummary)(transcriptText);
        console.log("RAW:");
        console.log(summaryText);
        const cleaned = summaryText
            ?.replace(/```json\s*/gi, "")
            .replace(/```\s*/g, "")
            .trim();
        console.log("CLEANED:");
        console.log(cleaned);
        const summary = JSON.parse(cleaned ?? "{}");
        return res.json(summary);
    }
    catch (error) {
        return res.status(500).json({
            message: error instanceof Error
                ? error.message
                : "Summary generation failed",
        });
    }
}
//# sourceMappingURL=summary.controller.js.map