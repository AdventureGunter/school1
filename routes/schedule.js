/**
 * Created by Стас on 15.11.2016.
 */
const express = require('express');
const passport = require('passport');
const router = express.Router();
const aut = require('./aut');

router.get('/schedule', aut.isAuthenticated, function(req, res) {
    res.render('schedule', {user : req.user});
});

module.exports = router;
