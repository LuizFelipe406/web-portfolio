import React, { useContext } from "react";
import PageContext from "../context/pageContext";
import { motion } from "framer-motion";
import '../style/Contact.css';

function Contact() {
  const { pageVariantRight, outRight, pageTransition, mainPageAnimation } = useContext(PageContext);
  
  return(
    <motion.main
      className="main-contact-page"
      variants={mainPageAnimation}
      initial="hidden"
      animate="show"
      exit="hidden"
    >
      <motion.section
        variants={ pageVariantRight }
        exit={ outRight }
        initial="initial"
        animate="in"
        transition={ pageTransition }
        className="ms-5 ps-5 pt-4 section"
      >
        <div className="ms-5 ps-5 mt-5 pt-4">
          <h1
          className="contact-title"
          >
            Contacts
          </h1>
          <p className="contact-text mt-5">
            Atualmente estou procurando por uma oportunidade para me desenvolver e aprender, você pode fazer parte da minha trajetória me encontrando em:
          </p>
          <a href="https://www.linkedin.com/in/luizfpereira406/" target="_blank" rel="noreferrer">
            <button className="linkedin-button button-style py-2 px-4 mt-5">Linkedin</button>
          </a>
          <a href="https://wa.me/5547988610942" target="_blank" rel="noreferrer">
            <button className="whatsapp-button button-style py-2 px-4 mt-5 ms-4">WhatsApp</button>
          </a>
          <button className="email-button button-style py-2 px-4 mt-5 ms-4">luizfpereira406@gmail.com</button>
        </div>
      </motion.section>
    </motion.main>
  )
}

export default Contact;
