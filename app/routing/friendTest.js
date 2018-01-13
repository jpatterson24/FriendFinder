
	// app.post("/api/friends", function(req, res){
	// 	//var userInput = req.body;
	// 	friendData.push(res.body);
	// 	//console.log(res.body);
		
	// 	console.log("this is "+userInput);
	// 	var match = {
	// 				name:"",
	// 				photo:"",
	// 				scoreDifference:""
	// 				}

	// 	var totalDifference;
	// 	//loop over friends array
	// 	for (var i = 0; i < friendData.length; i++) {
	// 		totalDifference=0;
	// 		var currentFriend = friendData[i];
	// 		//loop over current friend score array
			
	// 		for (var j = 0; j < currentFriend.scores.length; j++) {
	// 			var currentScore = currentFriend.scores[j];
	// 			var userScore = userInput.score[j];
	// 			totalDifference+= Math.abs(userScore - currentScore);
	// 		}
	// 		if(totalDifference<match.scoreDifference){
	// 		match = {
	// 				name: currentFriend.name,
	// 				photo: currentFriend.photo,
	// 				scoreDifference: totalDifference
	// 			}
	// 		}
	// 	}
	// 	// console.log(userInput);
	// 	// console.log(currentScore);
	// 	// console.log(userScore);
	// 	//friendData.push(req.body);
	// 	res.json(match);
	// });



	// ===============================================================================
// LOAD DATA
// The following data sources hold arrays of information for friend-data
// ===============================================================================
var friendData = require("../data/friendData");
var path = require("path");

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/friends... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------

  // 	app.get("/api/friendData", function(req, res) {
  //   res.json(friendData);
  // });

  // Basic route that sends the user first to the AJAX Page
	app.get("/", function(req, res) {
	  res.sendFile(path.join(__dirname, "../public/home.html"));
	});

	app.get("/home", function(req, res) {
	  res.sendFile(path.join(__dirname, "../public/home.html"));
	});

	app.get("/survey.html", function(req, res) {
	  res.sendFile(path.join(__dirname, "./public/survey.html"));
	});

	app.get("/", function(req, res) {
	  res.sendFile(path.join(__dirname, "./public/survey.html"));
	});

	app.get("/api/friends", function(req, res) {
	  res.json(friendData);
	});

	

	app.post("/api/friends", function(req, res){
		//var userInput = req.body;
		friendData.push(res.body);
		//console.log(res.body);
		
		console.log("this is "+userInput);
		var match = {
					name:"",
					photo:"",
					scoreDifference:""
					}

		var totalDifference;
		//loop over friends array
		for (var i = 0; i < friendData.length; i++) {
			totalDifference=0;
			var currentFriend = friendData[i];
			//loop over current friend score array
			
			for (var j = 0; j < currentFriend.scores.length; j++) {
				var currentScore = currentFriend.scores[j];
				var userScore = userInput.score[j];
				totalDifference+= Math.abs(userScore - currentScore);
			}
			if(totalDifference<match.scoreDifference){
			match = {
					name: currentFriend.name,
					photo: currentFriend.photo,
					scoreDifference: totalDifference
				}
			}
		}
		// console.log(userInput);
		// console.log(currentScore);
		// console.log(userScore);
		//friendData.push(req.body);
		res.json(match);
	});



	
  };