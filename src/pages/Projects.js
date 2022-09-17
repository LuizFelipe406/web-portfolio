import React, { useContext } from "react";
import ProjectCard from "../components/ProjectCard";
import { motion } from "framer-motion";
import '../style/Projects.css';
import PageContext from "../context/pageContext";
import recipesImage from "../images/Recipes-App.png";
import walletImage from "../images/Trybe-Wallet.png";
import storeImage from "../images/Store-Manager.png";

function Projects() {
  const id = 3;
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

  const projectsData = [
    {
      projectName: 'Recipes App',
      paragraph1: `Um app de receitas, utilizando o que há de mais moderno dentro do ecossistema React: Hooks e Context API!`,
      paragraph2: `Nele é possível: ver, buscar, filtrar, favoritar e acompanhar o progresso de preparação de receitas e drinks!
      são utilizados 2 APIs distintas, uma para comidas e outra para bebidas.`,
      paragraph3: `O layout tem como foco dispositivos móveis, e possui responsividade para computadores.`,
      projectImage: recipesImage,
      projectLink: 'https://luizfelipe406.github.io/Recipes-App/#/',
      repoLink: 'https://github.com/LuizFelipe406/Recipes-App'
    },
    {
      projectName: 'Trybe Wallet',
      paragraph1: `Neste projeto foi desenvolvido uma carteira de controle de gastos com conversor de moedas,
      ao utilizar essa aplicação um usuário é capaz de:`,
      paragraph2: `Adicionar, remover e editar um gasto, 
      Visualizar uma tabelas com seus gastos, 
      Visualizar o total de gastos convertidos para uma moeda de escolha`,
      paragraph3: `Neste projeto foi preciso:
      criar e conectar o Redux aos componentes React e 
      criar actions assíncronas`,
      projectImage: walletImage,
      projectLink: 'https://luizfelipe406.github.io/trybewallet/#/',
      repoLink: 'https://github.com/LuizFelipe406/trybewallet',
    },
    {
      projectName: 'Store Manager',
      paragraph1: 'Projeto Back-end desenvolvido com Node.js e Express, alem de Chai, Mocha e Sinon para os testes de unidade',
      paragraph2: `A API construída é um sistema de gerenciamento de vendas no formato dropshipping em que será possível criar, visualizar,
      deletar e atualizar produtos e vendas. foi utilizado o banco de dados MySQL para a gestão de dados.`,
      paragraph3: 'Além disso, a API é RESTful e segue o modelo arquitetural MSC.',
      projectImage: storeImage,
      projectLink: 'https://github.com/LuizFelipe406/store-manager',
      repoLink: 'https://github.com/LuizFelipe406/store-manager'
    }
  ]

  return(
    <motion.main
      className="main-projects-page"
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
          <h1 className="projects-title mb-4">Projects</h1>
          <div className="projects-grid">
            {projectsData.map((project) => ProjectCard(project))}
          </div>
        </div>
      </motion.section>
    </motion.main>
  )
}

export default Projects;
