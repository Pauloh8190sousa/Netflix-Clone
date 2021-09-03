import React from "react";
import Filme from "../../components/Filme";
import "./styles.css";

export default function Home() {
    const listaFilmes = [
        {nome: "Lúcifer", categoria: "Ação", ano: "2016"},
        {nome: "La casa de papel", categoria: "Ação", ano: "2017"},
        {nome: "The Witcher", categoria: "Ficção", ano: "2019"},
        {nome: "Sex Education", categoria: "Sexo", ano: "2018"}
    ];
    return (
        <div className="container">
            <h1>Lista Filmes</h1>
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
                    {listaFilmes.map(filme => (
                        <Filme filme={filme} key={filme.nome}/>
                    ))}
                </tbody>
            </table>
        </div>
    );
}