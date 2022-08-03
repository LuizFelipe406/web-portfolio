import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import '../style/Home.css';

function Home() {
  const pageVariants = {
    initial: {
      opacity: 0,
      x: "-100vw",
      scale: 0.8
    },
    in: {
      opacity: 1,
      x: 0,
      scale: 1
    },
    out: {
      opacity: 0,
      x: "-100vw",
      scale: 0.8,
    }
  }

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  }

  const pageTransition = {
    type: "tween",
    ease: "linear",
    duration: 0.5
  }

  return(
    <motion.main
      className="main-home-page"
      variants={container}
      initial="hidden"
      animate="show"
      exit="hidden"
    >
      <motion.section
        variants={ pageVariants }
        exit="out"
        initial="initial"
        animate="in"
        transition={ pageTransition }
        className="ms-5 ps-5 pt-4 section"
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
    </motion.main>
  )
}

export default Home;
