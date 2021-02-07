const multer = require("multer");
require("dotenv").config();
const path = require("path");
const multerS3 = require("multer-s3");
const aws = require("aws-sdk");

const s3 = new aws.S3();
aws.config.update({
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  region: process.env.S3_REGION,
});

const upload = multer({
  storage: multerS3({
    dirname: "/",
    s3: s3,
    bucket: process.env.S3_BUCKET,
    acl: "public-read",
    filename: (req, file, cb) => {
      let filename =
        file.fieldname + "-" + Date.now() + path.extname(file.originalname);
      cb(null, filename);
      req.filepath = filename;
    },
  }),
  limits: { fileSize: 5000000 },
});

module.exports = upload;
