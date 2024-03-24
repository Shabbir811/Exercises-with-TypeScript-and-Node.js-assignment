
// Modify the make_shirt() function so that shirts are large by default with a message
function make_shirt(size = "large", message = "i love typescript"){
    console.log(`The size of the shirt is ${size} and the message is ${message}`)
}
// Make a large shirt
make_shirt();

//make a medium shirt with the default message
make_shirt("mediunm");

//a shirt of any size with a different message
make_shirt("small", "i love myself")