import React from 'react'
import logo from '../images/logo192.png'
import { NavLink  } from 'react-router-dom'

export const Header = () => {
  return (
    <>
      <header style={{color:"white"}}>
            <nav className="navbar navbar-expand-lg navbar-light bg-primary">
                <NavLink to='/home'>
                    <img src={logo} height="100" alt="NO ENCONTRADA" />
                </NavLink>

                <h1>Sitio Web Creado Con React</h1>

                <button type='button' className='navbar-toggler' data-bs-toggle='collapse' data-bs-target='#navbarCollapse' >
                    <span className='navbar-toggler-icon'></span>
                </button>

                <div className='collapse navbar-collapse' id='navbarCollapse'>
                    <div className='navbar-nav ms-auto'>
                        <h4><NavLink to='/home' className='nav-item nav-link text-center' style={{color: "white"}}>Home</NavLink></h4>
                        <h4><NavLink to='/doctores' className='nav-item nav-link text-center' style={{color: "white"}}>Doctores</NavLink></h4>
                        <h4><NavLink to='/mensajes' className='nav-item nav-link text-center' style={{color: "white"}}>Mensajes</NavLink></h4>
                        <h4><NavLink to='/acercade' className='nav-item nav-link text-center' style={{color: "white"}}>Acerca De...</NavLink></h4>
                    </div>
                </div>
            </nav>
      </header>
    </>
  )
}
