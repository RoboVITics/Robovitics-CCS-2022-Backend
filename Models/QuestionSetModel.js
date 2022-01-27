const mongoose = require("mongoose");

const QuestionSet = mongoose.Schema({
    CODE : String,
    CSE : [String],
    MEC : [String],
    ELE : [String],
    LRM : [String],
});

const Question = mongoose.model("Question", QuestionSet);
module.exports = Question;