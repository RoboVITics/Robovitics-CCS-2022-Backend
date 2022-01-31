const mongoose = require("mongoose");
const QuestionSet = require("./QuestionSetModel");

const Slot = require("./SlotModel");

const RegistrationModel = mongoose.Schema({
    name : {type : String, required : true},
    email : {type : String, required : true},
    phone : {type : String, required : true},
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
    const newTime = currentTime.getTime() + 60*1000*70;
    const date = new Date(newTime).toLocaleString(undefined, {timeZone: 'Asia/Kolkata'});
    this.testEndAt = date;
}

RegistrationModel.methods.assignSet = async function() {
    const count = await QuestionSet.countDocuments();
    var rand = Math.floor(Math.random() * count);
    var set = await QuestionSet.findOne().skip(rand);
    this.QuestionSet = set;
}

const Registration = mongoose.model("Registration", RegistrationModel);

module.exports = Registration;

