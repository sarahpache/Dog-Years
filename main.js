<script>

//setting the variable to my age

var myAge=35;

console.log('My Age', myAge)

// creating variable early years, this will change

var earlyYears = 2;

console.log('Early Years', earlyYears)

// multiply earlyYears by 10.5 and reassigning Early years

earlyYears *= 10.5

console.log('Early Years * 10.5', earlyYears)

// subtract 2 from my age

myAge = myAge - 2;

console.log('My Age - 2', myAge)

// create a new variable for later years (myAge-2)

var laterYears = myAge;

console.log('Later Years',laterYears);

// Multiply later yeras by 4 to calculate # of dog years

laterYears = laterYears * 4

console.log('Revised Later Years',laterYears);

// Add early years and later years together

var myAgeInDogYears = earlyYears + laterYears

console.log('My Age in Dog Years',myAgeInDogYears);

// Creating a variable for my name, changing it to all lower case
var myName = 'Sarah'
var lowercase_Name = myName.toLowerCase()
myName = lowercase_Name

console.log('My Name',myName);

//full sentence
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`)


</script>

