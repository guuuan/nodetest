const request = require('request');

request('http://123.206.230.246:40000', { json: true }, (err, res, body) => {
  if (err) { return console.log(err); }
  console.log(body.url);
  console.log(body.explanation);
  console.log("应用实11111111")


});

