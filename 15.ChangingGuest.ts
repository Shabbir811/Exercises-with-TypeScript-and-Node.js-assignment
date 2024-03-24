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

//print a  new set of invintion message to all guest which store in the array 
for(let val of guest_list){
    console.log(`dear ${val},\n\n  ${message} \n\n thankyou \n\n`);
}  


console.log(`mr. ${ex_guest} is not coming at dinner`);  //print message to  guest who can’t make it.