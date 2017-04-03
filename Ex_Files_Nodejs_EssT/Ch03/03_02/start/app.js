/*console.log(process.argv); */

function grab(flag){
	var index = process.argv.indexOf(flag)
	return (index === -1) ? null : process.argv[index+1];
}

var greet = grab('--greet');
var user = grab('--user');


if(!user || !greet){
	console.log("Empty...");
} else{
	console.log(`Welcome ${user}, ${greet}`);
}