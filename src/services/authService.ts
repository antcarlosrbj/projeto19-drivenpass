import { users } from "@prisma/client";
import bcrypt from "bcrypt";
import * as usersRepository from "../repositories/usersRepository.js";
import { userWithoutId } from "../schemas/authSchema.js";


export type User = users;
export type UserWithoutId = Omit<User, "id">;

export async function validateUser(user: UserWithoutId) {

    const validation = userWithoutId.validate(user);
    if (validation.error) {
      return {res: false, text: validation.error.details[0].message};
    }

    const duplicateUser = await usersRepository.findByEmail(user.email)
    if (duplicateUser) {
        return {res: false, text: "Email has been already registered"};
    }

    return {res: true}
}

export async function insertIntoDatabase(user: UserWithoutId) {

    user.password = bcrypt.hashSync(user.password, 10)  
    await usersRepository.insert(user);

    return {res: true}
}