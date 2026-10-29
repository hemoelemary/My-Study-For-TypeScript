# Enums

Enum is a way to define a set of named constants. Enums allow you to define a collection of related values. can be used

enum WeatherConditions {
    Sunny,
    Cloudy,
    Rainy,
    Snowy
}
Weather condition is the name of the enum, and each of the valyes is assignes an automatic numerical value starting from 0

enum Weather{
    Sunny='sunny',
    Cloudy = 'cloudy',
    Rainy = 'rainy'
    Snowy = 'snowy'
}

> Usage :
const current = Weather.Sunny
console.log(`The current weather is ${current}`)