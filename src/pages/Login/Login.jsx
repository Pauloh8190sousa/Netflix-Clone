import React from "react";
import "./styles.css";
import Header from "../../components/Header";

export default function Login() {
    return (
        <div className="bg_login">
            <div className="gradiente">
                <div className="d-flex container-fluid justify-content-between">
                    <Header showMenu={false} />
                </div>
                <div className="col-4 offset-4 caixa">
                    <h2 className="text-white texto">Entrar</h2>
                    <form className="d-grid grap-3">
                        <input
                            type="email"
                            className="form-control form-control-lg campos"
                            placeholder="E-mail ou número de telefone"
                        />
                        <input
                            type="password"
                            className="form-control form-control-lg campos"
                            placeholder="Senha"
                        />
                        <button className="btn btn-lg btn-danger">Entrar</button>
                        <div className="row mt-4">
                            <div className="col text-muted">
                                <input type="checkbox" /> Lembrar de mim.
                            </div>
                            <div className="col ajuda">
                                <a href="#" className="text-muted">Precisa de ajuda?</a>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );

}


