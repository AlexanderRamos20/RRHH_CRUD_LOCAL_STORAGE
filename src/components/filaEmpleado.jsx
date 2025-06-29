import { Link } from 'react-router-dom';

function FilaEmpleado ({rut, datos}){
    return(
        <tr>
            <td>{rut}</td>
            <td>{datos.nombre}</td>
            <td>{datos.apellido}</td>
            <td>{datos.sueldo}</td>
            <td>
                <Link to={`/editar/${rut}`} className="btn btn-warning btn-sm me-2">
                    Editar
                </Link>
            </td>
            <td>
                <Link to={`/eliminar/${rut}`} className="btn btn-danger btn-sm">
                    Eliminar
                </Link>
            </td>
        </tr>
    );
}

export default FilaEmpleado