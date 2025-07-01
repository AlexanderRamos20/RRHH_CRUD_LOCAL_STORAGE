import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom"

function Eliminar (){
    const { rut } = useParams();
    const navigate = useNavigate();
    const [ rutbuscado, setRutBuscado ] = useState('');

    function eliminarEmpleado (){
        localStorage.removeItem(rut);
        alert(`Empleado con RUT ${rut} eliminado correctamente.`)
        navigate('/')
    }

    if (rut){
        const empleado = JSON.parse(localStorage.getItem(rut))

        if (!empleado){
            return (
                <section className="section-body">
                    <h3 className="mt-2 mb-3 ms-3">No se encontró empleado con rut: {rut}</h3>
                    <button className="btn btn-secondary mt-3 ms-2"
                    onClick={() =>navigate('/eliminar')}>
                        Volver
                    </button>
                </section>
            );
        }

        return (
            <section className="section-body">
                <h2 className="mt-2 mb-3 ms-3">Eliminar Empleado</h2>
                <p className="ms-2">¿Estás seguro que deseas eliminar al empleado con RUT {rut}?</p>
                <ul className="list-group ms-5 me-5" style={{width: '30%'}}>
                    <li className="list-group-item-primary" style={{listStyleType:'none'}}>Datos empleado:</li>
                    <li className="list-group-item">Nombre: {empleado.nombre}</li>
                    <li className="list-group-item">Apellido: {empleado.apellido}</li>
                    <li className="list-group-item">Sueldo: {empleado.sueldo}</li>
                </ul>
                <div className="mt-2">
                    <button className="btn btn-danger ms-5 me-3" onClick={eliminarEmpleado}>
                        Confirmar eliminación
                    </button>
                    <button className="btn btn-secondary" onClick={() => navigate('/eliminar')}>
                        Volver
                    </button>
                </div>
            </section>
        );
    }

    //sin RUT en URL
    return(
        <section className="section-body" style={{display:'flex', flexDirection:'column', maxWidth:'40%'}}>
            <h2 className="mt-2 mb-3 ms-2">Buscar empleado a eliminar</h2>
            <input 
            id="rut-buscado"
            className="ms-4"
            type="text"
            placeholder="12123123" 
            value={rutbuscado}
            onChange={(e)=>{setRutBuscado(e.target.value)}}/>
            <label className="ms-4 mb-3" htmlFor="rut-buscado" style={{fontSize:'small'}}>Ingrese RUT sin puntos, guión, ni digitivo verficador.</label>
            <button className="btn btn-danger ms-4"
            onClick={()=>{
                if (rutbuscado.trim()){
                    navigate(`/eliminar/${rutbuscado}`);
                }
            }}>
                Buscar
            </button>
        </section>
    );
}

export default Eliminar