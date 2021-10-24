//exercises 1
/*let x = 1;
let y = 15;

if (x>y){
	console.log("x is the biggest number");
}

else if (x<y){
    console.log("y is the biggest number");
}
else if (x==y){
	console.log("They are the same");
}

else{
	console.log("Error");
}



//exercises 2
let newDog = "Chihuahua";
let n = newDog.length;
 console.log(n);

 console.log(newDog.toUpperCase());
 console.log(newDog.toLowerCase());

 if (newDog=="Chihuahua"){
 	console.log("I love Chihuahuas, it’s my favorite dog breed");
 }
 else{
 	console.log("I dont care, I prefer cats");
 }
 
 

 //exercise 3

 let number = prompt("write any number");

 if (number%2 == 0){
 	console.log("x is an even number");
 }

 else if (!(number%2 == 0)){
 	console.log("x is an odd number");
 }
 else{
 	console.log("Error");
 }


 //exercise 4
 let users = ["Lea123", "Princess45", "cat&doglovers", "helooo@000", "world123"]
 let numUser = users.length;
 console.log(numUser);

if (numUser==0){
	console.log ("no one is online");
}

else if(numUser==1){
	console.log(users[0]+" is online. ");
}

else if(numUser==2){
	console.log(users[0] +" and "+ users[1] +" are online.");

}

else if(numUser>2){
	console.log(users[0] +" and "+ users[1] +" and "+(numUser-2)+" more is online.");

}




//gold exercies 1

let language = prompt ("What language do you speak?");
console.log(language.toLowerCase());

if (language=="french"){
	alert("Bonjour");
}
 else if (language=="english"){
 	alert("Hello");
 }
 else if(language=="hebrew"){
 	alert("Shalom");
 }
 else{
 	alert("01110011 01101111 01110010 01110010 01111001");
 }
 
 let language = prompt ("What language do you speak?");
console.log(language.toLowerCase());

switch(language.toLowerCase()){
 case "french":
	alert("Bonjour");
	break;
case "english":
	alert("Hello");
	break;
case "hebrew":
	alert("Shalom");
	break;
default:
  alert("01110011 01101111 01110010 01110010 01111001");
}

 //gold exercise 2

 let marks = prompt ("Type the Grade you got");
 console.log(Number(marks));
 	marks=Number(marks);

 if (marks>90){
 	console.log("A");
 }

 else if (marks>=80 && marks <=90){
 	console.log("B");
 }

 else if(marks >=70 && marks <=80){
 	console.log("C");
 }

 else if (marks <70){
 	console.log("D");
 }

else{
	console.log("U");
}


//gold exercise 3

let str = prompt ("Type a verb");

if(str.length >= 3){
    if(!str.endsWith('ing')){
        str = str + 'ing';
    }
    else if(str.endsWith('ing')){
        str = str + 'ly'
    }
}
console.log(str)


//Daily Challenge

let sentence ="The movie is not that bad, I like it";

let wordNot = sentence.indexOf("not");
console.log(wordNot);

let wordBad = sentence.indexOf("bad");
console.log(wordBad);

let arr = sentence.split("");
console.log(arr)
if(wordNot < wordBad && wordNot != -1 && wordBad != -1){
    arr.splice(wordNot, wordBad-wordNot+3, "good");
    console.log(arr);
    sentence=arr.join("");
}

console.log(sentence);

*/