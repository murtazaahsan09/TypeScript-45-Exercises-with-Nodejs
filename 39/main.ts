// Creating a function with parmeters which return a vlues in string  

function city_country(city: string, country: string) : string{
    return `${city} , ${country}`;
}

// Calling a Function and print the returned value
console.log(city_country("Karichi", "Pakistan"));

console.log(city_country("Tokyo", "Japan"));

console.log(city_country("Berlin", "Germany"));