# JavaScript: Fundamentals and Advanced Topics

## How JavaScript Works & Execution Context

Everything in JavaScript runs inside an **execution context**.

### Components of Execution Context

1. **Memory Component (Variable Environment)**
    - Stores all variables and functions as key-value pairs.
    - Example:
      ```js
      const a = 2; // 'a' is the key, 2 is the value
      ```

2. **Code Component (Thread of Execution)**
    - Executes code one line at a time.

> **Note:**  
> JavaScript is a **synchronous, single-threaded** language.  
> - *Single-threaded* means it can execute only one command at a time.  
> - *Synchronous* means commands are executed in a specific order, one after another.

---

## How JavaScript is Executed

- When JavaScript code runs, a **Global Execution Context (GEC)** is created.
- **Execution Context Creation Phases:**
  1. **Memory Creation Phase:**  
      - Allocates memory for all variables and functions.  
      - Variables are initialized with `undefined`.  
      - Functions are stored with their entire code.
  2. **Code Execution Phase:**  
      - Code is executed line by line, assigning values and invoking functions.

- **Function Invocation:**  
  - Each time a function is called, a new execution context is created for it.
  - This context goes through the same two phases.
  - When the function finishes, its execution context is removed from the stack, and control returns to where the function was called.

- **Call Stack (also known as Execution Stack, Program Stack, Machine Stack, or Control Stack):**  
  - The call stack manages the order of execution contexts.
  - The GEC is pushed first.
  - Each new function call pushes a new context on top.
  - When a context finishes, it is popped off the stack.
  - When all contexts (including the GEC) are done, the stack is empty.

---

**Summary:**  
JavaScript code runs inside execution contexts managed by the call stack (also called Execution Stack, Program Stack, Machine Stack, or Control Stack). Each context has a memory and code component, and JavaScript executes code synchronously, one step at a time.