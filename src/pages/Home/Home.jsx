import React from "react";

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
import Header from "../../components/Header";
import Hero from "../../components/Hero";
import Modal from "../../components/Modal";
import Section from "../../components/Section";

import "./styles.css";


export default function Home() {

    return (
        <>
            <Modal />
            <div className="container-fluid">
                <Header showMenu={true}/>
            </div>
            <Hero />
            <div className="main-content">
                <Section capa={homemAranhaDeVoltaAoLar} />
                <Section capa={img1922} />
                <Section capa={img365Dias} />
                <Section capa={laCasaDePapel} />
            </div>
        </>
    );
}