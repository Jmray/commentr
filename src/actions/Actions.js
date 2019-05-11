import { USER } from './actionTypes';





export function updateUser(id = 0, username = '', email = '', imageUrl= '') {
    return {
        type: USER,
        payload: {
            id,
            username,
            email,
            imageUrl
        }
    }
}