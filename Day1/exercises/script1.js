//exercise 1
let me = ["my","favourite","color","is","blue"];
let m = me.join("");
console.log(m);

//exercise 2
let str1 = "extra";
let str2 = "ordinary";
let str3 = str1.slice(0,1);

console.log  (str3);

let str4 = str2.slice(0,1);

console.log  (str4);

let cit1 = str1.replace(str3, str4);
let cit2 = str2.replace(str4, str3);

console.log (cit1);
console.log (cit2);

let con = cit2.concat(' ',cit1);
console.log(con)


//exercise 3
let num1 = prompt ("please enter a number from 1 to 10");
console.log(num1);

let num2 = prompt ("please enter a number from 10 to 20");
console.log(num2);

alert(Number(num1) + Number(num2));
