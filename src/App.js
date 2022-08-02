import React from 'react';
import { AnimatePresence } from 'framer-motion'
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import './App.css';

function App() {
  const location = useLocation();
  return (
    <div >
      <AnimatePresence exitBeforeEnter>
        <Routes location={ location } key={ location.pathname }>
          <Route 
            path="/"
            element={ <Home /> }
          />
          <Route 
            path="/about"
            element={ <About /> }
          />
          <Route 
            path="/projects"
            element={ <Projects /> }
          />
          <Route 
            path="/contact"
            element={ <Contact /> }
          />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
