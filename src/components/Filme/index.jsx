import React from "react";

export default function Filme({ filme }) {

    function exibirInfo() {
        alert(filme.nome);
    }

    return (
        <tr>
            <td>{filme.nome}</td>
            <td>{filme.categoria}</td>
            <td>{filme.ano}</td>
            <td className="text-center">
                <button className="mx-3 btn btn-info" onClick={exibirInfo}>Detalhes</button>
                <button className="btn btn-danger">Excluir</button>
            </td>
        </tr>

    );
}