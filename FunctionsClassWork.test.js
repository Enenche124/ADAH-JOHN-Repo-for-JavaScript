const {isEven, countVowels, convertToFahrenheit, calculateArea, isLeapYear} = require("./FunctionClassWork.js");

test("is even", () => {
	let number = 5;
	
	let answer = false;
	let result = isEven(number);
	expect(result).toBe(answer);
	
})

test("return number of vowels", () => {
	let vowels = "aeiou";
	let answer = 5;
	let result = countVowels(vowels);
	expect(result).toBe(answer);
	
	
})

test("return fahrenheit", () =>{
	
	let temperature = 25;
	
	let answer = 77;
	
	let result = convertToFahrenheit(temperature);
	expect(result).toBe(answer);
})

test("return the area of rectange", () => {
	let answer = 8;	
	let result = calculateArea(4, 2);
})

test("check if year is a leap year", () => {
	let answer = false;
	
	let result = isLeapYear(2025);
	expect(result).toEqual(answer);
})