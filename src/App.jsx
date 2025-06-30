import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar'
import Footer from './components/footer'
import Crear from './pages/paginaCrear'
import Listar from './pages/paginaListar'
import Editar from './pages/paginaEditar'
import Eliminar from './pages/paginaEliminar'


function App() {
    return(
        <Router>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Listar/>}/>
                <Route path="/crear" element={<Crear/>}/>
                <Route path="/editar" element={<Editar/>}/>
                <Route path="/editar/:rut" element={<Editar/>}/>
                <Route path="/eliminar" element={<Eliminar/>}/> 
                <Route path="/eliminar/:rut" element={<Eliminar/>}/> 
            </Routes>
            <Footer/>    
        </Router>
    );
}

export default App
