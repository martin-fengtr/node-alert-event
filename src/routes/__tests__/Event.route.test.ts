import { server } from 'config/server';
import request from 'supertest';

describe('POST /test', () => {
  it('should return 200 and valid response', (done) => {
    request(server)
      .post('/api/events/test')
      .send({
        message: 'Test message',
        frequency: 'hourly',
        recipients: ['user1@test.com', 'user2@test.com'],
      })
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).toMatchObject({
          success: true,
          data: {
            message: 'Test message',
            frequency: 'hourly',
            recipients: ['user1@test.com', 'user2@test.com'],
          },
        });
        done();
      });
  });
});

describe('POST /save', () => {
  it('should return 200 and valid response', (done) => {
    request(server)
      .post('/api/events/save')
      .send({
        message: 'Save message',
        frequency: 'hourly',
        recipients: ['user1@save.com', 'user2@save.com'],
      })
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).toMatchObject({
          success: true,
          data: {
            message: 'Save message',
            frequency: 'hourly',
            recipients: ['user1@save.com', 'user2@save.com'],
          },
        });
        done();
      });
  });
});
