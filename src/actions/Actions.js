import { USER, REPO } from './actionTypes';






export function updateUser(id = 0, username = '', email = '', image_url= '') {
    return {
        type: USER,
        payload: {
            id,
            username,
            email,
            image_url
        }
    }
}
export function updateRepo(currentRepo){
    return {
        type: REPO,
        payload: {
            currentRepo,
        }
    }
}