import React, {useState} from 'react';

function Header() {
  const [contador, setContador] = useState(0)

  function incrementar(){
      setContador(contador + 1)
  }

  return (
   <div>
     <h1>Contador:{contador}</h1>
     <button onClick={incrementar}>Contar</button>
   </div>
  );
}
export default Header
