# Javascript: Stack Operation
Complete a partially completed JavaScript application. Complete the application as shown below in order to pass all the unit tests.

## Environment 

- Node Version: 12(LTS)
- Default Port: 8000

## Application Demo:
![](https://hrcdn.net/s3_pub/istreet-assets/WGyPt5N-zffjzRQ6zFpyCA/1076208-vanillajs-stack-operation-easy.gif)

## Application description

Implement basic stack operations like push, empty, and peek. Use JavaScript with the given template.
A stack is a data structure based on the principle last In first out. The stack is a container to hold nodes and has several operations.

Stack operations:

- push — Insert an element to the top of the stack.
- empty — Returns true if the stack is empty, false otherwise.
- peek — Returns the value of the topmost item.

Requirements:

- Implement a stack that holds a maximum of 5 elements.
- The textbox can accept any type of value, for example string, number, float, etc.
- Clicking on the Push button should push the textbox item to the top of the stack if there is room.
- If the textbox is empty when the Push button is clicked, display an alert “Please enter a value!”. The stack should not change.
- If the stack is full when Push is clicked and there is data in the textbox, display an alert "Stack was already full!". The stack should not change.
- Clicking on the Empty button should display an alert "Yes, Stack is empty" or "No, Stack is not empty".
- Clicking on the Peek button should return the item on the top of the non-empty stack, without removing it.
- If the stack is empty when the Peek button is clicked, display an alert “Operation not allowed!”.

All the markup for the question has been added. As a candidate, you have to complete the Javascript file to implement the above-stated features/functionality.

## Project Specifications

**Read Only Files**
- `test/*`
- `src/index.js`
- `src/index.html`
- `app.js`

**Commands**
- run: 
```bash
bash bin/env_setup && . $HOME/.nvm/nvm.sh && npm start
```
- install: 
```bash
bash bin/env_setup && . $HOME/.nvm/nvm.sh && npm install
```
- test: 
```bash
bash bin/env_setup && . $HOME/.nvm/nvm.sh && npm test
```
