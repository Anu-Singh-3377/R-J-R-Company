import { render, screen, cleanup, within } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it, afterEach } from 'vitest';
import App from './App';

afterEach(() => {
  cleanup();
});

describe('R J R & Company website', () => {
  it('renders the firm home page', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByRole('heading', { level: 1, name: /RJR & Company/i })).toBeTruthy();
    expect(screen.getByRole('link', { name: /Explore Practice Areas/i })).toBeTruthy();
    expect(screen.getAllByRole('link', { name: /Contact Our Office/i }).length).toBeGreaterThanOrEqual(1);
    expect(screen.getByText(/Audit, Taxation, and Financial Advisory\./i)).toBeTruthy();
    expect(screen.getByText(/Providing structured statutory compliance, assurance, and strategic advisory services/i)).toBeTruthy();
    expect(screen.getByRole('heading', { level: 2, name: /About RJR & Company/i })).toBeTruthy();
    expect(screen.getByText(/A structured approach to assurance, compliance and advisory\./i)).toBeTruthy();
  });

  it('renders About page with firm background and practice standards', () => {
    render(
      <MemoryRouter initialEntries={['/about']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByRole('heading', { level: 1, name: 'About R J R & Company' })).toBeTruthy();
    expect(screen.getByText('Firm Background & Practice')).toBeTruthy();
  });

  it('renders Services directory and service details', () => {
    render(
      <MemoryRouter initialEntries={['/services']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByRole('heading', { level: 1, name: 'Professional Services' })).toBeTruthy();
    expect(screen.getAllByRole('heading', { name: 'Audit & Assurance' }).length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByRole('heading', { name: 'Income Tax' }).length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByRole('heading', { name: 'GST & Indirect Tax' }).length).toBeGreaterThanOrEqual(1);
  });

  it('renders dedicated Service Detail route for Audit & Assurance', () => {
    render(
      <MemoryRouter initialEntries={['/services/audit-assurance']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByRole('heading', { level: 1, name: 'Audit & Assurance' })).toBeTruthy();
    expect(screen.getAllByText('Overview & Nature of Service').length).toBeGreaterThanOrEqual(1);
  });

  it('renders dedicated Service Detail route for Income Tax', () => {
    render(
      <MemoryRouter initialEntries={['/services/income-tax']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByRole('heading', { level: 1, name: 'Income Tax' })).toBeTruthy();
    expect(screen.getAllByText('Overview & Nature of Service').length).toBeGreaterThanOrEqual(1);
  });

  it('renders dedicated Service Detail route for GST', () => {
    render(
      <MemoryRouter initialEntries={['/services/gst']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByRole('heading', { level: 1, name: 'GST & Indirect Tax' })).toBeTruthy();
  });

  it('renders Partners page with ICAI compliance safeguards', () => {
    render(
      <MemoryRouter initialEntries={['/partners']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByRole('heading', { level: 1, name: 'Partners' })).toBeTruthy();
    expect(screen.getAllByText('Firm Partners').length).toBeGreaterThanOrEqual(1);
    expect(screen.getByText('View Professional Profile')).toBeTruthy();
  });

  it('renders Resources and dedicated checklist pages', () => {
    render(
      <MemoryRouter initialEntries={['/resources']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByRole('heading', { level: 1, name: 'Document Checklists' })).toBeTruthy();
    expect(screen.getByText('Statutory & Document Worksheets')).toBeTruthy();
  });

  it('renders dedicated Income Tax Checklist detail page', () => {
    render(
      <MemoryRouter initialEntries={['/resources/income-tax-checklist']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByRole('heading', { level: 1, name: 'Income Tax Return Checklist' })).toBeTruthy();
    expect(screen.getAllByRole('button', { name: /Print/i }).length).toBeGreaterThanOrEqual(1);
  });

  it('renders Knowledge Bank page with compliance calendar, updates, and government links', () => {
    render(
      <MemoryRouter initialEntries={['/knowledge-bank']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByRole('heading', { level: 1, name: /Knowledge Bank/i })).toBeTruthy();
    expect(screen.getAllByText(/Monthly Compliance Calendar/i).length).toBeGreaterThanOrEqual(1);
    expect(screen.getByText(/Compliance Note:/i)).toBeTruthy();
    expect(screen.getByRole('tab', { name: /Regulatory Updates/i })).toBeTruthy();
    expect(screen.getByRole('tab', { name: /Government Links/i })).toBeTruthy();
  });

  it('renders Article Detail route with reading progress and disclaimer', () => {
    render(
      <MemoryRouter initialEntries={['/insights/general-guidance-document-records']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByRole('heading', { level: 1, name: 'Organising financial and statutory records' })).toBeTruthy();
    expect(screen.getByText('General Guidance Disclaimer')).toBeTruthy();
  });

  it('renders Careers page with why join section, openings and PDF resume upload', () => {
    render(
      <MemoryRouter initialEntries={['/careers']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByRole('heading', { level: 1, name: /Careers & Articleship/i })).toBeTruthy();
    expect(screen.getByText('Why Join RJR & Company')).toBeTruthy();
    expect(screen.getByText('Diverse Industry Exposure')).toBeTruthy();
    expect(screen.getByText('Structured Training')).toBeTruthy();
    expect(screen.getAllByText('Qualified Chartered Accountant').length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText('ICAI Article Assistant').length).toBeGreaterThanOrEqual(1);
    expect(screen.getByText(/PDF Resume Upload/i)).toBeTruthy();
  });

  it('renders Contact page with factual office placeholders, form, and map section', () => {
    render(
      <MemoryRouter initialEntries={['/contact']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByRole('heading', { level: 1, name: /Contact Us & Office Locations/i })).toBeTruthy();
    expect(screen.getByText('Submit a Professional Enquiry')).toBeTruthy();
    expect(screen.getByText(/Please do not submit PAN, Aadhaar, OTPs/i)).toBeTruthy();
    expect(screen.getByText(/Premises Location Map/i)).toBeTruthy();
  });

  it('renders Client Login and Client Portal routes', () => {
    render(
      <MemoryRouter initialEntries={['/client-login']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByRole('heading', { level: 2, name: 'Client Portal Login' })).toBeTruthy();
  });

  it('renders Client Portal with secure document upload architecture', () => {
    render(
      <MemoryRouter initialEntries={['/client-portal']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByRole('heading', { level: 2, name: 'Client Overview' })).toBeTruthy();
    expect(screen.getByText('Pending Documents')).toBeTruthy();
    expect(screen.getByText('Uploaded Documents')).toBeTruthy();
    expect(screen.getByText('Drag & Drop secure files here')).toBeTruthy();
  });

  it('renders Legal and compliance pages: Privacy, Disclaimer, and Cookie Policy', () => {
    render(
      <MemoryRouter initialEntries={['/privacy']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByRole('heading', { level: 1, name: 'Privacy Notice' })).toBeTruthy();

    render(
      <MemoryRouter initialEntries={['/disclaimer']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByRole('heading', { level: 1, name: 'Disclaimer & ICAI Regulatory Notice' })).toBeTruthy();

    render(
      <MemoryRouter initialEntries={['/cookie-policy']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByRole('heading', { level: 1, name: 'Cookie Policy' })).toBeTruthy();
  });

  it('renders 404 Not Found page for invalid routes', () => {
    render(
      <MemoryRouter initialEntries={['/non-existent-route']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByRole('heading', { level: 1, name: 'Page Not Found' })).toBeTruthy();
    expect(screen.getByText('404')).toBeTruthy();
  });

  it('renders updated professional header, brand block, navigation items and Client Portal CTA', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );

    // Brand Block
    expect(screen.getAllByText('RJR & Company').length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText('Chartered Accountants').length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText('RJR').length).toBeGreaterThanOrEqual(1);

    // Primary Navigation
    const nav = screen.getByRole('navigation', { name: 'Primary navigation' });
    expect(nav).toBeTruthy();
    expect(within(nav).getByRole('link', { name: 'Home' })).toBeTruthy();
    expect(within(nav).getByRole('link', { name: 'About Us' })).toBeTruthy();
    expect(within(nav).getByRole('link', { name: 'Practice Areas' })).toBeTruthy();
    expect(within(nav).getByRole('link', { name: 'Partners' })).toBeTruthy();
    expect(within(nav).getByRole('link', { name: 'Knowledge Bank' })).toBeTruthy();
    expect(within(nav).getByRole('link', { name: 'Careers' })).toBeTruthy();
    expect(within(nav).getByRole('link', { name: 'Contact Us' })).toBeTruthy();

    // Client Portal Utility CTA
    expect(screen.getByRole('link', { name: 'Client Portal' })).toBeTruthy();
  });

  it('supports navigation route aliases seamlessly', () => {
    render(
      <MemoryRouter initialEntries={['/about-us']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByRole('heading', { level: 1, name: 'About R J R & Company' })).toBeTruthy();
    cleanup();

    render(
      <MemoryRouter initialEntries={['/practice-areas']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByRole('heading', { level: 1, name: 'Professional Services' })).toBeTruthy();
    cleanup();

    render(
      <MemoryRouter initialEntries={['/knowledge-bank']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByRole('heading', { level: 1, name: /Knowledge Bank/i })).toBeTruthy();
    cleanup();

    render(
      <MemoryRouter initialEntries={['/contact-us']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByRole('heading', { level: 1, name: /Contact Us & Office Locations/i })).toBeTruthy();
  });

  it('renders redesigned institutional footer with firm credentials and legal navigation', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );

    const footer = screen.getByRole('contentinfo', { name: 'RJR & Company Footer' });
    expect(footer).toBeTruthy();

    // Institutional identity & FRN
    expect(screen.getAllByText(/Registered with ICAI • FRN:/i).length).toBeGreaterThanOrEqual(1);

    // Multi-column sections
    expect(screen.getByRole('heading', { level: 4, name: 'Practice Areas' })).toBeTruthy();
    expect(screen.getByRole('heading', { level: 4, name: 'Company' })).toBeTruthy();
    expect(screen.getByRole('heading', { level: 4, name: 'Resources' })).toBeTruthy();
    expect(screen.getByRole('heading', { level: 4, name: 'Head Office' })).toBeTruthy();

    // Legal bar links
    expect(screen.getByRole('link', { name: 'Privacy Policy' })).toBeTruthy();
    expect(screen.getByRole('link', { name: 'Terms of Use' })).toBeTruthy();
    expect(screen.getByRole('link', { name: 'Statutory Disclaimer' })).toBeTruthy();
    expect(screen.getByRole('link', { name: 'Cookie Policy' })).toBeTruthy();
    expect(screen.getByRole('link', { name: 'Sitemap' })).toBeTruthy();

    // LinkedIn Profile link or placeholder
    expect(screen.getAllByText('LinkedIn').length).toBeGreaterThanOrEqual(1);

    // Copyright bar
    const currentYear = new Date().getFullYear();
    expect(screen.getByText(new RegExp(`© ${currentYear} RJR & Company, Chartered Accountants`, 'i'))).toBeTruthy();
  });

  it('displays the exact ICAI Statutory Disclaimer in the footer', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByText('ICAI STATUTORY DISCLAIMER')).toBeTruthy();
    expect(
      screen.getAllByText(
        /Disclaimer: As per the guidelines of the Institute of Chartered Accountants of India \(ICAI\), Chartered Accountants are not permitted to solicit work and advertise\./i
      ).length
    ).toBeGreaterThanOrEqual(1);
    expect(
      screen.getAllByText(
        /Nothing on this website constitutes an advertisement, personal communication, solicitation, invitation, or inducement of any sort whatsoever/i
      ).length
    ).toBeGreaterThanOrEqual(1);
  });

  it('renders Terms of Use page on /terms-of-use and /terms', () => {
    render(
      <MemoryRouter initialEntries={['/terms-of-use']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByRole('heading', { level: 1, name: 'Terms of Use' })).toBeTruthy();
    expect(screen.getByText('Website Terms & Conditions')).toBeTruthy();
    expect(screen.getByRole('heading', { level: 2, name: /Acceptance of Terms/i })).toBeTruthy();
    cleanup();

    render(
      <MemoryRouter initialEntries={['/terms']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByRole('heading', { level: 1, name: 'Terms of Use' })).toBeTruthy();
  });

  it('renders Public Website Sitemap on /sitemap', () => {
    render(
      <MemoryRouter initialEntries={['/sitemap']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByRole('heading', { level: 1, name: 'Public Website Sitemap' })).toBeTruthy();
    expect(screen.getByText('Website Directory')).toBeTruthy();
    expect(screen.getByRole('heading', { level: 2, name: 'Primary Firm Navigation' })).toBeTruthy();
    expect(screen.getByRole('heading', { level: 2, name: 'Practice Areas & Specialized Engagements' })).toBeTruthy();
    expect(screen.getByRole('heading', { level: 2, name: 'Client Worksheets & Document Checklists' })).toBeTruthy();
    expect(screen.getByRole('heading', { level: 2, name: 'Knowledge Bank & Regulatory Guidance' })).toBeTruthy();
    expect(screen.getByRole('heading', { level: 2, name: 'Legal, Ethics & Policy Notices' })).toBeTruthy();
  });
});
