const bodyParser = require('body-parser');
const cors = require('cors');
const { addDb } = require('./addDb.middleware');


function decorate(app){
    app.use(bodyParser.json());
    app.use(cors());
    app.use(addDb());
}

module.exports = {
    decorate,
};