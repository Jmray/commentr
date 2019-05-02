const express = require('express');
const passport = require('passport');
const { ensureLoggedIn } = require('../middleware/ensureLoggedIn.middleware');
const app = require('express')();

const ApiRouter = express.Router();


ApiRouter.post('/newcomment', (req, res) => {
    const {
        comment,
        priority,
        replyId,
        userId,
        repoId,
    } = req.body;

    req.db.new_comment([
        comment,
        priority,
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

ApiRouter.post('/newvote', (req, res) => {
    const {
        userId,
        commentId,
        vote,
    } = req.body;
    req.db.new_vote([userId, commentId, vote]);

    res.send('voted');
});




ApiRouter.get('/comments/:id', (req, res) => {
    req.db.get_repo_comments([req.params.id]).then( comments => {
        res.status(200).send(comments);
    }).catch( err => {
        console.error(err);
        res.sendStatus(500);
    });
});
ApiRouter.get('/repos', (req, res) => {
    req.db.get_repo_by_user([req.user.id ? req.user.id: null]).then(repos => {
        console.log(req.user)
        res.status(200).send(repos)
    }).catch( err => {
        console.error(err);
        res.sendStatus(500);
    });
});
ApiRouter.get('/repo/:id', (req, res) => {
    req.db.get_repo_by_id([req.params.id]).then(repo => {
        console.log(req.user)
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

module.exports ={
    ApiRouter,
}




