import { server } from 'config/server';
import request from 'supertest';

describe('GET /', () => {
  it('should return 200 and valid response', (done) => {
    request(server)
      .get('/')
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).toMatchObject({ success: true, message: 'Server works!' });
        done();
      });
  });
});
