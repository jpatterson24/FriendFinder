// ===============================================================================
// DEPENDENCIES
// path package to get the correct file path for our html
// ===============================================================================
var path = require("path");


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // HTML GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases the user is shown an HTML page of content of the
  // home page or survey page.
  // ---------------------------------------------------------------------------

// Basic route that sends the user first to the Home Page
	app.get("/", function(req, res) {
	  res.sendFile(path.join(__dirname, "./public/home.html"));
	});
//Second route that sends the user to the Survey Page
	app.get("/survey.html", function(req, res) {
	  res.sendFile(path.join(__dirname, "./public/survey.html"));
	});


// If no matching route is found default to Home
  	app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "./public/home.html"));
  });

}