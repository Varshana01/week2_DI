

function playTheGame() {
		let answer = confirm("Do you want to play?");
		console.log(answer);
	if(answer == false){
		alert("No problem, Goodbye")
		return
	}
	else {
		// let userNumber=prompt("Enter a number between 0 and 10")
		// userNumber=Number(userNumber)
		let randomNumber = Math.floor(Math.random()*10);

		let chances =0;
		while(chances<3){
			let userNumber=prompt("Enter a number between 0 and 10")
			userNumber=Number(userNumber)

			let good= chooseNum ( userNumber, randomNumber);
				if(good ){
					let game = test(userNumber,randomNumber)
					if(game ){
						chances = 3
						return
					}
					
					console.log(userNumber,randomNumber)
					chances++// = chances+ 1
				}
			
	    }
	}
}
playTheGame()


function chooseNum(numNum, randomNumber){
	 if(numNum>=0 && numNum <=10){
			return true;
		}

	else if(numNum<0 && numNum >10){
			alert("Sorry it’s not a good number, Goodbye")
			return false;

		}
	else{ //not a number
			alert("Sorry Not a number, Goodbye")
			return false;
		}
	
}




function test(userNumber,computerNumber){

	
	if(userNumber == computerNumber){
		alert ("Winner");
		return true
	}
	 else if(userNumber> computerNumber){
		prompt("Your number is bigger then the computer’s, guess again")
		return false
		// let number=prompt("Enter a number between 0 and 10")
		// number=Number(number)
		// chooseNum(number)
	}
	 else if(userNumber<computerNumber){
		prompt("Your number is smaller then the computer’s, guess again")
		return false
		// let number=prompt("Enter a number between 0 and 10")
		// number=Number(number)
		// chooseNum(number)
	}
	else{
		console.log("Loser")
		return false
	}
			
	
	// if(chances >= 3){
	// 	alert("no more chances")
	// 	return
	// }
	
} 






