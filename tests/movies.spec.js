import { expect, test } from '@jest/globals';
import request from 'supertest';
import app from '../src/app';

test('Forrest Gump shows title of movie', async () => {
  const response = await request(app).get('/movies/6')
    .expect('Content-Type', 'text/html; charset=utf-8')
    .expect(200);

  expect(response.text).toMatch('Forrest Gump');
});