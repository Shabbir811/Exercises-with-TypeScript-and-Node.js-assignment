//Tests for equality and inequality with strings
console.log("\nequality and inequality with strings");
let earth = "earth";
console.log(`is earth === earth ?i predict True`);
    console.log(earth === "earth");
console.log(`is earth === arth ?i predict False`);
    console.log(earth == "arth"  );    
console.log("\nTests using the lower case function");

console.log(`is earth !== EARTH   ?i predict True`);
    console.log(earth !== earth.toUpperCase());
console.log(`is earth !== earth ?i predict False`);
    console.log(earth !== earth.toLowerCase()  );   

//Numerical tests
console.log("\n• Numerical tests");
console.log(`is 3+4 == 7  ?i predict True`);
    console.log(3+4 == 7);
console.log(`is 3+4 == 8  ?i predict False`);
    console.log(3+4 == 8);
console.log(`is 10 > 7  ?i predict True`);
        console.log(10 > 7);
console.log(`is 10 < 8  ?i predict False`);
        console.log(10 < 8);
console.log(`is 4 =>  3?i predict True`);

 //Tests using "and" and "or" operators
console.log("\n/Tests using 'and' and 'or' operators");
 let a = 5;
 let b = 4;
 let c = a-1;
console.log(`is b == 4 && c == b ?i predict True`);
    console.log(b == 4 && c == b);
console.log(`is b == c && c > a ?i predict False`);
    console.log(b == 4 && c > b);
console.log(`is b < a || c == a ?i predict True`);
    console.log(b < a || c == a);
console.log(`is b == 5 || c > a ?i predict False`);
    console.log(b == 5 || c > a);

//Test whether an item is in a array;
console.log("\nTest whether an item is in a array");
    let fruits: string[]= ["apple","banana","orange"]

console.log(`is apple in fruits ?i predict True`);
    console.log(fruits.includes("apple"));

//Test whether an item is not in a array;
console.log("\nTest whether an item is not in a array");
console.log(`is  grapes in fruits ?i predict False`);
    console.log(fruits.includes("grapes"));