import React from "react";
import { Link } from "react-router-dom";

const ButtonMailto = ({mailto, label}) => {
  return(
    <Link 
    className="absolute z-10 right-0 text-2xl px-5 py-2"
    to="#" 
    onClick={(e) => {
        window.location.href = mailto;
        e.preventDefault()
    }}>
        <img src={label} alt="contact" />
    </Link>
  );
};

export default ButtonMailto;
