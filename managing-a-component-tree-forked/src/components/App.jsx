import React, { useState } from "react";
import ToDoItem from "./ToDoItem";
import { v4 as uuidv4 } from 'uuid';
import InputArea from "./InputArea"

function App() {
  const [items, setItems] = useState([]);

  function addItem(inputText) {
    setItems(prevItems => {
      return [...prevItems,
        {key: uuidv4(), value: inputText}];
    });
  }

  function deleteItem(key) {
    setItems( (prevItems) => {
      return prevItems.filter(todoItem => {
        return todoItem.key !== key;
      })
    } )
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <InputArea
        onAdd={addItem}
       />
      <div>
        <ul>
          {items.map(todoItem => (
            <ToDoItem
              onChecked={deleteItem}
              id={todoItem.key}
              key={todoItem.key}
              value={todoItem.value}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
