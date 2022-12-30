const mongoose =require('mongoose');
//import  mongoose  from "mongoose";

const Schema = mongoose.Schema;
const UserSchema = new Schema({
    identificador_casa: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required : true
    },
    rut: {
        type: String,
        required: true
    },
    admin: {
        type: Boolean,
        require: true
    }
});

module.exports = mongoose.model('user', UserSchema);
//export default mongoose.model('user',UserSchema)