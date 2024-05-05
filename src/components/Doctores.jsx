import React from 'react'
import ada from '../images/ada_lizbeth.jpeg'
import frco from '../images/francisco_alarcon.jpg'
import adriana from '../images/adriana_vecino.jpg'

export const Doctores = () => {
  return (
    <>
      <center>
        <div className="container" style={{marginTop:20}}>
            <div className="row">
                <div className="col-lg-4">
                    <img className='rounded-circle' width="140" height="140" src={ada}/>
                    <h2 className="fw-normal">Dra. Ada Lizbeth Goya Goya</h2>
                    <p>Médico general (Medicina estética no invasiva). <br/>Experiencia en atención de niños, adulto yadulto mayor. Se atiende de forma particular vía online y a domicilio.</p>
                    <p><a className="btn btn-secondary" href="#">Ver mas &raquo;</a></p>
                </div>

                <div className="col-lg-4">
                    <img className='rounded-circle' width="140" height="140" src={frco}/>
                    <h2 className="fw-normal">Dr. Francisco Alarcón Alarcón</h2>
                    <p>Atiende a pacientes privados (sin previsión) y pacientes con previsión en esta dirección. <br/>Atiende a pacientes adultos.<br/>Atiende a niños y adultos.</p>
                    <p><a className="btn btn-secondary" href="#">Ver mas &raquo;</a></p>
                </div>
                    
                <div className="col-lg-4">
                    <img className='rounded-circle' width="140" height="140" src={adriana}/> 
                    <h2 className="fw-normal">Dra. Adriana Vecino Macri</h2>
                    <p>Soy titulada como Médico Cirujano e hice el Postgrado en Endocrinología y Metabolismo en la Universidad de la República en la República Oriental Uruguay.</p>
                    <p><a className="btn btn-secondary" href="#">Ver mas &raquo;</a></p>
                </div>
            </div>
        </div>
      </center>
    </>
  )
}
