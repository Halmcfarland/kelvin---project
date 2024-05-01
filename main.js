// Temperature forecast in Kelvin
const kelvin = 293;

// Temperature forecast in Celsius
var celsius = kelvin - 273;

// Temperature forecast in Fahrenheit
var fahrenheit = celsius * (9/5) + 32;

// Round Fahrenhiet temperature
fahrenheit = Math.floor(fahrenheit);

// Temperature forecast in Newton
var newton = celsius * (33/100); 

// Round Newton temperature
newton = Math.floor(newton); 

console.log(`The temperature is ${kelvin} degrees Kelvin.`
);
console.log(`The temperature is ${celsius} degrees Celsius.`
);
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`
);
console.log(`The temperature is ${newton} degrees Newton.`
);
