import { prisma } from "../config/database.js";

export async function insert(table: string, data) {
  if (table === "registers") {
    return prisma.registers.create({
      data: data
    })
  } else if (table === "credential") {
    return prisma.credential.create({
      data: data
    })
  } else if (table === "secure_note") {
    return prisma.secure_note.create({
      data: data
    })
  } else if (table === "wifi") {
    return prisma.wifi.create({
      data: data
    })
  } else if (table === "cards") {
    return prisma.cards.create({
      data: data
    })
  } else if (table === "users") {
    return prisma.users.create({
      data: data
    })
  } else {
    return null;
  }
}