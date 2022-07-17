import { prisma } from "../config/database.js";

export async function findByEmail(email: string) {
  return prisma.users.findFirst({
    where: { email: email },
  });
}