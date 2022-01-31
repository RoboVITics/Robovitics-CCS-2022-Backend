const express = require('express');
const router = express.Router();
const ObjectID = require('mongoose').Types.ObjectId;
const {upload, s3} = require('../../../Config/uploadSystem');
const Registration = require('../../../Models/RegistrationModel');


router.post('/',upload.single("Paper") ,async(req, res) => {
    const id = req.body.id
    console.log(id);
    if (!ObjectID.isValid(id)){
        var reg = await Registration.findById(id);
        reg.hasUploaded = true,
        reg.hasCompleted = true;
        await reg.save();
        res.send({
            data : id,
            msg : 'Uploaded'
        });
    }
    else {
        res.sendStatus(403);
    }
   
})

module.exports = router;