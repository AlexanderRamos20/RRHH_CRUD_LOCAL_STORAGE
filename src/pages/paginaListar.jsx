import { useEffect, useState } from "react";
import FilaEmpleado from "../components/filaEmpleado";

function Listar() {

    const [claves, setClaves] = useState([]);

    useEffect(() =>{
        const keys = Object.keys(localStorage);
        setClaves(keys);
        }, []
    );

    return (
        <section className="section-body">
            <h2 className="mt-2 mb-3">Lista de empleados:</h2>

            <table className="table table-striped ms-5">
                <thead className="thead-dark">
                    <tr>
                    <th scope="col">RUT</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Apellido</th>
                    <th scope="col">Sueldo</th>
                    <th scope="col">Acción</th>
                    </tr>
                </thead>
                <tbody>
                    {claves.map(
                        (clave) => {
                            const empleado = JSON.parse(localStorage.getItem(clave))
                            return(
                                <FilaEmpleado 
                                    key={clave}
                                    rut={clave}
                                    datos={empleado}
                                />
                            );
                        })}
                </tbody>
                </table>
        </section>
    );

}

export default Listar