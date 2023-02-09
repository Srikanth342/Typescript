console.log("Time to get started...");

`What is Typescript

TypeScript is a super set of JavaScript.
TypeScript builds on top of JavaScript. First, you write the TypeScript code. 
Then, you compile the TypeScript code into plain JavaScript code using a TypeScript compiler.
Once you have the plain JavaScript code, you can deploy it to any environments that JavaScript runs.
TypeScript uses the JavaScript syntaxes and adds additional syntaxes for supporting Types.`;

// function add(n1, n2) {
//   return n1 + n2;
// }

// let num1 = "2";
// let num2 = 3;

// console.log(add(num1, num2));

// Typescript way
function add(n1: number, n2: number) {
  return n1 + n2;
}
let num1 = 2;
let num2 = 3;

console.log(add(num1, num2));

//Core Types
`Typescript provides many types. some of the core types we work with
in JavaScript and Typescript, is number string and boolean types.`;

`number type
In JavaScript, and the same is true for Typescript,there is only one number type.
There is no special type for integers or floats.
Instead, these values here, would all be numbers. {1,9.5,-10} all this are numbers
`;

`string type
 The string data type, and that would be text, {'hi',"Hi"} the other way is backticks
`;

`boolean type
The TypeScript boolean type allows two values: true and false. It’s one of the primitive types in TypeScript. For example:
`;
