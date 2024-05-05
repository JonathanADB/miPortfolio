import React from 'react'

export const Mensajes = () => {
  return (
    <center>
        <div className='container' style={{width:"70%", marginTop:20, background:'#A8BCFF', padding:20}}>
            <form id="miFormulario">
                <h1 className='h1'>Mensajes</h1>
                <input style={{marginBottom:20}} className='form-control form-control-lg' type="text" placeholder='Digite su nombre' />
                <input style={{marginBottom:20}} className='form-control form-control-lg' type="email" placeholder='Digite su correo' />
                <textarea style={{marginBottom:20}} className='form-control form-control-lg' placeholder='Redacte si mensage' />
                   
                <button className='btn btn-primary btn-lg'>
                        Enviar Mensaje
                </button>
            </form>

        </div>

    </center>
  )
}
