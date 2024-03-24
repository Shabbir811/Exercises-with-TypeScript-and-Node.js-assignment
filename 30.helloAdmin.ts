//Make a array of five or more usernames including the name 'admin'
let users:string[]= ["shoaib", "abbas", "rehaan","admin","junaid"]

// Loop through the array, and print a greeting to each user If the username is 'admin', print a special greeting,  print a generic greeting
users.forEach(user => {
        if(user == "admin"){
            console.log(`Hello ${users[3]} , would you like to see a status report?`);
            
        }else{
            console.log(`Hello ${user}, thank you for logging in again.`);
            
        }   
});