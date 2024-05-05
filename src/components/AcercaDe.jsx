import React from 'react'
import acerca from '../images/foto_acercade.jpg'

export const AcercaDe = () => {
  return (
    <div className="container my-5">
    <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
        <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
            <h1 className="display-4 fw-bold lh-1 text-body-emphasis">Desarrollador</h1>
            <p className="lead"><strong>Alumno:</strong> Jonathan Domìnguez</p>
            <p className="lead"><strong>Centro:</strong> Penascal F5</p>
          
        </div>
        <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
            <img className="rounded-lg-3" src={acerca} alt="" width="100%" />
        </div>
    </div>
</div>

    
  )
}
