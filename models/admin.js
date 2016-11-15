/**
 * Created by Стас on 04.11.2016.
 */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const Admin = new Schema({
    username: String,
    status: {type : Number, default: 1},    // 1 -- admin status. 2 -- parent. 3 -- student. 4 -- teacher
    firstName : String,
    lastName : String,
    email : String,
    phoneNumber : String,
});

Admin.plugin(passportLocalMongoose);

module.exports = mongoose.model('admin', Admin);


