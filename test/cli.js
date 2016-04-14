var request = require('request');
var should = require('should')

describe('RUNKOA with cli', function() {
  it('should runkoa ' + __dirname + '/bin/www', function(done) {
    var coffee = require('coffee');

    coffee.spawn('runkoa ' ,[__dirname + '/bin/www'])
    // .write('1')
    // .write('2')
    .expect('stdout', /^abc/)
    .expect('code', -2)
    // .end(done);
    
    request('http://127.0.0.1:3000', function (error, response, body) {
      if (!error && response.statusCode == 200) {
        // console.log(body) // Show the HTML for the Google homepage.
        body.should.equal('Hello Koa in app.js');
        
        done()
      }
    })
    
  })
  
  it('should runkoa ' + 'test/bin/www', function(done) {
    var coffee = require('coffee');

    coffee.spawn('runkoa ' ,[__dirname + '/bin/www'])
    // .write('1')
    // .write('2')
    .expect('stdout', /^abc/)
    .expect('code', -2)
    // .end(done);
    
    request('http://127.0.0.1:3000', function (error, response, body) {
      if (!error && response.statusCode == 200) {
        // console.log(body) // Show the HTML for the Google homepage.
        body.should.equal('Hello Koa in app.js');
        
        done()
      }
    })
    
  })
  
})
