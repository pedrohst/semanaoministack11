//import React, {useState} from 'react';
import React from 'react';

import './global.css';

//import Header from './Header';

import Routes from './routes';

// Um componente no REACT é uma função que retorna HTML

// um HTML dentro de um JavaScript é chamado de JSX (J. S. XML)

// <Header title="Semana Omnistack"/> acessando a propriedade title ou do jeito que ta ali embaixo acessando a propriedade children
/* function App() {
  return (
    <Header>
      Semana Omnistack
    </Header>
  );
} */

function App() {

  /*
   quando utilizado o conceito (obrigatorio no react) de 'estado' nao pode manipular o valor diretamente
   e pode isso se deve usar o useState   

  let counter = 0;

  function increment(){
    counter += 1;

    console.log(counter);
  }
  */

  /* descartou o Header quando começou a fazer a interface
  const [counter, setCounter] = useState(0);
  // o useState retorna um array[ valor , função para troca do valor ]

  function increment(){
    setCounter(counter + 1);
  }

  return (
    <div>
      <Header>Contador: {counter}</Header>
      <button onClick={increment}>Incrementar</button>
    </div>
  );
*/


  return (
    <Routes />
  );
}

export default App;
