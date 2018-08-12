const request = require('supertest');
const expect = require('expect');

var app = require('./server').app;

// // Test A:
// it('should return Hello World! response', (done) => {
//   request(app)
//   .get('/')
//   .expect('Hello World!')
//   .end(done);
// });

// // Test B:
// it('should return 200 and Hello World! response', (done) => {
//   request(app)
//     .get('/')
//     .expect(200)
//     .expect('Hello World!')
//     .end(done);
// });

// // Test C:
// it('should return 404 and Page not found error', (done) => {
//   request(app)
//     .get('/')
//     .expect(404)
//     .expect({
//       error: 'Page not found'
//     })
//     .end(done);
// });

// Test D:
it('should contain object property', (done) => {
  request(app)
    .get('/')
    .expect(404)
    .expect((res) => {
      expect(res.body).toMatchObject({
        error: 'Page not found',
      });
    })
    .end(done);
});
