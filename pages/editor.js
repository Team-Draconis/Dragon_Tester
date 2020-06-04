/* eslint-disable */
import React from "react";
import ReactDOM from "react-dom";
import ObjPath from "object-path";

import * as Acorn from "acorn";

import { generate as generateJs } from "escodegen";
import { transform as babelTransform } from "@babel/standalone";

function isReactNode(node) {
  const type = node.type; //"ExpressionStatement"
  const obj = ObjPath.get(node, "expression.callee.object.name");
  const func = ObjPath.get(node, "expression.callee.property.name");
  return (
    type === "ExpressionStatement" &&
    obj === "React" &&
    func === "createElement"
  );
}

export function findReactNode(ast) {
  const { body } = ast;
  return body.find(isReactNode);
}

export function createEditor(domElement, moduleResolver = () => null) {
  function render(node) {
    ReactDOM.render(node, domElement);
  }

  function require(moduleName) {
    return moduleResolver(moduleName);
  }

  function getWrapperFunction(code) {
    try {
      // 1. transform code
      const tcode = babelTransform(code, { presets: ["es2015", "react"] }).code;

      // 2. get AST
      const ast = Acorn.parse(tcode, {
        sourceType: "module",
      });

      // 3. find React.createElement expression in the body of program
      const rnode = findReactNode(ast);

      if (rnode) {
        const nodeIndex = ast.body.indexOf(rnode);
        // 4. convert the React.createElement invocation to source and remove the trailing semicolon
        const createElSrc = generateJs(rnode).slice(0, -1);
        // 5. transform React.createElement(...) to render(React.createElement(...)),
        // where render is a callback passed from outside
        const renderCallAst = Acorn.parse(`render(${createElSrc})`).body[0];

        ast.body[nodeIndex] = renderCallAst;
      }

      // 6. create a new wrapper function with all dependency as parameters
      return new Function("React", "render", "require", generateJs(ast));
    } catch (ex) {
      // in case of exception render the exception message
      render(<pre style={{ color: "red" }}>{ex.message}</pre>);
    }
  }

  return {
    // returns transpiled code in a wrapper function which can be invoked later
    compile(code) {
      return getWrapperFunction(code);
    },

    // compiles and invokes the wrapper function
    run(code) {
      this.compile(code)(React, render, require);
    },

    // just compiles and returns the stringified wrapper function
    getCompiledCode(code) {
      return getWrapperFunction(code).toString();
    },
  };
}
