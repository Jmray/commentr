const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');


const loginStrategy = new LocalStrategy(
    {passReqToCallback: true}, (req, username, password, done) => {
        const db = req.db;

        db.Users.findOne({username}).then(userData => {
            if (!userData){
                return done(null, false, {message: 'Username or password is incorrect!'});
            }
            const user = userData;

            bcrypt.compare(password, user.password, (err, isSame) => {
                if (err) {
                    return done('System failure');

                }
                if(!isSame){
                    return done(null, false, {message: 'Username or password is incorrect!'});
                }
                
                delete user.password;

                done(null, user);
            });
        }).catch(err => {
            console.warn(err);
            done('System failure')
        });
    });


    module.exports = {loginStrategy};