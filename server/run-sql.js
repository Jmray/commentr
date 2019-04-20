  
require('dotenv').config({ path: __dirname + '/.env' });
const massive = require('massive');

let db;

massive(process.env.DB_CONNECTION_STRING, { scripts: __dirname + '/db/scripts' })
    .then(dbInstance => {
        db = dbInstance;
        return db.setup.create_Comments_table();
    })
    .then(() => {
        console.log('setup ran successfully');
    })
    .catch(e => {
        console.error(e);
    });