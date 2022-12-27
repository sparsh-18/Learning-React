import React from "react";
import { createRoot } from "react-dom/client";

import App from "./components/App";

// var ReactDOM = require("react-dom");

// ReactDOM.render(What to show, When to show, callback on finished)

// const para = "para";

// // old format
// ReactDOM.render(
//   <div>
//     <h1>Hello World</h1>
//     <p>{para} tag</p>
//     <ul>
//       <li> Point 1 </li>
//       <li> Point 2 </li>
//       <li> Point 3 </li>
//     </ul>
//     <h4> Random number {Math.floor(Math.random() * 10)} </h4>
//   </div>,
//   document.getElementById("root")
// );

const root = createRoot(document.getElementById("root"));
root.render(<App />);

// As the html written in render is jsx format hence we need to use
// className instead of class as Js uses className attribute

// If we write "export default Something" then we can import Something from "file", by default
// To export more than one functions, export {Something1, Something2} then,
// import {Something1, Something2} from "file" or,
// import * as Things from "file" and,
// Things.Something1
// Things.Something2
