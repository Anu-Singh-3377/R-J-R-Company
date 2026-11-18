import { useState, useCallback } from 'react';
import { Routes, Route } from 'react-router-dom';

// Global & Common Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Toast from './components/Toast';
import CookieBanner from './components/CookieBanner';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';
import Partners from './pages/Partners';
import Resources from './pages/Resources';
import ChecklistDetail from './pages/ChecklistDetail';
import Insights from './pages/Insights';
import ArticleDetail from './pages/ArticleDetail';
import Careers from './pages/Careers';
import Contact from './pages/Contact';
import ClientLogin from './pages/ClientLogin';
import ClientPortal from './pages/ClientPortal';
import Legal from './pages/Legal';
import NotFound from './pages/NotFound';

export default function App() {
  const [toasts, setToasts] = useState([]);

  const addToast = useCallback((toastData) => {
    const id = Date.now().toString() + Math.random().toString(36).substr(2, 4);
    setToasts((prev) => [...prev, { ...toastData, id }]);
  }, []);

  const removeToast = useCallback((id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  return (
    <div className="app-layout-root">
      <ScrollToTop />
      <Navbar />

      <main id="main-content" className="site-main-content">
        <Routes>
          {/* Main Core Routes */}
          <Route path="/" element={<Home onNotification={addToast} />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />

          {/* Specific Service Detail Routes */}
          <Route path="/services/audit-assurance" element={<ServiceDetail />} />
          <Route path="/services/income-tax" element={<ServiceDetail />} />
          <Route path="/services/gst" element={<ServiceDetail />} />
          <Route path="/services/accounting" element={<ServiceDetail />} />
          <Route path="/services/company-compliance" element={<ServiceDetail />} />
          <Route path="/services/business-advisory" element={<ServiceDetail />} />
          <Route path="/services/:slug" element={<ServiceDetail />} />

          {/* Partners Directory */}
          <Route path="/partners" element={<Partners />} />

          {/* Resources & Document Checklists */}
          <Route path="/resources" element={<Resources />} />
          <Route path="/resources/income-tax-checklist" element={<ChecklistDetail />} />
          <Route path="/resources/gst-checklist" element={<ChecklistDetail />} />
          <Route path="/resources/audit-checklist" element={<ChecklistDetail />} />
          <Route path="/resources/company-compliance-checklist" element={<ChecklistDetail />} />
          <Route path="/resources/:slug" element={<ChecklistDetail />} />

          {/* Backward compatibility aliases */}
          <Route path="/document-checklists" element={<Resources />} />
          <Route path="/document-checklists/:slug" element={<ChecklistDetail />} />

          {/* Insights / Knowledge Center */}
          <Route path="/insights" element={<Insights />} />
          <Route path="/insights/:slug" element={<ArticleDetail />} />

          {/* Careers & Applications */}
          <Route path="/careers" element={<Careers onNotification={addToast} />} />

          {/* Contact Office */}
          <Route path="/contact" element={<Contact onNotification={addToast} />} />

          {/* Client Authentication & Secure Portal */}
          <Route path="/client-login" element={<ClientLogin onNotification={addToast} />} />
          <Route path="/client-portal" element={<ClientPortal onNotification={addToast} />} />

          {/* Legal Disclaimers & Policies */}
          <Route path="/privacy" element={<Legal kind="privacy" />} />
          <Route path="/disclaimer" element={<Legal kind="disclaimer" />} />
          <Route path="/cookie-policy" element={<Legal kind="cookie" />} />

          {/* 404 Route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
      <CookieBanner />
      <Toast toasts={toasts} onDismiss={removeToast} />
    </div>
  );
}
