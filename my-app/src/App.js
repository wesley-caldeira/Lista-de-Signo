import React from 'react';
import './App.css';

import Topo from './componentes/top';
import Card from './componentes/card';

import aquario from './assets/aquarios.jpg';
import aries from './assets/aries.jpg';
import cancer from './assets/cancer.jpg';
import capricornio from './assets/capricornio.jpg';
import escorpiao from './assets/escorpiao.jpg';
import gemeos from './assets/gemeos.jpg';
import leao from './assets/leao.jpg';
import libra from './assets/libra.jpg';
import peixes from './assets/peixes.jpg';
import touro from './assets/touro.jpg';
import virgem from './assets/virgem.jpg';
import sargitario from './assets/sargitario.jpg'
function App() {
  return (
    <div>
      <Topo />
      <Card
          signo="Aquário" dataInicio="21/01"
          dataFim="19/02" imagem={aquario} />

        <Card
          signo="Peixes" dataInicio="20/02"
          dataFim="20/03" imagem={peixes} />

        <Card
          signo="Áries" dataInicio="21/03"
          dataFim="20/04" imagem={aries} />

        <Card
          signo="Touro" dataInicio="21/04"
          dataFim="21/05" imagem={touro} />

        <Card
          signo="Gêmeos" dataInicio=" 22/05"
          dataFim="21/06" imagem={gemeos} />

        <Card
          signo="Câncer" dataInicio="21/06"
          dataFim="23/07" imagem={cancer}  />

        <Card
          signo="Leão" dataInicio="24/07"
          dataFim="23/08" imagem={leao} />

        <Card
          signo="Virgem" dataInicio="24/08"
          dataFim="23/09" imagem={virgem} />

        <Card
          signo="Libra" dataInicio="24/09"
          dataFim="23/10" imagem={libra} />

        <Card
          signo="Escorpião" dataInicio="24/10"
          dataFim="22/11" imagem={escorpiao} />

        <Card
          signo="Sagitário" dataInicio="23/11"
          dataFim="21/12" imagem={sargitario} />
      <Card 
          signo="Capricornio" dataInicio="22/12"
          dataFim="20/01" imagem={capricornio}
      />
    </div>
  );
}

export default App;
