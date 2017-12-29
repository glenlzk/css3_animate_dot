/**
 * Created by Administrator on 2017/12/7 0007.
 */

var express = require('express');
var opn = require('open');
var port = 3000;
var proxy = require('http-proxy-middleware');

var app = express();


// app.use('/yzlpms', proxy({target: 'http://dev.inzlink.com', changeOrigin: true}));

// app.use('/hotel/', express.static('./dist'))

app.use(express.static('./'))

app.listen(port, function () {
    console.log('服务器启动完成....');
    var uri = 'http://localhost:' + port + '/index.html';
    opn(uri);
});