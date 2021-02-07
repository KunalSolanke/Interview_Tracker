require("dotenv").config();

/*
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
*/

// const multer = require("multer"),
//   inMemoryStorage = multer.memoryStorage({
//     filename: (req, file, cb) => {
//       let filename =
//         file.fieldname + "-" + Date.now() + path.extname(file.originalname);
//       cb(null, filename);
//       req.filepath = filename;
//     },
//   }),
//   upload = multer({ storage: inMemoryStorage }),
//   azureStorage = require("azure-storage");

// const azureStorageConfig = {
//   accountName: "interviewtracker",
//   accountKey:
//     "y8Gil//1CJBEsb+CII7gZvLsLasr7kAljHsQyM8w/3woUMllJ9t/GxRphd+w7OzmGi/ZVq6weW3noR6URV6BiQ==",
//   blobURL: "https://interviewtracker. blob.core.windows.net",
//   containerName: "interviewtrackermedia",
// };
// const blobService = azureStorage.createBlobService(
//     azureStorageConfig.accountName,
//     azureStorageConfig.accountKey
//   ),
//   getStream = require("into-stream");

// const getBlobName = (originalName) => {
//   const identifier = Math.random().toString().replace(/0\./, ""); // remove "0." from start of string
//   return `${identifier}-${originalName}`;
// };

// const azure_upload = (req, directory) => {
//   const blobName = getBlobName(req.file.originalname),
//     stream = getStream(req.file.buffer),
//     streamLength = req.file.buffer.length;

//   return new Promise((resolve, reject) => {
//     blobService.createBlockBlobFromStream(
//       azureStorageConfig.containerName,
//       `${directoryPath}/${blobName}`,
//       stream,
//       streamLength,
//       (err) => {
//         if (err) {
//           reject(err);
//           return;
//         }

//         resolve({
//           filename: blobName,
//           originalname: req.file.originalname,
//           size: streamLength,
//           path: `${azureStorageConfig.containerName}/${directoryPath}/${blobName}`,
//           url: `${azureStorageConfig.blobURL}${azureStorageConfig.containerName}/${directoryPath}/${blobName}`,
//         });
//       }
//     );
//   });
// };

const multer = require("multer");
const MulterAzureStorage = require("multer-azure-storage");
var upload = multer({
  storage: new MulterAzureStorage({
    azureStorageConnectionString: process.env.AZURE_CONNECTION,
    containerName: process.env.AZURE_CONTAINER_NAME,
    containerSecurity: process.env.AZURE_CSECURITY,
    filename: (req, file, cb) => {
      let filename =
        file.fieldname + "-" + Date.now() + path.extname(file.originalname);
      cb(null, filename);
      req.filepath = filename;
      req.fileurl = `${process.env.BLOB_URL}/${process.env.AZURE_CONTAINER_NAME}/${filename}`;
    },
  }),
  limits: { fileSize: 5000000 },
});

module.exports = upload;
