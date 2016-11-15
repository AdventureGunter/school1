/**
 * Created by Стас on 04.11.2016.
 */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const Teacher = new Schema({
    username: String,
    status: {type : Number, default: 4},   // 1 -- admin status. 2 -- parent. 3 -- student. 4 -- teacher
    firstName : String,
    lastName : String,
    email : String,
    phoneNumber : String,
    homeworkLinks : {type : [String], default : []},
    isClassroomTeacher : {type : Boolean, default: false},
    subject : Object
});

Teacher.plugin(passportLocalMongoose);

module.exports = mongoose.model('teacher', Teacher);
