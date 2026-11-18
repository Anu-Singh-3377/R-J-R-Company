export default function StatusBadge({ status = 'pending', label }) {
  const normalized = status.toLowerCase();
  const displayLabel = label || status;

  return (
    <span className={`status-badge status-${normalized}`}>
      <span className="status-dot" aria-hidden="true" />
      {displayLabel}
    </span>
  );
}
