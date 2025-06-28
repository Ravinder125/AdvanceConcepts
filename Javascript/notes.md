In-Depth JavasScript Fundaments by Namaste Javascript 

## Table of Contents
1. [Execution Context](#1-execution-context)
2. [Hoisting](#2-hoisting)
3. [Functions Internally](#3-functions-internally)
4. [Global Space & `this`](#4-global-space--this)
5. [Undefined vs Not Defined](#5-undefined-vs-not-defined)
6. [Scope, Scope Chain, and Lexical Environment](#6-scope-scope-chain-and-lexical-environment)
7. [`let`, `const`, `var`, and Temporal Dead Zone (TDZ)](#7-let-const-var-and-temporal-dead-zone-tdz)
8. [Block Scope and Shadowing](#8-block-scope-and-shadowing)
9. [Closures](#9-closures)
10. [Closures with setTimeout (Interview Question)](#10-closures-with-settimeout-interview-question)
11. [Function Statement, Expression, Anonymous, Named Expression, and First Class Functions](#11-function-statement-expression-anonymous-named-expression-and-first-class-functions)

---

## JavaScript: Execution Context, Hoisting, Scope, and Global Space — Key Notes (with Examples)

### 1. Execution Context
- **Definition:** The environment in which JavaScript code is evaluated and executed.
- **Components:**
  - **Memory/Variable Environment:** Stores variables and function declarations.
  - **Code/Thread of Execution:** Executes code line by line.
- **Types:**
  - **Global Execution Context (GEC):** Created when the script starts.
  - **Function Execution Context:** Created for each function invocation.
- **Phases:**
  1. **Memory Creation Phase:** Allocates memory for variables (`undefined`) and functions (with code).
  2. **Code Execution Phase:** Executes code, updates variables, and invokes functions.
- **Call Stack:** Manages execution contexts in a stack; GEC at the bottom, function contexts on top.

**Example:**
```js
var x = 10;
function foo() {
  var y = 20;
  console.log(x + y);
}
foo(); // Output: 30
```

---

### 2. Hoisting
- **Definition:** JavaScript moves variable and function declarations to the top of their scope before execution.
- **Behavior:**
  - Variables (`var`) are hoisted and set to `undefined`.
  - Function declarations are hoisted with their code.
  - Function expressions/arrow functions are hoisted as variables (`undefined` until assigned).
- **Implications:** You can reference variables/functions before declaration, but only function declarations are callable before their definition.

**Example:**
```js
console.log(a); // undefined
var a = 5;

foo(); // "Hello"
function foo() {
  console.log("Hello");
}

// bar(); // TypeError: bar is not a function
var bar = function() {
  console.log("Hi");
};
```

---

### 3. Functions Internally
- Each function call creates a new execution context (with memory and code phases).
- Contexts are pushed to and popped from the call stack as functions are invoked and completed.

**Example:**
```js
function greet(name) {
  console.log("Hello, " + name);
}
function main() {
  greet("Alice");
}
main(); // Output: Hello, Alice
```

---

### 4. Global Space & `this`
- **Global Space:** Area for variables/functions declared outside any function.
- **Global Object:** `window` (browser), `global` (Node.js).
- **`this` in Global Scope:** Refers to the global object.
- **Global variables/functions:** Accessible via `window` or `this` in browsers.

**Example (browser):**
```js
var a = 10;
console.log(window.a); // 10
console.log(this.a);   // 10
```

---

### 5. Undefined vs Not Defined
- **Undefined:** Declared but not assigned variables.
- **Not Defined:** Variables never declared.
- **Best Practice:** Avoid assigning `undefined` manually.

**Example:**
```js
var x;
console.log(x); // undefined

console.log(y); // ReferenceError: y is not defined
```

---

### 6. Scope, Scope Chain, and Lexical Environment
- **Scope:** Region where a variable/function is accessible.
- **Lexical Environment:** Local memory + reference to parent environment.
- **Scope Chain:** JavaScript looks up the chain for variable resolution.

**Example:**
```js
function outer() {
  var a = 1;
  function inner() {
    var b = 2;
    console.log(a + b); // 3
  }
  inner();
}
outer();
```

---

### 7. `let`, `const`, `var`, and Temporal Dead Zone (TDZ)
- **`let`/`const`:** Hoisted but not initialized (TDZ); block-scoped; not attached to global object.
- **`var`:** Hoisted and initialized to `undefined`; function/global scope; attached to global object.
- **`const`:** Cannot be re-declared or re-initialized.
- **Errors:** `SyntaxError`, `TypeError`, `ReferenceError`.

**Example:**
```js
console.log(a); // undefined
var a = 10;

// console.log(b); // ReferenceError: Cannot access 'b' before initialization
let b = 20;

// const c; // SyntaxError: Missing initializer in const declaration
const c = 30;
```

---

### 8. Block Scope and Shadowing
- **Block:** Code inside `{}` (e.g., in `if`, `for`, functions).
- **Block Scope:** `let`/`const` are block-scoped; `var` is not.
- **Shadowing:** Inner variable with same name as outer variable overrides it within the block.
- **Illegal Shadowing:** Using `var` to shadow `let`/`const` in the same scope causes errors.

**Example:**
```js
let x = 1;
{
  let x = 2;
  console.log(x); // 2 (shadows outer x)
}
console.log(x); // 1

// Illegal shadowing example:
// let y = 1;
// {
//   var y = 2; // SyntaxError
// }
```

---
### 9. Closures
- **Definition:** A closure is a function that "remembers" the environment in which it was created, even after that environment has gone.
- **How It Works:** When a function is returned from another function, it retains access to the variables and parameters of its outer (enclosing) function, forming a closure.

**Use Cases of Closures:**
- **Data Privacy/Encapsulation:** Closures allow you to create private variables that cannot be accessed from outside the function, emulating private state.
- **Function Factories:** You can use closures to generate functions with preset parameters or behaviors.
- **Maintaining State in Asynchronous Code:** Closures help preserve state in callbacks, event handlers, and asynchronous operations.
- **Partial Application and Currying:** Closures enable you to create new functions by pre-filling some arguments of an existing function.
- **Memoization:** Store computed results in a closure to optimize repeated function calls.
- **Module Pattern:** Encapsulate related functions and variables, exposing only what is necessary.

**Key Points:**
- Closures are created every time a function is created, at function creation time.
- The inner function has access to:
  - Its own scope (variables defined between its curly braces)
  - The scope of the outer function
  - The global scope

**Common Pitfall:** Closures can lead to unexpected results in loops if not handled carefully (e.g., using `var` in a loop).

**Example:**
```js
function makeCounter() {
  let count = 0;
  return function() {
    count++;
    return count;
  };
}
const counter = makeCounter();
console.log(counter()); // 1
console.log(counter()); // 2
```

**Example: Data Privacy**
```js
function secretHolder(secret) {
  return {
    getSecret: function() { return secret; },
    setSecret: function(newSecret) { secret = newSecret; }
  };
}
const holder = secretHolder('JS Rocks!');
console.log(holder.getSecret()); // 'JS Rocks!'
holder.setSecret('Closures are powerful!');
console.log(holder.getSecret()); // 'Closures are powerful!'
```

**Example: Closures in Loops**
```js
for (var i = 0; i < 3; i++) {
  setTimeout(function() {
    console.log(i); // Prints 3 three times
  }, 100);
}
// Using let fixes this:
for (let j = 0; j < 3; j++) {
  setTimeout(function() {
    console.log(j); // Prints 0, 1, 2
  }, 100);
}
```

**Summary:**  
Closures are a fundamental concept in JavaScript, enabling powerful patterns such as data hiding, function factories, memoization, and maintaining state across asynchronous operations.

---

### 10. Closures with setTimeout (Interview Question)

This is a classic JavaScript interview question that demonstrates how closures interact with asynchronous code, especially inside loops.

#### Problem Example

```js
(function () {  
  for (var i = 1; i <= 5; i++) {
    setTimeout(() => console.log(i), i * 1000);
  }
})();
```
**Output:**  
After 1s, 2s, 3s, 4s, and 5s, it prints `6` five times.

**Why?**  
- `var` is function-scoped, so there is only one `i` variable shared by all iterations.
- By the time the callbacks run, the loop has finished and `i` is `6`.
- Each callback "closes over" the same `i` variable, not its value at the time of iteration.

#### Solution 1: Use `let` (block scope)

```js
(function () {
  for (let i = 1; i <= 5; i++) {
    setTimeout(() => console.log(i), i * 1000);
  }
})();
```
**Output:**  
Prints `1`, `2`, `3`, `4`, `5` at 1s intervals.

**Why?**  
- `let` is block-scoped, so each iteration gets a new binding of `i`.
- Each callback closes over its own copy of `i`.

#### Solution 2: IIFE to capture value

```js
(function () {
  for (var i = 1; i <= 5; i++) {
    (function(j) {
      setTimeout(() => console.log(j), j * 1000);
    })(i);
  }
})();
```
**Output:**  
Prints `1`, `2`, `3`, `4`, `5` at 1s intervals.

**Why?**  
- The IIFE (Immediately Invoked Function Expression) creates a new scope for each iteration.
- The current value of `i` is passed as `j`, so each callback closes over its own `j`.

#### Key Takeaways
- Closures "remember" variables, not their values at a specific time.
- Use `let` or an IIFE to capture the correct value in asynchronous callbacks inside loops.
- Understanding this pattern is essential for writing correct asynchronous JavaScript.


## 11. Function Statement, Expression, Anonymous, Named Expression, and First Class Functions

### Function Statement (Function Declaration)
- **Definition:** Declaring a function using the `function` keyword with a name.
- **Hoisting:** Yes, can be called before its declaration due to hoisting.
- **Syntax Example:**
  ```js
  function greet() {
    console.log("Hello!");
  }
  greet(); // "Hello!"
  ```

### Function Expression
- **Definition:** Assigning a function to a variable.
- **Hoisting:** No, cannot be called before assignment.
- **Syntax Example:**
  ```js
  const sayHi = function() {
    console.log("Hi!");
  };
  sayHi(); // "Hi!"
  ```

### Anonymous Function
- **Definition:** A function without a name.
- **Usage:** Often used as function expressions or returned from other functions.
- **Syntax Example:**
  ```js
  const anon = function() {
    console.log("Anonymous!");
  };
  anon(); // "Anonymous!"
  ```

### Named Function Expression
- **Definition:** A function expression with a name.
- **Scope:** The name is only accessible inside the function itself.
- **Syntax Example:**
  ```js
  const example = function namedFunc() {
    // namedFunc is only accessible here
    console.log("Named Function Expression");
  };
  example(); // "Named Function Expression"
  // namedFunc(); // ReferenceError
  ```

### First Class Functions (First Class Citizens)
- **Definition:** Functions in JavaScript are treated as values.
- **Capabilities:**
  - Can be assigned to variables.
  - Can be passed as arguments to other functions.
  - Can be returned from other functions.
  - Can be stored in data structures.
- **Example:**
  ```js
  function run(fn) {
    fn();
  }
  run(function() {
    console.log("First class function!");
  });
  ```

**Summary Table:**

| Concept                    | Hoisted | Can be Anonymous | Can be Named | Usage Example                                      |
|----------------------------|---------|------------------|--------------|----------------------------------------------------|
| Function Statement         | Yes     | No               | Yes          | `function foo() {}`                                |
| Function Expression        | No      | Yes              | Yes          | `const bar = function() {}`                        |
| Anonymous Function         | N/A     | Yes              | No           | `const fn = function() {}`                         |
| Named Function Expression  | No      | No               | Yes          | `const baz = function qux() {}`                    |
| First Class Functions      | N/A     | Yes              | Yes          | `run(function() {})`                               |

---
