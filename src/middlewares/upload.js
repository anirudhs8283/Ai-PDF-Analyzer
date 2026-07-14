const multer = require('multer');
const path = require('path');


// 1. Configure storage strategy
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
  }
});

// 2. Define the PDF gatekeeper filter
const pdfFilter = (req, file, cb) => {
  const allowedMime = 'application/pdf';
  const allowedExt = '.pdf';

  const fileExt = path.extname(file.originalname).toLowerCase();
  const fileMime = file.mimetype;

  if (fileMime === allowedMime && fileExt === allowedExt) {
    cb(null, true); // Accept file
  } else {
    cb(new Error('Invalid file type. Only PDF files are allowed!'), false); // Reject file
  }
};

// 3. Initialize Multer instance
const upload = multer({
  storage: storage,
  fileFilter: pdfFilter,
  limits: {
    fileSize: 5 * 1024 * 1024 // Strict 5MB limit
  }
});

module.exports = upload