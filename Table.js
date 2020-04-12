import React, { Component } from "react";

const Table = props => {
  const { characterData, removeCharacter } = props;

  return (
    <table>
      <TableHeader />
      <TableBody characterData={characterData} removeCharacter={removeCharacter}/>
    </table>
  );
};

const TableHeader = () => {
  return (
    <thread>
      <tr>
        <th>Name</th>
        <th>Task</th>
      </tr>
    </thread>
  );
};

const TableBody = props => {
  const rows = props.characterData.map((row, index) => {
    return (
      <tr key={index}>
        <td>{row.name}</td>
        <td>{row.task}</td>
        <td>
            <button onClick={() => props.removeCharacter(index)}>Delete</button>
        </td>
      </tr>
    );
  });
  return <tbody>{rows}</tbody>;
};

export default Table;
