//Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

let personname: string = "shabbir";
    
console.log(`name in upercase: ${personname.toUpperCase()}`)  //NAME IN UPERCASE

console.log(`name in lowercase: ${personname.toLowerCase()}`)  //name in lowercase

console.log(`name in titlecase: ${personname.charAt(0).toUpperCase().concat(personname.slice(1).toLowerCase())}`); //Name in titlecase

//console.log(`name in titlecase: ${personname.replace("s" , "S")}`)  //Name in titlecase