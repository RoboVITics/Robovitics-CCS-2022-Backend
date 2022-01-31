const express = require("express");
const router = express.Router();
const Registration = require('../../../Models/RegistrationModel')
const ObjectID = require('mongoose').Types.ObjectId;

router.post('/', async (req, res) => {
    const { id } = req.body;
    if (!ObjectID.isValid(id)){
        res.sendStatus(403);
    }
    else {
        const reg = await Registration.findById(id);
        reg.hasCompleted = true;
        await reg.save();
        res.sendStatus(200);
    }

})

module.exports = router;