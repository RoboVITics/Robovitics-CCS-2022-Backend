const express = require("express");
const QuestionSet = require("../../../Models/QuestionSetModel");
const router = express.Router();

router.post('/', async (req, res) => {
    const {Code, CSE, MEC, ELE, MGM, LOG} = req.body;
    var qsm = QuestionSet({Code, CSE, MEC, ELE, MGM, LOG});
    await qsm.save();
    res.json(qsm);
})


module.exports = router