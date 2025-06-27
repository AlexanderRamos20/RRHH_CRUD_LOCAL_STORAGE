import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar'
import Footer from './components/footer'
import Crear from './pages/paginaCrear'


function App() {
    return(
        <Router>
            <Navbar/>
            <Routes>
                <Route path="/" element={<listar/>}/>
                <Route path="/crear" element={<Crear />}/>
                <Route path="/editar" element={<editar />}/>
                <Route path="/eliminar" element={<eliminar />}/> 
            </Routes>
            <Footer/>    
        </Router>
    );
}

export default App
