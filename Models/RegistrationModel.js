const mongoose = require("mongoose");

const RegistrationModel = mongoose.Schema({
    name : String,
    email : String,
    phone : String,
    registrationNumber : String,
    testStarted : {type : Boolean, default : false},
    hasUploaded : {type : Boolean, default : false},
    testStartedAt : {type : Date},
    slot : {type : mongoose.Schema.Types.ObjectId, ref : "Slot"},
});

const Registration = mongoose.model("Registration", RegistrationModel);

module.exports = Registration;