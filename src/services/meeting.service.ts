import { prisma } from "../config/prisma";

export async function createMeeting(
  title: string,
  meetingDate: string,
  userId: string
) {
  return prisma.meeting.create({
    data: {
      title,
      meetingDate: new Date(meetingDate),
      createdById: userId,
    },
  });
}

export async function getMeetings(
  userId: string
) {
  return prisma.meeting.findMany({
    where: {
      createdById: userId,
    },
    orderBy: {
      meetingDate: "desc",
    },
  });
}

export async function getMeetingById(
  meetingId: string,
  userId: string
) {
  return prisma.meeting.findFirst({
    where: {
      id: meetingId,
      createdById: userId,
    },
  });
}

export async function deleteMeeting(
  meetingId: string,
  userId: string
) {
  const meeting = await prisma.meeting.findFirst({
    where: {
      id: meetingId,
      createdById: userId,
    },
  });

  if (!meeting) {
    throw new Error("Meeting not found");
  }

  await prisma.meeting.delete({
    where: {
      id: meetingId,
    },
  });

  return {
    message: "Meeting deleted successfully",
  };
}