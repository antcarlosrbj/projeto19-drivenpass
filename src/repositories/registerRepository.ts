import { prisma } from "../config/database.js";

export async function findDuplicateRegister(title, userId, category) {
  return prisma.registers.findFirst({
    where: {
      title: title,
      userId: userId,
      category: category
    }
  });
}

export async function list(category, userId: number) {
  return prisma.registers.findMany({
    where: {userId, category},
    include: {
      credential: category === "credential",
      secure_note: category === "secure_note",
      wifi: category === "wifi",
      cards: category === "cards"
    }
  })
}

export async function getRegister(category, userId: number, registerId: number) {
  return prisma.registers.findFirst({
    where: {userId, id: registerId, category},
    include: {
      credential: category === "credential",
      secure_note: category === "secure_note",
      wifi: category === "wifi",
      cards: category === "cards"
    }
  })
}

export async function searchRegister(userId: number, registerId: number) {
  return prisma.registers.findFirst({
    where: {userId, id: registerId}
  })
}

export async function searchCategory(category: string, registerId: number) {
  if (category === "credential") {
    return prisma.credential.findFirst({
      where: {registerId}
    })
  } else if (category === "secure_note") {
    return prisma.secure_note.findFirst({
      where: {registerId}
    })
  } else if (category === "wifi") {
    return prisma.wifi.findFirst({
      where: {registerId}
    })
  } else if (category === "cards") {
    return prisma.cards.findFirst({
      where: {registerId}
    })
  }
}

export async function deleteCategory(category: string, id: number) {
  if (category === "credential") {
    return prisma.credential.delete({
      where: {id}
    })
  } else if (category === "secure_note") {
    return prisma.secure_note.delete({
      where: {id}
    })
  } else if (category === "wifi") {
    return prisma.wifi.delete({
      where: {id}
    })
  } else if (category === "cards") {
    return prisma.cards.delete({
      where: {id}
    })
  }
}

export async function deleteRegister(id: number) {
  return prisma.registers.delete({
    where: {id}
  })
}