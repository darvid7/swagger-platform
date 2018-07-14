# Ramping up
This doc exists to help people ramp up to the code base and the stuff it uses.

## Destructuring
When used with objects, can unpack values 
```
var coffee = {expresso: 2, milk: "almond"};
var { expresso, milk } = coffee;
console.log(expresso); // 2
console.log(milk); // almond
```
Can also assign them to new variables.
```
var coffee = {expresso: 2, milk: "almond"};
var { expresso: e, milk: m } = coffee;
console.log(e); // 2
console.log(m); // almond
```
Read more [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)

## Importing
`require()` references the value of `module.exports` for a file.

## Exporting 

```
export internalFunction = function() {
	...
}
```