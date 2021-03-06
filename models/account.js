/**
 * Created by Стас on 04.11.2016.
 */
/**
 * Created by Стас on 04.11.2016.
 */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const Account = new Schema({
    username: String,
    status: Number   // 1 -- admin status. 2 -- parent. 3 -- student. 4 -- teacher
});

Account.plugin(passportLocalMongoose);

module.exports = mongoose.model('account', Account);


