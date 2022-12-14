import React, { useContext } from "react";
import { motion } from "framer-motion";
import '../style/About.css';
import { Link } from "react-router-dom";
import PageContext from "../context/pageContext";

function About() {
  const id = 2;
  const {
    pageVariantLeft,
    outLeft,
    pageVariantRight,
    outRight,
    pageTransition,
    mainPageAnimation,
    newPageNum,
    prevPageNum,
  } = useContext(PageContext);

  return(
    <motion.main
      className="main-about-page"
      variants={mainPageAnimation}
      initial="hidden"
      animate="show"
      exit="hidden"
    >
      <motion.section
        variants={ id > prevPageNum ? pageVariantRight : pageVariantLeft }
        exit={ id > newPageNum ? outRight : outLeft }
        initial="initial"
        animate="in"
        transition={ pageTransition }
        className="ms-5 ps-5 pt-1 section"
      >
        <div className="ms-5 ps-5 mt-4">
          <h1 className="about-title">About Me</h1>
          <div className="ms-5 mt-4 about-text">
            <p>Olá nessa seção vou contar um pouco sobre a minha história</p>
            <p>Tudo começa no ano de 2003 quando nasci, tive uma infância muito boa e educação de qualidade, desde pequeno sempre fui um entusiasta do funcionamento das coisas, amava criar brinquedos, cenários, e afins. Além disso adorava jogar e mexer no computador, naquela época ainda não sabia que poderia juntar as duas coisas e se tornar minha profissão</p>
            <p>Saindo do ensino médio em 2020, eu tinha altas expectativas por sempre ter ganho prêmios e altas notas porém não tinha clareza do caminho que gostaria de seguir ainda. Prestei o enem no começo do outro ano e consegui passar em segundo lugar na UDESC pra Engenharia Mecânica seguindo minha paixão por criar coisas, um ano depois percebi que tinha esquecido da segunda parte que era é o computador, não estava feliz ali, mas a experiência foi valiosa, pois nesse ano sempre teve uma matéria que me chamava atenção, Programação para Engenharia.</p>
            <p>Após dois semestres, resolvi mudar o meu caminho, pausei o curso e embarquei em uma nova jornada, a Trybe. Hoje já sou um Desenvolvedor Front-End e estou no processo de formação em Back-End.</p>
            <p>Se consegui te prender até o final acho que mereço uma oportunidade sua, clique no botão abaixo para entrar em contato comigo, vamos nos conhecer!</p>
            <Link to="/contact"><button className="about-button py-2 px-4">contact me</button></Link>
          </div>
        </div>
      </motion.section>
    </motion.main>
  )
}

export default About;
