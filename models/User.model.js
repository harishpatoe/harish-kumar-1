const mongoose = require('mongoose');
const { Schema, model } = mongoose;
// Define the User schema
const userSchema = new  Schema({
    // fullname: {
    //     type: String,
    //     required: true,
    //     trim: true,
    // },
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
    },
    phone: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    // reenter: {
    //     type: String,
    //     required: true,
    // },
    isVerified: {
        type: Boolean,
        default: true,
      },
}, { timestamps: true });

// Export the User model
module.exports =model('User', userSchema);
