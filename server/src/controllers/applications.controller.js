import { store } from '../services/store.js';

export function submitApplication(req, res) {
  const { name, email, phone = '', position, icaiRegNo = '', qualification = '', message = '' } = req.body;

  if (!name?.trim() || !email?.trim() || !position?.trim()) {
    return res.status(400).json({ error: 'Name, email and position are required.' });
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ error: 'A valid email address is required.' });
  }

  // Handle uploaded resume file metadata
  let resumeMeta = null;
  if (req.file) {
    if (req.file.mimetype !== 'application/pdf') {
      return res.status(400).json({ error: 'Only PDF format (.pdf) is accepted for resume upload.' });
    }
    resumeMeta = {
      originalName: req.file.originalname,
      mimeType: req.file.mimetype,
      size: req.file.size,
    };
  }

  const record = store.addApplication({
    name: name.trim(),
    email: email.trim(),
    phone: phone.trim(),
    position: position.trim(),
    icaiRegNo: icaiRegNo.trim(),
    qualification: qualification.trim(),
    message: message.trim(),
    resume: resumeMeta,
  });

  return res.status(201).json({ id: record.id, status: 'received' });
}
