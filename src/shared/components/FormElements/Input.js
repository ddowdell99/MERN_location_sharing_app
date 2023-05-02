import React, { useReducer } from "react";

import "./Input.css";

const inputReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE":
      return {
        // copies what the state is currently (or old state)
        ...state,
        value: action.val,
        isValid: true,
      };
    // below happens if case is not achieved
    default:
      return state;
  }
};

const Input = (props) => {
  // inputState for useReducer is the same as calling the current state in useState
  // dispatch is what is used to call useReducer and provides input for the the inputReducer function
  // gave an initial state to the useReducer, just like useState here at the end in {}
  const [inputState, dispatch] = useReducer(inputReducer, {
    value: "",
    isValid: false,
  });

  const changeHandler = (event) => {
    dispatch({ type: "CHANGE", val: event.target.value });
  };

  const element =
    props.element === "input" ? (
      <input
        id={props.id}
        type={props.type}
        placeholder={props.placeholder}
        onChange={changeHandler}
        value={inputState.value}
      />
    ) : (
      <textarea
        id={props.id}
        rows={props.rows || 3}
        onChange={changeHandler}
        value={inputState.value}
      />
    );

  return (
    <div className={`form-control ${!inputState.isValid && 'form-control--invalid'}`}>
      <label htmlFor={props.id}>{props.label}</label>
      {element}
      {/* Putting ! at the beginning of this statement reverses it. So if inputState.isValid is FALSE */}
      {!inputState.isValid && <p>{props.errorText}</p>}
    </div>
  );
};

export default Input;
