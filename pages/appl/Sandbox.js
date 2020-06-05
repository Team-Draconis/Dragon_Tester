import "./styles.scss";
import React, { useEffect, useState, useRef } from "react";
import ReactDOM from "react-dom";
import { createEditor } from "../../utils/editor";
import debounce from "debounce";
import Link from "next/link";
import Router from "next/router";

// default code
const code = `import x from 'x';
// edit this example
function Greet() {
  return <span>Hello World!</span>
}
<Greet />
`;
export default function SandBox() {
  const [codeInput, setCodeInput] = useState(code);
  const [email, setEmail] = useState("email");
  const [city, setCity] = useState("city");

  let editor = null;
  const el = useRef(null);
  const runCode = () => {
    editor = createEditor(el.current);
    editor.run(codeInput);
    run(codeInput);
  };
  const onCodeChange = ({ target: { value } }) => {
    setCodeInput(value);
  };

  const onEmailChange = ({ target: { value } }) => {
    setEmail(value);
  };

  const onCityChange = ({ target: { value } }) => {
    setCity(value);
  };

  const run = () => {
    editor.run(codeInput);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);

    fetch("/api/codetest", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        candidate_email: email,
        codes: codeInput,
        city: city,
      }),
    })
      .then((res) => {
        // Do a fast client-side transition to the already prefetched dashboard page
        if (res.ok) Router.push("/appl/end");
      })
      .catch((error) => {
        console.log(error); // add more detail error later
      });
  };

  const Test = () => {
    const expect = `import x from 'x';\n// edit this example\nfunction Greet() {\n  return <span>Hello World!</span>\n}\n<Greet />`;
    if (codeInput.includes(expect)) {
      return "Pass!";
    }
    console.log(codeInput);
    console.log(expect);
    return "Failllllllll";
  };

  const result = "test result";

  const runTest = async () => {
    await fetch("/api/testRunner").then((res) =>
      res.json().then((res) => console.log(JSON.stringify(res)))
    );
  };

  return (
    <div className="app">
      <input type="text" onChange={onEmailChange} value={email} />
      <input type="text" onChange={onCityChange} value={city} />

      <div className="split-view">
        <div className="code-editor">
          <textarea
            value={codeInput}
            onChange={(e) => setCodeInput(e.target.value)}
          />
        </div>
        <div className="preview" ref={el} />
      </div>
      <button onClick={runCode}>Run</button>

      <button onClick={handleSubmit}>Submit</button>
      <Link href="/appl/report">Review Results</Link>
      <Link href="/">
        <button>Go Back To Home</button>
      </Link>
      <button onClick={runTest}>Test</button>
      <div className="split-view">
        <Test />
      </div>
    </div>
  );
}
