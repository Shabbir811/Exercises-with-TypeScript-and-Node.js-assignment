//creating an array mode of transportation
let modeOfTrans: string[] = ["motorcycle","sportcar","fighterjet","farrari"]
// print a series of statements about mode of transpotstion
let statement: string = ("I would like to own a ");
//print statements about mode of transpotstion to all mode of transpotstion 
for( let val of modeOfTrans){
    console.log(statement+ val);
}