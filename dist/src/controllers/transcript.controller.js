"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addTranscriptHandler = addTranscriptHandler;
exports.getTranscriptsHandler = getTranscriptsHandler;
const transcript_validator_1 = require("../validators/transcript.validator");
const transcript_service_1 = require("../services/transcript.service");
async function addTranscriptHandler(req, res) {
    try {
        const data = transcript_validator_1.createTranscriptSchema.parse(req.body);
        const transcript = await (0, transcript_service_1.addTranscript)(String(req.params.id), data.speaker, data.timestamp, data.text);
        return res.status(201).json(transcript);
    }
    catch (error) {
        return res.status(400).json({
            message: error instanceof Error
                ? error.message
                : "Create transcript failed",
        });
    }
}
async function getTranscriptsHandler(req, res) {
    try {
        const transcripts = await (0, transcript_service_1.getTranscripts)(String(req.params.id));
        return res.json(transcripts);
    }
    catch (error) {
        return res.status(400).json({
            message: error instanceof Error
                ? error.message
                : "Fetch transcripts failed",
        });
    }
}
//# sourceMappingURL=transcript.controller.js.map