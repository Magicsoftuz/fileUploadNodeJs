const { MulterError } = require("multer");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    const uniqueName = `${Date.now() - Math.round(Math.random() * 1e9)}`;
    cb(null, uniqueName);
  },
});

const upload = multer({
  storage,
  limits: {
    fileSize: 100000 * 1000,
  },
}).single("myfile");

const fileUpload = (req, res) => {
  try {
  } catch (error) {}
};
