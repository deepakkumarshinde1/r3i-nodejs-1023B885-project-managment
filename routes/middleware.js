const multer = require("multer");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/images/");
  },
  filename: function (req, file, cb) {
    //cb(null, file.fieldname + "-" + uniqueSuffix);
    // let file = "sample.png";
    // let array = file.split('.');
    // let ext =  array[array.length - 1]

    let pos = file.originalname.lastIndexOf(".");
    let ext = file.originalname.substring(pos);
    let fileName = Date.now() + ext;

    cb(null, fileName);
  },
});

const uploadFile = multer({ storage: storage });
const noUpload = multer().none; // add multipart form data

module.exports = {
  uploadFile,
  noUpload,
};
