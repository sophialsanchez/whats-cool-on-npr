var myFirebaseRef = new Firebase("https://npr-platypus.firebaseio.com/");

var selection = {};
// var media = "news";
// var category = "art";
// var subCategory = "architecture";



$('[data-group]').each(function() {
	var groupElement = $(this);
	var group = groupElement.attr('data-group');
	
	groupElement.find('button').on('click', function() {
		var buttonElement = $(this);
		var value = buttonElement.attr('data-id');
		
		selection[group] = value;
		
		groupElement.find('button').removeClass('button-selected');
		buttonElement.addClass('button-selected');
	});
});

function getData(selection) {
	var media = selection.media;
	var category = selection.category;
	var subCategory = selection.subCategory;
	
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
			$('.row').css('display', 'block');
		});
	});
}

	$('#submit').on('click', function() {
		console.log(selection);
		var media = selection.media;
		var category = selection.category;
		var subCategory = selection.subCategory;
	
		if (!selection.media) {
			alert('What do you like?');
			return;
		}
		
		if (!selection.category) {
			alert('How would you describe yourself?');
			return;
		}
		
		if (!selection.subCategory) {
			alert('Pick the coolest picture!');
			return;
		}
		
		getData(selection);
	});



