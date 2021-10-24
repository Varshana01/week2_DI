//exercise1
// let colors=["","Coral","Mint","Blue","Sage Green"];
// for(let i=[1]; i<colors.length; i++){
// 	console.log("My " + i + " # colour is");
// 	console.log( colors[i])
// }

//exercise 2
// let people = ["Greg", "Mary", "Devon", "James"];

// console.log(people);

// people.shift();
// console.log(people);

//  people.splice(2,1,"Jason");
// console.log(people);

// people.push("Princess");
// console.log(people);

// for(let i=[0]; i<people.length; i++){
//    console.log(people[i]);
// }

// for(let i=0; i<people.length; i++){
// 	console.log(people[i]);
//    if (people[i] === "Jason") { 
//       break;
//     }

// }

// console.log(people);

// console.log(people.slice(1, 3));

// console.log(people[0]);

// console.log(people.indexOf("Mary"));

// console.log(people.indexOf("Foo")) //because it does not belong to the array.

// console.log(people);
// let last= people.length-1
// console.log(people[people.length-1])

//exercise 3
// let number = prompt("Write a number.");
// console.log(number);
// number=Number(number)

// while (number<10){
// 		number=prompt("Write a number above 10.")
// 		number=Number(number)

// 	}


// console.log(number);

//exercise 4

// let building = {
//     numberOfFloors : 4,
//     numberOfAptByFloor : {
//         firstFloor : 3,
//         secondFloor : 4,
//         thirdFloor : 9,
//         fourthFloor : 2,
//     },
//     nameOfTenants : ["Sarah", "Dan", "David"],
//     numberOfRoomsAndRent:  {
//         sarah: [3, 990],
//         dan :  [4, 1000],
//         david : [1, 500],
//     },
// }
// console.log(building.numberOfFloors);

// console.log(building.numberOfAptByFloor.firstFloor);
// console.log(building.numberOfAptByFloor.secondFloor);

// console.log(building.nameOfTenants[1]);
// console.log(building.numberOfRoomsAndRent.dan[0])

// if ((building.numberOfRoomsAndRent.sarah[1] + building.numberOfRoomsAndRent.david[1])>building.numberOfRoomsAndRent.dan[1]){
// 	console.log(building.numberOfRoomsAndRent.dan[1]=1200)
// }
// console.log(building)

// //exercise 5
//  let family={parents:["Father","Mother"],
//              siblings:["Sister","Brother"]	
//  }
//  let len=family.length;

//  for(let a=0; a<len; a++){
//    console.log(a);
//  }
//  console.log(family);
// console.log(family.parents);
// console.log(family.siblings);
//
// //exercise 6
// let details = {
//   my: 'name',
//   is: 'Rudolf',
//   the: 'raindeer'
// }

// let txt = "";
// for (let x in details){
//     console.log(txt += details + details[x] + " ");
//   }
//
//
// //exercise 7
// let names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
// console.log(names.sort())
// let naMe = names.toString()
// let arr = naMe.split("");
// console.log(arr);
// arr.splice(1,6);
// arr.splice(2,7);
// arr.splice(3,4);
// arr.splice(4,4);
// arr.splice(5,6);
// arr.splice(6,7);
// console.log(arr);
// naMe=arr.join("");
// console.log(naMe);
//
//
 // //exercises Gold XP 1
 // let numbers = [123, 8409, 100053, 333333333, 7]

 // for (  i = 0 ; i<numbers.length ; i++){
 //  if ( i %3 == 0){
 //      console.log('true');
 //  }
 //  else {
 //     console.log (' false');
 //  }
 // }
//
// //exercises Gold XP 2
// let guestList = {
//   randy: "Germany",
//   karla: "France",
//   wendy: "Japan",
//   norman: "England",
//   sam: "Argentina"
// }
// let name = prompt ("Please enter your name.");
// console.log(name);

// if (name in guestList){
//     console.log("Hi! I'm " + name +", and I'm from "+ guestList[name]+ ". ");
// }
//
// //exercises Gold XP 3
// let age = [20,5,12,43,98,55];
// let sum = 0
// for(let i=0; i<age.length; i++){
//     sum+=age[i];
// }
// console.log(sum)

// let least = 0;
// age.forEach((element) => {
//   if (least < element) {
//     least = element;
//   }
// });

// console.log({least});


// //DAILY CHALLENGE : Stars
// //using only 1 loop:
// let arr=["*"]
// let s = "";
// for (i = 1; i <= 6; ++i) {
//     s += arr;
//     console.log(s)
// }

// // using two nested for loops
// let arr=["*"]
// let s = "";

//     // outer loop
//     for (let i = 1; i <= 6; ++i) {
//         s += arr;
//       // inner loop to print the patterns
//       for (let j = 1; j <= i; ++j) {
//         console.log(j + arr);
//       }
//     }
//
//
//DAILY CHALLENGE GOLD : Bubble sort
const numbers = [5,0,9,1,7,4,2,6,3,8];
console.log(numbers.toString())
let a = numbers.join("+");
console.log(a);
let b = numbers.join("");
console.log(b);
let c = numbers.join("_");
console.log(c);
let d = numbers.join("&");
console.log(d);
