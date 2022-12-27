import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });

  function handleChange(event) {
    const { value, name } = event.target;

    setContact((prevValue) => {
      // if(name === "fName") {
      //     return {
      //       fName: value,
      //       lName: prevValue.lName,
      //       email: prevValue.email
      //     }
      // } else if(name === 'lName') {
      //     return {
      //       lName: value,
      //       fName: prevValue.fName,
      //       email: prevValue.email
      //     }
      // } else if(name === 'email') {
      //     return {
      //       email: value,
      //       lName: prevValue.lName,
      //       fName: prevValue.fName
      //     }
      // }

      return {
        ...prevValue,
        [name]: value
      };
    });
  }

  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form>
        <input
          name="fName"
          value={contact.fName}
          onChange={handleChange}
          placeholder="First Name"
        />
        <input
          name="lName"
          value={contact.lName}
          onChange={handleChange}
          placeholder="Last Name"
        />
        <input
          name="email"
          value={contact.email}
          onChange={handleChange}
          placeholder="Email"
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
