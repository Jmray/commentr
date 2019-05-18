import axios from 'axios';

export function getComments( repoId, replyId = 0){
        return axios.get(`/api/comments/${repoId}/${replyId}`).catch(err => {
            console.log(err);
        });
}

