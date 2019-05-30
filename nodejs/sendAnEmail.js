/**
 * nodemailer module
 * 컴퓨터에서 메일을 보내게 해줌
 */
var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'mumyeongkim@gmail.com',
        pass: 'alclsgoogle!8'
    }
});

var mailOptions = {
    from: 'mumyeongkim@gmail.com',
    to: 'kimkj1212@naver.com',
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
};

transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
});
/**
 * 여러사람에게 보낼때
 */
// var mailOptions = {
//     from: 'youremail@gmail.com',
//     to: 'myfriend@yahoo.com, myotherfriend@yahoo.com',
//     subject: 'Sending Email using Node.js',
//     text: 'That was easy!'
// } 
/**
 * html을 보낼수도 있다.
 */
// var mailOptions = {
//     from: 'youremail@gmail.com',
//     to: 'myfriend@yahoo.com',
//     subject: 'Sending Email using Node.js',
//     html: '<h1>Welcome</h1><p>That was easy!</p>'
// } 