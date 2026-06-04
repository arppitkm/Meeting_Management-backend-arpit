import { Request, Response } from "express";

import {
  createActionItemSchema,
  updateStatusSchema,
} from "../validators/action-item.validator";

import {
  createActionItem,
  getActionItems,
  updateActionItemStatus,
  deleteActionItem,
} from "../services/action-item.service";

export async function createHandler(
  req: Request,
  res: Response
) {
  try {
    const data =
      createActionItemSchema.parse(req.body);

    const result =
      await createActionItem(
        data.meetingId,
        data.task,
        data.assignee,
        data.dueDate
      );

    return res.status(201).json(result);
  } catch (error) {
    return res.status(400).json({
      message:
        error instanceof Error
          ? error.message
          : "Create failed",
    });
  }
}

export async function listHandler(
  _req: Request,
  res: Response
) {
  const result =
    await getActionItems();

  return res.json(result);
}

export async function updateStatusHandler(
  req: Request,
  res: Response
) {
  try {
    const data =
      updateStatusSchema.parse(req.body);

    const result =
      await updateActionItemStatus(
        String(req.params.id!),
        data.status
      );

    return res.json(result);
  } catch (error) {
    return res.status(400).json({
      message:
        error instanceof Error
          ? error.message
          : "Update failed",
    });
  }
}

export async function deleteHandler(
  req: Request,
  res: Response
) {
  try {
    const result =
      await deleteActionItem(
        String(req.params.id!)
      );

    return res.json(result);
  } catch (error) {
    return res.status(404).json({
      message:
        error instanceof Error
          ? error.message
          : "Delete failed",
    });
  }
}