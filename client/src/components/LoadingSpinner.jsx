export default function LoadingSpinner({ text = 'Loading...', size = 'medium' }) {
  return (
    <div className={`spinner-container ${size}`} role="status">
      <div className="spinner-ring" aria-hidden="true" />
      <span className="spinner-text">{text}</span>
    </div>
  );
}
