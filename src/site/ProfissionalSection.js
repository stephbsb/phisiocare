import React from "react";

import "./ProfissionalSection.css";

import foto from "../img/perfil.jpg";

const ProfissionalSection = () => {
  return (
    <section
      className="profissional-section section scrollspy"
      id="profissional"
    >
      <div className="container">
        <div className="row">
          <div className="col s12 m6 l4 offset-l2 center">
            <img src={foto} className="responsive-img circle " />
          </div>
          <div className="col s12 m6 l4">
            <h5>Pâmella Ribeiro Rodrigues</h5>
            <h6>Fisioterapeuta</h6>
            <h6>Crefito: 12345</h6>
            <span className="grey-text">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Veritatis quo sunt enim aut. Esse quas quod voluptas molestiae,
                aut illo!{" "}
              </p>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
                porro magnam at, corrupti reprehenderit provident ex tenetur
                consequatur est sint obcaecati, officia odit dicta quam
                laudantium eveniet, quae corporis aspernatur incidunt laborum
                similique assumenda atque necessitatibus? Asperiores
                consequuntur maiores voluptatem.
              </p>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfissionalSection;
