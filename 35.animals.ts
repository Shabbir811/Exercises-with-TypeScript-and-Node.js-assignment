//Store the names of these animals in a array. then
   let animals: string[] = ["cat","dog","horse"]

// use a for loop to print out the name of each animal.
    for(let animal of animals){
        console.log(animal);
    }

 //Modify your program to print a statement about each animal.
    for(let animal of animals){
     console.log(`A ${animal} would make a great pet.`);
    }
    
// print a sentence such as Any of these animals would make a great pet!
console.log ("Any of these animals would make a great pet!")