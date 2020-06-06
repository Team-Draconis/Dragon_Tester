import React, { useState } from "react";

function Sample() {
  const [display, setDisplay] = useState("none");
  const toggle = () => {
    display === "none" ? setDisplay("block") : setDisplay("none");
  };

  return (
    <div>
      <a href="#" onClick={toggle}>
        Want to buy a new car?
      </a>
      <p style={{ display }}>Call +11 22 33 44 now!</p>
    </div>
  );
}

export default Sample;
