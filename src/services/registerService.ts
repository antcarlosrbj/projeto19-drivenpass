import Cryptr from 'cryptr';
import * as registerRepository from "../repositories/registerRepository.js";
import * as commonRepository from "../repositories/commonRepository.js";
import { credentialCreate, secureNoteCreate, wifiCreate, cardsCreate } from "../schemas/registerSchema.js";
import * as authService from "../services/authService.js";




export async function validate(category: string, body) {

    let validation;

    if (category === "credential") {
        validation = credentialCreate.validate(body);
    } else if (category === "secure_note") {
        validation = secureNoteCreate.validate(body);
    } else if (category === "wifi") {
        validation = wifiCreate.validate(body);
    } else if (category === "cards") {
        validation = cardsCreate.validate(body);
    } else {
        return {res: false, text: "wrong category"}
    }
    
    if (validation.error) {
      return {res: false, text: validation.error.details[0].message};
    }

    return {res: true}
}


export async function insertRegister(category, data, title, userId) {

    const duplicateRegister = await registerRepository.findDuplicateRegister(title, userId, category);
    if (duplicateRegister) {
        return {res: false, text: "Title has been already registered"};
    }

    const insertRegister = await commonRepository.insert("registers",{
        title: title,
        userId: userId,
        category: category
      });
    if (!insertRegister) {
        return {res: false, text: "Unable to insert into repository"};
    }

    if (data.password) {
        const cryptr = new Cryptr(process.env.CRYPTR_SECRET);
        const passwordEncrypt = cryptr.encrypt(data.password);
        data.password = passwordEncrypt;
    }

    const insert = await commonRepository.insert(category, {
        ...data,
        registerId: insertRegister.id
      });
    if (!insert) {
        return {res: false, text: "Unable to insert into category"};
    }

    return {res: true, text: ""};
}


export async function listAll(category, userId: number) {
    
    const list = await registerRepository.list(category, userId);

    if (category === "credential") {
        const cryptr = new Cryptr(process.env.CRYPTR_SECRET);
        list.forEach(e => e.credential[0].password = cryptr.decrypt(e.credential[0].password))
    } else if (category === "wifi") {
        const cryptr = new Cryptr(process.env.CRYPTR_SECRET);
        list.forEach(e => e.wifi[0].password = cryptr.decrypt(e.wifi[0].password))
    } else if (category === "cards") {
        const cryptr = new Cryptr(process.env.CRYPTR_SECRET);
        list.forEach(e => e.cards[0].password = cryptr.decrypt(e.cards[0].password))
    }
    
    return list;
}

export async function getRegister(category, userId: number, registerId: number) {
    
    const getRegister = await registerRepository.getRegister(category, userId, registerId);
    if (!getRegister) {
        return {res: false};
    }

    const cryptr = new Cryptr(process.env.CRYPTR_SECRET);

    if (category === "credential") {
        getRegister.credential[0].password = cryptr.decrypt(getRegister.credential[0].password);
    } else if (category === "wifi") {
        getRegister.wifi[0].password = cryptr.decrypt(getRegister.wifi[0].password);
    } else if (category === "cards") {
        getRegister.cards[0].password = cryptr.decrypt(getRegister.cards[0].password);
    }
    
    return {res: true, data: getRegister};
}

export async function deleteRegister(category: string, userId: number, registerId: number) {
    
    const searchRegister = await registerRepository.searchRegister(userId, registerId);
    if (!searchRegister) {
        return false;
    }

    const searchCategory = await registerRepository.searchCategory(category, registerId);
    if (!searchCategory) {
        return false;
    }

    const deleteCategory = await registerRepository.deleteCategory(category, searchCategory.id);
    if (!deleteCategory) {
        return false;
    }

    const deleteRegister = await registerRepository.deleteRegister(registerId);
    if (!deleteRegister) {
        return false;
    }
    
    return true;
}

export async function verifyToken(authorization) {
    if (!authorization) {
        return {res: false, text: "Token is not allowed to be empty"}
    }

    const [, token] = authorization.split(" ");
    if (!token) {
        return {res: false, text: "Token is not allowed to be empty"}
    }

    const result = await authService.validateToken(token);
    if (!result.res) {
        return {res: false, text: result.text}
    }

    const {userId} = result;

    return {res: true, userId}
}