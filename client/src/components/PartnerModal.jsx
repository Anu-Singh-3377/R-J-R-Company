import { X, Award, Briefcase, BookOpen, Hash } from 'lucide-react';
import Modal from './Modal';

export default function PartnerModal({ isOpen, onClose, partner }) {
  if (!partner) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose} maxWidth="720px">
      <div className="partner-modal-layout">
        <div className="partner-modal-portrait">
          <div className="monogram-portrait">
            <span>RJR</span>
          </div>
          <small className="portrait-caption">Official Portrait [TO BE PROVIDED]</small>
        </div>

        <div className="partner-modal-details">
          <span className="eyebrow">Professional Profile</span>
          <h2>{partner.name}</h2>
          <p className="partner-modal-designation">{partner.designation}</p>

          <div className="partner-meta-grid">
            <div className="meta-block">
              <span className="meta-label">
                <Award size={14} /> Qualification
              </span>
              <strong className="meta-value">{partner.qualification}</strong>
            </div>

            <div className="meta-block">
              <span className="meta-label">
                <Hash size={14} /> ICAI Membership Number
              </span>
              <strong className="meta-value">{partner.membershipNumber || partner.membership}</strong>
            </div>

            <div className="meta-block full-width">
              <span className="meta-label">
                <Briefcase size={14} /> Areas of Professional Practice
              </span>
              <strong className="meta-value">{partner.areasOfPractice || partner.areas}</strong>
            </div>

            <div className="meta-block full-width">
              <span className="meta-label">
                <BookOpen size={14} /> Professional Experience
              </span>
              <strong className="meta-value">{partner.professionalExperience || partner.experience}</strong>
            </div>
          </div>

          <div className="partner-compliance-note">
            <p>{partner.note || 'Details are strictly maintained in accordance with ICAI Council guidelines.'}</p>
          </div>
        </div>
      </div>
    </Modal>
  );
}
