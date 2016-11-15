/**
 * Created by Стас on 15.11.2016.
 */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Lesson = new Schema({
    homeworkId: String,
    teacherId: String,
    subject: String,
    classroomNumber: Number,
    lessonNumber: Number,
    Date: {type : Date, default: Date.now()}
});

module.exports = mongoose.model('lesson', Lesson);
