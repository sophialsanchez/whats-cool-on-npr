var myFirebaseRef = new Firebase("https://npr-platypus.firebaseio.com/");

var selection = {};


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
	console.log(media, category, subCategory);
	
	var ref = myFirebaseRef.child(media).child(category);
	if (subCategory) {
		ref = ref.child(subCategory);
	}
	
	ref.once("value", function(snapshot) {
		var numChildren = snapshot.numChildren();
		var randInt = Math.floor((Math.random() * numChildren));
		var i = 0;
		ref.on("child_added", function(snapshot) {
			if(i == randInt) {
				appendContent(snapshot.val().embedLink);
			}
			i++;
			$('.row').css('display', 'block');
		});
	});
}

	$('#submit').on('click', function() {
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

		
		getData({
			media: pick_media(media),
			category: pick_category(media, category),
			subCategory: pick_subCategory(media, category, subCategory)
		});
	});

function pick_media(media) {
	if (media == "down"){
		var randInt = Math.floor((Math.random() * 2));
		console.log(randInt);
		if (randInt == 0){
			return "news";
		}
		else{
			return "music";
		}
	}
	else{
		return media;
	}
}

function pick_category(media, category){
	if (media == "music"){
		switch(category){
			case "art":
				category = "jazz";
				break;
			case "business":
				category = "latin";
				break;
			case "entertainment":
				category = "pop";
				break;
			case "health":
				category = "jazz";
				break;
			case "politics":
				category = "rock";
				break;
			case "science":
				category = "world";
				break;
		}
	}
	else {
		return category;
	}
	return category;
}

function pick_subCategory(media, category, subCategory){
	if (media == 'music') {
		return null;
	}
	else {
		switch(category)
	}
	return subCategory;

}
