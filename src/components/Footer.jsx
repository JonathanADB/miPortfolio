import React from 'react'

export const Footer = () => {
  return (
    <div>
        <div className="b-example-divider"></div>
        <div className="container">
            <footer className="py-3 my-4">
                <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Horarios</a></li>
                <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Medicamentos</a></li>
                <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Cervicios</a></li>
                <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">FAQs</a></li>
                <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Contactenos</a></li>
                </ul>
                <p className="text-center text-body-secondary">&copy; 2024 Company, Inc</p>
            </footer>
        </div>
    </div>
  )
}
