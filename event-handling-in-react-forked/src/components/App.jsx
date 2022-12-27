import React, { useState } from "react";

function App() {
  const [isMouseOver, setMouseOver] = useState(false);
  const [name, setName] = useState("");

  function handleMouseOver() {
    setMouseOver(!isMouseOver);
  }

  function submit() {
    setName(document.getElementsByTagName("input")[0].value);
  }

  return (
    <div className="container">
      <h1>Hello {name.length > 0 && ", " + name}</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        style={{ backgroundColor: isMouseOver ? "black" : "white" }}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOver}
        onClick={submit}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
