import { Link } from "react-router-dom";

function Navbar (){
    return(
        <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                <img src="/logo.png" width="30"  alt="imagen_logo" /> </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <Link className="nav-link active" aria-current="page" to="/">Listar</Link>
                    <Link className="nav-link" to="/crear"> Crear</Link>
                    <Link className="nav-link" to="/editar"> Editar</Link>
                    <Link className="nav-link" to="/eliminar"> Eliminar</Link>
                </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar