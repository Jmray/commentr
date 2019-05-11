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
        ownerId,
        description,
        descriptionImage,
    } = req.body;

    req.db.new_comment_repo([ownerId, description, descriptionImage,]);

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
            res.status(200).send(comments);
        })
        .catch( err => {
            console.error(err);
            res.sendStatus(500);
        });
});
ApiRouter.get('/replies/:repoId', (req, res) => {
    console.log(req.session)
    console.log('hi')
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
            .catch( err => {
                console.warn(err);
                res.status(500).send('issue getting repo');
            });
    });
});


// ApiRouter.patch('/editcomment', (req, res) => {

// });

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





