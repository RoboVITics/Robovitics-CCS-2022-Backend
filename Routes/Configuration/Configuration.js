const express = require("express");
const router = express.Router();

router.use("/addSet", require("./Routes/AddQuestionSets"));

module.exports = router;