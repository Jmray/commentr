const express = require('express');
const passport = require('passport');

const AuthRouter = express.Router();

AuthRouter.post('/register', passport.authenticate('register'), (req, res) => {
    res.send({ 
        success: true,
        message: 'Successfully registered in',
        redirectUrl: '/home', 
        user: req.user,
    });
});

AuthRouter.post('/login', passport.authenticate('login') , (req, res) => {
    res.send({ 
        success: true,
        message: 'Successfully logged in',
        redirectUrl: '/home',
        user: req.user, 
    });
});

AuthRouter.get('/logout', (req, res) => {
    req.logout();
    res.send("logged out");
});

AuthRouter.get('/userassign', (req, res) => {  
    if(req.isAuthenticated()){
        res.send(req.user)
    }
    else{
        res.send({
            id: -1,
            username: 'Guest',
            email: '',
            image_url: 'https://http.cat/405',

        })
    }
})

module.exports = {
    AuthRouter,
};
