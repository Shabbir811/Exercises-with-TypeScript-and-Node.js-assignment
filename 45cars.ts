// Write a function that stores information about a car in a Object The function should always receive a manufacturer and a model name.
function mkcar(manufaturer:string, model:string, ...features:{[key:string]:any}[]): // then accept an arbitrary number of keyword arguments.
object{
     const carinfo = {
        manufaturer,
        model,
        ...Object.assign({},...features)  //Object.assign()function is make a copy of  a reset param object to a emty object  
     }
     return carinfo;  
};

// Call the function with the required information and two other name-value pairs, such as a color or an optional feature.
let car = mkcar("toyota","t8",{color:"blue"},{feature:"selfDrive"}) //store the function to a variable.

console.log(car) // Print the Object