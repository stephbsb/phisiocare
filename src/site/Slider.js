import React, { Component } from 'react';

import './Slider.css';

import img1 from '../img/slider/pilates2.png';
import img2 from '../img/slider/osteopatia-entenda-o-que-e-e-que-doencas-trata.jpeg';
import img3 from '../img/espaco/vista_panoramica.jpg';

class Slider extends Component {
  render() {
    return (
      <section className='slider-style' id='home'>
        <div className='slider'>
          <ul className='slides'>
            <li>
              <img src={img1} />
              <div className='caption left-align'>
                <h3>Estamos Funcionando!</h3>
                <h5 className='light grey-text text-lighten-3 '>
                  Nova clinica de pilates em Águas Claras.
                </h5>
              </div>
            </li>
            <li>
              <img src={img2} />
              <div className='caption right-align'>
                <h3>Osteopatia</h3>
                <h5 className='light grey-text text-lighten-3 '>
                  Entre outras técnicas de fisioterapia.
                </h5>
              </div>
            </li>
            <li>
              <img src={img3} />
              <div className='caption left-align'>
                <h3>Águas Claras</h3>
                <h5 className='light grey-text text-lighten-3 '>
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
