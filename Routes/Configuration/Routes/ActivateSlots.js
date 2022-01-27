const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
    const { SLOT, PASSWORD, } = req.body;
    if (PASSWORD == process.env.PASSWORD){
        if(SLOT != null){

        }
    }
})

module.exports = router;