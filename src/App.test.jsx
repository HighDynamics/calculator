import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

const press = (user, ...labels) =>
  labels.reduce(
    (chain, label) =>
      chain.then(() => user.click(screen.getByRole("button", { name: label }))),
    Promise.resolve()
  );

test("adds two numbers", async () => {
  const user = userEvent.setup();
  render(<App />);

  await press(user, "7", "+", "5", "=");

  expect(document.getElementById("expression")).toHaveTextContent("7 + 5 =");
  expect(document.getElementById("evaluation")).toHaveTextContent("12");
});

test("negates and takes a percentage of the entered number", async () => {
  const user = userEvent.setup();
  render(<App />);

  await press(user, "5", "+/-");
  expect(document.getElementById("output")).toHaveTextContent("-5");

  await press(user, "%");
  expect(document.getElementById("output")).toHaveTextContent("-0.05");
});

test("AC clears the expression", async () => {
  const user = userEvent.setup();
  render(<App />);

  await press(user, "9", "x", "6", "=");
  expect(document.getElementById("evaluation")).toHaveTextContent("54");

  await press(user, "AC");
  expect(document.getElementById("expression")).toBeEmptyDOMElement();
  expect(document.getElementById("evaluation")).toBeEmptyDOMElement();
});
