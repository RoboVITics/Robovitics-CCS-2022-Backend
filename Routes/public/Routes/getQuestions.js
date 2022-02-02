const express = require("express");
const router = express.Router();
const ObjectID = require('mongoose').Types.ObjectId;
const Registration = require("../../../Models/RegistrationModel");
const QuestionSet = require('../../../Models/QuestionSetModel');


router.get('/:id', async (req, res) => {
    const { id } = req.params;
    if (!ObjectID.isValid(id)){
        res.sendStatus(403);
    }
    else {
        var regDetails = await Registration.findById(id);
        if (regDetails == null){
            sendStatus(404);
        }
        else {
            
            if (!regDetails.testEndAt){
                regDetails.performTestConfigs();
            }
            
            const qid = regDetails.QuestionSet;
            const questionSet = await QuestionSet.findById(qid);
            await regDetails.save();
            const currentTime = new Date();
            res.json({CET : currentTime,TEA : regDetails.testEndAt, SET : questionSet});
        }
    }
})

module.exports = router;