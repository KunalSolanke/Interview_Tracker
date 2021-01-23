const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: './public/uploads/',
    filename: (req, file, cb) => {
     cb(null, file.fieldname + '-' + Date.now() + 
     path.extname(file.originalname));
    }
  });

const upload = multer({
    storage: storage,
    limits:{fileSize: 2000000},
    // fileFilter: (req, file, cb) => {
    //   checkFileType = (file, cb) => {
    //     const filetypes = /jpeg|jpg|png|gif/;
    //     const extname = filetypes.test(path.extname
    //       (file.originalname).toLowerCase());
    //     const mimetype = filetypes.test(file.mimetype);
        
    //     if(mimetype && extname) {
    //       return (cb(null, true));
    //     }else{
    //       cb('Error: please upload Image only.');
    //     }
    //   }
    //} 
  });

  module.exports = upload;