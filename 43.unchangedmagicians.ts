// Unchanged Magicians: Start with your work from Exercise 40.  . Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name

// Make a array of magician’s names
let magicians: string[] = ["herry potter", "kaala jaduger", "samari jaduger"]

// create a  function which retrun a copy of array
function copy_arry(arry:string[]){
    return [...arry]
}

//creating a function that modifing array with adjective "the great"
function make_great(magicians: string[]) {
     for(let i=0; i<magicians.length; i++){
         magicians[i] ="THE GREAT " + magicians[i] 
     }
 } 


//creating a function called show_magicians(), which prints the name of each magicians  names from a array
function show_magician(magicians: string[]){
 magicians.forEach(value => {
     console.log(value);
 });
}

// let store a function to a variable
let copymagicion:string[]= copy_arry(magicians)

 //show orignal array
 show_magician(magicians);
 
// Call the function make_great() with copy of array
  make_great(copymagicion);
 //show modified array
 show_magician(copymagicion);