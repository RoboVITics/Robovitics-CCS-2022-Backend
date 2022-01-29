const express = require("express");
const Registration = require("../../../Models/RegistrationModel");
const Slot = require("../../../Models/SlotModel");
const router = express.Router();

router.post('/', async (req, res) => {
    var data = req.body;
    data.forEach(async element => {
        var { email, name, phone, registrationNumber } = element;
        email = email.trim();
        name = name.trim();
        phone = phone.trim();
        registrationNumber = registrationNumber.trim();
        const slot = await Slot.findOne({rcount : {$lt : 250}});
        if (slot == null){
            res.send("Sorry All Slots Full");
        }
        else {
            var reg = Registration({name : name, email : email, phone : phone, registrationNumber : registrationNumber, slot : slot});
            
            slot.registered.push(reg);
            slot.rcount = slot.registered.length;
            await slot.save();
            await reg.save();
        }
    });
    res.send("All Registrations Successfully Loaded");
})


module.exports = router;