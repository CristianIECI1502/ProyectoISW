const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ReportSchema = new Schema({
    name: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('report', ReportSchema);