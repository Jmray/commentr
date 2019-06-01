const express = require('express');
const { ensureLoggedIn } = require('../middleware/ensureLoggedIn.middleware');

const ApiRouter = express.Router();


ApiRouter.post('/newcomment', (req, res) => {
    const {
        comment,
        replyId,
        userId,
        repoId,
    } = req.body;

    req.db.new_comment([
        comment,
        replyId,
        userId,
        repoId,
    ]);

    res.status(201).send('created');
});



ApiRouter.post('/newrepo', (req, res) => {

    const {
        title,
        ownerId,
        description,
        descriptionImage,
    } = req.body;

    req.db.new_comment_repo([title, ownerId, description, descriptionImage,]);

    res.status(201).send('created');
});

ApiRouter.post('/newvote',ensureLoggedIn(), (req, res) => {
    const {
        userId,
        commentId,
        vote,
    } = req.body;
    req.db.new_vote([userId, commentId, vote]).then(
        res.send("voted")
    ).catch(err => {
        console.warn(err);
        res.send('something went wrong')

    })

})




ApiRouter.get('/comments/:repoId/:replyId', (req, res) => {
    
        req.db.get_comments_by_id([req.params.repoId, req.params.replyId]).then( comments => {
            comments.map(comment => {

                comment.isOwn = false;
                if(req.user){
                    if(comment.user_id === req.user.id){
                        comment.isOwn = true;
                        }
                }

                
            });
            
            res.status(200).send(comments);
        })
        .catch( err => {
            console.error(err);
            res.sendStatus(500);
        });
});
ApiRouter.get('/replies/:repoId', (req, res) => {
    req.db.get_all_replies([req.params.repoId]).then( comments => {
        res.status(200).send(comments);
    }).catch( err => {
        console.error(err);
        res.status(500).send({message: 'error getting replies'});
    });
});

ApiRouter.get('/repos', ensureLoggedIn(), (req, res) => {
    req.db.get_repo_by_user([req.user.id]).then(repos => {
        res.status(200).send(repos)
    }).catch( err => {
        console.error(err);
        res.sendStatus(500);
    });
});
ApiRouter.get('/repo/:id', (req, res) => {
    req.db.get_repo_by_id([req.params.id]).then(repo => {
        res.status(200).send(repo)
            
    }).catch( err => {
        console.warn(err);
        res.status(500).send('issue getting repo');
    });
});


ApiRouter.patch('/editcomment/:id', (req, res) => {
    req.db.update_comment_by_id(req.body.commentContent, req.params.id).then( response => {
        res.status(401).send('edited');
    })

});

ApiRouter.delete('/deletecomment/:id', (req, res) => {
    req.db.delete_comment([req.params.id]);
    res.send('deleted')
});


// ApiRouter.use((err, req, res, next) => {
//     let response = err;
//     if(typeof err == "string"){
//         response = {message: err};
//     }
//     res.status(500).send(response);
// })

module.exports ={
    ApiRouter,
}





