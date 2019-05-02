const express = require('express');
const passport = require('passport');

const AuthRouter = express.Router();

AuthRouter.post('/register', passport.authenticate('register'), (req, res) => {
    res.send({ 
        success: true,
        message: 'Successfully registered in',
        redirectUrl: '/dashboard', 
        user: req.user,
    });
});

AuthRouter.post('/login', passport.authenticate('login') , (req, res) => {
    res.send({ 
        success: true,
        message: 'Successfully logged in',
        redirectUrl: '/dashboard',
        user: req.user, 
    });
});

AuthRouter.get('/logout', (req, res) => {
    req.logout();
    res.send("logged out");
});

module.exports = {
    AuthRouter,
};
