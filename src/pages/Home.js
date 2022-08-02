import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import '../style/Home.css';

function Home() {
  const pageVariants = {
    in: {
      opacity: 1,
      x: 0
    },
    out: {
      opacity: 0,
      x: "-100vw"
    }
  }

  return(
    <main className="main-home-page">
      <Header />
      <motion.section
        variants={ pageVariants }
        exit="out"
        initial="out"
        animate="in"
        className="ms-5 ps-5 mt-5 pt-5"
      >
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
      </motion.section>
    </main>
  )
}

export default Home;
