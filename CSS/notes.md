# CSS Advanced Concepts & Best Practices

## 🚀 New CSS Features

1. **`:is`, `:has`, `:not`, `:where` pseudo-classes**  
    ```css
    /* :is example */
    nav :is(a, button) { color: blue; }
    /* :has example */
    article:has(img) { border: 1px solid #ccc; }
    /* :not example */
    button:not(.primary) { background: gray; }
    /* :where example */
    :where(header, footer) { margin: 0; }
    ```
    **Remember:**  
    - `:is()` simplifies complex selectors: `ul:is(.nav, .menu) li {}`  
    - `:has()` acts like a parent selector: `.card:has(.badge) { box-shadow: 0 0 5px gold; }`  
    - `:not()` excludes elements: `input:not([type="checkbox"]) { border: 1px solid red; }`  
    - `:where()` is like `:is()` but with zero specificity.

2. **Container Queries**  
    ```css
    @container (min-width: 400px) {
      .card { font-size: 1.2rem; }
    }
    ```
    **Remember:**  
    - Use container queries for truly responsive components, not just layouts.  
    - Example:  
      ```css
      .sidebar {
        container-type: inline-size;
      }
      @container (max-width: 600px) {
        .sidebar { display: none; }
      }
      ```

3. **Media Query Range Syntax**  
    ```css
    @media (width > 600px) and (width < 900px) {
      body { background: lightyellow; }
    }
    ```
    **Remember:**  
    - New syntax: `@media (400px <= width <= 800px)` is easier to read.

4. **Aspect Ratio**  
    ```css
    .video {
      aspect-ratio: 16 / 9;
      width: 100%;
    }
    ```
    **Remember:**  
    - No more padding hacks for responsive iframes or images!

5. **Accent Color**  
    ```css
    input[type="checkbox"] {
      accent-color: #0078d4;
    }
    ```
    **Remember:**  
    - Instantly theme checkboxes, radios, and progress bars.

6. **Scroll Snap**  
    ```css
    .carousel {
      scroll-snap-type: x mandatory;
    }
    .slide {
      scroll-snap-align: start;
    }
    ```
    **Remember:**  
    - Great for carousels, galleries, and onboarding screens.

7. **Individual Transform Properties**  
    ```css
    .move {
      translate: 20px 0;
      rotate: 10deg;
      scale: 1.2;
    }
    ```
    **Remember:**  
    - Animate or transition only one transform property for better performance.

8. **CSS Nesting**  
    ```css
    .menu {
      color: black;
      & a {
         color: blue;
      }
    }
    ```
    **Remember:**  
    - Like SCSS nesting, but native to CSS.  
    - Example:  
      ```css
      .card {
        & h2 { font-size: 2rem; }
        & .btn { margin-top: 1rem; }
      }
      ```

9. **Gap Property for Flexbox**  
    ```css
    .flex-container {
      display: flex;
      gap: 1rem;
    }
    ```
    **Remember:**  
    - No more `:not(:last-child)` margin hacks for spacing!

10. **CSS Logical Properties (inline & block)**  
     ```css
     .box {
        padding-inline: 1rem;
        margin-block: 2rem;
     }
     ```
     **Remember:**  
     - Works with writing modes (LTR/RTL, vertical text).

11. **CSS Writing Modes**  
     ```css
     .vertical-text {
        writing-mode: vertical-rl;
     }
     ```
     **Remember:**  
     - Useful for Asian languages or creative headings.

12. **`:focus-visible` pseudo-class**  
     ```css
     button:focus-visible {
        outline: 2px solid orange;
     }
     ```
     **Remember:**  
     - Only shows outline for keyboard users, not mouse clicks.

---

## 🎁 Bonus CSS Topics

1. **CSS AOS (Animate On Scroll) Plugin**  
    ```html
    <div data-aos="fade-up">Animated Content</div>
    ```
    ```js
    // JS initialization
    AOS.init();
    ```
    **Remember:**  
    - Add `data-aos` attributes for easy scroll animations.

2. **CSS Shape Divider**  
    ```css
    .divider {
      clip-path: polygon(0 0, 100% 0, 100% 80%, 0 100%);
      background: #eee;
    }
    ```
    **Remember:**  
    - Use `clip-path` for creative section dividers.

3. **Scrollbar Styling**  
    ```css
    ::-webkit-scrollbar {
      width: 8px;
    }
    ::-webkit-scrollbar-thumb {
      background: #888;
      border-radius: 4px;
    }
    ```
    **Remember:**  
    - Limited browser support, but great for custom UIs.

4. **Useful Website References**  
    - [MDN Web Docs: CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
    - [Can I use](https://caniuse.com/)
    - [CSS Tricks](https://css-tricks.com/)
    - [SmolCSS](https://smolcss.dev/) – Minimal, modern CSS patterns

---

## 🏗️ CSS Architecture & Best Practices

### Vendor Prefixes

- `-webkit-` : Chrome, Safari (WebKit browsers)
- `-moz-` : Firefox
- `-ms-` : Internet Explorer
- `-o-` : Opera

**Example:**
```css
.box {
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
}
```
**Remember:**  
- Use [Autoprefixer](https://autoprefixer.github.io/) to automate prefixing.

### Methodologies

- **BEM (Block, Element, Modifier):**  
     A methodology for creating reusable components and code sharing in front-end development.  
     **Example:**  
     ```html
     <button class="btn btn--primary btn--large">Click</button>
     ```
     **Remember:**  
     - Naming: `block__element--modifier`  
     - Example:  
       ```html
       <div class="card card--featured">
         <div class="card__title">Title</div>
       </div>
       ```

- **SMACSS (Scalable and Modular Architecture for CSS):**  
     A style guide for organizing CSS for scalability and modularity.  
     **Example:**  
     ```css
     /* Base */
     body { font-family: sans-serif; }

     /* Layout */
     .l-header { ... }

     /* Module */
     .m-card { ... }
     ```
     **Remember:**  
     - Split CSS into base, layout, module, state, and theme.

---

## 🌐 Browser Compatibility in CSS

- Always check browser support for new CSS features.
- Use vendor prefixes where necessary for cross-browser compatibility.

**Example:**  
Check [Can I use](https://caniuse.com/) before using new features.

---

## ⚡ CSS Performance & Optimization

1. **Minification & Compression:**  
      Reduce CSS file size for faster load times.  
      *Example: Use tools like [cssnano](https://cssnano.co/).*  
      **Remember:**  
      - Minified CSS:  
        ```css
        body{margin:0;padding:0}
        ```

2. **Critical CSS:**  
      Prioritize "above-the-fold" content for quicker rendering.  
      *Example: Inline critical CSS in `<head>`.*  
      **Remember:**  
      - Only inline styles needed for the first screen.

3. **Reducing Render Blocking:**  
      Optimize CSS delivery to prevent delays in page rendering.  
      *Example: Use `media="print"` or `media="(min-width: 600px)"` for non-critical CSS.*  
      **Remember:**  
      - Load non-essential CSS asynchronously.

4. **Smooth Scrolling & Scroll Snapping:**  
      Enhance user experience with smooth scrolling and snap points.  
      ```css
      html {
         scroll-behavior: smooth;
      }
      ```
      [MDN: scroll-snap-type](https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-snap-type)
      **Remember:**  
      - Use for navigation links and carousels.

---

Website Testing - CSS

01 : Lighthouse testing  
02 : https://pagespeed.web.dev/  
03 : https://gtmetrix.com/  

> **Tip:** Regularly update your knowledge with the latest CSS features and best practices for modern, maintainable, and high-performance web development.

