import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom"

function Eliminar (){
    const { rut } = useParams();
    const navigate = useNavigate();
    const [ rutbuscado, setRutBuscado ] = useState('');
}

export default Eliminar