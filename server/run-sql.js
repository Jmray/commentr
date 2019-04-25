  
require('dotenv').config({ path: __dirname + '/.env' });
const massive = require('massive');

let db;

massive(process.env.DB_CONNECTION_STRING, { scripts: __dirname + '/db/scripts' })
    .then(dbInstance => {
        db = dbInstance;
        return db.new_user(['brenna', 'ray', 'brennaray', 'email2', 'password123']);
    })
    .then(() => {
        console.log('setup ran successfully');
    })
    .catch(e => {
        console.error(e);
    });