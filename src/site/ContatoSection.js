import React, { useState, useEffect } from "react";
import M from "materialize-css/dist/js/materialize.min.js";

import "./ContatoSection.css";
import { validate, VALIDATOR_EMAIL } from "../shared/Utils/validators";

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

  /* LOGIC TO SEND MESSAGE TO BACKEND AND SHOWING TOAST ON THE SCREEN */
  const [messageSent, setMessageSent] = useState(false);

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
  }, [messageSent === true]);

  const sendMessage = () => {
    console.log("mensagem enviada");
    setMessageSent(true);
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
              <form>
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
                    class="helper-text"
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
                  <span class="helper-text" data-error="Email Inválido!"></span>
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
                    class="helper-text"
                    data-error="A mensagem não pode conter menos de 10 caracteres!"
                  ></span>
                </div>

                <input
                  onClick={sendMessage}
                  type="submit"
                  disabled={!inputs.isValid}
                  className="btn cyan"
                  value="Enviar"
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
