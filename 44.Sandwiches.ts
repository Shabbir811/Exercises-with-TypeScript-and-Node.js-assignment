//Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides
function makeSandwich(...items/*(... spread opraters)*/:string[]) {
    console.log("Making a sandwich with the following items: " + items.join(", "));
  }
  
  //Call the function three times, using a different number of arguments each time.
  makeSandwich("egg", "ketchup", "tomato");
  makeSandwich("bread", "cheese");
  makeSandwich("onion", "chicken", "patato", );
