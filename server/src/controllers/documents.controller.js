import { store } from '../services/store.js';

export function uploadDocument(req, res) {
  // If no auth token provided or unauthenticated
  if (!req.user) {
    return res.status(501).json({ error: 'Authentication required.' });
  }

  if (!req.file) {
    return res.status(400).json({ error: 'No document file was provided.' });
  }

  const doc = store.addDocument({
    filename: req.file.originalname,
    mimetype: req.file.mimetype,
    size: req.file.size,
    userId: req.user.id || 'anonymous',
  });

  return res.status(201).json({
    status: 'uploaded',
    data: {
      id: doc.id,
      name: doc.filename,
      size: doc.size,
      uploadedAt: doc.uploadedAt,
    }
  });
}

export function listDocuments(req, res) {
  if (!req.user) {
    return res.status(501).json({ error: 'Authentication required.' });
  }
  return res.json({ data: store.getDocuments() });
}

export function deleteDocument(req, res) {
  if (!req.user) {
    return res.status(501).json({ error: 'Authentication required.' });
  }
  const success = store.deleteDocument(req.params.id);
  if (!success) {
    return res.status(404).json({ error: 'Document not found.' });
  }
  return res.json({ status: 'deleted' });
}
