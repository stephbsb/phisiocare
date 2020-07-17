import React, { useCallback, useReducer } from "react";

import "./ContatoSection.css";

import Input from "../shared/FormElements/Input";
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH,
  VALIDATOR_EMAIL,
} from "../shared/Utils/validators";

const formReducer = (state, action) => {
  switch (action.type) {
    case "INPUT_CHANGE":
      let formIsValid = true;
      for (const inputId in state.inputs) {
        if (inputId === action.inputId) {
          formIsValid = formIsValid && action.isValid;
        } else {
          formIsValid = formIsValid && state.inputs[inputId].isValid;
        }
      }
      return {
        ...state,
        input: {
          ...state.inputs,
          [action.inputId]: { value: action.value, isValid: action.isValid },
        },
        isValid: formIsValid,
      };
    default:
      return state;
  }
};

const ContatoSection = () => {
  const [formState, dispatch] = useReducer(formReducer, {
    inputs: {
      nome: {
        value: "",
        isValid: false,
      },
      email: {
        value: "",
        isValid: false,
      },
      mensagem: {
        value: "",
        isValid: false,
      },
    },
    isValid: false,
  });

  const inputHandler = useCallback((id, value, isValid) => {
    dispatch({
      type: "INPUT_CHANGE",
      value: value,
      isValid: isValid,
      inputId: id,
    });
  }, []);

  return (
    <section
      className="section center scrollspy contato-section cyan"
      id="contato"
    >
      <div className="container">
        <div className="row">
          <div className="col s12 m12 l6 offset-l3">
            <div className="card-panel z-depth-5">
              <h5>Contate-nos</h5>
              <form>
                <Input
                  element="input"
                  type="text"
                  id="nome"
                  placeholder="Nome"
                  label="Nome"
                  errorText="Nome inválido!"
                  validators={[VALIDATOR_REQUIRE()]}
                  onInput={inputHandler}
                />

                <Input
                  element="input"
                  type="email"
                  id="email"
                  placeholder="Email"
                  label="Email"
                  errorText="Email inválido!"
                  validators={[VALIDATOR_EMAIL()]}
                  onInput={inputHandler}
                />

                <Input
                  element="textarea"
                  id="mensagem"
                  placeholder="Mensagem"
                  label="Mensagem"
                  errorText="O texto nao pode ser menor que 10 caracteres!"
                  validators={[VALIDATOR_MINLENGTH(10)]}
                  onInput={inputHandler}
                />

                <input
                  type="submit"
                  value="Enviar"
                  disabled={!formState.isValid}
                  className="btn cyan"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContatoSection;
