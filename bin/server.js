#!/usr/bin/env node

var server = require('..');
var port = process.argv[2] || 8000;

server.listen(port, function(){
  console.error('http://localhost:%s/', port);
});

