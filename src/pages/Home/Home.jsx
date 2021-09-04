import React, { useState } from "react";
import Filme from "../../components/Filme";
import "./styles.css";

export default function Home() {

    const [filmes, setFilmes] = useState([]);
    const [filme, setFilme] = useState({
        nome: "",
        ano: 0,
        categoria: ""
    });

    function cadastrar() {

        setFilmes([filme, ...filmes]);
        alert("Cadastrado");
    }

    return (
        <div className="container">
            <h1>Lista Filmes</h1>
            <div className="jumbotron d-grid gap-2">
                <div className="row">
                    <div className="col-4">
                        <label>Nome</label>
                        <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Nome do filme"
                        onChange={(e) => setFilme({
                            ...filme,
                            nome: e.target.value})} 
                        />
                    </div>
                    <div className="col-4">
                        <label>Categoria</label>
                        <select 
                        className="form-select"
                        onChange={(e) => setFilme({
                            ...filme,
                            categoria: e.target.value})}
                        >
                            <option>Ação</option>
                            <option>Romance</option>
                            <option>Terror</option>
                            <option>Aventura</option>
                        </select>
                    </div>
                    <div className="col-4">
                        <label>Ano</label>
                        <input 
                        type="number" 
                        className="form-control" 
                        placeholder="Ano do filme"
                        onChange={(e) => setFilme({
                            ...filme,
                            ano: e.target.value})} 
                        />
                    </div>
                </div>
                <button 
                className="btn btn-success btn-lg mt-4"
                onClick={cadastrar}
                >
                    Cadastrar
                </button>
            </div>
            <table className="table bgFilme">
                <thead>
                    <tr>
                        <th scope="col">Nome</th>
                        <th scope="col">Categoria</th>
                        <th scope="col">Ano</th>
                        <th scope="col" className="text-center">Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {filmes.map(filme => (
                        <Filme filme={filme} key={filme.nome} />
                    ))}
                </tbody>
            </table>
        </div>
    );
}