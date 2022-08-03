import React, { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import linkedin from '../images/linkedin-logo.png';
import github from '../images/github-icon-2.png';
import '../style/Header.css';
import PageContext from '../context/pageContext';

function Header() {
  const { pathname } = useLocation();
  const { setPrevPageNum, setNewPageNum } = useContext(PageContext);
  const navigate = useNavigate();

  const handleClick = ( nextPage, pageName ) => {
    if (pathname !== pageName) {
      switch (pathname) {
        case '/': setPrevPageNum(1); break;
        case '/about': setPrevPageNum(2); break;
        case '/projects': setPrevPageNum(3); break;
        default: setPrevPageNum(4);
      }
      setNewPageNum(nextPage);
      navigate(pageName);
    }
  }
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
          <button
            className="link-text"
            onClick={ () => handleClick(1, '/') }
            >
              home
            </button>
          <div className={ pathname === '/' ? "underline" : ""}/>
        </div>
        <div className={ pathname === '/about' ? "me-5 link-container" : "me-5"}>
          <button
            className="link-text"
            onClick={ () => handleClick(2, '/about') }
          >
            about
          </button>
          <div className={ pathname === '/about' ? "underline" : ""}/>
        </div>
        <div className={ pathname === '/projects' ? "me-5 link-container" : "me-5"}>
          <button
            className="link-text"
            onClick={ () => handleClick(3, '/projects') }
          >
            projects
          </button>
          <div className={ pathname === '/projects' ? "underline" : ""}/>
        </div>
        <div className={ pathname === '/contact' ? "me-5 link-container" : "me-5"}>
          <button
            className="link-text"
            onClick={ () => handleClick(4, '/contact') }
          >
              contact
          </button>
          <div className={ pathname === '/contact' ? "underline" : ""}/>
        </div>
      </nav>
    </header>
  )
}

export default Header;
