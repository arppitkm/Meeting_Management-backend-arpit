import { prisma } from "../config/prisma";

export async function processReminders() {
  const tomorrow = new Date();

  tomorrow.setDate(
    tomorrow.getDate() + 1
  );

  const actionItems =
    await prisma.actionItem.findMany({
      where: {
        status: {
          not: "COMPLETED",
        },
        dueDate: {
          lte: tomorrow,
        },
      },
    });

  for (const item of actionItems) {
    console.log(
      `[REMINDER] ${item.assignee} -> ${item.task}`
    );

    await prisma.reminderHistory.create({
      data: {
        actionItemId: item.id,
        channel: "SYSTEM",
      },
    });
  }

  return actionItems.length;
}