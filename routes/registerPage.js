/**
 * Created by Стас on 04.11.2016.
 */
const express = require('express');
const aut = require('./aut');
const router = express.Router();

//db Models
const Account = require('../models/account');
const Admin = require('../models/admin');
const Parent = require('../models/parent');
const Student = require('../models/student');
const Teacher = require('../models/teacher');
//--------------------------------------------



router.get('/register', aut.isAuthenticated, aut.isAdmin,function(req, res) {
    res.render('register', { user : req.user });
});

router.post('/register', aut.isAuthenticated, aut.isAdmin, function(req, res, next) {
    switch (req.body.status){
        case "1" :{
            registerAcc(req, res, Admin);
            break;
        }
        case "2" :{
            registerAcc(req, res, Parent);
            break;
        }
        case "3" :{
            registerAcc(req, res, Student);
            break;
        }
        case "4" :{
            registerAcc(req, res, Teacher);
            break;
        }
    }
});

function registerAcc (req, res, context) {
    Account.register(new Account({ username : req.body.username }), req.body.password, function(err, doc) {
        if (err) {
            return res.render('register', { error : err.message });
        }
        else {
            doc.status = req.body.status;
            doc.save();
            console.log("AAAAAAAAAAAAAAAAAaa");
            var newUser = new context({
                _id: doc._id,
                salt: doc.salt,
                hash: doc.hash,
                username: doc.username,
                status: doc.status,
                __v: doc.__v
            });
            newUser.save(function (err){
                if (err) {
                    next(err);
                }
                else {
                    console.log("DOC --- " + doc);
                    res.redirect('/register');
                }
            })
        }
    });
}
module.exports = router;