import { prisma } from "../config/database.js";
import { CredentialWithUserId } from "../services/registerService.js";

export async function findDuplicateRegister(credentialWithUserId: CredentialWithUserId) {
  return prisma.registers.findFirst({
    where: {title: credentialWithUserId.title}
  });
}

export async function listCredential(userId: number) {
  return prisma.registers.findMany({
    where: {userId, category: "credential"},
    include: {
      credential: true
    }
  })
}