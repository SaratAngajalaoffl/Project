const mongoose = require('mongoose')
const validation = require('validator')

var passportLocalMongoose = require("passport-local-mongoose");

const UserSchema = new mongoose.Schema({

    email: {
        type: String,
        validate: [validation.isEmail, 'Please enter a valid email']
    },

    phone: {
        type: String,
        minlength: [10, 'Phone number too short'],
        maxlength: [10, 'Phone number too long'],
    },

    isadmin: {
        type:Boolean
    },

    isshop: {
        type:Boolean
    },

    is_delivery_agent: {
        type:Boolean
    }
})

UserSchema.plugin(passportLocalMongoose)

const User = mongoose.model('user', UserSchema);

module.exports = User