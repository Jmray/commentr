function ensureLoggedIn(){
    return ( req, res, next) => {
        if(!req.isAuthenticated()) {
            res.status(401).send({message: 'not logged in'});
        }
        else{
            next();
        }
    };
}


module.exports = {
    ensureLoggedIn,
}