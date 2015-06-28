var apiResult = require('./API.js');
var Firebase = require("firebase");
var maps = require('./IdMaps.js');

module.exports = {

saveData: function(data, category) {

	// http://www.npr.org/player/embed/[STORY_ID]/[AUDIO_ID]
	// STORY_ID = data.list.story[STORY_INDEX].id
	// AUDIO_ID = data.list.story[STORY_INDEX].audio[AUDIO_INDEX].id

    var fbRef = new Firebase('https://npr-platypus.firebaseio.com/');

	var stringBeginning = 'http://www.npr.org/player/embed/'

	var stories = data.list.story.map(function(story) {
		var result = {};
		if (story.audio && story.audio[0]) {
			var storyStr = story.id;
			var audioStr = story.audio[0].id;
			result.embedLink = (stringBeginning + storyStr + '/' + audioStr);
		}
		result.title = story.title.$text
		result.topic = data.list.title.$text;
		// for (i = 3; i < data.list.story.length; ++i ) {
			
		// 	console.log(data.list.story[i])
		// }
			

		// // if (story.thumbnail.medium.$text) {
		// // 	result.thumbnail = story.thumbnail.medium.$text }
		// // if (story.storyDate.$text) {
		// // 	result.storyDate = story.storyDate.$text }
		// // if (story.show.program.$text) {
		// // 	result.showName = story.show.program.$text }
		// story.keywords = story.keywords;
		//console.log(result);
		if (result.embedLink) {
			// console.log(result)
			return result
		}
	}).filter( function(story) {
		return story !== undefined;
	});


// 	fbRef.authAnonymously(function(error, embedString) {
// 		if (error) {
// 			console.log("Login Failed!", error);
// 		} else {
// 			console.log('hey', category);
// 		    fbRef.child(category).set(stories);
// 		    console.log("Authenticated successfully with payload:", embedString);
// 		}
// 		
// 	})
}
}