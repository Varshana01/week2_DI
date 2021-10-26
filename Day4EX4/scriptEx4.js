// //exercise XP 1
// //Part I
// function infoAboutMe() {
// 		console.log("I like to watch movies.")
// }
// infoAboutMe()
// //Part II & III
// function infoAboutPerson(personName, personAge, personFavoriteColor, personHobbies) {
// 	console.log("Your name is "+ personName + ". You are "+ personAge + "years old "+". Your favorite color is "+ personFavoriteColor )
//   for (var i = 0; i < personHobbies.length; i++) {
//   	console.log(personHobbies[i])
//   }
// }
// let arr1=["tennis","painting"]
//  infoAboutPerson("David", 45, "blue",arr1);
// infoAboutPerson("Josh", 12, "yellow", ["videoGame", "hanging out with friends", "playing cards"]);

// //exercise XP 2
// let age = prompt("Enter your age");
// age = Number(age);
// checkDriverAge();

// function checkDriverAge(age) {
// 	if (age<18) {
// 	alert("Sorry, you are too young to drive this car. Powering off");
// }
// else if (age == 18) {
// 	alert("Congratulations on your first year of driving. Enjoy the ride!");
// }
// else {
// 	alert("Powering On. Enjoy the ride!");
// }
// }


// //exercise XP3
// function checkNumber() {
// 	for (var i =0; i <=100; i++) {
// 		if (i %2==0){
// 			console.log(i+" number is even")
// 		}
// 	else{
// 		console.log(i+" number is odd")
// 	}
// 	}
// }
// checkNumber()

// //exercise XP4
// let bill = prompt("Enter amount of bill")
// bill=Number(bill);

// function billTip(bill) {
// 	if(bill< 50){
// 		return bill+(bill*0.2)

// 	}
// 	else if(bill>=50 && bill <= 200){
// 		return bill+(bill*0.15)
// 	}
// 	else if(bill>200){
// 		return bill+(bill*0.1)
// 	}
// 	else{
// 		return (bill)
// 	}

// }
// let res=billTip(bill);

// console.log("Total amount is "+ res )

// //exercise XP5
// function isDivisible() {     //this does the pushing
// 	let arr=[]
// 	for (var i =0; i <=500; i++){
// 		if(i%23 == 0){
// 			arr.push(i)
// 		}

// 	}
// 	return calculateNum(arr)
// }

// function calculateNum(arr){        //this does the calculation
// 	console.log(arr);
// 	let number=0
// 	for ( var j = 0; j<arr.length; j++){
// 		number=number + arr[j]
// 	}
// 	return number;
// }
//
// console.log(isDivisible())
//
// // console.log(calculateNum([1,2,3,4]))

// //exercise XP6
// let amazonBasket = {
//     glasses: 1,
//     books: 2,
//     floss: 100
// }
// let item = prompt("Enter your item")

// function checkBasket(basket,itemItem) {
// 	for(i in basket){
// 		if (i== itemItem){
// 			return true;
// 		}
// 	}
// 	return false;
// }
// let a=checkBasket(amazonBasket,item)
// if(a){
// 	console.log("exists")
// }
// else{
// 	console.log("not exists")
// }

// //exercise XP7
// let stock = { 
//     "banana": 6, 
//     "apple": 0,
//     "pear": 12,
//     "orange": 32,
//     "blueberry":1
// }  

// let prices = {    
//     "banana": 4, 
//     "apple": 2, 
//     "pear": 1,
//     "orange": 1.5,
//     "blueberry":10
// } 

// shoppingList=["banana","orange","apple"];
// function myBill() {
// 	let sum=0
// 	for(let i=0; i<shoppingList.length; i++){
// 		let itemexist= checkBasket(shoppingList[i])

// 		if(itemexist){
// 			if (stock[shoppingList[i]] > 0){
// 				stock [shoppingList[i]] = stock[shoppingList[i]]-1
// 			}
// 			sum += prices[shoppingList[i]]
// 		}
// 	}
// 	console.log(stock)
// 	return sum
// }
// function checkBasket(item) {

// 	for(i in stock){
// 		//console.log(i,item)
// 		if (i== item){
// 			return true;
// 		}
// 	}
// 	return false;
// }
// console.log(myBill())

// //exercise XP8
// function changeEnough(itemPrice, change) {
//
// 	for(i in change){
// 		if (i>=itemPrice){
// 			return true;
// 		}
// 	}
// 	return false;
// }
// function myBill() {
//  	let sum=0
//  	for(let i=0; i<changeEnough.length; i++){
//  			sum += change
//  			return sum
//  	}
//
// 	changeEnough(4.25, [25, 20, 5, 0])
//
// 	changeEnough()

// //exercise XP9
// let nights = prompt("How many nights will you be spending?")
// nights=Number(nights);
// console.log(nights);

// function hotelCost() {
// 	if(nights == 0 || nights == undefined){
// 		prompt("How many nights will you be spending?")
// 	}
// 	else{
// 		let sum=nights*140
// 		console.log("$" + sum)
// 	}
// 	return hotelCost
// }
// hotelCost()

// let destination = prompt("Where is your destination?")
// console.log(destination);
// function planeRideCost() {
// 	if(destination =="London"){
// 		let sum=nights*183
// 		console.log("$" + sum)
// 		return sum
// 	}
// 	else if(destination == "Paris"){
// 		let sum=nights*220
// 		console.log("$" + sum)
// 		return sum
// 	}
// 	else if (destination==0 || destination==undefined){
// 		prompt("Where is your destination?");
// 	}
// 	else{
// 		let sum=nights*300
// 		console.log("$" + sum)
// 		return sum
// 	}
// 	return planeRideCost
// }
// planeRideCost()

// let carCost = prompt("Number of days for renting a car?");
// carCost=Number(carCost);
// console.log(carCost)
// function rentalCarCost(){
// 	if(carCost>10){
// 		let sum= carCost*20
// 		console.log(sum);
// 	}
// 		else if(carCost>0 && carCost<=10){
// 			let sum = carCost*40
// 		console.log(sum)
// 		return sum 	 
// 	 }
// 	else{
// 		prompt("Number of days for renting a car?");
// 	}
// 	return rentalCarCost
// }
// rentalCarCost()


// function totalVacationCost(){
// 	let hotelCost = hotelCost();
// 	let planeRideCost = planeRideCost();
// 	let rentalCarCost = rentalCarCost();
// 	return rentalCarCost + planeRideCost + hotelCost;
// }

// let totalCost = totalVacationCost();
// console.log(totalCost)


// // XP Gold 1
// function stringBlank(){
// 	if ()
// }

// //DAILY CHALLENGE
// let str = 'Hello, World, in, a, frame';

// //get the largest length of a word in array
// function getLength(arr){
// 	let len = 0;
// 	for (var i = 0; i < arr.length; i++) {
// 		if(arr[i].length > len){
// 			len = arr[i].length;
// 		}
// 	}
// 	return len;
// }

// //calculate the spaces after a word
// function calcSpaces(word, len) {
// 	return len - word.length;
// }

// function wrapWords(param) {
// 	//split words into array
// 	let words = param.split(", ");
// 	//get the largest word;
// 	let largest_len = getLength(words);
// 	//print the first line 
// 	console.log("*".repeat(largest_len+4));

// 	for(let i=0; i<words.length; i++){
// 		//get spaces after word
// 		let spaces = calcSpaces(words[i],largest_len);
// 		 console.log('* '+ words[i]+' '.repeat(spaces) +' *');
		
// 	}

// 	//print the last line
// 	console.log("*".repeat(largest_len+4));

// }

// wrapWords(str);