import { store } from '../services/store.js';

export function submitApplication(req, res) {
  const { name, email, position, qualification = '', message = '' } = req.body;

  if (!name?.trim() || !email?.trim() || !position?.trim()) {
    return res.status(400).json({ error: 'Name, email and position are required.' });
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ error: 'A valid email address is required.' });
  }

  const record = store.addApplication({
    name: name.trim(),
    email: email.trim(),
    position: position.trim(),
    qualification: qualification.trim(),
    message: message.trim(),
  });

  return res.status(201).json({ id: record.id, status: 'received' });
}
