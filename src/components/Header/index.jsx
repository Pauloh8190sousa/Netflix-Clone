import React from "react";
import logo from "../../assets/logo.png";

import "./styles.css";



export default function Header() {

    return(
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
    );
}