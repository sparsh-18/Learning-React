import React, { useState } from "react";

import { v4 as uuidv4 } from "uuid";

function CreateArea(props) {
  const [noteInput, setInput] = useState({
    key: 0,
    title: "",
    content: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    // console.log(name, value);

    setInput((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }

  function handleClick(event) {
    event.preventDefault();
    props.newNote({
      ...noteInput,
      key: uuidv4(),
    });
    setInput({ key: 0, title: "", content: "" });
  }

  return (
    <div>
      <form>
        <input
          name="title"
          placeholder="Title"
          value={noteInput.title}
          onChange={handleChange}
        />
        <textarea
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={noteInput.content}
          onChange={handleChange}
        />
        <button onClick={handleClick}>+</button>
      </form>
    </div>
  );
}

export default CreateArea;
