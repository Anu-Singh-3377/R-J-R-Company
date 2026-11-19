import { Router } from 'express';
import { enquiryLimiter } from '../middleware/rateLimiter.js';
import { resumeUpload } from '../middleware/upload.js';
import { submitApplication } from '../controllers/applications.controller.js';

const router = Router();

router.post('/', enquiryLimiter, resumeUpload.single('resume'), submitApplication);

export default router;
