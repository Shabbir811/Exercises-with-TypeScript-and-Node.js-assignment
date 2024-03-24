//Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:
let car = 'subaru'; 

// five true predictions
//test no. 1
console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'subaru');

// test no. 2
 console.log("Is car != 'bus'? I predict True.")
console.log(car != 'bus');

// test no. 3
 console.log("Is car !== '123'? I predict True.")
console.log(car !== '123');

// test no. 4
console.log("Is car > 'cycle'? I predict True.")
console.log(car > 'cycle');

// test no. 5
console.log("Is car[4] == 'r'? I predict true.");
console.log(car[4] == 'r');


//five false predictions

//test no. 6
console.log("Is car == 'subaru'? I predict false.");
console.log(car != 'subaru');

//test no. 7
console.log("Is car == 'suberu'? I predict false.");
console.log(car == 'suberu');

//test no. 8
console.log("Is car[3] == 'r'? I predict false.");
console.log(car[3] == 'r');

//test no. 9
console.log("Is car.length == '7'? I predict false.");
console.log(car.length == 7);

//test no. 10
console.log("Is car == 'SUBARU'? I predict false.");
console.log(car == 'SUBARU');