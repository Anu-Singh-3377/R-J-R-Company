import { store } from '../services/store.js';

export function submitEnquiry(req, res) {
  const { name, email, phone = '', service = '', message } = req.body;

  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return res.status(400).json({ error: 'Name, email and message are required.' });
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ error: 'A valid email address is required.' });
  }

  const record = store.addEnquiry({
    name: name.trim(),
    email: email.trim(),
    phone: phone.trim(),
    service: service.trim(),
    message: message.trim(),
  });

  return res.status(201).json({ id: record.id, status: 'received' });
}

export function listEnquiries(_req, res) {
  return res.status(501).json({ error: 'Authentication required.' });
}
