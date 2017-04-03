var Person = require("./lib/Person");

var ben = new Person("Ben Franklin");
var john = new Person("John Wright");

ben.on('speak', function(said) {

	console.log(`${this.name}: ${said}`);

});

john.on('speak', function(said) {

	console.log(`${this.name}: ${said}`);

});


ben.emit('speak', "You may delay, but time will not.");
john.emit('speak', "You may delay, but time will not.");
