1. 🎖Write a function named calculateDogAge that:
  * [ ] Takes 1 argument: your puppy's age.
  * [ ] Calculates your dog's age based on the conversion rate of 1 human year to 7 dog years.
  * [ ] Outputs the result to the screen like so: "Your doggie is NN years old in dog years!"
  * [ ] Add an additional argument to the function that takes the conversion rate of human to dog years.

```js
// your code goes here
function calculateDogAge (dogAge, convRate) {
  dogYears = dogAge * convRate;
  return(`Your doggie is ${dogYears} years old in dog years! The rate of conversion is 1 human year = 7 dog years.`);
}
calculateDogAge (8, 7);


```
2. 🎖Write a function named calculateSupply that:
  * [ ] takes 2 arguments: age, amount per day.
  * [ ] calculates the amount consumed for rest of the life (based on a constant max age).
  * [ ] outputs the result to the screen like so: "You will need NN to last you until the ripe old age of X"
  * [ ] Accept floating point values for amount per day, and round the result to a round number.

```js
// your code goes here
function calculateSupply (age, amountPerDay) {
  const maxAge = 70;
  var supplyTillAge = (maxAge - age) * amountPerDay * 365;
  return (`You will need ${supplyTillAge} to last you until the ripe old age of ${maxAge}.`);
}
calculateSupply(26, 3);

```
3. 🎖Create a function called celsiusToFahrenheit:
  * [ ] Store a celsius temperature into a variable.
  * [ ] Convert it to fahrenheit and output "NN°C is NN°F".
  * [ ] Create a function called fahrenheitToCelsius:
  * [ ] Now store a fahrenheit temperature into a variable.
  * [ ] Convert it to celsius and output "NN°F is NN°C."

```js
// your code goes here

function celsiusToFahrenheit (celcius = 0) {
  let fahrenheit = (celcius * 9/5) + 32;
  return (`${celcius}°C is ${fahrenheit}°F`)
}
celsiusToFahrenheit(0);

function fahrenheitToCelsius (fahrenheit) {
  let modifiedFahernheit = fahrenheit - 32;
  let celcius = modifiedFahernheit * 0.556;
  return (`${fahrenheit}°F is ${celcius}°C`)
}
fahrenheitToCelsius(32);

```
4. 🎖The function below returns true if the parameter age is greater than 18. Otherwise it asks for a confirmation and returns its result:

```js
function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm("Did parents allow you?");
  }
}
```
  4.1 🎖Convert the above function using ternary operator.
  ```js
  // your code goes here

var checkAge = (age) => (age > 18) ? true : "Did your parents allow you?";

  ```
  4.2 🎖Convert the above function using `||` operator.
  ```js
  // your code goes here
function checkAge(age) {
  return age > 18 || confirm("Did parents allow you?");
}
  ```
Will the function work differently if else is removed like below?

```js
function checkAge(age) {
  if (age > 18) {
    return true;
  }
  // ...
  return confirm("Did parents allow you?");
}
// The function will not work differently. Else looks for the statement to be executed. When (else) is not present it directly returns the value after comparing it with the (if) condition.
```
Is there any difference in the behavior of these two variants? If there is what is that?


5. 🎖 Write a function pow(x,n) that returns x in power n.

  * [ ] Use prompt to take values for x and n, and then shows the result of pow(x,n) using alert.
  * [ ] In this task the function should support only natural values of n: integers greater then 1.

```js
// Your code goes here

let x = Number ( prompt("Enter the number") );
let n = Number ( prompt("Enter the power") );

function pow(x,n) {
  if (x >= 1 && n >= 1) {
    res = x ** n;
    alert(res);
  } else {
    alert("The number below 1 is not allowed");
  }
}
// After writing code uncomment to check the answer.
// pow(3, 2); // 9
// pow(3, 3); // 27
// pow(1, 100); // 1
// pow(-31, 2); // "The number below 1 is not allowed"

6. 🎖Write a program that asks the user for a number n and gives them the possibility to choose between computing the sum and computing the product of 1,…,n. Return the result accordingly.



```js
`
// your code goes here

function sumProduct () {
  let n = Number ( prompt("Enter the last number") );
  let choice = prompt("Enter operation choice: 'S' for Sum or 'P' for Product");
  
  if (choice == "S") {
    let sumRes = ( n * (n + 1)/2);
    alert(`${sumRes}`);
  } else if (choice == "P"){
    for (let i = 1; i < n; i++) {
      let res = (i*i);
      alert(`${res}`);
    }
  }
  else {
    return "Invalid option";
  }
}

```
6. 🎖Write a program that asks the user for a number n using prompt and prints the sum of the numbers 1 to n

```js
// your code goes here
function sumOfNumbers () {
  let n = Number ( prompt("Enter the last number") );
  let res = ( n * (n + 1)/2);
    return res;
}
```
7. 🎖Modify the previous program such that only multiples of 5 or 7 are considered in the sum, e.g. n = 20 (5,7,10,14,15,20) 71

```js
// your code goes here

function multipleOfFive() { 
  var n = Number ( prompt("Enter number: ", 0) ); 
  var res = 0; 
  for(var i = 1; i <= n; i++) { 
    if(i%5 == 0 || i%7 == 0) 
    res += i; 
    } 
    alert(res); 
}
```

8. 🎖Write a function `min` that takes two arguments and returns their minimum.

```js
// Your code here.
function min(a, b) {
  if(a > b) {
    return b; 
  }
  return a;
}
var min = (a, b) => a > b? b : a;

console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10
```