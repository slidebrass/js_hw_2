//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

for (let i = 0; i < Object.keys(person3).length; i++) {
        console.log(Object.keys(person3)[i])
};

//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype
function Person(name, age) {
    this.name = name;
    this.age = age;

    // Use an arrow to create the printInfo method
    this.printInfo = () => {
        console.log(`${this.name} is ${this.age} years old.`);
    };

    // Create another arrow function for the addAge method that takes a single parameter
    this.addAge = (age_jump = 1) => {
        this.age += age_jump;
    };
};

// Creating 2 instances of the prototype
let human1 = new Person('John', 27);
let human2 = new Person('Katie', 32);

// Calling the prototype methods
human1.printInfo();
human2.printInfo();

// Adding to the age 
human2.addAge();
human2.addAge();
human2.addAge();

// Calling prototype method again with older 'Katie'
human2.printInfo();





// =============Exercise #3 ============//
/*

    Create a Promise based function that will check a string to determine if it's 
    length is greater than 10.
    If the length is greater than ten, console log "Big word". 
    If the length of the string is less than 10, console log "Small Number".
*/

const greaterTen = (string) => {
    return new Promise( (resolve, reject) => {
        if (string.length > 10) {
            resolve(true)
        } else {
            reject(false)
        }
    })
};


greaterTen('expeditious')
.then( (result) => {
    console.log('Big word')
})
.catch( (error) => {
    console.log('Small Number')
})

// Codewars old problem

/*
    Your task is to make two functions ( max and min, or maximum and minimum, etc., 
    depending on the language ) that receive a list of integers as input, and return 
    the largest and lowest number in that list, respectively.
*/

var min = function(list){
    return Math.min.apply(null, list);
}

var max = function(list){
    return Math.max.apply(null, list);
}

// Codewars new problem

/*
    Complete the method that takes a boolean value and return a "Yes" string for 
    true, or a "No" string for false.
*/

function boolToWord( bool ){
    if ( bool == true) {
      return "Yes"
    } else {
      return "No"
    }
};