const express = require("express");
const QuestionSet = require("../../../Models/QuestionSetModel");
const router = express.Router();

router.post('/', async (req, res) => {
    const {Code, CSE, MEC, ELE, LRM} = req.body;
    var qsm = QuestionSet({Code, CSE, MEC, ELE, LRM});
    await qsm.save();
    res.json(qsm);
})


module.exports = router;