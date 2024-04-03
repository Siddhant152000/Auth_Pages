const mongoose = require('mongoose');

const userDetailSchema = new mongoose.Schema({
    fname : String,
    lname:String,
    email: String,
    mobile:String,
    gender:String,
    dob:Date,
    address:String,
    password: String,
    image: {
        data: Buffer,
        contentType: String 
    }
    
})

const userDetails = mongoose.model('signup_sign', userDetailSchema);

module.exports = userDetails;