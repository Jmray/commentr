import axios from 'axios';





export function getRepo(repoId){
    return axios.get('/api/repo/' + repoId)
}