var ques = [
	"Name",
	"Hobby",
	"First Car"
];

var ans = [];

function ask(i){
	process.stdout.write(`\n\n\n ${ques[i]}`);
	process.stdout.write("  >  ");
}

process.stdin.on('data', function(data){
	/*process.stdout.write('\n'+ data.toString().trim() + '\n'); */
	ans.push(data.toString().trim());
	if(ans.length < ques.length){
		ask(ans.length);
	} else{
		process.exit();
	}
});

process.on('exit', function (argument) {
	process.stdout.write("\n\n\n");
	process.stdout.write(`Go ${ans[1]} ${ans[0]} finish ${ans[2]}`);
	process.stdout.write("\n\n\n");
});

ask(0);
