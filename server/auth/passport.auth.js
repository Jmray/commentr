const passport = require('passport');

//requiring strategies
const { loginStrategy } = require('./login.strategy');
const { registerStrategy } = require('./register.strategy');

const {connectToDb} = require('../db/getDb.database');

passport.use('login', loginStrategy);
passport.use('register', registerStrategy);



passport.serializeUser((user, done) => {
    const {
        id,
    } = user;
    done(null, id );
});

passport.deserializeUser((id, done) => {
    connectToDb()
        .then( db => {
            db.Users.find(id)
                .then(user => {
                    if (!user){ return done(null, undefined)};

                    delete user.password;

                    return done (null, user);
                })
                .catch( err => {
                    console.warn(err);
                    done ('system failure');

                });
        })
        .catch( err => {
            console.log(err);
            done ('system failure');

        });

})


