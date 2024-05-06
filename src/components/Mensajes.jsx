import React, {useEffect, useState } from 'react'

export const Mensajes = () => {

  const obtenerRegistros = () => {
    const datos = localStorage.getItem("registros");
    if(datos){
      return JSON.parse(datos);
    }else{
      return[];
    }
  }

  const [registros, setRegistros] = useState(obtenerRegistros());

  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [mensaje, setMensaje] = useState("");

  const botonGuardar = (e) => {
    e.preventDefault();
    let miObjeto = { nombre, correo, mensaje }
    setRegistros([...registros, miObjeto]);
    limpiarFormularios();
  }

  const limpiarFormularios = () => {
    setNombre("");
    setCorreo("");
    setMensaje("");
    document.getElementById("miFormulario").reset();
  }

  useEffect(() => {
    localStorage.setItem("registros", JSON.stringify(registros));
    }, [registros]); 

  return (
    <center>
        <div className='container' style={{width:"70%", marginTop:20, background:'#A8BCFF', padding:20}}>
            <form id="miFormulario" onSubmit={botonGuardar}>
                <h1 className='h1'>Mensajes</h1>
                <input style={{marginBottom:20}} className='form-control form-control-lg' type="text" placeholder='Digite su nombre' onChange={(e)=>setNombre(e.target.value)}  />
                <input style={{marginBottom:20}} className='form-control form-control-lg' type="email" placeholder='Digite su correo' onChange={(e)=>setCorreo(e.target.value)}/>
                <textarea style={{marginBottom:20}} className='form-control form-control-lg' placeholder='Redacte si mensage' onChange={(e)=>setMensaje(e.target.value)} />
                   
                <button className='btn btn-primary btn-lg'>
                        Enviar Mensaje
                </button>
            </form>

        </div>

    </center>
  )
}
