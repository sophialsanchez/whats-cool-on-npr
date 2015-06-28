var myFirebaseRef = new Firebase("https://npr-platypus.firebaseio.com/");

<!-- User preferences - test example -->
var media = "music";
var popularity = "unique";
var pic = "politics";

myFirebaseRef.child("articles").once("value", function(snapshot) {
	var numChildren = snapshot.numChildren();
	var randInt = Math.floor((Math.random() * numChildren));
	var i = 0;
	myFirebaseRef.child("articles").on("child_added", function(snapshot) {
		if(i == randInt) {
  			appendContent(snapshot.val());
  		}
  		i++;
  	});
});

	





