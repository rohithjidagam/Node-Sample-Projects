var express = require('express');
var router = express.Router();

router.get('/speakers',function(req,res){
	var data = req.app.get('appData');
	var pagePhotos = [];
	var pageSpeakers = data.speakers;
	
	data.speakers.forEach(function(item) {
		pagePhotos = pagePhotos.concat(item.artwork);
	});
	res.render('speakers', {
		pageTitle: 'Speakers',
		artwork: pagePhotos,
		pageID: 'speakerList',
		speakers: pageSpeakers
	});
});

router.get('/speakers/:id',function(req,res){
	
	var data = req.app.get('appData');
	var pagePhotos = [];
	var pageSpeakers = [];
	
	data.speakers.forEach(function(item) {
		if(item.shortname == req.params.id){
			pageSpeakers.push(item);
			pagePhotos = pagePhotos.concat(item.artwork);
		}
	});
	res.render('speakers', {
		pageTitle: 'Speakers Info',
		artwork: pagePhotos,
		pageID: 'speakerDetail',
		speakers: pageSpeakers
	});
});

module.exports = router;