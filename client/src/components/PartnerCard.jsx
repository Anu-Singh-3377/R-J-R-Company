import { useState } from 'react';
import { ArrowRight, UserCheck, Shield } from 'lucide-react';
import PartnerModal from './PartnerModal';

export default function PartnerCard({ partner }) {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <div className="partner-card">
        <div className="partner-portrait">
          <div className="monogram-portrait">
            <span>RJR</span>
          </div>
          <span className="portrait-badge">
            <Shield size={12} /> ICAI Member
          </span>
        </div>

        <div className="partner-card-body">
          <h3>{partner.name}</h3>
          <p className="designation">{partner.designation}</p>

          <dl className="partner-summary-list">
            <dt>Qualification</dt>
            <dd>{partner.qualification}</dd>
            <dt>ICAI Membership</dt>
            <dd>{partner.membershipNumber || partner.membership}</dd>
          </dl>

          <button
            type="button"
            className="text-button profile-btn"
            onClick={() => setModalOpen(true)}
            aria-label={`View full professional profile of ${partner.name}`}
          >
            <span>View Professional Profile</span>
            <ArrowRight size={15} />
          </button>
        </div>
      </div>

      <PartnerModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        partner={partner}
      />
    </>
  );
}
