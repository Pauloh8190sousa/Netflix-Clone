import React from "react";
import logoODiaboDeCadaDia from "../../assets/o-diabo-de-cada-dia-logo.png";

import "./styles.css";

export default function Hero() {

    return (
        <div id="hero" className="container-fluid">
            <div className="container-fluid">
                <div className="row" id="hero_infos">
                    <div className="col-6">
                        <img className="logo" src={logoODiaboDeCadaDia} alt="logoDiaboDeCadaDia" />
                        <h1 className="text-white">Top 1 de hoje no Brasil.</h1>
                        <p className="text-white">
                            Um jovem dedicado a proteger seus entes queridos
                            enfrenta a corrupção e a violência em um canto esquecido de Ohio,
                            no período entre a Segunda Guerra Mundial e a Guerra do Vietnã.
                        </p>
                        <button className="btn btn-lg btn-custom-white">
                            <span className="mdi mdi-play"></span> Assistir
                        </button>
                        <button className="btn btn-lg btn-custom-trasnparent">
                            <span className="mdi mdi-information-outline"></span> Mais informações
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}