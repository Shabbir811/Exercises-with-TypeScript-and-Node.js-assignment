 //  Make a array that store name of magician.
 const magicians: string[] = ["herry potter", "kaala jaduger", "samari jaduger"]

// Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
function show_magician(magician:string[]){
    magicians.forEach(magician=>{
        console.log(magician);
    })
}
// call function that show each magician's name
show_magician(magicians)
