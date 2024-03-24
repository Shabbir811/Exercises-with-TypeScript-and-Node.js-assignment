// Store the numbers 1 through 9 in a array.
let ordinal: number[]=[1,2,3,4,5,6,7,8,9,]

//Loop through the array.
for (const value of ordinal) {
    if(value == 1){
        console.log(`1st`)
    }else if(value == 2){
        console.log(`2nd`)
    }else if(value == 3){
        console.log(`3rd`)
    }else{
        console.log(`${value}th`)
    }
}