const express = require("express");
const router = express.Router();
const Registration = require('../../../Models/RegistrationModel')
const ObjectID = require('mongoose').Types.ObjectId;

router.post('/', async (req, res) => {
    const { id } = req.body;
    if (!ObjectID.isValid(id)){
        res.json({
            "msg":"id is invalid"
        });
    }
    else {
        const reg = await Registration.findById(id);
        reg.hasCompleted = true;
        await reg.save();
        res.json({
            "msg":"ok"
        });
    }

})

module.exports = router;