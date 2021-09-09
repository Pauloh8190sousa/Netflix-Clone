import React from "react";
import logoImg from "../../assets/o-diabo-de-cada-dia-logo.png";
import capaFilme from "../../assets/o-diabo-de-cada-dia-bg.jpg";

import "./styles.css";

export default function Modal() {

    return (
        <div className="modal fade" id="modal-filme">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-hero">
                        <img src={logoImg} />
                        <div className="col-12 modal-hero-infos">
                            <button className="btn btn-lg btn-custom-white">
                                <span className="mdi mdi-play"></span> Assistir
                            </button>
                            <a href="#" className="btn-custom-round border-white btn btn-lg rounded-circle opacity-50">
                                <span className="mdi mdi-thumb-up text-white"></span>
                            </a>
                            <a href="#" className="btn-custom-round border-white btn btn-lg rounded-circle opacity-50">
                                <span className="mdi mdi-thumb-down text-white"></span>
                            </a>
                            <a href="#" className="btn-custom-round border-white btn btn-lg rounded-circle opacity-50">
                                <span className="mdi mdi-plus text-white"></span>
                            </a>
                        </div>
                    </div>
                    <div className="modal-infos">
                        <div className="container">
                            <div className="row">
                                <div className="col-7">
                                    <p className="filme_descricao">
                                        Um jovem dedicado a proteger seus entes queridos enfrenta
                                        a corrupção e a violência em um canto esquecido de Ohio.
                                    </p>
                                </div>
                                <div className="col-5">
                                    <p className="filme_elenco">
                                        Elenco: <text>Tom Holland, Bill Skarsgard, Riley Keough.</text>
                                        <br />
                                        <br />
                                        Genêro: <text>Ação, Aventura.</text>
                                        <br />
                                        <br />
                                        Cenas e momentos: <text>Violentos.</text>
                                    </p>
                                </div>
                            </div>
                            <br />
                            <div className="row">
                                <div className="col-7">
                                    <h3 className="text-white">Epsódios</h3>
                                </div>
                                <div className="col-5 pull-right">
                                    <select className="form-select select-temporada">
                                        <option>Temporada 1</option>
                                        <option>Temporada 2</option>
                                        <option>Temporada 3</option>
                                    </select>
                                </div>
                            </div>
                            <br />
                            <div className="row">
                                <ul className="lista_episodeos">
                                    <li>
                                        <div className="row">
                                            <div className="col-1 my-auto text-center">
                                                <h3 className="text-white">1</h3>
                                            </div>
                                            <div className="col-4">
                                                <img className="img-fluid my-auto" src={capaFilme} />
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
                                    <li>
                                        <div className="row">
                                            <div className="col-1 my-auto text-center">
                                                <h3 className="text-white">2</h3>
                                            </div>
                                            <div className="col-4">
                                                <img className="img-fluid my-auto" src={capaFilme} />
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
                                    <li>
                                        <div className="row">
                                            <div className="col-1 my-auto text-center">
                                                <h3 className="text-white">3</h3>
                                            </div>
                                            <div className="col-4">
                                                <img className="img-fluid my-auto" src={capaFilme} />
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
                                    <li>
                                        <div className="row">
                                            <div className="col-1 my-auto text-center">
                                                <h3 className="text-white">4</h3>
                                            </div>
                                            <div className="col-4">
                                                <img className="img-fluid my-auto" src={capaFilme} />
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
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}