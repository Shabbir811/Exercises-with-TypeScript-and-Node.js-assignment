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


console.log('\n\n\n')//creating some space

// print a message indicating the number of people you are inviting to dinner.
      console.log(`In the end of question fifteen ${guest_list.length} guests in the list`)

//start question 16 here///////////////////////////////////////

//informing people that we found a bigger dinner table.
// console.log("\n\nGOOD NEWS! we found a large table for our dinner please all of you must come\n\n"); 
          

               
 //add one new guest to the end of  array
guest_list.push("shahnawaz");

// • Add one new guest to the beginning of array.
guest_list.unshift("asif"); 

// • Add one new guest to the middle of array
guest_list.splice(2, 0, "abbas");  


// Print a new set of invitation messages, one for each person in your list.
// guest_list.forEach(guest => {
//     console.log(`dear ${guest},\n\n  ${message} \n\n thankyou \n\n`);
// })  



console.log('\n\n\n')//creating some space

// print a message indicating the number of people you are inviting to dinner.
      console.log(`In the end of question sixteen ${guest_list.length} guests in the list`)



/*question 17 start from here: */ ///////////////////////////////////////////

//prints a message saying that i can invite only two people for dinner.
// console.log("\n\n\nBAD NEWS, guys  we just found problem, we invite only two person\n\n\n");  



//Remove guests from list one at a time until only two names remain in array.
// Each time you pop a name from  array, print a message to that person letting them know we’re sorry you can’t invite them to dinner.
 while(guest_list.length> 2){
      let uninvited =  guest_list.pop();
//      console.log(`we really sorry mr. ${uninvited}, we can't able to invite you at dinner`);
 }  
 
//   console.log('\n\n\n')//creating some space

//  // Print a message to  the two peoples which still in  array, letting them know they’re still invited
// for (let i=0; i<guest_list.length; i++){
// console.log(`dear mr. ${guest_list[i]},${message} you stil invited`);
// }  

// Remove the last two names from list, so you have an empty list.
let guestlist = guest_list.splice(0,guest_list.length)



//print emty list
console.log(guest_list) 

  console.log('\n\n\n')//creating some space


// print a message indicating the number of people you are inviting to dinner.
      console.log(`In the end of question seventeen ${guest_list.length} guests in the list`)




