import React, { Component } from "react";
// import "./index.css";
// import Sandbox from "./Sandbox";
// import Link from "next/link";
import NavBar from "./NavBar";

class Index extends Component {
  state = {};
  render() {
    return (
      <div>
        <NavBar />
        <h3>Login page</h3>
        <a href="http://localhost:3000/appl/splash" className="card">
          <h3>Go to the splash</h3>
        </a>
      </div>
    );
  }
}

export default Index;