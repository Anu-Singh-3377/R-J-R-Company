import multer from 'multer';

export function errorHandler(error, _req, res, _next) {
  if (error instanceof multer.MulterError) {
    if (error.code === 'LIMIT_FILE_SIZE') {
      return res.status(400).json({ error: 'File size exceeds maximum permitted limit (10 MB).' });
    }
    return res.status(400).json({ error: error.message });
  }

  if (error.message && error.message.includes('Unsupported file type')) {
    return res.status(400).json({ error: error.message });
  }

  console.error('Internal Server Error:', error);
  res.status(500).json({ error: 'Something went wrong. Please try again.' });
}
