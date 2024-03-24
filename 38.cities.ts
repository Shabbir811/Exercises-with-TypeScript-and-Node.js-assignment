// Write a function called describe_city() that accepts the name of a city and its country.  country a default value.
function describe_city(city: string, country: string = "pakistan"){

// he function should print a simple sentence, such as Karachi is in Pakistan.
         console.log(`${city} is in ${country}.`)
}

// Call your function for three different cities, at least one of which is not in the default country
describe_city("karachi")
describe_city("lahore")
describe_city("london", "england")