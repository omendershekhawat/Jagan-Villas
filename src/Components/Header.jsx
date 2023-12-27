import React, { useState, useEffect } from 'react'
import './Header.css'
import logo from '../assets/icons/logo.png'
import { Link } from 'react-router-dom'
import menu from '../assets/icons/menu.png'

const Header = () => {

    const [scrolled, setScrolled] = useState(false);
    const [sideHeader, setSideHeader] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setScrolled(true);
                console.log("hello");
            } else {
                setScrolled(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (
        <>
            <header className={scrolled ? 'scrolled' : ''}>
                <div className="logo-cont">
                    <img src={logo} alt="Jagan Villas" />
                </div>

                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/About">About</Link></li>
                        <li><Link to="/ContactUs">Contact Us</Link></li>
                    </ul>
                </nav>
                <img src={menu} alt="menu" onClick={() => setSideHeader(!sideHeader)} />

            </header>
            {
                sideHeader &&
                <div className="sideheader">
                    <img src={logo} alt="Jagan Villas" />
                    <ul>
                        <li><Link to="/" onClick={()=>setSideHeader(false)} >Home</Link></li>
                        <li><Link to="/About"  onClick={()=>setSideHeader(false)}>About</Link></li>
                        <li><Link to="/ContactUs"  onClick={()=>setSideHeader(false)}>Contact Us</Link></li>
                    </ul>
                </div>
            }
        </>
    )
}

export default Header