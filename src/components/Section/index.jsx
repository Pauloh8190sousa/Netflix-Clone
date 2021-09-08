import React from "react";
import ListaFilme from "../ListaFilme";

import "./styles.css";


export default function Section({ capa }) {

    return (
        <section>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h4 className="text-white">Populares da Netflix</h4>
                    </div>
                </div>
            </div>
            <div className="col-12">
                <ul className="filme_lista">
                    <ListaFilme capa={capa} />
                    <ListaFilme capa={capa} />
                    <ListaFilme capa={capa} />
                    <ListaFilme capa={capa} />
                    <ListaFilme capa={capa} />
                </ul>
            </div>
        </section>
    );
}