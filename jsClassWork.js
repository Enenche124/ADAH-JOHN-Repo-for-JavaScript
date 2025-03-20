//QUESTION ONE

const book = {title: "The Great Gatsby", author: "F.Scott Fitzgerald", yearPublished: 1925};

const {title, author} = book;

console.log(`${title} by ${author}.`);


//QUESTION TWO


const car = {make: "Toyota", model: "Camry", year: 2021};
const taskTwo = function(cars){

	for(let properties in cars){

console.log(`${properties} : ${cars[properties]}`);
}

}

taskTwo(car);



//QUESTION THREE

const counter = {
  count: 2,
  step: 4,

  increment: function() {
    console.log(this)
    return this.count += this.step;
  }
};


 

counter.increment();
console.log(counter.count); 




//QUESTION FOUR


const person = {

firstName: "John",
lastName:  "Adah",

fullName(){
let myName = person.firstName + " " + person.lastName;

return myName;
}

};

console.log(person.fullName());






//QUESTION FIVE


const personData = {
firstName: "John",
lastName:  "Adah",
age:     22,



};

const personObject = function(personData){

return `First Name: ${personData.firstName}, Last Name: ${personData.lastName}, Age: ${personData.age}.`;


}



console.log(personObject(personData));

