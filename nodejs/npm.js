/**
 * npm
 * 패키지 매니저
 * nodejs 패키지는 모듈에 필요한 파일을 가지고있고
 * 모듈은 프로젝트에 포함할수 있는
 * 자바스크립트 라이브러리이다
 */
var http = require('http');
var uc = require('upper-case');
http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    /*Use our upper-case module to upper case a string:*/
    res.write(uc("Hello World!"));
    res.end();
}).listen(8080);
