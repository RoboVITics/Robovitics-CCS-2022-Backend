const express = require("express");
const router = express.Router();

router.use('/addRegistrations', require('./Routes/AddRegistrations'));
router.use('/verify', require('./Routes/verifyRegistration'));
router.use('/test', require('./Routes/getQuestions'));
router.use('/uploadTest', require('./Routes/uploadFile'))
router.use('/completeTest', require('./Routes/finishTest'))

module.exports = router;