const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');


const registerStrategy = new LocalStrategy(
    {passReqToCallback: true}, (req, username, password, done) => {
        const db = req.db;
        const {
            email,
            firstName,
            lastName,
           } = req.body;

        db.query(`
        select * from "Users"
        where email ilike \${email}
            OR username ilike \${username}
    `, { username, email })
        .then( users => {
            if (users.length !== 0){
                return done(null, false, {message:  'Username or email is already in use.'});
            }

            bcrypt.hash(password, 15, (err, hashedPassword) => {
                if (err) {
                    return done('System failure');
                }
                req.db.Users.insert({
                    ...req.body,
                    password: hashedPassword,
                    first_name: firstName,
                    last_name: lastName,
                    

                })
                    .then(user => {
                        delete user.password;

                        done(null, user);
                    })
                    .catch(err => {
                        console.warn(err);
                        done('System failure');
                    });
            });
        })
        .catch(err => {
            console.warn(err);
            done('System failure');
        });
     });



    module.exports = {registerStrategy};