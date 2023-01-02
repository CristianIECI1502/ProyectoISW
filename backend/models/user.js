const mongoose =require('mongoose');


const Schema = mongoose.Schema;
const UserSchema = new Schema({
    rut: {
        type: String,
        required: true
    },
    admin: {
        type: Boolean,
        default: true
    }
});

module.exports = mongoose.model('user', UserSchema);
