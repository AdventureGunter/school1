/**
 * Created by Стас on 04.11.2016.
 */
const express = require('express');
const passport = require('passport');
const router = express.Router();

router.get('/login', function(req, res)  {
    res.render('login', { user : req.user, error : req.flash('error')});
});

router.post('/login', passport.authenticate('acc', { failureRedirect: '/login', failureFlash: true }), function(req, res, next) {
    req.session.save(function (err) {
        if (err) {
            return next(err);
        }
        res.redirect('/');
    });
});
    module.exports = router;


