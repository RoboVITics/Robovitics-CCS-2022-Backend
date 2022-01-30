const express = require("express");
const router = express.Router();

router.use('/addRegistrations', require('./Routes/AddRegistrations'));
router.use('/verify', require('./Routes/verifyRegistration'));

module.exports = router;