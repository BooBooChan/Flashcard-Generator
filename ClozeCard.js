var inquirer = require("inquirer");
//module.exports = ClozeCard;
//Make sure all running functions are printed properly onto console.
function Cloze(text, cloze){
	this.text = text; //text applies to any text in the card, not just whatever text remains after cloze deletion.
	this.cloze = cloze; //cloze is "cloze deletion", text which will be removed from the flashcard until "Back", the answer, is shown.
	//For your partial function, create condition such that cloze deletion on the FRONT (see BasicCard.js) side is concealed.
	
	this.frontToBack = function(){
		if(Front){
			this.partial = function(){
				this.cloze.hide();
				this.print = function(){
					console.log(this.partial);
				};//end this.print
			};//end this.partial
		}else if (Back){
			this.fullText = function(){
				//this.cloze.show()
				console.log(error);
			this.print = function(){
			console.log(this.fullText);
			};//end this.fullText
		};//end else clause
	};//end this.frontToBack function
};//end Cloze function
var me = new Cloze("My name is Bridget.","Bridget");
var bro = new Cloze("My brother's name is Patrick, but he likes everyone to call him Rory.", "Patrick, but he likes everyone to call him Rory");

console.log("It works!");}
