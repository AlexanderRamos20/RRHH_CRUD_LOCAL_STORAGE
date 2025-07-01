import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom"

function Editar (){
    const { rut } = useParams();
    const navigate = useNavigate();
    const [ rutbuscado, setRutBuscado ] = useState('');
    const empleado = JSON.parse(localStorage.getItem(rut)) || null;
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [sueldo, setSueldo] = useState('');
    const datos = {nombre, apellido, sueldo};
    
    useEffect(() => {
        if (rut) {
            const empleado = JSON.parse(localStorage.getItem(rut));
            if (empleado) {
            setNombre(empleado.nombre || '');
            setApellido(empleado.apellido || '');
            setSueldo(empleado.sueldo || '');
            }
        }
        }, [rut]);

    if (rut){

        function actualizarEmpleado (){
            if ( !rut.trim() || !nombre.trim() || !apellido.trim() || !sueldo.trim()){
                alert('Todos los campos son obligatorios');
                return
                }
            const sueldoNumerico = Number(sueldo);
            if (isNaN(sueldoNumerico) || sueldoNumerico < 0){
                alert('No se ingresó un valor válido para sueldo');
                return;
                }

            localStorage.setItem(rut, JSON.stringify(datos));
            alert(`Empleado con RUT ${rut} modificado correctamente.`)
            navigate('/')
        }

        if(!empleado){
            return(
                <section className="section-body">
                        <h3 className="mt-2 mb-3 ms-3">No se encontró empleado con rut: {rut}</h3>
                        <button className="btn btn-secondary mt-3 ms-2"
                        onClick={() =>navigate('/editar')}>
                            Volver
                        </button>
                    </section>
            );
        }

        return(
            <section className="section-body">
                <h2 className="mt-2 mb-3 ms-3">Editar Empleado</h2>
                <form style={{width:'60%'}}>
                    <div className="mt-2 ms-5">
                        <fieldset disabled>
                        <label htmlFor="exampleInputEmail1" className="form-label">RUT</label>
                        <input type="text" className="form-control" id="rut" value={rut} readOnly></input>
                        </fieldset> 
                    </div>
                    <div className="mt-2 ms-5">
                        <label htmlFor="exampleInputEmail1" className="form-label">Nombre</label>
                        <input type="text" className="form-control" id="nombre" value={nombre} 
                        onChange={(e)=>{setNombre(e.target.value)}}
                        ></input>
                    </div>
                    <div className="mt-2 ms-5">
                        <label htmlFor="exampleInputEmail1" className="form-label">Apellido</label>
                        <input type="text" className="form-control" id="apellido" value={apellido}
                        onChange={(e)=>{setApellido(e.target.value)}}
                        ></input>
                    </div>
                    <div className="mt-2 ms-5">
                        <label htmlFor="exampleInputEmail1" className="form-label">Sueldo</label>
                        <input type="text" className="form-control" id="sueldo" value={sueldo}
                        onChange={(e)=>{setSueldo(e.target.value)}}
                        ></input>
                    </div>
                    <div className="mt-2">
                    <button className="btn btn-secondary ms-5 me-3" onClick={() => navigate('/editar')}>
                        Volver
                    </button>
                    <button className="btn btn-success" onClick={actualizarEmpleado}>
                        Guardar cambios
                    </button>
                </div>
                </form>


            </section>
        );
    }

    
    // Sin RUT en URL
    return(
        <section className="section-body" style={{display:'flex', flexDirection:'column', maxWidth:'40%'}}>
            <h2 className="mt-2 mb-3 ms-2">Buscar empleado a editar</h2>
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
                    navigate(`/editar/${rutbuscado}`);
                }
            }}>
                Buscar
            </button>
        </section>
    );
        

}

export default Editar