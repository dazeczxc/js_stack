import {fireEvent, getByTestId} from "@testing-library/dom"
import "@testing-library/jest-dom/extend-expect"
import jsdom, {JSDOM} from "jsdom"
import path from "path"

const BASE = path.resolve(__dirname, "../src");

let virtualConsole
let dom, body

describe("stack operation test", function () {
  beforeEach(async () => {
    virtualConsole = new jsdom.VirtualConsole();
    virtualConsole.on("error", console.error);
    dom = await JSDOM.fromFile(`${BASE}/index.html`, {
      runScripts: "dangerously",
      resources: "usable",
      pretendToBeVisual: true,
      virtualConsole
    })
    await loadDom(dom)
    body = dom.window.document.body
  })

  beforeEach(() => {
    jest.spyOn(dom.window, 'alert').mockImplementation(() => {
    })
  })

  it("Clicking on the push button should push the item to the bottom of the stack board", async function () {
    const input = getByTestId(body, "input")
    await typeText(input, "item1")

    const pushButton = getByTestId(body, "pushButton")
    fireEvent.click(pushButton)

    const item1 = getByTestId(body, "1")
    expect(innerText(item1)).toEqual("item1")

    await typeText(input, "item2")
    fireEvent.click(pushButton)

    const item2 = getByTestId(body, "2")
    expect(innerText(item2)).toEqual("item2")
  });

  it("Without any input clicking on push button should show output “Please input a value”", async function () {
    const input = getByTestId(body, "input")
    await typeText(input, "")

    const pushButton = getByTestId(body, "pushButton")
    fireEvent.click(pushButton)

    expect(dom.window.alert).toHaveBeenCalledWith("Please enter a value!")
  });

  it("Peek button click should show an output “operation not allowed” if the stack board is empty.", async function () {
    const peekButton = getByTestId(body, "peekButton")
    fireEvent.click(peekButton)

    expect(dom.window.alert).toHaveBeenCalledWith("Operation not allowed!")
  });

  it("Clicking on the “empty” button should show output whether the stack is empty or not.", async function () {
    const emptyButton = getByTestId(body, "emptyButton")
    fireEvent.click(emptyButton)

    expect(dom.window.alert).toHaveBeenCalledWith("Yes, Stack is empty")
    dom.window.alert.mockReset()

    const input = getByTestId(body, "input")
    await typeText(input, "item1")

    const pushButton = getByTestId(body, "pushButton")
    fireEvent.click(pushButton)
    fireEvent.click(emptyButton)

    expect(dom.window.alert).toHaveBeenCalledWith("No, Stack is not empty")
  });

  it("Clicking on the peek button should return the item on the top of the stack, without removing it.", async function () {
    const input = getByTestId(body, "input")
    await typeText(input, "item1")

    const pushButton = getByTestId(body, "pushButton")
    fireEvent.click(pushButton)

    await typeText(input, "item2")
    fireEvent.click(pushButton)

    const peekButton = getByTestId(body, "peekButton")
    fireEvent.click(peekButton)

    expect(dom.window.alert).toHaveBeenCalledWith("Top Value is: item2")
  });

  it("While pushing an item if stack board is full should show the output “Stack was already full!” and there is no change in the existing stack.", async function () {
    const input = getByTestId(body, "input")
    await typeText(input, "item1")

    const pushButton = getByTestId(body, "pushButton")
    fireEvent.click(pushButton)

    await typeText(input, "item2")
    fireEvent.click(pushButton)
    await typeText(input, "item3")
    fireEvent.click(pushButton)
    await typeText(input, "item4")
    fireEvent.click(pushButton)
    await typeText(input, "item5")
    fireEvent.click(pushButton)

    expect(dom.window.alert).not.toHaveBeenCalled()

    await typeText(input, "item6")
    fireEvent.click(pushButton)

    expect(dom.window.alert).toHaveBeenCalledWith("Stack was already full!")
  });
});

function loadDom(dom) {
  return new Promise((resolve, _) => {
    virtualConsole.on("log", log => {
      if (log === "DOM Loaded") resolve(dom)
    })
  })
}

function innerText(node) {
  return node.innerText || node.textContent
}


async function typeText(input, text) {
  await fireEvent.input(input, {target: {value: text}})
  await fireEvent.change(input, {target: {value: text}})
}