import React, { createContext, useState } from "react";

const PageContext = createContext();

export default PageContext;

export function PageProvider({ children }) {

  const [ newPageNum, setNewPageNum ] = useState(1);
  const [ prevPageNum, setPrevPageNum ] = useState(1);

  const pageVariantLeft = {
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
    
  }

  const outLeft = {
    opacity: 0,
    x: "-100vw",
    scale: 0.8,
  }

  const pageVariantRight = {
    initial: {
      opacity: 0,
      x: "100vw",
      scale: 0.8
    },
    in: {
      opacity: 1,
      x: 0,
      scale: 1
    },
  }

  const outRight = {
    opacity: 0,
    x: "100vw",
    scale: 0.8
  }

  const pageTransition = {
    type: "tween",
    ease: "linear",
    duration: 0.5
  }

  const mainPageAnimation = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  }

  const contextValue = {
    pageVariantLeft,
    outLeft,
    pageVariantRight,
    outRight,
    pageTransition,
    mainPageAnimation,
    newPageNum,
    setNewPageNum,
    prevPageNum,
    setPrevPageNum,
  }

  return(
    <PageContext.Provider value={ contextValue }>
      { children }
    </PageContext.Provider>
  )
}