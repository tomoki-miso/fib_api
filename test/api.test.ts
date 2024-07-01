import request from 'supertest';
import express from 'express';
import fibRes from '../functions/src/app/controller/fibController';

const app = express();

// テスト用のエンドポイントを設定
app.get('/', (req, res, next) => {
  fibRes(req, res, next);
});

describe('GET /', () => {
  it('should return 400 Bad Request if n is not provided', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(400);
    expect(response.body).toEqual({ status: 400, message: 'Bad Request' });
  });

  it('should return 400 Bad Request if n is not int', async () => {
    const response = await request(app).get('/').query({ n: 'aa' });
    expect(response.status).toBe(400);
    expect(response.body).toEqual({ status: 400, message: 'Bad Request' });
  });

  it('should return 400 Bad Request if n is not plus', async () => {
    const response = await request(app).get('/').query({ n: -1 });
    expect(response.status).toBe(400);
    expect(response.body).toEqual({ status: 400, message: 'Bad Request' });
  });

  it('should return 400 Bad Request if n is double', async () => {
    const response = await request(app).get('/').query({ n: 0.1 });
    expect(response.status).toBe(400);
    expect(response.body).toEqual({ status: 400, message: 'Bad Request' });
  });

  it('should return 200 with correct Fibonacci result', async () => {
    const response = await request(app).get('/').query({ n: '6' });
    expect(response.status).toBe(200);
    expect(response.body.result).toBe(8);
  });
});
