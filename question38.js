function describe_city(nameOfCity, Country) {
    if (Country === void 0) { Country = "Pakistan"; }
    return "".concat(nameOfCity, " is in ").concat(Country);
}
;
// 4 cities name with where they situated
var city1 = describe_city("Karachi");
var city2 = describe_city("Multan");
var city3 = describe_city("Islamabad");
var city4 = describe_city("Peshawar");
// ptint
console.log(city1);
console.log(city2);
console.log(city3);
console.log(city4);
