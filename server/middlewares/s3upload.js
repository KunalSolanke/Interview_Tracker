// const aws = require("aws-sdk");
// const S3_BUCKET = process.env.S3_BUCKET;
// aws.config.region = process.env.S3_region;

// const path = require('path')
// const upload  = (req, res) => {
//   const s3 = new aws.S3();
//   const fileName = req.file.filename
//   const fileType = path.extname(req.file.filename)

//   const s3Params = {
//     Bucket: S3_BUCKET,
//     Key: fileName,
//     Expires: 60,
//     ContentType: fileType,
//     ACL: "public-read",
//   };

//   s3.getSignedUrl("putObject", s3Params, (err, data) => {
//     if (err) {
//       console.log(err);
//       return res.end();
//     }
//     const returnData = {
//       signedRequest: data,
//       url: `https://${S3_BUCKET}.s3.amazonaws.com/${fileName}`,
//     };
//     req.filepath = returnData.url ;
//     next() ;
//   });
// }
// module.exports = upload

const getUrl = (filename) => {
  S3_BUCKET = process.env.S3_BUCKET;
  return `https://${S3_BUCKET}.s3.amazonaws.com/${fileName}`;
};
