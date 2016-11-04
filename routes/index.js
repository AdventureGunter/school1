const express = require('express');
const passport = require('passport');
const router = express.Router();

router.get('/', function(req, res) {
    res.render('index', { user : req.user });
});

router.get('/logout', function(req, res, next){
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
