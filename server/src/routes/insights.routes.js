import { Router } from 'express';
import {
  listInsights,
  getInsight,
  createInsight,
  updateInsight,
  deleteInsight
} from '../controllers/insights.controller.js';

const router = Router();

router.get('/', listInsights);
router.get('/:slug', getInsight);
router.post('/', createInsight);
router.put('/:id', updateInsight);
router.delete('/:id', deleteInsight);

export default router;
