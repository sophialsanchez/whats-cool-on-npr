var myFirebaseRef = new Firebase("https://npr-platypus.firebaseio.com/");

var media = "news";
var category = "art";
var subCategory = "architecture";

myFirebaseRef.child(media).child(category).child(subCategory).once("value", function(snapshot) {
	var numChildren = snapshot.numChildren();
	var randInt = Math.floor((Math.random() * numChildren));
	var i = 0;
	myFirebaseRef.child(media).child(category).child(subCategory).on("child_added", function(snapshot) {
		if(i == randInt) {
			console.log(snapshot.val());
  			appendContent(snapshot.val().embedLink);
  		}
  		i++;
  	});
});

	$('#submit').on('click', function() {
		$('.row').css('display', 'block');
	});



