import React, { useState } from "react";

const initialState = {
  name: "",
  task: ""
};

const Form = props => {
  const [state, setState] = useState(initialState);

  const handleChange = event => {
    const { name, value } = event.target;

    setState({
      ...state,
      [name]: value
    });
  };
  return (
    <form
      
    >
      <label htmlFor="name">Name</label>
      <input
        type="text"
        name="name"
        id="name"
        value={state.name}
        onChange={handleChange}
      />
      <label htmlFor="task">task</label>
      <input
        type="text"
        name="task"
        id="task"
        value={state.task}
        onChange={handleChange}
      />
      <input type="button" value="Submit"
      onClick={() => {
        props.addCharacter(state);
        setState(initialState);
      }}
      />

    </form>
  );
};
export default Form;
