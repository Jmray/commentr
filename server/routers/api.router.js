const express = require('express');
const passport = require('passport');

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




// ApiRouter.get('/comments', (req, res) => {
//     res.send(req.db)
// });

// ApiRouter.get('/repo', (req, res) => {

// });


// ApiRouter.patch('/editcomment', (req, res) => {

// });

ApiRouter.delete('/deletecomment/:id', (req, res) => {
    req.db.delete_comment([req.params.id]);
    res.send('deleted')
});

module.exports ={
    ApiRouter,
}




