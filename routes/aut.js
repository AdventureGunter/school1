module.exports.isAuthenticated = function (req, res, next) {
    if (req.isAuthenticated()){
        next();
    }
    else {
        res.redirect('/');
    }
};

module.exports.isAdmin = function (req, res, next) {
    if (req.user.status === 1){
        next();
    }
    else {
        res.redirect('/');
    }
};