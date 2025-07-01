import { use, useState } from 'react';

function crear (){
    const [rut, setRut] = useState('');
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [sueldo, setSueldo] = useState('');

    function insertarEmpleado(){
        if ( !rut.trim() || !nombre.trim() || !apellido.trim() || !sueldo.trim()){
            alert('Todos los campos son obligatorios');
            return
        }
        const sueldoNumerico = Number(sueldo);
        if (isNaN(sueldoNumerico) || sueldoNumerico < 0){
            alert('No se ingresó un valor válido para sueldo');
            return;
        }

        const clavesExistentes = Object.keys(localStorage);
        if (clavesExistentes.includes(rut)) {
            alert(`Ya existe un empleado con RUT ${rut}`);
            return;
        }
       
        const datos = {nombre, apellido, sueldo};
        localStorage.setItem(rut.toString(), JSON.stringify(datos));
        alert(`Empleado ${nombre  + ' ' + apellido} agregado correctamente`);

        //limpiarformulario
        setRut('');
        setNombre('');
        setApellido('');
        setSueldo('');
    }

    return(
        <section className='section-body'>
            <h2 className="mt-2 mb-3">Añada aquí nuevos trabajadores</h2>
            <form  className="formulario-crear-empleado">
                <div className="elemento-form"> 
                    <label htmlFor="rut"> Ingrese RUT sin puntos, guión, ni digito validador:</label>
                    <input 
                        type="text" 
                        id="rut" 
                        value={rut}
                        onChange={(evento) => setRut(evento.target.value)}
                        required 
                        placeholder="ej: 12345678"/>
                </div>
                <div className="elemento-form"> 
                <label htmlFor="nombre">Ingrese nombre del Empleado: </label>
                <input 
                    type="text" 
                    id="nombre" 
                    value = {nombre}
                    onChange={(evento)=> setNombre(evento.target.value)}
                    required 
                    placeholder="Pablo"/>
                </div>
                <div className="elemento-form"> 
                <label htmlFor="apellido">Ingrese apellido del Empleado:</label>
                <input 
                    type="text" 
                    id="apellido"
                    value={apellido}
                    onChange={(evento)=>setApellido(evento.target.value)} 
                    required   
                    placeholder="Perez"/>
                </div>
                <div className="elemento-form"> 
                <label htmlFor="sueldo">Ingrese sueldo del empleado:</label>
                <input 
                    type="text" 
                    id="sueldo"
                    value={sueldo}
                    onChange={(evento)=>setSueldo(evento.target.value)} 
                    required 
                    placeholder="530000"/>
                </div>
                <button 
                    type="button" 
                    className="btn btn-success"
                    onClick={insertarEmpleado}>
                        Añadir
                </button>
            </form>
        </section>
    );
   

}

export default crear
