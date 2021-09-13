import React from "react";


export default function Episodeo({ capaEP }) {

    return (
        <li>
            <div className="row">
                <div className="col-1 my-auto text-center">
                    <h3 className="text-white">1</h3>
                </div>
                <div className="col-4">
                    <img className="img-fluid my-auto" src={capaEP} />
                </div>
                <div className="col-7">
                    <h6 className="text-white">Nome do episódeo</h6>
                    <p className="text-muted">
                        Willard Russell (Bill Skarsgård) é um atormentado veterano, sobrevivente de uma carnificina,
                        que não consegue salvar sua bela esposa.
                    </p>
                </div>
            </div>
        </li>
    );
}