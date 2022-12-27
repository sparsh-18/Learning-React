import React, { useState } from "react";

function App() {

  const now = new Date().toLocaleTimeString();
  const [time, setTime] = useState(now)

  const [welcome, toggle] = useState(false)

  function updateTime() {
    toggle(true);
    setTime(new Date().toLocaleTimeString());
    setInterval(updateTime ,1000)
  }


  return (
    <div className="container">
      {welcome && <h1> {time} </h1>}
      {!welcome && <button onClick={updateTime} >Show Time</button>}
    </div>
  );
}

export default App;
