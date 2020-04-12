import React, { Component, useState } from "react";
import Table from "./Table";
import Form from "./form";

const App = () => {
  const [characters, setCharacters] = useState([
    {
      name: "Mike",
      task: "Day Dream"
    },
    {
      name: "Kell",
      task: "Dilly Dally"
    },
    {
      name: "Careem",
      task: "Lay About"
    },
    {
      name: "Yanis",
      task: "Chill Like A Villan"
    }
  ]);
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
