import { USERNAME, EMAIL, ID } from './actionTypes';



export function updateUsername(username) {
    return {
            type: USERNAME,
            payload: username,
        } 
    }

export function updateEmail(email) {
    return {
            type: EMAIL,
            payload: email,
        } 
    }

export function updateId(id) {
    return {
            type: ID,
            payload: id,
        } 
    }