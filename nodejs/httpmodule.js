/**
 * nodejs엔 HTTP 빌트인 모듈이 있다.
 */
/**
 * HTTP모듈로 HTTP 서버를 만들수 있다.
 */
var http = require('http');
var url = require('url');

//서버 객체 생성:
http.createServer(function (req, res) {
    //http 헤더 추가
    res.writeHead(200, { 'Content-Type': 'text/html' });
    var q = url.parse(req.url, true).query;
    var txt = q.year + " " + q.month;
    res.write('Hello World!'); //클라이언트에게 할 응답 작성
    res.write(req.url); //요청한 url을 표시(8080/부분 이후)
    res.end(txt); //응답 종료
}).listen(8080); //8080 포트를 통해 서버 객체 요청확인
/**
 * 8080포트를 통해 접속하려하면
 * http.createServer() 함수로 전달된 함수가 작동
 */
/**
 * http 서버로 부터 응답이 html로 표시되길 원하면
 * 올바른 콘텐트 타입의 http 헤더를 포함해야 함.
 * res.writeHead(200,{'Content-Type':'text/html'});
 * 첫번째 값 200은 상태 코드 이며 뜻은 all is ok(모두괜찮다는뜻?)
 * 두번째 값은 헤더 응답값을 가진 객체.
 */
