

// Make a array of magician’s names
 let magicians: string[] = ["herry potter", "kaala jaduger", "samari jaduger"]


   //creating a function that modifies the array of magicians by adding the phrase the Great to each magician’s name.
   function make_great(magicians: string[]) {
        for(let i=0; i<magicians.length; i++){
            magicians[i] ="THE GREAT " + magicians[i] 
        }
    } 
   

//creating a function called show_magicians(), which prints the name of each magician in the modified array.

function show_magician(magicians: string[]){
    magicians.forEach(value => {
        console.log(value);
    });
}


//call function which modifies the array of magicians by adding the phrase the Great to each magician’s name.
     make_great(magicians);
    // Call show_magicians() to see that the list has actually been modified.
     show_magician(magicians);
  