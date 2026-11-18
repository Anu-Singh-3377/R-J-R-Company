import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Lock, Mail, Key, ShieldCheck, AlertCircle, ArrowRight, Loader2 } from 'lucide-react';
import SEO from '../components/SEO';
import ImageWithFallback from '../components/ImageWithFallback';
import { firmData, images } from '../data';

export default function ClientLogin({ onNotification }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');
  const [isError, setIsError] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    setStatusMessage('');
    setIsError(false);

    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.status === 501) {
        // Expected compliance architecture: production auth credentials must be issued officially by the firm
        setStatusMessage(
          'Production authentication is not configured. Access to the client portal requires authorized credentials officially issued by R J R & Company.'
        );
        setIsError(false);
        onNotification?.({
          type: 'info',
          title: 'Portal Access',
          message: 'Client credentials are issued directly by the firm office.',
        });
      } else if (!response.ok) {
        throw new Error(data.error || 'Authentication failed.');
      } else {
        // If login succeeded
        navigate('/client-portal');
      }
    } catch (err) {
      setIsError(true);
      setStatusMessage(err.message || 'Unable to connect to authentication server.');
    } finally {
      setIsLoading(false);
    }
  }

  function handleForgotPassword() {
    setStatusMessage(
      'Password recovery requires verification by the firm. Please contact our office directly at the official telephone number or email to reset your portal access.'
    );
    setIsError(false);
  }

  return (
    <div className="auth-page-view">
      <SEO
        title="Client Login"
        description="R J R & Company — Authorized client portal access for document management and statutory compliance."
      />

      <div className="auth-background-layer">
        <ImageWithFallback
          src={images.tax}
          alt="Professional financial document and compliance workspace"
          className="auth-bg-photo"
          loading="eager"
        />
        <div className="auth-overlay-shade" />
      </div>

      <div className="auth-container">
        <div className="auth-card">
          <div className="auth-card-header">
            <div className="auth-lock-circle">
              <Lock size={24} />
            </div>
            <h2>Client Portal Login</h2>
            <p className="auth-card-subtitle">
              Secure document portal for clients of {firmData.name}.
            </p>
          </div>

          {statusMessage && (
            <div className={`auth-notice-box ${isError ? 'error' : 'info'}`} role="status">
              <AlertCircle size={16} className="notice-icon" />
              <p>{statusMessage}</p>
            </div>
          )}

          <form className="auth-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="login-email">Authorized Email Address *</label>
              <div className="input-icon-wrap">
                <Mail size={16} className="input-inner-icon" />
                <input
                  id="login-email"
                  name="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@company.com"
                  className="has-icon"
                />
              </div>
            </div>

            <div className="form-group">
              <div className="label-with-action">
                <label htmlFor="login-password">Portal Password *</label>
                <button
                  type="button"
                  className="forgot-pass-btn"
                  onClick={handleForgotPassword}
                >
                  Forgot Password?
                </button>
              </div>
              <div className="input-icon-wrap">
                <Key size={16} className="input-inner-icon" />
                <input
                  id="login-password"
                  name="password"
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••••••"
                  className="has-icon"
                />
              </div>
            </div>

            <div className="remember-row">
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  checked={remember}
                  onChange={(e) => setRemember(e.target.checked)}
                />
                <span>Remember this workstation</span>
              </label>
            </div>

            <button
              type="submit"
              className="button primary full-width login-submit-btn"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <Loader2 size={16} className="spin-icon" />
                  <span>Verifying Credentials...</span>
                </>
              ) : (
                <>
                  <span>Sign In to Portal</span>
                  <ArrowRight size={16} />
                </>
              )}
            </button>
          </form>

          <div className="auth-card-footer">
            <div className="security-guarantee">
              <ShieldCheck size={16} />
              <span>256-bit SSL encrypted connection & isolated file vaults</span>
            </div>
            <div className="portal-direct-demo">
              <small>Need to preview upload architecture?</small>
              <Link to="/client-portal" className="text-link">
                Open Client Portal Dashboard →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
