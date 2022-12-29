import React, { useState } from "react";

import { v4 as uuidv4 } from "uuid";

import AddIcon from '@mui/icons-material/Add';
import { Fab, Zoom } from '@mui/material';

function CreateArea(props) {
  const [noteInput, setInput] = useState({
    key: 0,
    title: "",
    content: "",
  });

  const [clicked, setClick] = useState(false);

  function toggleClick() {
    setClick(!clicked);
  }

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
    toggleClick();
  }

  return (
    <div>
      <form className="create-note">
        <input
          name="title"
          placeholder={clicked ? "Title" : "New Note"}
          value={noteInput.title}
          onChange={handleChange}
          onClick={toggleClick}
        />
        {clicked && <textarea
          name="content"
          placeholder="Take a note..."
          rows={clicked ? "3": '1'}
          value={noteInput.content}
          onChange={handleChange}
        />}

        <Zoom in={clicked}>
          <Fab onClick={handleClick}>
            <AddIcon />
          </Fab>
        </Zoom>

      </form>
    </div>
  );
}

export default CreateArea;
