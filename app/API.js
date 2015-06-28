var http = require('http');
var username = 'nprplatypus';
var password = 'nprplatypus';
var apiKey = 'MDE5NzA1OTg2MDE0MzU0NTMzOTU3NDUwZg001';

var firebase = require('./FirebaseTest.js')



/**
 * HOW TO Make an HTTP Call - GET
 */
// options for GET
var optionsget = {
    host : 'api.npr.org', // here only the domain name
    // (no http/https !)
    path : '/query?id=1014&dateType=story&output=JSON&apiKey=MDE5MjQ0NTk1MDE0MzIyNTgxMjJlMjBhNA001',
// the rest of the url with parameters if needed
    method : 'GET' // do GET
};
 
console.info('Options prepared:');
console.info(optionsget);
console.info('Do the GET call');
 
// do the GET request
var reqGet = http.request(optionsget, function(res) {
    
    console.log("statusCode: ", res.statusCode);
    // uncomment it for header details
//  console.log("headers: ", res.headers);
 
    var reqData = ""
    res.setEncoding('utf8');
    res.on('data', function(chunk){

      reqData = (reqData + chunk)

    });

    res.on('end', function(){

      reqData = JSON.parse(reqData)
      // console.log(reqData)
      firebase.saveData(reqData);


    });
    

});
 
reqGet.end();
reqGet.on('error', function(e) {
    console.error(e);
});
