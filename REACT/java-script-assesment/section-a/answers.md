# Section A — Concept Application

## Scenario 1
**Question:** Which declaration keyword (var, let, or const) would you use for each variable — the restaurant name, the minimum order value, and the currently selected dish — and why? Explain how scope and reassignment rules influence your choices.

**Answer:** 
- **Restaurant name and minimum order value:** I would use `const`. These values must remain constant throughout the session and should not be reassigned. Using `const` enforces this rule and prevents accidental changes. 
- **Currently selected dish:** I would use `let`. This value needs to be updated as the user browses the menu and selects different items. `let` allows for variable reassignment.
- **Scope and Reassignment Rules:** Both `let` and `const` provide block scope, which helps prevent variables from leaking into unintended parts of the codebase, reducing bugs. `var` is function-scoped and allows redeclaration and hoisting in ways that can cause unpredictable behavior, so it is best avoided in modern JavaScript.

## Scenario 2
**Question:** Write the conditional logic (using if-else or a ternary operator) that determines the delivery fee. Justify whether you would use strict equality (===) or loose equality (==) when checking the user type, and explain why the order of your conditions matters.

**Answer:**
```javascript
let deliveryFee;
if (userType === 'VIP') {
  deliveryFee = 0;
} else if (orderAmount > 500) {
  deliveryFee = 0;
} else if (orderAmount >= 200) {
  deliveryFee = 40;
} else {
  deliveryFee = 70;
}
```
- **Strict vs Loose Equality:** I would use strict equality (`===`) when checking the user type. Loose equality (`==`) performs type coercion, which could lead to unexpected truths if comparing different types. Strict equality checks both value and type, making it safer and more predictable.
- **Order of Conditions:** The order of conditions is crucial. If we check for `orderAmount >= 200` before checking for `orderAmount > 500` or `VIP` status, a VIP user or an order of Rs 600 would wrongly trigger the Rs 40 delivery fee condition because it executes top-to-bottom and exits on the first true condition.

## Scenario 3
**Question:** Which loop construct would you use for each task — displaying all dishes and counting vegetarian ones — and why? Explain the practical difference between for-of and forEach in this context, and when you would prefer one over the other.

**Answer:**
- **Displaying all dishes:** I would use `forEach`. It is an array method designed specifically to apply a side effect (like `console.log`) to each element in an array.
- **Counting vegetarian dishes:** I would use a `for...of` loop. It provides clean syntax for iterating over iterables. 
- **Practical Difference:** `for...of` is a general loop that allows the use of control flow statements like `break` and `continue`, making it better if you might need to exit the loop early. `forEach` is a higher-order function that executes a callback for every element; it cannot be broken out of easily (without throwing an error). I prefer `forEach` for simple side effects and `for...of` when I need more control over the iteration flow or when working with async/await inside the loop.

## Scenario 4
**Question:** How would you structure this logic as a reusable function? Compare function declaration, function expression, and arrow function syntax — and explain which form you would choose for this shared utility and why, considering hoisting and readability.

**Answer:**
```javascript
// Function Declaration
function calculateTax(amount, type) {
  const rate = type === 'beverage' ? 0.18 : 0.05;
  return amount * rate;
}
```
- **Function Declaration:** Defined with the `function` keyword. It is hoisted to the top of its scope, meaning it can be called before it is defined in the code.
- **Function Expression:** A function assigned to a variable (e.g., `const calcTax = function() {}`). It is not hoisted.
- **Arrow Function:** A concise syntax (e.g., `const calcTax = () => {}`). It is not hoisted and does not have its own `this` context.
- **Choice:** For a shared utility function, a **Function Declaration** is often best because of hoisting. It allows you to place utility functions at the bottom of a file (or export them from a module) while using them anywhere at the top, keeping the main logic readable and uncluttered. Alternatively, an arrow function is a great choice if defining concise logic within a module where it is exported, but hoisting gives the declaration an edge for local utilities.

## Scenario 5
**Question:** Which event type and attachment method would you use, and why? Explain what event.preventDefault() does and in which specific situation in this scenario it becomes necessary.

**Answer:**
- **Event Type and Attachment:** I would use the `click` event type attached via `addEventListener('click', callback)` on the button, or the `submit` event on the form element itself. `addEventListener` is the modern standard; it allows attaching multiple listeners and separating JavaScript from HTML (unlike inline `onclick`).
- **event.preventDefault():** This method stops the browser from executing the default action associated with the event. In this scenario, if the 'Place Order' button is a submit button inside an HTML `<form>`, clicking it will by default cause the browser to submit the form and reload the page. Calling `event.preventDefault()` stops this reload, allowing us to display the confirmation message dynamically on the same page.

## Scenario 6
**Question:** Compare using .then()/.catch() promise chaining with async/await syntax for this fetch call. Which approach would you choose to manage the loading state and the failure case cleanly, and why?

**Answer:**
- **.then()/.catch():** Uses callbacks to handle the resolved or rejected states of a Promise. It can lead to deeply nested code (callback hell) if multiple asynchronous operations are chained, though it works fine for simple requests.
- **async/await:** Provides a synchronous-looking syntax for working with Promises. It allows you to use standard `try/catch` blocks for error handling.
- **Choice:** I would choose **async/await**. It makes managing the UI states (loading, success, failure) much cleaner and easier to read. You can set the loading state to true, `await` the fetch call within a `try` block (rendering data on success), handle the error in the `catch` block (showing an error message), and set the loading state to false in a `finally` block. This keeps all logic linear and highly readable.
