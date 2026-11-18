import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import App from './App';

describe('R J R & Company website', () => {
  it('renders the firm home page', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByRole('heading', { level: 1, name: 'R J R & Company' })).toBeTruthy();
    expect(screen.getByRole('link', { name: 'Explore Services' })).toBeTruthy();
    expect(screen.getByText(/Professional services across accounting, taxation, audit and regulatory compliance\./i)).toBeTruthy();
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
    expect(screen.getByText('Firm Partners')).toBeTruthy();
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

  it('renders Insights and Article detail pages', () => {
    render(
      <MemoryRouter initialEntries={['/insights']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByRole('heading', { level: 1, name: 'Insights & Guidance' })).toBeTruthy();
    expect(screen.getAllByText('Organising financial and statutory records').length).toBeGreaterThanOrEqual(1);
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

  it('renders Careers page with job opportunities and application form', () => {
    render(
      <MemoryRouter initialEntries={['/careers']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByRole('heading', { level: 1, name: 'Career Opportunities' })).toBeTruthy();
    expect(screen.getAllByText('Articleship Trainee (CA Inter / IPCC)').length).toBeGreaterThanOrEqual(1);
  });

  it('renders Contact page with factual office placeholders and form', () => {
    render(
      <MemoryRouter initialEntries={['/contact']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByRole('heading', { level: 1, name: 'Contact R J R & Company' })).toBeTruthy();
    expect(screen.getByText('Submit a Professional Enquiry')).toBeTruthy();
    expect(screen.getByText(/Please do not submit PAN, Aadhaar, OTPs/i)).toBeTruthy();
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
});
