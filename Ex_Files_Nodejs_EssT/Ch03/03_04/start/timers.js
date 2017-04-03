var waitTime = 3000;
var curTime = 0;
var waitInterval = 10;
var percentWaited = 0;

function writeWaitPercent(p) {
	
	process.stdout.clearLine();
	process.stdout.cursorTo(0);
	process.stdout.write(`waiting...${p}%`);
}

var interval = setInterval(function(){
	curTime+=waitInterval;
	percentWaited = Math.floor((curTime/waitTime) * 100);
	writeWaitPercent(percentWaited);
}, waitInterval);

setTimeout(function(){
	clearInterval(interval);
	writeWaitPercent(100);
	console.log("done");
}, waitTime);

process.stdout.write("\n\n");
writeWaitPercent(percentWaited);