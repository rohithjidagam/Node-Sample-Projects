var path = require('path');

var hello = "Hello from Node JS";

var just = hello.slice(10);

console.log(`Rock on World ${just}`);

console.log(__dirname);

console.log(__filename);

console.log(`Rock on World ${path.basename(__filename)}`);


