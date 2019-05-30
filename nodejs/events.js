/**
 * 컴퓨터로 하는 일은 모두 이벤트이다.
 * 연결이 되거나, 파일을 열거나.
 * nodejs의 객체는 이벤트를 시작할수 있다.
 * 아래처럼 readStram 파일을 열거나 닫을때
 * 이벤트를 발생시킨다.
 */
var fs = require('fs');

var readStream = fs.createReadStream('./demofile1.html');

/*Write to the console when the file is opened:*/
readStream.on('open', function () {
  console.log('The file is open');
});

/**
 * 이벤트 모듈
 * 기본 모듈이며
 * 자체적인 이벤트에서 생성 fire? 응답대기 할수있다
 * 모든 이벤트 속성과 함수는 eventemitter 객체의
 * 인스턴스 이다.
 * 속성과 함수에 접근하려면
 * eventemitter 객체를 생성해야 한다.
 */
var events = require('events');
var eventEmitter = new events.EventEmitter();

//이벤트 핸들러 생성
var myEventHandler = function () {
  console.log('I hear a scream!');
}

//이벤트 핸들러를 이벤트에 지정
eventEmitter.on('scream', myEventHandler);

//스크림 이벤트 시작
eventEmitter.emit('scream');
