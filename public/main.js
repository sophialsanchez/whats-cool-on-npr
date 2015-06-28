console.log("It worked!");

var myFirebaseRef = new Firebase("https://npr-platypus.firebaseio.com/");

# User preferences - test example
var media = "music";
var popularity = "unique";
var pic = "politics";

myFirebaseRef.child("article1").on("value", function(snapshot) {
  alert(snapshot.val());  // Alerts "Hello this..."
});
