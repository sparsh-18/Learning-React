// CHALLENGE: uncomment the code below and see the car stats rendered
import React from "react";
import ReactDOM from "react-dom";

import cars from "./practice"

// console.log(cars);

const [honda, tesla] = cars;

// console.log(tesla.model);

const {
  speedStats: {
    topSpeed: teslaTopSpeed
  }
} = tesla;

// console.log(teslaTopSpeed);


const {
  speedStats: {
    topSpeed: hondaTopSpeed
  }
} = honda;

const {
  coloursByPopularity: [teslaTopColour]
} = tesla;

const {
  coloursByPopularity: [hondaTopColour]
} = honda;

ReactDOM.render(
  <table>
    <tr>
      <th>Brand</th>
      <th>Top Speed</th>
    </tr>
    <tr>
      <td>{tesla.model}</td>
      <td>{teslaTopSpeed}</td>
      <td>{teslaTopColour}</td>
    </tr>
    <tr>
      <td>{honda.model}</td>
      <td>{hondaTopSpeed}</td>
      <td>{hondaTopColour}</td>
    </tr>
  </table>,
  document.getElementById("root")
);
