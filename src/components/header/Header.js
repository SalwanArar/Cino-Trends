import logo from '../../assets/images/logo.png';
import button from '../../assets/images/play-button.png';
import './Header.css';
import React, { useState, useRef } from "react";
import { Link } from 'react-router-dom';
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
                    <li><Link to='/'>HOME</Link></li>
                    <li><Link to='#portfolio'>OUR PORTFOLIO</Link></li>
                    <li><Link to='#3'>WHY US</Link></li>
                    <li>
                        <input
                        type='image'
                        src={button}
                        alt='play button'
                        onClick={toggleExpand}/></li>
                    <li><Link to='/aboutus'>ABOUT US</Link></li>
                    <li><Link to='#5'>OUR SERVICES</Link></li>
                    <li><Link to='#6'>CONTACT</Link></li>
                </ol>
            </nav>
        </header>
    );
}

export default Header;