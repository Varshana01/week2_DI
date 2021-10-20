// "use strict" //telling the browser you want the modern javascript language

//variable
// var message;
// message = 10;
//let message = "helloo";  //another way of writing
//let user = "Varsh";
//let email = "varsh@gmail.com";

//message = "bye"
//console.log(message,user,email);

//const COLOR_RED = "red";



// console.log("hello from script file");
// alert("How are you");


//Javascript types
/*number

let num1 = 10;
let num2 = 5;
console.log(num1 / num2); 


string

let mes1 = "hello";
let user = "john";
console.log(mes1+user)

let mes1 = "15"
let user = "4"
console.log(mes1+user)


 boolean:
 
 let isGreater="true"
 let isLess="false"
 isLess = true
 undefined

 let und;
 console.log(und)

nul

let a =null;
console.log(a)
*/
 

//prompt

/*let result = prompt ("please enter a number from 1 to 10", "6")
console.log(result)
*/

//confirm

/*let answer = confirm("are you happy with javascript?")
console.log(answer);*/

//conversion
//convert number to string
/*let num = 10;
let num2 = 5;
console.log(typeof num);
//console.log(num + num2);


/*let numtxt = String(num);
let numtxt2 = String(num2);
console.log(numtxt + numtxt2);*/

/*num = String(num);
console.log(typeof num);

/*
num2 = String(num2);
console.log(num + num2)

*/
//convert string to number
//let num3 = "10";
/*num3 = Number(num3);

Boolean(0) //false
Boolean(1) //true*/

//% : 5%2 - remainder is 1
// % is used when you want only the remainder when dividing
//** : 2**3 = 8 - ** is the same as ^


/* String
+ // "10" + "hello" = "10hello"
 // "5" + "5" = "55"
 // 1 + "10" + 0 = "1100"
*/

/*let x = 0;
x++; //answer will be 1
x--; //answer will be 0
console.log(x);

let x = 0;
console.log(++x);

let counter = 1
console.log(2 * ++counter); //4
console.log(2 * counter++); //2


//ARRAY : box which stores diiferent data at once
let arr = [10,5,20];
arr[0]=8 //replaces index 0 from 10 to 8
console.log(arr)
arr[3]=50 // pushes 50 into the array as the 3rd index
console.log(arr)
//console.log(arr[0]); //10
//console.log(arr[2]); //5

let arr2 = ["Apple","Orange","Plum"];

let arr3 = ["Apple",5,true];

let arr4 = [30, 
	["Apple", "Orange"],
	false
];
//console.log(arr4[1][1])

console.log(fruits.toString())//converts to string
let f = fruits.join($%)//joins the words by $% instead of space */



// Array Methods

// var fruits = ["Banana", "Orange", "Apple", "Mango"];
// // // fruits.toString();
// console.log(fruits);
// console.log(fruits.toString());

// var fruits = ["Banana", "Orange", "Apple", "Mango"];
// let f = fruits.join();
// console.log(f);
//
//
// var fruits = ["Banana", "Orange", "Apple", "Mango"];
// // Removes the last element ("Mango") from fruits
// let mango = fruits.pop();
// console.log(fruits);
// console.log(mango);

// //
// // var fruits = ["Banana", "Orange", "Apple", "Mango"];
// var x = fruits.pop();
// console.log(x);    // the value of x is "Mango"
// console.log(fruits);

//
// var fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.push("Kiwi");
// console.log(fruits);
//  Adds a new element ("Kiwi") to fruits

// console.log(fruits.length);
//
// var fruits = ["Banana", "Orange", "Apple", "Mango"];
// var x = fruits.push("Kiwi");   //  the value of x is 5
// console.log(x);
//
// var fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.shift();
// console.log(fruits);
// // Removes the first element "Banana" from fruits
//
// var fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.unshift("Lemon");    // Adds a new element "Lemon" to fruits
// console.log(fruits);
//
// var fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.unshift("Lemon");    // Returns 5
//
// var fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits[0] = "Kiwi";        // Changes the first element of fruits to "Kiwi"
//
// var fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits[fruits.length] = "Kiwi";          // Appends "Kiwi" to fruits
// console.log(fruits.length);
//
// var myGirls = ["Cecilie", "Lone"];
// var myBoys = ["Emil", "Tobias", "Linus"];
// var myChildren = myGirls.concat(myBoys);
// console.log(myChildren);  // Concatenates (joins) myGirls and myBoys
//
// var arr1 = ["Cecilie", "Lone"];
// var arr2 = ["Emil", "Tobias", "Linus"];
// var arr3 = ["Robin", "Morgan"];
// let arr4 = arr1.concat(arr2, arr3);
// console.log(arr4);  // Concatenates arr1 with arr2 and arr3
//
// var arr1 = ["Cecilie", "Lone"];
// var myChildren = arr1.concat(["Emil", "Tobias", "Linus"]);
//
// var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// var citrus = fruits.slice(3);
// console.log(citrus);
//
// var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// var citrus = fruits.slice(3);
// console.log(citrus);

// var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// var citrus = fruits.slice(1, 3);
// console.log(citrus);
//
// var fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.toString();
// // Strings method
// var txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// var a = txt.length;
// console.log(a);
//
// //
// var str = "Please locate where 'locate' occurs!";
// var pos = str.indexOf("locate");
// // //
// console.log(pos);
// //
// var str = "Please locate where 'locate' occurs! 'locate'";
// var pos = str.lastIndexOf("locate");
// console.log(pos);
// // //
// // var str = "Please locate where 'locate' occurs!";
// // var pos = str.indexOf("locate);
// // //
// var str = "Please locate where 'locate' occurs!";
// var pos = str.search("locate");
// console.log(pos);
// // // slice(start, end)
// // // substring(start, end)
// // // substr(start, length)
// // //
// var str = "Apple, Banana, Kiwi";
// var res = str.slice(7, 16);
// console.log(res);
//
// var str = "Apple, Banana, Kiwi";
// var res = str.slice(-12, -6);
// // //
// // // var res = str.slice(7);
// // // var res = str.slice(-12);
// // //
// var str = "Apple, Banana, Kiwi";
// var res = str.substring(7, 13);
// // var res = str.substring(7);
// console.log(res);
//
// var str = "Apple, Banana, Kiwi";
// var res = str.substr(5,7);
// var res = str.substr(-4);
// console.log(res);
//
// var str = "Please visit Microsoft!";
// var n = str.replace("Microsoft", "Developers Institute");
// var n = str.replace("MICROSOFT", "Developers Institute");
// console.log(n);
// // //
// var text1 = "Hello World!";       // String
// var text2 = text1.toUpperCase();
// var text2 = text1.toLowerCase();
// console.log(text2);
//
// var text1 = "Hello";
// var text2 = "World";
// var text4 = "FAin";
// var text3 = text1.concat(text1, text2, text4);
// console.log(text3);
// //
// var str = "       Hello World!        ";
// // str = str.trim();
// str = str.trimEnd();
// console.log(str);
// //
// var str = "HELLO WORLD";
// str.charAt(0);
//
// // //
// var str = "HELLO WORLD";
// str.charCodeAt(0)
// console.log(str.charCodeAt(0));
// // //
// var str = "HELLO WORLD";
// str[0];
// //
// //
// console.log();
1:39
Number Methods

toString()

var x = 123;
x.toString();            // returns 123 from variable x
(123).toString();        // returns 123 from literal 123
(100 + 23).toString();   // returns 123 from expression 100 + 23


toFixed()
var x = 9.656;
x.toFixed(0);           // returns 10
x.toFixed(2);           // returns 9.66
x.toFixed(4);           // returns 9.6560
x.toFixed(6);           // returns 9.656000

toPrecision()
var x = 9.656;
x.toPrecision();        // returns 9.656
x.toPrecision(2);       // returns 9.7
x.toPrecision(4);       // returns 9.656
x.toPrecision(6);       // returns 9.65600


Number()
parseInt()
parseFloat()

Number()	Returns a number, converted from its argument.
parseFloat()	Parses its argument and returns a floating point number
parseInt()	Parses its argument and returns an integer

Number(true);          // returns 1
Number(false);         // returns 0
Number("10");          // returns 10
Number("  10");        // returns 10
Number("10  ");        // returns 10
Number(" 10  ");       // returns 10
Number("10.33");       // returns 10.33
Number("10,330");       // returns NaN
Number("10 33");       // returns NaN
Number("John");        // returns NaN

parseInt("10");         // returns 10
parseInt("10.33");      // returns 10
parseInt("10 20 30");   // returns 10
parseInt("10 years");   // returns 10
parseInt("years 10");   // returns NaN

parseFloat("10");        // returns 10
parseFloat("10.33");     // returns 10.33
parseFloat("10 20 30");  // returns 10
parseFloat("10 years");  // returns 10
parseFloat("years 10");  // returns NaN