import { store } from '../services/store.js';

export function listServices(_req, res) {
  res.json({ data: store.getServices() });
}

export function getService(req, res) {
  const service = store.getServiceBySlug(req.params.slug);
  if (!service) {
    return res.status(404).json({ error: 'Service not found' });
  }
  res.json({ data: service });
}
