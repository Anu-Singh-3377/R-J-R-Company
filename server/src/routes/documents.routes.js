import { Router } from 'express';
import { upload } from '../middleware/upload.js';
import { uploadDocument, listDocuments, deleteDocument } from '../controllers/documents.controller.js';

const router = Router();

// Secure file upload architecture
router.post('/upload', upload.single('file'), uploadDocument);
router.get('/', listDocuments);
router.delete('/:id', deleteDocument);

export default router;
