function convertToCelsius(x) {
    return (x - 32) * 5/9;
}

function convertToFahrenheit(x) {
    return (x * (9/5)) + 32
}

console.log(convertToCelsius(32));
console.log(convertToFahrenheit(0));