import React, { useState } from "react";
import Table from "./Table";
import Form from "./form";

const App = props => {
  const [characters, setCharacters] = useState(
      props.data
  );
  const removeCharacter = index => {
    setCharacters(
      characters.filter((character, i) => {
        return i !== index;
      })
    );
  };
  const addCharacter = character => {
    setCharacters(
        [...characters, character]
    );
  };
  return (
    <div className="container">
      <Table characterData={characters} removeCharacter={removeCharacter} />
      <Form addCharacter={addCharacter} />
    </div>
  );
};
export default App;
