import { prisma } from "../config/database.js";
import { UserWithoutId } from "../services/authService.js";

export async function findByEmail(email: string) {
  return prisma.users.findFirst({
    where: { email: email },
  });
}

export async function insert(user: UserWithoutId) {
  return prisma.users.create({
    data: user
  })
}