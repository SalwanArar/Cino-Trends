import logo from '../../assets/images/logo.png';
import button from '../../assets/images/play-button.png';
import './Header.css';
import React, { useState, useRef } from "react";
// import React, { useState } from 'react';

function Header() {
    // const [expanded, setExpanded] = useState(false);
    
  const [expanded, setExpanded] = useState(false);
  const elementRef = useRef(null);

  const toggleExpand = () => {
    setExpanded(prevExpanded => !prevExpanded);
  };
    
    return (
        <header
        ref={elementRef}
        style={{ height: expanded ? '100vh' : '16rem' }}>
            <div className={`logo-conainer ${expanded ? 'expanded': ''}`}>
                <img src={logo} alt='Cino Trends Logo'/>
            </div>
            <nav className={`header-nav ${expanded ? 'expanded': ''}`}>
                <ol className={`header-links ${expanded ? 'expanded': ''}`}>
                    <li><a href='#heade'>HOME</a></li>
                    <li><a href='#portfolio'>OUR PORTFOLIO</a></li>
                    <li><a href='#3'>WHY US</a></li>
                    <li>
                        <input
                        type='image'
                        src={button}
                        alt='play button'
                        onClick={toggleExpand}/></li>
                    <li><a href='#4'>ABOUT US</a></li>
                    <li><a href='#5'>OUR SERVICES</a></li>
                    <li><a href='#6'>CONTACT</a></li>
                </ol>
            </nav>
        </header>
    );
}

export default Header;