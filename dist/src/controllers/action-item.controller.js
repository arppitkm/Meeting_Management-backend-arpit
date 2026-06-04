"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createHandler = createHandler;
exports.listHandler = listHandler;
exports.updateStatusHandler = updateStatusHandler;
exports.deleteHandler = deleteHandler;
const action_item_validator_1 = require("../validators/action-item.validator");
const action_item_service_1 = require("../services/action-item.service");
async function createHandler(req, res) {
    try {
        const data = action_item_validator_1.createActionItemSchema.parse(req.body);
        const result = await (0, action_item_service_1.createActionItem)(data.meetingId, data.task, data.assignee, data.dueDate);
        return res.status(201).json(result);
    }
    catch (error) {
        return res.status(400).json({
            message: error instanceof Error
                ? error.message
                : "Create failed",
        });
    }
}
async function listHandler(_req, res) {
    const result = await (0, action_item_service_1.getActionItems)();
    return res.json(result);
}
async function updateStatusHandler(req, res) {
    try {
        const data = action_item_validator_1.updateStatusSchema.parse(req.body);
        const result = await (0, action_item_service_1.updateActionItemStatus)(String(req.params.id), data.status);
        return res.json(result);
    }
    catch (error) {
        return res.status(400).json({
            message: error instanceof Error
                ? error.message
                : "Update failed",
        });
    }
}
async function deleteHandler(req, res) {
    try {
        const result = await (0, action_item_service_1.deleteActionItem)(String(req.params.id));
        return res.json(result);
    }
    catch (error) {
        return res.status(404).json({
            message: error instanceof Error
                ? error.message
                : "Delete failed",
        });
    }
}
//# sourceMappingURL=action-item.controller.js.map