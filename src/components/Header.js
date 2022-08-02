import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import linkedin from '../images/linkedin-logo.png';
import github from '../images/github-icon-2.png';
import '../style/Header.css';

function Header() {
  const { pathname } = useLocation();
  return(
    <header
      className="header-container"
    >
      <div className="header-content-container">
        <div className="title-container ms-5">
          <h1 className="fs-5 my-0">Luiz Felipe Pereira</h1>
          <h2 className="fs-6 my-0">Front-End Dev</h2>
        </div>
        <div className="ms-4">
          <a href="https://www.linkedin.com/in/luizfpereira406/" target="_blank" rel="noreferrer">
            <img src={ linkedin } alt='linkedin icon' width="43px"/>
          </a>
          <a href="https://github.com/LuizFelipe406" target="_blank" rel="noreferrer">
            <img src={ github } alt='github icon' width="33px"/>
          </a>
        </div>
      </div>
      <nav className="me-5 nav-container">
        <div className={ pathname === '/' ? "me-5 link-container" : "me-5"}>
          <Link className="link-text" to="/">home</Link>
          <div className={ pathname === '/' ? "underline" : ""}/>
        </div>
        <div className={ pathname === '/about' ? "me-5 link-container" : "me-5"}>
          <Link className="link-text" to="/about">about</Link>
          <div className={ pathname === '/about' ? "underline" : ""}/>
        </div>
        <div className={ pathname === '/projects' ? "me-5 link-container" : "me-5"}>
          <Link className="link-text" to="/projects">projects</Link>
          <div className={ pathname === '/projects' ? "underline" : ""}/>
        </div>
        <div className={ pathname === '/contact' ? "me-5 link-container" : "me-5"}>
          <Link className="link-text" to="/contact">contact</Link>
          <div className={ pathname === '/contact' ? "underline" : ""}/>
        </div>
      </nav>
    </header>
  )
}

export default Header;
