const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    email: { type: String, default: '' },
    hashed_password: { type: String, default: '' },
    salt: { type: String, default: '' },
    name: { type: String, default: '' },
    mobile_no: { type: String, default: '' },
})

module.exports = mongoose.model('User', UserSchema)