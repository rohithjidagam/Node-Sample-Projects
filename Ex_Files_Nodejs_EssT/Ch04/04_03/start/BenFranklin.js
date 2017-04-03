var EventEmitter = require('events').EventEmitter;


/*var emitter = new events.EventEmitter();

emitter.on('custom', function(msg, status) {
	console.log(`${status}: ${msg}`);
});

emitter.emit('custom', "Hello World!!", 200); */

var util = require('util');

var Person = function(name){
	this.name = name;
};

util.inherits(Person, EventEmitter);

var ben = new Person("Rohith");

ben.on('speaks', function(said){
	console.log(`${this.name}: ${said}`);
});

ben.emit('speaks', "Coding Node JS..");