import React from "react"
import "./CajitasView.css"
import Show from "../componentes/show"
import Retorno from "../componentes/Retorno"

function CajitasView({cajita}) {
    return (
        <div className="CajitasView">
            <h1>{cajita.titulo}</h1>
            <p>{cajita.descripcion}</p>
            
            <div>{Show(<img src={cajita.imagen} alt={cajita.titulo + " imagen"}/>,<button className="retorno" onClick={() => {Retorno()}}>HOME</button>)}</div>
        </div>
    )
  }

  export default CajitasView
