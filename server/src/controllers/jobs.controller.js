import { store } from '../services/store.js';

export function listJobs(_req, res) {
  res.json({ data: store.getJobs() });
}

export function getJob(req, res) {
  const job = store.getJobById(req.params.id);
  if (!job) {
    return res.status(404).json({ error: 'Job not found' });
  }
  res.json({ data: job });
}
