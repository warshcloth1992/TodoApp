import React, { useState } from "react";


const Login = props => {
  const [state, setState] = useState({
    username: "",
    password: ""
  });

  const handleChange = event => {
    const { name, value } = event.target;

    setState({
      ...state,
      [name]: value
    });
  };
  return (
    <form>
      <label htmlFor="username">Username</label>
      <input
        type="text"
        name="username"
        id="username"
        value={state.username}
        onChange={handleChange}
      />
      <label htmlFor="password">password</label>
      <input
        type="text"
        name="password"
        id="password"
        value={state.password}
        onChange={handleChange}
      />
      <input
        type="button"
        value="Submit"
        onClick={() => {
          props.handleSubmit(state);
        }}
      />
    </form>
  );
};


export default Login