Namaste Javascript 

# JavaScript: The Ultimate Guide to Execution Context, Hoisting, and the Global Space

## 🚀 How JavaScript Works: Execution Context Demystified

JavaScript runs your code inside an **execution context**—think of it as a container where your code is evaluated and executed.

### 🧠 Anatomy of an Execution Context

1. **Memory Component (Variable Environment)**
  - Stores all variables and function declarations.
  - Example:
    ```js
    const a = 2; // 'a' is the variable name, 2 is the value
    ```

2. **Code Component (Thread of Execution)**
  - Executes your code line by line.

> **JavaScript is single-threaded and synchronous by default:**
> - **Single-threaded:** Executes one command at a time.
> - **Synchronous:** Runs each line in order, waiting for the previous one to finish.

---

## 🏗️ The Life Cycle: How JavaScript Runs Your Code

- **Global Execution Context (GEC):** Created when your script starts.
- **Function Execution Context:** Created every time a function is invoked.
- **Each execution context goes through two phases:**
  1. **Memory Creation Phase**
    - Allocates memory for variables (initialized as `undefined`) and functions (stored with their code).
  2. **Code Execution Phase**
    - Executes code line by line, updating variables and invoking functions.

- **Call Stack:**  
  - Manages execution contexts in a stack-like structure.
  - GEC is at the bottom; each function call adds a new context on top.
  - When a function finishes, its context is popped off.
  - When the stack is empty, execution ends.

---

**In summary:**  
JavaScript executes code inside execution contexts, managed by the call stack. Each context has a memory part (for variables/functions) and a code part (for executing code). JavaScript processes code one step at a time, in order.

---

## 🎩 Hoisting: JavaScript’s Magic Trick

- **Hoisting** moves variable and function declarations to the top of their scope before code execution.
- **During the Memory Creation Phase:**
  - Variables are set to `undefined`.
  - Function declarations are stored with their code.
  - Function expressions and arrow functions are treated as variables (`undefined` until assigned).
- **Implications:**
  - You can reference variables and functions before their declaration, but:
   - Variables are `undefined` until assigned.
   - Function declarations can be called before their definition.
   - Function expressions/arrow functions cannot be called before assignment.

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

**Key Takeaways:**
- Variable declarations are hoisted and set to `undefined`.
- Function declarations are hoisted with their code.
- Function expressions/arrow functions are hoisted as variables (`undefined`).
- Hoisting happens before code execution, during the Memory Creation Phase.

---

## 🛠️ How Functions Work Internally

- Every function invocation creates a new Execution Context, pushed onto the Call Stack.
- Each context has two phases: Memory Creation and Code Execution.
- In Memory Creation, all variables and parameters are allocated memory and set to `undefined`; function declarations are stored with their code.
- In Code Execution, the function’s code runs line by line.
- When the function finishes, its context is removed from the Call Stack.

---

## 📝 The Shortest JavaScript Program

- The shortest valid JavaScript program is an empty file.
- **Why?**  
  Even with no code, JavaScript creates a **Global Execution Context (GEC)**.
- The GEC sets up:
  - **Global Memory Space** (for variables/functions)
  - The **Global Object** (`window` in browsers, `global` in Node.js)

**Example:**  
An empty file, `empty.js`:

```js
// (empty file)
```

If you run this in a browser console:

```js
console.log(window); // Outputs the global window object
console.log(this);   // In the global scope, 'this' refers to 'window'
```

---

### 🌍 Global Space and the `this` Keyword

- **Global Space:**  
  The memory area for all variables and functions declared outside any function.
- Variables/functions declared globally become properties of the global object.

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
  - Global variables/functions are accessible via `window` or `this`.
  - In the global scope, `this` refers to `window`.

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
- Global variables/functions are accessible via `window` or `this`.
- `this.a === window.a` is `true` for `var`-declared variables in the global scope.

---

## ❓ Undefined vs Not Defined

- **Undefined:**  
  Every declared variable is initialized to `undefined` until assigned a value. It acts as a placeholder.
- **Not Defined:**  
  Refers to variables that have not been declared at all.
- **JavaScript is Loosely/Weakly Typed:**  
  You can change a variable’s type at any time—no type declarations needed.
- **Best Practice:**  
  Avoid assigning `undefined` manually to variables.

---


## The Scope Chain, Scope and Lexical Environment
- Scope of a variable directly depends on Lexical Environment 
- But But BUT, what is Lexical Environment ? Whenever a Function is invoked a Execution Context is created along with Lexical Environment. Lexical Environment is local Memory with the Lexical Environment of its parent.
- Having a reference of parent's lexical environment means We can access all the variables and function defined in the local Memory of its parent lexical environment
- The Js Engine first searchers for a variables in local Memory, guess what it didn't get it, so now it will find in its parent Lexical Envrionment Which is obiviuosly Local Memory of parent, but it didn't get it yet then it will search in the Lexical Environment of parent's parent's Lexical Environment and the sequence goes on until the variable is found in any lexical scope or Lexical Environment becomes Null 
- Actually Null is Lexical Environment of Global Execution Context
- The Mechanism of searching variables in the subsequent is knows as Scope Chain. If a variable is not found, then we say variable is not defined