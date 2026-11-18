export default function DashboardCard({ label, value, subtext, icon: Icon, badge }) {
  return (
    <div className="dashboard-metric-card">
      <div className="metric-header">
        <span className="metric-label">{label}</span>
        {Icon && (
          <div className="metric-icon-box">
            <Icon size={18} />
          </div>
        )}
      </div>

      <div className="metric-value-wrap">
        <strong className="metric-number">{value}</strong>
        {badge && <span className="metric-badge">{badge}</span>}
      </div>

      {subtext && <p className="metric-subtext">{subtext}</p>}
    </div>
  );
}
