import fetch from "isomorphic-unfetch";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import { createEditor } from "../../../utils/editor";
import Link from "next/link";
import Router from "next/router";
import "../../appl/styles.scss";

const TestResult = ({ testResult }) => {
  let editor = null;
  const el = useRef(null);
  const runCode = () => {
    editor = createEditor(el.current);
    editor.run(testResult.codes);
    run(testResult.codes);
  };
  const run = () => {
    editor.run(testResult.codes);
  };
  return (
    <div>
      <h1> Here is the candidate's test result</h1>
      <p>{testResult.candidate_email}</p>
      <p>{testResult.city}</p>

      <div className="app">
        <div className="split-view">
          <div className="code-editor">
            <textarea value={testResult.codes} />
          </div>
          <div className="preview" ref={el} />
        </div>
        <button onClick={runCode}>Run</button>
      </div>
    </div>
  );
};

TestResult.getInitialProps = async ({ query: { id } }) => {
  const res = await fetch(`https://dragon-tester.now.sh/api/${id}/`);
  const { data } = await res.json();
  return { testResult: data };
};

export default TestResult;
