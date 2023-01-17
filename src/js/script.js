// Create an empty stack and set its maximum size to 5
let stack = [];
const maxSize = 5;

// Function to push a value to the top of the stack
function pushValue() {
// Get the value from the textbox
let value = document.getElementById("input").value;

// Check if the stack is full
if (stack.length === maxSize) {
alert("Stack is full");
return;
}

// Check if the textbox is empty
if (value === "") {
alert("Please enter a value");
return;
}

// Push the value to the top of the stack
stack.push(value);

// Display the stack values in the HTML table
displayStack();
}

// Function to check if the stack is empty
function isEmpty() {
if (stack.length === 0) {
alert("Yes, stack is empty");
} else {
alert("No, stack is not empty");
}
}

// Function to return the item on the top of the stack
function peek() {
// Check if the stack is empty
if (stack.length === 0) {
alert("Operation not allowed");
return;
}

// Get the item on the top of the stack
let top = stack[stack.length - 1];

alert("The item on the top of the stack is: " + top);
}

// Function to display the stack values in the HTML table
function displayStack() {
for (let i = 0; i < maxSize; i++) {
let td = document.getElementById(i + 1);

if (stack[i]) {
    td.innerHTML = stack[i];
  } else {
    td.innerHTML = "";
  }

}
}

// Add event listeners to the push, emp, and peek buttons
document.getElementById("pushButton").addEventListener("click", pushValue);
document.getElementById("emptyButton").addEventListener("click", isEmpty);
document.getElementById("peekButton").addEventListener("click", peek);