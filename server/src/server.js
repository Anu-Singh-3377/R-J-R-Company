import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import { config } from './config/index.js';
import { generalLimiter } from './middleware/rateLimiter.js';
import { errorHandler } from './middleware/error.js';

import enquiriesRoutes from './routes/enquiries.routes.js';
import servicesRoutes from './routes/services.routes.js';
import insightsRoutes from './routes/insights.routes.js';
import jobsRoutes from './routes/jobs.routes.js';
import applicationsRoutes from './routes/applications.routes.js';
import authRoutes from './routes/auth.routes.js';
import documentsRoutes from './routes/documents.routes.js';

export const app = express();

app.use(helmet());
app.use(cors({ origin: config.clientUrl }));
app.use(express.json({ limit: '100kb' }));

// Apply general rate limiter to all API endpoints
app.use('/api', generalLimiter);

// Health check endpoint
app.get('/api/health', (_req, res) => res.json({ status: 'ok' }));

// Modular API routes
app.use('/api/services', servicesRoutes);
app.use('/api/enquiries', enquiriesRoutes);
app.use('/api/insights', insightsRoutes);
app.use('/api/jobs', jobsRoutes);
app.use('/api/applications', applicationsRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/documents', documentsRoutes);

// 404 for unhandled API routes
app.use('/api', (_req, res) => res.status(404).json({ error: 'API route not found' }));

// Centralized error handling
app.use(errorHandler);

// Listen when executed directly
if (process.argv[1]?.endsWith('server.js')) {
  app.listen(config.port, () => {
    console.log(`R J R & Company API server running on port ${config.port}`);
  });
}
