const mongoose = require("mongoose");
const QuestionSet = require("./QuestionSetModel");

const RegistrationModel = mongoose.Schema({
    name : {type : String, required : true},
    email : {type : String, required : true},
    phone : {type : String},
    registrationNumber : {type : String, required : true},
    testStarted : {type : Boolean, default : false},
    hasUploaded : {type : Boolean, default : false},
    hasCompleted : {type : Boolean, default : false},
    testEndAt : {type : Date},
    QuestionSet : {type : mongoose.Schema.Types.ObjectId, ref : "Question"},
    slot : {type : mongoose.Schema.Types.ObjectId, ref : "Slot"},
}, {"Collection" : "Registrations"});

RegistrationModel.methods.performTestConfigs = function(){
    this.testStarted = true;
    const currentTime = new Date();
    const newTime = currentTime.getTime() + 60*1000*15;
    const date = new Date(newTime);
    this.testEndAt = date;
}

RegistrationModel.methods.assignSet = async function(qcode) {
    // const count = await QuestionSet.countDocuments();
    // var rand = Math.floor(Math.random() * count);
    var set = await QuestionSet.findOne({"Code" : qcode});
    this.QuestionSet = set;
}

const Registration = mongoose.model("Registration", RegistrationModel);

module.exports = Registration;

