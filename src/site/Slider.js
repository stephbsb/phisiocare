import React, { Component } from "react";

import "./Slider.css";

import img1 from "../img/slider/pilates2.jpg";
import img2 from "../img/slider/osteopatia-entenda-o-que-e-e-que-doencas-trata.jpeg";
import img3 from "../img/slider/leQuartier2.png";

class Slider extends Component {
  render() {
    return (
      <section className="slider-style">
        <div className="slider">
          <ul className="slides">
            <li>
              <img src={img1} />
              <div className="caption left-align">
                <h2>Em Breve</h2>
                <h5 className="light grey-text text-lighten-3 hide-on-small-only">
                  Nova clinica de pilates em Águas Claras.
                </h5>
              </div>
            </li>
            <li>
              <img src={img2} />
              <div className="caption right-align">
                <h2>Osteopatia</h2>
                <h5 className="light grey-text text-lighten-3 hide-on-small-only">
                  Entre outras técnicas de fisioterapia.
                </h5>
              </div>
            </li>
            <li>
              <img src={img3} />
              <div className="caption left-align">
                <h2>Águas Claras</h2>
                <h5 className="light grey-text text-lighten-3 hide-on-small-only">
                  Próximo à estação de metrô Águas Claras.
                </h5>
              </div>
            </li>
          </ul>
        </div>
      </section>
    );
  }
}

export default Slider;
