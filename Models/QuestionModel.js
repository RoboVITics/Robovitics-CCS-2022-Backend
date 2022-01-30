const mongoose = require("mongoose");

const QuestionModel = mongoose.Schema({
    text : String,
    photoURL : String
}, {collection : "Questions"})

const Question = mongoose.model("Question", QuestionModel);
module.exports = Question;