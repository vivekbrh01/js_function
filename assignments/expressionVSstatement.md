# Expression vs Statement

## Write down if the code is valid or not with reason.

1. What is the output or error of the code below.

```js
function add(var a = 0,var b = 0){
  return a + b;
}
add(21, 23);
```
Answer: variable cannot be declared with function.

2. What is the output or error of the code below.

```js
function add(a = 0; b = 0) {
  return a + b;
}
add(21, 23);
```
Answer: The arguments should not be separated using a semicolon. It should be separated by a comma.

3. What is the output or error of the code below.

```js
function add(a = 0, b = 0) {
  return a + b;
}
add(21, 23);
```
Answer: 44

4. What is the output or error of the code below.

```js
function add(a = 0, b) {
  return a + b;
}
add(21);
```
Answer: The program will wait for the value of b to be defined.

5. What is the output or error of the code below.

```js
function add(a = 0, b = 0) {
  return a + b;
}
add(undefined, 21);
```
Answer: It will return NaN as the output.

6. What is the output or error of the code below.

```js
function knowWhy(value) {
  return if(value === 21){
    return "Yes"
  } else {
    return "No"
  }
}
add(211);
```
Answer: The program waits for the value of knowWhy to be defined. Return statement before if statement generates error.

7. What is the output or error of the code below.

```js
function knowWhy(value) {
  return if(value === 21){
    return "Yes"
  } else {
    return "No"
  }
}
add(21);
```
Answer: The program waits for the value of knowWhy to be defined. Return statement before if statement generates error.

8. What is the output or error of the code below.

```js
function isItIf(ifElse) {
  return ifElse;
}
add(if(true){console.log('Testing')});
```
Answer: The if statement is not defined.
