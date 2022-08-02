import React from "react";
import { motion } from "framer-motion";
import Header from "../components/Header";
import '../style/About.css';

function About() {
  const pageTransition = {
    in: {
      opacity: 1,
      x: 0
    },
    out: {
      opacity: 0,
      x: "100vw"
    }
  }
  return(
    <main className="main-about-page">
      <Header />
      <motion.section
        variants={ pageTransition }
        exit="out"
        initial="out"
        animate="in"
        className="ms-5 ps-5 mt-5 pt-2"
      >
        <div className="ms-5 ps-5 mt-5">
          <h1 className="about-title">About Me</h1>
          <div className="ms-5 mt-4 about-text">
            <p>Olá nessa seção vou contar um pouco sobre a minha história</p>
            <p>Tudo começa no ano de 2003 quando nasci, tive uma infância muito boa e educação de qualidade, desde pequeno sempre fui um entusiasta do funcionamento das coisas, amava criar brinquedos, cenários, e afins. Além disso adorava jogar e mexer no computador, naquela época ainda não sabia que poderia juntar as duas coisas e se tornar minha profissão</p>
            <p>Saindo do ensino médio em 2020, eu tinha altas expectativas por sempre ter ganho prêmios e altas notas porém não tinha clareza do caminho que gostaria de seguir ainda. Prestei o enem no começo do outro ano e consegui passar em segundo lugar na UDESC pra Engenharia Mecânica seguindo minha paixão por criar coisas, um ano depois percebi que tinha esquecido da segunda parte que era é o computador, não estava feliz ali, mas a experiência foi valiosa, pois nesse ano sempre teve uma matéria que me chamava atenção, Programação para Engenharia.</p>
            <p>Após dois semestres, resolvi mudar o meu caminho, pausei o curso e embarquei em uma nova jornada, a Trybe. Hoje já sou um Desenvolvedor Front-End e estou no processo de formação em Back-End.</p>
            <p>Se consegui te prender até o final acho que mereço uma oportunidade sua, clique no botão abaixo para entrar em contato comigo, vamos nos conhecer!</p>
            <button className="about-button py-2 px-4">contact me</button>
          </div>
        </div>
      </motion.section>
    </main>
  )
}

export default About;
