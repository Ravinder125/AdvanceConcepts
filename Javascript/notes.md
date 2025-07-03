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
12. [Callback Functions](#12-callback-functions)

---

## JavaScript: Execution Context, Hoisting, Scope, and Global Space — Key Notes (with Examples)

### 1. Execution Context
- **Definition:** The environment where JavaScript code is evaluated and executed.
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

---

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

### 12. Callback Functions

- **Definition:** A callback function is a function passed as an argument to another function, to be executed later.
- **Why?** JavaScript functions are first-class citizens, so they can be passed around as values.
- **Common Use Cases:**
  - Asynchronous operations (e.g., `setTimeout`, event listeners, AJAX calls)
  - Array methods (`map`, `filter`, `forEach`, etc.)
- **setTimeout Example:**  
  `setTimeout` is a browser API that takes a callback function and a delay. The callback is executed after the delay, but JavaScript remains single-threaded and non-blocking.
  ```js
  setTimeout(function() {
    console.log("Executed after 1 second");
  }, 1000);
  ```
- **Event Listener Example:**  
  Event listeners also use callbacks. They can be memory-intensive, so it's good practice to remove them when not needed.
  ```js
  function handleClick() {
    console.log("Button clicked!");
  }
  button.addEventListener("click", handleClick);
  // Later, to remove:
  button.removeEventListener("click", handleClick);
  ```
- **Closures with Callbacks:**  
  Wrapping event listeners or asynchronous logic in a function can create closures, allowing private state or secure data encapsulation.
  ```js
  function setupListener() {
    let count = 0;
    button.addEventListener("click", function() {
      count++;
      console.log(`Clicked ${count} times`);
    });
  }
  setupListener();
  ```

  - **Avoid Main Thread Blocking:**  
  JavaScript runs on a single main thread, which manages user interactions, rendering, and script execution. Performing heavy computations or synchronous operations on this thread can block the UI, causing the application to freeze and become unresponsive. To handle this, use asynchronous techniques such as callbacks, promises, or async/await to defer work. For CPU-intensive tasks, consider offloading them to web workers, which run in the background and keep the main thread free. This approach ensures the main thread stays responsive, providing a smooth user experience.

  **Example:**  
  ```js
  // Bad: Blocks the main thread
  function heavyComputation() {
    let sum = 0;
    for (let i = 0; i < 1e9; i++) {
      sum += i;
    }
    return sum;
  }
  heavyComputation(); // UI freezes

  // Good: Offload to a Web Worker
  // main.js
  const worker = new Worker('worker.js');
  worker.postMessage('start');
  worker.onmessage = (e) => {
    console.log('Result:', e.data);
  };

  // worker.js
  self.onmessage = function() {
    let sum = 0;
    for (let i = 0; i < 1e9; i++) {
      sum += i;
    }
    self.postMessage(sum);
  };
  ```
  In this example, the heavy computation is moved to a Web Worker, so the main thread remains responsive.


**Summary:**  
Callback functions are fundamental to JavaScript's asynchronous and event-driven programming style. They enable powerful patterns for handling events, asynchronous operations, and encapsulating logic.

### Event Loop, Callback Queue, and Microtask Queue

- **Event Loop:**  
  The event loop is a core mechanism in JavaScript that enables non-blocking, asynchronous behavior by coordinating the execution of code, events, and callbacks.

#### How the Event Loop Works
1. **Call Stack:** Executes synchronous code line by line.
2. **Web APIs:** Asynchronous operations (like `setTimeout`, DOM events, AJAX, Promises) are handled outside the call stack by browser or Node.js APIs. When such an operation is invoked, the JavaScript engine delegates it to the Web API environment, which manages the operation independently of the main thread.
3. **Callback Storage:** When an asynchronous operation completes, its callback is not immediately executed. Instead, the callback is first stored in a queue:
  - **Callback Queue (Task Queue):** For most async operations like `setTimeout`, event handlers, and AJAX callbacks, the callback is placed in the callback queue (also called the task queue).
  - **Microtask Queue:** For microtasks such as resolved Promises and MutationObservers, the callback is placed in the microtask queue, which has higher priority than the callback queue.
4. **Queue Priorities:** The event loop always checks the microtask queue first. If there are any microtasks, they are executed before any callbacks from the callback queue.
5. **Event Loop:** Continuously checks if the call stack is empty. If so, it first processes all microtasks in the microtask queue, then processes one callback from the callback queue.
6. **Callback Starvation:** If microtasks are continuously scheduled (for example, a resolved Promise schedules another Promise in its `.then`), the microtask queue can keep filling up, preventing the event loop from ever reaching the callback queue. This is called "callback starvation" or "starvation of the task queue," where callbacks like `setTimeout` may be delayed indefinitely because microtasks always have higher priority and are processed first.

**Example of Callback Starvation:**
```js
function starve() {
  Promise.resolve().then(starve);
}
starve();
setTimeout(() => {
  console.log("This will never run!");
}, 0);
```
In this example, the microtask queue is never empty, so the `setTimeout` callback never gets a chance to execute.

#### Example

```js
console.log("Start");
setTimeout(() => {
  console.log("Timeout Callback");
}, 0);
Promise.resolve().then(() => {
  console.log("Promise Microtask");
});
console.log("End");
```

**Output:**
```
Start
End
Promise Microtask
Timeout Callback
```

**Explanation:**
- Synchronous code runs first: "Start" and "End".
- The Promise's `.then` callback (a microtask) runs before the `setTimeout` callback (a macrotask), even though both are scheduled after the synchronous code.

#### Key Points

- **Microtasks (Promises, MutationObservers) always run before macrotasks (setTimeout, setInterval, I/O events) after the current stack is empty.**
- The event loop ensures the UI remains responsive by deferring async callbacks until the stack is clear.
- Use microtasks for operations that must happen immediately after the current operation, before any rendering or I/O callbacks.

#### Best Practices

- Avoid blocking the call stack with heavy synchronous code.
- Use asynchronous patterns (Promises, async/await, callbacks) to keep applications responsive.
- Be aware that microtasks can starve the callback queue if scheduled recursively.

**Summary:**  
The event loop, callback queue, and microtask queue together enable JavaScript's powerful asynchronous programming model. Understanding their order and behavior is essential for writing efficient, non-blocking code.


### JavaScript Engine and Runtime Environment

The JavaScript engine is the program that reads and executes JavaScript code. It works inside a runtime environment (like browsers or Node.js), which provides everything needed to run JS.

#### JS Runtime Environment Components
- **Call Stack:** Tracks function calls and manages execution order.
- **Memory Heap:** Stores objects, variables, and data.
- **Event Loop:** Handles asynchronous operations, making sure the call stack is processed efficiently.
- **Web APIs:** Browser/Node.js features (DOM, AJAX, timers) that JS can use for extra functionality.
- **Execution Context:** The environment for running code, including scope and variables.
- **Garbage Collection:** Frees memory by removing data no longer in use.

#### JavaScript Engine Internals

A modern JS engine (like V8, SpiderMonkey, or Chakra) has several key parts:

- **Parser:** Reads JS code and converts it into an Abstract Syntax Tree (AST), which represents the code structure.
- **Interpreter:** Executes the AST, running code line by line.
- **Compiler (JIT - Just-In-Time):** Optimizes code by compiling frequently used parts into fast machine code.
- **Execution:** Runs the optimized code, manages memory, and handles async tasks.

##### Advanced Engine Optimizations

- **Abstract Syntax Tree (AST):** The parsed tree structure of your code, used for analysis and optimization.
- **Inlining:** Frequently called small functions are inserted directly into the calling code to avoid function call overhead.
- **Copy Elision:** Avoids unnecessary copying of objects or values, improving performance.
- **Inline Caching:** Remembers the type of objects used at certain points, speeding up repeated property access.
- **Garbage Collection:** Uses algorithms (like mark-and-sweep) to automatically reclaim memory.

**Summary Table:**

| Component         | Purpose                                                      |
|-------------------|-------------------------------------------------------------|
| Parser            | Converts code to AST                                         |
| Interpreter       | Executes AST line by line                                    |
| Compiler (JIT)    | Optimizes and compiles hot code to machine code              |
| Inlining          | Inserts small functions directly into calling code           |
| Copy Elision      | Avoids unnecessary copying of data                           |
| Inline Caching    | Speeds up repeated property access                           |
| Garbage Collector | Frees memory automatically                                   |

**In short:**  
The JS engine parses, interprets, and optimizes your code, while the runtime environment provides APIs and manages async operations. Modern engines use advanced techniques like inlining and inline caching to make JavaScript fast.

### Issues with `setTimeout`

- **Unpredictable Timing:**  
  `setTimeout` schedules code to run after a minimum delay, but actual execution depends on the call stack and event loop. If the main thread is busy (e.g., with heavy computation), the callback may be delayed beyond the specified time.

- **Closure Pitfalls:**  
  When used inside loops with `var`, all callbacks may reference the same variable, leading to unexpected results (see closure examples above).

- **Timer Clamping:**  
  Browsers may enforce a minimum delay (e.g., 4ms for nested timeouts), so very short intervals may not be precise.

- **Not Guaranteed to Run Exactly On Time:**  
  The callback is queued after the delay, but if the call stack is not empty, it waits until the stack is clear.

**Example:**
```js
console.log("Start");
setTimeout(() => console.log("Timeout"), 0);
for (let i = 0; i < 1e8; i++) {} // Heavy computation
console.log("End");
// Output: Start, End, Timeout
```
Here, "Timeout" is logged after "End" because the main thread was busy.

---

## 13. Higher-Order Functions

- **Definition:**  
  A higher-order function is a function that takes one or more functions as arguments, returns a function, or both.

- **Why Use Them?**  
  They enable powerful abstractions, code reuse, and functional programming patterns.

- **Common Examples:**  
  - Array methods: `map`, `filter`, `reduce`, `forEach`
  - Event listeners
  - Function composition and currying

**Example:**
```js
function greet(name) {
  return "Hello, " + name;
}

function processUserInput(callback) {
  const name = "Alice";
  console.log(callback(name));
}

processUserInput(greet); // Output: Hello, Alice
```

**Array Example:**
```js
const numbers = [1, 2, 3, 4];
const doubled = numbers.map(num => num * 2); // [2, 4, 6, 8]
```

**Summary:**  
Higher-order functions are a core concept in JavaScript, enabling flexible, modular, and expressive code by treating functions as first-class citizens.
---

#### Creating a Custom `map` Function with `Array.prototype`

You can create your own version of the `map` function by adding it to `Array.prototype`. This allows all arrays to use your custom `map` method.

**Example:**
```js
Array.prototype.myMap = function(callback) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    // Check if the index exists (handles sparse arrays)
    if (this.hasOwnProperty(i)) {
      result.push(callback(this[i], i, this));
    }
  }
  return result;
};

// Usage:
const arr = [1, 2, 3];
const doubled = arr.myMap(x => x * 2); // [2, 4, 6]
console.log(doubled);
```

**How it works:**
- The custom `myMap` function iterates over the array.
- For each element, it calls the provided `callback` with the current value, index, and the array itself.
- The result of each callback call is pushed to a new array, which is returned at the end.

**Note:**  
It's generally not recommended to modify built-in prototypes in production code, but this is a useful exercise for understanding how array methods work internally.