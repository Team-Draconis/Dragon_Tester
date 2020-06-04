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
    }).then((res) => {
      // Do a fast client-side transition to the already prefetched dashboard page
      if (res.ok) Router.push("/api/codetest");
    });
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
      <Link href="/">Go Back To Home</Link>
    </div>
  );
}
