/**
 * Created by Стас on 15.11.2016.
 */
const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const homeworkFileSchema = new Schema({
    fieldName: String,
    originalName: String,
    encoding: String,
    mimeType: String,
    destination: String,
    fileName: String,
    pathTo: String,
    size: Number
});

module.exports = mongoose.model('homeworkFile', homeworkFileSchema);