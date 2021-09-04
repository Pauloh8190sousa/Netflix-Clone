import React from "react";
import logo from "../../assets/logo.png";
import "./styles.css";


export default function Home() {

    return(
        <>
            <div className="container-fluid">
                <header className="row">
                    <div className="col-2">
                        <img src={logo}/>
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
                <div className="container">
                    <div className="row" id="hero_infos">
                        <div className="col-6">
                            <img className="logo" src="" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}