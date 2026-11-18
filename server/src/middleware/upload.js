import multer from 'multer';

const allowedMimeTypes = new Set([
  'application/pdf',
  'image/jpeg',
  'image/png',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  'application/vnd.ms-excel',
  'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
]);

export const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 10 * 1024 * 1024 }, // 10MB limit
  fileFilter(_req, file, callback) {
    if (allowedMimeTypes.has(file.mimetype)) {
      callback(null, true);
    } else {
      callback(new Error('Unsupported file type. Please upload PDF, JPG, PNG, DOC, DOCX, XLS or XLSX.'));
    }
  },
});
