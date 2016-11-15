const express = require('express');
const passport = require('passport');
const router = express.Router();
const aut = require('./aut');

router.get('/', aut.isAuthenticated, function(req, res) {
    res.render('index', { user : req.user });
});

router.get('/logout', aut.isAuthenticated, function(req, res, next){
    req.logout();
    req.session.save(function(err) {
        if (err) {
            return next(err);
        }
        res.redirect('/');
    });
});

router.get('/ping', function(req, res) {
    res.status(200).send("pong!");
});

module.exports = router;
