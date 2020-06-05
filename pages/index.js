import React, { Component } from "react";
// import "./index.css";
// import Sandbox from "./Sandbox";
// import Link from "next/link";
// import Sandbox from "./appl/Sandbox";
import NavBar from "./NavBar";

class Index extends Component {
  state = {};
  render() {
    const handleSubmit = (e) => {
      console.log(e);
    };
    return (
      <div>
        <NavBar />
        <h3>Applicant Login page</h3>
        <h4>
          This is where the app will launch. From here the default action will
          be for applicants to login, from the NavBar companies can log in
        </h4>
        <h4>Applicant login information, email address and password</h4>
        {/* <form action="/appl/info"> */}
        <form>
          Name: <input type="text" name="fname" /> <br />
          Email: <input type="text" name="femail" /> <br />
          <input onClick={handleSubmit} type="submit" />
        </form>
        <a href="/appl/splash" className="card">
          <h3>Go to the splash page</h3>
        </a>
        <a href="/appl/register" className="card">
          <h3>Register</h3>
        </a>
      </div>
    );
  }
}

export default Index;
