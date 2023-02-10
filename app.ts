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
// function add(n1: number, n2: number) {
//   return n1 + n2;
// }
// let num1 = 2;
// let num2 = 3;

// console.log(add(num1, num2));

//What is Type Annotation
`TypeScript uses type annotations to explicitly specify types for identifiers such variables, functions, objects, etc.
TypeScript uses the syntax : type after an identifier as the type annotation, where type can be any valid type.`;

//type annotation example

// let firstName: string = "Srikanth";
// firstName = 1;
// firstName = false;

// let counter;
// counter = 1;

// let counter: number = 1;
// counter = "Hello";
// counter = false;

//type inference

`Type inference describes where and how TypeScript infers types when you don’t explicitly annotate them.`;
// let counter = 0;
// counter = "srikanth";

//Core Types
// number
// string
// boolean
// object
// Array
// Tuple
// Enum
// Any
// Void
// Never
// Union
// Type alias

`Typescript provides many types. some of the core types we work with
in JavaScript and Typescript, is number string and boolean types.`;

`number type
In JavaScript, and the same is true for Typescript,there is only one number type.
There is no special type for integers or floats.
Instead, these values here, would all be numbers. {1,9.5,-10} all this are numbers
`;

// let counter = 5;
// const age = 2;

`string type
 The string data type, and that would be text, {'hi',"Hi"} the other way is backticks
`;

// let firstName: string = "Srikanth";
// firstName = 1;
// firstName = false;

`boolean type
The TypeScript boolean type allows two values: true and false. It’s one of the primitive types in TypeScript. For example:
`;

// let active = true;
// let active:boolean = true;

//object type
`In TypeScript, an object type refers to a type that represents a set of key-value pairs, where each key is a string and each value is of a specific type.`;

// let employee: object;

// employee = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 25,
//   jobTitle: "Web Developer",
// };

// console.log("employee", employee.age);

// let employee = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 25,
//   jobTitle: "Web Developer",
// };

// let employee: {
//   firstName: string;
//   lastName: string;
//   age: number;
//   jobTitle: string;
// } = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 25,
//   jobTitle: "Web Developer",
// };

// console.log("employee", employee.firstName);

// const product = {
//   id: "abc1",
//   price: 12.99,
//   tags: ["great-offer", "hot-and-new"],
//   details: {
//     title: "Red Carpet",
//     description: "A great carpet - almost brand-new!",
//   },
// };

`A TypeScript array is an ordered list of data. To declare an array that holds values of a specific type, you use the following syntax:`;

// let numbers: number[] = [1, 2, 3, 4];
// let names: Array<string> = ['John', 'Jane', 'Jim'];
// let skills: string[] = [];
// skills[0] = "Problem Solving";
// skills[1] = "Programming";

// skills.push("Software Design");

// let skills = ['Problem Sovling','Software Design','Programming'];

// let skills: string[];
// skills = ["Problem Sovling", "Software Design", "Programming"];

// skills.push(100);

// console.log(skills);

// let mixedArray = ["srikanth", 1, "Programming", true];

`A tupple is an array with a fixed number of elements whose types are known.`;
//fixed length array and types

let employee: [number, string] = [1, "Steve"];

// employee[1] = 1;
// let employee: [number, string][];
// employee = [[1, "Steve"], [2, "Bill"], [3, "Jeff"]];

`An enum is a group of named constant values. Enum stands for enumerated type.

To define an enum, you follow these steps:

First, use the enum keyword followed by the name of the enum.
Then, define constant values for the enum.`;

// enum Role {
//   ADMIN,
//   READ_ONLY,
//   AUTHOR,
// }

// const person = {
//   name: "srikanth",
//   age: "28",
//   hobbies: ["sports", "cooking"],
//   role: Role.READ_ONLY,
// };

// if (person.role === Role.READ_ONLY) {
//   console.log("read_only");
// }

// enum Month {
//   Jan,
//   Feb,
//   Mar,
//   Apr,
//   May,
//   Jun,
//   Jul,
//   Aug,
//   Sep,
//   Oct,
//   Nov,
//   Dec,
// }

// function isItSummer(month: Month) {
//   let isSummer: boolean;
//   switch (month) {
//     case Month.Jun:
//     case Month.Jul:
//     case Month.Aug:
//       isSummer = true;
//       break;
//     default:
//       isSummer = false;
//       break;
//   }
//   return isSummer;
// }

// console.log(Month);
// console.log(isItSummer(7));

//Any Type
`The any type is the most flexible type you can assign in TypeScript. 
The TypeScript any type allows you to store a value of any type. 
It instructs the compiler to skip type checking.`;

// let results: any = "srikanth";
// results = 10;
// results = {
//   id: "abc1",
//   price: 12.99,
//   tags: ["great-offer", "hot-and-new"],
//   details: {
//     title: "Red Carpet",
//     description: "A great carpet - almost brand-new!",
//   },
// };

//union Type
`The union type allows you to combine multiple types into one type.`;

// let results: number | string | boolean;
// results = 10;
// results = "results";
// results = false;

// function combine(input1: string | number, input2: string | number) {
//   let result: number | string;
//   if (typeof input1 === "number" && typeof input2 === "number") {
//     result = input1 + input2;
//   } else {
//     result = input1.toString() + input2.toString();
//   }
//   return result;
// }

// console.log(combine(1, 3));
// console.log(combine("Hello", "Good Morning"));

//literal type
`The string literal types allow you to define a type that accepts only one specified string literal.`;
let mouseEvent: "click" | "dblclick" | "mouseup" | "mousedown";

mouseEvent = "click";
mouseEvent = "dblclick";

//type aliases
`Type aliases allow you to create a new name for an existing type. It’s useful to create type aliases for union types`;
type alphanumeric = number | string;

let input: alphanumeric = 10;

// input = true;

//function return type

`The function has one important other type, it has a return type.`;

// function add(n1: number, n2: number): number {
//   return n1 + n2;
// }

function add(n1: number, n2: number): void {
  console.log(n1 + n2);
}

