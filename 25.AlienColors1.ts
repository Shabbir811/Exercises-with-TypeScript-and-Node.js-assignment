// Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
let alien_color: string = "green"

//Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points.
if(alien_color == "green"){
    console.log("you have earned '5' points");
}

//Write one version of this program that passes the if test and another that fails. 
alien_color = "yellow"; 

if(alien_color == "green"){
    console.log("you have earned '5' points");
}
