const express = require('express');
const router = express.Router();

const {upload, s3} = require('../../../Config/uploadSystem');
const Registration = require('../../../Models/RegistrationModel');


router.post('/',upload.single("Paper") ,async(req, res) => {
    const id = req.body.id
    var reg = await Registration.findById(id);
    reg.hasUploaded = true,
    reg.hasCompleted = true;
    await reg.save();
    res.send({
        data : id,
        msg : 'Uploaded'
    })
})

module.exports = router;