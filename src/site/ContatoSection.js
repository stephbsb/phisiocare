/* NOTE: Refactor this code, is too long. Assign nome parts to other components */

import React, { useState, useEffect } from "react";
import M from "materialize-css/dist/js/materialize.min.js";

import "./ContatoSection.css";
import { validate, VALIDATOR_EMAIL } from "../shared/Utils/validators";
import LoadingSpiner from "../shared/Components/LoadingSpiner";
import LoadingSpinner from "../shared/Components/LoadingSpiner";

const ContatoSection = (props) => {
  /* FORM VALIDATION */
  const [inputs, setInputs] = useState({
    nome: "",
    email: "",
    mensagem: "",
    isNameValid: false,
    isEmailValid: false,
    isMessageValid: false,
    isValid: false,
  });

  const onInputHandler = (event) => {
    const valueLength = event.target.value.length;

    const id = event.target.id;

    if (id === "nome") {
      const isNameValid = valueLength > 3;
      setInputs({
        ...inputs,
        nome: event.target.value,
        isNameValid: isNameValid,
      });

      if (isNameValid) {
        event.target.className = "valid";
      } else {
        event.target.className = "invalid";
      }
    } else if (id === "email") {
      const isEmailValid = validate(event.target.value, [VALIDATOR_EMAIL()]);

      setInputs({
        ...inputs,
        email: event.target.value,
        isEmailValid: isEmailValid,
      });
      if (isEmailValid) {
        event.target.className = "valid";
      } else {
        event.target.className = "invalid";
      }
    } else {
      const isMessageValid = valueLength >= 10;
      setInputs({
        ...inputs,
        mensagem: event.target.value,
        isMessageValid: isMessageValid,
      });
      if (isMessageValid) {
        event.target.className = "materialize-textarea valid";
      } else {
        event.target.className = "materialize-textarea invalid";
      }
    }
  };

  useEffect(() => {
    if (inputs.isNameValid && inputs.isMessageValid && inputs.isEmailValid) {
      setInputs({ ...inputs, isValid: true });
    } else {
      setInputs({ ...inputs, isValid: false });
    }
  }, [inputs.isNameValid, inputs.isEmailValid, inputs.isMessageValid]);

  /* LOGIC TO SEND MESSAGE TO BACKEND AND SHOWING ERROR OR SUCCESS DELIVERY */
  const [messageSent, setMessageSent] = useState(false);
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (messageSent) {
      M.toast({ html: "Mensagem Enviada!" });
      setInputs({
        nome: "",
        email: "",
        mensagem: "",
        isNameValid: false,
        isEmailValid: false,
        isMessageValid: false,
        isValid: false,
      });
      setMessageSent(false);
    }

    if (error) {
      M.toast({ html: error });
      setError(null);
    }
  }, [messageSent, error]);

  const sendMessage = async (event) => {
    event.preventDefault();

    try {
      setIsLoading(true);
      const response = await fetch(
        "http://localhost:5000/api/message/newmessage",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            nome: inputs.nome,
            email: inputs.email,
            mensagem: inputs.mensagem,
          }),
        }
      );

      const responseData = await response.json();

      console.log(responseData);

      setIsLoading(false);
      setMessageSent(true);
    } catch (err) {
      console.log(err);
      setIsLoading(false);
      setError("Algo deu errado, tente novamente.");
    }
  };

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
              <form onSubmit={sendMessage}>
                <div className="input-field">
                  <input
                    type="text"
                    id="nome"
                    placeholder="Nome"
                    value={inputs.nome}
                    onChange={onInputHandler}
                  />
                  <label for="nome">Nome</label>
                  <span
                    className="helper-text"
                    data-error="O nome não pode ter menos que 3 caracteres!"
                  ></span>
                </div>
                <div className="input-field">
                  <input
                    type="email"
                    id="email"
                    placeholder="Email"
                    value={inputs.email}
                    onChange={onInputHandler}
                  />
                  <label for="email">Email</label>
                  <span
                    className="helper-text"
                    data-error="Email Inválido!"
                  ></span>
                </div>

                <div className="input-field">
                  <textarea
                    id="mensagem"
                    className="materialize-textarea"
                    placeholder="Mensagem"
                    value={inputs.mensagem}
                    onChange={onInputHandler}
                  />
                  <label for="mensagem">Mensagem</label>
                  <span
                    className="helper-text"
                    data-error="A mensagem não pode conter menos de 10 caracteres!"
                  ></span>
                </div>

                <button
                  type="submit"
                  disabled={!inputs.isValid}
                  className="btn cyan form-button"
                >
                  {isLoading ? <LoadingSpinner /> : "Enviar"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContatoSection;
