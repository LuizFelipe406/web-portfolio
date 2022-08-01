import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import '../style/Home.css';

function Home() {
  return(
    <main className="main-home-page">
      <Header />
      <section className="ms-5 ps-5 mt-5 pt-5">
        <div className="ms-5 ps-5 mt-5 pt-4">
          <h1
          className="home-title"
          >
            Welcome to my<br />Portfólio
          </h1>
          <p className=" home-text mt-5">
            Olá me chamo Luiz Felipe Pereira, sou apaixonado por Tecnologia e como ela pode impactar a vida e o trabalho das pessoas ao redor do mundo, me considero uma pessoa inquieta, ambiciosa e com sede de aprendizado!, atualmente sou Desenvolvedor Front-End e estudando Desenvolvimento Web Full Stack na Trybe
          </p>
          <Link to="/projects">
            <button className="home-button py-2 px-4 mt-5">see my projects!</button>
          </Link>
        </div>
      </section>
    </main>
  )
}

export default Home;
