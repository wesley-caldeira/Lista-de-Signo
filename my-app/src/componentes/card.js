import React from 'react';
import './componentes-css/Card.css';


function Card(props) {
  return (
      <main>
            <div className='card'>

                <h1>{props.signo}</h1>

              <img src={props.imagem} alt='aquarios' />
                <div className='paragrafo'>
                  <p>{props.dataInicio}</p>
                  <p>{props.dataFim}</p>
                </div>
            </div>
      </main>
  );
}

export default Card;
