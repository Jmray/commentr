const express = require('express');
const passport = require('passport');

const ApiRouter = express.Router();


ApiRouter.post('/comment', (req, res) => {
    const {
        comment,
        priority,
        timeStamp,
        replyId,
        userId,
        repoId,
    } = req.body;

    req.db.new_comment([
        comment,
        priority,
        timeStamp,
        replyId,
        userId,
        repoId,
    ]);

    res.status(201).send('created');
});



ApiRouter.post('/createrepo', (req, res) => {

    const {
        owner_id,
        description,
        description_image,
    } = req.body;

    req.db.create_comment_repo([owner_id, description, description_image,]);

    res.status(201).send('created');
});

// ApiRouter.post('/vote', (req, res) => {

// });




// ApiRouter.get('/comments', (req, res) => {
//     res.send(req.db)
// });

// ApiRouter.get('/repo', (req, res) => {

// });


// ApiRouter.patch('/editcomment', (req, res) => {

// });

module.exports ={
    ApiRouter,
}




