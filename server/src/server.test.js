import { describe, expect, it } from 'vitest';
import request from 'supertest';
import { app } from './server.js';

describe('API', () => {
  it('returns health', async () => {
    const response = await request(app).get('/api/health');
    expect(response.status).toBe(200);
    expect(response.body.status).toBe('ok');
  });
  it('returns services', async () => {
    const response = await request(app).get('/api/services');
    expect(response.status).toBe(200);
    expect(response.body.data.length).toBeGreaterThan(0);
  });
  it('rejects incomplete enquiries', async () => {
    const response = await request(app).post('/api/enquiries').send({ name: 'Test' });
    expect(response.status).toBe(400);
  });
  it('does not expose fake authentication', async () => {
    const response = await request(app).post('/api/auth/login').send({ email:'test@example.com', password:'test' });
    expect(response.status).toBe(501);
  });
});
