
const express = require("express");
const QuestionSet = require("../../../Models/QuestionSetModel");
const Registration = require("../../../Models/RegistrationModel");
const router = express.Router();

router.post('/', async (req, res) => {
    var { email } = req.body;
    email = email.trim();
    if (email != null){
        var details = await Registration.findOne({ email }).populate('slot', 'code timing isActive');
        if ( details == null )
        {
            res.sendStatus(403);
        }
        else {
            res.json(details);
        }
    }
    else {
        res.sendStatus(400);
    }
});

module.exports = router;