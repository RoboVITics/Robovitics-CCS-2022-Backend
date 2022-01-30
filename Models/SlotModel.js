const mongoose = require("mongoose");

const SlotModel = mongoose.Schema({
    code : String,
    timing : Date,
    registered : [{type : mongoose.Schema.Types.ObjectId, ref : "Registration"}],
    rcount : {type : Number, default : 250},
    isActive : Boolean
}, {collection : "Slots"});

const Slot = mongoose.model("Slot", SlotModel);
module.exports = Slot;