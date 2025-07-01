
function Footer (){
    return(
        <section>
            <div className="pt-3" >
                <footer className="text-center text-lg-start" style={{backgroundColor:" #212529"}}>
                    <div className="container d-flex justify-content-center py-5">
                    <button type="button" className="btn btn-primary btn-lg btn-floating mx-2" style={{backgroundColor: "#54456b"}}>
                        <i className="bi bi-facebook"></i>
                    </button>
                    <button type="button" className="btn btn-primary btn-lg btn-floating mx-2" style={{backgroundColor: "#54456b"}}>
                        <i className="bi bi-youtube"></i>
                    </button>
                    <button type="button" className="btn btn-primary btn-lg btn-floating mx-2" style={{backgroundColor: "#54456b"}}>
                        <i className="bi bi-instagram"></i>
                    </button>
                    <button type="button" className="btn btn-primary btn-lg btn-floating mx-2" style={{backgroundColor: "#54456b"}}>
                        <i className="bi bi-twitter"></i>
                    </button>
                    </div>

                    <div className="text-center text-white p-3" style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}>
                    © 2025 Copyright: 
                    <a className="text-white" href="https://github.com/AlexanderRamos20"> Alexander Ramos</a>
                    </div>
                </footer>
            </div>
        </section>
    );
}

export default Footer