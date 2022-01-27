const mongoose = require("mongoose");

const RegistrationModel = mongoose.Schema({
    name : {type : String, required : true},
    email : {type : String, required : true},
    phone : {type : String, required : true},
    registrationNumber : {type : String, required : true},
    testStarted : {type : Boolean, default : false},
    hasUploaded : {type : Boolean, default : false},
    testEndAt : {type : Date},
    QuestionSet : {type : mongoose.Schema.Types.ObjectId, ref : "Question"},
    slot : {type : mongoose.Schema.Types.ObjectId, ref : "Slot"},
}, {"Collection" : "Registrations"});

RegistrationModel.methods.performTestConfigs = function(){
    this.testStarted = true;
    const currentTime = new Date();
    const newTime = currentTime.getTime() + 60*1000*60;
    const date = new Date(newTime);
    this.testEndAt = date;
}

RegistrationModel.methods.allotQuestionSet = function() {
    
}

const Registration = mongoose.model("Registration", RegistrationModel);

module.exports = Registration;