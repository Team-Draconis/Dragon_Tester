import "./styles.scss";
import React, { useEffect, useState, useRef } from "react";
import ReactDOM from "react-dom";
import { createEditor } from "../../utils/editor";
import debounce from "debounce";
import Link from "next/link";

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

  let editor = null;

  const el = useRef(null);

  const runCode = () => {
    editor = createEditor(el.current);
    editor.run(codeInput);
    run(codeInput);
  };

  const run = () => {
    editor.run(codeInput);
  };

  const submitCode = ({ target: { value } }) => {};

  return (
    <div className="app">
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
      <button onClick={submitCode}>Submit</button>
      <Link href="/">
        <button>Go Back To Home</button>
      </Link>
    </div>
  );
}
