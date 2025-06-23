# JavaScript: Fundamentals and Advanced Topics

## How JavaScript Works & Execution Context

JavaScript runs your code in a special environment called an **execution context**. Think of it as a box where your code lives and runs.

### What’s Inside an Execution Context?

1. **Memory (Variable Environment)**
  - This is where JavaScript keeps track of all your variables and functions.
  - Example:
    ```js
    const a = 2; // 'a' is the name, 2 is the value
    ```

2. **Code (Thread of Execution)**
  - This is the part that actually runs your code, one line at a time.

> **Note:**  
> JavaScript is **single-threaded** and **synchronous** by default.  
> - *Single-threaded*: It does one thing at a time.  
> - *Synchronous*: It runs each line in order, waiting for one to finish before starting the next.

---

## How JavaScript Runs Your Code

- When you start running JavaScript, it creates a **Global Execution Context (GEC)**.
- Each time you call a function, JavaScript creates a new execution context for that function.
- Every execution context goes through two steps:
  1. **Memory Creation Phase:**  
    - JavaScript sets up space for variables and functions.
    - Variables are set to `undefined` at first.
    - Functions are stored with their code.
  2. **Code Execution Phase:**  
    - JavaScript runs your code line by line, updating variables and calling functions.

- **Call Stack:**  
  - JavaScript uses a "stack" to keep track of which code is running.
  - The GEC goes on the stack first.
  - Each function call adds a new context on top.
  - When a function finishes, its context is removed from the stack.
  - When the stack is empty, your code is done running.

---

**In short:**  
JavaScript runs code inside execution contexts, managed by a call stack. Each context has a memory part (for variables/functions) and a code part (for running code). JavaScript runs code one step at a time, in order.

---

## Hoisting

- **Hoisting** means JavaScript moves variable and function declarations to the top of their scope before running the code.
- In the **Memory Creation Phase**:
  - Variables are set to `undefined`.
  - Function declarations are stored with their code.
  - Function expressions and arrow functions are treated like variables and set to `undefined`.
- This means you can use variables and functions before you write them, but:
  - Variables will be `undefined` until you assign a value.
  - Function declarations can be called before they appear in the code.
  - Function expressions and arrow functions cannot be called before they are defined (they are `undefined`).

**Example:**
```js
console.log(a); // undefined
var a = 10;

foo(); // "Hello"
function foo() {
  console.log("Hello");
}

bar(); // TypeError: bar is not a function
var bar = function() {
  console.log("Hi");
};
```

**Key Points:**
- Variable declarations are hoisted and set to `undefined`.
- Function declarations are hoisted with their code.
- Function expressions and arrow functions are hoisted as variables (`undefined`).
- Hoisting happens before your code runs, during the Memory Creation Phase.


## How Functions Work

- Whenever a function is invoked, it creates a brand new Execution Context that is pushed onto the top of the Call Stack.
- The new Execution Context executes in two phases: Memory Creation and Code Execution.
- In the Memory Creation Phase, all variables and inside the function and its parameters are allocated memory and set to `undefined`, while function declarations are stored with their code.
- In the Code Execution Phase, the code inside the function runs line by line.
- When the function finishes executing, its Execution Context is removed from the Call Stack.

## The Shortest Program in JavaScript

- The shortest valid JavaScript program is simply an empty file.
- **Why?**  
  Even if your file has no code, JavaScript still creates a **Global Execution Context (GEC)** when it runs.
- The GEC sets up:
  - **Global Memory Space** (for variables and functions)
  - The **Global Object** (e.g., `window` in browsers, `global` in Node.js)
- This setup happens automatically, whether or not you write any code.

**Example:**  
Suppose you have an empty file, `empty.js`:

```js
// (empty file)
```

If you run this in a browser console, you can still access the global object:

```js
console.log(window); // Outputs the global window object
console.log(this);   // In the global scope, 'this' refers to 'window'
```

---

### What is Global Space and `this`?

- **Global Space**:  
  The memory area where all variables and functions declared outside of any function live.
- If a variable is declared outside any function, it's in the global space.

**Example:**

```js
var a = 10;
function greet() {
  console.log("Hello!");
}
```

- Both `a` and `greet` are in the global space.

- In browsers:
  - The global object is `window`.
  - Variables and functions in the global space become properties of `window`.
  - The keyword `this` in the global scope refers to `window`.

**Example:**

```js
var b = 20;
console.log(window.b); // 20
console.log(this.b);   // 20
console.log(this.b === window.b); // true
```

**Key Points:**
- The global execution context is created even for an empty file.
- The global object (`window` in browsers) is always available.
- Variables/functions in the global space are accessible via `window` or `this` in the global scope.
- `this.a === window.a` is `true` for variables declared with `var` in the global scope.

