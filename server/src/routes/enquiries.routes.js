import { Router } from 'express';
import { enquiryLimiter } from '../middleware/rateLimiter.js';
import { submitEnquiry, listEnquiries } from '../controllers/enquiries.controller.js';

const router = Router();

router.post('/', enquiryLimiter, submitEnquiry);
router.get('/', listEnquiries);

export default router;
