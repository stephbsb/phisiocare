import React from 'react';

import './Card.css';

const Card = (props) => {
  return (
    <div className='card-panel center-align card z-depth-4'>
      <div className='card-content'>
        <img src={props.img} className='card-icon' />
        <h6 className='grey-text text-darken-2'>{props.especialidade}</h6>
        <a href={props.href} className='btn modal-trigger cyan'>
          Saiba Mais
        </a>
      </div>
    </div>
  );
};

export default Card;
