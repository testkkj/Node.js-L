/**
 * file system module
 * 파일시스템모듈로 파일 서버를 만들 수 있다.
 */
/**
 * 파일 읽기
 */
var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {
    //서버에서 파일을 열고 내용을 읽어 온다.
    fs.readFile('demofile1.html', function (err, data) {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        return res.end();
    });
}).listen(8080);
/**
 * 파일 생성
 * 파일시스템 모듈 안에 포함된
 * 파일 생성 모듈
 * fs.appendFile()
 * fs.open()
 * fs.writeFile()
 */
/**
 * 파일이 없다면 새로 생성
 */
var fs = require('fs');

//mynewfile1.txt라는 헬로월드를 내용으로 가진 파일 생성
fs.appendFile('mynewfile1.txt', 'Hello content!', function (err) {
    if (err) throw err;
    console.log('Saved!');
});
/**
 * 파일이 없다면 생성하고
 * fs.open() 함수의 두번째 아규먼트는
 * 사용방식을 의미 아래의 함수에서는
 * w = wirting(쓰기)
 */
var fs = require('fs');

//mynewfile2.txt라는 빈 파일 생성
fs.open('mynewfile2.txt', 'w', function (err, file) {
    if (err) throw err;
    console.log('Saved!');
});

var fs = require('fs');
/**
 * 파일이 있다면 덮어쓰고
 * 없다면 내용을 받아서 새로 만듬
 */
//mynewfile3.txt라는 헬로월드를 내용으로 가진 파일 생성
fs.writeFile('mynewfile3.txt', 'Hello content!', function (err) {
    if (err) throw err;
    console.log('Saved!');
});

/**
 * 업데이트 모듈
 * fs.appendFile()
 * fs.writeFile()
 * 생성 모듈이기도 하다.
 */
var fs = require('fs');

//지정된 파일의 끝에 포함된 내용을 더한다.
fs.appendFile('mynewfile1.txt', ' This is my text.', function (err) {
    if (err) throw err;
    console.log('Updated!');
});

var fs = require('fs');

//주어진 내용으로 파일을 덮어쓴다.
fs.writeFile('mynewfile3.txt', 'This is my text.', function (err) {
    if (err) throw err;
    console.log('Replaced!');
});

var fs = require('fs');

//주어진 파일을 지운다.
fs.unlink('mynewfile2.txt', function (err) {
    if (err) throw err;
    console.log('File deleted!');
});

var fs = require('fs');

//존재하는 파일의 이름을 주어진 이름으로 변경
fs.rename('mynewfile1.txt', 'myrenamedfile.txt', function (err) {
    if (err) throw err;
    console.log('File Renamed!');
});
