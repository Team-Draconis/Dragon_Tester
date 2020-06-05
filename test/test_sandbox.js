import React from "react";
import ReactDOM from "react-dom";
import ReactTestUtils, { act } from "react-dom/test-utils";
import { expect } from "chai";

import Sample from "./sample";

const jsdom = require("mocha-jsdom");

global.document = jsdom({
  url: "http://localhost:3000",
});

let container = null;

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});

describe("Testing sample component", () => {
  it("Sample component is rendered", () => {
    act(() => {
      ReactDOM.render(<Sample />, container);
    });
    const actual = container.querySelector("a");
    expect(actual.textContent).to.equal("Want to buy a new car?");
  });

  it("text should be displayed when page is loaded", () => {
    act(() => {
      ReactDOM.render(<Sample />, container);
    });
    const text = container.querySelector("p");
    expect(text.style.display).to.equal("none");
  });

  it("text should not be displayed after link is clicked", () => {
    act(() => {
      ReactDOM.render(<Sample />, container);
    });
    const text = container.querySelector("p");
    const link = container.querySelector("a");
    ReactTestUtils.Simulate.click(link);
    expect(text.style.display).to.equal("block");
  });
});
