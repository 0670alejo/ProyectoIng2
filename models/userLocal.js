const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const userLocalSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});



const UserLocal = mongoose.model('userLocal', userLocalSchema);

module.exports = UserLocal;