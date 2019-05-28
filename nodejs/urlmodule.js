/**
 * url module
 * 웹 주소를 읽을수 있는 부분으로 나누는 모듈?
 */
var url = require('url');
var adr = 'http://localhost:8080/default.htm?year=2017&month=february';
//주소를 파서함.
var q = url.parse(adr, true);

/* 객체가 가진 url 속성을 파서 함수로 리턴*/
console.log(q.host);
console.log(q.pathname);
console.log(q.search);

/* 쿼리 속성은 쿼리스트링 파라미터를 속성들로 리턴해줌*/
var qdata = q.query;
console.log(qdata.month);
/**
 * 쿼리스트링을 파서하고 nodejs를 파일서버로 사용하는
 * 방법을 합친다.
 */

var http = require('http');
var url = require('url');
var fs = require('fs');

http.createServer(function (req, res) {
    var q = url.parse(req.url, true);
    var filename = "." + q.pathname;
    fs.readFile(filename, function (err, data) {
        if (err) {
            res.writeHead(404, { 'Content-Type': 'text/html' });
            return res.end("404 Not Found");
        }
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        return res.end();
    });
}).listen(8080); 