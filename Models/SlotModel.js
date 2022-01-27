const mongoose = require("mongoose");

const SlotModel = mongoose.Schema({
    code : String,
    timing : Date,
    isActive : Boolean
}, {"collection" : SlotModel});

const Slot = mongoose.model("Slot", SlotModel);
module.exports = Slot;