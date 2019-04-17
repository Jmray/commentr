const express = require('express');
require('dotenv').config({path: `${__dirname}/.env`});

//requiring middleware

const { decorate } = require('./middleware/global.middleware');

//requiring routes
const { addRoutes } = require('./routers/routers');


//destructering Dotenv

const {
    PORT,
} = process.env;




const app = express();

//middleware
decorate(app);


//routes
addRoutes(app);





app.listen(PORT, () => console.log(`server is now listening on port: ${PORT}`));