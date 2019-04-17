const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');


const registerStrategy = new LocalStrategy(
    {passReqToCallback: true}, (req, username, password, done) => {
        const db = req.db;


        
        });


    module.exports = {registerStrategy};