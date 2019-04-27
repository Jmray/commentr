function ensureLoggedIn(){
    return ( req, res, next) => {
        if(!req.isAuthenticated || !req.isAuthenticated()) {
            res.status(401).send({success: false, message: 'You need to sign in!'});
        }
        else{
            next();
        }
    };
}


module.exports = {
    ensureLoggedIn,
}