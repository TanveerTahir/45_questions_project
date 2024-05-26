function describe_city(nameOfCity: string, Country: string = "Pakistan"){
    return `${nameOfCity} is in ${Country}`
};

// 4 cities name with where they situated
let city1 : string = describe_city("Karachi");
let city2 : string = describe_city("Multan");
let city3 : string = describe_city("Islamabad");
let city4 : string = describe_city("Peshawar");

// ptint
console.log(city1)
console.log(city2);
console.log(city3);
console.log(city4);
 