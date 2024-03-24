//Make a array that includes at least three peoples
let guest_list: string[] =["shoiab","junaid","saad"]

// store a message in variable 
let message: string = ("I'm inviting you to my dinner event tonight.") 

// use your array to print a message to each person, inviting them to dinner.
for(let val of guest_list){
    console.log(`dear mr.`+ val +`,\n\n ${message}\n\n thankyou\n\n`);
}
