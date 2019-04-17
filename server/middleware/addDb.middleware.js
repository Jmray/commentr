const { connectToDb } = require('../db/getDb.database');


function addDb(options){
    return (req, res, next) => {
        connectToDb().then(db => {
            req.db = db;
            next();
        }).catch( err => {
            res.status(500).send({message: 'internal server error'});
        });
    };
}

module.exports = {
    addDb,
}