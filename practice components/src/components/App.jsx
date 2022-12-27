import React from "react";
import List from "./List";

const year = new Date().getFullYear();

const randomImg = "https://picsum.photos/200";

const copyright = {
  color: "green",
  fontSize: "15px"
};

const para = "para";

function Copyright() {
  return <p style={copyright}> Copyright {year} </p>;
}

function App() {
  return (
    <div>
      <h1 className="color1">Hello World</h1>
      <p>{para} tag</p>

      <List />

      <h4> Random number {Math.floor(Math.random() * 10)} </h4>
      <img src={randomImg} alt="" />

      <Copyright />
    </div>
  );
}

export default App;
