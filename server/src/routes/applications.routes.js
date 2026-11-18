import { Router } from 'express';
import { enquiryLimiter } from '../middleware/rateLimiter.js';
import { submitApplication } from '../controllers/applications.controller.js';

const router = Router();

router.post('/', enquiryLimiter, submitApplication);

export default router;
