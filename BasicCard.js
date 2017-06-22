var inquirer = require("inquirer");
module.exports = BasicCard
function Flashcard(front,back){
	this.front = function(question){
		inquirer.prompt([
			{type:"input", name:"earthShape", message:"What solid shape is the planet Earth?", choices:["cube", "sphere", "pyramid", "cone"]},
			{type:"input", name:"solarSystem", message:"How many planets are in the solar system?", choice:["5", "9", "7", "8"]},
			{type:"input", name:"comet", message:"What are comets made of?", choice:["rock", "dust", "ice", "all of the above"]},
			{type:"input", name:"sunProximity", message:"Which planet is closest to the sun?", choice:["Earth", "Mars", "Mercury", "Venus"]},
			{type:"input", name:"blackHole", message:"Where do black holes come from?", choice:["stars", "The abyss", "center of a galaxy", "gravity"]}
		]).then(this.back = function(answers){
			var guess = new Flashcard(answers.earthShape, answers.solarSystem, answers.comet, answers.sunProximity, answers.blackHole);
			function correctAnswer{
				var correctEarthShape = question.earthShape.choices[1];
				var correctsolarSystem = question.solarSystem.choice[3];
				var correctComet = question.comet.choice[3];
				var correctSunProximity = question.sunProximity.choice[2];
				var correctBlackHole = question.blackHole.choice[0];
				if(answers.earthShape === correctEarthShape){
					console.log("Correct! Nice job!");
				}else{
					console.log("Incorrect! The correct answer is" + correctEarthShape + ".");
				};
				if(answers.solarSystem === correctSolarSystem){
					console.log("Correct! Nice job!");
				}else{
					console.log("Incorrect! The correct answer is" + correctSolarSystem + ".");
				};
				if(answers.comet === correctComet){
					console.log("Correct! Nice job!");
				}else{
					console.log("Incorrect! The correct answer is" + correctComet + ".");
				};
				if(answers.sunProximity === correctSunProximity){
					console.log("Correct! Nice job!");
				}else{
					console.log("Incorrect! The correct answer is" + correctSunProximity + ".");
				};
				if(answers.blackHole === correctBlackHole){
					console.log("Correct! Nice job!");
				}else{
					console.log("Incorrect! The correct answer is" + correctBlackHole + ".");
				};
			};//end correctAnswer function
		});//end prompt
	};//end this.front function

	
	if(this.front){

	};

	var name = new this.front
	console.log("");
};