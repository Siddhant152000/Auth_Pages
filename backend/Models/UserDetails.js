const mongoose = require('mongoose');

const userDetailSchema = new mongoose.Schema({
    fname : String,
    lname:String,
    email: String,
    mobile:String,
    gender:String,
    dob:Date,
    address:String,
    password: String
    
})

const userDetails = mongoose.model('formData', userDetailSchema);

module.exports = userDetails;