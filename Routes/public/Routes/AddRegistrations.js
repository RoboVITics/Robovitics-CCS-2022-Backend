const express = require("express");
const Registration = require("../../../Models/RegistrationModel");
const Slot = require("../../../Models/SlotModel");
const router = express.Router();

router.post('/', async (req, res) => {
    var { data, slotCode } = req.body;
    const slot = await Slot.findOne({code : slotCode});
    slot.rcount = slot.rcount - data.length;
    data.forEach(async element => {
        var { email, name, phone, registrationNumber } = element;
        email = email.trim();
        name = name.trim();
        phone = phone.trim();
        registrationNumber = registrationNumber.trim();
        var reg = Registration({name : name, email : email, phone : phone, registrationNumber : registrationNumber, slot : slot});
        slot.registered.push(reg);
        await reg.assignSet();
        await reg.save();
    });
    await slot.save();
    res.send("Added");
})


module.exports = router;