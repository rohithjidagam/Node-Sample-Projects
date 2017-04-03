var readLine = require('readline');

var rl = readLine.createInterface(process.stdin, process.stdout);

var realPerson = {
	name: '',
	sayings:[]
};

rl.question("Name", function(ans){

	realPerson.name = ans;
	rl.setPrompt(`what would ${realPerson.name} say ?`);
	rl.prompt();
	rl.on('line', function(say){
		realPerson.sayings.push(say.trim());
		if(say.toLowerCase().trim() === 'exit'){
			rl.close();
		}else{
		rl.setPrompt(`What else would ${realPerson.name} say? 
			('exit' to leave)`);
		rl.prompt();
	}
	});
});

rl.on('close', function(){
	console.log("%s says %j",realPerson.name,realPerson.sayings);
	process.exit();
});