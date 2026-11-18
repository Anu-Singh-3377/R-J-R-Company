import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  LayoutDashboard,
  FolderOpen,
  FileQuestion,
  MessageSquare,
  User,
  LogOut,
  ShieldCheck,
  Lock,
  Clock,
  FileCheck2,
  AlertCircle,
  HelpCircle,
  Download,
  Calendar
} from 'lucide-react';
import SEO from '../components/SEO';
import DashboardCard from '../components/DashboardCard';
import FileUpload from '../components/FileUpload';
import StatusBadge from '../components/StatusBadge';
import { firmData } from '../data';

export default function ClientPortal({ onNotification }) {
  const [activeTab, setActiveTab] = useState('dashboard');
  const navigate = useNavigate();

  const openRequests = [
    {
      id: 'req-1',
      title: 'FY 2025-26 Bank Statements (Q4)',
      service: 'Statutory Audit',
      dueDate: '15 Dec 2026',
      status: 'Action Required',
      priority: 'high'
    },
    {
      id: 'req-2',
      title: 'Form 26AS & AIS Reconciliation Report',
      service: 'Income Tax',
      dueDate: '20 Dec 2026',
      status: 'In Progress',
      priority: 'medium'
    },
    {
      id: 'req-3',
      title: 'Monthly Outward GSTR-1 Invoices',
      service: 'GST Compliance',
      dueDate: '10 Jan 2027',
      status: 'Pending Upload',
      priority: 'normal'
    }
  ];

  const recentMessages = [
    {
      id: 'msg-1',
      sender: 'Audit Engagement Team',
      date: '18 Nov 2026',
      subject: 'Clarification regarding Fixed Asset Additions schedule',
      read: false
    },
    {
      id: 'msg-2',
      sender: 'Tax Compliance Desk',
      date: '10 Nov 2026',
      subject: 'Advance Tax computation for Q3 installment',
      read: true
    }
  ];

  return (
    <div className="client-portal-view">
      <SEO
        title="Client Portal Dashboard"
        description="R J R & Company — Authorized client dashboard, secure document repository, and statutory request tracker."
      />

      <div className="portal-header-bar">
        <div className="container portal-header-inner">
          <div className="portal-brand">
            <span className="brand-mark small">RJR</span>
            <div>
              <strong>{firmData.name}</strong>
              <small>Client Document Portal</small>
            </div>
          </div>

          <div className="portal-header-user">
            <div className="user-indicator">
              <span className="indicator-dot" />
              <span>Secure Session (TLS 1.3)</span>
            </div>
            <Link to="/client-login" className="portal-logout-link" title="Sign out of portal">
              <LogOut size={16} />
              <span>Sign Out</span>
            </Link>
          </div>
        </div>
      </div>

      <div className="container portal-layout-container">
        {/* Portal Navigation Sidebar */}
        <aside className="portal-nav-sidebar">
          <nav className="portal-menu" aria-label="Portal Navigation">
            <button
              type="button"
              className={`portal-menu-item ${activeTab === 'dashboard' ? 'active' : ''}`}
              onClick={() => setActiveTab('dashboard')}
            >
              <LayoutDashboard size={18} />
              <span>Dashboard</span>
            </button>

            <button
              type="button"
              className={`portal-menu-item ${activeTab === 'documents' ? 'active' : ''}`}
              onClick={() => setActiveTab('documents')}
            >
              <FolderOpen size={18} />
              <span>Documents</span>
            </button>

            <button
              type="button"
              className={`portal-menu-item ${activeTab === 'requests' ? 'active' : ''}`}
              onClick={() => setActiveTab('requests')}
            >
              <FileQuestion size={18} />
              <span>Document Requests</span>
              <span className="counter-pill">{openRequests.length}</span>
            </button>

            <button
              type="button"
              className={`portal-menu-item ${activeTab === 'messages' ? 'active' : ''}`}
              onClick={() => setActiveTab('messages')}
            >
              <MessageSquare size={18} />
              <span>Messages</span>
            </button>

            <button
              type="button"
              className={`portal-menu-item ${activeTab === 'profile' ? 'active' : ''}`}
              onClick={() => setActiveTab('profile')}
            >
              <User size={18} />
              <span>Firm Contact & Profile</span>
            </button>
          </nav>

          <div className="portal-security-badge">
            <ShieldCheck size={20} className="badge-icon" />
            <div>
              <strong>Confidential Vault</strong>
              <small>All uploads are stored in an encrypted private bucket inaccessible to web crawlers.</small>
            </div>
          </div>
        </aside>

        {/* Portal Main Content Area */}
        <main className="portal-content-main">
          {activeTab === 'dashboard' && (
            <div className="tab-pane dashboard-pane">
              <div className="pane-header">
                <div>
                  <h2>Client Overview</h2>
                  <p>Welcome to your statutory engagement document and request console.</p>
                </div>
              </div>

              {/* 4 Metric Cards as required in Section 36 */}
              <div className="dashboard-cards-grid">
                <DashboardCard
                  label="Pending Documents"
                  value={openRequests.length.toString()}
                  subtext="Requested by audit / tax team"
                  icon={Clock}
                  badge="Urgent"
                />
                <DashboardCard
                  label="Uploaded Documents"
                  value="14"
                  subtext="Securely encrypted & verified"
                  icon={FileCheck2}
                />
                <DashboardCard
                  label="Open Requests"
                  value="3"
                  subtext="Active compliance queries"
                  icon={FileQuestion}
                />
                <DashboardCard
                  label="Recent Activity"
                  value="Today"
                  subtext="Portal verified & active"
                  icon={ShieldCheck}
                />
              </div>

              {/* Quick Document Upload Area */}
              <section className="portal-section">
                <div className="section-title-row">
                  <div>
                    <h3>Upload Engagement Files</h3>
                    <p>Transmit records directly to the engagement partner and audit team.</p>
                  </div>
                </div>
                <FileUpload onNotification={onNotification} />
              </section>

              {/* Pending Requests Preview */}
              <section className="portal-section">
                <div className="section-title-row">
                  <h3>Active Document Requests</h3>
                  <button
                    type="button"
                    className="text-link"
                    onClick={() => setActiveTab('requests')}
                  >
                    View All ({openRequests.length}) →
                  </button>
                </div>
                <div className="requests-table-wrapper">
                  <table className="portal-table">
                    <thead>
                      <tr>
                        <th>Particulars</th>
                        <th>Engagement</th>
                        <th>Target Date</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {openRequests.map((req) => (
                        <tr key={req.id}>
                          <td><strong>{req.title}</strong></td>
                          <td>{req.service}</td>
                          <td>{req.dueDate}</td>
                          <td>
                            <StatusBadge status={req.priority} label={req.status} />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>
            </div>
          )}

          {activeTab === 'documents' && (
            <div className="tab-pane documents-pane">
              <div className="pane-header">
                <div>
                  <h2>Secure Document Upload & Vault</h2>
                  <p>Upload files securely. Permitted formats: PDF, JPG, PNG, DOC, DOCX, XLS, XLSX (Max 10 MB).</p>
                </div>
              </div>

              <FileUpload onNotification={onNotification} />

              <div className="vault-policy-card">
                <Lock size={18} />
                <div>
                  <h4>Privacy & Zero-Public Exposure Architecture</h4>
                  <p>
                    In accordance with Section 37 & 38 of engagement compliance guidelines, all uploaded files are protected from public HTTP indexing. Files are accessible solely to assigned engagement personnel via authenticated server sessions.
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'requests' && (
            <div className="tab-pane requests-pane">
              <div className="pane-header">
                <div>
                  <h2>Engagement Document Requests</h2>
                  <p>List of documentation requested by R J R & Company for upcoming statutory filings.</p>
                </div>
              </div>

              <div className="requests-list">
                {openRequests.map((req) => (
                  <div key={req.id} className="request-card-item">
                    <div className="request-info">
                      <span className="req-service-tag">{req.service}</span>
                      <h3>{req.title}</h3>
                      <div className="req-meta">
                        <span>
                          <Calendar size={13} /> Required by: <strong>{req.dueDate}</strong>
                        </span>
                      </div>
                    </div>
                    <div className="request-action">
                      <StatusBadge status={req.priority} label={req.status} />
                      <button
                        type="button"
                        className="button primary small-btn"
                        onClick={() => setActiveTab('documents')}
                      >
                        Upload Document
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'messages' && (
            <div className="tab-pane messages-pane">
              <div className="pane-header">
                <div>
                  <h2>Audit Team Communications</h2>
                  <p>Direct official communications and compliance notes from R J R & Company.</p>
                </div>
              </div>

              <div className="messages-list">
                {recentMessages.map((msg) => (
                  <div key={msg.id} className={`message-item-card ${!msg.read ? 'unread' : ''}`}>
                    <div className="msg-header">
                      <strong>{msg.sender}</strong>
                      <small>{msg.date}</small>
                    </div>
                    <h4>{msg.subject}</h4>
                    <p className="msg-preview">
                      Please review the attached ledger reconciliations and share necessary clarifications with the engagement desk.
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'profile' && (
            <div className="tab-pane profile-pane">
              <div className="pane-header">
                <div>
                  <h2>Engagement Profile & Official Contact</h2>
                  <p>Firm information and contact details for technical escalation.</p>
                </div>
              </div>

              <div className="profile-info-grid">
                <div className="profile-card">
                  <h3>Engagement Office</h3>
                  <dl className="profile-dl">
                    <dt>Assigned Firm</dt>
                    <dd>{firmData.name}</dd>
                    <dt>Designation</dt>
                    <dd>{firmData.type}</dd>
                    <dt>Head Office</dt>
                    <dd>{firmData.headOffice || '[TO BE PROVIDED]'}</dd>
                    <dt>Office Contact Phone</dt>
                    <dd>{firmData.phone || '[TO BE PROVIDED]'}</dd>
                    <dt>Compliance Email</dt>
                    <dd>{firmData.email || '[TO BE PROVIDED]'}</dd>
                  </dl>
                </div>

                <div className="profile-card">
                  <h3>Support & Credentials</h3>
                  <p>
                    To request new portal user credentials, update authorized corporate signatories, or request credential resets, contact the firm administration desk.
                  </p>
                  <Link to="/contact" className="button outline-primary">
                    Contact Firm Administration
                  </Link>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
