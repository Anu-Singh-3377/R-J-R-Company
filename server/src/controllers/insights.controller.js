import { store } from '../services/store.js';

export function listInsights(_req, res) {
  res.json({ data: store.getInsights() });
}

export function getInsight(req, res) {
  const article = store.getInsightBySlug(req.params.slug);
  if (!article) {
    return res.status(404).json({ error: 'Article not found' });
  }
  res.json({ data: article });
}

export function createInsight(_req, res) {
  res.status(501).json({ error: 'Authentication required.' });
}

export function updateInsight(_req, res) {
  res.status(501).json({ error: 'Authentication required.' });
}

export function deleteInsight(_req, res) {
  res.status(501).json({ error: 'Authentication required.' });
}
