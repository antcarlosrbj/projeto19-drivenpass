import { prisma } from "../config/database.js";
import { CredentialWithUserId } from "../services/registerService.js";

export async function findDuplicateRegister(credentialWithUserId: CredentialWithUserId) {
  return prisma.registers.findFirst({
    where: {
      title: credentialWithUserId.title,
      userId: credentialWithUserId.userId,
      category: "credential"
    }
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

export async function getCredential(userId: number, registerId: number) {
  return prisma.registers.findFirst({
    where: {userId, id: registerId, category: "credential"},
    include: {
      credential: true
    }
  })
}

export async function searchRegister(userId: number, registerId: number) {
  return prisma.registers.findFirst({
    where: {userId, id: registerId}
  })
}

export async function searchCredential(registerId: number) {
  return prisma.credential.findFirst({
    where: {registerId}
  })
}

export async function deleteCredential(id: number) {
  return prisma.credential.delete({
    where: {id}
  })
}

export async function deleteRegister(id: number) {
  return prisma.registers.delete({
    where: {id}
  })
}