import React from "react";

import "./EspacoSection.css";

import img1 from "../img/espaco/img1.jpg";
import img2 from "../img/espaco/img2.jpg";
import img3 from "../img/espaco/img3.jpg";
import img4 from "../img/espaco/img4.jpg";
import img5 from "../img/espaco/img5.jpg";
import img6 from "../img/espaco/img6.jpg";

const EspacoSection = (props) => {
  return (
    <section className="cyan espaco-section section scrollspy" id="espaco">
      <div className="container">
        <h3 className="center white-text">Espaço</h3>
        <div className="carousel carousel-slider">
          <a className="carousel-item" href="#one!">
            <img src={img1} />
          </a>
          <a className="carousel-item" href="#two!">
            <img src={img2} />
          </a>
          <a className="carousel-item" href="#three!">
            <img src={img3} />
          </a>
          <a className="carousel-item" href="#four!">
            <img src={img4} />
          </a>
          <a className="carousel-item" href="#five!">
            <img src={img5} />
          </a>
          <a className="carousel-item" href="#six!">
            <img src={img6} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default EspacoSection;
