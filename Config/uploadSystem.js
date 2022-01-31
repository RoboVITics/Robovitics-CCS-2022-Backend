const multer = require('multer');
const multerS3 = require('multer-s3');
const aws = require('aws-sdk');

var s3 = new aws.S3({
    accessKeyId: process.env.awsAccess,
    secretAccessKey:process.env.awsSecret,
    Bucket: "roboviticsccsbucket"
 })
var upload = multer({
    storage: multerS3({
        s3: s3,
        bucket: "roboviticsccsbucket",
        metadata: function (req, file, cb) {
            cb(null, { fieldName: file.originalname});
        },
        key: function (req, file, cb) {
            cb(null, file.originalname);
        }
    })
 });

 module.exports = {s3, upload};