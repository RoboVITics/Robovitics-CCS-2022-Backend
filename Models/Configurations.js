const mongoose = require("mongoose");

const configurationModel = mongoose.Schema({
    REGISTRATIONS_OPENT_CLOSEF : Boolean,
    SLOTA : Boolean,
    SLOTA_TIMING : {type : Date},
    SLOTB : Boolean,
    SLOTB_TIMING : {type : Date},
    SLOTC : Boolean,
    SLOTC_TIMING : {type : Date},
    SLOTD : Boolean,
    SLOTD_TIMING : {type : Date},
    SLOTE : Boolean,
    SLOTE_TIMING : {type : Date}
}, {"Collection" : "Configurations"});

const configurationModel = mongoose.model("Config",configurationModel);
module.exports = configurationModel;