import { prisma } from "../config/prisma";

export async function getDashboardStats(
  userId: string
) {
  const meetings = await prisma.meeting.count({
    where: {
      createdById: userId,
    },
  });

  const transcripts =
    await prisma.transcriptSegment.count();

  const actionItems =
    await prisma.actionItem.count();

  const completedActionItems =
    await prisma.actionItem.count({
      where: {
        status: "COMPLETED",
      },
    });

  const pendingActionItems =
    await prisma.actionItem.count({
      where: {
        status: {
          not: "COMPLETED",
        },
      },
    });

  const remindersSent =
    await prisma.reminderHistory.count();

  return {
    meetings,
    transcripts,
    actionItems,
    completedActionItems,
    pendingActionItems,
    remindersSent,
  };
}