const { AuthRouter } = require('./auth.router');



function addRoutes(app){
    app.use('/auth', AuthRouter);
    
}


module.exports = {
    addRoutes,
}