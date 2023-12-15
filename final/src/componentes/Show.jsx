import React, { useState } from 'react';
import cajita from '../views/CajitasView.jsx'

function Show(ocultarImg,ocultarRetorno) {
  const [showComponent, setShowComponent] = useState(false);

  return (
    <div>
      <button onClick={() => setShowComponent(!showComponent)}>
        {showComponent ? 'Ocultar' : 'Ocultar y Retornar'}
      </button>

      {!showComponent? <div>{ocultarImg}</div> : <div>{ocultarRetorno}</div>}
    </div>
  );
}
export default Show;