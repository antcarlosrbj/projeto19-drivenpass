import Cryptr from 'cryptr';
import * as registerRepository from "../repositories/registerRepository.js";
import * as commonRepository from "../repositories/commonRepository.js";
import { credentialCreate } from "../schemas/registerSchema.js";


export type CredentialWithUserId = {
    userId: number;
	url: string;
	user: string;
	password: string;
	title: string;
};

export type CredentialCreate = Omit<CredentialWithUserId, "userId">;

export async function validateCredential(user: CredentialCreate) {

    const validation = credentialCreate.validate(user);
    if (validation.error) {
      return {res: false, text: validation.error.details[0].message};
    }

    return {res: true}
}

export async function insertCredential(credentialWithUserId: CredentialWithUserId) {

    const duplicateRegister = await registerRepository.findDuplicateRegister(credentialWithUserId);
    if (duplicateRegister) {
        return {res: false, text: "Title has been already registered"};
    }

    const insertRegister = await commonRepository.insert("registers",{
        title: credentialWithUserId.title,
        userId: credentialWithUserId.userId,
        category: "credential"
      });
    if (!insertRegister) {
        return {res: false, text: "Unable to insert into repository"};
    }

    const cryptr = new Cryptr(process.env.CRYPTR_SECRET);
    const passwordEncrypt = cryptr.encrypt(credentialWithUserId.password);

    const insertCredential = await commonRepository.insert("credential",{
        url: credentialWithUserId.url,
        user: credentialWithUserId.user,
        password: passwordEncrypt,
        registerId: insertRegister.id
      });
    if (!insertCredential) {
        return {res: false, text: "Unable to insert into credential"};
    }

    return {res: true, text: ""};
}

export async function listCredential(userId: number) {
    
    const listCredential = await registerRepository.listCredential(userId);

    const cryptr = new Cryptr(process.env.CRYPTR_SECRET);
    listCredential.forEach(e => e.credential[0].password = cryptr.decrypt(e.credential[0].password))
    
    return listCredential;
}

export async function getCredential(userId: number, registerId: number) {
    
    const getCredential = await registerRepository.getCredential(userId, registerId);
    if (!getCredential) {
        return {res: false};
    }

    const cryptr = new Cryptr(process.env.CRYPTR_SECRET);
    getCredential.credential[0].password = cryptr.decrypt(getCredential.credential[0].password);
    
    return {res: true, data: getCredential};
}

export async function deleteCredential(userId: number, registerId: number) {
    
    const searchRegister = await registerRepository.searchRegister(userId, registerId);
    if (!searchRegister) {
        return false;
    }

    const searchCredential = await registerRepository.searchCredential(registerId);
    if (!searchCredential) {
        return false;
    }

    const deleteCredential = await registerRepository.deleteCredential(searchCredential.id);
    if (!deleteCredential) {
        return false;
    }

    const deleteRegister = await registerRepository.deleteRegister(registerId);
    if (!deleteRegister) {
        return false;
    }
    
    return true;
}