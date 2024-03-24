// make a guest list to the array
let guest_list: string[] =["shoaib","junaid","saad"] 

//store a message to a variable
let message: string = ("I'm inviting you to my dinner event tonight.  ") 

// //  print a invintion message to all guest which store in  the array 
// for(let val of guest_list){
//     console.log(`dear ${val} ,\n\n  ${message} \n\n thankyou \n\n`); 
// }

//store ex_guest name in variable
let ex_guest: string = "junaid"; 

//add a new_guest name in variable
let new_guest: string = "rehaan";  

//remove 1 guest name and add new one
guest_list.splice(1, 1, new_guest); 

// //print a  new set of invintion message to all guest which store in the array 
// for(let val of guest_list){
//     console.log(`dear ${val},\n\n  ${message} \n\n thankyou \n\n`);
// }  


//start question 16 here///////////////////////////////////////

//informing people that we found a bigger dinner table.
console.log("\n\nGOOD NEWS! we found a large table for our dinner please all of you must come\n\n"); 

 //add one new guest to the end of  array
guest_list.push("shahnawaz");

// • Add one new guest to the beginning of array.
guest_list.unshift("asif"); 

// • Add one new guest to the middle of array
guest_list.splice(2, 0, "abbas");  


// Print a new set of invitation messages, one for each person in your list.
guest_list.forEach(guest => {
    console.log(`dear ${guest},\n\n  ${message} \n\n thankyou \n\n`);
})  
