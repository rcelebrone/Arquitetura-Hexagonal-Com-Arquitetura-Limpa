import request from 'supertest';
import app from '@/index';

describe('Testes de integração do servidor', () => {
  it('Deve iniciar o servidor e responder a uma solicitação GET', async () => {
    const response = await request(app).get('/api/home');
    expect(response.status).toBe(200);
    expect(response.text).toBe('Running!');
  });
});
