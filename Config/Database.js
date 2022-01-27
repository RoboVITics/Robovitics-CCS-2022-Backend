const mongoose = require("mongoose");

const connect = async() => {
    try {
        mongoose.connect(process.env.databaseURL, err => {
            if (err) throw err
            console.log("Database Initiated");
        })
    }catch(err){
        console.log(err);
    }
}

module.exports = connect;