const mongoose = require("mongoose");
const Question = require('./QuestionModel');

const QuestionSetModel = mongoose.Schema({
    Code : String,
    CSE : [Question.schema],
    MEC : [Question.schema],
    ELE : [Question.schema],
    MGM : [Question.schema],
    LOG : [Question.schema]
});

const QuestionSet = mongoose.model("QuestionSet", QuestionSetModel);
module.exports = QuestionSet;