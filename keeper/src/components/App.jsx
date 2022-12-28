import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";

// import notes from "../notes"

// function App() {
//     return (
//         <div>
//             <Header/>

//             {notes.map( note => {
//                 return (
//                     <Note
//                     key = {note.key}
//                     title = {note.title}
//                     content = {note.content}
//                     />
//                 )
//             })}

//             <Footer/>
//         </div>
//     );
// }

import CreateArea from "./CreateArea";

function App() {
  const [allNotes, setNotes] = useState([]);

  function addNote(note) {
    setNotes((prevValue) => {
      return [...prevValue, note];
    });
  }

  function deleteNote(key) {
    setNotes((prevValue) => {
        return prevValue.filter(note => note.key !== key)
    })
  }

  return (
    <div>
      <Header />
      <CreateArea newNote={addNote} />

      {allNotes.map((note) => {
        return (
            <Note 
                key={note.key}
                id={note.key}
                title={note.title}
                content={note.content}
                handleDelete={deleteNote}
            />
        );
      })}

      <Footer />
    </div>
  );
}

export default App;
