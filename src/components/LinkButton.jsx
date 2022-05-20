import React from "react";
import { Link } from "react-router-dom";


/**
 * Link params
 * @param {string} href a href= String
 * @param {string} src  img src= String
 * @param {string} alt  img alt= String
 * @param {boolean} draggable  img draggable= Bool
 * @param {string} children
 * @param {string} className  
 * @param {boolean} target a target= Bool
 * @param {boolean} externalLink a externalLink= Bool
 * @returns   a + children
 */
const LinkButton = ({href, src, alt, children, className, target, draggable, mailto, externalLink}) => {
  
  return(
    <Link 
      className={className}
      to={!mailto && !externalLink ? href : "#"} 

      onClick={mailto || externalLink ? ((e) =>  {
        e.preventDefault();
        target ? 
        window.open(externalLink ? href : mailto) : 
        window.location.href = externalLink ? href : mailto
    }) : ''}>
        {children}
        {src && <img src={src} alt={alt} draggable={draggable} />}
    </Link>
  );
};

export default LinkButton;
