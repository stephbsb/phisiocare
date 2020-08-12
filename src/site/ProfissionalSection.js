import React from 'react';

import './ProfissionalSection.css';

import foto from '../img/perfil.jpg';

const ProfissionalSection = () => {
  return (
    <section
      className='profissional-section section scrollspy'
      id='profissional'
    >
      <div className='container'>
        <div className='row'>
          <div className='col s12 m6 l4 offset-l2 center'>
            <img src={foto} className='responsive-img circle ' alt='Pamella' />
          </div>
          <div className='col s12 m6 l4'>
            <h5>Pâmella Ribeiro Rodrigues</h5>
            <h6>Fisioterapeuta</h6>
            <h6>Crefito: 206394-F</h6>
            <span className='grey-text text-darken-1'>
              <p>
                Sou Dra. Pâmella Ribeiro Rodrigues, fisioterapeuta formada na
                Universidade de Brasília, CREFITO 206394-F, com Certificação em
                Osteopatia (CO) pela Escola de Madri e especializada nos métodos
                e técnicas a seguir:
              </p>

              <ul>
                <li>
                  Método Pilates, com cinco anos de experiência em Pilates
                  clínico funcional;
                </li>
                <li>RPG - RPG-Reeducação Postural Global;</li>
                <li>Dry Needling (Agulhamento a seco);</li>
                <li>Conceito Mulligan;</li>
                <li>Método McKenzie (Coluna Lombar);</li>
                <li>Posturologia.</li>
              </ul>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfissionalSection;
