//TASK THREE

function isEven(number){
	if(number % 2 === 0){
		return true;
	}else{
		return false;
	}
}

function countVowels(letters){
	let numberOfVowels = 0;
	let vowels = "aeiou";
	for(let count = 0; count < letters.length; count++){
		if(vowels.includes(letters.charAt(count).toLowerCase())){
			numberOfVowels++;
		}
	}
	return numberOfVowels;
}

function convertToFahrenheit(temperature){
	let fahrenheit = temperature * 9/5 + 32;
	
	return fahrenheit;
}


function calculateArea(width, height){
	
	 return height * width;
	

}

function isLeapYear(year){
	if(year % 4 === 0 || year % 400 === 0){
		return true;
	}else if(year % 100 === 0){
		return false;
	}else{
		return false;
	}
}

console.log(isLeapYear(2015))
module.exports = {isEven, countVowels, convertToFahrenheit, calculateArea, isLeapYear};