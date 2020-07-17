import React, { useReducer, useEffect } from "react";

import { validate } from "../Utils/validators";
import "./Input.css";

const inputReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE":
      return {
        ...state,
        value: action.val,
        isValid: validate(action.val, action.validators),
      };
    case "TOUCH":
      return {
        ...state,
        isTouched: true,
      };
    default:
      return state;
  }
};

const Input = (props) => {
  // gerencia estados mais complexos e interconectados
  const [inputState, dispatch] = useReducer(inputReducer, {
    value: "",
    isTouched: false,
    isValid: false,
  });

  const { id, onInput } = props;
  const { value, isValid } = inputState;

  useEffect(() => {
    onInput(id, value, isValid);
  }, [id, value, isValid, onInput]); // useEffect será acionado quando houver mudanças nos valores destas dependencias.

  const changeHandler = (event) => {
    // envia novos valores para o novo estado
    dispatch({
      type: "CHANGE",
      val: event.target.value,
      validators: props.validators,
    });
  };

  // para onBlur, quando input nao esta em foco
  const touchHandler = () => {
    dispatch({
      type: "TOUCH",
    });
  };

  const element =
    props.element === "input" ? (
      <input
        id={props.id}
        type={props.type}
        placeholder={props.placeholder}
        onChange={changeHandler}
        onBlur={touchHandler}
        value={inputState.value}
        className={!inputState.isValid && inputState.isTouched && "invalid"}
      />
    ) : (
      <textarea
        id={props.id}
        className={`materialize-textarea ${
          !inputState.isValid && inputState.isTouched && "invalid"
        }`}
        placeholder={props.placeholder}
        onChange={changeHandler}
        onBlur={touchHandler}
        value={inputState.value}
      />
    );

  return (
    <div className={`input-field`}>
      <label htmlFor={props.id}>{props.label}</label>
      {element}
      <span className="helper-text" data-error={props.errorText}></span>
    </div>
  );
};

export default Input;
