const express = require('express');
const passport = require('passport');

const ApiRouter = express.Router();


// ApiRouter.post('/addcomment', (req, res) => {

// });

// ApiRouter.post('/replycomment', (req, res) => {

// });

// ApiRouter.post('/createrepo', (req, res) => {

// });

// ApiRouter.post('/vote', (req, res) => {

// });




ApiRouter.get('/comments', (req, res) => {
    res.send(req.db)
});

// ApiRouter.get('/repo', (req, res) => {

// });


// ApiRouter.patch('/editcomment', (req, res) => {

// });




