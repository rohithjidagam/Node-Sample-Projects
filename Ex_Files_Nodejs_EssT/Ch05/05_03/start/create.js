var fs = require('fs');

var md = `

Sample MArkdowm Title
=====================

sample Subtitle
----------------

*point
*point
*point

`;

fs.writeFile("sample.md", md.trim(), function(err) {

	console.log("File Created");
});