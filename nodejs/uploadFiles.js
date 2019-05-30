var http = require('http');
var formidable = require('formidable');
var fs = require('fs');

http.createServer(function (req, res) {
    if (req.url == '/fileupload') {
        var form = new formidable.IncomingForm();
        form.parse(req, function (err, fields, files) {
            var oldpath = files.filetoupload.path;
            var newpath = 'C:/Users/mumye/' + files.filetoupload.name;
            fs.rename(oldpath, newpath, function (err) {
                if (err) throw err;
                res.write('File uploaded and moved!');
                res.end();
            });
        });
    } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
        res.write('<input type="file" name="filetoupload"><br>');
        res.write('<input type="submit">');
        res.write('</form>');
        return res.end();
    }
}).listen(8080);
/**
 * 업로드 필드를 지닌 html폼 생성
 */
// res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
//   res.write('<input type="file" name="filetoupload"><br>');
//   res.write('<input type="submit">');
//   res.write('</form>');
//   return res.end();
// }).listen(8080);
/**
 * 다운받은 formidable 모듈을 작성하고
 * 서버에 도착한 파일을 파서 할수 있게 한다.
 * 파일이 업로드되고 파서되면 컴퓨터의 템프 폴더에 저장
 */
// var http = require('http');
// var formidable = require('formidable');

// http.createServer(function (req, res) {
//     if (req.url == '/fileupload') {
//         var form = new formidable.IncomingForm();
//         form.parse(req, function (err, fields, files) {
//             res.write('File uploaded');
//             res.end();
//         });
//     } else {
//         res.writeHead(200, { 'Content-Type': 'text/html' });
//         res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
//         res.write('<input type="file" name="filetoupload"><br>');
//         res.write('<input type="submit">');
//         res.write('</form>');
//         return res.end();
//     }
// }).listen(8080); 
/**
 * parse 함수의 3번째 값에 디렉토리 경로가 있고
 * filesystem 모듈로 file의 이름을 바꿔주면 된다.
 */
// var http = require('http');
// var formidable = require('formidable');
// var fs = require('fs');

// http.createServer(function (req, res) {
//     if (req.url == '/fileupload') {
//         var form = new formidable.IncomingForm();
//         form.parse(req, function (err, fields, files) {
//             var oldpath = files.filetoupload.path;
//             var newpath = 'C:/Users/Your Name/' + files.filetoupload.name;
//             fs.rename(oldpath, newpath, function (err) {
//                 if (err) throw err;
//                 res.write('File uploaded and moved!');
//                 res.end();
//             });
//         });
//     } else {
//         res.writeHead(200, { 'Content-Type': 'text/html' });
//         res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
//         res.write('<input type="file" name="filetoupload"><br>');
//         res.write('<input type="submit">');
//         res.write('</form>');
//         return res.end();
//     }
// }).listen(8080); 