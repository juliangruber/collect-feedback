var http = require('http');
var fs = require('fs');
var concat = require('concat-stream');

module.exports = http.createServer(function(req, res){
  if ('/' == req.url) {
    res.setHeader('Content-Type', 'text/html');
    res.setHeader('Charset', 'utf8');
    fs.createReadStream(__dirname + '/static/index.html')
      .pipe(res);
  }
  else if ('/feedback' == req.url && 'POST' == req.method) {
    req.pipe(concat(function(feedback){
      res.end('ok');
      console.log([
        new Date,
        JSON.stringify(feedback.toString())
      ].join('\t'));
    }));
  }
  else {
    res.statusCode = 404;
    res.end('File not found');
  }
});

