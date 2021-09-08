import React from "react";

import "./styles.css";


export default function ListaFilme({ capa }) {

    return (

        <li className="filme" data-bs-toggle="modal" data-bs-target="#modal-filme">
            <img className="img-fluid capa-img" src={capa} alt="capa" />
            <div className="filme_info">
                <div className="col-12">
                    <a href="#" className="btn-custom-round btn btn-light rounded-circle">
                        <span className="mdi mdi-play"></span>
                    </a>
                    <a href="#" className="btn-custom-round border-white btn rounded-circle opacity-50">
                        <span className="mdi mdi-thumb-up text-white"></span>
                    </a>
                    <a href="#" className="btn-custom-round border-white btn rounded-circle opacity-50">
                        <span className="mdi mdi-thumb-down text-white"></span>
                    </a>
                    <a href="#" className="btn-custom-round border-white btn rounded-circle opacity-50">
                        <span className="mdi mdi-plus text-white"></span>
                    </a>
                </div>
                <p>T3:EP2 <text>"Meu Episódio"</text> </p>
            </div>
        </li>

    );
}