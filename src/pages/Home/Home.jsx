import React from "react";
import logo from "../../assets/logo.png";
import logoODiaboDeCadaDia from "../../assets/o-diabo-de-cada-dia-logo.png";
import ListaFilme from "../../components/ListaFilme";
import laCasaDePapel from "../../assets/filmes/la-casa-de-papel.jpg";
import theWitcher from "../../assets/filmes/the-witcher.jpeg";
import lucifer from "../../assets/filmes/lucifer.jpg";
import django from "../../assets/filmes/django-livre.jpg";
import the100 from "../../assets/filmes/the-100-capa.jpg";
import elite from "../../assets/filmes/elite.jpg";
import valeria from "../../assets/filmes/valeria.jpg";
import img365Dias from "../../assets/filmes/365-Dias.jpg";
import img1922 from "../../assets/filmes/1922.jpg";
import homemAranhaDeVoltaAoLar from "../../assets/filmes/homem-aranha-de-volta-ao-lar.jpg";

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
                                <h4 className="text-white">Populares da Netflix</h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-12">
                        <ul className="filme_lista">
                            <ListaFilme capa={laCasaDePapel} />
                            <ListaFilme capa={theWitcher}/>
                            <ListaFilme capa={lucifer}/>
                            <ListaFilme capa={django}/>
                            <ListaFilme capa={the100}/>
                        </ul>
                    </div>
                </section>
                <section>
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <h4 className="text-white">Recomendados</h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-12">
                        <ul className="filme_lista">
                        <ListaFilme capa={elite}/>
                        <ListaFilme capa={valeria} />
                        <ListaFilme capa={img365Dias} />
                        <ListaFilme capa={img1922} />
                        <ListaFilme capa={homemAranhaDeVoltaAoLar} />
                        </ul>
                    </div>
                </section>
            </div>
        </>
    );
}