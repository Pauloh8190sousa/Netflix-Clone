import React from "react";
import logo from "../../assets/logo.png";
import logoODiaboDeCadaDia from "../../assets/o-diabo-de-cada-dia-logo.png";
import djangoImg from "../../assets/django-livre.jpg";
import "./styles.css";


export default function Home() {

    return(
        <>
            <div className="container-fluid">
                <header className="row">
                    <div className="col-2">
                        <img src={logo} alt="logo"/>
                    </div>
                    <div className="col-8">
                        <ul className="menu_list">
                            <li>
                                <a href="#">Inicio</a>
                            </li>
                            <li>
                                <a href="#">Séries</a>
                            </li>
                            <li>
                                <a href="#">Filmes</a>
                            </li>
                            <li>
                                <a href="#">Mais Recentes</a>
                            </li>
                            <li>
                                <a href="#">Minha Lista</a>
                            </li>
                        </ul>
                    </div>
                </header>
            </div>
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
            <div className="main-content">
                <section>
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <h5 className="text-white">Populares da Netflix</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-12">
                        <ul className="filme_lista">
                            <li className="filme">
                                <img className="img-fluid image-list" src={djangoImg} alt="django"/>
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
                                </div>
                            </li>
                        </ul>
                    </div>
                    <p className="descricao_filme">T3:EP2 <text>"Meu Episódio"</text> </p>
                </section>
            </div>
        </>
    );
}