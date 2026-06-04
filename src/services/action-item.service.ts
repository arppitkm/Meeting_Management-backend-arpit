import { prisma } from "../config/prisma";

export async function createActionItem(
  meetingId: string,
  task: string,
  assignee: string,
  dueDate?: string
) {
  return prisma.actionItem.create({
    data: {
      meetingId,
      task,
      assignee,
      dueDate: dueDate
        ? new Date(dueDate)
        : null,
    },
  });
}

export async function getActionItems() {
  return prisma.actionItem.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
}

export async function updateActionItemStatus(
  id: string,
  status:
    | "PENDING"
    | "IN_PROGRESS"
    | "COMPLETED"
) {
  return prisma.actionItem.update({
    where: { id },
    data: { status },
  });
}

export async function deleteActionItem(
  id: string
) {
  await prisma.actionItem.delete({
    where: { id },
  });

  return {
    message:
      "Action item deleted successfully",
  };
}