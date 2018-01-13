// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3001;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
// app.get("/", function(req, res) {
//   res.sendFile(path.join(__dirname, "./public/home.html"));
// });

app.get("/survey.html", function(req, res) {
  res.sendFile(path.join(__dirname, "./public/survey.html"));
});

require("./routing/apiRoutes")(app);
require("./routing/htmlRoutes")(app);


// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
