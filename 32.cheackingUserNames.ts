// • Make a list of five or more usernames called current_users.
let  current_users: string[] = ["shabbir","saad","junain","usman","abbas"]

// Make another list of five usernames called new_users and one or two of the new usernames are also in the current_users list.
let  new_users: string[] = ["shah","saad","srk","Usman","nadeem"]


//Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.
  new_users.forEach(user => {
    if(current_users.some(curruser=>
        curruser.toLowerCase()===user.toLowerCase()
    )){
        console.log(`${user} will need to enter a new username `)

    }else{
         console.log(`${user} this user name is avaiable`);
         
    }
    
  });
