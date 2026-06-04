import { prisma } from "../config/prisma";

export async function addTranscript(
  meetingId: string,
  speaker: string,
  timestamp: string,
  text: string
) {
    console.log("meetingId received =", meetingId);
    
  return prisma.transcriptSegment.create({
    data: {
      meetingId,
      speaker,
      timestamp,
      text,
    },
  });
}

export async function getTranscripts(
  meetingId: string
) {
  return prisma.transcriptSegment.findMany({
    where: {
      meetingId,
    },
    orderBy: {
      createdAt: "asc",
    },
  });
}

export async function getMeetingTranscript(
  meetingId: string
) {
  return prisma.transcriptSegment.findMany({
    where: {
      meetingId,
    },
    orderBy: {
      createdAt: "asc",
    },
  });
}