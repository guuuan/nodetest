var express = require('express');
var app = express();
var didi;
 
app.get('/aaa/', function (req, res) {
  didi=req.ip;
   res.send(didi+'哈哈哈哈哈哈哈哈哈哈');
})

app.get('/qsip/',function(req,res){
  res.send('寝室ip:'+didi);
})

var server = app.listen(40000, function () {
 
  var host = server.address().address
  var port = server.address().port
 
  console.log("应用实例，访问地址为 http://%s:%s", host, port);
 
})