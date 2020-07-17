import React, { Component } from "react";

import Card from "./Card";
import Modal from "./Modal";
import "./CardsSection.css";

import osteopatia from "../img/icons/osteopatia.svg";
import pilates from "../img/icons/pilates.svg";
import mckenzie from "../img/icons/mckenzie.svg";
import rpg from "../img/icons/rpg.svg";
import liberacao from "../img/icons/liberacao.svg";

class CardsSection extends Component {
  render() {
    return (
      <section
        className="container cards-section scrollspy"
        id="especialidades"
      >
        <div className="row">
          <div className="col s12 m4 ">
            <Card especialidade="Osteopatia" img={osteopatia} href="#modal1" />
          </div>
          <div className="col s12 m4">
            <Card especialidade="Pilates" img={pilates} href="#modal2" />
          </div>
          <div className="col s12 m4">
            <Card especialidade="RPG" img={rpg} href="#modal4" />
          </div>
        </div>
        <div className="row">
          <div className="col s12 m4 offset-m2">
            <Card
              especialidade="Método McKenzie"
              img={mckenzie}
              href="#modal3"
            />
          </div>

          <div className="col s12 m4">
            <Card
              especialidade="Liberação Miofascial"
              img={liberacao}
              href="#modal5"
            />
          </div>
        </div>

        <Modal id="modal1" />
        <Modal id="modal2" />
        <Modal id="modal3" />
        <Modal id="modal4" />
        <Modal id="modal5" />
      </section>
    );
  }
}

export default CardsSection;
