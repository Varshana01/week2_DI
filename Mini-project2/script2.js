let num1 = prompt ("Enter a number.")
num1 = Number(num1)
console.log(num1)

let calc = prompt ("How to calculate? : Addition(+),  Substraction(-), Multiplication(*), Division(/) ")
console.log(calc)

let num2 = prompt ("Enter a second number.")
num2 = Number(num2)
console.log(num2)

let number = (num1, calc, num2) => {
	if (calc == "+"){
		alert (num1 + num2);
		return
		console.log (num1 + num2);
	}
	else if (calc == "-"){
		alert (num1 - num2);
		let num3 = num1 - num2
		return
		console.log(num3);
	}
	else if (calc == "*"){
		alert (num1 * num2);
		let num3 = num1 * num2
		return
		console.log(num3);
	}
	else if (calc == "/"){
		alert (num1 / num2);
		let num3 = num1 / num2
		return
		console.log(num3);  
	}
	else{

	}
}
number(num1,calc,num2)
