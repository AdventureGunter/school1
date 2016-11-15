/**
 * Created by Стас on 04.11.2016.
 */
const express = require('express');
const passport = require('passport');
const router = express.Router();
const aut = require('./aut');

//db models
const Parent = require('../models/parent');
const Student = require('../models/student');
const Teacher = require('../models/teacher');
//-------------------------------------------


router.get('/getUsers', aut.isAuthenticated, aut.isAdmin, function(req, res) {
    if ((req.user.status != 1) || !req.user){
        res.redirect('/');
    }
    else {
        switch (req.query.q){
            case "2" :{
                getUsers(req, res, Parent);
                break;
            }
            case "3" :{
                getUsers(req, res, Student);
                break;
            }
            case "4" :{
                getUsers(req, res, Teacher);
                break;
            }
        }
    }
});

router.get('/editAcc', aut.isAuthenticated, aut.isAdmin, function(req, res) {
        res.render('editAcc');
});

router.post('/editAcc', aut.isAuthenticated, aut.isAdmin, function(req, res, next) {
    console.log(" Username ---- " + req.body.username);
    switch (req.body.status){
        case "2" :{
            editAcc(req, res, Parent);
            break;
        }
        case "3" :{
            editAcc(req, res, Student);
            break;
        }
        case "4" :{
            editAcc(req, res, Teacher);
            break;
        }
    }
});

function editAcc (req, res, context) {
    context.findById(req.body.userId, function(err, doc){
        if (err){
            next(err);
        }
        else {
            console.log("DOC ----- " + doc);
            doc.username = req.body.username;
            doc.save(function(err){
                if (err){
                    next(err);
                }
                console.log("NEW DOC -------- " + doc);
                res.redirect('/editAcc');
            })
        }
    });
}

function getUsers (req, res, context) {
    context.find(function(err, doc){
        if (err){
            next(err);
        }
        else {
            console.log("DATA" + doc);
            res.send(doc);
        }
    });
}
module.exports = router;