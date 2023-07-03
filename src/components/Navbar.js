import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import ReorderIcon from '@mui/icons-material/Reorder';

import "../styles/Navbar.css"

function Navbar() {
    const [expandNavbar, setExpandNavbar] = useState(false);

    const location = useLocation();
    useEffect(() => {
        setExpandNavbar(false);
    }, [location]);
    return (
      <div className="navbar" id= {expandNavbar ? "open" : "close"} >
        <div className="logo">
            
        </div>
        <div className="toggleButton">
            <button 
                onClick={ () => {
                    setExpandNavbar((prev) => !prev)
                } } 
            >
                <ReorderIcon />
            </button>
        </div>
        <div className="links" >
            <Link to="/"  >Home</Link>
            <Link to="/projects" >Projects</Link>
            <Link to="/blog" >Blog</Link>
            <Link to="/contact" >Contact</Link>
        </div>    
      </div>
    );
  }
  
  export default Navbar;