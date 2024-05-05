import './App.css';
import { Header } from './components/Header';
import { Home } from './components/Home';
import { ErrorNotFound } from './components/ErrorNotFound';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Doctores } from './components/Doctores';
import { AcercaDe } from './components/AcercaDe';
import { Mensajes } from './components/Mensajes';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Header />

                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/home" element={<Home />} />
                    <Route exact path="/doctores" element={<Doctores />} />
                    <Route exact path="/acercade" element={<AcercaDe />} />
                    <Route exact path="/mensajes" element={<Mensajes />} />
                    <Route exact path="*" element={<ErrorNotFound />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
