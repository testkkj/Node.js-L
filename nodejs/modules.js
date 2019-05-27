/**
 * nodejs에서 모듈이란
 * 자바스크립트의 라이브러리와 같다.
 */
/**
 * 빌트인 모듈
 * 추가 설치 없이 사용가능한 모듈
 */
/**
 * 모듈 포함
 * require() 함수 안에 모듈 이름을 적는다.
 */
var http = require('http');
var dt = require('./myfirstmodule');
http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write("The date and time are currently: " + dt.myDateTime());
    res.end('Hello World!');
}).listen(8080);
/**
 * ./ 참조하는 모듈이 현재 파일과 같은 폴더에 있다.
 */