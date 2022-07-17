import { prisma } from "../config/database.js";
import { CredentialWithUserId } from "../services/registerService.js";

export async function findDuplicateRegister(credentialWithUserId: CredentialWithUserId) {
  return prisma.registers.findFirst({
    where: {title: credentialWithUserId.title}
  });
}