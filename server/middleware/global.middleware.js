const bodyParser = require('body-parser');
const cors = require('cors');
const session = require('express-session');
const passport = require('passport');

const { addDb } = require('./addDb.middleware');


function decorate(app){
    app.use(cors());
    app.use(bodyParser.json());
    app.use(addDb());
    app.use(session({
        secret: process.env.SESSION_SECRET,
        saveUninitialized: false,
        resave: false,
    }));
    app.use(passport.initialize());
    app.use(passport.session());
}

module.exports = {
    decorate,
};